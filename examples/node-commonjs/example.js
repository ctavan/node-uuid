const uuidv1 = require('uuid/v1');
console.log('uuidv1', uuidv1());

const uuidv4 = require('uuid/v4');
console.log('uuidv4', uuidv4());

const uuidv3 = require('uuid/v3');

// ... using predefined DNS namespace (for domain names)
console.log('v3 DNS', uuidv3('hello.example.com', uuidv3.DNS));

// ... using predefined URL namespace (for, well, URLs)
console.log('v3 URL', uuidv3('http://example.com/hello', uuidv3.URL));

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
const MY_NAMESPACE = '55238d15-c926-4598-b49d-cf4e913ba13c';
console.log('v3 MY_NAMESPACE', uuidv3('Hello, World!', MY_NAMESPACE));

const uuidv5 = require('uuid/v5');

// ... using predefined DNS namespace (for domain names)
console.log('v5 DNS', uuidv5('hello.example.com', uuidv5.DNS));

// ... using predefined URL namespace (for, well, URLs)
console.log('v5 URL', uuidv5('http://example.com/hello', uuidv5.URL));

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
// const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
console.log('v5 MY_NAMESPACE', uuidv5('Hello, World!', MY_NAMESPACE));


console.log('Same with default export');

const uuid = require('uuid');
console.log('uuid.v1()', uuid.v1());

console.log('uuid.v4()', uuid.v4());

// ... using predefined DNS namespace (for domain names)
console.log('v3 DNS', uuid.v3('hello.example.com', uuid.v3.DNS));

// ... using predefined URL namespace (for, well, URLs)
console.log('v3 URL', uuid.v3('http://example.com/hello', uuid.v3.URL));

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
console.log('v3 MY_NAMESPACE', uuid.v3('Hello, World!', MY_NAMESPACE));

// ... using predefined DNS namespace (for domain names)
console.log('v5 DNS', uuid.v5('hello.example.com', uuid.v5.DNS));

// ... using predefined URL namespace (for, well, URLs)
console.log('v5 URL', uuid.v5('http://example.com/hello', uuid.v5.URL));

// ... using a custom namespace
//
// Note: Custom namespaces should be a UUID string specific to your application!
// E.g. the one here was generated using this modules `uuid` CLI.
// const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
console.log('v5 MY_NAMESPACE', uuid.v5('Hello, World!', MY_NAMESPACE));
