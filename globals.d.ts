import { SetStateAction } from "react";

declare global{
    type setBoolean = Dispatch<SetStateAction<boolean>>
}