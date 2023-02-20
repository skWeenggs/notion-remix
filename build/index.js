var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var __publicField = (obj, key, value) => (__defNormalProp(obj, typeof key != "symbol" ? key + "" : key, value), value), __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
}, __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/iweenggs/Documents/GitHub/remix-notion-starter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-K76EE5YM.css";

// node_modules/react-notion-x/src/styles.css
var styles_default = "/build/_assets/styles-PDNFWKCS.css";

// app/styles/notion.css
var notion_default = "/build/_assets/notion-QBAGPAV6.css";

// route:/Users/iweenggs/Documents/GitHub/remix-notion-starter/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: styles_default },
  { rel: "stylesheet", href: notion_default }
], meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/Users/iweenggs/Documents/GitHub/remix-notion-starter/app/routes/$pageId.tsx
var pageId_exports = {};
__export(pageId_exports, {
  default: () => NotionDynamicPage,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/components/NotionPage.tsx
var React55 = __toESM(require("react"));

// node_modules/react-notion-x/build/index.js
var React29 = __toESM(require("react"), 1), import_medium_zoom = __toESM(require("@fisch0920/medium-zoom"), 1), React28 = __toESM(require("react"), 1);

// node_modules/p-queue/dist/index.js
var import_eventemitter3 = __toESM(require("eventemitter3"), 1);

// node_modules/p-timeout/index.js
var TimeoutError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "TimeoutError";
  }
}, AbortError = class extends Error {
  constructor(message) {
    super();
    this.name = "AbortError", this.message = message;
  }
}, getDOMException = (errorMessage) => globalThis.DOMException === void 0 ? new AbortError(errorMessage) : new DOMException(errorMessage), getAbortedReason = (signal) => {
  let reason = signal.reason === void 0 ? getDOMException("This operation was aborted.") : signal.reason;
  return reason instanceof Error ? reason : getDOMException(reason);
};
function pTimeout(promise, milliseconds, fallback, options) {
  let timer, cancelablePromise = new Promise((resolve, reject) => {
    if (typeof milliseconds != "number" || Math.sign(milliseconds) !== 1)
      throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${milliseconds}\``);
    if (milliseconds === Number.POSITIVE_INFINITY) {
      resolve(promise);
      return;
    }
    if (options = __spreadValues({
      customTimers: { setTimeout, clearTimeout }
    }, options), options.signal) {
      let { signal } = options;
      signal.aborted && reject(getAbortedReason(signal)), signal.addEventListener("abort", () => {
        reject(getAbortedReason(signal));
      });
    }
    timer = options.customTimers.setTimeout.call(void 0, () => {
      if (typeof fallback == "function") {
        try {
          resolve(fallback());
        } catch (error) {
          reject(error);
        }
        return;
      }
      let message = typeof fallback == "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`, timeoutError2 = fallback instanceof Error ? fallback : new TimeoutError(message);
      typeof promise.cancel == "function" && promise.cancel(), reject(timeoutError2);
    }, milliseconds), (async () => {
      try {
        resolve(await promise);
      } catch (error) {
        reject(error);
      } finally {
        options.customTimers.clearTimeout.call(void 0, timer);
      }
    })();
  });
  return cancelablePromise.clear = () => {
    clearTimeout(timer), timer = void 0;
  }, cancelablePromise;
}

// node_modules/p-queue/dist/lower-bound.js
function lowerBound(array, value, comparator) {
  let first = 0, count = array.length;
  for (; count > 0; ) {
    let step = Math.trunc(count / 2), it = first + step;
    comparator(array[it], value) <= 0 ? (first = ++it, count -= step + 1) : count = step;
  }
  return first;
}

// node_modules/p-queue/dist/priority-queue.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state == "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}, _PriorityQueue_queue, PriorityQueue = class {
  constructor() {
    _PriorityQueue_queue.set(this, []);
  }
  enqueue(run, options) {
    options = __spreadValues({
      priority: 0
    }, options);
    let element = {
      priority: options.priority,
      run
    };
    if (this.size && __classPrivateFieldGet(this, _PriorityQueue_queue, "f")[this.size - 1].priority >= options.priority) {
      __classPrivateFieldGet(this, _PriorityQueue_queue, "f").push(element);
      return;
    }
    let index = lowerBound(__classPrivateFieldGet(this, _PriorityQueue_queue, "f"), element, (a, b) => b.priority - a.priority);
    __classPrivateFieldGet(this, _PriorityQueue_queue, "f").splice(index, 0, element);
  }
  dequeue() {
    let item = __classPrivateFieldGet(this, _PriorityQueue_queue, "f").shift();
    return item == null ? void 0 : item.run;
  }
  filter(options) {
    return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").filter((element) => element.priority === options.priority).map((element) => element.run);
  }
  get size() {
    return __classPrivateFieldGet(this, _PriorityQueue_queue, "f").length;
  }
};
_PriorityQueue_queue = /* @__PURE__ */ new WeakMap();

// node_modules/p-queue/dist/index.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state == "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}, __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state == "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}, _PQueue_instances, _PQueue_carryoverConcurrencyCount, _PQueue_isIntervalIgnored, _PQueue_intervalCount, _PQueue_intervalCap, _PQueue_interval, _PQueue_intervalEnd, _PQueue_intervalId, _PQueue_timeoutId, _PQueue_queue, _PQueue_queueClass, _PQueue_pendingCount, _PQueue_concurrency, _PQueue_isPaused, _PQueue_resolveEmpty, _PQueue_resolveIdle, _PQueue_timeout, _PQueue_throwOnTimeout, _PQueue_doesIntervalAllowAnother_get, _PQueue_doesConcurrentAllowAnother_get, _PQueue_next, _PQueue_resolvePromises, _PQueue_onResumeInterval, _PQueue_isIntervalPaused, _PQueue_tryToStartAnother, _PQueue_initializeIntervalIfNeeded, _PQueue_onInterval, _PQueue_processQueue, empty = () => {
}, timeoutError = new TimeoutError(), AbortError2 = class extends Error {
}, PQueue = class extends import_eventemitter3.default {
  constructor(options) {
    var _a, _b, _c, _d;
    super();
    if (_PQueue_instances.add(this), _PQueue_carryoverConcurrencyCount.set(this, void 0), _PQueue_isIntervalIgnored.set(this, void 0), _PQueue_intervalCount.set(this, 0), _PQueue_intervalCap.set(this, void 0), _PQueue_interval.set(this, void 0), _PQueue_intervalEnd.set(this, 0), _PQueue_intervalId.set(this, void 0), _PQueue_timeoutId.set(this, void 0), _PQueue_queue.set(this, void 0), _PQueue_queueClass.set(this, void 0), _PQueue_pendingCount.set(this, 0), _PQueue_concurrency.set(this, void 0), _PQueue_isPaused.set(this, void 0), _PQueue_resolveEmpty.set(this, empty), _PQueue_resolveIdle.set(this, empty), _PQueue_timeout.set(this, void 0), _PQueue_throwOnTimeout.set(this, void 0), options = __spreadValues({
      carryoverConcurrencyCount: !1,
      intervalCap: Number.POSITIVE_INFINITY,
      interval: 0,
      concurrency: Number.POSITIVE_INFINITY,
      autoStart: !0,
      queueClass: PriorityQueue
    }, options), !(typeof options.intervalCap == "number" && options.intervalCap >= 1))
      throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
    if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0))
      throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
    __classPrivateFieldSet(this, _PQueue_carryoverConcurrencyCount, options.carryoverConcurrencyCount, "f"), __classPrivateFieldSet(this, _PQueue_isIntervalIgnored, options.intervalCap === Number.POSITIVE_INFINITY || options.interval === 0, "f"), __classPrivateFieldSet(this, _PQueue_intervalCap, options.intervalCap, "f"), __classPrivateFieldSet(this, _PQueue_interval, options.interval, "f"), __classPrivateFieldSet(this, _PQueue_queue, new options.queueClass(), "f"), __classPrivateFieldSet(this, _PQueue_queueClass, options.queueClass, "f"), this.concurrency = options.concurrency, __classPrivateFieldSet(this, _PQueue_timeout, options.timeout, "f"), __classPrivateFieldSet(this, _PQueue_throwOnTimeout, options.throwOnTimeout === !0, "f"), __classPrivateFieldSet(this, _PQueue_isPaused, options.autoStart === !1, "f");
  }
  get concurrency() {
    return __classPrivateFieldGet2(this, _PQueue_concurrency, "f");
  }
  set concurrency(newConcurrency) {
    if (!(typeof newConcurrency == "number" && newConcurrency >= 1))
      throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
    __classPrivateFieldSet(this, _PQueue_concurrency, newConcurrency, "f"), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
  }
  async add(fn, options = {}) {
    return new Promise((resolve, reject) => {
      let run = async () => {
        var _a, _b, _c;
        __classPrivateFieldSet(this, _PQueue_pendingCount, (_b = __classPrivateFieldGet2(this, _PQueue_pendingCount, "f"), _b++, _b), "f"), __classPrivateFieldSet(this, _PQueue_intervalCount, (_c = __classPrivateFieldGet2(this, _PQueue_intervalCount, "f"), _c++, _c), "f");
        try {
          if ((_a = options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
            reject(new AbortError2("The task was aborted."));
            return;
          }
          let result = await (__classPrivateFieldGet2(this, _PQueue_timeout, "f") === void 0 && options.timeout === void 0 ? fn({ signal: options.signal }) : pTimeout(Promise.resolve(fn({ signal: options.signal })), options.timeout === void 0 ? __classPrivateFieldGet2(this, _PQueue_timeout, "f") : options.timeout, () => {
            (options.throwOnTimeout === void 0 ? __classPrivateFieldGet2(this, _PQueue_throwOnTimeout, "f") : options.throwOnTimeout) && reject(timeoutError);
          }));
          resolve(result), this.emit("completed", result);
        } catch (error) {
          reject(error), this.emit("error", error);
        }
        __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_next).call(this);
      };
      __classPrivateFieldGet2(this, _PQueue_queue, "f").enqueue(run, options), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this), this.emit("add");
    });
  }
  async addAll(functions, options) {
    return Promise.all(functions.map(async (function_) => this.add(function_, options)));
  }
  start() {
    return __classPrivateFieldGet2(this, _PQueue_isPaused, "f") ? (__classPrivateFieldSet(this, _PQueue_isPaused, !1, "f"), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_processQueue).call(this), this) : this;
  }
  pause() {
    __classPrivateFieldSet(this, _PQueue_isPaused, !0, "f");
  }
  clear() {
    __classPrivateFieldSet(this, _PQueue_queue, new (__classPrivateFieldGet2(this, _PQueue_queueClass, "f"))(), "f");
  }
  async onEmpty() {
    if (__classPrivateFieldGet2(this, _PQueue_queue, "f").size !== 0)
      return new Promise((resolve) => {
        let existingResolve = __classPrivateFieldGet2(this, _PQueue_resolveEmpty, "f");
        __classPrivateFieldSet(this, _PQueue_resolveEmpty, () => {
          existingResolve(), resolve();
        }, "f");
      });
  }
  async onSizeLessThan(limit) {
    if (!(__classPrivateFieldGet2(this, _PQueue_queue, "f").size < limit))
      return new Promise((resolve) => {
        let listener = () => {
          __classPrivateFieldGet2(this, _PQueue_queue, "f").size < limit && (this.removeListener("next", listener), resolve());
        };
        this.on("next", listener);
      });
  }
  async onIdle() {
    if (!(__classPrivateFieldGet2(this, _PQueue_pendingCount, "f") === 0 && __classPrivateFieldGet2(this, _PQueue_queue, "f").size === 0))
      return new Promise((resolve) => {
        let existingResolve = __classPrivateFieldGet2(this, _PQueue_resolveIdle, "f");
        __classPrivateFieldSet(this, _PQueue_resolveIdle, () => {
          existingResolve(), resolve();
        }, "f");
      });
  }
  get size() {
    return __classPrivateFieldGet2(this, _PQueue_queue, "f").size;
  }
  sizeBy(options) {
    return __classPrivateFieldGet2(this, _PQueue_queue, "f").filter(options).length;
  }
  get pending() {
    return __classPrivateFieldGet2(this, _PQueue_pendingCount, "f");
  }
  get isPaused() {
    return __classPrivateFieldGet2(this, _PQueue_isPaused, "f");
  }
  get timeout() {
    return __classPrivateFieldGet2(this, _PQueue_timeout, "f");
  }
  set timeout(milliseconds) {
    __classPrivateFieldSet(this, _PQueue_timeout, milliseconds, "f");
  }
};
_PQueue_carryoverConcurrencyCount = /* @__PURE__ */ new WeakMap(), _PQueue_isIntervalIgnored = /* @__PURE__ */ new WeakMap(), _PQueue_intervalCount = /* @__PURE__ */ new WeakMap(), _PQueue_intervalCap = /* @__PURE__ */ new WeakMap(), _PQueue_interval = /* @__PURE__ */ new WeakMap(), _PQueue_intervalEnd = /* @__PURE__ */ new WeakMap(), _PQueue_intervalId = /* @__PURE__ */ new WeakMap(), _PQueue_timeoutId = /* @__PURE__ */ new WeakMap(), _PQueue_queue = /* @__PURE__ */ new WeakMap(), _PQueue_queueClass = /* @__PURE__ */ new WeakMap(), _PQueue_pendingCount = /* @__PURE__ */ new WeakMap(), _PQueue_concurrency = /* @__PURE__ */ new WeakMap(), _PQueue_isPaused = /* @__PURE__ */ new WeakMap(), _PQueue_resolveEmpty = /* @__PURE__ */ new WeakMap(), _PQueue_resolveIdle = /* @__PURE__ */ new WeakMap(), _PQueue_timeout = /* @__PURE__ */ new WeakMap(), _PQueue_throwOnTimeout = /* @__PURE__ */ new WeakMap(), _PQueue_instances = /* @__PURE__ */ new WeakSet(), _PQueue_doesIntervalAllowAnother_get = function() {
  return __classPrivateFieldGet2(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet2(this, _PQueue_intervalCount, "f") < __classPrivateFieldGet2(this, _PQueue_intervalCap, "f");
}, _PQueue_doesConcurrentAllowAnother_get = function() {
  return __classPrivateFieldGet2(this, _PQueue_pendingCount, "f") < __classPrivateFieldGet2(this, _PQueue_concurrency, "f");
}, _PQueue_next = function() {
  var _a;
  __classPrivateFieldSet(this, _PQueue_pendingCount, (_a = __classPrivateFieldGet2(this, _PQueue_pendingCount, "f"), _a--, _a), "f"), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this), this.emit("next");
}, _PQueue_resolvePromises = function() {
  __classPrivateFieldGet2(this, _PQueue_resolveEmpty, "f").call(this), __classPrivateFieldSet(this, _PQueue_resolveEmpty, empty, "f"), __classPrivateFieldGet2(this, _PQueue_pendingCount, "f") === 0 && (__classPrivateFieldGet2(this, _PQueue_resolveIdle, "f").call(this), __classPrivateFieldSet(this, _PQueue_resolveIdle, empty, "f"), this.emit("idle"));
}, _PQueue_onResumeInterval = function() {
  __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onInterval).call(this), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this), __classPrivateFieldSet(this, _PQueue_timeoutId, void 0, "f");
}, _PQueue_isIntervalPaused = function() {
  let now = Date.now();
  if (__classPrivateFieldGet2(this, _PQueue_intervalId, "f") === void 0) {
    let delay = __classPrivateFieldGet2(this, _PQueue_intervalEnd, "f") - now;
    if (delay < 0)
      __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet2(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet2(this, _PQueue_pendingCount, "f") : 0, "f");
    else
      return __classPrivateFieldGet2(this, _PQueue_timeoutId, "f") === void 0 && __classPrivateFieldSet(this, _PQueue_timeoutId, setTimeout(() => {
        __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onResumeInterval).call(this);
      }, delay), "f"), !0;
  }
  return !1;
}, _PQueue_tryToStartAnother = function() {
  if (__classPrivateFieldGet2(this, _PQueue_queue, "f").size === 0)
    return __classPrivateFieldGet2(this, _PQueue_intervalId, "f") && clearInterval(__classPrivateFieldGet2(this, _PQueue_intervalId, "f")), __classPrivateFieldSet(this, _PQueue_intervalId, void 0, "f"), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_resolvePromises).call(this), !1;
  if (!__classPrivateFieldGet2(this, _PQueue_isPaused, "f")) {
    let canInitializeInterval = !__classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_isIntervalPaused).call(this);
    if (__classPrivateFieldGet2(this, _PQueue_instances, "a", _PQueue_doesIntervalAllowAnother_get) && __classPrivateFieldGet2(this, _PQueue_instances, "a", _PQueue_doesConcurrentAllowAnother_get)) {
      let job = __classPrivateFieldGet2(this, _PQueue_queue, "f").dequeue();
      return job ? (this.emit("active"), job(), canInitializeInterval && __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_initializeIntervalIfNeeded).call(this), !0) : !1;
    }
  }
  return !1;
}, _PQueue_initializeIntervalIfNeeded = function() {
  __classPrivateFieldGet2(this, _PQueue_isIntervalIgnored, "f") || __classPrivateFieldGet2(this, _PQueue_intervalId, "f") !== void 0 || (__classPrivateFieldSet(this, _PQueue_intervalId, setInterval(() => {
    __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_onInterval).call(this);
  }, __classPrivateFieldGet2(this, _PQueue_interval, "f")), "f"), __classPrivateFieldSet(this, _PQueue_intervalEnd, Date.now() + __classPrivateFieldGet2(this, _PQueue_interval, "f"), "f"));
}, _PQueue_onInterval = function() {
  __classPrivateFieldGet2(this, _PQueue_intervalCount, "f") === 0 && __classPrivateFieldGet2(this, _PQueue_pendingCount, "f") === 0 && __classPrivateFieldGet2(this, _PQueue_intervalId, "f") && (clearInterval(__classPrivateFieldGet2(this, _PQueue_intervalId, "f")), __classPrivateFieldSet(this, _PQueue_intervalId, void 0, "f")), __classPrivateFieldSet(this, _PQueue_intervalCount, __classPrivateFieldGet2(this, _PQueue_carryoverConcurrencyCount, "f") ? __classPrivateFieldGet2(this, _PQueue_pendingCount, "f") : 0, "f"), __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_processQueue).call(this);
}, _PQueue_processQueue = function() {
  for (; __classPrivateFieldGet2(this, _PQueue_instances, "m", _PQueue_tryToStartAnother).call(this); )
    ;
};

// node_modules/is-url-superb/index.js
function isUrl(string, { lenient = !1 } = {}) {
  if (typeof string != "string")
    throw new TypeError("Expected a string");
  if (string = string.trim(), string.includes(" "))
    return !1;
  try {
    return new URL(string), !0;
  } catch {
    return lenient ? isUrl(`https://${string}`) : !1;
  }
}

