import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


const getItems = async (userId) => {
    try {
        const collectionRef = collection(db, "users", userId, "items");
        const querySnapshot = await getDocs(collectionRef);
        const data = querySnapshot.docs.map((itemDoc) => ({
            id: itemDoc.id,
            ...itemDoc.data()
        }));
        return data;
    } catch (error) {
        console.log(error);
    }
};

const addItem = async (userId, item) => {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item)
        console.log(docRef)
    } catch (error) {
        console.log(error)
    }
}



export {getItems, addItem,createItem}