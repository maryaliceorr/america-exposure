import firebase from 'firebase';

const registerVisitor = (visitor) => {
  return firebase.auth().createUserWithEmailAndPassword(visitor.email, visitor.password);
}

const loginVisitor = (visitor) => {
  return firebase.auth().signInWithEmailAndPassword(visitor.email, visitor.password);
}

const logoutVisitor = () => {
  return firebase.auth().signOut();
};

const getUID = () => {
  return firebase.auth().currentUser.uid;
}

export default {registerVisitor, loginVisitor, logoutVisitor, getUID};