// node_modules/normalize-url/index.js
var DATA_URL_DEFAULT_MIME_TYPE = "text/plain", DATA_URL_DEFAULT_CHARSET = "us-ascii", testParameter = (name, filters) => filters.some((filter) => filter instanceof RegExp ? filter.test(name) : filter === name), normalizeDataURL = (urlString, { stripHash }) => {
  let match = /^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(urlString);
  if (!match)
    throw new Error(`Invalid URL: ${urlString}`);
  let { type, data, hash } = match.groups, mediaType = type.split(";");
  hash = stripHash ? "" : hash;
  let isBase64 = !1;
  mediaType[mediaType.length - 1] === "base64" && (mediaType.pop(), isBase64 = !0);
  let mimeType = (mediaType.shift() || "").toLowerCase(), normalizedMediaType = [
    ...mediaType.map((attribute) => {
      let [key, value = ""] = attribute.split("=").map((string) => string.trim());
      return key === "charset" && (value = value.toLowerCase(), value === DATA_URL_DEFAULT_CHARSET) ? "" : `${key}${value ? `=${value}` : ""}`;
    }).filter(Boolean)
  ];
  return isBase64 && normalizedMediaType.push("base64"), (normalizedMediaType.length > 0 || mimeType && mimeType !== DATA_URL_DEFAULT_MIME_TYPE) && normalizedMediaType.unshift(mimeType), `data:${normalizedMediaType.join(";")},${isBase64 ? data.trim() : data}${hash ? `#${hash}` : ""}`;
};
function normalizeUrl(urlString, options) {
  if (options = __spreadValues({
    defaultProtocol: "http:",
    normalizeProtocol: !0,
    forceHttp: !1,
    forceHttps: !1,
    stripAuthentication: !0,
    stripHash: !1,
    stripTextFragment: !0,
    stripWWW: !0,
    removeQueryParameters: [/^utm_\w+/i],
    removeTrailingSlash: !0,
    removeSingleSlash: !0,
    removeDirectoryIndex: !1,
    sortQueryParameters: !0
  }, options), urlString = urlString.trim(), /^data:/i.test(urlString))
    return normalizeDataURL(urlString, options);
  if (/^view-source:/i.test(urlString))
    throw new Error("`view-source:` is not supported as it is a non-standard protocol");
  let hasRelativeProtocol = urlString.startsWith("//");
  !hasRelativeProtocol && /^\.*\//.test(urlString) || (urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, options.defaultProtocol));
  let urlObject = new URL(urlString);
  if (options.forceHttp && options.forceHttps)
    throw new Error("The `forceHttp` and `forceHttps` options cannot be used together");
  if (options.forceHttp && urlObject.protocol === "https:" && (urlObject.protocol = "http:"), options.forceHttps && urlObject.protocol === "http:" && (urlObject.protocol = "https:"), options.stripAuthentication && (urlObject.username = "", urlObject.password = ""), options.stripHash ? urlObject.hash = "" : options.stripTextFragment && (urlObject.hash = urlObject.hash.replace(/#?:~:text.*?$/i, "")), urlObject.pathname) {
    let protocolRegex = /\b[a-z][a-z\d+\-.]{1,50}:\/\//g, lastIndex = 0, result = "";
    for (; ; ) {
      let match = protocolRegex.exec(urlObject.pathname);
      if (!match)
        break;
      let protocol = match[0], protocolAtIndex = match.index;
      result += urlObject.pathname.slice(lastIndex, protocolAtIndex).replace(/\/{2,}/g, "/"), result += protocol, lastIndex = protocolAtIndex + protocol.length;
    }
    result += urlObject.pathname.slice(lastIndex, urlObject.pathname.length).replace(/\/{2,}/g, "/"), urlObject.pathname = result;
  }
  if (urlObject.pathname)
    try {
      urlObject.pathname = decodeURI(urlObject.pathname);
    } catch {
    }
  if (options.removeDirectoryIndex === !0 && (options.removeDirectoryIndex = [/^index\.[a-z]+$/]), Array.isArray(options.removeDirectoryIndex) && options.removeDirectoryIndex.length > 0) {
    let pathComponents = urlObject.pathname.split("/"), lastComponent = pathComponents[pathComponents.length - 1];
    testParameter(lastComponent, options.removeDirectoryIndex) && (pathComponents = pathComponents.slice(0, -1), urlObject.pathname = pathComponents.slice(1).join("/") + "/");
  }
  if (urlObject.hostname && (urlObject.hostname = urlObject.hostname.replace(/\.$/, ""), options.stripWWW && /^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(urlObject.hostname) && (urlObject.hostname = urlObject.hostname.replace(/^www\./, ""))), Array.isArray(options.removeQueryParameters))
    for (let key of [...urlObject.searchParams.keys()])
      testParameter(key, options.removeQueryParameters) && urlObject.searchParams.delete(key);
  if (options.removeQueryParameters === !0 && (urlObject.search = ""), options.sortQueryParameters) {
    urlObject.searchParams.sort();
    try {
      urlObject.search = decodeURIComponent(urlObject.search);
    } catch {
    }
  }
  options.removeTrailingSlash && (urlObject.pathname = urlObject.pathname.replace(/\/$/, ""));
  let oldUrlString = urlString;
  return urlString = urlObject.toString(), !options.removeSingleSlash && urlObject.pathname === "/" && !oldUrlString.endsWith("/") && urlObject.hash === "" && (urlString = urlString.replace(/\/$/, "")), (options.removeTrailingSlash || urlObject.pathname === "/") && urlObject.hash === "" && options.removeSingleSlash && (urlString = urlString.replace(/\/$/, "")), hasRelativeProtocol && !options.normalizeProtocol && (urlString = urlString.replace(/^http:\/\//, "//")), options.stripProtocol && (urlString = urlString.replace(/^(?:https?:)?\/\//, "")), urlString;
}

// node_modules/mimic-fn/index.js
var copyProperty = (to, from, property, ignoreNonConfigurable) => {
  if (property === "length" || property === "prototype" || property === "arguments" || property === "caller")
    return;
  let toDescriptor = Object.getOwnPropertyDescriptor(to, property), fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
  !canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable || Object.defineProperty(to, property, fromDescriptor);
}, canCopyProperty = function(toDescriptor, fromDescriptor) {
  return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
}, changePrototype = (to, from) => {
  let fromPrototype = Object.getPrototypeOf(from);
  fromPrototype !== Object.getPrototypeOf(to) && Object.setPrototypeOf(to, fromPrototype);
}, wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`, toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString"), toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name"), changeToString = (to, from, name) => {
  let withName = name === "" ? "" : `with ${name.trim()}() `, newToString = wrappedToString.bind(null, withName, from.toString());
  Object.defineProperty(newToString, "name", toStringName), Object.defineProperty(to, "toString", __spreadProps(__spreadValues({}, toStringDescriptor), { value: newToString }));
};
function mimicFunction(to, from, { ignoreNonConfigurable = !1 } = {}) {
  let { name } = to;
  for (let property of Reflect.ownKeys(from))
    copyProperty(to, from, property, ignoreNonConfigurable);
  return changePrototype(to, from), changeToString(to, from, name), to;
}

// node_modules/mem/dist/index.js
var import_map_age_cleaner = __toESM(require("map-age-cleaner"), 1), cacheStore = /* @__PURE__ */ new WeakMap();
function mem(fn, { cacheKey, cache = /* @__PURE__ */ new Map(), maxAge } = {}) {
  typeof maxAge == "number" && (0, import_map_age_cleaner.default)(cache);
  let memoized = function(...arguments_) {
    let key = cacheKey ? cacheKey(arguments_) : arguments_[0], cacheItem = cache.get(key);
    if (cacheItem)
      return cacheItem.data;
    let result = fn.apply(this, arguments_);
    return cache.set(key, {
      data: result,
      maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
    }), result;
  };
  return mimicFunction(memoized, fn, {
    ignoreNonConfigurable: !0
  }), cacheStore.set(memoized, cache), memoized;
}

// node_modules/notion-utils/build/index.js
var R = (e, t, o) => new Promise((n2, s) => {
  var r = (c) => {
    try {
      m(o.next(c));
    } catch (l) {
      s(l);
    }
  }, a = (c) => {
    try {
      m(o.throw(c));
    } catch (l) {
      s(l);
    }
  }, m = (c) => c.done ? n2(c.value) : Promise.resolve(c.value).then(r, a);
  m((o = o.apply(e, t)).next());
}), h = (e) => {
  var t;
  return e ? Array.isArray(e) ? (t = e == null ? void 0 : e.reduce((o, n2) => o + (n2[0] !== "\u204D" && n2[0] !== "\u2023" ? n2[0] : ""), "")) != null ? t : "" : e : "";
};
function w(e, t) {
  var s, r, a, m, c, l, i;
  let o = e.collection_id || ((r = (s = e.format) == null ? void 0 : s.collection_pointer) == null ? void 0 : r.id);
  if (o)
    return o;
  let n2 = (a = e == null ? void 0 : e.view_ids) == null ? void 0 : a[0];
  if (n2) {
    let u = (c = (m = t.collection_view) == null ? void 0 : m[n2]) == null ? void 0 : c.value;
    if (u)
      return (i = (l = u.format) == null ? void 0 : l.collection_pointer) == null ? void 0 : i.id;
  }
  return null;
}
function T(e, t) {
  var o, n2;
  if ((o = e.properties) != null && o.title)
    return h(e.properties.title);
  if (e.type === "collection_view_page" || e.type === "collection_view") {
    let s = w(e, t);
    if (s) {
      let r = (n2 = t.collection[s]) == null ? void 0 : n2.value;
      if (r)
        return h(r.name);
    }
  }
  return "";
}
function B(e, t) {
  var o, n2, s;
  if ((o = e.format) != null && o.page_icon)
    return (n2 = e.format) == null ? void 0 : n2.page_icon;
  if (e.type === "collection_view_page" || e.type === "collection_view") {
    let r = w(e, t);
    if (r) {
      let a = (s = t.collection[r]) == null ? void 0 : s.value;
      if (a)
        return a.icon;
    }
  }
  return null;
}
function P(e, t, o) {
  var n2;
  try {
    if (!t.properties || !Object.keys(o.collection))
      return null;
    let s = (n2 = o.collection[t.parent_id]) == null ? void 0 : n2.value;
    if (s) {
      let r = e.toLowerCase(), a = Object.keys(s.schema).find((l) => {
        var i, u;
        return ((u = (i = s.schema[l]) == null ? void 0 : i.name) == null ? void 0 : u.toLowerCase()) === r;
      });
      if (!a)
        return null;
      let { type: m } = s.schema[a], c = h(t.properties[a]);
      switch (m) {
        case "created_time":
          return t.created_time;
        case "multi_select":
          return c.split(",");
        case "date": {
          let i = t.properties[a][0][1][0][1];
          if (i.type == "datetime")
            return new Date(`${i.start_date} ${i.start_time}`).getTime();
          if (i.type == "date")
            return new Date(i.start_date).getTime();
          if (i.type == "datetimerange") {
            let { start_date: u, start_time: g, end_date: p, end_time: _ } = i, y = new Date(`${u} ${g}`).getTime(), f = new Date(`${p} ${_}`).getTime();
            return [y, f];
          } else {
            let u = new Date(i.start_date).getTime(), g = new Date(i.end_date).getTime();
            return [u, g];
          }
        }
        case "checkbox":
          return c == "Yes";
        case "last_edited_time":
          return t.last_edited_time;
        default:
          return c;
      }
    }
  } catch {
  }
  return null;
}
var Y = (e) => {
  if (e && Array.isArray(e)) {
    if (e[0] === "d")
      return e[1];
    for (let t of e) {
      let o = Y(t);
      if (o)
        return o;
    }
  }
  return null;
}, O = (e, t, { inclusive: o = !1 } = {}) => {
  var s, r;
  let n2 = e;
  for (; n2 != null; ) {
    if (o && (n2 == null ? void 0 : n2.type) === "page")
      return n2;
    let a = n2.parent_id, m = n2.parent_table;
    if (!a)
      break;
    if (m === "collection")
      n2 = (s = t.collection[a]) == null ? void 0 : s.value;
    else if (n2 = (r = t.block[a]) == null ? void 0 : r.value, (n2 == null ? void 0 : n2.type) === "page")
      return n2;
  }
  return null;
}, Z = { header: 0, sub_header: 1, sub_sub_header: 2 }, S = (e, t) => {
  var s;
  let o = ((s = e.content) != null ? s : []).map((r) => {
    var m, c;
    let a = (m = t.block[r]) == null ? void 0 : m.value;
    if (a) {
      let { type: l } = a;
      if (l === "header" || l === "sub_header" || l === "sub_sub_header")
        return { id: r, type: l, text: h((c = a.properties) == null ? void 0 : c.title), indentLevel: Z[l] };
    }
    return null;
  }).filter(Boolean), n2 = [{ actual: -1, effective: -1 }];
  for (let r of o) {
    let { indentLevel: a } = r, m = a;
    do {
      let c = n2[n2.length - 1], { actual: l, effective: i } = c;
      if (m > l)
        r.indentLevel = i + 1, n2.push({ actual: m, effective: r.indentLevel });
      else if (m === l) {
        r.indentLevel = i;
        break;
      } else
        n2.pop();
    } while (!0);
  }
  return o;
}, Te = (e, t) => {
  let o = t || Object.keys(e.block)[0], n2 = /* @__PURE__ */ new Set();
  function s(r) {
    var u, g, p, _;
    if (n2.has(r))
      return;
    n2.add(r);
    let a = (u = e.block[r]) == null ? void 0 : u.value;
    if (!a)
      return;
    let { content: m, type: c, properties: l, format: i } = a;
    if (l)
      for (let y of Object.keys(l)) {
        let f = l[y];
        f.map((x2) => {
          var v, I;
          let b = (I = (v = x2 == null ? void 0 : x2[0]) == null ? void 0 : v[1]) == null ? void 0 : I[0];
          (b == null ? void 0 : b[0]) === "p" && b[1] && s(b[1]);
        });
        let k2 = (p = (g = f == null ? void 0 : f[0]) == null ? void 0 : g[1]) == null ? void 0 : p[0];
        (k2 == null ? void 0 : k2[0]) === "p" && k2[1] && s(k2[1]);
      }
    if (i) {
      let y = (_ = i.transclusion_reference_pointer) == null ? void 0 : _.id;
      y && s(y);
    }
    if (!(!m || !Array.isArray(m)) && !(r !== o && (c === "page" || c === "collection_view_page")))
      for (let y of m)
        s(y);
  }
  return s(o), Array.from(n2);
}, L = (e = "") => `${e.substr(0, 8)}-${e.substr(8, 4)}-${e.substr(12, 4)}-${e.substr(16, 4)}-${e.substr(20)}`, G = /\b([a-f0-9]{32})\b/, J = /\b([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})\b/, W = (e = "", { uuid: t = !0 } = {}) => {
  if (!e)
    return null;
  e = e.split("?")[0];
  let o = e.match(G);
  if (o)
    return t ? L(o[1]) : o[1];
  let n2 = e.match(J);
  return n2 ? t ? n2[1] : n2[1].replace(/-/g, "") : null;
}, M = (e) => e.replace(/-/g, "");
function Ee(a, m, c) {
  return R(this, arguments, function* (e, t, o, { concurrency: n2 = 4, traverseCollections: s = !0, targetPageId: r = null } = {}) {
    let l = {}, i = /* @__PURE__ */ new Set(), u = new PQueue({ concurrency: n2 });
    function g(p) {
      return R(this, null, function* () {
        r && i.has(r) || (p = W(p), p && !l[p] && !i.has(p) && (i.add(p), u.add(() => R(this, null, function* () {
          var _, y;
          try {
            if (r && i.has(r) && p !== r)
              return;
            let f = yield o(p);
            if (!f)
              return;
            let k2 = (y = (_ = f.block[p]) == null ? void 0 : _.value) == null ? void 0 : y.space_id;
            if (k2) {
              if (!t)
                t = k2;
              else if (t !== k2)
                return;
            }
            if (Object.keys(f.block).filter((x2) => {
              var v;
              let b = (v = f.block[x2]) == null ? void 0 : v.value;
              return !(!b || b.type !== "page" && b.type !== "collection_view_page" || t && b.space_id && b.space_id !== t);
            }).forEach((x2) => g(x2)), s)
              for (let x2 of Object.values(f.collection_query))
                for (let b of Object.values(x2)) {
                  let { blockIds: v } = b;
                  if (v)
                    for (let I of v)
                      g(I);
                }
            l[p] = f;
          } catch (f) {
            console.warn("page load error", { pageId: p, spaceId: t }, f.statusCode, f.message), l[p] = null;
          }
          i.delete(p);
        }))));
      });
    }
    return yield g(e), yield u.onIdle(), l;
  });
}
var z = (e) => (e || "").replace(/ /g, "-").replace(/[^a-zA-Z0-9-\u4e00-\u9fa5]/g, "").replace(/--/g, "-").replace(/-$/, "").replace(/^-/, "").trim().toLowerCase(), Le = (e, t, { uuid: o = !0 } = {}) => {
  var r;
  if (!e || !t)
    return null;
  let n2 = M(e), s = (r = t.block[e]) == null ? void 0 : r.value;
  if (s) {
    let a = P("slug", s, t) || P("Slug", s, t) || z(T(s, t));
    if (a)
      return o ? `${a}-${n2}` : a;
  }
  return n2;
}, Ae = (e, t) => {
  var r;
  let o = e.block, n2 = [], s = t;
  do {
    let a = (r = o[s]) == null ? void 0 : r.value;
    if (!a)
      break;
    let m = T(a, e), c = B(a, e);
    if (!(m || c))
      break;
    n2.push({ block: a, active: s === t, pageId: s, title: m, icon: c });
    let l = O(a, e), i = l == null ? void 0 : l.id;
    if (!i)
      break;
    s = i;
  } while (!0);
  return n2.reverse(), n2;
};
var te = mem((e) => {
  if (!e)
    return "";
  try {
    if (e.startsWith("https://www.notion.so/image/")) {
      let t = new URL(e), o = decodeURIComponent(t.pathname.substr(7)), n2 = te(o);
      t.pathname = `/image/${encodeURIComponent(n2)}`, e = t.toString();
    }
    return normalizeUrl(e, { stripProtocol: !0, stripWWW: !0, stripHash: !0, stripTextFragment: !0, removeQueryParameters: !0 });
  } catch {
    return "";
  }
});
var A = (e, { month: t = "short" } = {}) => {
  let o = new Date(e);
  return `${o.toLocaleString("en-US", { month: t })} ${o.getUTCDate()}, ${o.getUTCFullYear()}`;
}, ot = (e) => {
  let t = `${e.start_time || ""} ${e.start_date} ${e.time_zone || ""}`;
  return A(t);
};

// node_modules/react-notion-x/build/index.js
var React20 = __toESM(require("react"), 1);
var React2 = __toESM(require("react"), 1), React19 = __toESM(require("react"), 1), React22 = __toESM(require("react"), 1), import_react_fast_compare = __toESM(require("react-fast-compare"), 1), React11 = __toESM(require("react"), 1), React5 = __toESM(require("react"), 1);
var React3 = __toESM(require("react"), 1), import_react_lazy_images = require("react-lazy-images");
var React4 = __toESM(require("react"), 1), React10 = __toESM(require("react"), 1);
var React6 = __toESM(require("react"), 1);
var React7 = __toESM(require("react"), 1), import_react_image = require("react-image"), React9 = __toESM(require("react"), 1), React8 = __toESM(require("react"), 1);
var React16 = __toESM(require("react"), 1), import_react_hotkeys_hook = require("react-hotkeys-hook");
var React12 = __toESM(require("react"), 1), React15 = __toESM(require("react"), 1);
var React13 = __toESM(require("react"), 1), React14 = __toESM(require("react"), 1), React18 = __toESM(require("react"), 1), React17 = __toESM(require("react"), 1), React21 = __toESM(require("react"), 1);
var React222 = __toESM(require("react"), 1), React23 = __toESM(require("react"), 1), React24 = __toESM(require("react"), 1), React26 = __toESM(require("react"), 1), React25 = __toESM(require("react"), 1), React27 = __toESM(require("react"), 1), __create2 = Object.create, __defProp2 = Object.defineProperty, __defProps2 = Object.defineProperties, __getOwnPropDesc2 = Object.getOwnPropertyDescriptor, __getOwnPropDescs2 = Object.getOwnPropertyDescriptors, __getOwnPropNames2 = Object.getOwnPropertyNames, __getOwnPropSymbols2 = Object.getOwnPropertySymbols, __getProtoOf2 = Object.getPrototypeOf, __hasOwnProp2 = Object.prototype.hasOwnProperty, __propIsEnum2 = Object.prototype.propertyIsEnumerable, __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp2.call(b, prop) && __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b))
      __propIsEnum2.call(b, prop) && __defNormalProp2(a, prop, b[prop]);
  return a;
}, __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b)), __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source))
      exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames2(from))
      !__hasOwnProp2.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  return to;
}, __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: !0 }) : target, mod)), __async = (__this, __arguments, generator) => new Promise((resolve, reject) => {
  var fulfilled = (value) => {
    try {
      step(generator.next(value));
    } catch (e) {
      reject(e);
    }
  }, rejected = (value) => {
    try {
      step(generator.throw(value));
    } catch (e) {
      reject(e);
    }
  }, step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
  step((generator = generator.apply(__this, __arguments)).next());
}), require_lodash = __commonJS({
  "../../node_modules/lodash.throttle/index.js"(exports, module2) {
    var FUNC_ERROR_TEXT = "Expected a function", NAN = NaN, symbolTag = "[object Symbol]", reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt, freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), objectProto = Object.prototype, objectToString = objectProto.toString, nativeMax = Math.max, nativeMin = Math.min, now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
      if (typeof func != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, trailing = "trailing" in options ? !!options.trailing : trailing);
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        return lastArgs = lastThis = void 0, lastInvokeTime = time, result = func.apply(thisArg, args), result;
      }
      function leadingEdge(time) {
        return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time))
          return trailingEdge(time);
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        return timerId = void 0, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = void 0, result);
      }
      function cancel() {
        timerId !== void 0 && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
          if (timerId === void 0)
            return leadingEdge(lastCallTime);
          if (maxing)
            return timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
        }
        return timerId === void 0 && (timerId = setTimeout(timerExpired, wait)), result;
      }
      return debounced.cancel = cancel, debounced.flush = flush, debounced;
    }
    function throttle3(func, wait, options) {
      var leading = !0, trailing = !0;
      if (typeof func != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
        leading,
        maxWait: wait,
        trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number")
        return value;
      if (isSymbol(value))
        return NAN;
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string")
        return value === 0 ? value : +value;
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = throttle3;
  }
}), defaultMapImageUrl = (url, block) => {
  if (!url)
    return null;
  if (url.startsWith("data:") || url.startsWith("https://images.unsplash.com"))
    return url;
  try {
    let u = new URL(url);
    if (u.pathname.startsWith("/secure.notion-static.com") && u.hostname.endsWith(".amazonaws.com") && u.searchParams.has("X-Amz-Credential") && u.searchParams.has("X-Amz-Signature") && u.searchParams.has("X-Amz-Algorithm"))
      return url;
  } catch {
  }
  url.startsWith("/images") && (url = `https://www.notion.so${url}`), url = `https://www.notion.so${url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`}`;
  let notionImageUrlV2 = new URL(url), table = block.parent_table === "space" ? "block" : block.parent_table;
  return table === "collection" && (table = "block"), notionImageUrlV2.searchParams.set("table", table), notionImageUrlV2.searchParams.set("id", block.id), notionImageUrlV2.searchParams.set("cache", "v2"), url = notionImageUrlV2.toString(), url;
}, defaultMapPageUrl = (rootPageId) => (pageId) => (pageId = (pageId || "").replace(/-/g, ""), rootPageId && pageId === rootPageId ? "/" : `/${pageId}`), cs = (...classes) => classes.filter((a) => !!a).join(" "), groupBlockContent = (blockMap) => {
  let output = [], lastType, index = -1;
  return Object.keys(blockMap).forEach((id) => {
    var _a, _b;
    let blockValue = (_a = blockMap[id]) == null ? void 0 : _a.value;
    blockValue && ((_b = blockValue.content) == null || _b.forEach((blockId) => {
      var _a2, _b2;
      let blockType = (_b2 = (_a2 = blockMap[blockId]) == null ? void 0 : _a2.value) == null ? void 0 : _b2.type;
      blockType && blockType !== lastType && (index++, lastType = blockType, output[index] = []), index > -1 && output[index].push(blockId);
    })), lastType = void 0;
  }), output;
}, getListNumber = (blockId, blockMap) => {
  let group = groupBlockContent(blockMap).find((g) => g.includes(blockId));
  if (!!group)
    return group.indexOf(blockId) + 1;
}, getHashFragmentValue = (url) => url.includes("#") ? url.replace(/^.+(#.+)$/, "$1") : "", isBrowser = typeof window < "u", youtubeDomains = /* @__PURE__ */ new Set([
  "youtu.be",
  "youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com"
]), getYoutubeId = (url) => {
  try {
    let { hostname } = new URL(url);
    if (!youtubeDomains.has(hostname))
      return null;
    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i, match = url.match(regExp);
    if (match && match[2].length == 11)
      return match[2];
  } catch {
  }
  return null;
}, DefaultPageIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React2.createElement("svg", __spreadProps2(__spreadValues2({
    className
  }, rest), {
    viewBox: "0 0 30 30",
    width: "16"
  }), /* @__PURE__ */ React2.createElement("path", {
    d: "M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"
  }));
}, wrapNextImage = (NextImage) => React22.memo(function(_a) {
  var _b = _a, {
    src,
    alt,
    width,
    height,
    className,
    style,
    layout
  } = _b, rest = __objRest(_b, [
    "src",
    "alt",
    "width",
    "height",
    "className",
    "style",
    "layout"
  ]);
  return layout || (layout = width && height ? "intrinsic" : "fill"), /* @__PURE__ */ React22.createElement(NextImage, __spreadValues2({
    className,
    src,
    alt,
    width: layout === "intrinsic" && width,
    height: layout === "intrinsic" && height,
    objectFit: style == null ? void 0 : style.objectFit,
    objectPosition: style == null ? void 0 : style.objectPosition,
    layout
  }, rest));
}, import_react_fast_compare.default), wrapNextLink = (NextLink) => function(_a) {
  var _b = _a, {
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale
  } = _b, linkProps = __objRest(_b, [
    "href",
    "as",
    "passHref",
    "prefetch",
    "replace",
    "scroll",
    "shallow",
    "locale"
  ]);
  return /* @__PURE__ */ React22.createElement(NextLink, {
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale
  }, /* @__PURE__ */ React22.createElement("a", __spreadValues2({}, linkProps)));
}, LazyImage = (_a) => {
  var _b = _a, {
    src,
    alt,
    className,
    style,
    zoomable = !1,
    priority = !1,
    height
  } = _b, rest = __objRest(_b, [
    "src",
    "alt",
    "className",
    "style",
    "zoomable",
    "priority",
    "height"
  ]), _a2, _b2, _c;
  let { recordMap, zoom, previewImages, forceCustomImages, components } = useNotionContext(), zoomRef = React3.useRef(zoom ? zoom.clone() : null), previewImage = previewImages ? (_c = (_a2 = recordMap == null ? void 0 : recordMap.preview_images) == null ? void 0 : _a2[src]) != null ? _c : (_b2 = recordMap == null ? void 0 : recordMap.preview_images) == null ? void 0 : _b2[te(src)] : null, onLoad = React3.useCallback((e) => {
    zoomable && (e.target.src || e.target.srcset) && zoomRef.current && zoomRef.current.attach(e.target);
  }, [zoomRef, zoomable]), attachZoom = React3.useCallback((image) => {
    zoomRef.current && image && zoomRef.current.attach(image);
  }, [zoomRef]), attachZoomRef = React3.useMemo(() => zoomable ? attachZoom : void 0, [zoomable, attachZoom]);
  if (previewImage) {
    let aspectRatio = previewImage.originalHeight / previewImage.originalWidth;
    return components.Image ? /* @__PURE__ */ React3.createElement(components.Image, {
      src,
      alt,
      style,
      className,
      width: previewImage.originalWidth,
      height: previewImage.originalHeight,
      blurDataURL: previewImage.dataURIBase64,
      placeholder: "blur",
      priority,
      onLoad
    }) : /* @__PURE__ */ React3.createElement(import_react_lazy_images.LazyImageFull, __spreadProps2(__spreadValues2({
      src
    }, rest), {
      experimentalDecode: !0
    }), ({ imageState, ref }) => {
      let isLoaded = imageState === import_react_lazy_images.ImageState.LoadSuccess, wrapperStyle = {
        width: "100%"
      }, imgStyle = {};
      return height ? wrapperStyle.height = height : (imgStyle.position = "absolute", wrapperStyle.paddingBottom = `${aspectRatio * 100}%`), /* @__PURE__ */ React3.createElement("div", {
        className: cs("lazy-image-wrapper", isLoaded && "lazy-image-loaded", className),
        style: wrapperStyle
      }, /* @__PURE__ */ React3.createElement("img", {
        className: "lazy-image-preview",
        src: previewImage.dataURIBase64,
        alt,
        ref,
        style,
        decoding: "async"
      }), /* @__PURE__ */ React3.createElement("img", {
        className: "lazy-image-real",
        src,
        alt,
        ref: attachZoomRef,
        style: __spreadValues2(__spreadValues2({}, style), imgStyle),
        width: previewImage.originalWidth,
        height: previewImage.originalHeight,
        decoding: "async",
        loading: "lazy"
      }));
    });
  } else
    return components.Image && forceCustomImages ? /* @__PURE__ */ React3.createElement(components.Image, {
      src,
      alt,
      className,
      style,
      width: null,
      height: height || null,
      priority,
      onLoad
    }) : /* @__PURE__ */ React3.createElement("img", __spreadValues2({
      className,
      style,
      src,
      alt,
      ref: attachZoomRef,
      loading: "lazy",
      decoding: "async"
    }, rest));
}, qs = (params) => Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join("&"), LiteYouTubeEmbed = ({
  id,
  defaultPlay = !1,
  mute = !1,
  lazyImage = !1,
  iframeTitle = "YouTube video",
  alt = "Video preview",
  params = {},
  adLinksPreconnect = !0,
  style,
  className
}) => {
  let muteParam = mute || defaultPlay ? "1" : "0", queryString = React4.useMemo(() => qs(__spreadValues2({ autoplay: "1", mute: muteParam }, params)), [muteParam, params]), posterUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, ytUrl = "https://www.youtube-nocookie.com", iframeSrc = `${ytUrl}/embed/${id}?${queryString}`, [isPreconnected, setIsPreconnected] = React4.useState(!1), [iframeInitialized, setIframeInitialized] = React4.useState(defaultPlay), [isIframeLoaded, setIsIframeLoaded] = React4.useState(!1), warmConnections = React4.useCallback(() => {
    isPreconnected || setIsPreconnected(!0);
  }, [isPreconnected]), onLoadIframe = React4.useCallback(() => {
    iframeInitialized || setIframeInitialized(!0);
  }, [iframeInitialized]), onIframeLoaded = React4.useCallback(() => {
    setIsIframeLoaded(!0);
  }, []);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("link", {
    rel: "preload",
    href: posterUrl,
    as: "image"
  }), isPreconnected && /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("link", {
    rel: "preconnect",
    href: ytUrl
  }), /* @__PURE__ */ React4.createElement("link", {
    rel: "preconnect",
    href: "https://www.google.com"
  })), isPreconnected && adLinksPreconnect && /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement("link", {
    rel: "preconnect",
    href: "https://static.doubleclick.net"
  }), /* @__PURE__ */ React4.createElement("link", {
    rel: "preconnect",
    href: "https://googleads.g.doubleclick.net"
  })), /* @__PURE__ */ React4.createElement("div", {
    onClick: onLoadIframe,
    onPointerOver: warmConnections,
    className: cs("notion-yt-lite", isIframeLoaded && "notion-yt-loaded", iframeInitialized && "notion-yt-initialized", className),
    style
  }, /* @__PURE__ */ React4.createElement("img", {
    src: posterUrl,
    className: "notion-yt-thumbnail",
    loading: lazyImage ? "lazy" : void 0,
    alt
  }), /* @__PURE__ */ React4.createElement("div", {
    className: "notion-yt-playbtn"
  }), iframeInitialized && /* @__PURE__ */ React4.createElement("iframe", {
    width: "560",
    height: "315",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: !0,
    title: iframeTitle,
    src: iframeSrc,
    onLoad: onIframeLoaded
  })));
}, isServer = typeof window > "u", supportedAssetTypes = [
  "video",
  "image",
  "embed",
  "figma",
  "typeform",
  "excalidraw",
  "maps",
  "tweet",
  "pdf",
  "gist",
  "codepen",
  "drive"
], Asset = ({ block, zoomable = !0, children }) => {
  var _a, _b, _c, _d, _e, _f;
  let { recordMap, mapImageUrl, components } = useNotionContext();
  if (!block || !supportedAssetTypes.includes(block.type))
    return null;
  let style = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: "100%",
    flexDirection: "column"
  }, assetStyle = {};
  if (block.format) {
    let {
      block_aspect_ratio,
      block_height,
      block_width,
      block_full_width,
      block_page_width,
      block_preserve_scale
    } = block.format;
    block_full_width || block_page_width ? (block_full_width ? style.width = "100vw" : style.width = "100%", block.type === "video" ? block_height ? style.height = block_height : block_aspect_ratio ? style.paddingBottom = `${block_aspect_ratio * 100}%` : block_preserve_scale && (style.objectFit = "contain") : block_aspect_ratio && block.type !== "image" ? style.paddingBottom = `${block_aspect_ratio * 100}%` : block_height ? style.height = block_height : block_preserve_scale && (block.type === "image" ? style.height = "100%" : (style.paddingBottom = "75%", style.minHeight = 100))) : (block_width && (style.width = block_width), block_preserve_scale && block.type !== "image" ? (style.paddingBottom = "50%", style.minHeight = 100) : block_height && block.type !== "image" && (style.height = block_height)), block.type === "image" ? assetStyle.objectFit = "cover" : block_preserve_scale && (assetStyle.objectFit = "contain");
  }
  let source = ((_a = recordMap.signed_urls) == null ? void 0 : _a[block.id]) || ((_d = (_c = (_b = block.properties) == null ? void 0 : _b.source) == null ? void 0 : _c[0]) == null ? void 0 : _d[0]), content = null;
  if (!source)
    return null;
  if (block.type === "tweet") {
    let src = source;
    if (!src)
      return null;
    let id = src.split("?")[0].split("/").pop();
    if (!id)
      return null;
    content = /* @__PURE__ */ React5.createElement("div", {
      style: __spreadProps2(__spreadValues2({}, assetStyle), {
        maxWidth: 420,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto"
      })
    }, /* @__PURE__ */ React5.createElement(components.Tweet, {
      id
    }));
  } else if (block.type === "pdf")
    style.overflow = "auto", style.background = "rgb(226, 226, 226)", style.padding || (style.padding = "8px 16px"), isServer || (content = /* @__PURE__ */ React5.createElement(components.Pdf, {
      file: source
    }));
  else if (block.type === "embed" || block.type === "video" || block.type === "figma" || block.type === "typeform" || block.type === "gist" || block.type === "maps" || block.type === "excalidraw" || block.type === "codepen" || block.type === "drive")
    if (block.type === "video" && source && source.indexOf("youtube") < 0 && source.indexOf("youtu.be") < 0 && source.indexOf("vimeo") < 0 && source.indexOf("wistia") < 0 && source.indexOf("loom") < 0 && source.indexOf("videoask") < 0 && source.indexOf("getcloudapp") < 0)
      style.paddingBottom = void 0, content = /* @__PURE__ */ React5.createElement("video", {
        playsInline: !0,
        controls: !0,
        preload: "metadata",
        style: assetStyle,
        src: source,
        title: block.type
      });
    else {
      let src = ((_e = block.format) == null ? void 0 : _e.display_source) || source;
      if (src) {
        let youtubeVideoId = block.type === "video" ? getYoutubeId(src) : null;
        youtubeVideoId ? content = /* @__PURE__ */ React5.createElement(LiteYouTubeEmbed, {
          id: youtubeVideoId,
          style: assetStyle,
          className: "notion-asset-object-fit"
        }) : block.type === "gist" ? (src.endsWith(".pibb") || (src = `${src}.pibb`), assetStyle.width = "100%", style.paddingBottom = "50%", content = /* @__PURE__ */ React5.createElement("iframe", {
          style: assetStyle,
          className: "notion-asset-object-fit",
          src,
          title: "GitHub Gist",
          frameBorder: "0",
          loading: "lazy",
          scrolling: "auto"
        })) : content = /* @__PURE__ */ React5.createElement("iframe", {
          className: "notion-asset-object-fit",
          style: assetStyle,
          src,
          title: `iframe ${block.type}`,
          frameBorder: "0",
          allowFullScreen: !0,
          loading: "lazy",
          scrolling: "auto"
        });
      }
    }
  else if (block.type === "image") {
    let src = mapImageUrl(source, block), alt = h((_f = block.properties) == null ? void 0 : _f.caption) || "notion image";
    content = /* @__PURE__ */ React5.createElement(LazyImage, {
      src,
      alt,
      zoomable,
      height: style.height,
      style: assetStyle
    });
  }
  return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement("div", {
    style
  }, content, block.type === "image" && children), block.type !== "image" && children);
}, PageTitleImpl = (_a) => {
  var _b = _a, { block, className, defaultIcon } = _b, rest = __objRest(_b, ["block", "className", "defaultIcon"]), _a2, _b2;
  let { recordMap } = useNotionContext();
  if (!block)
    return null;
  if (block.type === "collection_view_page" || block.type === "collection_view") {
    let title = T(block, recordMap);
    if (!title)
      return null;
    let titleDecoration = [[title]];
    return /* @__PURE__ */ React6.createElement("span", __spreadValues2({
      className: cs("notion-page-title", className)
    }, rest), /* @__PURE__ */ React6.createElement(PageIcon, {
      block,
      defaultIcon,
      className: "notion-page-title-icon"
    }), /* @__PURE__ */ React6.createElement("span", {
      className: "notion-page-title-text"
    }, /* @__PURE__ */ React6.createElement(Text, {
      value: titleDecoration,
      block
    })));
  }
  return ((_a2 = block.properties) == null ? void 0 : _a2.title) ? /* @__PURE__ */ React6.createElement("span", __spreadValues2({
    className: cs("notion-page-title", className)
  }, rest), /* @__PURE__ */ React6.createElement(PageIcon, {
    block,
    defaultIcon,
    className: "notion-page-title-icon"
  }), /* @__PURE__ */ React6.createElement("span", {
    className: "notion-page-title-text"
  }, /* @__PURE__ */ React6.createElement(Text, {
    value: (_b2 = block.properties) == null ? void 0 : _b2.title,
    block
  }))) : null;
}, PageTitle = React6.memo(PageTitleImpl), GracefulImage = (props) => isBrowser ? /* @__PURE__ */ React7.createElement(import_react_image.Img, __spreadValues2({}, props)) : /* @__PURE__ */ React7.createElement("img", __spreadValues2({}, props));
function SvgTypeGitHub(props) {
  return /* @__PURE__ */ React8.createElement("svg", __spreadValues2({
    viewBox: "0 0 260 260"
  }, props), /* @__PURE__ */ React8.createElement("g", null, /* @__PURE__ */ React8.createElement("path", {
    d: "M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",
    fill: "#161614"
  })));
}
var type_github_default = SvgTypeGitHub, EOI = ({ block, inline, className }) => {
  var _a, _b, _c;
  let { components } = useNotionContext(), { original_url, attributes, domain } = (block == null ? void 0 : block.format) || {};
  if (!original_url || !attributes)
    return null;
  let title = (_a = attributes.find((attr) => attr.id === "title")) == null ? void 0 : _a.values[0], owner = (_b = attributes.find((attr) => attr.id === "owner")) == null ? void 0 : _b.values[0], lastUpdatedAt = (_c = attributes.find((attr) => attr.id === "updated_at")) == null ? void 0 : _c.values[0], lastUpdated = lastUpdatedAt ? ot(lastUpdatedAt) : null, externalImage;
  switch (domain) {
    case "github.com":
      if (externalImage = /* @__PURE__ */ React9.createElement(type_github_default, null), owner) {
        let parts = owner.split("/");
        owner = parts[parts.length - 1];
      }
      break;
    default:
      return console.log(`Unsupported external_object_instance domain "${domain}"`, JSON.stringify(block, null, 2)), null;
  }
  return /* @__PURE__ */ React9.createElement(components.Link, {
    target: "_blank",
    rel: "noopener noreferrer",
    href: original_url,
    className: cs("notion-external", inline ? "notion-external-mention" : "notion-external-block notion-row", className)
  }, externalImage && /* @__PURE__ */ React9.createElement("div", {
    className: "notion-external-image"
  }, externalImage), /* @__PURE__ */ React9.createElement("div", {
    className: "notion-external-description"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "notion-external-title"
  }, title), (owner || lastUpdated) && /* @__PURE__ */ React9.createElement("div", {
    className: "notion-external-subtitle"
  }, owner && /* @__PURE__ */ React9.createElement("span", null, owner), owner && lastUpdated && /* @__PURE__ */ React9.createElement("span", null, " \u2022 "), lastUpdated && /* @__PURE__ */ React9.createElement("span", null, "Updated ", lastUpdated))));
}, Text = ({ value, block, linkProps, linkProtocol }) => {
  let { components, recordMap, mapPageUrl: mapPageUrl2, mapImageUrl, rootDomain } = useNotionContext();
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, value == null ? void 0 : value.map(([text, decorations], index) => {
    if (!decorations)
      return text === "," ? /* @__PURE__ */ React10.createElement("span", {
        key: index,
        style: { padding: "0.5em" }
      }) : /* @__PURE__ */ React10.createElement(React10.Fragment, {
        key: index
      }, text);
    let formatted = decorations.reduce((element, decorator) => {
      var _a, _b, _c, _d, _e;
      switch (decorator[0]) {
        case "p": {
          let blockId = decorator[1], linkedBlock = (_a = recordMap.block[blockId]) == null ? void 0 : _a.value;
          return linkedBlock ? /* @__PURE__ */ React10.createElement(components.PageLink, {
            className: "notion-link",
            href: mapPageUrl2(blockId)
          }, /* @__PURE__ */ React10.createElement(PageTitle, {
            block: linkedBlock
          })) : (console.log('"p" missing block', blockId), null);
        }
        case "\u2023": {
          let linkType = decorator[1][0], id = decorator[1][1];
          switch (linkType) {
            case "u": {
              let user = (_b = recordMap.notion_user[id]) == null ? void 0 : _b.value;
              if (!user)
                return console.log('"\u2023" missing user', id), null;
              let name = [user.given_name, user.family_name].filter(Boolean).join(" ");
              return /* @__PURE__ */ React10.createElement(GracefulImage, {
                className: "notion-user",
                src: mapImageUrl(user.profile_photo, block),
                alt: name
              });
            }
            default: {
              let linkedBlock = (_c = recordMap.block[id]) == null ? void 0 : _c.value;
              return linkedBlock ? /* @__PURE__ */ React10.createElement(components.PageLink, __spreadProps2(__spreadValues2({
                className: "notion-link",
                href: mapPageUrl2(id)
              }, linkProps), {
                target: "_blank",
                rel: "noopener noreferrer"
              }), /* @__PURE__ */ React10.createElement(PageTitle, {
                block: linkedBlock
              })) : (console.log('"\u2023" missing block', linkType, id), null);
            }
          }
        }
        case "h":
          return /* @__PURE__ */ React10.createElement("span", {
            className: `notion-${decorator[1]}`
          }, element);
        case "c":
          return /* @__PURE__ */ React10.createElement("code", {
            className: "notion-inline-code"
          }, element);
        case "b":
          return /* @__PURE__ */ React10.createElement("b", null, element);
        case "i":
          return /* @__PURE__ */ React10.createElement("em", null, element);
        case "s":
          return /* @__PURE__ */ React10.createElement("s", null, element);
        case "_":
          return /* @__PURE__ */ React10.createElement("span", {
            className: "notion-inline-underscore"
          }, element);
        case "e":
          return /* @__PURE__ */ React10.createElement(components.Equation, {
            math: decorator[1],
            inline: !0
          });
        case "m":
          return element;
        case "a": {
          let v = decorator[1], pathname = v.substr(1), id = W(pathname, { uuid: !0 });
          if ((v[0] === "/" || v.includes(rootDomain)) && id) {
            let href = v.includes(rootDomain) ? v : `${mapPageUrl2(id)}${getHashFragmentValue(v)}`;
            return /* @__PURE__ */ React10.createElement(components.PageLink, __spreadValues2({
              className: "notion-link",
              href
            }, linkProps), element);
          } else
            return /* @__PURE__ */ React10.createElement(components.Link, __spreadValues2({
              className: "notion-link",
              href: linkProtocol ? `${linkProtocol}:${decorator[1]}` : decorator[1]
            }, linkProps), element);
        }
        case "d": {
          let v = decorator[1], type = v == null ? void 0 : v.type;
          if (type === "date") {
            let startDate = v.start_date;
            return A(startDate);
          } else if (type === "daterange") {
            let startDate = v.start_date, endDate = v.end_date;
            return `${A(startDate)} \u2192 ${A(endDate)}`;
          } else
            return element;
        }
        case "u": {
          let userId = decorator[1], user = (_d = recordMap.notion_user[userId]) == null ? void 0 : _d.value;
          if (!user)
            return console.log("missing user", userId), null;
          let name = [user.given_name, user.family_name].filter(Boolean).join(" ");
          return /* @__PURE__ */ React10.createElement(GracefulImage, {
            className: "notion-user",
            src: mapImageUrl(user.profile_photo, block),
            alt: name
          });
        }
        case "eoi": {
          let blockId = decorator[1], externalObjectInstance = (_e = recordMap.block[blockId]) == null ? void 0 : _e.value;
          return /* @__PURE__ */ React10.createElement(EOI, {
            block: externalObjectInstance,
            inline: !0
          });
        }
        default:
          return console.log("unsupported text format", decorator), element;
      }
    }, /* @__PURE__ */ React10.createElement(React10.Fragment, null, text));
    return /* @__PURE__ */ React10.createElement(React10.Fragment, {
      key: index
    }, formatted);
  }));
}, urlStyle = { width: "100%" }, AssetWrapper = ({ blockId, block }) => {
  var _a, _b, _c, _d, _e, _f;
  let value = block, { components, mapPageUrl: mapPageUrl2, rootDomain } = useNotionContext(), isURL = !1;
  if (block.type === "image") {
    let caption = (_c = (_b = (_a = value == null ? void 0 : value.properties) == null ? void 0 : _a.caption) == null ? void 0 : _b[0]) == null ? void 0 : _c[0];
    if (caption) {
      let id = W(caption, { uuid: !0 });
      (caption.charAt(0) === "/" && id || isValidURL(caption)) && (isURL = !0);
    }
  }
  let figure = /* @__PURE__ */ React11.createElement("figure", {
    className: cs("notion-asset-wrapper", `notion-asset-wrapper-${block.type}`, ((_d = value.format) == null ? void 0 : _d.block_full_width) && "notion-asset-wrapper-full", blockId)
  }, /* @__PURE__ */ React11.createElement(Asset, {
    block: value,
    zoomable: !isURL
  }, ((_e = value == null ? void 0 : value.properties) == null ? void 0 : _e.caption) && !isURL && /* @__PURE__ */ React11.createElement("figcaption", {
    className: "notion-asset-caption"
  }, /* @__PURE__ */ React11.createElement(Text, {
    value: value.properties.caption,
    block
  }))));
  if (isURL) {
    let caption = (_f = value == null ? void 0 : value.properties) == null ? void 0 : _f.caption[0][0], id = W(caption, { uuid: !0 }), isPage = caption.charAt(0) === "/" && id, captionHostname = extractHostname(caption);
    return /* @__PURE__ */ React11.createElement(components.PageLink, {
      style: urlStyle,
      href: isPage ? mapPageUrl2(id) : caption,
      target: captionHostname && captionHostname !== rootDomain && !caption.startsWith("/") ? "blank_" : null
    }, figure);
  }
  return figure;
};
function isValidURL(str) {
  return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(str);
}
function extractHostname(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}
var SearchIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React12.createElement("svg", __spreadValues2({
    className: cs("notion-icon", className),
    viewBox: "0 0 17 17"
  }, rest), /* @__PURE__ */ React12.createElement("path", {
    d: "M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"
  }));
}, import_lodash = __toESM2(require_lodash(), 1), ClearIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React13.createElement("svg", __spreadProps2(__spreadValues2({
    className: cs("notion-icon", className)
  }, rest), {
    viewBox: "0 0 30 30"
  }), /* @__PURE__ */ React13.createElement("path", {
    d: "M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z"
  }));
}, LoadingIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React14.createElement("svg", __spreadProps2(__spreadValues2({
    className: cs("notion-icon", className)
  }, rest), {
    viewBox: "0 0 24 24"
  }), /* @__PURE__ */ React14.createElement("defs", null, /* @__PURE__ */ React14.createElement("linearGradient", {
    x1: "28.1542969%",
    y1: "63.7402344%",
    x2: "74.6289062%",
    y2: "17.7832031%",
    id: "linearGradient-1"
  }, /* @__PURE__ */ React14.createElement("stop", {
    stopColor: "rgba(164, 164, 164, 1)",
    offset: "0%"
  }), /* @__PURE__ */ React14.createElement("stop", {
    stopColor: "rgba(164, 164, 164, 0)",
    stopOpacity: "0",
    offset: "100%"
  }))), /* @__PURE__ */ React14.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none"
  }, /* @__PURE__ */ React14.createElement("g", {
    transform: "translate(-236.000000, -286.000000)"
  }, /* @__PURE__ */ React14.createElement("g", {
    transform: "translate(238.000000, 286.000000)"
  }, /* @__PURE__ */ React14.createElement("circle", {
    id: "Oval-2",
    stroke: "url(#linearGradient-1)",
    strokeWidth: "4",
    cx: "10",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ React14.createElement("path", {
    d: "M10,2 C4.4771525,2 0,6.4771525 0,12",
    id: "Oval-2",
    stroke: "rgba(164, 164, 164, 1)",
    strokeWidth: "4"
  }), /* @__PURE__ */ React14.createElement("rect", {
    id: "Rectangle-1",
    fill: "rgba(164, 164, 164, 1)",
    x: "8",
    y: "0",
    width: "4",
    height: "4",
    rx: "8"
  })))));
}, SearchDialog = class extends React15.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !1,
      query: "",
      searchResult: null,
      searchError: null
    }, this._onAfterOpen = () => {
      this._inputRef.current && this._inputRef.current.focus();
    }, this._onChangeQuery = (e) => {
      let query = e.target.value;
      if (this.setState({ query }), query.trim())
        this._search();
      else {
        this.setState({ isLoading: !1, searchResult: null, searchError: null });
        return;
      }
    }, this._onClearQuery = () => {
      this._onChangeQuery({ target: { value: "" } });
    }, this._warmupSearch = () => __async(this, null, function* () {
      let { searchNotion, rootBlockId } = this.props;
      yield searchNotion({
        query: "",
        ancestorId: rootBlockId
      });
    }), this._searchImpl = () => __async(this, null, function* () {
      let { searchNotion, rootBlockId } = this.props, { query } = this.state;
      if (!query.trim()) {
        this.setState({ isLoading: !1, searchResult: null, searchError: null });
        return;
      }
      this.setState({ isLoading: !0 });
      let result = yield searchNotion({
        query,
        ancestorId: rootBlockId
      });
      console.log("search", query, result);
      let searchResult = null, searchError = null;
      if (result.error || result.errorId)
        searchError = result;
      else {
        searchResult = __spreadValues2({}, result);
        let searchResultsMap = searchResult.results.map((result2) => {
          var _a, _b;
          let block = (_a = searchResult.recordMap.block[result2.id]) == null ? void 0 : _a.value;
          if (!block)
            return;
          let title = T(block, searchResult.recordMap);
          if (!!title && (result2.title = title, result2.block = block, result2.recordMap = searchResult.recordMap, result2.page = O(block, searchResult.recordMap, {
            inclusive: !0
          }) || block, !!result2.page.id))
            return ((_b = result2.highlight) == null ? void 0 : _b.text) && (result2.highlight.html = result2.highlight.text.replace(/<gzkNfoUU>/gi, "<b>").replace(/<\/gzkNfoUU>/gi, "</b>")), result2;
        }).filter(Boolean).reduce((map, result2) => __spreadProps2(__spreadValues2({}, map), {
          [result2.page.id]: result2
        }), {});
        searchResult.results = Object.values(searchResultsMap);
      }
      this.state.query === query && this.setState({ isLoading: !1, searchResult, searchError });
    }), this._inputRef = React15.createRef();
  }
  componentDidMount() {
    this._search = (0, import_lodash.default)(this._searchImpl.bind(this), 1e3), this._warmupSearch();
  }
  render() {
    let { isOpen, onClose } = this.props, { isLoading, query, searchResult, searchError } = this.state, hasQuery = !!query.trim();
    return /* @__PURE__ */ React15.createElement(NotionContextConsumer, null, (ctx22) => {
      let { components, defaultPageIcon, mapPageUrl: mapPageUrl2 } = ctx22;
      return /* @__PURE__ */ React15.createElement(components.Modal, {
        isOpen,
        contentLabel: "Search",
        className: "notion-search",
        overlayClassName: "notion-search-overlay",
        onRequestClose: onClose,
        onAfterOpen: this._onAfterOpen
      }, /* @__PURE__ */ React15.createElement("div", {
        className: "quickFindMenu"
      }, /* @__PURE__ */ React15.createElement("div", {
        className: "searchBar"
      }, /* @__PURE__ */ React15.createElement("div", {
        className: "inlineIcon"
      }, isLoading ? /* @__PURE__ */ React15.createElement(LoadingIcon, {
        className: "loadingIcon"
      }) : /* @__PURE__ */ React15.createElement(SearchIcon, null)), /* @__PURE__ */ React15.createElement("input", {
        className: "searchInput",
        placeholder: "Search",
        value: query,
        ref: this._inputRef,
        onChange: this._onChangeQuery
      }), query && /* @__PURE__ */ React15.createElement("div", {
        role: "button",
        className: "clearButton",
        onClick: this._onClearQuery
      }, /* @__PURE__ */ React15.createElement(ClearIcon, {
        className: "clearIcon"
      }))), hasQuery && searchResult && /* @__PURE__ */ React15.createElement(React15.Fragment, null, searchResult.results.length ? /* @__PURE__ */ React15.createElement(NotionContextProvider, __spreadProps2(__spreadValues2({}, ctx22), {
        recordMap: searchResult.recordMap
      }), /* @__PURE__ */ React15.createElement("div", {
        className: "resultsPane"
      }, searchResult.results.map((result) => {
        var _a;
        return /* @__PURE__ */ React15.createElement(components.PageLink, {
          key: result.id,
          className: cs("result", "notion-page-link"),
          href: mapPageUrl2(result.page.id, searchResult.recordMap)
        }, /* @__PURE__ */ React15.createElement(PageTitle, {
          block: result.page,
          defaultIcon: defaultPageIcon
        }), ((_a = result.highlight) == null ? void 0 : _a.html) && /* @__PURE__ */ React15.createElement("div", {
          className: "notion-search-result-highlight",
          dangerouslySetInnerHTML: {
            __html: result.highlight.html
          }
        }));
      })), /* @__PURE__ */ React15.createElement("footer", {
        className: "resultsFooter"
      }, /* @__PURE__ */ React15.createElement("div", null, /* @__PURE__ */ React15.createElement("span", {
        className: "resultsCount"
      }, searchResult.total), searchResult.total === 1 ? " result" : " results"))) : /* @__PURE__ */ React15.createElement("div", {
        className: "noResultsPane"
      }, /* @__PURE__ */ React15.createElement("div", {
        className: "noResults"
      }, "No results"), /* @__PURE__ */ React15.createElement("div", {
        className: "noResultsDetail"
      }, "Try different search terms"))), hasQuery && !searchResult && searchError && /* @__PURE__ */ React15.createElement("div", {
        className: "noResultsPane"
      }, /* @__PURE__ */ React15.createElement("div", {
        className: "noResults"
      }, "Search error"))));
    });
  }
}, Header = ({ block }) => /* @__PURE__ */ React16.createElement("header", {
  className: "notion-header"
}, /* @__PURE__ */ React16.createElement("div", {
  className: "notion-nav-header"
}, /* @__PURE__ */ React16.createElement(Breadcrumbs, {
  block
}), /* @__PURE__ */ React16.createElement(Search, {
  block
}))), Breadcrumbs = ({ block, rootOnly = !1 }) => {
  let { recordMap, mapPageUrl: mapPageUrl2, components } = useNotionContext(), breadcrumbs = React16.useMemo(() => {
    let breadcrumbs2 = Ae(recordMap, block.id);
    return rootOnly ? [breadcrumbs2[0]].filter(Boolean) : breadcrumbs2;
  }, [recordMap, block.id, rootOnly]);
  return /* @__PURE__ */ React16.createElement("div", {
    className: "breadcrumbs",
    key: "breadcrumbs"
  }, breadcrumbs.map((breadcrumb, index) => {
    if (!breadcrumb)
      return null;
    let pageLinkProps = {}, componentMap = {
      pageLink: components.PageLink
    };
    return breadcrumb.active ? componentMap.pageLink = (props) => /* @__PURE__ */ React16.createElement("div", __spreadValues2({}, props)) : pageLinkProps.href = mapPageUrl2(breadcrumb.pageId), /* @__PURE__ */ React16.createElement(React16.Fragment, {
      key: breadcrumb.pageId
    }, /* @__PURE__ */ React16.createElement(componentMap.pageLink, __spreadValues2({
      className: cs("breadcrumb", breadcrumb.active && "active")
    }, pageLinkProps), breadcrumb.icon && /* @__PURE__ */ React16.createElement(PageIcon, {
      className: "icon",
      block: breadcrumb.block
    }), breadcrumb.title && /* @__PURE__ */ React16.createElement("span", {
      className: "title"
    }, breadcrumb.title)), index < breadcrumbs.length - 1 && /* @__PURE__ */ React16.createElement("span", {
      className: "spacer"
    }, "/"));
  }));
}, Search = ({ block, search, title = "Search" }) => {
  let { searchNotion, rootPageId } = useNotionContext(), onSearchNotion = search || searchNotion, [isSearchOpen, setIsSearchOpen] = React16.useState(!1), onOpenSearch = React16.useCallback(() => {
    setIsSearchOpen(!0);
  }, []), onCloseSearch = React16.useCallback(() => {
    setIsSearchOpen(!1);
  }, []);
  (0, import_react_hotkeys_hook.useHotkeys)("cmd+p", (event) => {
    onOpenSearch(), event.preventDefault(), event.stopPropagation();
  }), (0, import_react_hotkeys_hook.useHotkeys)("cmd+k", (event) => {
    onOpenSearch(), event.preventDefault(), event.stopPropagation();
  });
  let hasSearch = !!onSearchNotion;
  return /* @__PURE__ */ React16.createElement(React16.Fragment, null, hasSearch && /* @__PURE__ */ React16.createElement("div", {
    role: "button",
    className: cs("breadcrumb", "button", "notion-search-button"),
    onClick: onOpenSearch
  }, /* @__PURE__ */ React16.createElement(SearchIcon, {
    className: "searchIcon"
  }), title && /* @__PURE__ */ React16.createElement("span", {
    className: "title"
  }, title)), isSearchOpen && hasSearch && /* @__PURE__ */ React16.createElement(SearchDialog, {
    isOpen: isSearchOpen,
    rootBlockId: rootPageId || (block == null ? void 0 : block.id),
    onClose: onCloseSearch,
    searchNotion: onSearchNotion
  }));
};
function SvgCheck(props) {
  return /* @__PURE__ */ React17.createElement("svg", __spreadValues2({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React17.createElement("path", {
    d: "M5.5 12L14 3.5 12.5 2l-7 7-4-4.003L0 6.499z"
  }));
}
var check_default = SvgCheck, Checkbox = ({ isChecked }) => {
  let content = null;
  return isChecked ? content = /* @__PURE__ */ React18.createElement("div", {
    className: "notion-property-checkbox-checked"
  }, /* @__PURE__ */ React18.createElement(check_default, null)) : content = /* @__PURE__ */ React18.createElement("div", {
    className: "notion-property-checkbox-unchecked"
  }), /* @__PURE__ */ React18.createElement("span", {
    className: "notion-property notion-property-checkbox"
  }, content);
}, DefaultLink = (props) => /* @__PURE__ */ React19.createElement("a", __spreadValues2({
  target: "_blank",
  rel: "noopener noreferrer"
}, props)), DefaultLinkMemo = React19.memo(DefaultLink), DefaultPageLink = (props) => /* @__PURE__ */ React19.createElement("a", __spreadValues2({}, props)), DefaultPageLinkMemo = React19.memo(DefaultPageLink), DefaultEmbed = AssetWrapper, DefaultHeader = Header;
var dummyComponent = (name) => () => (console.warn(`Warning: using empty component "${name}" (you should override this in NotionRenderer.components)`), null), dummyOverrideFn = (_, defaultValueFn) => defaultValueFn(), defaultComponents = {
  Image: null,
  Link: DefaultLinkMemo,
  PageLink: DefaultPageLinkMemo,
  Checkbox,
  Callout: void 0,
  Code: dummyComponent("Code"),
  Equation: dummyComponent("Equation"),
  Collection: dummyComponent("Collection"),
  Property: void 0,
  propertyTextValue: dummyOverrideFn,
  propertySelectValue: dummyOverrideFn,
  propertyRelationValue: dummyOverrideFn,
  propertyFormulaValue: dummyOverrideFn,
  propertyTitleValue: dummyOverrideFn,
  propertyPersonValue: dummyOverrideFn,
  propertyFileValue: dummyOverrideFn,
  propertyCheckboxValue: dummyOverrideFn,
  propertyUrlValue: dummyOverrideFn,
  propertyEmailValue: dummyOverrideFn,
  propertyPhoneNumberValue: dummyOverrideFn,
  propertyNumberValue: dummyOverrideFn,
  propertyLastEditedTimeValue: dummyOverrideFn,
  propertyCreatedTimeValue: dummyOverrideFn,
  propertyDateValue: dummyOverrideFn,
  Pdf: dummyComponent("Pdf"),
  Tweet: dummyComponent("Tweet"),
  Modal: dummyComponent("Modal"),
  Header: DefaultHeader,
  Embed: DefaultEmbed
}, defaultNotionContext = {
  recordMap: {
    block: {},
    collection: {},
    collection_view: {},
    collection_query: {},
    notion_user: {},
    signed_urls: {}
  },
  components: defaultComponents,
  mapPageUrl: defaultMapPageUrl(),
  mapImageUrl: defaultMapImageUrl,
  searchNotion: null,
  fullPage: !1,
  darkMode: !1,
  previewImages: !1,
  forceCustomImages: !1,
  showCollectionViewDropdown: !0,
  linkTableTitleProperties: !0,
  showTableOfContents: !1,
  minTableOfContentsItems: 3,
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  zoom: null
}, ctx = React19.createContext(defaultNotionContext), NotionContextProvider = (_a) => {
  var _b = _a, {
    components: themeComponents = {},
    children,
    mapPageUrl: mapPageUrl2,
    mapImageUrl,
    rootPageId
  } = _b, rest = __objRest(_b, [
    "components",
    "children",
    "mapPageUrl",
    "mapImageUrl",
    "rootPageId"
  ]);
  for (let key of Object.keys(rest))
    rest[key] === void 0 && delete rest[key];
  let wrappedThemeComponents = React19.useMemo(() => __spreadValues2({}, themeComponents), [themeComponents]);
  wrappedThemeComponents.nextImage && (wrappedThemeComponents.Image = wrapNextImage(themeComponents.nextImage)), wrappedThemeComponents.nextLink && (wrappedThemeComponents.nextLink = wrapNextLink(themeComponents.nextLink));
  for (let key of Object.keys(wrappedThemeComponents))
    wrappedThemeComponents[key] || delete wrappedThemeComponents[key];
  let value = React19.useMemo(() => __spreadProps2(__spreadValues2(__spreadValues2({}, defaultNotionContext), rest), {
    rootPageId,
    mapPageUrl: mapPageUrl2 ?? defaultMapPageUrl(rootPageId),
    mapImageUrl: mapImageUrl ?? defaultMapImageUrl,
    components: __spreadValues2(__spreadValues2({}, defaultComponents), wrappedThemeComponents)
  }), [mapImageUrl, mapPageUrl2, wrappedThemeComponents, rootPageId, rest]);
  return /* @__PURE__ */ React19.createElement(ctx.Provider, {
    value
  }, children);
}, NotionContextConsumer = ctx.Consumer, useNotionContext = () => React19.useContext(ctx), isIconBlock = (value) => value.type === "page" || value.type === "callout" || value.type === "collection_view" || value.type === "collection_view_page", PageIconImpl = ({
  block,
  className,
  inline = !0,
  hideDefaultIcon = !1,
  defaultIcon
}) => {
  var _a;
  let { mapImageUrl, recordMap } = useNotionContext(), isImage = !1, content = null;
  if (isIconBlock(block)) {
    let icon = ((_a = B(block, recordMap)) == null ? void 0 : _a.trim()) || defaultIcon, title = T(block, recordMap);
    if (icon && isUrl(icon)) {
      let url = mapImageUrl(icon, block);
      isImage = !0, content = /* @__PURE__ */ React20.createElement(LazyImage, {
        src: url,
        alt: title || "page icon",
        className: cs(className, "notion-page-icon")
      });
    } else
      icon ? (isImage = !1, content = /* @__PURE__ */ React20.createElement("span", {
        className: cs(className, "notion-page-icon"),
        role: "img",
        "aria-label": icon
      }, icon)) : hideDefaultIcon || (isImage = !0, content = /* @__PURE__ */ React20.createElement(DefaultPageIcon, {
        className: cs(className, "notion-page-icon"),
        alt: title || "page icon"
      }));
  }
  return content ? /* @__PURE__ */ React20.createElement("div", {
    className: cs(inline ? "notion-page-icon-inline" : "notion-page-icon-hero", isImage ? "notion-page-icon-image" : "notion-page-icon-span")
  }, content) : null;
}, PageIcon = React20.memo(PageIconImpl), import_lodash2 = __toESM2(require_lodash(), 1), PageAside = ({
  toc,
  activeSection,
  setActiveSection,
  pageAside,
  hasToc,
  hasAside,
  className
}) => {
  let actionSectionScrollSpy = React21.useMemo(() => (0, import_lodash2.default)(() => {
    let sections = document.getElementsByClassName("notion-h"), prevBBox = null, currentSectionId = activeSection;
    for (let i = 0; i < sections.length; ++i) {
      let section = sections[i];
      if (!section || !(section instanceof Element))
        continue;
      currentSectionId || (currentSectionId = section.getAttribute("data-id"));
      let bbox = section.getBoundingClientRect(), prevHeight = prevBBox ? bbox.top - prevBBox.bottom : 0, offset = Math.max(150, prevHeight / 4);
      if (bbox.top - offset < 0) {
        currentSectionId = section.getAttribute("data-id"), prevBBox = bbox;
        continue;
      }
      break;
    }
    setActiveSection(currentSectionId);
  }, 100), [
    setActiveSection
  ]);
  return React21.useEffect(() => {
    if (!!hasToc)
      return window.addEventListener("scroll", actionSectionScrollSpy), actionSectionScrollSpy(), () => {
        window.removeEventListener("scroll", actionSectionScrollSpy);
      };
  }, [hasToc, actionSectionScrollSpy]), hasAside ? /* @__PURE__ */ React21.createElement("aside", {
    className: cs("notion-aside", className)
  }, hasToc && /* @__PURE__ */ React21.createElement("div", {
    className: "notion-aside-table-of-contents"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: "notion-aside-table-of-contents-header"
  }, "Table of Contents"), /* @__PURE__ */ React21.createElement("nav", {
    className: "notion-table-of-contents"
  }, toc.map((tocItem) => {
    let id = M(tocItem.id);
    return /* @__PURE__ */ React21.createElement("a", {
      key: id,
      href: `#${id}`,
      className: cs("notion-table-of-contents-item", `notion-table-of-contents-item-indent-level-${tocItem.indentLevel}`, activeSection === id && "notion-table-of-contents-active-item")
    }, /* @__PURE__ */ React21.createElement("span", {
      className: "notion-table-of-contents-item-body",
      style: {
        display: "inline-block",
        marginLeft: tocItem.indentLevel * 16
      }
    }, tocItem.text));
  }))), pageAside) : null;
}, LinkIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React222.createElement("svg", __spreadProps2(__spreadValues2({
    className
  }, rest), {
    viewBox: "0 0 16 16",
    width: "16",
    height: "16"
  }), /* @__PURE__ */ React222.createElement("path", {
    fillRule: "evenodd",
    d: "M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
  }));
}, GoogleDrive = ({ block, className }) => {
  var _a;
  let { components, mapImageUrl } = useNotionContext(), properties = (_a = block.format) == null ? void 0 : _a.drive_properties;
  if (!properties)
    return null;
  let domain;
  try {
    domain = new URL(properties.url).hostname;
  } catch {
  }
  return /* @__PURE__ */ React23.createElement("div", {
    className: cs("notion-google-drive", className)
  }, /* @__PURE__ */ React23.createElement(components.Link, {
    className: "notion-google-drive-link",
    href: properties.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "notion-google-drive-preview"
  }, /* @__PURE__ */ React23.createElement(GracefulImage, {
    src: mapImageUrl(properties.thumbnail, block),
    alt: properties.title || "Google Drive Document",
    loading: "lazy"
  })), /* @__PURE__ */ React23.createElement("div", {
    className: "notion-google-drive-body"
  }, properties.title && /* @__PURE__ */ React23.createElement("div", {
    className: "notion-google-drive-body-title"
  }, properties.title), properties.icon && domain && /* @__PURE__ */ React23.createElement("div", {
    className: "notion-google-drive-body-source"
  }, properties.icon && /* @__PURE__ */ React23.createElement("div", {
    className: "notion-google-drive-body-source-icon",
    style: {
      backgroundImage: `url(${properties.icon})`
    }
  }), domain && /* @__PURE__ */ React23.createElement("div", {
    className: "notion-google-drive-body-source-domain"
  }, domain)))));
}, Audio = ({ block, className }) => {
  var _a, _b, _c;
  let { recordMap } = useNotionContext(), source = recordMap.signed_urls[block.id] || ((_c = (_b = (_a = block.properties) == null ? void 0 : _a.source) == null ? void 0 : _b[0]) == null ? void 0 : _c[0]);
  return /* @__PURE__ */ React24.createElement("div", {
    className: cs("notion-audio", className)
  }, /* @__PURE__ */ React24.createElement("audio", {
    controls: !0,
    preload: "none",
    src: source
  }));
}, FileIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest(_a, ["className"]);
  return /* @__PURE__ */ React25.createElement("svg", __spreadProps2(__spreadValues2({
    className
  }, rest), {
    viewBox: "0 0 30 30"
  }), /* @__PURE__ */ React25.createElement("path", {
    d: "M22,8v12c0,3.866-3.134,7-7,7s-7-3.134-7-7V8c0-2.762,2.238-5,5-5s5,2.238,5,5v12c0,1.657-1.343,3-3,3s-3-1.343-3-3V8h-2v12c0,2.762,2.238,5,5,5s5-2.238,5-5V8c0-3.866-3.134-7-7-7S6,4.134,6,8v12c0,4.971,4.029,9,9,9s9-4.029,9-9V8H22z"
  }));
}, File = ({ block, className }) => {
  var _a, _b, _c, _d, _e;
  let { components, recordMap } = useNotionContext(), source = recordMap.signed_urls[block.id] || ((_c = (_b = (_a = block.properties) == null ? void 0 : _a.source) == null ? void 0 : _b[0]) == null ? void 0 : _c[0]);
  return /* @__PURE__ */ React26.createElement("div", {
    className: cs("notion-file", className)
  }, /* @__PURE__ */ React26.createElement(components.Link, {
    className: "notion-file-link",
    href: source,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React26.createElement(FileIcon, {
    className: "notion-file-icon"
  }), /* @__PURE__ */ React26.createElement("div", {
    className: "notion-file-info"
  }, /* @__PURE__ */ React26.createElement("div", {
    className: "notion-file-title"
  }, /* @__PURE__ */ React26.createElement(Text, {
    value: ((_d = block.properties) == null ? void 0 : _d.title) || [["File"]],
    block
  })), ((_e = block.properties) == null ? void 0 : _e.size) && /* @__PURE__ */ React26.createElement("div", {
    className: "notion-file-size"
  }, /* @__PURE__ */ React26.createElement(Text, {
    value: block.properties.size,
    block
  })))));
}, SyncPointerBlock = ({ block, level }) => {
  var _a, _b;
  if (!block)
    return console.warn("missing sync pointer block", block.id), null;
  let syncPointerBlock = block, referencePointerId = (_b = (_a = syncPointerBlock == null ? void 0 : syncPointerBlock.format) == null ? void 0 : _a.transclusion_reference_pointer) == null ? void 0 : _b.id;
  return referencePointerId ? /* @__PURE__ */ React27.createElement(NotionBlockRenderer, {
    key: referencePointerId,
    level,
    blockId: referencePointerId
  }) : null;
}, tocIndentLevelCache = {}, pageCoverStyleCache = {}, Block = (props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
  let ctx22 = useNotionContext(), {
    components,
    fullPage,
    darkMode,
    recordMap,
    mapPageUrl: mapPageUrl2,
    mapImageUrl,
    showTableOfContents,
    minTableOfContentsItems,
    defaultPageIcon,
    defaultPageCover,
    defaultPageCoverPosition
  } = ctx22, [activeSection, setActiveSection] = React28.useState(null), {
    block,
    children,
    level,
    className,
    bodyClassName,
    header,
    footer,
    pageHeader,
    pageFooter,
    pageTitle,
    pageAside,
    pageCover,
    hideBlockId,
    disableHeader
  } = props;
  if (!block)
    return null;
  level === 0 && block.type === "collection_view" && (block.type = "collection_view_page");
  let blockId = hideBlockId ? "notion-block" : `notion-block-${M(block.id)}`;
  switch (block.type) {
    case "collection_view_page":
    case "page":
      if (level === 0) {
        let {
          page_icon = defaultPageIcon,
          page_cover = defaultPageCover,
          page_cover_position = defaultPageCoverPosition,
          page_full_width,
          page_small_text
        } = block.format || {};
        if (fullPage) {
          let properties = block.type === "page" ? block.properties : {
            title: (_b = (_a = recordMap.collection[w(block, recordMap)]) == null ? void 0 : _a.value) == null ? void 0 : _b.name
          }, pageCoverObjectPosition = `center ${(1 - (page_cover_position || 0.5)) * 100}%`, pageCoverStyle = pageCoverStyleCache[pageCoverObjectPosition];
          pageCoverStyle || (pageCoverStyle = pageCoverStyleCache[pageCoverObjectPosition] = {
            objectPosition: pageCoverObjectPosition
          });
          let pageIcon = (_c = B(block, recordMap)) != null ? _c : defaultPageIcon, isPageIconUrl = pageIcon && isUrl(pageIcon), toc = S(block, recordMap), hasToc = showTableOfContents && toc.length >= minTableOfContentsItems, hasAside = (hasToc || pageAside) && !page_full_width, hasPageCover = pageCover || page_cover;
          return /* @__PURE__ */ React28.createElement("div", {
            className: cs("notion", "notion-app", darkMode ? "dark-mode" : "light-mode", blockId, className)
          }, /* @__PURE__ */ React28.createElement("div", {
            className: "notion-viewport"
          }), /* @__PURE__ */ React28.createElement("div", {
            className: "notion-frame"
          }, !disableHeader && /* @__PURE__ */ React28.createElement(components.Header, {
            block
          }), header, /* @__PURE__ */ React28.createElement("div", {
            className: "notion-page-scroller"
          }, hasPageCover && (pageCover || /* @__PURE__ */ React28.createElement("div", {
            className: "notion-page-cover-wrapper"
          }, /* @__PURE__ */ React28.createElement(LazyImage, {
            src: mapImageUrl(page_cover, block),
            alt: h(properties == null ? void 0 : properties.title),
            priority: !0,
            className: "notion-page-cover",
            style: pageCoverStyle
          }))), /* @__PURE__ */ React28.createElement("main", {
            className: cs("notion-page", hasPageCover ? "notion-page-has-cover" : "notion-page-no-cover", page_icon ? "notion-page-has-icon" : "notion-page-no-icon", isPageIconUrl ? "notion-page-has-image-icon" : "notion-page-has-text-icon", "notion-full-page", page_full_width && "notion-full-width", page_small_text && "notion-small-text", bodyClassName)
          }, page_icon && /* @__PURE__ */ React28.createElement(PageIcon, {
            block,
            defaultIcon: defaultPageIcon,
            inline: !1
          }), pageHeader, /* @__PURE__ */ React28.createElement("h1", {
            className: "notion-title"
          }, pageTitle ?? /* @__PURE__ */ React28.createElement(Text, {
            value: properties == null ? void 0 : properties.title,
            block
          })), (block.type === "collection_view_page" || block.type === "page" && block.parent_table === "collection") && /* @__PURE__ */ React28.createElement(components.Collection, {
            block,
            ctx: ctx22
          }), block.type !== "collection_view_page" && /* @__PURE__ */ React28.createElement("div", {
            className: cs("notion-page-content", hasAside && "notion-page-content-has-aside", hasToc && "notion-page-content-has-toc")
          }, /* @__PURE__ */ React28.createElement("article", {
            className: "notion-page-content-inner"
          }, children), hasAside && /* @__PURE__ */ React28.createElement(PageAside, {
            toc,
            activeSection,
            setActiveSection,
            hasToc,
            hasAside,
            pageAside
          })), pageFooter), footer)));
        } else
          return /* @__PURE__ */ React28.createElement("main", {
            className: cs("notion", darkMode ? "dark-mode" : "light-mode", "notion-page", page_full_width && "notion-full-width", page_small_text && "notion-small-text", blockId, className, bodyClassName)
          }, /* @__PURE__ */ React28.createElement("div", {
            className: "notion-viewport"
          }), pageHeader, (block.type === "collection_view_page" || block.type === "page" && block.parent_table === "collection") && /* @__PURE__ */ React28.createElement(components.Collection, {
            block,
            ctx: ctx22
          }), block.type !== "collection_view_page" && children, pageFooter);
      } else {
        let blockColor = (_d = block.format) == null ? void 0 : _d.block_color;
        return /* @__PURE__ */ React28.createElement(components.PageLink, {
          className: cs("notion-page-link", blockColor && `notion-${blockColor}`, blockId),
          href: mapPageUrl2(block.id)
        }, /* @__PURE__ */ React28.createElement(PageTitle, {
          block
        }));
      }
    case "header":
    case "sub_header":
    case "sub_sub_header": {
      if (!block.properties)
        return null;
      let blockColor = (_e = block.format) == null ? void 0 : _e.block_color, id = M(block.id), title = h(block.properties.title) || `Notion Header ${id}`, indentLevel = tocIndentLevelCache[block.id], indentLevelClass;
      if (indentLevel === void 0) {
        let page = O(block, recordMap);
        if (page) {
          let tocItem = S(page, recordMap).find((tocItem2) => tocItem2.id === block.id);
          tocItem && (indentLevel = tocItem.indentLevel, tocIndentLevelCache[block.id] = indentLevel);
        }
      }
      indentLevel !== void 0 && (indentLevelClass = `notion-h-indent-${indentLevel}`);
      let isH1 = block.type === "header", isH2 = block.type === "sub_header", isH3 = block.type === "sub_sub_header", classNameStr = cs(isH1 && "notion-h notion-h1", isH2 && "notion-h notion-h2", isH3 && "notion-h notion-h3", blockColor && `notion-${blockColor}`, indentLevelClass, blockId), innerHeader = /* @__PURE__ */ React28.createElement("span", null, /* @__PURE__ */ React28.createElement("div", {
        id,
        className: "notion-header-anchor"
      }), !((_f = block.format) == null ? void 0 : _f.toggleable) && /* @__PURE__ */ React28.createElement("a", {
        className: "notion-hash-link",
        href: `#${id}`,
        title
      }, /* @__PURE__ */ React28.createElement(LinkIcon, null)), /* @__PURE__ */ React28.createElement("span", {
        className: "notion-h-title"
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: block.properties.title,
        block
      }))), headerBlock;
      return isH1 ? headerBlock = /* @__PURE__ */ React28.createElement("h2", {
        className: classNameStr,
        "data-id": id
      }, innerHeader) : isH2 ? headerBlock = /* @__PURE__ */ React28.createElement("h3", {
        className: classNameStr,
        "data-id": id
      }, innerHeader) : headerBlock = /* @__PURE__ */ React28.createElement("h4", {
        className: classNameStr,
        "data-id": id
      }, innerHeader), ((_g = block.format) == null ? void 0 : _g.toggleable) ? /* @__PURE__ */ React28.createElement("details", {
        className: cs("notion-toggle", blockId)
      }, /* @__PURE__ */ React28.createElement("summary", null, headerBlock), /* @__PURE__ */ React28.createElement("div", null, children)) : headerBlock;
    }
    case "divider":
      return /* @__PURE__ */ React28.createElement("hr", {
        className: cs("notion-hr", blockId)
      });
    case "text": {
      if (!block.properties && !((_h = block.content) == null ? void 0 : _h.length))
        return /* @__PURE__ */ React28.createElement("div", {
          className: cs("notion-blank", blockId)
        }, "\xA0");
      let blockColor = (_i = block.format) == null ? void 0 : _i.block_color;
      return /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-text", blockColor && `notion-${blockColor}`, blockId)
      }, ((_j = block.properties) == null ? void 0 : _j.title) && /* @__PURE__ */ React28.createElement(Text, {
        value: block.properties.title,
        block
      }), children && /* @__PURE__ */ React28.createElement("div", {
        className: "notion-text-children"
      }, children));
    }
    case "bulleted_list":
    case "numbered_list": {
      let wrapList = (content, start2) => block.type === "bulleted_list" ? /* @__PURE__ */ React28.createElement("ul", {
        className: cs("notion-list", "notion-list-disc", blockId)
      }, content) : /* @__PURE__ */ React28.createElement("ol", {
        start: start2,
        className: cs("notion-list", "notion-list-numbered", blockId)
      }, content), output = null;
      block.content ? output = /* @__PURE__ */ React28.createElement(React28.Fragment, null, block.properties && /* @__PURE__ */ React28.createElement("li", null, /* @__PURE__ */ React28.createElement(Text, {
        value: block.properties.title,
        block
      })), wrapList(children)) : output = block.properties ? /* @__PURE__ */ React28.createElement("li", null, /* @__PURE__ */ React28.createElement(Text, {
        value: block.properties.title,
        block
      })) : null;
      let isTopLevel = block.type !== ((_l = (_k = recordMap.block[block.parent_id]) == null ? void 0 : _k.value) == null ? void 0 : _l.type), start = getListNumber(block.id, recordMap.block);
      return isTopLevel ? wrapList(output, start) : output;
    }
    case "embed":
      return /* @__PURE__ */ React28.createElement(components.Embed, {
        blockId,
        block
      });
    case "tweet":
    case "maps":
    case "pdf":
    case "figma":
    case "typeform":
    case "codepen":
    case "excalidraw":
    case "image":
    case "gist":
    case "video":
      return /* @__PURE__ */ React28.createElement(AssetWrapper, {
        blockId,
        block
      });
    case "drive":
      return !((_m = block.format) == null ? void 0 : _m.drive_properties) && ((_n = block.format) == null ? void 0 : _n.display_source) ? /* @__PURE__ */ React28.createElement(AssetWrapper, {
        blockId,
        block
      }) : /* @__PURE__ */ React28.createElement(GoogleDrive, {
        block,
        className: blockId
      });
    case "audio":
      return /* @__PURE__ */ React28.createElement(Audio, {
        block,
        className: blockId
      });
    case "file":
      return /* @__PURE__ */ React28.createElement(File, {
        block,
        className: blockId
      });
    case "equation":
      return /* @__PURE__ */ React28.createElement(components.Equation, {
        block,
        inline: !1,
        className: blockId
      });
    case "code":
      return /* @__PURE__ */ React28.createElement(components.Code, {
        block
      });
    case "column_list":
      return /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-row", blockId)
      }, children);
    case "column": {
      let spacerWidth = "min(32px, 4vw)", ratio = ((_o = block.format) == null ? void 0 : _o.column_ratio) || 0.5, parent = (_p = recordMap.block[block.parent_id]) == null ? void 0 : _p.value, style = { width: `calc((100% - (${(((_q = parent == null ? void 0 : parent.content) == null ? void 0 : _q.length) || Math.max(2, Math.ceil(1 / ratio))) - 1} * ${spacerWidth})) * ${ratio})` };
      return /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-column", blockId),
        style
      }, children), /* @__PURE__ */ React28.createElement("div", {
        className: "notion-spacer"
      }));
    }
    case "quote": {
      if (!block.properties)
        return null;
      let blockColor = (_r = block.format) == null ? void 0 : _r.block_color;
      return /* @__PURE__ */ React28.createElement("blockquote", {
        className: cs("notion-quote", blockColor && `notion-${blockColor}`, blockId)
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: block.properties.title,
        block
      }));
    }
    case "collection_view":
      return /* @__PURE__ */ React28.createElement(components.Collection, {
        block,
        className: blockId,
        ctx: ctx22
      });
    case "callout":
      return components.Callout ? /* @__PURE__ */ React28.createElement(components.Callout, {
        block,
        className: blockId
      }) : /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-callout", ((_s = block.format) == null ? void 0 : _s.block_color) && `notion-${(_t = block.format) == null ? void 0 : _t.block_color}_co`, blockId)
      }, /* @__PURE__ */ React28.createElement(PageIcon, {
        block
      }), /* @__PURE__ */ React28.createElement("div", {
        className: "notion-callout-text"
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: (_u = block.properties) == null ? void 0 : _u.title,
        block
      }), children));
    case "bookmark": {
      if (!block.properties)
        return null;
      let link = block.properties.link;
      if (!link || !((_v = link[0]) == null ? void 0 : _v[0]))
        return null;
      let title = h(block.properties.title);
      if (title || (title = h(link)), title && title.startsWith("http"))
        try {
          title = new URL(title).hostname;
        } catch {
        }
      return /* @__PURE__ */ React28.createElement("div", {
        className: "notion-row"
      }, /* @__PURE__ */ React28.createElement(components.Link, {
        target: "_blank",
        rel: "noopener noreferrer",
        className: cs("notion-bookmark", ((_w = block.format) == null ? void 0 : _w.block_color) && `notion-${block.format.block_color}`, blockId),
        href: link[0][0]
      }, /* @__PURE__ */ React28.createElement("div", null, title && /* @__PURE__ */ React28.createElement("div", {
        className: "notion-bookmark-title"
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: [[title]],
        block
      })), ((_x = block.properties) == null ? void 0 : _x.description) && /* @__PURE__ */ React28.createElement("div", {
        className: "notion-bookmark-description"
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: (_y = block.properties) == null ? void 0 : _y.description,
        block
      })), /* @__PURE__ */ React28.createElement("div", {
        className: "notion-bookmark-link"
      }, ((_z = block.format) == null ? void 0 : _z.bookmark_icon) && /* @__PURE__ */ React28.createElement("div", {
        className: "notion-bookmark-link-icon"
      }, /* @__PURE__ */ React28.createElement(LazyImage, {
        src: mapImageUrl((_A = block.format) == null ? void 0 : _A.bookmark_icon, block),
        alt: title
      })), /* @__PURE__ */ React28.createElement("div", {
        className: "notion-bookmark-link-text"
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: link,
        block
      })))), ((_B = block.format) == null ? void 0 : _B.bookmark_cover) && /* @__PURE__ */ React28.createElement("div", {
        className: "notion-bookmark-image"
      }, /* @__PURE__ */ React28.createElement(LazyImage, {
        src: mapImageUrl((_C = block.format) == null ? void 0 : _C.bookmark_cover, block),
        alt: h((_D = block.properties) == null ? void 0 : _D.title),
        style: {
          objectFit: "cover"
        }
      }))));
    }
    case "toggle":
      return /* @__PURE__ */ React28.createElement("details", {
        className: cs("notion-toggle", blockId)
      }, /* @__PURE__ */ React28.createElement("summary", null, /* @__PURE__ */ React28.createElement(Text, {
        value: (_E = block.properties) == null ? void 0 : _E.title,
        block
      })), /* @__PURE__ */ React28.createElement("div", null, children));
    case "table_of_contents": {
      let page = O(block, recordMap);
      if (!page)
        return null;
      let toc = S(page, recordMap), blockColor = (_F = block.format) == null ? void 0 : _F.block_color;
      return /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-table-of-contents", blockColor && `notion-${blockColor}`, blockId)
      }, toc.map((tocItem) => /* @__PURE__ */ React28.createElement("a", {
        key: tocItem.id,
        href: `#${M(tocItem.id)}`,
        className: "notion-table-of-contents-item"
      }, /* @__PURE__ */ React28.createElement("span", {
        className: "notion-table-of-contents-item-body",
        style: {
          display: "inline-block",
          marginLeft: tocItem.indentLevel * 24
        }
      }, tocItem.text))));
    }
    case "to_do": {
      let isChecked = ((_I = (_H = (_G = block.properties) == null ? void 0 : _G.checked) == null ? void 0 : _H[0]) == null ? void 0 : _I[0]) === "Yes";
      return /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-to-do", blockId)
      }, /* @__PURE__ */ React28.createElement("div", {
        className: "notion-to-do-item"
      }, /* @__PURE__ */ React28.createElement(components.Checkbox, {
        blockId,
        isChecked
      }), /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-to-do-body", isChecked && "notion-to-do-checked")
      }, /* @__PURE__ */ React28.createElement(Text, {
        value: (_J = block.properties) == null ? void 0 : _J.title,
        block
      }))), /* @__PURE__ */ React28.createElement("div", {
        className: "notion-to-do-children"
      }, children));
    }
    case "transclusion_container":
      return /* @__PURE__ */ React28.createElement("div", {
        className: cs("notion-sync-block", blockId)
      }, children);
    case "transclusion_reference":
      return /* @__PURE__ */ React28.createElement(SyncPointerBlock, __spreadValues2({
        block,
        level: level + 1
      }, props));
    case "alias": {
      let blockPointerId = (_L = (_K = block == null ? void 0 : block.format) == null ? void 0 : _K.alias_pointer) == null ? void 0 : _L.id, linkedBlock = (_M = recordMap.block[blockPointerId]) == null ? void 0 : _M.value;
      return linkedBlock ? /* @__PURE__ */ React28.createElement(components.PageLink, {
        className: cs("notion-page-link", blockPointerId),
        href: mapPageUrl2(blockPointerId)
      }, /* @__PURE__ */ React28.createElement(PageTitle, {
        block: linkedBlock
      })) : (console.log('"alias" missing block', blockPointerId), null);
    }
    case "table":
      return /* @__PURE__ */ React28.createElement("table", {
        className: cs("notion-simple-table", blockId)
      }, /* @__PURE__ */ React28.createElement("tbody", null, children));
    case "table_row": {
      let tableBlock = (_N = recordMap.block[block.parent_id]) == null ? void 0 : _N.value, order = (_O = tableBlock.format) == null ? void 0 : _O.table_block_column_order, formatMap = (_P = tableBlock.format) == null ? void 0 : _P.table_block_column_format;
      return !tableBlock || !order ? null : /* @__PURE__ */ React28.createElement("tr", {
        className: cs("notion-simple-table-row", blockId)
      }, order.map((column) => {
        var _a2, _b2, _c2;
        let color = (_a2 = formatMap == null ? void 0 : formatMap[column]) == null ? void 0 : _a2.color;
        return /* @__PURE__ */ React28.createElement("td", {
          key: column,
          className: color ? `notion-${color}` : "",
          style: {
            width: ((_b2 = formatMap == null ? void 0 : formatMap[column]) == null ? void 0 : _b2.width) || 120
          }
        }, /* @__PURE__ */ React28.createElement("div", {
          className: "notion-simple-table-cell"
        }, /* @__PURE__ */ React28.createElement(Text, {
          value: ((_c2 = block.properties) == null ? void 0 : _c2[column]) || [["\u3164"]],
          block
        })));
      }));
    }
    case "external_object_instance":
      return /* @__PURE__ */ React28.createElement(EOI, {
        block,
        className: blockId
      });
    default:
      return console.log("Unsupported type " + block.type, JSON.stringify(block, null, 2)), /* @__PURE__ */ React28.createElement("div", null);
  }
  return null;
}, NotionRenderer = (_a) => {
  var _b = _a, {
    components,
    recordMap,
    mapPageUrl: mapPageUrl2,
    mapImageUrl,
    searchNotion,
    fullPage,
    rootPageId,
    rootDomain,
    darkMode,
    previewImages,
    forceCustomImages,
    showCollectionViewDropdown,
    linkTableTitleProperties,
    showTableOfContents,
    minTableOfContentsItems,
    defaultPageIcon,
    defaultPageCover,
    defaultPageCoverPosition
  } = _b, rest = __objRest(_b, [
    "components",
    "recordMap",
    "mapPageUrl",
    "mapImageUrl",
    "searchNotion",
    "fullPage",
    "rootPageId",
    "rootDomain",
    "darkMode",
    "previewImages",
    "forceCustomImages",
    "showCollectionViewDropdown",
    "linkTableTitleProperties",
    "showTableOfContents",
    "minTableOfContentsItems",
    "defaultPageIcon",
    "defaultPageCover",
    "defaultPageCoverPosition"
  ]);
  let zoom = React29.useMemo(() => typeof window < "u" && (0, import_medium_zoom.default)({
    background: "rgba(0, 0, 0, 0.8)",
    minZoomScale: 2,
    margin: getMediumZoomMargin()
  }), []);
  return /* @__PURE__ */ React29.createElement(NotionContextProvider, {
    components,
    recordMap,
    mapPageUrl: mapPageUrl2,
    mapImageUrl,
    searchNotion,
    fullPage,
    rootPageId,
    rootDomain,
    darkMode,
    previewImages,
    forceCustomImages,
    showCollectionViewDropdown,
    linkTableTitleProperties,
    showTableOfContents,
    minTableOfContentsItems,
    defaultPageIcon,
    defaultPageCover,
    defaultPageCoverPosition,
    zoom
  }, /* @__PURE__ */ React29.createElement(NotionBlockRenderer, __spreadValues2({}, rest)));
}, NotionBlockRenderer = (_a) => {
  var _b = _a, { level = 0, blockId } = _b, props = __objRest(_b, ["level", "blockId"]), _a2, _b2;
  let { recordMap } = useNotionContext(), id = blockId || Object.keys(recordMap.block)[0], block = (_a2 = recordMap.block[id]) == null ? void 0 : _a2.value;
  return block ? /* @__PURE__ */ React29.createElement(Block, __spreadValues2({
    key: id,
    level,
    block
  }, props), (_b2 = block == null ? void 0 : block.content) == null ? void 0 : _b2.map((contentBlockId) => /* @__PURE__ */ React29.createElement(NotionBlockRenderer, __spreadValues2({
    key: contentBlockId,
    blockId: contentBlockId,
    level: level + 1
  }, props)))) : (console.warn("missing block", blockId), null);
};
function getMediumZoomMargin() {
  let width = window.innerWidth;
  return width < 500 ? 8 : width < 800 ? 20 : width < 1280 ? 30 : width < 1600 ? 40 : width < 1920 ? 48 : 72;
}

