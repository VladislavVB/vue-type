import TypeNullUndefined from '../defautTypes/TypeNullUndefined'

interface CurrentUserInterfase {
  isLoading: boolean
  isSubmitng: boolean
  curruntUser: object | null
  validationErrors: TypeNullUndefined 
  isLoggedIn: boolean
}
export default CurrentUserInterfase
