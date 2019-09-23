import {v1 as uuidv1, v4 as uuidv4, v3 as uuidv3, v5 as uuidv5} from 'uuid/esm-node/index.mjs';

console.log('uuidv1', uuidv1());

console.log('uuidv4', uuidv4());


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
