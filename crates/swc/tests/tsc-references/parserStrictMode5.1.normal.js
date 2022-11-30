//// [parserStrictMode5.ts]
//! 
//!   x The left-hand side of an assignment expression must be a variable or a property access.
//!    ,-[1:1]
//!  1 | "use strict";
//!  2 | eval += 1;
//!    : ^^^^
//!    `----
//! 
//!   x Invalid use of 'arguments' in strict mode
//!    ,-[1:1]
//!  1 | "use strict";
//!  2 | eval += 1;
//!    : ^^^^
//!    `----
