# MULTER UPLOAD METHODS

## Methods
* no file (text only) - upload.none()
* single file - upload.single()
* multiple files, single input - upload.array (fieldname[ , maxCount ])
* multiples files, multiple inputs - upload.fields (fields) where fields is an
array of objects with name and optionally maxCount keys
* any of the above - upload.any () (avoid if possible)

