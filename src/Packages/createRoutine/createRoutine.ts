export const createRoutine =
    <T = any, S = T, E = T, P = T, F = T>
    (actionName
         :
         string
    ) => {

        const SUCCESS = actionName + '/SUCCESS';
        const TRIGGER = actionName + '/TRIGGER';
        const PENDING = actionName + '/PENDING';
        const ERROR = actionName + '/ERROR';
        const FULFILLED = actionName + '/FULFILLED';

        const success = (payload: S) => ({
            type: SUCCESS,
            payload,
        });

        const fulfilled = (payload: F) => ({
            type: FULFILLED,
            payload,
        });

        const pending = (payload: P) => ({
            type: PENDING,
            payload,
        });

        const error = (payload: E) => ({
            type: ERROR,
            payload,
        });

        const action = (payload: T) => ({
            type: TRIGGER,
            payload,
        });

        action.SUCCESS = SUCCESS;
        action.TRIGGER = TRIGGER;
        action.PENDING = PENDING;
        action.ERROR = ERROR;
        action.FULFILLED = FULFILLED;

        action.success = success;
        action.error = error;
        action.pending = pending;
        action.fulfilled = fulfilled;

        return action;
    }