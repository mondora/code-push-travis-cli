import chai from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";

// Setup sinon and chai
global.sinon = sinon;
chai.use(sinonChai);
global.expect = chai.expect;