// app/components/NotionPageHeader.tsx
var React30 = __toESM(require("react"));
var NotionPageHeader = ({ block }) => /* @__PURE__ */ React30.createElement("header", {
  className: "notion-header"
}, /* @__PURE__ */ React30.createElement("div", {
  className: "notion-nav-header"
}, /* @__PURE__ */ React30.createElement(Breadcrumbs, {
  block,
  rootOnly: !0
})));

// app/components/styles.module.css
var styles_module_default = "/build/_assets/styles.module-FQPKFTVS.css";

// node_modules/react-notion-x/build/third-party/collection.js
var React54 = __toESM(require("react"), 1);
var import_react_use = require("react-use"), DropdownMenu = __toESM(require("@radix-ui/react-dropdown-menu"), 1), React39 = __toESM(require("react"), 1), React172 = __toESM(require("react"), 1), React31 = __toESM(require("react"), 1), React210 = __toESM(require("react"), 1), React32 = __toESM(require("react"), 1), React42 = __toESM(require("react"), 1), React52 = __toESM(require("react"), 1), React62 = __toESM(require("react"), 1), React72 = __toESM(require("react"), 1), React82 = __toESM(require("react"), 1), React92 = __toESM(require("react"), 1), React102 = __toESM(require("react"), 1), React112 = __toESM(require("react"), 1), React122 = __toESM(require("react"), 1), React132 = __toESM(require("react"), 1), React142 = __toESM(require("react"), 1), React152 = __toESM(require("react"), 1), React162 = __toESM(require("react"), 1), React38 = __toESM(require("react"), 1);
var React37 = __toESM(require("react"), 1), React182 = __toESM(require("react"), 1), import_react_fast_compare2 = __toESM(require("react-fast-compare"), 1), React34 = __toESM(require("react"), 1), React212 = __toESM(require("react"), 1);
var React192 = __toESM(require("react"), 1), import_react_lazy_images2 = require("react-lazy-images");
var React202 = __toESM(require("react"), 1), React282 = __toESM(require("react"), 1);
var React242 = __toESM(require("react"), 1);
var React232 = __toESM(require("react"), 1);
var React223 = __toESM(require("react"), 1), React252 = __toESM(require("react"), 1), import_react_image2 = require("react-image"), React272 = __toESM(require("react"), 1), React262 = __toESM(require("react"), 1), React33 = __toESM(require("react"), 1), import_react_hotkeys_hook2 = require("react-hotkeys-hook");
var React292 = __toESM(require("react"), 1), React322 = __toESM(require("react"), 1);
var React302 = __toESM(require("react"), 1), React312 = __toESM(require("react"), 1);
var React36 = __toESM(require("react"), 1), React35 = __toESM(require("react"), 1);
var React40 = __toESM(require("react"), 1), React41 = __toESM(require("react"), 1), React422 = __toESM(require("react"), 1), React43 = __toESM(require("react"), 1), React44 = __toESM(require("react"), 1), React45 = __toESM(require("react"), 1), React53 = __toESM(require("react"), 1), React47 = __toESM(require("react"), 1), React46 = __toESM(require("react"), 1), React49 = __toESM(require("react"), 1), React48 = __toESM(require("react"), 1);
var React50 = __toESM(require("react"), 1), React522 = __toESM(require("react"), 1), React51 = __toESM(require("react"), 1), __create3 = Object.create, __defProp3 = Object.defineProperty, __defProps3 = Object.defineProperties, __getOwnPropDesc3 = Object.getOwnPropertyDescriptor, __getOwnPropDescs3 = Object.getOwnPropertyDescriptors, __getOwnPropNames3 = Object.getOwnPropertyNames, __getOwnPropSymbols3 = Object.getOwnPropertySymbols, __getProtoOf3 = Object.getPrototypeOf, __hasOwnProp3 = Object.prototype.hasOwnProperty, __propIsEnum3 = Object.prototype.propertyIsEnumerable, __defNormalProp3 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues3 = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp3.call(b, prop) && __defNormalProp3(a, prop, b[prop]);
  if (__getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(b))
      __propIsEnum3.call(b, prop) && __defNormalProp3(a, prop, b[prop]);
  return a;
}, __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b)), __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp3.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols3)
    for (var prop of __getOwnPropSymbols3(source))
      exclude.indexOf(prop) < 0 && __propIsEnum3.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __commonJS2 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames3(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames3(from))
      !__hasOwnProp3.call(to, key) && key !== except && __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc3(from, key)) || desc.enumerable });
  return to;
}, __toESM3 = (mod, isNodeMode, target) => (target = mod != null ? __create3(__getProtoOf3(mod)) : {}, __copyProps2(isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: !0 }) : target, mod)), __async2 = (__this, __arguments, generator) => new Promise((resolve, reject) => {
  var fulfilled = (value) => {
    try {
      step(generator.next(value));
    } catch (e) {
      reject(e);
    }
  }, rejected = (value) => {
    try {
      step(generator.throw(value));
    } catch (e) {
      reject(e);
    }
  }, step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
  step((generator = generator.apply(__this, __arguments)).next());
}), require_format_number = __commonJS2({
  "../../node_modules/format-number/index.js"(exports, module2) {
    module2.exports = formatter, module2.exports.default = formatter;
    function formatter(options) {
      if (options = options || {}, options.negativeType = options.negativeType || (options.negative === "R" ? "right" : "left"), typeof options.negativeLeftSymbol != "string")
        switch (options.negativeType) {
          case "left":
            options.negativeLeftSymbol = "-";
            break;
          case "brackets":
            options.negativeLeftSymbol = "(";
            break;
          default:
            options.negativeLeftSymbol = "";
        }
      if (typeof options.negativeRightSymbol != "string")
        switch (options.negativeType) {
          case "right":
            options.negativeRightSymbol = "-";
            break;
          case "brackets":
            options.negativeRightSymbol = ")";
            break;
          default:
            options.negativeRightSymbol = "";
        }
      typeof options.negativeLeftOut != "boolean" && (options.negativeLeftOut = options.negativeOut !== !1), typeof options.negativeRightOut != "boolean" && (options.negativeRightOut = options.negativeOut !== !1), options.prefix = options.prefix || "", options.suffix = options.suffix || "", typeof options.integerSeparator != "string" && (options.integerSeparator = typeof options.separator == "string" ? options.separator : ","), options.decimalsSeparator = typeof options.decimalsSeparator == "string" ? options.decimalsSeparator : "", options.decimal = options.decimal || ".", options.padLeft = options.padLeft || -1, options.padRight = options.padRight || -1;
      function format4(number, overrideOptions) {
        if (overrideOptions = overrideOptions || {}, number || number === 0)
          number = "" + number;
        else
          return "";
        var output = [], negative = number.charAt(0) === "-";
        return number = number.replace(/^\-/g, ""), !options.negativeLeftOut && !overrideOptions.noUnits && output.push(options.prefix), negative && output.push(options.negativeLeftSymbol), options.negativeLeftOut && !overrideOptions.noUnits && output.push(options.prefix), number = number.split("."), options.round != null && round(number, options.round), options.truncate != null && (number[1] = truncate(number[1], options.truncate)), options.padLeft > 0 && (number[0] = padLeft(number[0], options.padLeft)), options.padRight > 0 && (number[1] = padRight(number[1], options.padRight)), !overrideOptions.noSeparator && number[1] && (number[1] = addDecimalSeparators(number[1], options.decimalsSeparator)), !overrideOptions.noSeparator && number[0] && (number[0] = addIntegerSeparators(number[0], options.integerSeparator)), output.push(number[0]), number[1] && (output.push(options.decimal), output.push(number[1])), options.negativeRightOut && !overrideOptions.noUnits && output.push(options.suffix), negative && output.push(options.negativeRightSymbol), !options.negativeRightOut && !overrideOptions.noUnits && output.push(options.suffix), output.join("");
      }
      format4.negative = options.negative, format4.negativeOut = options.negativeOut, format4.negativeType = options.negativeType, format4.negativeLeftOut = options.negativeLeftOut, format4.negativeLeftSymbol = options.negativeLeftSymbol, format4.negativeRightOut = options.negativeRightOut, format4.negativeRightSymbol = options.negativeRightSymbol, format4.prefix = options.prefix, format4.suffix = options.suffix, format4.separate = options.separate, format4.integerSeparator = options.integerSeparator, format4.decimalsSeparator = options.decimalsSeparator, format4.decimal = options.decimal, format4.padLeft = options.padLeft, format4.padRight = options.padRight, format4.truncate = options.truncate, format4.round = options.round;
      function unformat(number, allowedSeparators) {
        allowedSeparators = allowedSeparators || [], options.allowedSeparators && options.allowedSeparators.forEach(function(s) {
          allowedSeparators.push(s);
        }), allowedSeparators.push(options.integerSeparator), allowedSeparators.push(options.decimalsSeparator), number = number.replace(options.prefix, ""), number = number.replace(options.suffix, "");
        var newNumber = number;
        do {
          number = newNumber;
          for (var i = 0; i < allowedSeparators.length; i++)
            newNumber = newNumber.replace(allowedSeparators[i], "");
        } while (newNumber != number);
        return number;
      }
      format4.unformat = unformat;
      function validate(number, allowedSeparators) {
        return number = unformat(number, allowedSeparators), number = number.split(options.decimal), number.length > 2 || options.truncate != null && number[1] && number[1].length > options.truncate || options.round != null && number[1] && number[1].length > options.round ? !1 : /^-?\d+\.?\d*$/.test(number);
      }
      return format4;
    }
    function addIntegerSeparators(x2, separator) {
      if (x2 += "", !separator)
        return x2;
      for (var rgx = /(\d+)(\d{3})/; rgx.test(x2); )
        x2 = x2.replace(rgx, "$1" + separator + "$2");
      return x2;
    }
    function addDecimalSeparators(x2, separator) {
      if (x2 += "", !separator)
        return x2;
      for (var rgx = /(\d{3})(\d+)/; rgx.test(x2); )
        x2 = x2.replace(rgx, "$1" + separator + "$2");
      return x2;
    }
    function padLeft(x2, padding) {
      x2 = x2 + "";
      for (var buf = []; buf.length + x2.length < padding; )
        buf.push("0");
      return buf.join("") + x2;
    }
    function padRight(x2, padding) {
      x2 ? x2 += "" : x2 = "";
      for (var buf = []; buf.length + x2.length < padding; )
        buf.push("0");
      return x2 + buf.join("");
    }
    function truncate(x2, length) {
      return x2 && (x2 += ""), x2 && x2.length > length ? x2.substr(0, length) : x2;
    }
    function round(number, places) {
      if (number[1] && places >= 0 && number[1].length > places) {
        var decim = number[1].slice(0, places);
        if (+number[1].substr(places, 1) >= 5) {
          for (var leadingzeros = ""; decim.charAt(0) === "0"; )
            leadingzeros = leadingzeros + "0", decim = decim.substr(1);
          decim = +decim + 1 + "", decim = leadingzeros + decim, decim.length > places && (number[0] = +number[0] + +decim.charAt(0) + "", decim = decim.substring(1));
        }
        number[1] = decim;
      }
      return number;
    }
  }
}), require_requiredArgs = __commonJS2({
  "../../node_modules/date-fns/_lib/requiredArgs/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = requiredArgs;
    function requiredArgs(required, args) {
      if (args.length < required)
        throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
    module2.exports = exports.default;
  }
}), require_isDate = __commonJS2({
  "../../node_modules/date-fns/isDate/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = isDate;
    var _index = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isDate(value) {
      return (0, _index.default)(1, arguments), value instanceof Date || typeof value == "object" && Object.prototype.toString.call(value) === "[object Date]";
    }
    module2.exports = exports.default;
  }
}), require_toDate = __commonJS2({
  "../../node_modules/date-fns/toDate/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = toDate;
    var _index = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function toDate(argument) {
      (0, _index.default)(1, arguments);
      var argStr = Object.prototype.toString.call(argument);
      return argument instanceof Date || typeof argument == "object" && argStr === "[object Date]" ? new Date(argument.getTime()) : typeof argument == "number" || argStr === "[object Number]" ? new Date(argument) : ((typeof argument == "string" || argStr === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"), console.warn(new Error().stack)), new Date(NaN));
    }
    module2.exports = exports.default;
  }
}), require_isValid = __commonJS2({
  "../../node_modules/date-fns/isValid/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = isValid;
    var _index = _interopRequireDefault(require_isDate()), _index2 = _interopRequireDefault(require_toDate()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isValid(dirtyDate) {
      if ((0, _index3.default)(1, arguments), !(0, _index.default)(dirtyDate) && typeof dirtyDate != "number")
        return !1;
      var date = (0, _index2.default)(dirtyDate);
      return !isNaN(Number(date));
    }
    module2.exports = exports.default;
  }
}), require_formatDistance = __commonJS2({
  "../../node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var formatDistanceLocale = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
      },
      xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
      },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
      },
      xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
      },
      aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
      },
      xHours: {
        one: "1 hour",
        other: "{{count}} hours"
      },
      xDays: {
        one: "1 day",
        other: "{{count}} days"
      },
      aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
      },
      xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
      },
      aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
      },
      xMonths: {
        one: "1 month",
        other: "{{count}} months"
      },
      aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
      },
      xYears: {
        one: "1 year",
        other: "{{count}} years"
      },
      overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
      },
      almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
      }
    }, formatDistance = function(token, count, options) {
      var result, tokenValue = formatDistanceLocale[token];
      return typeof tokenValue == "string" ? result = tokenValue : count === 1 ? result = tokenValue.one : result = tokenValue.other.replace("{{count}}", count.toString()), options != null && options.addSuffix ? options.comparison && options.comparison > 0 ? "in " + result : result + " ago" : result;
    }, _default = formatDistance;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_buildFormatLongFn = __commonJS2({
  "../../node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = buildFormatLongFn;
    function buildFormatLongFn(args) {
      return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, width = options.width ? String(options.width) : args.defaultWidth, format4 = args.formats[width] || args.formats[args.defaultWidth];
        return format4;
      };
    }
    module2.exports = exports.default;
  }
}), require_formatLong = __commonJS2({
  "../../node_modules/date-fns/locale/en-US/_lib/formatLong/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _index = _interopRequireDefault(require_buildFormatLongFn());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var dateFormats = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    }, timeFormats = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    }, dateTimeFormats = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    }, formatLong = {
      date: (0, _index.default)({
        formats: dateFormats,
        defaultWidth: "full"
      }),
      time: (0, _index.default)({
        formats: timeFormats,
        defaultWidth: "full"
      }),
      dateTime: (0, _index.default)({
        formats: dateTimeFormats,
        defaultWidth: "full"
      })
    }, _default = formatLong;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_formatRelative = __commonJS2({
  "../../node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var formatRelativeLocale = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    }, formatRelative = function(token, _date, _baseDate, _options) {
      return formatRelativeLocale[token];
    }, _default = formatRelative;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_buildLocalizeFn = __commonJS2({
  "../../node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = buildLocalizeFn;
    function buildLocalizeFn(args) {
      return function(dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {}, context = options.context ? String(options.context) : "standalone", valuesArray;
        if (context === "formatting" && args.formattingValues) {
          var defaultWidth = args.defaultFormattingWidth || args.defaultWidth, width = options.width ? String(options.width) : defaultWidth;
          valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
          var _defaultWidth = args.defaultWidth, _width = options.width ? String(options.width) : args.defaultWidth;
          valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
      };
    }
    module2.exports = exports.default;
  }
}), require_localize = __commonJS2({
  "../../node_modules/date-fns/locale/en-US/_lib/localize/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _index = _interopRequireDefault(require_buildLocalizeFn());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var eraValues = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    }, quarterValues = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    }, monthValues = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }, dayValues = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }, dayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    }, formattingDayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    }, ordinalNumber = function(dirtyNumber, _options) {
      var number = Number(dirtyNumber), rem100 = number % 100;
      if (rem100 > 20 || rem100 < 10)
        switch (rem100 % 10) {
          case 1:
            return number + "st";
          case 2:
            return number + "nd";
          case 3:
            return number + "rd";
        }
      return number + "th";
    }, localize = {
      ordinalNumber,
      era: (0, _index.default)({
        values: eraValues,
        defaultWidth: "wide"
      }),
      quarter: (0, _index.default)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function(quarter) {
          return quarter - 1;
        }
      }),
      month: (0, _index.default)({
        values: monthValues,
        defaultWidth: "wide"
      }),
      day: (0, _index.default)({
        values: dayValues,
        defaultWidth: "wide"
      }),
      dayPeriod: (0, _index.default)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
      })
    }, _default = localize;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_buildMatchFn = __commonJS2({
  "../../node_modules/date-fns/locale/_lib/buildMatchFn/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = buildMatchFn;
    function buildMatchFn(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, width = options.width, matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth], matchResult = string.match(matchPattern);
        if (!matchResult)
          return null;
        var matchedString = matchResult[0], parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth], key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        }), value;
        value = args.valueCallback ? args.valueCallback(key) : key, value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    function findKey(object, predicate) {
      for (var key in object)
        if (object.hasOwnProperty(key) && predicate(object[key]))
          return key;
    }
    function findIndex(array, predicate) {
      for (var key = 0; key < array.length; key++)
        if (predicate(array[key]))
          return key;
    }
    module2.exports = exports.default;
  }
}), require_buildMatchPatternFn = __commonJS2({
  "../../node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = buildMatchPatternFn;
    function buildMatchPatternFn(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, matchResult = string.match(args.matchPattern);
        if (!matchResult)
          return null;
        var matchedString = matchResult[0], parseResult = string.match(args.parsePattern);
        if (!parseResult)
          return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    module2.exports = exports.default;
  }
}), require_match = __commonJS2({
  "../../node_modules/date-fns/locale/en-US/_lib/match/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _index = _interopRequireDefault(require_buildMatchFn()), _index2 = _interopRequireDefault(require_buildMatchPatternFn());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i, parseOrdinalNumberPattern = /\d+/i, matchEraPatterns = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    }, parseEraPatterns = {
      any: [/^b/i, /^(a|c)/i]
    }, matchQuarterPatterns = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    }, parseQuarterPatterns = {
      any: [/1/i, /2/i, /3/i, /4/i]
    }, matchMonthPatterns = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    }, parseMonthPatterns = {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    }, matchDayPatterns = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    }, parseDayPatterns = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    }, matchDayPeriodPatterns = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    }, parseDayPeriodPatterns = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
      }
    }, match = {
      ordinalNumber: (0, _index2.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
          return parseInt(value, 10);
        }
      }),
      era: (0, _index.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
      }),
      quarter: (0, _index.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function(index) {
          return index + 1;
        }
      }),
      month: (0, _index.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
      }),
      day: (0, _index.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
      }),
      dayPeriod: (0, _index.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
      })
    }, _default = match;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_en_US = __commonJS2({
  "../../node_modules/date-fns/locale/en-US/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _index = _interopRequireDefault(require_formatDistance()), _index2 = _interopRequireDefault(require_formatLong()), _index3 = _interopRequireDefault(require_formatRelative()), _index4 = _interopRequireDefault(require_localize()), _index5 = _interopRequireDefault(require_match());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var locale = {
      code: "en-US",
      formatDistance: _index.default,
      formatLong: _index2.default,
      formatRelative: _index3.default,
      localize: _index4.default,
      match: _index5.default,
      options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }
    }, _default = locale;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_toInteger = __commonJS2({
  "../../node_modules/date-fns/_lib/toInteger/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = toInteger;
    function toInteger(dirtyNumber) {
      if (dirtyNumber === null || dirtyNumber === !0 || dirtyNumber === !1)
        return NaN;
      var number = Number(dirtyNumber);
      return isNaN(number) ? number : number < 0 ? Math.ceil(number) : Math.floor(number);
    }
    module2.exports = exports.default;
  }
}), require_addMilliseconds = __commonJS2({
  "../../node_modules/date-fns/addMilliseconds/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = addMilliseconds;
    var _index = _interopRequireDefault(require_toInteger()), _index2 = _interopRequireDefault(require_toDate()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function addMilliseconds(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var timestamp = (0, _index2.default)(dirtyDate).getTime(), amount = (0, _index.default)(dirtyAmount);
      return new Date(timestamp + amount);
    }
    module2.exports = exports.default;
  }
}), require_subMilliseconds = __commonJS2({
  "../../node_modules/date-fns/subMilliseconds/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = subMilliseconds;
    var _index = _interopRequireDefault(require_toInteger()), _index2 = _interopRequireDefault(require_addMilliseconds()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function subMilliseconds(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var amount = (0, _index.default)(dirtyAmount);
      return (0, _index2.default)(dirtyDate, -amount);
    }
    module2.exports = exports.default;
  }
}), require_getUTCDayOfYear = __commonJS2({
  "../../node_modules/date-fns/_lib/getUTCDayOfYear/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getUTCDayOfYear;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MILLISECONDS_IN_DAY = 864e5;
    function getUTCDayOfYear(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), timestamp = date.getTime();
      date.setUTCMonth(0, 1), date.setUTCHours(0, 0, 0, 0);
      var startOfYearTimestamp = date.getTime(), difference = timestamp - startOfYearTimestamp;
      return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
    }
    module2.exports = exports.default;
  }
}), require_startOfUTCISOWeek = __commonJS2({
  "../../node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = startOfUTCISOWeek;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function startOfUTCISOWeek(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var weekStartsOn = 1, date = (0, _index.default)(dirtyDate), day = date.getUTCDay(), diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      return date.setUTCDate(date.getUTCDate() - diff), date.setUTCHours(0, 0, 0, 0), date;
    }
    module2.exports = exports.default;
  }
}), require_getUTCISOWeekYear = __commonJS2({
  "../../node_modules/date-fns/_lib/getUTCISOWeekYear/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getUTCISOWeekYear;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs()), _index3 = _interopRequireDefault(require_startOfUTCISOWeek());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getUTCISOWeekYear(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), year = date.getUTCFullYear(), fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4), fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = (0, _index3.default)(fourthOfJanuaryOfNextYear), fourthOfJanuaryOfThisYear = new Date(0);
      fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4), fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = (0, _index3.default)(fourthOfJanuaryOfThisYear);
      return date.getTime() >= startOfNextYear.getTime() ? year + 1 : date.getTime() >= startOfThisYear.getTime() ? year : year - 1;
    }
    module2.exports = exports.default;
  }
}), require_startOfUTCISOWeekYear = __commonJS2({
  "../../node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = startOfUTCISOWeekYear;
    var _index = _interopRequireDefault(require_getUTCISOWeekYear()), _index2 = _interopRequireDefault(require_startOfUTCISOWeek()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function startOfUTCISOWeekYear(dirtyDate) {
      (0, _index3.default)(1, arguments);
      var year = (0, _index.default)(dirtyDate), fourthOfJanuary = new Date(0);
      fourthOfJanuary.setUTCFullYear(year, 0, 4), fourthOfJanuary.setUTCHours(0, 0, 0, 0);
      var date = (0, _index2.default)(fourthOfJanuary);
      return date;
    }
    module2.exports = exports.default;
  }
}), require_getUTCISOWeek = __commonJS2({
  "../../node_modules/date-fns/_lib/getUTCISOWeek/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getUTCISOWeek;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_startOfUTCISOWeek()), _index3 = _interopRequireDefault(require_startOfUTCISOWeekYear()), _index4 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCISOWeek(dirtyDate) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    module2.exports = exports.default;
  }
}), require_startOfUTCWeek = __commonJS2({
  "../../node_modules/date-fns/_lib/startOfUTCWeek/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = startOfUTCWeek;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs()), _index3 = _interopRequireDefault(require_toInteger());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function startOfUTCWeek(dirtyDate, dirtyOptions) {
      (0, _index2.default)(1, arguments);
      var options = dirtyOptions || {}, locale = options.locale, localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn, defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index3.default)(localeWeekStartsOn), weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index3.default)(options.weekStartsOn);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      var date = (0, _index.default)(dirtyDate), day = date.getUTCDay(), diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      return date.setUTCDate(date.getUTCDate() - diff), date.setUTCHours(0, 0, 0, 0), date;
    }
    module2.exports = exports.default;
  }
}), require_getUTCWeekYear = __commonJS2({
  "../../node_modules/date-fns/_lib/getUTCWeekYear/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getUTCWeekYear;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs()), _index3 = _interopRequireDefault(require_startOfUTCWeek()), _index4 = _interopRequireDefault(require_toInteger());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getUTCWeekYear(dirtyDate, dirtyOptions) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), year = date.getUTCFullYear(), options = dirtyOptions || {}, locale = options.locale, localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate, defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index4.default)(localeFirstWeekContainsDate), firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index4.default)(options.firstWeekContainsDate);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      var firstWeekOfNextYear = new Date(0);
      firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate), firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, dirtyOptions), firstWeekOfThisYear = new Date(0);
      firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate), firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, dirtyOptions);
      return date.getTime() >= startOfNextYear.getTime() ? year + 1 : date.getTime() >= startOfThisYear.getTime() ? year : year - 1;
    }
    module2.exports = exports.default;
  }
}), require_startOfUTCWeekYear = __commonJS2({
  "../../node_modules/date-fns/_lib/startOfUTCWeekYear/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = startOfUTCWeekYear;
    var _index = _interopRequireDefault(require_getUTCWeekYear()), _index2 = _interopRequireDefault(require_requiredArgs()), _index3 = _interopRequireDefault(require_startOfUTCWeek()), _index4 = _interopRequireDefault(require_toInteger());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
      (0, _index2.default)(1, arguments);
      var options = dirtyOptions || {}, locale = options.locale, localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate, defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index4.default)(localeFirstWeekContainsDate), firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index4.default)(options.firstWeekContainsDate), year = (0, _index.default)(dirtyDate, dirtyOptions), firstWeek = new Date(0);
      firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate), firstWeek.setUTCHours(0, 0, 0, 0);
      var date = (0, _index3.default)(firstWeek, dirtyOptions);
      return date;
    }
    module2.exports = exports.default;
  }
}), require_getUTCWeek = __commonJS2({
  "../../node_modules/date-fns/_lib/getUTCWeek/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getUTCWeek;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_startOfUTCWeek()), _index3 = _interopRequireDefault(require_startOfUTCWeekYear()), _index4 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCWeek(dirtyDate, options) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    module2.exports = exports.default;
  }
}), require_addLeadingZeros = __commonJS2({
  "../../node_modules/date-fns/_lib/addLeadingZeros/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = addLeadingZeros;
    function addLeadingZeros(number, targetLength) {
      for (var sign = number < 0 ? "-" : "", output = Math.abs(number).toString(); output.length < targetLength; )
        output = "0" + output;
      return sign + output;
    }
    module2.exports = exports.default;
  }
}), require_lightFormatters = __commonJS2({
  "../../node_modules/date-fns/_lib/format/lightFormatters/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _index = _interopRequireDefault(require_addLeadingZeros());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var formatters = {
      y: function(date, token) {
        var signedYear = date.getUTCFullYear(), year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _index.default)(token === "yy" ? year % 100 : year, token.length);
      },
      M: function(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : (0, _index.default)(month + 1, 2);
      },
      d: function(date, token) {
        return (0, _index.default)(date.getUTCDate(), token.length);
      },
      a: function(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return dayPeriodEnumValue.toUpperCase();
          case "aaa":
            return dayPeriodEnumValue;
          case "aaaaa":
            return dayPeriodEnumValue[0];
          case "aaaa":
          default:
            return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
      },
      h: function(date, token) {
        return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
      },
      H: function(date, token) {
        return (0, _index.default)(date.getUTCHours(), token.length);
      },
      m: function(date, token) {
        return (0, _index.default)(date.getUTCMinutes(), token.length);
      },
      s: function(date, token) {
        return (0, _index.default)(date.getUTCSeconds(), token.length);
      },
      S: function(date, token) {
        var numberOfDigits = token.length, milliseconds = date.getUTCMilliseconds(), fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _index.default)(fractionalSeconds, token.length);
      }
    }, _default = formatters;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_formatters = __commonJS2({
  "../../node_modules/date-fns/_lib/format/formatters/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var _index = _interopRequireDefault(require_getUTCDayOfYear()), _index2 = _interopRequireDefault(require_getUTCISOWeek()), _index3 = _interopRequireDefault(require_getUTCISOWeekYear()), _index4 = _interopRequireDefault(require_getUTCWeek()), _index5 = _interopRequireDefault(require_getUTCWeekYear()), _index6 = _interopRequireDefault(require_addLeadingZeros()), _index7 = _interopRequireDefault(require_lightFormatters());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var dayPeriodEnum = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }, formatters = {
      G: function(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch (token) {
          case "G":
          case "GG":
          case "GGG":
            return localize.era(era, {
              width: "abbreviated"
            });
          case "GGGGG":
            return localize.era(era, {
              width: "narrow"
            });
          case "GGGG":
          default:
            return localize.era(era, {
              width: "wide"
            });
        }
      },
      y: function(date, token, localize) {
        if (token === "yo") {
          var signedYear = date.getUTCFullYear(), year = signedYear > 0 ? signedYear : 1 - signedYear;
          return localize.ordinalNumber(year, {
            unit: "year"
          });
        }
        return _index7.default.y(date, token);
      },
      Y: function(date, token, localize, options) {
        var signedWeekYear = (0, _index5.default)(date, options), weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        if (token === "YY") {
          var twoDigitYear = weekYear % 100;
          return (0, _index6.default)(twoDigitYear, 2);
        }
        return token === "Yo" ? localize.ordinalNumber(weekYear, {
          unit: "year"
        }) : (0, _index6.default)(weekYear, token.length);
      },
      R: function(date, token) {
        var isoWeekYear = (0, _index3.default)(date);
        return (0, _index6.default)(isoWeekYear, token.length);
      },
      u: function(date, token) {
        var year = date.getUTCFullYear();
        return (0, _index6.default)(year, token.length);
      },
      Q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token) {
          case "Q":
            return String(quarter);
          case "QQ":
            return (0, _index6.default)(quarter, 2);
          case "Qo":
            return localize.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "QQQ":
            return localize.quarter(quarter, {
              width: "abbreviated",
              context: "formatting"
            });
          case "QQQQQ":
            return localize.quarter(quarter, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return localize.quarter(quarter, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      q: function(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token) {
          case "q":
            return String(quarter);
          case "qq":
            return (0, _index6.default)(quarter, 2);
          case "qo":
            return localize.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "qqq":
            return localize.quarter(quarter, {
              width: "abbreviated",
              context: "standalone"
            });
          case "qqqqq":
            return localize.quarter(quarter, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return localize.quarter(quarter, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      M: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch (token) {
          case "M":
          case "MM":
            return _index7.default.M(date, token);
          case "Mo":
            return localize.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "MMM":
            return localize.month(month, {
              width: "abbreviated",
              context: "formatting"
            });
          case "MMMMM":
            return localize.month(month, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return localize.month(month, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      L: function(date, token, localize) {
        var month = date.getUTCMonth();
        switch (token) {
          case "L":
            return String(month + 1);
          case "LL":
            return (0, _index6.default)(month + 1, 2);
          case "Lo":
            return localize.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "LLL":
            return localize.month(month, {
              width: "abbreviated",
              context: "standalone"
            });
          case "LLLLL":
            return localize.month(month, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return localize.month(month, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      w: function(date, token, localize, options) {
        var week = (0, _index4.default)(date, options);
        return token === "wo" ? localize.ordinalNumber(week, {
          unit: "week"
        }) : (0, _index6.default)(week, token.length);
      },
      I: function(date, token, localize) {
        var isoWeek = (0, _index2.default)(date);
        return token === "Io" ? localize.ordinalNumber(isoWeek, {
          unit: "week"
        }) : (0, _index6.default)(isoWeek, token.length);
      },
      d: function(date, token, localize) {
        return token === "do" ? localize.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        }) : _index7.default.d(date, token);
      },
      D: function(date, token, localize) {
        var dayOfYear = (0, _index.default)(date);
        return token === "Do" ? localize.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        }) : (0, _index6.default)(dayOfYear, token.length);
      },
      E: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch (token) {
          case "E":
          case "EE":
          case "EEE":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "EEEEE":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "EEEE":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      e: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay(), localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "e":
            return String(localDayOfWeek);
          case "ee":
            return (0, _index6.default)(localDayOfWeek, 2);
          case "eo":
            return localize.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "eee":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "eeeee":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "eeee":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      c: function(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay(), localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "c":
            return String(localDayOfWeek);
          case "cc":
            return (0, _index6.default)(localDayOfWeek, token.length);
          case "co":
            return localize.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "ccc":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "standalone"
            });
          case "ccccc":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "standalone"
            });
          case "cccc":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      i: function(date, token, localize) {
        var dayOfWeek = date.getUTCDay(), isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch (token) {
          case "i":
            return String(isoDayOfWeek);
          case "ii":
            return (0, _index6.default)(isoDayOfWeek, token.length);
          case "io":
            return localize.ordinalNumber(isoDayOfWeek, {
              unit: "day"
            });
          case "iii":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "iiiii":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "iiiiii":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "iiii":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      a: function(date, token, localize) {
        var hours = date.getUTCHours(), dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "aaa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "aaaaa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      b: function(date, token, localize) {
        var hours = date.getUTCHours(), dayPeriodEnumValue;
        switch (hours === 12 ? dayPeriodEnumValue = dayPeriodEnum.noon : hours === 0 ? dayPeriodEnumValue = dayPeriodEnum.midnight : dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am", token) {
          case "b":
          case "bb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "bbb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "bbbbb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      B: function(date, token, localize) {
        var hours = date.getUTCHours(), dayPeriodEnumValue;
        switch (hours >= 17 ? dayPeriodEnumValue = dayPeriodEnum.evening : hours >= 12 ? dayPeriodEnumValue = dayPeriodEnum.afternoon : hours >= 4 ? dayPeriodEnumValue = dayPeriodEnum.morning : dayPeriodEnumValue = dayPeriodEnum.night, token) {
          case "B":
          case "BB":
          case "BBB":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "BBBBB":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      h: function(date, token, localize) {
        if (token === "ho") {
          var hours = date.getUTCHours() % 12;
          return hours === 0 && (hours = 12), localize.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return _index7.default.h(date, token);
      },
      H: function(date, token, localize) {
        return token === "Ho" ? localize.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        }) : _index7.default.H(date, token);
      },
      K: function(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        return token === "Ko" ? localize.ordinalNumber(hours, {
          unit: "hour"
        }) : (0, _index6.default)(hours, token.length);
      },
      k: function(date, token, localize) {
        var hours = date.getUTCHours();
        return hours === 0 && (hours = 24), token === "ko" ? localize.ordinalNumber(hours, {
          unit: "hour"
        }) : (0, _index6.default)(hours, token.length);
      },
      m: function(date, token, localize) {
        return token === "mo" ? localize.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        }) : _index7.default.m(date, token);
      },
      s: function(date, token, localize) {
        return token === "so" ? localize.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        }) : _index7.default.s(date, token);
      },
      S: function(date, token) {
        return _index7.default.S(date, token);
      },
      X: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date, timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0)
          return "Z";
        switch (token) {
          case "X":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "XXXX":
          case "XX":
            return formatTimezone(timezoneOffset);
          case "XXXXX":
          case "XXX":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      x: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date, timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "x":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "xxxx":
          case "xx":
            return formatTimezone(timezoneOffset);
          case "xxxxx":
          case "xxx":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      O: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date, timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "OOOO":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      z: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date, timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "zzzz":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      t: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date, timestamp = Math.floor(originalDate.getTime() / 1e3);
        return (0, _index6.default)(timestamp, token.length);
      },
      T: function(date, token, _localize, options) {
        var originalDate = options._originalDate || date, timestamp = originalDate.getTime();
        return (0, _index6.default)(timestamp, token.length);
      }
    };
    function formatTimezoneShort(offset, dirtyDelimiter) {
      var sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
      if (minutes === 0)
        return sign + String(hours);
      var delimiter = dirtyDelimiter || "";
      return sign + String(hours) + delimiter + (0, _index6.default)(minutes, 2);
    }
    function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
      if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + (0, _index6.default)(Math.abs(offset) / 60, 2);
      }
      return formatTimezone(offset, dirtyDelimiter);
    }
    function formatTimezone(offset, dirtyDelimiter) {
      var delimiter = dirtyDelimiter || "", sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = (0, _index6.default)(Math.floor(absOffset / 60), 2), minutes = (0, _index6.default)(absOffset % 60, 2);
      return sign + hours + delimiter + minutes;
    }
    var _default = formatters;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_longFormatters = __commonJS2({
  "../../node_modules/date-fns/_lib/format/longFormatters/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    function dateLongFormatter(pattern, formatLong) {
      switch (pattern) {
        case "P":
          return formatLong.date({
            width: "short"
          });
        case "PP":
          return formatLong.date({
            width: "medium"
          });
        case "PPP":
          return formatLong.date({
            width: "long"
          });
        case "PPPP":
        default:
          return formatLong.date({
            width: "full"
          });
      }
    }
    function timeLongFormatter(pattern, formatLong) {
      switch (pattern) {
        case "p":
          return formatLong.time({
            width: "short"
          });
        case "pp":
          return formatLong.time({
            width: "medium"
          });
        case "ppp":
          return formatLong.time({
            width: "long"
          });
        case "pppp":
        default:
          return formatLong.time({
            width: "full"
          });
      }
    }
    function dateTimeLongFormatter(pattern, formatLong) {
      var matchResult = pattern.match(/(P+)(p+)?/) || [], datePattern = matchResult[1], timePattern = matchResult[2];
      if (!timePattern)
        return dateLongFormatter(pattern, formatLong);
      var dateTimeFormat;
      switch (datePattern) {
        case "P":
          dateTimeFormat = formatLong.dateTime({
            width: "short"
          });
          break;
        case "PP":
          dateTimeFormat = formatLong.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          dateTimeFormat = formatLong.dateTime({
            width: "long"
          });
          break;
        case "PPPP":
        default:
          dateTimeFormat = formatLong.dateTime({
            width: "full"
          });
          break;
      }
      return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
    }
    var longFormatters = {
      p: timeLongFormatter,
      P: dateTimeLongFormatter
    }, _default = longFormatters;
    exports.default = _default, module2.exports = exports.default;
  }
}), require_getTimezoneOffsetInMilliseconds = __commonJS2({
  "../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getTimezoneOffsetInMilliseconds;
    function getTimezoneOffsetInMilliseconds(date) {
      var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      return utcDate.setUTCFullYear(date.getFullYear()), date.getTime() - utcDate.getTime();
    }
    module2.exports = exports.default;
  }
}), require_protectedTokens = __commonJS2({
  "../../node_modules/date-fns/_lib/protectedTokens/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken, exports.isProtectedWeekYearToken = isProtectedWeekYearToken, exports.throwProtectedError = throwProtectedError;
    var protectedDayOfYearTokens = ["D", "DD"], protectedWeekYearTokens = ["YY", "YYYY"];
    function isProtectedDayOfYearToken(token) {
      return protectedDayOfYearTokens.indexOf(token) !== -1;
    }
    function isProtectedWeekYearToken(token) {
      return protectedWeekYearTokens.indexOf(token) !== -1;
    }
    function throwProtectedError(token, format4, input) {
      if (token === "YYYY")
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format4, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
      if (token === "YY")
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(format4, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
      if (token === "D")
        throw new RangeError("Use `d` instead of `D` (in `".concat(format4, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
      if (token === "DD")
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(format4, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }
}), require_format = __commonJS2({
  "../../node_modules/date-fns/format/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = format4;
    var _index = _interopRequireDefault(require_isValid()), _index2 = _interopRequireDefault(require_en_US()), _index3 = _interopRequireDefault(require_subMilliseconds()), _index4 = _interopRequireDefault(require_toDate()), _index5 = _interopRequireDefault(require_formatters()), _index6 = _interopRequireDefault(require_longFormatters()), _index7 = _interopRequireDefault(require_getTimezoneOffsetInMilliseconds()), _index8 = require_protectedTokens(), _index9 = _interopRequireDefault(require_toInteger()), _index10 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, escapedStringRegExp = /^'([^]*?)'?$/, doubleQuoteRegExp = /''/g, unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function format4(dirtyDate, dirtyFormatStr, dirtyOptions) {
      (0, _index10.default)(2, arguments);
      var formatStr = String(dirtyFormatStr), options = dirtyOptions || {}, locale = options.locale || _index2.default, localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate, defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index9.default)(localeFirstWeekContainsDate), firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index9.default)(options.firstWeekContainsDate);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      var localeWeekStartsOn = locale.options && locale.options.weekStartsOn, defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index9.default)(localeWeekStartsOn), weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index9.default)(options.weekStartsOn);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      if (!locale.localize)
        throw new RangeError("locale must contain localize property");
      if (!locale.formatLong)
        throw new RangeError("locale must contain formatLong property");
      var originalDate = (0, _index4.default)(dirtyDate);
      if (!(0, _index.default)(originalDate))
        throw new RangeError("Invalid time value");
      var timezoneOffset = (0, _index7.default)(originalDate), utcDate = (0, _index3.default)(originalDate, timezoneOffset), formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale,
        _originalDate: originalDate
      }, result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
          var longFormatter = _index6.default[firstCharacter];
          return longFormatter(substring, locale.formatLong, formatterOptions);
        }
        return substring;
      }).join("").match(formattingTokensRegExp).map(function(substring) {
        if (substring === "''")
          return "'";
        var firstCharacter = substring[0];
        if (firstCharacter === "'")
          return cleanEscapedString(substring);
        var formatter = _index5.default[firstCharacter];
        if (formatter)
          return !options.useAdditionalWeekYearTokens && (0, _index8.isProtectedWeekYearToken)(substring) && (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate), !options.useAdditionalDayOfYearTokens && (0, _index8.isProtectedDayOfYearToken)(substring) && (0, _index8.throwProtectedError)(substring, dirtyFormatStr, dirtyDate), formatter(utcDate, substring, locale.localize, formatterOptions);
        if (firstCharacter.match(unescapedLatinCharacterRegExp))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return substring;
      }).join("");
      return result;
    }
    function cleanEscapedString(input) {
      return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
    }
    module2.exports = exports.default;
  }
}), require_lodash2 = __commonJS2({
  "../../node_modules/lodash.throttle/index.js"(exports, module2) {
    var FUNC_ERROR_TEXT = "Expected a function", NAN = NaN, symbolTag = "[object Symbol]", reTrim = /^\s+|\s+$/g, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsOctal = /^0o[0-7]+$/i, freeParseInt = parseInt, freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal || freeSelf || Function("return this")(), objectProto = Object.prototype, objectToString = objectProto.toString, nativeMax = Math.max, nativeMin = Math.min, now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
      if (typeof func != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      wait = toNumber(wait) || 0, isObject(options) && (leading = !!options.leading, maxing = "maxWait" in options, maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait, trailing = "trailing" in options ? !!options.trailing : trailing);
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        return lastArgs = lastThis = void 0, lastInvokeTime = time, result = func.apply(thisArg, args), result;
      }
      function leadingEdge(time) {
        return lastInvokeTime = time, timerId = setTimeout(timerExpired, wait), leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time))
          return trailingEdge(time);
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        return timerId = void 0, trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = void 0, result);
      }
      function cancel() {
        timerId !== void 0 && clearTimeout(timerId), lastInvokeTime = 0, lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        if (lastArgs = arguments, lastThis = this, lastCallTime = time, isInvoking) {
          if (timerId === void 0)
            return leadingEdge(lastCallTime);
          if (maxing)
            return timerId = setTimeout(timerExpired, wait), invokeFunc(lastCallTime);
        }
        return timerId === void 0 && (timerId = setTimeout(timerExpired, wait)), result;
      }
      return debounced.cancel = cancel, debounced.flush = flush, debounced;
    }
    function throttle2(func, wait, options) {
      var leading = !0, trailing = !0;
      if (typeof func != "function")
        throw new TypeError(FUNC_ERROR_TEXT);
      return isObject(options) && (leading = "leading" in options ? !!options.leading : leading, trailing = "trailing" in options ? !!options.trailing : trailing), debounce(func, wait, {
        leading,
        maxWait: wait,
        trailing
      });
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number")
        return value;
      if (isSymbol(value))
        return NAN;
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string")
        return value === 0 ? value : +value;
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = throttle2;
  }
}), require_getDate = __commonJS2({
  "../../node_modules/date-fns/getDate/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getDate2;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getDate2(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), dayOfMonth = date.getDate();
      return dayOfMonth;
    }
    module2.exports = exports.default;
  }
}), require_getDay = __commonJS2({
  "../../node_modules/date-fns/getDay/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getDay2;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getDay2(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), day = date.getDay();
      return day;
    }
    module2.exports = exports.default;
  }
}), require_getHours = __commonJS2({
  "../../node_modules/date-fns/getHours/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getHours2;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getHours2(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), hours = date.getHours();
      return hours;
    }
    module2.exports = exports.default;
  }
}), require_getMinutes = __commonJS2({
  "../../node_modules/date-fns/getMinutes/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getMinutes2;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getMinutes2(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), minutes = date.getMinutes();
      return minutes;
    }
    module2.exports = exports.default;
  }
}), require_getMonth = __commonJS2({
  "../../node_modules/date-fns/getMonth/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getMonth2;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getMonth2(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), month = date.getMonth();
      return month;
    }
    module2.exports = exports.default;
  }
}), require_getYear = __commonJS2({
  "../../node_modules/date-fns/getYear/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = getYear2;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function getYear2(dirtyDate) {
      return (0, _index2.default)(1, arguments), (0, _index.default)(dirtyDate).getFullYear();
    }
    module2.exports = exports.default;
  }
}), require_addDays = __commonJS2({
  "../../node_modules/date-fns/addDays/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = addDays;
    var _index = _interopRequireDefault(require_toInteger()), _index2 = _interopRequireDefault(require_toDate()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function addDays(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var date = (0, _index2.default)(dirtyDate), amount = (0, _index.default)(dirtyAmount);
      return isNaN(amount) ? new Date(NaN) : (amount && date.setDate(date.getDate() + amount), date);
    }
    module2.exports = exports.default;
  }
}), require_addMonths = __commonJS2({
  "../../node_modules/date-fns/addMonths/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = addMonths;
    var _index = _interopRequireDefault(require_toInteger()), _index2 = _interopRequireDefault(require_toDate()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function addMonths(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var date = (0, _index2.default)(dirtyDate), amount = (0, _index.default)(dirtyAmount);
      if (isNaN(amount))
        return new Date(NaN);
      if (!amount)
        return date;
      var dayOfMonth = date.getDate(), endOfDesiredMonth = new Date(date.getTime());
      endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
      var daysInMonth = endOfDesiredMonth.getDate();
      return dayOfMonth >= daysInMonth ? endOfDesiredMonth : (date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth), date);
    }
    module2.exports = exports.default;
  }
}), require_add = __commonJS2({
  "../../node_modules/date-fns/add/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = add2;
    var _index = _interopRequireDefault(require_addDays()), _index2 = _interopRequireDefault(require_addMonths()), _index3 = _interopRequireDefault(require_toDate()), _index4 = _interopRequireDefault(require_requiredArgs()), _index5 = _interopRequireDefault(require_toInteger());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function add2(dirtyDate, duration) {
      if ((0, _index4.default)(2, arguments), !duration || typeof duration != "object")
        return new Date(NaN);
      var years = duration.years ? (0, _index5.default)(duration.years) : 0, months = duration.months ? (0, _index5.default)(duration.months) : 0, weeks = duration.weeks ? (0, _index5.default)(duration.weeks) : 0, days = duration.days ? (0, _index5.default)(duration.days) : 0, hours = duration.hours ? (0, _index5.default)(duration.hours) : 0, minutes = duration.minutes ? (0, _index5.default)(duration.minutes) : 0, seconds = duration.seconds ? (0, _index5.default)(duration.seconds) : 0, date = (0, _index3.default)(dirtyDate), dateWithMonths = months || years ? (0, _index2.default)(date, months + years * 12) : date, dateWithDays = days || weeks ? (0, _index.default)(dateWithMonths, days + weeks * 7) : dateWithMonths, minutesToAdd = minutes + hours * 60, secondsToAdd = seconds + minutesToAdd * 60, msToAdd = secondsToAdd * 1e3, finalDate = new Date(dateWithDays.getTime() + msToAdd);
      return finalDate;
    }
    module2.exports = exports.default;
  }
}), require_subDays = __commonJS2({
  "../../node_modules/date-fns/subDays/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = subDays;
    var _index = _interopRequireDefault(require_toInteger()), _index2 = _interopRequireDefault(require_addDays()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function subDays(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var amount = (0, _index.default)(dirtyAmount);
      return (0, _index2.default)(dirtyDate, -amount);
    }
    module2.exports = exports.default;
  }
}), require_subMonths = __commonJS2({
  "../../node_modules/date-fns/subMonths/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = subMonths;
    var _index = _interopRequireDefault(require_toInteger()), _index2 = _interopRequireDefault(require_addMonths()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function subMonths(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var amount = (0, _index.default)(dirtyAmount);
      return (0, _index2.default)(dirtyDate, -amount);
    }
    module2.exports = exports.default;
  }
}), require_sub = __commonJS2({
  "../../node_modules/date-fns/sub/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = sub2;
    var _index = _interopRequireDefault(require_subDays()), _index2 = _interopRequireDefault(require_subMonths()), _index3 = _interopRequireDefault(require_requiredArgs()), _index4 = _interopRequireDefault(require_toInteger());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function sub2(date, duration) {
      if ((0, _index3.default)(2, arguments), !duration || typeof duration != "object")
        return new Date(NaN);
      var years = duration.years ? (0, _index4.default)(duration.years) : 0, months = duration.months ? (0, _index4.default)(duration.months) : 0, weeks = duration.weeks ? (0, _index4.default)(duration.weeks) : 0, days = duration.days ? (0, _index4.default)(duration.days) : 0, hours = duration.hours ? (0, _index4.default)(duration.hours) : 0, minutes = duration.minutes ? (0, _index4.default)(duration.minutes) : 0, seconds = duration.seconds ? (0, _index4.default)(duration.seconds) : 0, dateWithoutMonths = (0, _index2.default)(date, months + years * 12), dateWithoutDays = (0, _index.default)(dateWithoutMonths, days + weeks * 7), minutestoSub = minutes + hours * 60, secondstoSub = seconds + minutestoSub * 60, mstoSub = secondstoSub * 1e3, finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
      return finalDate;
    }
    module2.exports = exports.default;
  }
}), require_compareAsc = __commonJS2({
  "../../node_modules/date-fns/compareAsc/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = compareAsc;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function compareAsc(dirtyDateLeft, dirtyDateRight) {
      (0, _index2.default)(2, arguments);
      var dateLeft = (0, _index.default)(dirtyDateLeft), dateRight = (0, _index.default)(dirtyDateRight), diff = dateLeft.getTime() - dateRight.getTime();
      return diff < 0 ? -1 : diff > 0 ? 1 : diff;
    }
    module2.exports = exports.default;
  }
}), require_differenceInCalendarYears = __commonJS2({
  "../../node_modules/date-fns/differenceInCalendarYears/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInCalendarYears;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
      (0, _index2.default)(2, arguments);
      var dateLeft = (0, _index.default)(dirtyDateLeft), dateRight = (0, _index.default)(dirtyDateRight);
      return dateLeft.getFullYear() - dateRight.getFullYear();
    }
    module2.exports = exports.default;
  }
}), require_differenceInYears = __commonJS2({
  "../../node_modules/date-fns/differenceInYears/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInYears;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_differenceInCalendarYears()), _index3 = _interopRequireDefault(require_compareAsc()), _index4 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInYears(dirtyDateLeft, dirtyDateRight) {
      (0, _index4.default)(2, arguments);
      var dateLeft = (0, _index.default)(dirtyDateLeft), dateRight = (0, _index.default)(dirtyDateRight), sign = (0, _index3.default)(dateLeft, dateRight), difference = Math.abs((0, _index2.default)(dateLeft, dateRight));
      dateLeft.setFullYear(1584), dateRight.setFullYear(1584);
      var isLastYearNotFull = (0, _index3.default)(dateLeft, dateRight) === -sign, result = sign * (difference - Number(isLastYearNotFull));
      return result === 0 ? 0 : result;
    }
    module2.exports = exports.default;
  }
}), require_differenceInCalendarMonths = __commonJS2({
  "../../node_modules/date-fns/differenceInCalendarMonths/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInCalendarMonths;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
      (0, _index2.default)(2, arguments);
      var dateLeft = (0, _index.default)(dirtyDateLeft), dateRight = (0, _index.default)(dirtyDateRight), yearDiff = dateLeft.getFullYear() - dateRight.getFullYear(), monthDiff = dateLeft.getMonth() - dateRight.getMonth();
      return yearDiff * 12 + monthDiff;
    }
    module2.exports = exports.default;
  }
}), require_endOfDay = __commonJS2({
  "../../node_modules/date-fns/endOfDay/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = endOfDay;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function endOfDay(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      return date.setHours(23, 59, 59, 999), date;
    }
    module2.exports = exports.default;
  }
}), require_endOfMonth = __commonJS2({
  "../../node_modules/date-fns/endOfMonth/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = endOfMonth;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function endOfMonth(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate), month = date.getMonth();
      return date.setFullYear(date.getFullYear(), month + 1, 0), date.setHours(23, 59, 59, 999), date;
    }
    module2.exports = exports.default;
  }
}), require_isLastDayOfMonth = __commonJS2({
  "../../node_modules/date-fns/isLastDayOfMonth/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = isLastDayOfMonth;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_endOfDay()), _index3 = _interopRequireDefault(require_endOfMonth()), _index4 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function isLastDayOfMonth(dirtyDate) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      return (0, _index2.default)(date).getTime() === (0, _index3.default)(date).getTime();
    }
    module2.exports = exports.default;
  }
}), require_differenceInMonths = __commonJS2({
  "../../node_modules/date-fns/differenceInMonths/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInMonths;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_differenceInCalendarMonths()), _index3 = _interopRequireDefault(require_compareAsc()), _index4 = _interopRequireDefault(require_requiredArgs()), _index5 = _interopRequireDefault(require_isLastDayOfMonth());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
      (0, _index4.default)(2, arguments);
      var dateLeft = (0, _index.default)(dirtyDateLeft), dateRight = (0, _index.default)(dirtyDateRight), sign = (0, _index3.default)(dateLeft, dateRight), difference = Math.abs((0, _index2.default)(dateLeft, dateRight)), result;
      if (difference < 1)
        result = 0;
      else {
        dateLeft.getMonth() === 1 && dateLeft.getDate() > 27 && dateLeft.setDate(30), dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
        var isLastMonthNotFull = (0, _index3.default)(dateLeft, dateRight) === -sign;
        (0, _index5.default)((0, _index.default)(dirtyDateLeft)) && difference === 1 && (0, _index3.default)(dirtyDateLeft, dateRight) === 1 && (isLastMonthNotFull = !1), result = sign * (difference - Number(isLastMonthNotFull));
      }
      return result === 0 ? 0 : result;
    }
    module2.exports = exports.default;
  }
}), require_startOfDay = __commonJS2({
  "../../node_modules/date-fns/startOfDay/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = startOfDay;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function startOfDay(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      return date.setHours(0, 0, 0, 0), date;
    }
    module2.exports = exports.default;
  }
}), require_differenceInCalendarDays = __commonJS2({
  "../../node_modules/date-fns/differenceInCalendarDays/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInCalendarDays;
    var _index = _interopRequireDefault(require_getTimezoneOffsetInMilliseconds()), _index2 = _interopRequireDefault(require_startOfDay()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MILLISECONDS_IN_DAY = 864e5;
    function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
      (0, _index3.default)(2, arguments);
      var startOfDayLeft = (0, _index2.default)(dirtyDateLeft), startOfDayRight = (0, _index2.default)(dirtyDateRight), timestampLeft = startOfDayLeft.getTime() - (0, _index.default)(startOfDayLeft), timestampRight = startOfDayRight.getTime() - (0, _index.default)(startOfDayRight);
      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
    }
    module2.exports = exports.default;
  }
}), require_differenceInDays = __commonJS2({
  "../../node_modules/date-fns/differenceInDays/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInDays;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_differenceInCalendarDays()), _index3 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function compareLocalAsc(dateLeft, dateRight) {
      var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
      return diff < 0 ? -1 : diff > 0 ? 1 : diff;
    }
    function differenceInDays(dirtyDateLeft, dirtyDateRight) {
      (0, _index3.default)(2, arguments);
      var dateLeft = (0, _index.default)(dirtyDateLeft), dateRight = (0, _index.default)(dirtyDateRight), sign = compareLocalAsc(dateLeft, dateRight), difference = Math.abs((0, _index2.default)(dateLeft, dateRight));
      dateLeft.setDate(dateLeft.getDate() - sign * difference);
      var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign), result = sign * (difference - isLastDayNotFull);
      return result === 0 ? 0 : result;
    }
    module2.exports = exports.default;
  }
}), require_constants = __commonJS2({
  "../../node_modules/date-fns/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.secondsInMinute = exports.secondsInHour = exports.quartersInYear = exports.monthsInYear = exports.monthsInQuarter = exports.minutesInHour = exports.minTime = exports.millisecondsInSecond = exports.millisecondsInHour = exports.millisecondsInMinute = exports.maxTime = exports.daysInWeek = void 0;
    var daysInWeek = 7;
    exports.daysInWeek = daysInWeek;
    var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
    exports.maxTime = maxTime;
    var millisecondsInMinute = 6e4;
    exports.millisecondsInMinute = millisecondsInMinute;
    var millisecondsInHour = 36e5;
    exports.millisecondsInHour = millisecondsInHour;
    var millisecondsInSecond = 1e3;
    exports.millisecondsInSecond = millisecondsInSecond;
    var minTime = -maxTime;
    exports.minTime = minTime;
    var minutesInHour = 60;
    exports.minutesInHour = minutesInHour;
    var monthsInQuarter = 3;
    exports.monthsInQuarter = monthsInQuarter;
    var monthsInYear = 12;
    exports.monthsInYear = monthsInYear;
    var quartersInYear = 4;
    exports.quartersInYear = quartersInYear;
    var secondsInHour = 3600;
    exports.secondsInHour = secondsInHour;
    var secondsInMinute = 60;
    exports.secondsInMinute = secondsInMinute;
  }
}), require_differenceInMilliseconds = __commonJS2({
  "../../node_modules/date-fns/differenceInMilliseconds/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInMilliseconds;
    var _index = _interopRequireDefault(require_toDate()), _index2 = _interopRequireDefault(require_requiredArgs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInMilliseconds(dateLeft, dateRight) {
      return (0, _index2.default)(2, arguments), (0, _index.default)(dateLeft).getTime() - (0, _index.default)(dateRight).getTime();
    }
    module2.exports = exports.default;
  }
}), require_roundingMethods = __commonJS2({
  "../../node_modules/date-fns/_lib/roundingMethods/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getRoundingMethod = getRoundingMethod;
    var roundingMap = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function(value) {
        return value < 0 ? Math.ceil(value) : Math.floor(value);
      }
    }, defaultRoundingMethod = "trunc";
    function getRoundingMethod(method) {
      return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
    }
  }
}), require_differenceInHours = __commonJS2({
  "../../node_modules/date-fns/differenceInHours/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInHours;
    var _index = require_constants(), _index2 = _interopRequireDefault(require_differenceInMilliseconds()), _index3 = _interopRequireDefault(require_requiredArgs()), _index4 = require_roundingMethods();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInHours(dateLeft, dateRight, options) {
      (0, _index3.default)(2, arguments);
      var diff = (0, _index2.default)(dateLeft, dateRight) / _index.millisecondsInHour;
      return (0, _index4.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
    module2.exports = exports.default;
  }
}), require_differenceInMinutes = __commonJS2({
  "../../node_modules/date-fns/differenceInMinutes/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInMinutes;
    var _index = require_constants(), _index2 = _interopRequireDefault(require_differenceInMilliseconds()), _index3 = _interopRequireDefault(require_requiredArgs()), _index4 = require_roundingMethods();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInMinutes(dateLeft, dateRight, options) {
      (0, _index3.default)(2, arguments);
      var diff = (0, _index2.default)(dateLeft, dateRight) / _index.millisecondsInMinute;
      return (0, _index4.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
    module2.exports = exports.default;
  }
}), require_differenceInSeconds = __commonJS2({
  "../../node_modules/date-fns/differenceInSeconds/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = differenceInSeconds;
    var _index = _interopRequireDefault(require_differenceInMilliseconds()), _index2 = _interopRequireDefault(require_requiredArgs()), _index3 = require_roundingMethods();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function differenceInSeconds(dateLeft, dateRight, options) {
      (0, _index2.default)(2, arguments);
      var diff = (0, _index.default)(dateLeft, dateRight) / 1e3;
      return (0, _index3.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
    module2.exports = exports.default;
  }
}), require_intervalToDuration = __commonJS2({
  "../../node_modules/date-fns/intervalToDuration/index.js"(exports, module2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = intervalToDuration2;
    var _index = _interopRequireDefault(require_compareAsc()), _index2 = _interopRequireDefault(require_differenceInYears()), _index3 = _interopRequireDefault(require_differenceInMonths()), _index4 = _interopRequireDefault(require_differenceInDays()), _index5 = _interopRequireDefault(require_differenceInHours()), _index6 = _interopRequireDefault(require_differenceInMinutes()), _index7 = _interopRequireDefault(require_differenceInSeconds()), _index8 = _interopRequireDefault(require_isValid()), _index9 = _interopRequireDefault(require_requiredArgs()), _index10 = _interopRequireDefault(require_toDate()), _index11 = _interopRequireDefault(require_sub());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function intervalToDuration2(_ref) {
      var start = _ref.start, end = _ref.end;
      (0, _index9.default)(1, arguments);
      var dateLeft = (0, _index10.default)(start), dateRight = (0, _index10.default)(end);
      if (!(0, _index8.default)(dateLeft))
        throw new RangeError("Start Date is invalid");
      if (!(0, _index8.default)(dateRight))
        throw new RangeError("End Date is invalid");
      var duration = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }, sign = (0, _index.default)(dateLeft, dateRight);
      duration.years = Math.abs((0, _index2.default)(dateLeft, dateRight));
      var remainingMonths = (0, _index11.default)(dateLeft, {
        years: sign * duration.years
      });
      duration.months = Math.abs((0, _index3.default)(remainingMonths, dateRight));
      var remainingDays = (0, _index11.default)(remainingMonths, {
        months: sign * duration.months
      });
      duration.days = Math.abs((0, _index4.default)(remainingDays, dateRight));
      var remainingHours = (0, _index11.default)(remainingDays, {
        days: sign * duration.days
      });
      duration.hours = Math.abs((0, _index5.default)(remainingHours, dateRight));
      var remainingMinutes = (0, _index11.default)(remainingHours, {
        hours: sign * duration.hours
      });
      duration.minutes = Math.abs((0, _index6.default)(remainingMinutes, dateRight));
      var remainingSeconds = (0, _index11.default)(remainingMinutes, {
        minutes: sign * duration.minutes
      });
      return duration.seconds = Math.abs((0, _index7.default)(remainingSeconds, dateRight)), duration;
    }
    module2.exports = exports.default;
  }
});
function SvgTypeTitle(props) {
  return /* @__PURE__ */ React31.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React31.createElement("path", {
    d: "M7.74 8.697a.81.81 0 01.073.308.894.894 0 01-.9.888.867.867 0 01-.825-.592l-.333-.961H2.058l-.333.961a.882.882 0 01-.838.592A.884.884 0 010 9.005c0-.11.025-.222.062-.308l2.403-6.211c.222-.58.776-.986 1.442-.986.653 0 1.22.407 1.442.986l2.39 6.211zM2.6 6.824h2.613L3.907 3.102 2.6 6.824zm8.8-3.118c1.355 0 2.6.542 2.6 2.255V9.08a.8.8 0 01-.789.814.797.797 0 01-.788-.703c-.395.468-1.097.764-1.874.764-.949 0-2.07-.64-2.07-1.972 0-1.392 1.121-1.897 2.07-1.897.789 0 1.491.246 1.886.727v-.826c0-.604-.518-.998-1.306-.998-.469 0-.888.123-1.32.394a.64.64 0 01-.307.086.602.602 0 01-.592-.604c0-.221.123-.419.284-.517a3.963 3.963 0 012.206-.641zm-.222 5.188c.505 0 .998-.172 1.257-.517v-.74c-.259-.345-.752-.517-1.257-.517-.616 0-1.122.332-1.122.9 0 .554.506.874 1.122.874zM.656 11.125h12.688a.656.656 0 110 1.313H.656a.656.656 0 110-1.313z"
  }));
}
var type_title_default = SvgTypeTitle;
function SvgTypeText(props) {
  return /* @__PURE__ */ React210.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React210.createElement("path", {
    d: "M7 4.568a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5v1.046a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V4.568zM.5 1a.5.5 0 00-.5.5v1.045a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V1.5a.5.5 0 00-.5-.5H.5zM0 8.682a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V7.636a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v1.046zm0 3.068a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-1.045a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v1.045z"
  }));
}
var type_text_default = SvgTypeText;
function SvgTypeNumber(props) {
  return /* @__PURE__ */ React32.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React32.createElement("path", {
    d: "M4.462 0c-.595 0-1.078.482-1.078 1.078v2.306H1.078a1.078 1.078 0 100 2.155h2.306v2.922H1.078a1.078 1.078 0 100 2.155h2.306v2.306a1.078 1.078 0 002.155 0v-2.306H8.46v2.306a1.078 1.078 0 002.156 0v-2.306h2.306a1.078 1.078 0 100-2.155h-2.306V5.539h2.306a1.078 1.078 0 100-2.155h-2.306V1.078a1.078 1.078 0 00-2.156 0v2.306H5.54V1.078C5.54.482 5.056 0 4.461 0zm1.077 8.46V5.54H8.46v2.92H5.54z"
  }));
}
var type_number_default = SvgTypeNumber;
function SvgTypeSelect(props) {
  return /* @__PURE__ */ React42.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React42.createElement("path", {
    d: "M7 13A6 6 0 107 1a6 6 0 000 12zM3.751 5.323A.2.2 0 013.909 5h6.182a.2.2 0 01.158.323L7.158 9.297a.2.2 0 01-.316 0L3.751 5.323z"
  }));
}
var type_select_default = SvgTypeSelect;
function SvgTypeMultiSelect(props) {
  return /* @__PURE__ */ React52.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React52.createElement("path", {
    d: "M4 3a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h7a1 1 0 110 2H5a1 1 0 01-1-1zM2 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2z"
  }));
}
var type_multi_select_default = SvgTypeMultiSelect;
function SvgTypeDate(props) {
  return /* @__PURE__ */ React62.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React62.createElement("path", {
    d: "M10.889 5.5H3.11v1.556h7.778V5.5zm1.555-4.444h-.777V0H10.11v1.056H3.89V0H2.333v1.056h-.777c-.864 0-1.548.7-1.548 1.555L0 12.5c0 .856.692 1.5 1.556 1.5h10.888C13.3 14 14 13.356 14 12.5V2.611c0-.855-.7-1.555-1.556-1.555zm0 11.444H1.556V3.944h10.888V12.5zM8.556 8.611H3.11v1.556h5.445V8.61z"
  }));
}
var type_date_default = SvgTypeDate;
function SvgTypePerson(props) {
  return /* @__PURE__ */ React72.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React72.createElement("path", {
    d: "M9.625 10.847C8.912 10.289 8.121 9.926 7 9.26v-.54a3.33 3.33 0 00.538-.888c.408-.1.774-.498.774-.832 0-.482-.202-.673-.44-.829 0-.015.003-.03.003-.046 0-.711-.438-2.625-2.625-2.625-2.188 0-2.625 1.915-2.625 2.625 0 .017.003.03.003.046-.238.156-.44.347-.44.829 0 .334.366.731.774.833.146.343.326.643.538.886v.541c-1.12.665-1.912 1.028-2.625 1.587C.041 11.498 0 12.469 0 14h10.5c0-1.531-.041-2.502-.875-3.153zm3.5-3.5c-.713-.558-1.504-.921-2.625-1.587v-.54c.212-.244.392-.544.538-.888.408-.1.774-.498.774-.832 0-.482-.202-.673-.44-.829 0-.015.003-.03.003-.046C11.375 1.914 10.937 0 8.75 0 6.562 0 6.125 1.915 6.125 2.625c0 .017.003.03.003.046-.016.012-.03.025-.047.036 1.751.359 2.516 1.841 2.647 3.04.248.262.46.65.46 1.253 0 .603-.417 1.203-1.004 1.515-.057.109-.117.214-.181.315l.437.245c.64.357 1.194.666 1.724 1.081.138.108.256.224.365.343H14c0-1.53-.041-2.5-.875-3.153z"
  }));
}
var type_person_default = SvgTypePerson;
function SvgTypeFile(props) {
  return /* @__PURE__ */ React82.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React82.createElement("path", {
    d: "M5.946 14a4.975 4.975 0 01-3.497-1.415A4.731 4.731 0 011 9.174c0-1.288.515-2.5 1.449-3.41L7.456.986c1.345-1.313 3.722-1.318 5.08.007a3.453 3.453 0 010 4.961L8.03 10.241c-.867.847-2.293.848-3.17-.006a2.158 2.158 0 010-3.102l1.744-1.701 1.272 1.24-1.744 1.701a.43.43 0 000 .621c.23.223.405.223.636 0l4.503-4.288a1.723 1.723 0 00-.007-2.473c-.68-.663-1.864-.663-2.543 0L3.713 7.011a3.006 3.006 0 00-.915 2.163c0 .82.328 1.591.922 2.17 1.19 1.162 3.262 1.162 4.451 0l2.248-2.192 1.272 1.24-2.248 2.193A4.978 4.978 0 015.946 14z"
  }));
}
var type_file_default = SvgTypeFile;
function SvgTypeCheckbox(props) {
  return /* @__PURE__ */ React92.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React92.createElement("path", {
    d: "M0 3a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H3a3 3 0 01-3-3V3zm3-1.5A1.5 1.5 0 001.5 3v8A1.5 1.5 0 003 12.5h8a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0011 1.5H3zm-.167 5.316l.566-.542.177-.17.347-.332.346.334.176.17 1.139 1.098 3.699-3.563.177-.17.347-.335.347.334.177.17.563.543.177.171.372.36-.372.36-.177.17-4.786 4.615-.177.171-.347.334-.347-.334-.177-.17-2.23-2.15-.177-.172-.375-.361.376-.36.179-.17z"
  }));
}
var type_checkbox_default = SvgTypeCheckbox;
function SvgTypeUrl(props) {
  return /* @__PURE__ */ React102.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React102.createElement("path", {
    d: "M3.733 3.867h3.734c1.03 0 1.866.837 1.866 1.866 0 1.03-.837 1.867-1.866 1.867h-.934a.934.934 0 000 1.867h.934a3.734 3.734 0 000-7.467H3.733A3.73 3.73 0 001.89 8.977a4.637 4.637 0 01.314-2.18 1.854 1.854 0 01-.336-1.064c0-1.03.837-1.866 1.866-1.866zm8.377 1.422a4.6 4.6 0 01-.316 2.176c.212.303.34.67.34 1.068 0 1.03-.838 1.867-1.867 1.867H6.533a1.869 1.869 0 01-1.866-1.867c0-1.03.837-1.866 1.866-1.866h.934a.934.934 0 000-1.867h-.934a3.733 3.733 0 000 7.467h3.734a3.73 3.73 0 001.843-6.978z"
  }));
}
var type_url_default = SvgTypeUrl;
function SvgTypeEmail(props) {
  return /* @__PURE__ */ React112.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React112.createElement("path", {
    d: "M14 6.225c0 .822-.133 1.574-.4 2.256-.267.683-.644 1.218-1.13 1.606-.488.388-.946.6-1.494.6-.429 0-.808-.102-1.139-.305a1.753 1.753 0 01-.713-.8c-.613.736-1.563 1.104-2.531 1.104-1.027 0-1.835-.304-2.427-.912-.591-.608-.887-1.44-.887-2.496 0-1.204.389-2.175 1.166-2.911.776-.736 1.791-1.105 3.044-1.105.498 0 2.032.212 2.252.268.51.13.86.593.835 1.112l-.156 3.287c0 .794.22 1.19.66 1.19.372 0 .668-.267.888-.8.22-.534.33-1.232.33-2.094 0-.919-.194-1.731-.582-2.436a3.924 3.924 0 00-1.64-1.614c-.704-.371-1.509-.557-2.413-.557-1.172 0-2.19.237-3.053.711a4.785 4.785 0 00-1.988 2.05c-.46.894-.691 1.926-.691 3.096 0 1.576.428 2.784 1.283 3.627.855.841 2.094 1.262 3.718 1.262.615 0 1.29-.067 2.027-.2.225-.042.518-.108.877-.2a.863.863 0 011.025.527.76.76 0 01-.502.993c-1.052.316-2.17.488-3.357.516-2.204 0-3.922-.57-5.154-1.713C.616 11.146 0 9.56 0 7.527c0-1.41.315-2.69.944-3.84A6.792 6.792 0 013.63.98C4.794.327 6.131 0 7.645 0c1.276 0 2.514.29 3.418.77.905.481 1.574 1.228 2.12 2.176.544.947.817 2.04.817 3.28zm-8.615 1.01c0 1.208.488 1.811 1.466 1.811.511 0 .9-.181 1.168-.545.267-.363.429-.954.486-1.772l.11-1.896a4.638 4.638 0 00-.98-.095c-.71 0-1.263.224-1.658.67-.395.446-.592 1.055-.592 1.828z"
  }));
}
var type_email_default = SvgTypeEmail;
function SvgTypePhoneNumber(props) {
  return /* @__PURE__ */ React122.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React122.createElement("path", {
    d: "M2.207.013a.487.487 0 00-.29.02C.87.438.213 1.93.058 2.955c-.484 3.33 2.15 6.215 4.57 8.113 2.149 1.684 6.273 4.453 8.713 1.781.31-.329.678-.813.658-1.297-.058-.813-.813-1.394-1.394-1.84-.445-.329-1.375-1.239-1.956-1.22-.522.02-.851.562-1.18.891l-.582.581c-.096.097-1.336-.716-1.471-.813a9.881 9.881 0 01-1.414-1.104A9.13 9.13 0 014.86 6.732c-.097-.136-.89-1.317-.813-1.414 0 0 .677-.736.871-1.026.407-.62.717-1.104.252-1.84-.174-.27-.387-.484-.62-.716-.406-.387-.813-.794-1.278-1.123-.251-.194-.677-.542-1.065-.6z"
  }));
}
var type_phone_number_default = SvgTypePhoneNumber;
function SvgTypeFormula(props) {
  return /* @__PURE__ */ React132.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React132.createElement("path", {
    d: "M7.779 7.063l-3.157 4.224a.49.49 0 00-.072.218.35.35 0 00.346.357h6.242c.476 0 .862.398.862.889v.36c0 .491-.386.889-.862.889H1.862A.876.876 0 011 13.111v-.425a.82.82 0 01.177-.54L4.393 7.8a1.367 1.367 0 00-.006-1.625L1.4 2.194a.822.822 0 01-.18-.544V.89C1.22.398 1.604 0 2.08 0h8.838c.476 0 .861.398.861.889v.36c0 .491-.385.89-.86.89H5.135c-.19 0-.345.159-.345.356a.489.489 0 00.07.216l2.92 3.975c.049.062.063.107.06.188a.246.246 0 01-.062.189z"
  }));
}
var type_formula_default = SvgTypeFormula;
function SvgTypeRelation(props) {
  return /* @__PURE__ */ React142.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React142.createElement("path", {
    d: "M4.5 1v2h5.086L1 11.586 2.414 13 11 4.414V9.5h2V1z"
  }));
}
var type_relation_default = SvgTypeRelation;
function SvgTypePerson2(props) {
  return /* @__PURE__ */ React152.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React152.createElement("path", {
    d: "M13.125 10.035c-.571-.55-2.324-1.504-3.5-2.16v-.834c.224-.322.42-.671.566-1.055.394-.242.746-.702.746-1.173 0-.458-.005-.87-.47-1.208C10.305 1.558 9.436 0 7 0S3.695 1.558 3.533 3.605c-.465.338-.47.75-.47 1.208 0 .471.352.93.746 1.173.146.384.342.733.566 1.055v.834c-1.176.656-2.929 1.61-3.5 2.16C.165 10.72 0 11.812 0 14h14c0-2.188-.164-3.281-.875-3.965z"
  }));
}
var type_person_2_default = SvgTypePerson2;
function SvgTypeTimestamp(props) {
  return /* @__PURE__ */ React162.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React162.createElement("path", {
    d: "M6.986 14c-1.79 0-3.582-.69-4.944-2.068-2.723-2.72-2.723-7.172 0-9.892 2.725-2.72 7.182-2.72 9.906 0A6.972 6.972 0 0114 6.996c0 1.88-.728 3.633-2.052 4.955A7.058 7.058 0 016.986 14zm3.285-6.99v1.645H5.526v-5.47h1.841v3.63h2.904v.194zm1.89-.014c0-1.379-.542-2.67-1.522-3.648-2.006-2.005-5.287-2.007-7.297-.009l-.009.009a5.168 5.168 0 000 7.295c2.01 2.007 5.297 2.007 7.306 0a5.119 5.119 0 001.521-3.647z"
  }));
}
var type_timestamp_default = SvgTypeTimestamp, iconMap = {
  title: type_title_default,
  text: type_text_default,
  number: type_number_default,
  select: type_select_default,
  multi_select: type_multi_select_default,
  date: type_date_default,
  person: type_person_default,
  file: type_file_default,
  checkbox: type_checkbox_default,
  url: type_url_default,
  email: type_email_default,
  phone_number: type_phone_number_default,
  formula: type_formula_default,
  relation: type_relation_default,
  created_time: type_timestamp_default,
  last_edited_time: type_timestamp_default,
  created_by: type_person_2_default,
  last_edited_by: type_person_2_default
}, PropertyIcon = (_a) => {
  var _b = _a, {
    type
  } = _b, rest = __objRest2(_b, [
    "type"
  ]);
  let icon = iconMap[type];
  return icon ? icon(rest) : null;
}, CollectionColumnTitle = ({ schema }) => /* @__PURE__ */ React172.createElement("div", {
  className: "notion-collection-column-title"
}, /* @__PURE__ */ React172.createElement(PropertyIcon, {
  className: "notion-collection-column-title-icon",
  type: schema.type
}), /* @__PURE__ */ React172.createElement("div", {
  className: "notion-collection-column-title-body"
}, schema.name)), import_format_number = __toESM3(require_format_number(), 1), import_format2 = __toESM3(require_format(), 1), defaultMapImageUrl2 = (url, block) => {
  if (!url)
    return null;
  if (url.startsWith("data:") || url.startsWith("https://images.unsplash.com"))
    return url;
  try {
    let u = new URL(url);
    if (u.pathname.startsWith("/secure.notion-static.com") && u.hostname.endsWith(".amazonaws.com") && u.searchParams.has("X-Amz-Credential") && u.searchParams.has("X-Amz-Signature") && u.searchParams.has("X-Amz-Algorithm"))
      return url;
  } catch {
  }
  url.startsWith("/images") && (url = `https://www.notion.so${url}`), url = `https://www.notion.so${url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`}`;
  let notionImageUrlV2 = new URL(url), table = block.parent_table === "space" ? "block" : block.parent_table;
  return table === "collection" && (table = "block"), notionImageUrlV2.searchParams.set("table", table), notionImageUrlV2.searchParams.set("id", block.id), notionImageUrlV2.searchParams.set("cache", "v2"), url = notionImageUrlV2.toString(), url;
}, defaultMapPageUrl2 = (rootPageId) => (pageId) => (pageId = (pageId || "").replace(/-/g, ""), rootPageId && pageId === rootPageId ? "/" : `/${pageId}`), cs2 = (...classes) => classes.filter((a) => !!a).join(" "), getHashFragmentValue2 = (url) => url.includes("#") ? url.replace(/^.+(#.+)$/, "$1") : "", isBrowser2 = typeof window < "u", youtubeDomains2 = /* @__PURE__ */ new Set([
  "youtu.be",
  "youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com"
]), getYoutubeId2 = (url) => {
  try {
    let { hostname } = new URL(url);
    if (!youtubeDomains2.has(hostname))
      return null;
    let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i, match = url.match(regExp);
    if (match && match[2].length == 11)
      return match[2];
  } catch {
  }
  return null;
}, wrapNextImage2 = (NextImage) => React182.memo(function(_a) {
  var _b = _a, {
    src,
    alt,
    width,
    height,
    className,
    style,
    layout
  } = _b, rest = __objRest2(_b, [
    "src",
    "alt",
    "width",
    "height",
    "className",
    "style",
    "layout"
  ]);
  return layout || (layout = width && height ? "intrinsic" : "fill"), /* @__PURE__ */ React182.createElement(NextImage, __spreadValues3({
    className,
    src,
    alt,
    width: layout === "intrinsic" && width,
    height: layout === "intrinsic" && height,
    objectFit: style == null ? void 0 : style.objectFit,
    objectPosition: style == null ? void 0 : style.objectPosition,
    layout
  }, rest));
}, import_react_fast_compare2.default), wrapNextLink2 = (NextLink) => function(_a) {
  var _b = _a, {
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale
  } = _b, linkProps = __objRest2(_b, [
    "href",
    "as",
    "passHref",
    "prefetch",
    "replace",
    "scroll",
    "shallow",
    "locale"
  ]);
  return /* @__PURE__ */ React182.createElement(NextLink, {
    href,
    as,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    locale
  }, /* @__PURE__ */ React182.createElement("a", __spreadValues3({}, linkProps)));
}, LazyImage2 = (_a) => {
  var _b = _a, {
    src,
    alt,
    className,
    style,
    zoomable = !1,
    priority = !1,
    height
  } = _b, rest = __objRest2(_b, [
    "src",
    "alt",
    "className",
    "style",
    "zoomable",
    "priority",
    "height"
  ]), _a2, _b2, _c;
  let { recordMap, zoom, previewImages, forceCustomImages, components } = useNotionContext2(), zoomRef = React192.useRef(zoom ? zoom.clone() : null), previewImage = previewImages ? (_c = (_a2 = recordMap == null ? void 0 : recordMap.preview_images) == null ? void 0 : _a2[src]) != null ? _c : (_b2 = recordMap == null ? void 0 : recordMap.preview_images) == null ? void 0 : _b2[te(src)] : null, onLoad = React192.useCallback((e) => {
    zoomable && (e.target.src || e.target.srcset) && zoomRef.current && zoomRef.current.attach(e.target);
  }, [zoomRef, zoomable]), attachZoom = React192.useCallback((image) => {
    zoomRef.current && image && zoomRef.current.attach(image);
  }, [zoomRef]), attachZoomRef = React192.useMemo(() => zoomable ? attachZoom : void 0, [zoomable, attachZoom]);
  if (previewImage) {
    let aspectRatio = previewImage.originalHeight / previewImage.originalWidth;
    return components.Image ? /* @__PURE__ */ React192.createElement(components.Image, {
      src,
      alt,
      style,
      className,
      width: previewImage.originalWidth,
      height: previewImage.originalHeight,
      blurDataURL: previewImage.dataURIBase64,
      placeholder: "blur",
      priority,
      onLoad
    }) : /* @__PURE__ */ React192.createElement(import_react_lazy_images2.LazyImageFull, __spreadProps3(__spreadValues3({
      src
    }, rest), {
      experimentalDecode: !0
    }), ({ imageState, ref }) => {
      let isLoaded = imageState === import_react_lazy_images2.ImageState.LoadSuccess, wrapperStyle = {
        width: "100%"
      }, imgStyle = {};
      return height ? wrapperStyle.height = height : (imgStyle.position = "absolute", wrapperStyle.paddingBottom = `${aspectRatio * 100}%`), /* @__PURE__ */ React192.createElement("div", {
        className: cs2("lazy-image-wrapper", isLoaded && "lazy-image-loaded", className),
        style: wrapperStyle
      }, /* @__PURE__ */ React192.createElement("img", {
        className: "lazy-image-preview",
        src: previewImage.dataURIBase64,
        alt,
        ref,
        style,
        decoding: "async"
      }), /* @__PURE__ */ React192.createElement("img", {
        className: "lazy-image-real",
        src,
        alt,
        ref: attachZoomRef,
        style: __spreadValues3(__spreadValues3({}, style), imgStyle),
        width: previewImage.originalWidth,
        height: previewImage.originalHeight,
        decoding: "async",
        loading: "lazy"
      }));
    });
  } else
    return components.Image && forceCustomImages ? /* @__PURE__ */ React192.createElement(components.Image, {
      src,
      alt,
      className,
      style,
      width: null,
      height: height || null,
      priority,
      onLoad
    }) : /* @__PURE__ */ React192.createElement("img", __spreadValues3({
      className,
      style,
      src,
      alt,
      ref: attachZoomRef,
      loading: "lazy",
      decoding: "async"
    }, rest));
}, qs2 = (params) => Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join("&"), LiteYouTubeEmbed2 = ({
  id,
  defaultPlay = !1,
  mute = !1,
  lazyImage = !1,
  iframeTitle = "YouTube video",
  alt = "Video preview",
  params = {},
  adLinksPreconnect = !0,
  style,
  className
}) => {
  let muteParam = mute || defaultPlay ? "1" : "0", queryString = React202.useMemo(() => qs2(__spreadValues3({ autoplay: "1", mute: muteParam }, params)), [muteParam, params]), posterUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, ytUrl = "https://www.youtube-nocookie.com", iframeSrc = `${ytUrl}/embed/${id}?${queryString}`, [isPreconnected, setIsPreconnected] = React202.useState(!1), [iframeInitialized, setIframeInitialized] = React202.useState(defaultPlay), [isIframeLoaded, setIsIframeLoaded] = React202.useState(!1), warmConnections = React202.useCallback(() => {
    isPreconnected || setIsPreconnected(!0);
  }, [isPreconnected]), onLoadIframe = React202.useCallback(() => {
    iframeInitialized || setIframeInitialized(!0);
  }, [iframeInitialized]), onIframeLoaded = React202.useCallback(() => {
    setIsIframeLoaded(!0);
  }, []);
  return /* @__PURE__ */ React202.createElement(React202.Fragment, null, /* @__PURE__ */ React202.createElement("link", {
    rel: "preload",
    href: posterUrl,
    as: "image"
  }), isPreconnected && /* @__PURE__ */ React202.createElement(React202.Fragment, null, /* @__PURE__ */ React202.createElement("link", {
    rel: "preconnect",
    href: ytUrl
  }), /* @__PURE__ */ React202.createElement("link", {
    rel: "preconnect",
    href: "https://www.google.com"
  })), isPreconnected && adLinksPreconnect && /* @__PURE__ */ React202.createElement(React202.Fragment, null, /* @__PURE__ */ React202.createElement("link", {
    rel: "preconnect",
    href: "https://static.doubleclick.net"
  }), /* @__PURE__ */ React202.createElement("link", {
    rel: "preconnect",
    href: "https://googleads.g.doubleclick.net"
  })), /* @__PURE__ */ React202.createElement("div", {
    onClick: onLoadIframe,
    onPointerOver: warmConnections,
    className: cs2("notion-yt-lite", isIframeLoaded && "notion-yt-loaded", iframeInitialized && "notion-yt-initialized", className),
    style
  }, /* @__PURE__ */ React202.createElement("img", {
    src: posterUrl,
    className: "notion-yt-thumbnail",
    loading: lazyImage ? "lazy" : void 0,
    alt
  }), /* @__PURE__ */ React202.createElement("div", {
    className: "notion-yt-playbtn"
  }), iframeInitialized && /* @__PURE__ */ React202.createElement("iframe", {
    width: "560",
    height: "315",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: !0,
    title: iframeTitle,
    src: iframeSrc,
    onLoad: onIframeLoaded
  })));
}, isServer2 = typeof window > "u", supportedAssetTypes2 = [
  "video",
  "image",
  "embed",
  "figma",
  "typeform",
  "excalidraw",
  "maps",
  "tweet",
  "pdf",
  "gist",
  "codepen",
  "drive"
], Asset2 = ({ block, zoomable = !0, children }) => {
  var _a, _b, _c, _d, _e, _f;
  let { recordMap, mapImageUrl, components } = useNotionContext2();
  if (!block || !supportedAssetTypes2.includes(block.type))
    return null;
  let style = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: "100%",
    flexDirection: "column"
  }, assetStyle = {};
  if (block.format) {
    let {
      block_aspect_ratio,
      block_height,
      block_width,
      block_full_width,
      block_page_width,
      block_preserve_scale
    } = block.format;
    block_full_width || block_page_width ? (block_full_width ? style.width = "100vw" : style.width = "100%", block.type === "video" ? block_height ? style.height = block_height : block_aspect_ratio ? style.paddingBottom = `${block_aspect_ratio * 100}%` : block_preserve_scale && (style.objectFit = "contain") : block_aspect_ratio && block.type !== "image" ? style.paddingBottom = `${block_aspect_ratio * 100}%` : block_height ? style.height = block_height : block_preserve_scale && (block.type === "image" ? style.height = "100%" : (style.paddingBottom = "75%", style.minHeight = 100))) : (block_width && (style.width = block_width), block_preserve_scale && block.type !== "image" ? (style.paddingBottom = "50%", style.minHeight = 100) : block_height && block.type !== "image" && (style.height = block_height)), block.type === "image" ? assetStyle.objectFit = "cover" : block_preserve_scale && (assetStyle.objectFit = "contain");
  }
  let source = ((_a = recordMap.signed_urls) == null ? void 0 : _a[block.id]) || ((_d = (_c = (_b = block.properties) == null ? void 0 : _b.source) == null ? void 0 : _c[0]) == null ? void 0 : _d[0]), content = null;
  if (!source)
    return null;
  if (block.type === "tweet") {
    let src = source;
    if (!src)
      return null;
    let id = src.split("?")[0].split("/").pop();
    if (!id)
      return null;
    content = /* @__PURE__ */ React212.createElement("div", {
      style: __spreadProps3(__spreadValues3({}, assetStyle), {
        maxWidth: 420,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto"
      })
    }, /* @__PURE__ */ React212.createElement(components.Tweet, {
      id
    }));
  } else if (block.type === "pdf")
    style.overflow = "auto", style.background = "rgb(226, 226, 226)", style.padding || (style.padding = "8px 16px"), isServer2 || (content = /* @__PURE__ */ React212.createElement(components.Pdf, {
      file: source
    }));
  else if (block.type === "embed" || block.type === "video" || block.type === "figma" || block.type === "typeform" || block.type === "gist" || block.type === "maps" || block.type === "excalidraw" || block.type === "codepen" || block.type === "drive")
    if (block.type === "video" && source && source.indexOf("youtube") < 0 && source.indexOf("youtu.be") < 0 && source.indexOf("vimeo") < 0 && source.indexOf("wistia") < 0 && source.indexOf("loom") < 0 && source.indexOf("videoask") < 0 && source.indexOf("getcloudapp") < 0)
      style.paddingBottom = void 0, content = /* @__PURE__ */ React212.createElement("video", {
        playsInline: !0,
        controls: !0,
        preload: "metadata",
        style: assetStyle,
        src: source,
        title: block.type
      });
    else {
      let src = ((_e = block.format) == null ? void 0 : _e.display_source) || source;
      if (src) {
        let youtubeVideoId = block.type === "video" ? getYoutubeId2(src) : null;
        youtubeVideoId ? content = /* @__PURE__ */ React212.createElement(LiteYouTubeEmbed2, {
          id: youtubeVideoId,
          style: assetStyle,
          className: "notion-asset-object-fit"
        }) : block.type === "gist" ? (src.endsWith(".pibb") || (src = `${src}.pibb`), assetStyle.width = "100%", style.paddingBottom = "50%", content = /* @__PURE__ */ React212.createElement("iframe", {
          style: assetStyle,
          className: "notion-asset-object-fit",
          src,
          title: "GitHub Gist",
          frameBorder: "0",
          loading: "lazy",
          scrolling: "auto"
        })) : content = /* @__PURE__ */ React212.createElement("iframe", {
          className: "notion-asset-object-fit",
          style: assetStyle,
          src,
          title: `iframe ${block.type}`,
          frameBorder: "0",
          allowFullScreen: !0,
          loading: "lazy",
          scrolling: "auto"
        });
      }
    }
  else if (block.type === "image") {
    let src = mapImageUrl(source, block), alt = h((_f = block.properties) == null ? void 0 : _f.caption) || "notion image";
    content = /* @__PURE__ */ React212.createElement(LazyImage2, {
      src,
      alt,
      zoomable,
      height: style.height,
      style: assetStyle
    });
  }
  return /* @__PURE__ */ React212.createElement(React212.Fragment, null, /* @__PURE__ */ React212.createElement("div", {
    style
  }, content, block.type === "image" && children), block.type !== "image" && children);
}, DefaultPageIcon2 = (props) => {
  let _a = props, { className } = _a, rest = __objRest2(_a, ["className"]);
  return /* @__PURE__ */ React223.createElement("svg", __spreadProps3(__spreadValues3({
    className
  }, rest), {
    viewBox: "0 0 30 30",
    width: "16"
  }), /* @__PURE__ */ React223.createElement("path", {
    d: "M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"
  }));
}, isIconBlock2 = (value) => value.type === "page" || value.type === "callout" || value.type === "collection_view" || value.type === "collection_view_page", PageIconImpl2 = ({
  block,
  className,
  inline = !0,
  hideDefaultIcon = !1,
  defaultIcon
}) => {
  var _a;
  let { mapImageUrl, recordMap } = useNotionContext2(), isImage = !1, content = null;
  if (isIconBlock2(block)) {
    let icon = ((_a = B(block, recordMap)) == null ? void 0 : _a.trim()) || defaultIcon, title = T(block, recordMap);
    if (icon && isUrl(icon)) {
      let url = mapImageUrl(icon, block);
      isImage = !0, content = /* @__PURE__ */ React232.createElement(LazyImage2, {
        src: url,
        alt: title || "page icon",
        className: cs2(className, "notion-page-icon")
      });
    } else
      icon ? (isImage = !1, content = /* @__PURE__ */ React232.createElement("span", {
        className: cs2(className, "notion-page-icon"),
        role: "img",
        "aria-label": icon
      }, icon)) : hideDefaultIcon || (isImage = !0, content = /* @__PURE__ */ React232.createElement(DefaultPageIcon2, {
        className: cs2(className, "notion-page-icon"),
        alt: title || "page icon"
      }));
  }
  return content ? /* @__PURE__ */ React232.createElement("div", {
    className: cs2(inline ? "notion-page-icon-inline" : "notion-page-icon-hero", isImage ? "notion-page-icon-image" : "notion-page-icon-span")
  }, content) : null;
}, PageIcon2 = React232.memo(PageIconImpl2), PageTitleImpl2 = (_a) => {
  var _b = _a, { block, className, defaultIcon } = _b, rest = __objRest2(_b, ["block", "className", "defaultIcon"]), _a2, _b2;
  let { recordMap } = useNotionContext2();
  if (!block)
    return null;
  if (block.type === "collection_view_page" || block.type === "collection_view") {
    let title = T(block, recordMap);
    if (!title)
      return null;
    let titleDecoration = [[title]];
    return /* @__PURE__ */ React242.createElement("span", __spreadValues3({
      className: cs2("notion-page-title", className)
    }, rest), /* @__PURE__ */ React242.createElement(PageIcon2, {
      block,
      defaultIcon,
      className: "notion-page-title-icon"
    }), /* @__PURE__ */ React242.createElement("span", {
      className: "notion-page-title-text"
    }, /* @__PURE__ */ React242.createElement(Text2, {
      value: titleDecoration,
      block
    })));
  }
  return ((_a2 = block.properties) == null ? void 0 : _a2.title) ? /* @__PURE__ */ React242.createElement("span", __spreadValues3({
    className: cs2("notion-page-title", className)
  }, rest), /* @__PURE__ */ React242.createElement(PageIcon2, {
    block,
    defaultIcon,
    className: "notion-page-title-icon"
  }), /* @__PURE__ */ React242.createElement("span", {
    className: "notion-page-title-text"
  }, /* @__PURE__ */ React242.createElement(Text2, {
    value: (_b2 = block.properties) == null ? void 0 : _b2.title,
    block
  }))) : null;
}, PageTitle2 = React242.memo(PageTitleImpl2), GracefulImage2 = (props) => isBrowser2 ? /* @__PURE__ */ React252.createElement(import_react_image2.Img, __spreadValues3({}, props)) : /* @__PURE__ */ React252.createElement("img", __spreadValues3({}, props));
function SvgTypeGitHub2(props) {
  return /* @__PURE__ */ React262.createElement("svg", __spreadValues3({
    viewBox: "0 0 260 260"
  }, props), /* @__PURE__ */ React262.createElement("g", null, /* @__PURE__ */ React262.createElement("path", {
    d: "M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",
    fill: "#161614"
  })));
}
var type_github_default2 = SvgTypeGitHub2, EOI2 = ({ block, inline, className }) => {
  var _a, _b, _c;
  let { components } = useNotionContext2(), { original_url, attributes, domain } = (block == null ? void 0 : block.format) || {};
  if (!original_url || !attributes)
    return null;
  let title = (_a = attributes.find((attr) => attr.id === "title")) == null ? void 0 : _a.values[0], owner = (_b = attributes.find((attr) => attr.id === "owner")) == null ? void 0 : _b.values[0], lastUpdatedAt = (_c = attributes.find((attr) => attr.id === "updated_at")) == null ? void 0 : _c.values[0], lastUpdated = lastUpdatedAt ? ot(lastUpdatedAt) : null, externalImage;
  switch (domain) {
    case "github.com":
      if (externalImage = /* @__PURE__ */ React272.createElement(type_github_default2, null), owner) {
        let parts = owner.split("/");
        owner = parts[parts.length - 1];
      }
      break;
    default:
      return console.log(`Unsupported external_object_instance domain "${domain}"`, JSON.stringify(block, null, 2)), null;
  }
  return /* @__PURE__ */ React272.createElement(components.Link, {
    target: "_blank",
    rel: "noopener noreferrer",
    href: original_url,
    className: cs2("notion-external", inline ? "notion-external-mention" : "notion-external-block notion-row", className)
  }, externalImage && /* @__PURE__ */ React272.createElement("div", {
    className: "notion-external-image"
  }, externalImage), /* @__PURE__ */ React272.createElement("div", {
    className: "notion-external-description"
  }, /* @__PURE__ */ React272.createElement("div", {
    className: "notion-external-title"
  }, title), (owner || lastUpdated) && /* @__PURE__ */ React272.createElement("div", {
    className: "notion-external-subtitle"
  }, owner && /* @__PURE__ */ React272.createElement("span", null, owner), owner && lastUpdated && /* @__PURE__ */ React272.createElement("span", null, " \u2022 "), lastUpdated && /* @__PURE__ */ React272.createElement("span", null, "Updated ", lastUpdated))));
}, Text2 = ({ value, block, linkProps, linkProtocol }) => {
  let { components, recordMap, mapPageUrl: mapPageUrl2, mapImageUrl, rootDomain } = useNotionContext2();
  return /* @__PURE__ */ React282.createElement(React282.Fragment, null, value == null ? void 0 : value.map(([text, decorations], index) => {
    if (!decorations)
      return text === "," ? /* @__PURE__ */ React282.createElement("span", {
        key: index,
        style: { padding: "0.5em" }
      }) : /* @__PURE__ */ React282.createElement(React282.Fragment, {
        key: index
      }, text);
    let formatted = decorations.reduce((element, decorator) => {
      var _a, _b, _c, _d, _e;
      switch (decorator[0]) {
        case "p": {
          let blockId = decorator[1], linkedBlock = (_a = recordMap.block[blockId]) == null ? void 0 : _a.value;
          return linkedBlock ? /* @__PURE__ */ React282.createElement(components.PageLink, {
            className: "notion-link",
            href: mapPageUrl2(blockId)
          }, /* @__PURE__ */ React282.createElement(PageTitle2, {
            block: linkedBlock
          })) : (console.log('"p" missing block', blockId), null);
        }
        case "\u2023": {
          let linkType = decorator[1][0], id = decorator[1][1];
          switch (linkType) {
            case "u": {
              let user = (_b = recordMap.notion_user[id]) == null ? void 0 : _b.value;
              if (!user)
                return console.log('"\u2023" missing user', id), null;
              let name = [user.given_name, user.family_name].filter(Boolean).join(" ");
              return /* @__PURE__ */ React282.createElement(GracefulImage2, {
                className: "notion-user",
                src: mapImageUrl(user.profile_photo, block),
                alt: name
              });
            }
            default: {
              let linkedBlock = (_c = recordMap.block[id]) == null ? void 0 : _c.value;
              return linkedBlock ? /* @__PURE__ */ React282.createElement(components.PageLink, __spreadProps3(__spreadValues3({
                className: "notion-link",
                href: mapPageUrl2(id)
              }, linkProps), {
                target: "_blank",
                rel: "noopener noreferrer"
              }), /* @__PURE__ */ React282.createElement(PageTitle2, {
                block: linkedBlock
              })) : (console.log('"\u2023" missing block', linkType, id), null);
            }
          }
        }
        case "h":
          return /* @__PURE__ */ React282.createElement("span", {
            className: `notion-${decorator[1]}`
          }, element);
        case "c":
          return /* @__PURE__ */ React282.createElement("code", {
            className: "notion-inline-code"
          }, element);
        case "b":
          return /* @__PURE__ */ React282.createElement("b", null, element);
        case "i":
          return /* @__PURE__ */ React282.createElement("em", null, element);
        case "s":
          return /* @__PURE__ */ React282.createElement("s", null, element);
        case "_":
          return /* @__PURE__ */ React282.createElement("span", {
            className: "notion-inline-underscore"
          }, element);
        case "e":
          return /* @__PURE__ */ React282.createElement(components.Equation, {
            math: decorator[1],
            inline: !0
          });
        case "m":
          return element;
        case "a": {
          let v = decorator[1], pathname = v.substr(1), id = W(pathname, { uuid: !0 });
          if ((v[0] === "/" || v.includes(rootDomain)) && id) {
            let href = v.includes(rootDomain) ? v : `${mapPageUrl2(id)}${getHashFragmentValue2(v)}`;
            return /* @__PURE__ */ React282.createElement(components.PageLink, __spreadValues3({
              className: "notion-link",
              href
            }, linkProps), element);
          } else
            return /* @__PURE__ */ React282.createElement(components.Link, __spreadValues3({
              className: "notion-link",
              href: linkProtocol ? `${linkProtocol}:${decorator[1]}` : decorator[1]
            }, linkProps), element);
        }
        case "d": {
          let v = decorator[1], type = v == null ? void 0 : v.type;
          if (type === "date") {
            let startDate = v.start_date;
            return A(startDate);
          } else if (type === "daterange") {
            let startDate = v.start_date, endDate = v.end_date;
            return `${A(startDate)} \u2192 ${A(endDate)}`;
          } else
            return element;
        }
        case "u": {
          let userId = decorator[1], user = (_d = recordMap.notion_user[userId]) == null ? void 0 : _d.value;
          if (!user)
            return console.log("missing user", userId), null;
          let name = [user.given_name, user.family_name].filter(Boolean).join(" ");
          return /* @__PURE__ */ React282.createElement(GracefulImage2, {
            className: "notion-user",
            src: mapImageUrl(user.profile_photo, block),
            alt: name
          });
        }
        case "eoi": {
          let blockId = decorator[1], externalObjectInstance = (_e = recordMap.block[blockId]) == null ? void 0 : _e.value;
          return /* @__PURE__ */ React282.createElement(EOI2, {
            block: externalObjectInstance,
            inline: !0
          });
        }
        default:
          return console.log("unsupported text format", decorator), element;
      }
    }, /* @__PURE__ */ React282.createElement(React282.Fragment, null, text));
    return /* @__PURE__ */ React282.createElement(React282.Fragment, {
      key: index
    }, formatted);
  }));
}, SearchIcon2 = (props) => {
  let _a = props, { className } = _a, rest = __objRest2(_a, ["className"]);
  return /* @__PURE__ */ React292.createElement("svg", __spreadValues3({
    className: cs2("notion-icon", className),
    viewBox: "0 0 17 17"
  }, rest), /* @__PURE__ */ React292.createElement("path", {
    d: "M6.78027 13.6729C8.24805 13.6729 9.60156 13.1982 10.709 12.4072L14.875 16.5732C15.0684 16.7666 15.3232 16.8633 15.5957 16.8633C16.167 16.8633 16.5713 16.4238 16.5713 15.8613C16.5713 15.5977 16.4834 15.3516 16.29 15.1582L12.1504 11.0098C13.0205 9.86719 13.5391 8.45215 13.5391 6.91406C13.5391 3.19629 10.498 0.155273 6.78027 0.155273C3.0625 0.155273 0.0214844 3.19629 0.0214844 6.91406C0.0214844 10.6318 3.0625 13.6729 6.78027 13.6729ZM6.78027 12.2139C3.87988 12.2139 1.48047 9.81445 1.48047 6.91406C1.48047 4.01367 3.87988 1.61426 6.78027 1.61426C9.68066 1.61426 12.0801 4.01367 12.0801 6.91406C12.0801 9.81445 9.68066 12.2139 6.78027 12.2139Z"
  }));
}, import_lodash3 = __toESM3(require_lodash2(), 1), ClearIcon2 = (props) => {
  let _a = props, { className } = _a, rest = __objRest2(_a, ["className"]);
  return /* @__PURE__ */ React302.createElement("svg", __spreadProps3(__spreadValues3({
    className: cs2("notion-icon", className)
  }, rest), {
    viewBox: "0 0 30 30"
  }), /* @__PURE__ */ React302.createElement("path", {
    d: "M15,0C6.716,0,0,6.716,0,15s6.716,15,15,15s15-6.716,15-15S23.284,0,15,0z M22,20.6L20.6,22L15,16.4L9.4,22L8,20.6l5.6-5.6 L8,9.4L9.4,8l5.6,5.6L20.6,8L22,9.4L16.4,15L22,20.6z"
  }));
}, LoadingIcon2 = (props) => {
  let _a = props, { className } = _a, rest = __objRest2(_a, ["className"]);
  return /* @__PURE__ */ React312.createElement("svg", __spreadProps3(__spreadValues3({
    className: cs2("notion-icon", className)
  }, rest), {
    viewBox: "0 0 24 24"
  }), /* @__PURE__ */ React312.createElement("defs", null, /* @__PURE__ */ React312.createElement("linearGradient", {
    x1: "28.1542969%",
    y1: "63.7402344%",
    x2: "74.6289062%",
    y2: "17.7832031%",
    id: "linearGradient-1"
  }, /* @__PURE__ */ React312.createElement("stop", {
    stopColor: "rgba(164, 164, 164, 1)",
    offset: "0%"
  }), /* @__PURE__ */ React312.createElement("stop", {
    stopColor: "rgba(164, 164, 164, 0)",
    stopOpacity: "0",
    offset: "100%"
  }))), /* @__PURE__ */ React312.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none"
  }, /* @__PURE__ */ React312.createElement("g", {
    transform: "translate(-236.000000, -286.000000)"
  }, /* @__PURE__ */ React312.createElement("g", {
    transform: "translate(238.000000, 286.000000)"
  }, /* @__PURE__ */ React312.createElement("circle", {
    id: "Oval-2",
    stroke: "url(#linearGradient-1)",
    strokeWidth: "4",
    cx: "10",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ React312.createElement("path", {
    d: "M10,2 C4.4771525,2 0,6.4771525 0,12",
    id: "Oval-2",
    stroke: "rgba(164, 164, 164, 1)",
    strokeWidth: "4"
  }), /* @__PURE__ */ React312.createElement("rect", {
    id: "Rectangle-1",
    fill: "rgba(164, 164, 164, 1)",
    x: "8",
    y: "0",
    width: "4",
    height: "4",
    rx: "8"
  })))));
}, SearchDialog2 = class extends React322.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: !1,
      query: "",
      searchResult: null,
      searchError: null
    }, this._onAfterOpen = () => {
      this._inputRef.current && this._inputRef.current.focus();
    }, this._onChangeQuery = (e) => {
      let query = e.target.value;
      if (this.setState({ query }), query.trim())
        this._search();
      else {
        this.setState({ isLoading: !1, searchResult: null, searchError: null });
        return;
      }
    }, this._onClearQuery = () => {
      this._onChangeQuery({ target: { value: "" } });
    }, this._warmupSearch = () => __async2(this, null, function* () {
      let { searchNotion, rootBlockId } = this.props;
      yield searchNotion({
        query: "",
        ancestorId: rootBlockId
      });
    }), this._searchImpl = () => __async2(this, null, function* () {
      let { searchNotion, rootBlockId } = this.props, { query } = this.state;
      if (!query.trim()) {
        this.setState({ isLoading: !1, searchResult: null, searchError: null });
        return;
      }
      this.setState({ isLoading: !0 });
      let result = yield searchNotion({
        query,
        ancestorId: rootBlockId
      });
      console.log("search", query, result);
      let searchResult = null, searchError = null;
      if (result.error || result.errorId)
        searchError = result;
      else {
        searchResult = __spreadValues3({}, result);
        let searchResultsMap = searchResult.results.map((result2) => {
          var _a, _b;
          let block = (_a = searchResult.recordMap.block[result2.id]) == null ? void 0 : _a.value;
          if (!block)
            return;
          let title = T(block, searchResult.recordMap);
          if (!!title && (result2.title = title, result2.block = block, result2.recordMap = searchResult.recordMap, result2.page = O(block, searchResult.recordMap, {
            inclusive: !0
          }) || block, !!result2.page.id))
            return ((_b = result2.highlight) == null ? void 0 : _b.text) && (result2.highlight.html = result2.highlight.text.replace(/<gzkNfoUU>/gi, "<b>").replace(/<\/gzkNfoUU>/gi, "</b>")), result2;
        }).filter(Boolean).reduce((map, result2) => __spreadProps3(__spreadValues3({}, map), {
          [result2.page.id]: result2
        }), {});
        searchResult.results = Object.values(searchResultsMap);
      }
      this.state.query === query && this.setState({ isLoading: !1, searchResult, searchError });
    }), this._inputRef = React322.createRef();
  }
  componentDidMount() {
    this._search = (0, import_lodash3.default)(this._searchImpl.bind(this), 1e3), this._warmupSearch();
  }
  render() {
    let { isOpen, onClose } = this.props, { isLoading, query, searchResult, searchError } = this.state, hasQuery = !!query.trim();
    return /* @__PURE__ */ React322.createElement(NotionContextConsumer2, null, (ctx22) => {
      let { components, defaultPageIcon, mapPageUrl: mapPageUrl2 } = ctx22;
      return /* @__PURE__ */ React322.createElement(components.Modal, {
        isOpen,
        contentLabel: "Search",
        className: "notion-search",
        overlayClassName: "notion-search-overlay",
        onRequestClose: onClose,
        onAfterOpen: this._onAfterOpen
      }, /* @__PURE__ */ React322.createElement("div", {
        className: "quickFindMenu"
      }, /* @__PURE__ */ React322.createElement("div", {
        className: "searchBar"
      }, /* @__PURE__ */ React322.createElement("div", {
        className: "inlineIcon"
      }, isLoading ? /* @__PURE__ */ React322.createElement(LoadingIcon2, {
        className: "loadingIcon"
      }) : /* @__PURE__ */ React322.createElement(SearchIcon2, null)), /* @__PURE__ */ React322.createElement("input", {
        className: "searchInput",
        placeholder: "Search",
        value: query,
        ref: this._inputRef,
        onChange: this._onChangeQuery
      }), query && /* @__PURE__ */ React322.createElement("div", {
        role: "button",
        className: "clearButton",
        onClick: this._onClearQuery
      }, /* @__PURE__ */ React322.createElement(ClearIcon2, {
        className: "clearIcon"
      }))), hasQuery && searchResult && /* @__PURE__ */ React322.createElement(React322.Fragment, null, searchResult.results.length ? /* @__PURE__ */ React322.createElement(NotionContextProvider2, __spreadProps3(__spreadValues3({}, ctx22), {
        recordMap: searchResult.recordMap
      }), /* @__PURE__ */ React322.createElement("div", {
        className: "resultsPane"
      }, searchResult.results.map((result) => {
        var _a;
        return /* @__PURE__ */ React322.createElement(components.PageLink, {
          key: result.id,
          className: cs2("result", "notion-page-link"),
          href: mapPageUrl2(result.page.id, searchResult.recordMap)
        }, /* @__PURE__ */ React322.createElement(PageTitle2, {
          block: result.page,
          defaultIcon: defaultPageIcon
        }), ((_a = result.highlight) == null ? void 0 : _a.html) && /* @__PURE__ */ React322.createElement("div", {
          className: "notion-search-result-highlight",
          dangerouslySetInnerHTML: {
            __html: result.highlight.html
          }
        }));
      })), /* @__PURE__ */ React322.createElement("footer", {
        className: "resultsFooter"
      }, /* @__PURE__ */ React322.createElement("div", null, /* @__PURE__ */ React322.createElement("span", {
        className: "resultsCount"
      }, searchResult.total), searchResult.total === 1 ? " result" : " results"))) : /* @__PURE__ */ React322.createElement("div", {
        className: "noResultsPane"
      }, /* @__PURE__ */ React322.createElement("div", {
        className: "noResults"
      }, "No results"), /* @__PURE__ */ React322.createElement("div", {
        className: "noResultsDetail"
      }, "Try different search terms"))), hasQuery && !searchResult && searchError && /* @__PURE__ */ React322.createElement("div", {
        className: "noResultsPane"
      }, /* @__PURE__ */ React322.createElement("div", {
        className: "noResults"
      }, "Search error"))));
    });
  }
}, Header2 = ({ block }) => /* @__PURE__ */ React33.createElement("header", {
  className: "notion-header"
}, /* @__PURE__ */ React33.createElement("div", {
  className: "notion-nav-header"
}, /* @__PURE__ */ React33.createElement(Breadcrumbs2, {
  block
}), /* @__PURE__ */ React33.createElement(Search2, {
  block
}))), Breadcrumbs2 = ({ block, rootOnly = !1 }) => {
  let { recordMap, mapPageUrl: mapPageUrl2, components } = useNotionContext2(), breadcrumbs = React33.useMemo(() => {
    let breadcrumbs2 = Ae(recordMap, block.id);
    return rootOnly ? [breadcrumbs2[0]].filter(Boolean) : breadcrumbs2;
  }, [recordMap, block.id, rootOnly]);
  return /* @__PURE__ */ React33.createElement("div", {
    className: "breadcrumbs",
    key: "breadcrumbs"
  }, breadcrumbs.map((breadcrumb, index) => {
    if (!breadcrumb)
      return null;
    let pageLinkProps = {}, componentMap = {
      pageLink: components.PageLink
    };
    return breadcrumb.active ? componentMap.pageLink = (props) => /* @__PURE__ */ React33.createElement("div", __spreadValues3({}, props)) : pageLinkProps.href = mapPageUrl2(breadcrumb.pageId), /* @__PURE__ */ React33.createElement(React33.Fragment, {
      key: breadcrumb.pageId
    }, /* @__PURE__ */ React33.createElement(componentMap.pageLink, __spreadValues3({
      className: cs2("breadcrumb", breadcrumb.active && "active")
    }, pageLinkProps), breadcrumb.icon && /* @__PURE__ */ React33.createElement(PageIcon2, {
      className: "icon",
      block: breadcrumb.block
    }), breadcrumb.title && /* @__PURE__ */ React33.createElement("span", {
      className: "title"
    }, breadcrumb.title)), index < breadcrumbs.length - 1 && /* @__PURE__ */ React33.createElement("span", {
      className: "spacer"
    }, "/"));
  }));
}, Search2 = ({ block, search, title = "Search" }) => {
  let { searchNotion, rootPageId } = useNotionContext2(), onSearchNotion = search || searchNotion, [isSearchOpen, setIsSearchOpen] = React33.useState(!1), onOpenSearch = React33.useCallback(() => {
    setIsSearchOpen(!0);
  }, []), onCloseSearch = React33.useCallback(() => {
    setIsSearchOpen(!1);
  }, []);
  (0, import_react_hotkeys_hook2.useHotkeys)("cmd+p", (event) => {
    onOpenSearch(), event.preventDefault(), event.stopPropagation();
  }), (0, import_react_hotkeys_hook2.useHotkeys)("cmd+k", (event) => {
    onOpenSearch(), event.preventDefault(), event.stopPropagation();
  });
  let hasSearch = !!onSearchNotion;
  return /* @__PURE__ */ React33.createElement(React33.Fragment, null, hasSearch && /* @__PURE__ */ React33.createElement("div", {
    role: "button",
    className: cs2("breadcrumb", "button", "notion-search-button"),
    onClick: onOpenSearch
  }, /* @__PURE__ */ React33.createElement(SearchIcon2, {
    className: "searchIcon"
  }), title && /* @__PURE__ */ React33.createElement("span", {
    className: "title"
  }, title)), isSearchOpen && hasSearch && /* @__PURE__ */ React33.createElement(SearchDialog2, {
    isOpen: isSearchOpen,
    rootBlockId: rootPageId || (block == null ? void 0 : block.id),
    onClose: onCloseSearch,
    searchNotion: onSearchNotion
  }));
}, urlStyle2 = { width: "100%" }, AssetWrapper2 = ({ blockId, block }) => {
  var _a, _b, _c, _d, _e, _f;
  let value = block, { components, mapPageUrl: mapPageUrl2, rootDomain } = useNotionContext2(), isURL = !1;
  if (block.type === "image") {
    let caption = (_c = (_b = (_a = value == null ? void 0 : value.properties) == null ? void 0 : _a.caption) == null ? void 0 : _b[0]) == null ? void 0 : _c[0];
    if (caption) {
      let id = W(caption, { uuid: !0 });
      (caption.charAt(0) === "/" && id || isValidURL2(caption)) && (isURL = !0);
    }
  }
  let figure = /* @__PURE__ */ React34.createElement("figure", {
    className: cs2("notion-asset-wrapper", `notion-asset-wrapper-${block.type}`, ((_d = value.format) == null ? void 0 : _d.block_full_width) && "notion-asset-wrapper-full", blockId)
  }, /* @__PURE__ */ React34.createElement(Asset2, {
    block: value,
    zoomable: !isURL
  }, ((_e = value == null ? void 0 : value.properties) == null ? void 0 : _e.caption) && !isURL && /* @__PURE__ */ React34.createElement("figcaption", {
    className: "notion-asset-caption"
  }, /* @__PURE__ */ React34.createElement(Text2, {
    value: value.properties.caption,
    block
  }))));
  if (isURL) {
    let caption = (_f = value == null ? void 0 : value.properties) == null ? void 0 : _f.caption[0][0], id = W(caption, { uuid: !0 }), isPage = caption.charAt(0) === "/" && id, captionHostname = extractHostname2(caption);
    return /* @__PURE__ */ React34.createElement(components.PageLink, {
      style: urlStyle2,
      href: isPage ? mapPageUrl2(id) : caption,
      target: captionHostname && captionHostname !== rootDomain && !caption.startsWith("/") ? "blank_" : null
    }, figure);
  }
  return figure;
};
function isValidURL2(str) {
  return !!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(str);
}
function extractHostname2(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return "";
  }
}
function SvgCheck2(props) {
  return /* @__PURE__ */ React35.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React35.createElement("path", {
    d: "M5.5 12L14 3.5 12.5 2l-7 7-4-4.003L0 6.499z"
  }));
}
var check_default2 = SvgCheck2, Checkbox2 = ({ isChecked }) => {
  let content = null;
  return isChecked ? content = /* @__PURE__ */ React36.createElement("div", {
    className: "notion-property-checkbox-checked"
  }, /* @__PURE__ */ React36.createElement(check_default2, null)) : content = /* @__PURE__ */ React36.createElement("div", {
    className: "notion-property-checkbox-unchecked"
  }), /* @__PURE__ */ React36.createElement("span", {
    className: "notion-property notion-property-checkbox"
  }, content);
}, DefaultLink2 = (props) => /* @__PURE__ */ React37.createElement("a", __spreadValues3({
  target: "_blank",
  rel: "noopener noreferrer"
}, props)), DefaultLinkMemo2 = React37.memo(DefaultLink2), DefaultPageLink2 = (props) => /* @__PURE__ */ React37.createElement("a", __spreadValues3({}, props)), DefaultPageLinkMemo2 = React37.memo(DefaultPageLink2), DefaultEmbed2 = AssetWrapper2, DefaultHeader2 = Header2, dummyLink = (_a) => {
  var _b = _a, { href, rel, target, title } = _b, rest = __objRest2(_b, ["href", "rel", "target", "title"]);
  return /* @__PURE__ */ React37.createElement("span", __spreadValues3({}, rest));
}, dummyComponent2 = (name) => () => (console.warn(`Warning: using empty component "${name}" (you should override this in NotionRenderer.components)`), null), dummyOverrideFn2 = (_, defaultValueFn) => defaultValueFn(), defaultComponents2 = {
  Image: null,
  Link: DefaultLinkMemo2,
  PageLink: DefaultPageLinkMemo2,
  Checkbox: Checkbox2,
  Callout: void 0,
  Code: dummyComponent2("Code"),
  Equation: dummyComponent2("Equation"),
  Collection: dummyComponent2("Collection"),
  Property: void 0,
  propertyTextValue: dummyOverrideFn2,
  propertySelectValue: dummyOverrideFn2,
  propertyRelationValue: dummyOverrideFn2,
  propertyFormulaValue: dummyOverrideFn2,
  propertyTitleValue: dummyOverrideFn2,
  propertyPersonValue: dummyOverrideFn2,
  propertyFileValue: dummyOverrideFn2,
  propertyCheckboxValue: dummyOverrideFn2,
  propertyUrlValue: dummyOverrideFn2,
  propertyEmailValue: dummyOverrideFn2,
  propertyPhoneNumberValue: dummyOverrideFn2,
  propertyNumberValue: dummyOverrideFn2,
  propertyLastEditedTimeValue: dummyOverrideFn2,
  propertyCreatedTimeValue: dummyOverrideFn2,
  propertyDateValue: dummyOverrideFn2,
  Pdf: dummyComponent2("Pdf"),
  Tweet: dummyComponent2("Tweet"),
  Modal: dummyComponent2("Modal"),
  Header: DefaultHeader2,
  Embed: DefaultEmbed2
}, defaultNotionContext2 = {
  recordMap: {
    block: {},
    collection: {},
    collection_view: {},
    collection_query: {},
    notion_user: {},
    signed_urls: {}
  },
  components: defaultComponents2,
  mapPageUrl: defaultMapPageUrl2(),
  mapImageUrl: defaultMapImageUrl2,
  searchNotion: null,
  fullPage: !1,
  darkMode: !1,
  previewImages: !1,
  forceCustomImages: !1,
  showCollectionViewDropdown: !0,
  linkTableTitleProperties: !0,
  showTableOfContents: !1,
  minTableOfContentsItems: 3,
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  zoom: null
}, ctx2 = React37.createContext(defaultNotionContext2), NotionContextProvider2 = (_a) => {
  var _b = _a, {
    components: themeComponents = {},
    children,
    mapPageUrl: mapPageUrl2,
    mapImageUrl,
    rootPageId
  } = _b, rest = __objRest2(_b, [
    "components",
    "children",
    "mapPageUrl",
    "mapImageUrl",
    "rootPageId"
  ]);
  for (let key of Object.keys(rest))
    rest[key] === void 0 && delete rest[key];
  let wrappedThemeComponents = React37.useMemo(() => __spreadValues3({}, themeComponents), [themeComponents]);
  wrappedThemeComponents.nextImage && (wrappedThemeComponents.Image = wrapNextImage2(themeComponents.nextImage)), wrappedThemeComponents.nextLink && (wrappedThemeComponents.nextLink = wrapNextLink2(themeComponents.nextLink));
  for (let key of Object.keys(wrappedThemeComponents))
    wrappedThemeComponents[key] || delete wrappedThemeComponents[key];
  let value = React37.useMemo(() => __spreadProps3(__spreadValues3(__spreadValues3({}, defaultNotionContext2), rest), {
    rootPageId,
    mapPageUrl: mapPageUrl2 ?? defaultMapPageUrl2(rootPageId),
    mapImageUrl: mapImageUrl ?? defaultMapImageUrl2,
    components: __spreadValues3(__spreadValues3({}, defaultComponents2), wrappedThemeComponents)
  }), [mapImageUrl, mapPageUrl2, wrappedThemeComponents, rootPageId, rest]);
  return /* @__PURE__ */ React37.createElement(ctx2.Provider, {
    value
  }, children);
}, NotionContextConsumer2 = ctx2.Consumer, useNotionContext2 = () => React37.useContext(ctx2), import_format = __toESM3(require_format(), 1), import_getDate = __toESM3(require_getDate(), 1), import_getDay = __toESM3(require_getDay(), 1), import_getHours = __toESM3(require_getHours(), 1), import_getMinutes = __toESM3(require_getMinutes(), 1), import_getMonth = __toESM3(require_getMonth(), 1), import_getYear = __toESM3(require_getYear(), 1), import_add = __toESM3(require_add(), 1), import_sub = __toESM3(require_sub(), 1), import_intervalToDuration = __toESM3(require_intervalToDuration(), 1);
function evalFormula(formula, context) {
  let _a = context, { endDate } = _a, ctx22 = __objRest2(_a, ["endDate"]);
  switch (formula == null ? void 0 : formula.type) {
    case "symbol":
      return formula.name === "true";
    case "constant": {
      let value = formula.value;
      switch (formula.result_type) {
        case "text":
          return value;
        case "number":
          return parseFloat(value);
        default:
          return value;
      }
    }
    case "property": {
      let value = ctx22.properties[formula.id], text = h(value);
      switch (formula.result_type) {
        case "text":
          return text;
        case "number":
          return parseFloat(text);
        case "boolean":
          return typeof text == "string" ? text === "true" : !!text;
        case "date": {
          let v = Y(value);
          if (v)
            if (endDate && v.end_date) {
              let date = new Date(v.end_date);
              return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
            } else {
              let date = new Date(v.start_date);
              return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
            }
          else
            return new Date(text);
        }
        default:
          return text;
      }
    }
    case "operator":
    case "function":
      return evalFunctionFormula(formula, ctx22);
    default:
      throw new Error(`invalid or unsupported formula "${formula == null ? void 0 : formula.type}`);
  }
}
function evalFunctionFormula(formula, ctx22) {
  let args = formula == null ? void 0 : formula.args;
  switch (formula.name) {
    case "and":
      return evalFormula(args[0], ctx22) && evalFormula(args[1], ctx22);
    case "empty":
      return !evalFormula(args[0], ctx22);
    case "equal":
      return evalFormula(args[0], ctx22) == evalFormula(args[1], ctx22);
    case "if":
      return evalFormula(args[0], ctx22) ? evalFormula(args[1], ctx22) : evalFormula(args[2], ctx22);
    case "larger":
      return evalFormula(args[0], ctx22) > evalFormula(args[1], ctx22);
    case "largerEq":
      return evalFormula(args[0], ctx22) >= evalFormula(args[1], ctx22);
    case "not":
      return !evalFormula(args[0], ctx22);
    case "or":
      return evalFormula(args[0], ctx22) || evalFormula(args[1], ctx22);
    case "smaller":
      return evalFormula(args[0], ctx22) < evalFormula(args[1], ctx22);
    case "smallerEq":
      return evalFormula(args[0], ctx22) <= evalFormula(args[1], ctx22);
    case "unequal":
      return evalFormula(args[0], ctx22) != evalFormula(args[1], ctx22);
    case "abs":
      return Math.abs(evalFormula(args[0], ctx22));
    case "add": {
      let v0 = evalFormula(args[0], ctx22), v1 = evalFormula(args[1], ctx22);
      return typeof v0 == "number" ? v0 + +v1 : typeof v0 == "string" ? v0 + `${v1}` : v0;
    }
    case "cbrt":
      return Math.cbrt(evalFormula(args[0], ctx22));
    case "ceil":
      return Math.ceil(evalFormula(args[0], ctx22));
    case "divide":
      return evalFormula(args[0], ctx22) / evalFormula(args[1], ctx22);
    case "exp":
      return Math.exp(evalFormula(args[0], ctx22));
    case "floor":
      return Math.floor(evalFormula(args[0], ctx22));
    case "ln":
      return Math.log(evalFormula(args[0], ctx22));
    case "log10":
      return Math.log10(evalFormula(args[0], ctx22));
    case "log2":
      return Math.log2(evalFormula(args[0], ctx22));
    case "max":
      return args.map((arg) => evalFormula(arg, ctx22)).reduce((acc, value) => Math.max(acc, value), Number.NEGATIVE_INFINITY);
    case "min":
      return args.map((arg) => evalFormula(arg, ctx22)).reduce((acc, value) => Math.min(acc, value), Number.POSITIVE_INFINITY);
    case "mod":
      return evalFormula(args[0], ctx22) % evalFormula(args[1], ctx22);
    case "multiply":
      return evalFormula(args[0], ctx22) * evalFormula(args[1], ctx22);
    case "pow":
      return Math.pow(evalFormula(args[0], ctx22), evalFormula(args[1], ctx22));
    case "round":
      return Math.round(evalFormula(args[0], ctx22));
    case "sign":
      return Math.sign(evalFormula(args[0], ctx22));
    case "sqrt":
      return Math.sqrt(evalFormula(args[0], ctx22));
    case "subtract":
      return evalFormula(args[0], ctx22) - evalFormula(args[1], ctx22);
    case "toNumber":
      return parseFloat(evalFormula(args[0], ctx22));
    case "unaryMinus":
      return evalFormula(args[0], ctx22) * -1;
    case "unaryPlus":
      return parseFloat(evalFormula(args[0], ctx22));
    case "concat":
      return args.map((arg) => evalFormula(arg, ctx22)).join("");
    case "contains":
      return evalFormula(args[0], ctx22).includes(evalFormula(args[1], ctx22));
    case "format": {
      let value = evalFormula(args[0], ctx22);
      switch (typeof value) {
        case "string":
          return value;
        case "object":
          return value instanceof Date ? (0, import_format.default)(value, "MMM d, YYY") : `${value}`;
        case "number":
        default:
          return `${value}`;
      }
    }
    case "join": {
      let [delimiterArg, ...restArgs] = args, delimiter = evalFormula(delimiterArg, ctx22);
      return restArgs.map((arg) => evalFormula(arg, ctx22)).join(delimiter);
    }
    case "length":
      return evalFormula(args[0], ctx22).length;
    case "replace": {
      let value = evalFormula(args[0], ctx22), regex = evalFormula(args[1], ctx22), replacement = evalFormula(args[2], ctx22);
      return value.replace(new RegExp(regex), replacement);
    }
    case "replaceAll": {
      let value = evalFormula(args[0], ctx22), regex = evalFormula(args[1], ctx22), replacement = evalFormula(args[2], ctx22);
      return value.replace(new RegExp(regex, "g"), replacement);
    }
    case "slice": {
      let value = evalFormula(args[0], ctx22), beginIndex = evalFormula(args[1], ctx22), endIndex = args[2] ? evalFormula(args[2], ctx22) : value.length;
      return value.slice(beginIndex, endIndex);
    }
    case "test": {
      let value = evalFormula(args[0], ctx22), regex = evalFormula(args[1], ctx22);
      return new RegExp(regex).test(value);
    }
    case "date":
      return (0, import_getDate.default)(evalFormula(args[0], ctx22));
    case "dateAdd": {
      let date = evalFormula(args[0], ctx22), number = evalFormula(args[1], ctx22), unit = evalFormula(args[1], ctx22);
      return (0, import_add.default)(date, { [unit]: number });
    }
    case "dateBetween": {
      let date1 = evalFormula(args[0], ctx22), date2 = evalFormula(args[1], ctx22), unit = evalFormula(args[1], ctx22);
      return (0, import_intervalToDuration.default)({
        start: date2,
        end: date1
      })[unit];
    }
    case "dateSubtract": {
      let date = evalFormula(args[0], ctx22), number = evalFormula(args[1], ctx22), unit = evalFormula(args[1], ctx22);
      return (0, import_sub.default)(date, { [unit]: number });
    }
    case "day":
      return (0, import_getDay.default)(evalFormula(args[0], ctx22));
    case "end":
      return evalFormula(args[0], __spreadProps3(__spreadValues3({}, ctx22), { endDate: !0 }));
    case "formatDate": {
      let date = evalFormula(args[0], ctx22), formatValue = evalFormula(args[1], ctx22).replace("dddd", "eeee");
      return (0, import_format.default)(date, formatValue);
    }
    case "fromTimestamp":
      return new Date(evalFormula(args[0], ctx22));
    case "hour":
      return (0, import_getHours.default)(evalFormula(args[0], ctx22));
    case "minute":
      return (0, import_getMinutes.default)(evalFormula(args[0], ctx22));
    case "month":
      return (0, import_getMonth.default)(evalFormula(args[0], ctx22));
    case "now":
      return new Date();
    case "start":
      return evalFormula(args[0], __spreadProps3(__spreadValues3({}, ctx22), { endDate: !1 }));
    case "timestamp":
      return evalFormula(args[0], ctx22).getTime();
    case "year":
      return (0, import_getYear.default)(evalFormula(args[0], ctx22));
    default:
      throw new Error(`invalid or unsupported function formula "${formula == null ? void 0 : formula.type}`);
  }
}
var Property = (props) => {
  let { components } = useNotionContext2();
  return components.Property ? /* @__PURE__ */ React38.createElement(components.Property, __spreadValues3({}, props)) : /* @__PURE__ */ React38.createElement(PropertyImplMemo, __spreadValues3({}, props));
}, PropertyImpl = (props) => {
  let { components, mapImageUrl, mapPageUrl: mapPageUrl2 } = useNotionContext2(), {
    schema,
    data,
    block,
    collection,
    inline = !1,
    linkToTitlePage = !0
  } = props, renderTextValue = React38.useMemo(() => function() {
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      block
    });
  }, [block, data]), renderDateValue = React38.useMemo(() => function() {
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      block
    });
  }, [block, data]), renderRelationValue = React38.useMemo(() => function() {
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      block
    });
  }, [block, data]), renderFormulaValue = React38.useMemo(() => function() {
    let content2;
    try {
      let content3 = evalFormula(schema.formula, {
        schema: collection == null ? void 0 : collection.schema,
        properties: block == null ? void 0 : block.properties
      });
      isNaN(content3), content3 instanceof Date && (content3 = (0, import_format2.default)(content3, "MMM d, YYY hh:mm aa"));
    } catch {
      content2 = null;
    }
    return content2;
  }, [block == null ? void 0 : block.properties, collection == null ? void 0 : collection.schema, schema]), renderTitleValue = React38.useMemo(() => function() {
    return block && linkToTitlePage ? /* @__PURE__ */ React38.createElement(components.PageLink, {
      className: cs2("notion-page-link"),
      href: mapPageUrl2(block.id)
    }, /* @__PURE__ */ React38.createElement(PageTitle2, {
      block
    })) : /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      block
    });
  }, [block, components, data, linkToTitlePage, mapPageUrl2]), renderPersonValue = React38.useMemo(() => function() {
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      block
    });
  }, [block, data]), renderFileValue = React38.useMemo(() => function() {
    return data.filter((v) => v.length === 2).map((f) => f.flat().flat()).map((file, i) => /* @__PURE__ */ React38.createElement(components.Link, {
      key: i,
      className: "notion-property-file",
      href: mapImageUrl(file[2], block),
      target: "_blank",
      rel: "noreferrer noopener"
    }, /* @__PURE__ */ React38.createElement(GracefulImage2, {
      alt: file[0],
      src: mapImageUrl(file[2], block),
      loading: "lazy"
    })));
  }, [block, components, data, mapImageUrl]), renderCheckboxValue = React38.useMemo(() => function() {
    let isChecked = data && data[0][0] === "Yes";
    return /* @__PURE__ */ React38.createElement("div", {
      className: "notion-property-checkbox-container"
    }, /* @__PURE__ */ React38.createElement(Checkbox2, {
      isChecked,
      blockId: void 0
    }), /* @__PURE__ */ React38.createElement("span", {
      className: "notion-property-checkbox-text"
    }, schema.name));
  }, [data, schema]), renderUrlValue = React38.useMemo(() => function() {
    let d = JSON.parse(JSON.stringify(data));
    if (inline)
      try {
        let url = new URL(d[0][0]);
        d[0][0] = url.hostname.replace(/^www\./, "");
      } catch {
      }
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: d,
      block,
      inline,
      linkProps: {
        target: "_blank",
        rel: "noreferrer noopener"
      }
    });
  }, [block, data, inline]), renderEmailValue = React38.useMemo(() => function() {
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      linkProtocol: "mailto",
      block
    });
  }, [block, data]), renderPhoneNumberValue = React38.useMemo(() => function() {
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: data,
      linkProtocol: "tel",
      block
    });
  }, [block, data]), renderNumberValue = React38.useMemo(() => function() {
    let value = parseFloat(data[0][0] || "0"), output = "";
    if (isNaN(value))
      return /* @__PURE__ */ React38.createElement(Text2, {
        value: data,
        block
      });
    switch (schema.number_format) {
      case "number_with_commas":
        output = (0, import_format_number.default)()(value);
        break;
      case "percent":
        output = (0, import_format_number.default)({ suffix: "%" })(value * 100);
        break;
      case "dollar":
        output = (0, import_format_number.default)({ prefix: "$", round: 2, padRight: 2 })(value);
        break;
      case "euro":
        output = (0, import_format_number.default)({ prefix: "\u20AC", round: 2, padRight: 2 })(value);
        break;
      case "pound":
        output = (0, import_format_number.default)({ prefix: "\xA3", round: 2, padRight: 2 })(value);
        break;
      case "yen":
        output = (0, import_format_number.default)({ prefix: "\xA5", round: 0 })(value);
        break;
      case "rupee":
        output = (0, import_format_number.default)({ prefix: "\u20B9", round: 2, padRight: 2 })(value);
        break;
      case "won":
        output = (0, import_format_number.default)({ prefix: "\u20A9", round: 0 })(value);
        break;
      case "yuan":
        output = (0, import_format_number.default)({ prefix: "CN\xA5", round: 2, padRight: 2 })(value);
        break;
      default:
        return /* @__PURE__ */ React38.createElement(Text2, {
          value: data,
          block
        });
    }
    return /* @__PURE__ */ React38.createElement(Text2, {
      value: [[output]],
      block
    });
  }, [block, data, schema]), renderCreatedTimeValue = React38.useMemo(() => function() {
    return (0, import_format2.default)(new Date(block == null ? void 0 : block.created_time), "MMM d, YYY hh:mm aa");
  }, [block == null ? void 0 : block.created_time]), renderLastEditedTimeValue = React38.useMemo(() => function() {
    return (0, import_format2.default)(new Date(block == null ? void 0 : block.last_edited_time), "MMM d, YYY hh:mm aa");
  }, [block == null ? void 0 : block.last_edited_time]);
  if (!schema)
    return null;
  let content = null;
  if (data || schema.type === "checkbox" || schema.type === "title" || schema.type === "formula" || schema.type === "created_by" || schema.type === "last_edited_by" || schema.type === "created_time" || schema.type === "last_edited_time")
    switch (schema.type) {
      case "relation":
        content = components.propertyRelationValue(props, renderRelationValue);
        break;
      case "formula":
        content = components.propertyFormulaValue(props, renderFormulaValue);
        break;
      case "title":
        content = components.propertyTitleValue(props, renderTitleValue);
        break;
      case "select":
      case "multi_select": {
        content = (data[0][0] || "").split(",").map((value, index) => {
          var _a;
          let option = (_a = schema.options) == null ? void 0 : _a.find((option2) => value === option2.value), color = option == null ? void 0 : option.color;
          return components.propertySelectValue(__spreadProps3(__spreadValues3({}, props), {
            key: index,
            value,
            option,
            color
          }), () => /* @__PURE__ */ React38.createElement("div", {
            key: index,
            className: cs2(`notion-property-${schema.type}-item`, color && `notion-item-${color}`)
          }, value));
        });
        break;
      }
      case "person":
        content = components.propertyPersonValue(props, renderPersonValue);
        break;
      case "file":
        content = components.propertyFileValue(props, renderFileValue);
        break;
      case "checkbox":
        content = components.propertyCheckboxValue(props, renderCheckboxValue);
        break;
      case "url":
        content = components.propertyUrlValue(props, renderUrlValue);
        break;
      case "email":
        content = components.propertyEmailValue(props, renderEmailValue);
        break;
      case "phone_number":
        content = components.propertyPhoneNumberValue(props, renderPhoneNumberValue);
        break;
      case "number":
        content = components.propertyNumberValue(props, renderNumberValue);
        break;
      case "created_time":
        content = components.propertyCreatedTimeValue(props, renderCreatedTimeValue);
        break;
      case "last_edited_time":
        content = components.propertyLastEditedTimeValue(props, renderLastEditedTimeValue);
        break;
      case "created_by":
        break;
      case "last_edited_by":
        break;
      case "text":
        content = components.propertyTextValue(props, renderTextValue);
        break;
      case "date":
        content = components.propertyDateValue(props, renderDateValue);
        break;
      default:
        content = /* @__PURE__ */ React38.createElement(Text2, {
          value: data,
          block
        });
        break;
    }
  return /* @__PURE__ */ React38.createElement("span", {
    className: `notion-property notion-property-${schema.type}`
  }, content);
}, PropertyImplMemo = React38.memo(PropertyImpl), CollectionRow = ({ block, pageHeader = !1, className }) => {
  var _a, _b, _c, _d;
  let { recordMap } = useNotionContext2(), collectionId = block.parent_id, collection = (_a = recordMap.collection[collectionId]) == null ? void 0 : _a.value, schemas = collection == null ? void 0 : collection.schema;
  if (!collection || !schemas)
    return null;
  let propertyIds = Object.keys(schemas).filter((id) => id !== "title");
  if (((_b = collection.format) == null ? void 0 : _b.property_visibility) && (propertyIds = propertyIds.filter((id) => {
    var _a2;
    return ((_a2 = collection.format.property_visibility.find(({ property }) => property === id)) == null ? void 0 : _a2.visibility) !== "hide";
  })), (_c = collection.format) == null ? void 0 : _c.collection_page_properties) {
    let idToIndex = (_d = collection.format) == null ? void 0 : _d.collection_page_properties.reduce((acc, p, i) => __spreadProps3(__spreadValues3({}, acc), {
      [p.property]: i
    }), {});
    propertyIds.sort((a, b) => idToIndex[a] - idToIndex[b]);
  } else
    propertyIds.sort((a, b) => schemas[a].name.localeCompare(schemas[b].name));
  return /* @__PURE__ */ React39.createElement("div", {
    className: cs2("notion-collection-row", className)
  }, /* @__PURE__ */ React39.createElement("div", {
    className: "notion-collection-row-body"
  }, propertyIds.map((propertyId) => {
    var _a2;
    let schema = schemas[propertyId];
    return /* @__PURE__ */ React39.createElement("div", {
      className: "notion-collection-row-property",
      key: propertyId
    }, /* @__PURE__ */ React39.createElement(CollectionColumnTitle, {
      schema
    }), /* @__PURE__ */ React39.createElement("div", {
      className: "notion-collection-row-value"
    }, /* @__PURE__ */ React39.createElement(Property, {
      schema,
      data: (_a2 = block.properties) == null ? void 0 : _a2[propertyId],
      propertyId,
      block,
      collection,
      pageHeader
    })));
  })));
};
function SvgCollectionViewTable(props) {
  return /* @__PURE__ */ React40.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React40.createElement("path", {
    d: "M2 0h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm3.75 5.67v2.66h6.75V5.67H5.75zm0 4.17v2.66h5.75a1 1 0 001-1V9.84H5.75zM1.5 5.67v2.66h2.75V5.67H1.5zm0 4.17v1.66a1 1 0 001 1h1.75V9.84H1.5zm1-8.34a1 1 0 00-1 1v1.66h2.75V1.5H2.5zm3.25 0v2.66h6.75V2.5a1 1 0 00-1-1H5.75z"
  }));
}
var collection_view_table_default = SvgCollectionViewTable;
function SvgCollectionViewBoard(props) {
  return /* @__PURE__ */ React41.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React41.createElement("path", {
    d: "M12 1.5H2a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5zM2 0h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h2v6H3V3zm3 0h2v8H6V3zm3 0h2v4H9V3z"
  }));
}
var collection_view_board_default = SvgCollectionViewBoard;
function SvgCollectionViewGallery(props) {
  return /* @__PURE__ */ React422.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React422.createElement("path", {
    d: "M12 1.5H2a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5zM2 0h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h3.5v3.5H3V3zm4.5 0H11v3.5H7.5V3zM3 7.5h3.5V11H3V7.5zm4.5 0H11V11H7.5V7.5z"
  }));
}
var collection_view_gallery_default = SvgCollectionViewGallery;
function SvgCollectionViewList(props) {
  return /* @__PURE__ */ React43.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React43.createElement("path", {
    d: "M12 1.5H2a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5zM2 0h10a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1 3h6v1.5H3V3zm0 2.5h8V7H3V5.5zM3 8h4v1.5H3V8z"
  }));
}
var collection_view_list_default = SvgCollectionViewList;
function SvgCollectionViewCalendar(props) {
  return /* @__PURE__ */ React44.createElement("svg", __spreadValues3({
    viewBox: "0 0 14 14"
  }, props), /* @__PURE__ */ React44.createElement("path", {
    d: "M2.564 4.004c-.586 0-.71.024-.833.09a.319.319 0 00-.141.14c-.066.124-.09.247-.09.834v6.368c0 .586.024.71.09.833a.319.319 0 00.14.141c.124.066.248.09.834.09h8.872c.586 0 .71-.024.833-.09a.319.319 0 00.141-.14c.066-.124.09-.248.09-.834V5.068c0-.587-.024-.71-.09-.834a.319.319 0 00-.14-.14c-.124-.066-.248-.09-.834-.09H2.564zm0-4.004h8.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v8.873c0 .892-.093 1.215-.267 1.54-.174.327-.43.583-.756.757-.326.174-.65.267-1.54.267H2.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 01-.757-.756C.093 12.65 0 12.327 0 11.437V2.563c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757C1.35.093 1.673 0 2.563 0zm4.044 7.88c.179.11.318.256.418.436.1.18.148.394.148.64 0 .304-.08.597-.238.876-.16.28-.392.498-.692.65-.299.15-.685.224-1.16.224-.46 0-.827-.055-1.1-.166a1.687 1.687 0 01-.68-.492 2.227 2.227 0 01-.404-.802l.083-.127 1.37-.182.112.08c.05.258.126.431.221.52a.507.507 0 00.364.133.495.495 0 00.386-.169c.105-.115.158-.27.158-.472 0-.205-.051-.358-.15-.463a.527.527 0 00-.407-.157 1.65 1.65 0 00-.417.077l-.127-.104.07-.98.115-.091c.072.01.127.015.164.015.154 0 .28-.047.38-.144.1-.096.15-.205.15-.335a.388.388 0 00-.106-.29c-.07-.07-.168-.105-.3-.105a.444.444 0 00-.324.118c-.083.08-.143.232-.176.457l-.117.084-1.297-.233-.079-.123c.114-.435.334-.772.66-1.006.326-.234.78-.349 1.36-.349.666 0 1.153.126 1.462.384.31.259.467.589.467.982 0 .233-.064.446-.192.636a1.43 1.43 0 01-.37.365c.1.034.182.072.248.113zm1.747-.145a5.186 5.186 0 01-.806.31l-.129-.097V6.824l.07-.096c.455-.147.807-.322 1.055-.524.246-.202.439-.45.579-.747l.09-.057h1.135l.1.1v5.021l-.1.1H8.961l-.1-.1V7.428a4.053 4.053 0 01-.506.307z"
  }));
}
var collection_view_calendar_default = SvgCollectionViewCalendar, iconMap2 = {
  table: collection_view_table_default,
  board: collection_view_board_default,
  gallery: collection_view_gallery_default,
  list: collection_view_list_default,
  calendar: collection_view_calendar_default
}, CollectionViewIcon = (_a) => {
  var _b = _a, {
    type
  } = _b, rest = __objRest2(_b, [
    "type"
  ]);
  let icon = iconMap2[type];
  return icon ? icon(rest) : null;
}, ChevronDownIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest2(_a, ["className"]);
  return /* @__PURE__ */ React45.createElement("svg", __spreadProps3(__spreadValues3({
    className
  }, rest), {
    viewBox: "0 0 30 30",
    width: "10"
  }), /* @__PURE__ */ React45.createElement("polygon", {
    points: "15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "
  }));
}, CollectionGroup = (_a) => {
  var _b = _a, {
    collectionViewComponent: CollectionViewComponent,
    collection,
    collectionGroup,
    schema,
    value,
    hidden,
    summaryProps,
    detailsProps
  } = _b, rest = __objRest2(_b, [
    "collectionViewComponent",
    "collection",
    "collectionGroup",
    "schema",
    "value",
    "hidden",
    "summaryProps",
    "detailsProps"
  ]);
  return hidden ? null : /* @__PURE__ */ React46.createElement("details", __spreadValues3({
    open: !0,
    className: "notion-collection-group"
  }, detailsProps), /* @__PURE__ */ React46.createElement("summary", __spreadValues3({
    className: "notion-collection-group-title"
  }, summaryProps), /* @__PURE__ */ React46.createElement("div", null, /* @__PURE__ */ React46.createElement(Property, {
    schema,
    data: [[value]],
    collection
  }), /* @__PURE__ */ React46.createElement("span", {
    className: "notion-board-th-count"
  }, collectionGroup == null ? void 0 : collectionGroup.total))), /* @__PURE__ */ React46.createElement(CollectionViewComponent, __spreadValues3({
    collection,
    collectionGroup
  }, rest)));
}, import_format3 = __toESM3(require_format(), 1);
function getCollectionGroups(collection, collectionView, collectionData, ...rest) {
  var _a;
  let elems = ((_a = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _a.collection_groups) || [];
  return elems == null ? void 0 : elems.map(({ property, hidden, value: { value, type } }) => {
    var _a2, _b;
    let isUncategorizedValue = typeof value > "u", isDateValue = value == null ? void 0 : value.range, queryLabel = isUncategorizedValue ? "uncategorized" : isDateValue ? ((_a2 = value.range) == null ? void 0 : _a2.start_date) || ((_b = value.range) == null ? void 0 : _b.end_date) : (value == null ? void 0 : value.value) || value, collectionGroup = collectionData[`results:${type}:${queryLabel}`], queryValue = !isUncategorizedValue && (isDateValue || (value == null ? void 0 : value.value) || value), schema = collection.schema[property];
    return type === "checkbox" && value && (queryValue = "Yes"), isDateValue && (schema = {
      type: "text",
      name: "text"
    }, queryValue = (0, import_format3.default)(new Date(queryLabel), "MMM d, YYY hh:mm aa")), __spreadValues3({
      collectionGroup,
      schema,
      value: queryValue || "No description",
      hidden,
      collection,
      collectionView,
      collectionData,
      blockIds: collectionGroup == null ? void 0 : collectionGroup.blockIds
    }, rest);
  });
}
var defaultBlockIds = [], CollectionViewTable = ({
  collection,
  collectionView,
  collectionData,
  padding,
  width
}) => {
  var _a, _b, _c;
  if ((_a = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _a.collection_group_by)
    return getCollectionGroups(collection, collectionView, collectionData, padding, width).map((group, index) => /* @__PURE__ */ React47.createElement(CollectionGroup, __spreadProps3(__spreadValues3({
      key: index
    }, group), {
      collectionViewComponent: (props) => /* @__PURE__ */ React47.createElement(Table, __spreadProps3(__spreadValues3({}, props), {
        padding,
        width
      })),
      summaryProps: {
        style: {
          paddingLeft: padding,
          paddingRight: padding
        }
      }
    })));
  let blockIds = ((_c = (_b = collectionData.collection_group_results) == null ? void 0 : _b.blockIds) != null ? _c : collectionData.blockIds) || defaultBlockIds;
  return /* @__PURE__ */ React47.createElement(Table, {
    blockIds,
    collection,
    collectionView,
    padding,
    width
  });
};
function Table({ blockIds = [], collection, collectionView, width, padding }) {
  var _a;
  let { recordMap, linkTableTitleProperties } = useNotionContext2(), tableStyle = React47.useMemo(() => ({
    width,
    maxWidth: width
  }), [width]), tableViewStyle = React47.useMemo(() => ({
    paddingLeft: padding,
    paddingRight: padding
  }), [padding]), properties = [];
  return ((_a = collectionView.format) == null ? void 0 : _a.table_properties) ? properties = collectionView.format.table_properties.filter((p) => p.visible && collection.schema[p.property]) : properties = [{ property: "title" }].concat(Object.keys(collection.schema).filter((p) => p !== "title").map((property) => ({ property }))), /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table",
    style: tableStyle
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table-view",
    style: tableViewStyle
  }, !!properties.length && /* @__PURE__ */ React47.createElement(React47.Fragment, null, /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table-header"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table-header-inner"
  }, properties.map((p) => {
    var _a2;
    let schema = (_a2 = collection.schema) == null ? void 0 : _a2[p.property], isTitle = p.property === "title", style = {};
    return p.width ? style.width = p.width : isTitle ? style.width = 280 : style.width = 200, /* @__PURE__ */ React47.createElement("div", {
      className: "notion-table-th",
      key: p.property
    }, /* @__PURE__ */ React47.createElement("div", {
      className: "notion-table-view-header-cell",
      style
    }, /* @__PURE__ */ React47.createElement("div", {
      className: "notion-table-view-header-cell-inner"
    }, /* @__PURE__ */ React47.createElement(CollectionColumnTitle, {
      schema
    }))));
  }))), /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table-header-placeholder"
  }), /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table-body"
  }, blockIds == null ? void 0 : blockIds.map((blockId) => /* @__PURE__ */ React47.createElement("div", {
    className: "notion-table-row",
    key: blockId
  }, properties.map((p) => {
    var _a2, _b, _c;
    let schema = (_a2 = collection.schema) == null ? void 0 : _a2[p.property], block = (_b = recordMap.block[blockId]) == null ? void 0 : _b.value, data = (_c = block == null ? void 0 : block.properties) == null ? void 0 : _c[p.property], isTitle = p.property === "title", style = {};
    return p.width ? style.width = p.width : isTitle ? style.width = 280 : style.width = 200, /* @__PURE__ */ React47.createElement("div", {
      key: p.property,
      className: cs2("notion-table-cell", `notion-table-cell-${schema.type}`),
      style
    }, /* @__PURE__ */ React47.createElement(Property, {
      schema,
      data,
      block,
      collection,
      linkToTitlePage: linkTableTitleProperties
    }));
  })))))));
}
var CollectionCard = (_a) => {
  var _b = _a, {
    collection,
    block,
    cover,
    coverSize,
    coverAspect,
    properties,
    className
  } = _b, rest = __objRest2(_b, [
    "collection",
    "block",
    "cover",
    "coverSize",
    "coverAspect",
    "properties",
    "className"
  ]), _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  let ctx22 = useNotionContext2(), { components, recordMap, mapPageUrl: mapPageUrl2, mapImageUrl } = ctx22, coverContent = null, { page_cover_position = 0.5 } = block.format || {}, coverPosition = (1 - page_cover_position) * 100;
  if ((cover == null ? void 0 : cover.type) === "page_content") {
    let contentBlockId = (_a2 = block.content) == null ? void 0 : _a2.find((blockId) => {
      var _a3;
      let block2 = (_a3 = recordMap.block[blockId]) == null ? void 0 : _a3.value;
      if ((block2 == null ? void 0 : block2.type) === "image")
        return !0;
    });
    if (contentBlockId) {
      let contentBlock = (_b2 = recordMap.block[contentBlockId]) == null ? void 0 : _b2.value, source = (_g = (_e = (_d = (_c = contentBlock.properties) == null ? void 0 : _c.source) == null ? void 0 : _d[0]) == null ? void 0 : _e[0]) != null ? _g : (_f = contentBlock.format) == null ? void 0 : _f.display_source;
      if (source) {
        let src = mapImageUrl(source, contentBlock), caption = (_j = (_i = (_h = contentBlock.properties) == null ? void 0 : _h.caption) == null ? void 0 : _i[0]) == null ? void 0 : _j[0];
        coverContent = /* @__PURE__ */ React48.createElement(LazyImage2, {
          src,
          alt: caption || "notion image",
          style: {
            objectFit: coverAspect
          }
        });
      }
    }
    coverContent || (coverContent = /* @__PURE__ */ React48.createElement("div", {
      className: "notion-collection-card-cover-empty"
    }));
  } else if ((cover == null ? void 0 : cover.type) === "page_cover") {
    let { page_cover } = block.format || {};
    if (page_cover) {
      let coverPosition2 = (1 - page_cover_position) * 100;
      coverContent = /* @__PURE__ */ React48.createElement(LazyImage2, {
        src: mapImageUrl(page_cover, block),
        alt: h((_k = block.properties) == null ? void 0 : _k.title),
        style: {
          objectFit: coverAspect,
          objectPosition: `center ${coverPosition2}%`
        }
      });
    }
  } else if ((cover == null ? void 0 : cover.type) === "property") {
    let { property } = cover, schema = collection.schema[property], data = (_l = block.properties) == null ? void 0 : _l[property];
    if (schema && data)
      if (schema.type === "file") {
        let file = data.filter((v) => v.length === 2).map((f) => f.flat().flat())[0];
        file && (coverContent = /* @__PURE__ */ React48.createElement("span", {
          className: `notion-property-${schema.type}`
        }, /* @__PURE__ */ React48.createElement(LazyImage2, {
          alt: file[0],
          src: mapImageUrl(file[2], block),
          style: {
            objectFit: coverAspect,
            objectPosition: `center ${coverPosition}%`
          }
        })));
      } else
        coverContent = /* @__PURE__ */ React48.createElement(Property, {
          propertyId: property,
          schema,
          data
        });
  }
  return /* @__PURE__ */ React48.createElement(NotionContextProvider2, __spreadProps3(__spreadValues3({}, ctx22), {
    components: __spreadProps3(__spreadValues3({}, ctx22.components), {
      Link: dummyLink,
      PageLink: dummyLink
    })
  }), /* @__PURE__ */ React48.createElement(components.PageLink, __spreadValues3({
    className: cs2("notion-collection-card", `notion-collection-card-size-${coverSize}`, className),
    href: mapPageUrl2(block.id)
  }, rest), (coverContent || (cover == null ? void 0 : cover.type) !== "none") && /* @__PURE__ */ React48.createElement("div", {
    className: "notion-collection-card-cover"
  }, coverContent), /* @__PURE__ */ React48.createElement("div", {
    className: "notion-collection-card-body"
  }, /* @__PURE__ */ React48.createElement("div", {
    className: "notion-collection-card-property"
  }, /* @__PURE__ */ React48.createElement(Property, {
    schema: collection.schema.title,
    data: (_m = block == null ? void 0 : block.properties) == null ? void 0 : _m.title,
    block,
    collection
  })), properties == null ? void 0 : properties.filter((p) => p.visible && p.property !== "title" && collection.schema[p.property]).map((p) => {
    if (!block.properties)
      return null;
    let schema = collection.schema[p.property], data = block.properties[p.property];
    return /* @__PURE__ */ React48.createElement("div", {
      className: "notion-collection-card-property",
      key: p.property
    }, /* @__PURE__ */ React48.createElement(Property, {
      schema,
      data,
      block,
      collection,
      inline: !0
    }));
  }))));
}, defaultBlockIds2 = [], CollectionViewGallery = ({
  collection,
  collectionView,
  collectionData
}) => {
  var _a, _b, _c, _d, _e;
  if ((_a = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _a.collection_group_by)
    return getCollectionGroups(collection, collectionView, collectionData).map((group, index) => /* @__PURE__ */ React49.createElement(CollectionGroup, __spreadProps3(__spreadValues3({
      key: index
    }, group), {
      collectionViewComponent: Gallery
    })));
  let blockIds = ((_e = (_d = (_b = collectionData.collection_group_results) == null ? void 0 : _b.blockIds) != null ? _d : (_c = collectionData["results:relation:uncategorized"]) == null ? void 0 : _c.blockIds) != null ? _e : collectionData.blockIds) || defaultBlockIds2;
  return /* @__PURE__ */ React49.createElement(Gallery, {
    collectionView,
    collection,
    blockIds
  });
};
function Gallery({ blockIds, collectionView, collection }) {
  let { recordMap } = useNotionContext2(), {
    gallery_cover = { type: "none" },
    gallery_cover_size = "medium",
    gallery_cover_aspect = "cover"
  } = collectionView.format || {};
  return /* @__PURE__ */ React49.createElement("div", {
    className: "notion-gallery"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: "notion-gallery-view"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: cs2("notion-gallery-grid", `notion-gallery-grid-size-${gallery_cover_size}`)
  }, blockIds == null ? void 0 : blockIds.map((blockId) => {
    var _a, _b;
    let block = (_a = recordMap.block[blockId]) == null ? void 0 : _a.value;
    return block ? /* @__PURE__ */ React49.createElement(CollectionCard, {
      collection,
      block,
      cover: gallery_cover,
      coverSize: gallery_cover_size,
      coverAspect: gallery_cover_aspect,
      properties: (_b = collectionView.format) == null ? void 0 : _b.gallery_properties,
      key: blockId
    }) : null;
  }))));
}
var defaultBlockIds3 = [], CollectionViewList = ({
  collection,
  collectionView,
  collectionData
}) => {
  var _a, _b, _c;
  if ((_a = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _a.collection_group_by)
    return getCollectionGroups(collection, collectionView, collectionData).map((group, key) => /* @__PURE__ */ React50.createElement(CollectionGroup, __spreadProps3(__spreadValues3({
      key
    }, group), {
      collectionViewComponent: List
    })));
  let blockIds = ((_c = (_b = collectionData.collection_group_results) == null ? void 0 : _b.blockIds) != null ? _c : collectionData.blockIds) || defaultBlockIds3;
  return /* @__PURE__ */ React50.createElement(List, {
    blockIds,
    collection,
    collectionView
  });
};
function List({ blockIds, collection, collectionView }) {
  let { components, recordMap, mapPageUrl: mapPageUrl2 } = useNotionContext2();
  return /* @__PURE__ */ React50.createElement("div", {
    className: "notion-list-collection"
  }, /* @__PURE__ */ React50.createElement("div", {
    className: "notion-list-view"
  }, /* @__PURE__ */ React50.createElement("div", {
    className: "notion-list-body"
  }, blockIds == null ? void 0 : blockIds.map((blockId) => {
    var _a, _b, _c, _d;
    let block = (_a = recordMap.block[blockId]) == null ? void 0 : _a.value;
    if (!block)
      return null;
    let titleSchema = collection.schema.title, titleData = (_b = block == null ? void 0 : block.properties) == null ? void 0 : _b.title;
    return /* @__PURE__ */ React50.createElement(components.PageLink, {
      className: "notion-list-item notion-page-link",
      href: mapPageUrl2(block.id),
      key: blockId
    }, /* @__PURE__ */ React50.createElement("div", {
      className: "notion-list-item-title"
    }, /* @__PURE__ */ React50.createElement(Property, {
      schema: titleSchema,
      data: titleData,
      block,
      collection
    })), /* @__PURE__ */ React50.createElement("div", {
      className: "notion-list-item-body"
    }, (_d = (_c = collectionView.format) == null ? void 0 : _c.list_properties) == null ? void 0 : _d.filter((p) => p.visible).map((p) => {
      var _a2;
      let schema = collection.schema[p.property], data = block && ((_a2 = block.properties) == null ? void 0 : _a2[p.property]);
      return schema ? /* @__PURE__ */ React50.createElement("div", {
        className: "notion-list-item-property",
        key: p.property
      }, /* @__PURE__ */ React50.createElement(Property, {
        schema,
        data,
        block,
        collection
      })) : null;
    })));
  }))));
}
var EmptyIcon = (props) => {
  let _a = props, { className } = _a, rest = __objRest2(_a, ["className"]);
  return /* @__PURE__ */ React51.createElement("svg", __spreadProps3(__spreadValues3({
    className
  }, rest), {
    viewBox: "0 0 14 14",
    width: "14"
  }), /* @__PURE__ */ React51.createElement("path", {
    d: "M11.0918,0 C11.5383,0 11.9307,0.295898 12.0533,0.725586 L13.9615,7.40332 C13.9871,7.49316 14,7.58594 14,7.67871 L14,13 C14,13.5527 13.5522,14 13,14 L1,14 C0.447754,14 0,13.5527 0,13 L0,7.67871 C0,7.58594 0.0129395,7.49316 0.0384521,7.40332 L1.94666,0.725586 C2.06934,0.295898 2.46167,0 2.9082,0 L11.0918,0 Z M4.27271,1.5 C3.83728,1.5 3.45178,1.78223 3.31982,2.19727 L1.91455,6.61328 C1.70947,7.25879 2.1908,7.91699 2.86755,7.91699 L4.70837,7.91699 C4.70837,8.93652 5.16663,10.168 7,10.168 C8.83337,10.168 9.29163,8.93652 9.29163,7.91699 L11.1478,7.89355 C11.8201,7.88477 12.2927,7.22852 12.0876,6.58887 L10.681,2.19531 C10.5485,1.78125 10.1635,1.5 9.72864,1.5 L4.27271,1.5 Z"
  }));
}, CollectionViewBoard = ({
  collection,
  collectionView,
  collectionData,
  padding
}) => {
  var _a;
  return ((_a = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _a.collection_group_by) ? getCollectionGroups(collection, collectionView, collectionData, padding).map((group, index) => /* @__PURE__ */ React522.createElement(CollectionGroup, __spreadProps3(__spreadValues3({
    key: index
  }, group), {
    summaryProps: {
      style: {
        paddingLeft: padding
      }
    },
    collectionViewComponent: (props) => /* @__PURE__ */ React522.createElement(Board, __spreadValues3({
      padding
    }, props))
  }))) : /* @__PURE__ */ React522.createElement(Board, {
    padding,
    collectionView,
    collection,
    collectionData
  });
};
function Board({ collectionView, collectionData, collection, padding }) {
  var _a, _b;
  let { recordMap } = useNotionContext2(), {
    board_cover = { type: "none" },
    board_cover_size = "medium",
    board_cover_aspect = "cover"
  } = (collectionView == null ? void 0 : collectionView.format) || {}, boardGroups = ((_a = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _a.board_columns) || ((_b = collectionView == null ? void 0 : collectionView.format) == null ? void 0 : _b.board_groups2) || [], boardStyle = React522.useMemo(() => ({
    paddingLeft: padding
  }), [padding]);
  return /* @__PURE__ */ React522.createElement("div", {
    className: "notion-board"
  }, /* @__PURE__ */ React522.createElement("div", {
    className: cs2("notion-board-view", `notion-board-view-size-${board_cover_size}`),
    style: boardStyle
  }, /* @__PURE__ */ React522.createElement("div", {
    className: "notion-board-header"
  }, /* @__PURE__ */ React522.createElement("div", {
    className: "notion-board-header-inner"
  }, boardGroups.map((p, index) => {
    var _a2, _b2, _c;
    if (!((_a2 = collectionData.board_columns) == null ? void 0 : _a2.results))
      return null;
    let group = collectionData.board_columns.results[index], schema = collection.schema[p.property];
    return !group || !schema || p.hidden ? null : /* @__PURE__ */ React522.createElement("div", {
      className: "notion-board-th",
      key: index
    }, /* @__PURE__ */ React522.createElement("div", {
      className: "notion-board-th-body"
    }, ((_b2 = group.value) == null ? void 0 : _b2.value) ? /* @__PURE__ */ React522.createElement(Property, {
      schema,
      data: [[(_c = group.value) == null ? void 0 : _c.value]],
      collection
    }) : /* @__PURE__ */ React522.createElement("span", null, /* @__PURE__ */ React522.createElement(EmptyIcon, {
      className: "notion-board-th-empty"
    }), " No Select"), /* @__PURE__ */ React522.createElement("span", {
      className: "notion-board-th-count"
    }, group.total)));
  }))), /* @__PURE__ */ React522.createElement("div", {
    className: "notion-board-header-placeholder"
  }), /* @__PURE__ */ React522.createElement("div", {
    className: "notion-board-body"
  }, boardGroups.map((p, index) => {
    var _a2, _b2, _c;
    if (!((_a2 = collectionData.board_columns) == null ? void 0 : _a2.results))
      return null;
    let schema = collection.schema[p.property], group = collectionData[`results:select:${((_b2 = p == null ? void 0 : p.value) == null ? void 0 : _b2.value) || "uncategorized"}`];
    return !group || !schema || p.hidden ? null : /* @__PURE__ */ React522.createElement("div", {
      className: "notion-board-group",
      key: index
    }, (_c = group.blockIds) == null ? void 0 : _c.map((blockId) => {
      var _a3, _b3;
      let block = (_a3 = recordMap.block[blockId]) == null ? void 0 : _a3.value;
      return block ? /* @__PURE__ */ React522.createElement(CollectionCard, {
        className: "notion-board-group-card",
        collection,
        block,
        cover: board_cover,
        coverSize: board_cover_size,
        coverAspect: board_cover_aspect,
        properties: (_b3 = collectionView.format) == null ? void 0 : _b3.board_properties,
        key: blockId
      }) : null;
    }));
  }))));
}
var CollectionViewImpl = (props) => {
  let { collectionView } = props;
  switch (collectionView.type) {
    case "table":
      return /* @__PURE__ */ React53.createElement(CollectionViewTable, __spreadValues3({}, props));
    case "gallery":
      return /* @__PURE__ */ React53.createElement(CollectionViewGallery, __spreadValues3({}, props));
    case "list":
      return /* @__PURE__ */ React53.createElement(CollectionViewList, __spreadValues3({}, props));
    case "board":
      return /* @__PURE__ */ React53.createElement(CollectionViewBoard, __spreadValues3({}, props));
    default:
      return console.warn("unsupported collection view", collectionView), null;
  }
}, CollectionView = React53.memo(CollectionViewImpl), isServer22 = typeof window > "u", Collection = ({ block, className, ctx: ctx22 }) => {
  let context = React54.useMemo(() => __spreadValues3({}, ctx22), [ctx22]);
  return block.type === "page" ? block.parent_table !== "collection" ? null : /* @__PURE__ */ React54.createElement(NotionContextProvider2, __spreadValues3({}, context), /* @__PURE__ */ React54.createElement("div", {
    className: "notion-collection-page-properties"
  }, /* @__PURE__ */ React54.createElement(CollectionRow, {
    block,
    pageHeader: !0,
    className
  }))) : /* @__PURE__ */ React54.createElement(NotionContextProvider2, __spreadValues3({}, context), /* @__PURE__ */ React54.createElement(CollectionViewBlock, {
    block,
    className
  }));
}, CollectionViewBlock = ({ block, className }) => {
  var _a, _b, _c;
  let { recordMap, showCollectionViewDropdown } = useNotionContext2(), { view_ids: viewIds } = block, collectionId = w(block, recordMap), [isMounted, setIsMounted] = React54.useState(!1);
  React54.useEffect(() => {
    setIsMounted(!0);
  }, []);
  let defaultCollectionViewId = viewIds[0], [collectionState, setCollectionState] = (0, import_react_use.useLocalStorage)(block.id, {
    collectionViewId: defaultCollectionViewId
  }), collectionViewId = isMounted && viewIds.find((id) => id === collectionState.collectionViewId) || defaultCollectionViewId, onChangeView = React54.useCallback((collectionViewId2) => {
    console.log("change collection view", collectionViewId2), setCollectionState(__spreadProps3(__spreadValues3({}, collectionState), {
      collectionViewId: collectionViewId2
    }));
  }, [collectionState, setCollectionState]), { width: windowWidth } = (0, import_react_use.useWindowSize)();
  isServer22 && (windowWidth = 1024);
  let collection = (_a = recordMap.collection[collectionId]) == null ? void 0 : _a.value, collectionView = (_b = recordMap.collection_view[collectionViewId]) == null ? void 0 : _b.value, collectionData = (_c = recordMap.collection_query[collectionId]) == null ? void 0 : _c[collectionViewId], parentPage = O(block, recordMap), { style, width, padding } = React54.useMemo(() => {
    var _a2;
    let style2 = {};
    if ((collectionView == null ? void 0 : collectionView.type) !== "table" && (collectionView == null ? void 0 : collectionView.type) !== "board")
      return {
        style: style2,
        width: 0,
        padding: 0
      };
    let width2 = windowWidth, maxNotionBodyWidth = 708, notionBodyWidth = maxNotionBodyWidth;
    ((_a2 = parentPage == null ? void 0 : parentPage.format) == null ? void 0 : _a2.page_full_width) ? notionBodyWidth = width2 - 2 * Math.min(96, width2 * 0.08) | 0 : notionBodyWidth = width2 < maxNotionBodyWidth ? width2 - width2 * 0.02 | 0 : maxNotionBodyWidth;
    let padding2 = isServer22 && !isMounted ? 96 : (width2 - notionBodyWidth) / 2 | 0;
    return style2.paddingLeft = padding2, style2.paddingRight = padding2, {
      style: style2,
      width: width2,
      padding: padding2
    };
  }, [windowWidth, parentPage, collectionView == null ? void 0 : collectionView.type, isMounted]);
  if (!(collection && collectionView && collectionData))
    return console.warn("skipping missing collection view for block", block.id, {
      collectionId,
      collectionViewId,
      collectionView,
      collectionData,
      recordMap
    }), null;
  let title = h(collection.name).trim();
  return collection.icon && (block.format = __spreadProps3(__spreadValues3({}, block.format), {
    page_icon: collection.icon
  })), /* @__PURE__ */ React54.createElement("div", {
    className: cs2("notion-collection", className)
  }, /* @__PURE__ */ React54.createElement("div", {
    className: "notion-collection-header",
    style
  }, title && /* @__PURE__ */ React54.createElement("div", {
    className: "notion-collection-header-title"
  }, /* @__PURE__ */ React54.createElement(PageIcon2, {
    block,
    className: "notion-page-title-icon",
    hideDefaultIcon: !0
  }), title), viewIds.length > 1 && showCollectionViewDropdown && /* @__PURE__ */ React54.createElement(CollectionViewDropdownMenu, {
    collectionView,
    collectionViewId,
    viewIds,
    onChangeView
  })), /* @__PURE__ */ React54.createElement(CollectionView, {
    collection,
    collectionView,
    collectionData,
    padding,
    width
  }));
}, CollectionViewDropdownMenu = ({ collectionViewId, collectionView, viewIds, onChangeView }) => {
  let { recordMap } = useNotionContext2();
  return /* @__PURE__ */ React54.createElement(DropdownMenu.Root, null, /* @__PURE__ */ React54.createElement(DropdownMenu.Trigger, {
    className: "notion-collection-view-dropdown"
  }, /* @__PURE__ */ React54.createElement(CollectionViewColumnDesc, {
    collectionView
  }, /* @__PURE__ */ React54.createElement(ChevronDownIcon, {
    className: "notion-collection-view-dropdown-icon"
  }))), /* @__PURE__ */ React54.createElement(DropdownMenu.Content, {
    className: "notion-collection-view-dropdown-content"
  }, /* @__PURE__ */ React54.createElement(DropdownMenu.RadioGroup, {
    value: collectionViewId,
    onValueChange: onChangeView
  }, viewIds.map((viewId) => {
    var _a;
    return /* @__PURE__ */ React54.createElement(DropdownMenu.RadioItem, {
      key: viewId,
      value: viewId,
      className: cs2("notion-collection-view-dropdown-content-item", collectionViewId === viewId && "notion-collection-view-dropdown-content-item-active")
    }, collectionViewId === viewId && /* @__PURE__ */ React54.createElement("div", {
      className: "notion-collection-view-dropdown-content-item-active-icon"
    }, /* @__PURE__ */ React54.createElement(check_default2, null)), /* @__PURE__ */ React54.createElement(CollectionViewColumnDesc, {
      collectionView: (_a = recordMap.collection_view[viewId]) == null ? void 0 : _a.value
    }));
  }))));
}, CollectionViewColumnDesc = (_a) => {
  var _b = _a, { collectionView, className, children } = _b, rest = __objRest2(_b, ["collectionView", "className", "children"]);
  let { type } = collectionView, name = collectionView.name || `${type[0].toUpperCase()}${type.slice(1)} view`;
  return /* @__PURE__ */ React54.createElement("div", __spreadValues3({
    className: cs2("notion-collection-view-type", className)
  }, rest), /* @__PURE__ */ React54.createElement(CollectionViewIcon, {
    className: "notion-collection-view-type-icon",
    type
  }), /* @__PURE__ */ React54.createElement("span", {
    className: "notion-collection-view-type-title"
  }, name), children);
};

// app/utils/site-config.ts
var siteConfig = (config) => config;

// site.config.ts
var site_config_default = siteConfig({
  rootNotionPageId: "c22d5bff8cb64dc9931db2f53b80f698",
  name: "Lane Parton",
  domain: "laneparton.com",
  author: "Lane Parton",
  description: "Just my little home on the internet.",
  twitter: "laneparton",
  github: "laneparton",
  linkedin: "lane-parton"
});

// app/utils/get-canonical-page-id.ts
function getCanonicalPageId(pageId, recordMap, { uuid: uuid3 = !0 } = {}) {
  return W(pageId, { uuid: !1 }) ? Le(pageId, recordMap, {
    uuid: uuid3
  }) : null;
}

// app/utils/map-page-url.ts
var mapPageUrl = (recordMap, searchParams) => (pageId = "") => {
  let pageUuid = W(pageId, { uuid: !0 });
  return M(pageUuid) === site_config_default.rootNotionPageId ? createUrl("/", searchParams) : createUrl(`/${getCanonicalPageId(pageUuid, recordMap, { uuid: !1 })}`, searchParams);
};
function createUrl(path, searchParams) {
  return [path, searchParams.toString()].filter(Boolean).join("?");
}

// app/components/NotionPage.tsx
var NotionPage = ({ recordMap }) => {
  console.log("notion page", {
    recordMap
  });
  let components = React55.useMemo(() => ({
    Header: NotionPageHeader,
    Collection
  }), []), siteMapPageUrl = React55.useMemo(() => {
    let params = {}, searchParams = new URLSearchParams(params);
    return mapPageUrl(recordMap, searchParams);
  }, [recordMap]);
  return /* @__PURE__ */ React55.createElement(React55.Fragment, null, /* @__PURE__ */ React55.createElement(NotionRenderer, {
    bodyClassName: styles_module_default.notion,
    darkMode: !1,
    components,
    recordMap,
    rootPageId: site_config_default.rootNotionPageId,
    rootDomain: site_config_default.domain,
    fullPage: !0,
    mapPageUrl: siteMapPageUrl
  }));
};

// node_modules/notion-client/build/index.js
var import_got = __toESM(require("got"), 1);

// node_modules/indent-string/index.js
function indentString(string, count = 1, options = {}) {
  let {
    indent = " ",
    includeEmptyLines = !1
  } = options;
  if (typeof string != "string")
    throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof string}\``);
  if (typeof count != "number")
    throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof count}\``);
  if (count < 0)
    throw new RangeError(`Expected \`count\` to be at least 0, got \`${count}\``);
  if (typeof indent != "string")
    throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof indent}\``);
  if (count === 0)
    return string;
  let regex = includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
  return string.replace(regex, indent.repeat(count));
}

