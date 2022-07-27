import type { NextApiRequest, NextApiResponse } from "next";
import cors from "cors";
import middleware from "../../utils/middleware";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../firebaseConfig";

// Data can be seen at: http://localhost:3000/api/firebaseExample

// This here is Reference to the firestore db
// collection called 'example', its not the data yet, just a reference.  
const exampleRef = collection(db, "example");

const Cors = cors({
  methods: ["GET", "HEAD"],
});

const firebaseExample = async (_req: NextApiRequest, res: NextApiResponse) => {
  await middleware(_req, res, Cors); 

  // Now we fetch all the documents inside 
  // the previous reference we created before
  const exampleDocsSnapshot = await getDocs(exampleRef);

  if(!exampleDocsSnapshot.empty) {
    const results = []; 
    // The data needs to filtered out a bit, so we go through each 
    // object in the array and return just the data
    exampleDocsSnapshot.forEach((doc) => {
      results.push(doc.data()); 
    });
    return res.status(200).json(results);
  }
  return res.status(200).json({"error": "Colleciton is empty!"});
};

export default firebaseExample; 