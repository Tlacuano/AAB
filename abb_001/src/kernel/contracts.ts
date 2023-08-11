export interface UseCase<Tinput,Touput>{
    execute(input?: Tinput): Promise<Touput>;
}