// node_modules/clean-stack/index.js
var import_os = __toESM(require("os"), 1), import_escape_string_regexp = __toESM(require("escape-string-regexp"), 1), extractPathRegex = /\s+at.*[(\s](.*)\)?/, pathRegex = /^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/, homeDir = typeof import_os.default.homedir > "u" ? "" : import_os.default.homedir().replace(/\\/g, "/");
function cleanStack(stack, { pretty = !1, basePath } = {}) {
  let basePathRegex = basePath && new RegExp(`(at | \\()${(0, import_escape_string_regexp.default)(basePath.replace(/\\/g, "/"))}`, "g");
  if (typeof stack == "string")
    return stack.replace(/\\/g, "/").split(`
`).filter((line) => {
      let pathMatches = line.match(extractPathRegex);
      if (pathMatches === null || !pathMatches[1])
        return !0;
      let match = pathMatches[1];
      return match.includes(".app/Contents/Resources/electron.asar") || match.includes(".app/Contents/Resources/default_app.asar") || match.includes("node_modules/electron/dist/resources/electron.asar") || match.includes("node_modules/electron/dist/resources/default_app.asar") ? !1 : !pathRegex.test(match);
    }).filter((line) => line.trim() !== "").map((line) => (basePathRegex && (line = line.replace(basePathRegex, "$1")), pretty && (line = line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, "~")))), line)).join(`
`);
}

