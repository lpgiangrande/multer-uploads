```javascript
npm install multer express
```

his script creates an express server and sets up different endpoints to test each of the upload functions in the Multer library. The /single endpoint tests the upload.single() function, the /multiple endpoint tests the upload.array() function, the /mixed endpoint tests the upload.fields() function, the /custom endpoint tests a custom file filter, and the /storage endpoint tests a custom storage engine.

# MULTER UPLOAD METHODS

## Methods

- no file (text only) - upload.none()
- single file - upload.single()
- multiple files, single input - upload.array (fieldname[ , maxCount ])
- multiples files, multiple inputs - upload.fields (fields) where fields is an
  array of objects with name and optionally maxCount keys
- any of the above - upload.any () (avoid if possible)
