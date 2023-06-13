
import { createAction, props } from '@ngrx/store';

export const addImage = createAction(
    '[Image] Add Image',
    props<{ image: { url: string; name: string } }>()
);