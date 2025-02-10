The solution uses async/await to ensure data is loaded before accessing it:

```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

async function getData(docId) {
  try {
    const docRef = doc(db, "yourCollection", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    return null;
  }
}

getData("yourDocId").then(data => {
  // Process data safely
  if (data) {
    console.log(data.name); // Access properties here
  }
});
```
This approach gracefully handles potential errors and avoids accessing data before it exists.