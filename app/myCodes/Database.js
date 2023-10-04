import { collection, doc, setDoc, getDocs, getDoc, updateDoc, arrayUnion, arrayRemove, deleteField } from "firebase/firestore";
import { DATABASE } from '../../Firebase'


export async function addToDatabase(collection, Doc, field, data) {

    await setDoc(doc(DATABASE, collection, Doc), {
        [field]: data,
    }, { merge: true });

}

export async function updateDatabaseItem(collection, Doc, Field, Value) {
    await updateDoc(doc(DATABASE, collection, Doc), {
        [Field]: Value ? Value : deleteField()
    });
}

export async function updateArrayDatabaseItem(collection, Doc, Field, Value, remove) {
    await updateDoc(doc(DATABASE, collection, Doc), {
        [Field]: !remove ? arrayUnion(Value) : arrayRemove(Value)
    });
}

export async function fetchDocument(collection, document, setterfunction) {
    const docRef = doc(DATABASE, collection, document ? document : '');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
       if(setterfunction) setterfunction(docSnap.data());
       return docSnap.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}