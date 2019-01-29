
import { PlayerInput } from "../PlayerInput";
import { IProjectCard } from "../cards/IProjectCard";

export class OrOptions implements PlayerInput {
    public card?: IProjectCard;
    public cb: () => void;
    public message: string;
    public title: string = "Select one option";
    public options: Array<PlayerInput>;
    constructor(
        ...options: Array<PlayerInput>
    ) {
        this.options = options;
        this.message = options[0].message;
        this.cb = function() {};
    } 
}
