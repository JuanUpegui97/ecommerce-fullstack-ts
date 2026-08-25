import upload from "../config/multer.js";

export const uploadImagen = upload.single("imagen");