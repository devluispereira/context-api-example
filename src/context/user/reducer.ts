import { produce } from "immer";
type ActionType = {
  type: string;
  payload: object;
};
type UserType = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};
const reducer: React.Reducer<UserType, ActionType> = (
  state: UserType,
  action: ActionType
) => {
  switch (action.type) {
    case "@auth/LOGIN_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case Types.SIGN_IN_REQUEST:
      return produce(state, (draft) => {});
    case "@auth/LOGIN_ERROR":
      return produce(state, (draft) => {
        draft.loading = false;
      });

    default:
      throw new Error();
  }
};

export default reducer;
