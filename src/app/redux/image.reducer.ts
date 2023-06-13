import { createReducer, on, Action } from '@ngrx/store';
import { addImage } from '../redux/image.actions';

export interface ImageState {
    images: { url: string; name: string }[];
  }

export const initialState: ImageState = {
  images: []
};

const _imageReducer = createReducer(
  initialState,
  on(addImage, (state, { image }) => {
    return {
      ...state,
      images: [...state.images, image]
    };
  })
);

export function imageReducer(state: ImageState | undefined, action: Action) {
  return _imageReducer(state, action);
}