// node_modules/aggregate-error/index.js
var cleanInternalStack = (stack) => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, ""), _errors, AggregateError = class extends Error {
  constructor(errors) {
    if (!Array.isArray(errors))
      throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
    errors = errors.map((error) => error instanceof Error ? error : error !== null && typeof error == "object" ? Object.assign(new Error(error.message), error) : new Error(error));
    let message = errors.map((error) => typeof error.stack == "string" && error.stack.length > 0 ? cleanInternalStack(cleanStack(error.stack)) : String(error)).join(`
`);
    message = `
` + indentString(message, 4);
    super(message);
    __privateAdd(this, _errors, void 0);
    __publicField(this, "name", "AggregateError");
    __privateSet(this, _errors, errors);
  }
  get errors() {
    return __privateGet(this, _errors).slice();
  }
};
_errors = new WeakMap();

// node_modules/p-map/index.js
var AbortError3 = class extends Error {
  constructor(message) {
    super();
    this.name = "AbortError", this.message = message;
  }
}, getDOMException2 = (errorMessage) => globalThis.DOMException === void 0 ? new AbortError3(errorMessage) : new DOMException(errorMessage), getAbortedReason2 = (signal) => {
  let reason = signal.reason === void 0 ? getDOMException2("This operation was aborted.") : signal.reason;
  return reason instanceof Error ? reason : getDOMException2(reason);
};
async function pMap(iterable, mapper, {
  concurrency = Number.POSITIVE_INFINITY,
  stopOnError = !0,
  signal
} = {}) {
  return new Promise((resolve, reject_) => {
    if (iterable[Symbol.iterator] === void 0 && iterable[Symbol.asyncIterator] === void 0)
      throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof iterable})`);
    if (typeof mapper != "function")
      throw new TypeError("Mapper function is required");
    if (!((Number.isSafeInteger(concurrency) || concurrency === Number.POSITIVE_INFINITY) && concurrency >= 1))
      throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
    let result = [], errors = [], skippedIndexesMap = /* @__PURE__ */ new Map(), isRejected = !1, isResolved = !1, isIterableDone = !1, resolvingCount = 0, currentIndex = 0, iterator = iterable[Symbol.iterator] === void 0 ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator](), reject = (reason) => {
      isRejected = !0, isResolved = !0, reject_(reason);
    };
    signal && (signal.aborted && reject(getAbortedReason2(signal)), signal.addEventListener("abort", () => {
      reject(getAbortedReason2(signal));
    }));
    let next = async () => {
      if (isResolved)
        return;
      let nextItem = await iterator.next(), index = currentIndex;
      if (currentIndex++, nextItem.done) {
        if (isIterableDone = !0, resolvingCount === 0 && !isResolved) {
          if (!stopOnError && errors.length > 0) {
            reject(new AggregateError(errors));
            return;
          }
          if (isResolved = !0, skippedIndexesMap.size === 0) {
            resolve(result);
            return;
          }
          let pureResult = [];
          for (let [index2, value] of result.entries())
            skippedIndexesMap.get(index2) !== pMapSkip && pureResult.push(value);
          resolve(pureResult);
        }
        return;
      }
      resolvingCount++, (async () => {
        try {
          let element = await nextItem.value;
          if (isResolved)
            return;
          let value = await mapper(element, index);
          value === pMapSkip && skippedIndexesMap.set(index, value), result[index] = value, resolvingCount--, await next();
        } catch (error) {
          if (stopOnError)
            reject(error);
          else {
            errors.push(error), resolvingCount--;
            try {
              await next();
            } catch (error2) {
              reject(error2);
            }
          }
        }
      })();
    };
    (async () => {
      for (let index = 0; index < concurrency; index++) {
        try {
          await next();
        } catch (error) {
          reject(error);
          break;
        }
        if (isIterableDone || isRejected)
          break;
      }
    })();
  });
}
var pMapSkip = Symbol("skip");

// node_modules/notion-client/build/index.js
var j = Object.defineProperty, Z2 = Object.defineProperties, z2 = Object.getOwnPropertyDescriptors, x = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, Y2 = Object.prototype.propertyIsEnumerable, J2 = (d, t, s) => t in d ? j(d, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : d[t] = s, n = (d, t) => {
  for (var s in t || (t = {}))
    Q.call(t, s) && J2(d, s, t[s]);
  if (x)
    for (var s of x(t))
      Y2.call(t, s) && J2(d, s, t[s]);
  return d;
}, k = (d, t) => Z2(d, z2(t)), X = class {
  constructor({ apiBaseUrl: t = "https://www.notion.so/api/v3", authToken: s, activeUser: e, userTimeZone: a = "America/New_York" } = {}) {
    this._apiBaseUrl = t, this._authToken = s, this._activeUser = e, this._userTimeZone = a;
  }
  async getPage(t, { concurrency: s = 3, fetchMissingBlocks: e = !0, fetchCollections: a = !0, signFileUrls: i = !0, chunkLimit: o = 100, chunkNumber: h2 = 0, gotOptions: l } = {}) {
    var b, p, R2;
    let y = await this.getPageRaw(t, { chunkLimit: o, chunkNumber: h2, gotOptions: l }), r = y == null ? void 0 : y.recordMap;
    if (!(r != null && r.block))
      throw new Error(`Notion page not found "${M(t)}"`);
    if (r.collection = (b = r.collection) != null ? b : {}, r.collection_view = (p = r.collection_view) != null ? p : {}, r.notion_user = (R2 = r.notion_user) != null ? R2 : {}, r.collection_query = {}, r.signed_urls = {}, e)
      for (; ; ) {
        let v = Te(r).filter((c) => !r.block[c]);
        if (!v.length)
          break;
        let m = await this.getBlocks(v, l).then((c) => c.recordMap.block);
        r.block = n(n({}, r.block), m);
      }
    let _ = Te(r);
    if (a) {
      let v = _.flatMap((m) => {
        var O2;
        let c = r.block[m].value, f = c && (c.type === "collection_view" || c.type === "collection_view_page") && w(c, r);
        return f ? (O2 = c.view_ids) == null ? void 0 : O2.map((B2) => ({ collectionId: f, collectionViewId: B2 })) : [];
      });
      await pMap(v, async (m) => {
        var B2, U;
        let { collectionId: c, collectionViewId: f } = m, O2 = (B2 = r.collection_view[f]) == null ? void 0 : B2.value;
        try {
          let g = await this.getCollectionData(c, f, O2, { gotOptions: l });
          r.block = n(n({}, r.block), g.recordMap.block), r.collection = n(n({}, r.collection), g.recordMap.collection), r.collection_view = n(n({}, r.collection_view), g.recordMap.collection_view), r.notion_user = n(n({}, r.notion_user), g.recordMap.notion_user), r.collection_query[c] = k(n({}, r.collection_query[c]), { [f]: (U = g.result) == null ? void 0 : U.reducerResults });
        } catch (g) {
          console.warn("NotionAPI collectionQuery error", t, g.message), console.error(g);
        }
      }, { concurrency: s });
    }
    return i && await this.addSignedUrls({ recordMap: r, contentBlockIds: _, gotOptions: l }), r;
  }
  async addSignedUrls({ recordMap: t, contentBlockIds: s, gotOptions: e = {} }) {
    t.signed_urls = {}, s || (s = Te(t));
    let a = s.flatMap((i) => {
      var h2, l, y, r, _, b;
      let o = (h2 = t.block[i]) == null ? void 0 : h2.value;
      if (o && (o.type === "pdf" || o.type === "audio" || o.type === "image" && ((l = o.file_ids) == null ? void 0 : l.length) || o.type === "video" || o.type === "file" || o.type === "page")) {
        let p = o.type === "page" ? (y = o.format) == null ? void 0 : y.page_cover : (b = (_ = (r = o.properties) == null ? void 0 : r.source) == null ? void 0 : _[0]) == null ? void 0 : b[0];
        if (p)
          return p.indexOf("youtube") >= 0 || p.indexOf("vimeo") >= 0 ? [] : { permissionRecord: { table: "block", id: o.id }, url: p };
      }
      return [];
    });
    if (a.length > 0)
      try {
        let { signedUrls: i } = await this.getSignedFileUrls(a, e);
        if (i.length === a.length)
          for (let o = 0; o < a.length; ++o) {
            let h2 = a[o], l = i[o];
            t.signed_urls[h2.permissionRecord.id] = l;
          }
      } catch (i) {
        console.warn("NotionAPI getSignedfileUrls error", i);
      }
  }
  async getPageRaw(t, { gotOptions: s, chunkLimit: e = 100, chunkNumber: a = 0 } = {}) {
    let i = W(t);
    if (!i)
      throw new Error(`invalid notion pageId "${t}"`);
    let o = { pageId: i, limit: e, chunkNumber: a, cursor: { stack: [] }, verticalColumns: !1 };
    return this.fetch({ endpoint: "loadPageChunk", body: o, gotOptions: s });
  }
  async getCollectionData(t, s, e, { limit: a = 9999, searchQuery: i = "", userTimeZone: o = this._userTimeZone, loadContentCover: h2 = !0, gotOptions: l } = {}) {
    var p, R2, v, m, c, f, O2, B2;
    let y = e == null ? void 0 : e.type, r = y === "board", _ = ((p = e == null ? void 0 : e.format) == null ? void 0 : p.board_columns_by) || ((R2 = e == null ? void 0 : e.format) == null ? void 0 : R2.collection_group_by), b = k(n({ type: "reducer", reducers: { collection_group_results: { type: "results", limit: a, loadContentCover: h2 } }, sort: [] }, e == null ? void 0 : e.query2), { searchQuery: i, userTimeZone: o });
    if (_) {
      let U = ((v = e == null ? void 0 : e.format) == null ? void 0 : v.board_columns) || ((m = e == null ? void 0 : e.format) == null ? void 0 : m.collection_groups) || [], g = [r ? "board" : "group_aggregation", "results"], $ = { checkbox: "checkbox_is", url: "string_starts_with", text: "string_starts_with", select: "enum_is", multi_select: "enum_contains", created_time: "date_is_within", undefined: "is_empty" }, q = {};
      for (let S2 of U) {
        let { property: L2, value: { value: u, type: P2 } } = S2;
        for (let N of g) {
          let A2 = N === "results" ? { type: N, limit: a } : { type: "aggregation", aggregation: { aggregator: "count" } }, I = typeof u > "u", C = u == null ? void 0 : u.range, D = I ? "uncategorized" : C ? ((c = u.range) == null ? void 0 : c.start_date) || ((f = u.range) == null ? void 0 : f.end_date) : (u == null ? void 0 : u.value) || u, F = !I && (C || (u == null ? void 0 : u.value) || u);
          q[`${N}:${P2}:${D}`] = k(n({}, A2), { filter: { operator: "and", filters: [{ property: L2, filter: n({ operator: I ? "is_empty" : $[P2] }, !I && { value: { type: "exact", value: F } }) }] } });
        }
      }
      let E = r ? "board_columns" : `${y}_groups`;
      b = k(n({ type: "reducer", reducers: n({ [E]: k(n({ type: "groups", groupBy: _ }, ((O2 = e == null ? void 0 : e.query2) == null ? void 0 : O2.filter) && { filter: (B2 = e == null ? void 0 : e.query2) == null ? void 0 : B2.filter }), { groupSortPreference: U.map((S2) => S2 == null ? void 0 : S2.value), limit: a }) }, q) }, e == null ? void 0 : e.query2), { searchQuery: i, userTimeZone: o });
    }
    return this.fetch({ endpoint: "queryCollection", body: { collection: { id: t }, collectionView: { id: s }, loader: b }, gotOptions: l });
  }
  async getUsers(t, s) {
    return this.fetch({ endpoint: "getRecordValues", body: { requests: t.map((e) => ({ id: e, table: "notion_user" })) }, gotOptions: s });
  }
  async getBlocks(t, s) {
    return this.fetch({ endpoint: "syncRecordValues", body: { requests: t.map((e) => ({ table: "block", id: e, version: -1 })) }, gotOptions: s });
  }
  async getSignedFileUrls(t, s) {
    return this.fetch({ endpoint: "getSignedFileUrls", body: { urls: t }, gotOptions: s });
  }
  async search(t, s) {
    let e = { type: "BlocksInAncestor", source: "quick_find_public", ancestorId: W(t.ancestorId), sort: "Relevance", limit: t.limit || 20, query: t.query, filters: n({ isDeletedOnly: !1, isNavigableOnly: !1, excludeTemplates: !0, requireEditPermissions: !1, ancestors: [], createdBy: [], editedBy: [], lastEditedTime: {}, createdTime: {} }, t.filters) };
    return this.fetch({ endpoint: "search", body: e, gotOptions: s });
  }
  async fetch({ endpoint: t, body: s, gotOptions: e, headers: a }) {
    let i = k(n(n({}, a), e == null ? void 0 : e.headers), { "Content-Type": "application/json" });
    this._authToken && (i.cookie = `token_v2=${this._authToken}`), this._activeUser && (i["x-notion-active-user-header"] = this._activeUser);
    let o = `${this._apiBaseUrl}/${t}`;
    return import_got.default.post(o, k(n({}, e), { json: s, headers: i })).json();
  }
};

// app/utils/notion-api.ts
var notion = new X({
  apiBaseUrl: process.env.NOTION_API_BASE_URL
});

// node_modules/p-memoize/dist/index.js
var cacheStore2 = /* @__PURE__ */ new WeakMap();
function pMemoize(fn, { cacheKey = ([firstArgument]) => firstArgument, cache = /* @__PURE__ */ new Map() } = {}) {
  let promiseCache = /* @__PURE__ */ new Map(), memoized = function(...arguments_) {
    let key = cacheKey(arguments_);
    if (promiseCache.has(key))
      return promiseCache.get(key);
    let promise = (async () => {
      try {
        if (cache && await cache.has(key))
          return await cache.get(key);
        let result = await fn.apply(this, arguments_);
        try {
          return result;
        } finally {
          cache && await cache.set(key, result);
        }
      } finally {
        promiseCache.delete(key);
      }
    })();
    return promiseCache.set(key, promise), promise;
  };
  return mimicFunction(memoized, fn, {
    ignoreNonConfigurable: !0
  }), cacheStore2.set(memoized, cache), memoized;
}

// app/utils/get-site-map.ts
var uuid2 = !1;
async function getSiteMap() {
  let partialSiteMap = await getAllPages(site_config_default.rootNotionPageId, "");
  return __spreadValues({
    site: site_config_default.site
  }, partialSiteMap);
}
var getAllPages = pMemoize(getAllPagesImpl, {
  cacheKey: (...args) => JSON.stringify(args)
});
async function getAllPagesImpl(rootNotionPageId, rootNotionSpaceId) {
  let pageMap = await Ee(rootNotionPageId, rootNotionSpaceId, async (pageId, ...args) => (console.log(`
notion getPage`, M(pageId)), notion.getPage(pageId, ...args))), canonicalPageMap = Object.keys(pageMap).reduce((map, pageId) => {
    let recordMap = pageMap[pageId];
    if (!recordMap)
      throw new Error(`Error loading page "${pageId}"`);
    let canonicalPageId = getCanonicalPageId(pageId, recordMap, {
      uuid: uuid2
    });
    return map[canonicalPageId] ? (console.warn("error duplicate canonical page id", {
      canonicalPageId,
      pageId,
      existingPageId: map[canonicalPageId]
    }), map) : __spreadProps(__spreadValues({}, map), {
      [canonicalPageId]: pageId
    });
  }, {});
  return {
    pageMap,
    canonicalPageMap
  };
}

// app/utils/resolve-notion-page.ts
async function resolveNotionPage(rawPageId) {
  let pageId, recordMap;
  if (console.log("3", rawPageId), pageId = W(rawPageId), console.log("4", pageId), pageId)
    recordMap = await notion.getPage(pageId);
  else {
    let siteMap = await getSiteMap();
    if (pageId = siteMap == null ? void 0 : siteMap.canonicalPageMap[rawPageId], pageId)
      recordMap = await notion.getPage(pageId);
    else
      return {
        error: {
          message: `Not found "${rawPageId}"`,
          statusCode: 404
        }
      };
  }
  return recordMap;
}

// route:/Users/iweenggs/Documents/GitHub/remix-notion-starter/app/routes/$pageId.tsx
var loader = async ({ params }) => {
  let pageData = await resolveNotionPage(params.pageId);
  return (0, import_node.json)(await pageData);
};
function NotionDynamicPage() {
  let pageData = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(NotionPage, {
    recordMap: pageData,
    rootPageId: site_config_default.rootNotionPageId
  });
}

// route:/Users/iweenggs/Documents/GitHub/remix-notion-starter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");
var loader2 = async () => {
  let pageId = site_config_default.rootNotionPageId, pageData = await resolveNotionPage(pageId);
  return (0, import_node2.json)(await pageData);
};
function Index() {
  let indexPage = (0, import_react4.useLoaderData)();
  return console.log(indexPage), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(NotionPage, {
    recordMap: indexPage,
    rootPageId: site_config_default.rootNotionPageId
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "ef5c365c", entry: { module: "/build/entry.client-DHESJ76E.js", imports: ["/build/_shared/chunk-4ND4ABE4.js", "/build/_shared/chunk-QZ3WKT6U.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-O6JUSU2G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$pageId": { id: "routes/$pageId", parentId: "root", path: ":pageId", index: void 0, caseSensitive: void 0, module: "/build/routes/$pageId-UNB2KLRP.js", imports: ["/build/_shared/chunk-G7S42RI5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-FLOPYK2B.js", imports: ["/build/_shared/chunk-G7S42RI5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-EF5C365C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/$pageId": {
    id: "routes/$pageId",
    parentId: "root",
    path: ":pageId",
    index: void 0,
    caseSensitive: void 0,
    module: pageId_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
