import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { savingNewNote } from './journalSlice'

import { FirebaseDB } from '../../firebase/config'

export const startNewNote = () => {
    return async (dispatch, getState) => {
       

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }


        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);


        newNote.id = newDoc.id;

        console.log(newNote)

        //! dispatch
        // dispatch( addNewEmptyNote( newNote ) );
        //dispatch( setActiveNote( newNote ) );

        //!dispatch 
        //dispatch (newNote)
        //dispatch(activeNote)

    }
}