export interface CartState {
  booksInCart: any;
}

export interface Preferences {
  notificationChannel: 'text' | 'email';
}
export interface State {
  cart: CartState;
  preferences: Preferences;
}
