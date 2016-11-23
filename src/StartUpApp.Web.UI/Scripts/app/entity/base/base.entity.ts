export class EntityBase {
    public Id: number;
    public AddedDate: Date;
    public ModifiedDate: Date;
    public IsDeleted: boolean;
    public get IsNewEntity(): boolean {
        return this.Id == 0;
    }
}