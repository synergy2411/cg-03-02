import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as fromActions from './counter.action';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../model/todo.model';

@Injectable({
    providedIn: "root"
})
export class CounterEffects {

    constructor(private actions$: Actions, private http: HttpClient) { }

    @Effect({ dispatch: false })
    logEffect$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.INIT),
        map(action => {
            // Make Server call or make non-pure things or make side effects here
            console.log("[ACTION]", action);
            return new fromActions.Init();
        })
    )

    changeEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(fromActions.ADD_NUMBER),
        mergeMap(action => {
            return this.http.get("/api/todos")
                .pipe(map((todos: ITodo[]) => {
                    let data = todos.length;
                    console.log("[DATA LENGTH]", data, todos)
                    return new fromActions.SubtractNumber(data)
                }))
        })
    ))

}