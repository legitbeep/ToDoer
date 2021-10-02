export type TaskType = {
    id : string;
    title : string;
    description : string | undefined;
    status : string ;
    image : string | undefined;
    tags : {
        color : string;
        text : string;
    }[] | undefined;
};

export type TaskContextType = {
    tasks: TaskType[];
    addTask: (task: TaskType) => void;
    deleteTask: (id: string) => void;
}

export type Reducer<State, Action> = (state:State, action: Action) => State ;