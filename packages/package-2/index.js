import { foo } from "@jibees/package1";
import { bar } from "@jibees/package1";
import Package1 from "@jibees/package1";

// Cannot find module '@jibees/package1/foo'
// import foo2 from "@jibees/package1/foo";

import foo3 from "@jibees/package1/src/foo";

console.log("✅ ", Package1);
console.log("✅  ", foo);
console.log("✅  ", bar);
// console.log("❌ ", foo2);

console.log("✅  ", foo3);
