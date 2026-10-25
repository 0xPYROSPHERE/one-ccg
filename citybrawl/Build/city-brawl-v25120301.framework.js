function unityFramework(_0x3d01d3) {
  var _0x3d01d3 = typeof _0x3d01d3 !== "undefined" ? _0x3d01d3 : {};
  _0x3d01d3["USER_JSPRE_PLACEHOLDER"] = "USER_JSPRE_PLACEHOLDER";
  function _0x1b862d(_0x238701, _0x2a9009) {
    return _0x2b847b("The JavaScript function 'Pointer_stringify(ptrToSomeCString)' is obsoleted and will be removed in a future Unity version. Please call 'UTF8ToString(ptrToSomeCString)' instead."), _0x5a9382(_0x238701, _0x2a9009);
  }
  _0x3d01d3["Pointer_stringify"] = _0x1b862d;
  var _0x5bc056 = "(^|\\n)(\\s+at\\s+|)jsStackTrace(\\s+\\(|@)([^\\n]+):\\d+:\\d+(\\)|)(\\n|$)", _0x41fb79 = _0x5b7e0a()["match"](new RegExp(_0x5bc056));
  if (_0x41fb79) _0x3d01d3["stackTraceRegExp"] = new RegExp(_0x5bc056["replace"]("([^\\n]+)", _0x41fb79[4]["replace"](/[\\^${}[\]().*+?|]/g, "\\$&"))["replace"]("jsStackTrace", "[^\\n]+"));
  var _0x4c406f = function (_0x2a5cc3) {
    if (_0x259747) return;
    _0x259747 = !![], _0x474a84 = 1;
    if (typeof ENVIRONMENT_IS_PTHREAD !== "undefined" && ENVIRONMENT_IS_PTHREAD) console["error"]("Pthread aborting at " + (new Error)["stack"]);
    _0x2a5cc3 !== undefined ? (_0x507ddf(_0x2a5cc3), _0x366b43(_0x2a5cc3), _0x2a5cc3 = JSON["stringify"](_0x2a5cc3)) : _0x2a5cc3 = "";
    var _0x5ae5bc = "abort(" + _0x2a5cc3 + ") at " + _0x39ad7b();
    if (_0x3d01d3["abortHandler"] && _0x3d01d3["abortHandler"](_0x5ae5bc)) return;
    throw _0x5ae5bc;
  };
  _0x3d01d3["SetFullscreen"] = function (_0xec9f07) {
    if (typeof _0x216a38 === "undefined" || !_0x216a38) console["log"]("Runtime not initialized yet."); else {
      if (typeof _0x38c1b7 === "undefined") console["log"]("Player not loaded yet."); else {
        var _0x546584 = _0x38c1b7["canPerformEventHandlerRequests"];
        _0x38c1b7["canPerformEventHandlerRequests"] = function () {
          return 1;
        }, _0x3d01d3["ccall"]("SetFullscreen", null, ["number"], [_0xec9f07]), _0x38c1b7["canPerformEventHandlerRequests"] = _0x546584;
      }
    }
  };
  (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) && _0x3d01d3["preRun"]["push"](function () {
    var _0x172689 = _0x3d01d3["unityFileSystemInit"] || function () {
      _0x37953b["mkdir"]("/idbfs"), _0x37953b["mount"](_0x3e97fb, {}, "/idbfs"), _0x3d01d3["addRunDependency"]("JS_FileSystem_Mount"), _0x37953b["syncfs"](!![], function (_0x21fd4a) {
        if (_0x21fd4a) console["log"]("IndexedDB is not available. Data will not persist in cache and PlayerPrefs will not be saved.");
        _0x3d01d3["removeRunDependency"]("JS_FileSystem_Mount");
      });
    };
    _0x172689();
  });
  var _0x43bd9c = [], _0x3f5168 = ![], _0xb57c6c, _0x5331fc = null;
  function _0x5169f4(_0x5e0c2b) {
    var _0x425967 = Object["keys"](_0x43bd9c);
    for (var _0xd79361 = 0; _0xd79361 < _0x425967["length"]; ++_0xd79361) {
      var _0x16e8e8 = _0x43bd9c[_0x425967[_0xd79361]];
      if (_0x16e8e8["deviceId"] && _0x16e8e8["deviceId"] == _0x5e0c2b["deviceId"]) return _0x16e8e8;
    }
    for (var _0xd79361 = 0; _0xd79361 < _0x425967["length"]; ++_0xd79361) {
      var _0x16e8e8 = _0x43bd9c[_0x425967[_0xd79361]];
      if (_0x16e8e8 == _0x5e0c2b) return _0x16e8e8;
    }
    for (var _0xd79361 = 0; _0xd79361 < _0x425967["length"]; ++_0xd79361) {
      var _0x16e8e8 = _0x43bd9c[_0x425967[_0xd79361]];
      if (_0x16e8e8["label"] && _0x16e8e8["label"] == _0x5e0c2b["label"]) return _0x16e8e8;
    }
    for (var _0xd79361 = 0; _0xd79361 < _0x425967["length"]; ++_0xd79361) {
      var _0x16e8e8 = _0x43bd9c[_0x425967[_0xd79361]];
      if (_0x16e8e8["groupId"] && _0x16e8e8["kind"] && _0x16e8e8["groupId"] == _0x5e0c2b["groupId"] && _0x16e8e8["kind"] == _0x5e0c2b["kind"]) return _0x16e8e8;
    }
  }
  function _0x4cf4a5() {
    for (var _0x1b38e6 = 0;; ++_0x1b38e6) {
      if (!_0x43bd9c[_0x1b38e6]) return _0x1b38e6;
    }
  }
  function _0x29daa2(_0x7ba734) {
    _0xb57c6c(), _0x43bd9c = [];
    var _0xd0ae06 = {}, _0x1dd2cf = [];
    _0x7ba734["forEach"](function (_0x3c5dbe) {
      if (_0x3c5dbe["kind"] === "videoinput") {
        var _0x3ed995 = _0x5169f4(_0x3c5dbe);
        _0x3ed995 ? _0xd0ae06[_0x3ed995["id"]] = _0x3ed995 : _0x1dd2cf["push"](_0x3c5dbe);
      }
    }), _0x43bd9c = _0xd0ae06, _0x1dd2cf["forEach"](function (_0x585c1a) {
      !_0x585c1a["id"] && (_0x585c1a["id"] = _0x4cf4a5(), _0x585c1a["name"] = _0x585c1a["label"] || "Video input #" + (_0x585c1a["id"] + 1), _0x585c1a["isFrontFacing"] = _0x585c1a["name"]["toLowerCase"]()["includes"]("front") || !_0x585c1a["name"]["toLowerCase"]()["includes"]("front") && !_0x585c1a["name"]["toLowerCase"]()["includes"]("back"), _0x43bd9c[_0x585c1a["id"]] = _0x585c1a);
    });
  }
  function _0x4b2857() {
    if (!_0x43bd9c) return;
    navigator["mediaDevices"]["enumerateDevices"]()["then"](function (_0x173a11) {
      _0x29daa2(_0x173a11), _0x3f5168 = !![];
    })["catch"](function (_0x53bd2e) {
      console["warn"]("Unable to enumerate media devices: " + _0x53bd2e + "\nWebcams will not be available."), _0x166c6e();
    }), /Firefox/["test"](navigator["userAgent"]) && (setTimeout(_0x4b2857, 6e4), _0x2b847b("Applying workaround to Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=1397977"));
  }
  function _0x166c6e() {
    navigator["mediaDevices"] && navigator["mediaDevices"]["removeEventListener"] && navigator["mediaDevices"]["removeEventListener"]("devicechange", _0x4b2857), _0x43bd9c = null;
  }
  _0x3d01d3["disableAccessToMediaDevices"] = _0x166c6e;
  if (!navigator["mediaDevices"]) console["warn"]("navigator.mediaDevices not supported by this browser. Webcam access will not be available." + (location["protocol"] == "https:" ? "" : " Try hosting the page over HTTPS, because some browsers disable webcam access when insecure HTTP is being used.")), _0x166c6e(); else {
    if (typeof ENVIRONMENT_IS_PTHREAD === "undefined" || !ENVIRONMENT_IS_PTHREAD) setTimeout(function () {
      try {
        _0x3e50c2("enumerateMediaDevices"), _0xb57c6c = function () {
          if (_0x5331fc !== null) clearTimeout(_0x5331fc);
          _0x47f78c("enumerateMediaDevices");
          if (navigator["mediaDevices"]) console["log"]("navigator.mediaDevices support available");
          _0xb57c6c = function () {};
        }, _0x4b2857(), _0x5331fc = setTimeout(_0xb57c6c, 1e3), navigator["mediaDevices"]["addEventListener"]("devicechange", _0x4b2857);
      } catch (_0x250f31) {
        console["warn"]("Unable to enumerate media devices: " + _0x250f31), _0x166c6e();
      }
    }, 0);
  }
  function _0x22ac38(_0x41ba2e, _0x3d17eb, _0x31943f) {
    var _0x2f0259 = _0x335fc3(_0x3d17eb), _0x5e98d0 = _0x335fc3(_0x41ba2e), _0x2d98ce = 0;
    try {
      if (_0x31943f === undefined) _0x33a4c3(_0x5e98d0, _0x2f0259); else {
        if (typeof _0x31943f === "string") _0x2d98ce = _0x335fc3(_0x31943f), _0x1664b7(_0x5e98d0, _0x2f0259, _0x2d98ce); else {
          if (typeof _0x31943f === "number") _0x58d593(_0x5e98d0, _0x2f0259, _0x31943f); else throw "" + _0x31943f + " is does not have a type which is supported by SendMessage.";
        }
      }
    } finally {
      _0x3426bf(_0x2d98ce), _0x3426bf(_0x5e98d0), _0x3426bf(_0x2f0259);
    }
  }
  _0x3d01d3["SendMessage"] = _0x22ac38;
  var _0x375724 = {}, _0x148a03;
  for (_0x148a03 in _0x3d01d3) {
    _0x3d01d3["hasOwnProperty"](_0x148a03) && (_0x375724[_0x148a03] = _0x3d01d3[_0x148a03]);
  }
  var _0xa0e817 = [], _0x49477b = "./this.program", _0x259311 = function (_0xf4089c, _0x375d9d) {
    throw _0x375d9d;
  }, _0x40ddce = ![], _0x3a9e74 = ![], _0x2d4503 = ![], _0x42d9e3 = ![];
  _0x40ddce = typeof window === "object", _0x3a9e74 = typeof importScripts === "function", _0x2d4503 = typeof process === "object" && typeof process["versions"] === "object" && typeof process["versions"]["node"] === "string", _0x42d9e3 = !_0x40ddce && !_0x2d4503 && !_0x3a9e74;
  var _0x556e0f = "";
  function _0x48e2e4(_0x49f5a1) {
    if (_0x3d01d3["locateFile"]) return _0x3d01d3["locateFile"](_0x49f5a1, _0x556e0f);
    return _0x556e0f + _0x49f5a1;
  }
  var _0x4c15fd, _0x265298, _0x4f4c99, _0x4afbf1, _0x128c14, _0x31cdcb;
  if (_0x2d4503) _0x3a9e74 ? _0x556e0f = require("path")["dirname"](_0x556e0f) + "/" : _0x556e0f = __dirname + "/", _0x4c15fd = function _0x33f657(_0x32eb80, _0x38eddf) {
    if (!_0x128c14) _0x128c14 = require("fs");
    if (!_0x31cdcb) _0x31cdcb = require("path");
    return _0x32eb80 = _0x31cdcb["normalize"](_0x32eb80), _0x128c14["readFileSync"](_0x32eb80, _0x38eddf ? null : "utf8");
  }, _0x4f4c99 = function _0x2dee93(_0x3d1f2b) {
    var _0x2411cf = _0x4c15fd(_0x3d1f2b, !![]);
    return !_0x2411cf["buffer"] && (_0x2411cf = new Uint8Array(_0x2411cf)), _0x1e763e(_0x2411cf["buffer"]), _0x2411cf;
  }, process["argv"]["length"] > 1 && (_0x49477b = process["argv"][1]["replace"](/\\/g, "/")), _0xa0e817 = process["argv"]["slice"](2), typeof module !== "undefined" && (module["exports"] = _0x3d01d3), process["on"]("uncaughtException", function (_0x24a050) {
    if (!(_0x24a050 instanceof _0x561aff)) throw _0x24a050;
  }), process["on"]("unhandledRejection", _0x4c406f), _0x259311 = function (_0x4891e5) {
    process["exit"](_0x4891e5);
  }, _0x3d01d3["inspect"] = function () {
    return "[Emscripten Module object]";
  }; else {
    if (_0x42d9e3) {
      typeof read != "undefined" && (_0x4c15fd = function _0x38e151(_0x46303f) {
        return read(_0x46303f);
      });
      _0x4f4c99 = function _0x42dbbe(_0x5dfe1d) {
        var _0x2e50d3;
        if (typeof readbuffer === "function") return new Uint8Array(readbuffer(_0x5dfe1d));
        return _0x2e50d3 = read(_0x5dfe1d, "binary"), _0x1e763e(typeof _0x2e50d3 === "object"), _0x2e50d3;
      };
      if (typeof scriptArgs != "undefined") _0xa0e817 = scriptArgs; else typeof arguments != "undefined" && (_0xa0e817 = arguments);
      typeof quit === "function" && (_0x259311 = function (_0x2165cc) {
        quit(_0x2165cc);
      });
      if (typeof print !== "undefined") {
        if (typeof console === "undefined") console = {};
        console["log"] = print, console["warn"] = console["error"] = typeof printErr !== "undefined" ? printErr : print;
      }
    } else {
      if (_0x40ddce || _0x3a9e74) {
        if (_0x3a9e74) _0x556e0f = "https://gamea.azgame.io/city-brawl/"; else typeof document !== "undefined" && document["currentScript"] && (_0x556e0f = document["currentScript"]["src"]);
        _0x556e0f["indexOf"]("blob:") !== 0 ? _0x556e0f = _0x556e0f["substr"](0, _0x556e0f["lastIndexOf"]("/") + 1) : _0x556e0f = "";
        {
          _0x4c15fd = function (_0x54a9b7) {
            var _0x4737c9 = new XMLHttpRequest;
            return _0x4737c9["open"]("GET", _0x54a9b7, ![]), _0x4737c9["send"](null), _0x4737c9["responseText"];
          }, _0x3a9e74 && (_0x4f4c99 = function (_0x1e5aed) {
            var _0x2394cf = new XMLHttpRequest;
            return _0x2394cf["open"]("GET", _0x1e5aed, ![]), _0x2394cf["responseType"] = "arraybuffer", _0x2394cf["send"](null), new Uint8Array(_0x2394cf["response"]);
          }), _0x265298 = function (_0x2545df, _0x530911, _0x15c854) {
            var _0x5802bc = new XMLHttpRequest;
            _0x5802bc["open"]("GET", _0x2545df, !![]), _0x5802bc["responseType"] = "arraybuffer", _0x5802bc["onload"] = function () {
              if (_0x5802bc["status"] == 200 || _0x5802bc["status"] == 0 && _0x5802bc["response"]) {
                _0x530911(_0x5802bc["response"]);
                return;
              }
              _0x15c854();
            }, _0x5802bc["onerror"] = _0x15c854, _0x5802bc["send"](null);
          };
        }
        _0x4afbf1 = function (_0x201f4d) {
          document["title"] = _0x201f4d;
        };
      } else {}
    }
  }
  var _0x507ddf = _0x3d01d3["print"] || console["log"]["bind"](console), _0x366b43 = _0x3d01d3["printErr"] || console["warn"]["bind"](console);
  for (_0x148a03 in _0x375724) {
    _0x375724["hasOwnProperty"](_0x148a03) && (_0x3d01d3[_0x148a03] = _0x375724[_0x148a03]);
  }
  _0x375724 = null;
  if (_0x3d01d3["arguments"]) _0xa0e817 = _0x3d01d3["arguments"];
  if (_0x3d01d3["thisProgram"]) _0x49477b = _0x3d01d3["thisProgram"];
  if (_0x3d01d3["quit"]) _0x259311 = _0x3d01d3["quit"];
  var _0x2b293c = 16;
  function _0x3db561(_0x5c4339, _0x3ea161) {
    if (!_0x3ea161) _0x3ea161 = _0x2b293c;
    return Math["ceil"](_0x5c4339 / _0x3ea161) * _0x3ea161;
  }
  function _0x2b847b(_0x343f2c) {
    if (!_0x2b847b["shown"]) _0x2b847b["shown"] = {};
    !_0x2b847b["shown"][_0x343f2c] && (_0x2b847b["shown"][_0x343f2c] = 1, _0x366b43(_0x343f2c));
  }
  var _0x869ba5 = 0, _0x172fe6 = function (_0x5f5313) {
    _0x869ba5 = _0x5f5313;
  }, _0x6762fc = function () {
    return _0x869ba5;
  }, _0x55ffcd;
  if (_0x3d01d3["wasmBinary"]) _0x55ffcd = _0x3d01d3["wasmBinary"];
  var _0x5837f7 = _0x3d01d3["noExitRuntime"] || !![];
  typeof WebAssembly !== "object" && _0x4c406f("no native wasm support detected");
  var _0x2f0d89, _0x259747 = ![], _0x474a84;
  function _0x1e763e(_0x213737, _0x426857) {
    !_0x213737 && _0x4c406f("Assertion failed: " + _0x426857);
  }
  function _0x545328(_0x3f32eb) {
    var _0x42eaff = _0x3d01d3["_" + _0x3f32eb];
    return _0x1e763e(_0x42eaff, "Cannot call unknown function " + _0x3f32eb + ", make sure it is exported"), _0x42eaff;
  }
  function _0x430a53(_0x5ca4e4, _0x2e6c20, _0x43fbaa, _0x39daec, _0x1f8718) {
    var _0x399661 = {string: function (_0x4ec60d) {
      var _0x92fb93 = 0;
      if (_0x4ec60d !== null && _0x4ec60d !== undefined && _0x4ec60d !== 0) {
        var _0x253eb5 = (_0x4ec60d["length"] << 2) + 1;
        _0x92fb93 = _0x2c26ef(_0x253eb5), _0xf36afc(_0x4ec60d, _0x92fb93, _0x253eb5);
      }
      return _0x92fb93;
    }, array: function (_0x51e78a) {
      var _0x45a583 = _0x2c26ef(_0x51e78a["length"]);
      return _0x9c939b(_0x51e78a, _0x45a583), _0x45a583;
    }};
    function _0x57b6a4(_0x2d9f41) {
      if (_0x2e6c20 === "string") return _0x5a9382(_0x2d9f41);
      if (_0x2e6c20 === "boolean") return Boolean(_0x2d9f41);
      return _0x2d9f41;
    }
    var _0x195a27 = _0x545328(_0x5ca4e4), _0x41e2b4 = [], _0x391691 = 0;
    if (_0x39daec) for (var _0x3274fd = 0; _0x3274fd < _0x39daec["length"]; _0x3274fd++) {
      var _0x325e86 = _0x399661[_0x43fbaa[_0x3274fd]];
      if (_0x325e86) {
        if (_0x391691 === 0) _0x391691 = _0x217682();
        _0x41e2b4[_0x3274fd] = _0x325e86(_0x39daec[_0x3274fd]);
      } else _0x41e2b4[_0x3274fd] = _0x39daec[_0x3274fd];
    }
    var _0x36d0f9 = _0x195a27["apply"](null, _0x41e2b4);
    _0x36d0f9 = _0x57b6a4(_0x36d0f9);
    if (_0x391691 !== 0) _0x994ba8(_0x391691);
    return _0x36d0f9;
  }
  function _0x253049(_0x30106a, _0xe537ad, _0x55f3a5, _0x4eab2c) {
    _0x55f3a5 = _0x55f3a5 || [];
    var _0x4c5092 = _0x55f3a5["every"](function (_0x1d74fb) {
      return _0x1d74fb === "number";
    }), _0x3b5e5e = _0xe537ad !== "string";
    if (_0x3b5e5e && _0x4c5092 && !_0x4eab2c) return _0x545328(_0x30106a);
    return function () {
      return _0x430a53(_0x30106a, _0xe537ad, _0x55f3a5, arguments, _0x4eab2c);
    };
  }
  var _0x5a7098 = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
  function _0x2c9ef7(_0x3c620e, _0x4582bd, _0xca9046) {
    var _0x16f3b4 = _0x4582bd + _0xca9046, _0x47753c = _0x4582bd;
    while (_0x3c620e[_0x47753c] && !(_0x47753c >= _0x16f3b4)) ++_0x47753c;
    if (_0x47753c - _0x4582bd > 16 && _0x3c620e["subarray"] && _0x5a7098) return _0x5a7098["decode"](_0x3c620e["subarray"](_0x4582bd, _0x47753c)); else {
      var _0x33da7b = "";
      while (_0x4582bd < _0x47753c) {
        var _0x1c7afa = _0x3c620e[_0x4582bd++];
        if (!(_0x1c7afa & 128)) {
          _0x33da7b += String["fromCharCode"](_0x1c7afa);
          continue;
        }
        var _0x3c41ff = _0x3c620e[_0x4582bd++] & 63;
        if ((_0x1c7afa & 224) == 192) {
          _0x33da7b += String["fromCharCode"]((_0x1c7afa & 31) << 6 | _0x3c41ff);
          continue;
        }
        var _0x2f235c = _0x3c620e[_0x4582bd++] & 63;
        (_0x1c7afa & 240) == 224 ? _0x1c7afa = (_0x1c7afa & 15) << 12 | _0x3c41ff << 6 | _0x2f235c : _0x1c7afa = (_0x1c7afa & 7) << 18 | _0x3c41ff << 12 | _0x2f235c << 6 | _0x3c620e[_0x4582bd++] & 63;
        if (_0x1c7afa < 65536) _0x33da7b += String["fromCharCode"](_0x1c7afa); else {
          var _0x303a69 = _0x1c7afa - 65536;
          _0x33da7b += String["fromCharCode"](55296 | _0x303a69 >> 10, 56320 | _0x303a69 & 1023);
        }
      }
    }
    return _0x33da7b;
  }
  function _0x5a9382(_0x3dd655, _0x575309) {
    return _0x3dd655 ? _0x2c9ef7(_0x1c2f04, _0x3dd655, _0x575309) : "";
  }
  function _0x222a25(_0x226247, _0x20ec2a, _0x9b951a, _0x5c05b0) {
    if (!(_0x5c05b0 > 0)) return 0;
    var _0x3a57ae = _0x9b951a, _0x423d2e = _0x9b951a + _0x5c05b0 - 1;
    for (var _0x537f44 = 0; _0x537f44 < _0x226247["length"]; ++_0x537f44) {
      var _0x581ee8 = _0x226247["charCodeAt"](_0x537f44);
      if (_0x581ee8 >= 55296 && _0x581ee8 <= 57343) {
        var _0x4eed9b = _0x226247["charCodeAt"](++_0x537f44);
        _0x581ee8 = 65536 + ((_0x581ee8 & 1023) << 10) | _0x4eed9b & 1023;
      }
      if (_0x581ee8 <= 127) {
        if (_0x9b951a >= _0x423d2e) break;
        _0x20ec2a[_0x9b951a++] = _0x581ee8;
      } else {
        if (_0x581ee8 <= 2047) {
          if (_0x9b951a + 1 >= _0x423d2e) break;
          _0x20ec2a[_0x9b951a++] = 192 | _0x581ee8 >> 6, _0x20ec2a[_0x9b951a++] = 128 | _0x581ee8 & 63;
        } else {
          if (_0x581ee8 <= 65535) {
            if (_0x9b951a + 2 >= _0x423d2e) break;
            _0x20ec2a[_0x9b951a++] = 224 | _0x581ee8 >> 12, _0x20ec2a[_0x9b951a++] = 128 | _0x581ee8 >> 6 & 63, _0x20ec2a[_0x9b951a++] = 128 | _0x581ee8 & 63;
          } else {
            if (_0x9b951a + 3 >= _0x423d2e) break;
            _0x20ec2a[_0x9b951a++] = 240 | _0x581ee8 >> 18, _0x20ec2a[_0x9b951a++] = 128 | _0x581ee8 >> 12 & 63, _0x20ec2a[_0x9b951a++] = 128 | _0x581ee8 >> 6 & 63, _0x20ec2a[_0x9b951a++] = 128 | _0x581ee8 & 63;
          }
        }
      }
    }
    return _0x20ec2a[_0x9b951a] = 0, _0x9b951a - _0x3a57ae;
  }
  function _0xf36afc(_0x197a65, _0x25bbc2, _0x9209bf) {
    return _0x222a25(_0x197a65, _0x1c2f04, _0x25bbc2, _0x9209bf);
  }
  function _0x2c1249(_0x3ab62f) {
    var _0x4616ba = 0;
    for (var _0xc3c02c = 0; _0xc3c02c < _0x3ab62f["length"]; ++_0xc3c02c) {
      var _0x49430c = _0x3ab62f["charCodeAt"](_0xc3c02c);
      if (_0x49430c >= 55296 && _0x49430c <= 57343) _0x49430c = 65536 + ((_0x49430c & 1023) << 10) | _0x3ab62f["charCodeAt"](++_0xc3c02c) & 1023;
      if (_0x49430c <= 127) ++_0x4616ba; else {
        if (_0x49430c <= 2047) _0x4616ba += 2; else {
          if (_0x49430c <= 65535) _0x4616ba += 3; else _0x4616ba += 4;
        }
      }
    }
    return _0x4616ba;
  }
  function _0x29cbbd(_0x47f8da) {
    var _0x5cb4e5 = _0x2c1249(_0x47f8da) + 1, _0x2ff2fb = _0x499029(_0x5cb4e5);
    if (_0x2ff2fb) _0x222a25(_0x47f8da, _0x2c8e41, _0x2ff2fb, _0x5cb4e5);
    return _0x2ff2fb;
  }
  function _0x158d23(_0x5e738d) {
    var _0x352de8 = _0x2c1249(_0x5e738d) + 1, _0x5541a4 = _0x2c26ef(_0x352de8);
    return _0x222a25(_0x5e738d, _0x2c8e41, _0x5541a4, _0x352de8), _0x5541a4;
  }
  function _0x9c939b(_0x143f43, _0x35cf83) {
    _0x2c8e41["set"](_0x143f43, _0x35cf83);
  }
  function _0x2a9374(_0x4205a2, _0x41084e, _0x16594a) {
    for (var _0x331363 = 0; _0x331363 < _0x4205a2["length"]; ++_0x331363) {
      _0x2c8e41[_0x41084e++ >> 0] = _0x4205a2["charCodeAt"](_0x331363);
    }
    if (!_0x16594a) _0x2c8e41[_0x41084e >> 0] = 0;
  }
  function _0x1002ef(_0x5bd5, _0x386167) {
    return _0x5bd5 % _0x386167 > 0 && (_0x5bd5 += _0x386167 - _0x5bd5 % _0x386167), _0x5bd5;
  }
  var _0x5ab467, _0x2c8e41, _0x1c2f04, _0x17c3b3, _0x2609db, _0x5f4233, _0x9bfde5, _0x55bdf6, _0x14c82b;
  function _0x32e1e2(_0xfece) {
    _0x5ab467 = _0xfece, _0x3d01d3["HEAP8"] = _0x2c8e41 = new Int8Array(_0xfece), _0x3d01d3["HEAP16"] = _0x17c3b3 = new Int16Array(_0xfece), _0x3d01d3["HEAP32"] = _0x5f4233 = new Int32Array(_0xfece), _0x3d01d3["HEAPU8"] = _0x1c2f04 = new Uint8Array(_0xfece), _0x3d01d3["HEAPU16"] = _0x2609db = new Uint16Array(_0xfece), _0x3d01d3["HEAPU32"] = _0x9bfde5 = new Uint32Array(_0xfece), _0x3d01d3["HEAPF32"] = _0x55bdf6 = new Float32Array(_0xfece), _0x3d01d3["HEAPF64"] = _0x14c82b = new Float64Array(_0xfece);
  }
  var _0x4a9a6b = _0x3d01d3["INITIAL_MEMORY"] || 33554432, _0x588bca, _0xa9be0a = [], _0xb2ed27 = [], _0x39f8da = [], _0x52be0f = [], _0x21bdc8 = [], _0x216a38 = ![], _0x5f3876 = ![];
  function _0xf9ddb2() {
    if (_0x3d01d3["preRun"]) {
      if (typeof _0x3d01d3["preRun"] == "function") _0x3d01d3["preRun"] = [_0x3d01d3["preRun"]];
      while (_0x3d01d3["preRun"]["length"]) {
        _0x1ed647(_0x3d01d3["preRun"]["shift"]());
      }
    }
    _0x6fff(_0xa9be0a);
  }
  function _0x2872b7() {
    _0x216a38 = !![];
    if (!_0x3d01d3["noFSInit"] && !_0x37953b["init"]["initialized"]) _0x37953b["init"]();
    _0x538541["init"](), _0x5854a5["root"] = _0x37953b["mount"](_0x5854a5, {}, null), _0x2dfe77["root"] = _0x37953b["mount"](_0x2dfe77, {}, null), _0x6fff(_0xb2ed27);
  }
  function _0x4b0fb7() {
    _0x37953b["ignorePermissions"] = ![], _0x6fff(_0x39f8da);
  }
  function _0x228af5() {
    _0x5f3876 = !![];
  }
  function _0x31dd56() {
    if (_0x3d01d3["postRun"]) {
      if (typeof _0x3d01d3["postRun"] == "function") _0x3d01d3["postRun"] = [_0x3d01d3["postRun"]];
      while (_0x3d01d3["postRun"]["length"]) {
        _0x1b8660(_0x3d01d3["postRun"]["shift"]());
      }
    }
    _0x6fff(_0x21bdc8);
  }
  function _0x1ed647(_0x2dcefe) {
    _0xa9be0a["unshift"](_0x2dcefe);
  }
  function _0x1c2dfe(_0x106d3b) {
    _0xb2ed27["unshift"](_0x106d3b);
  }
  function _0x1b8660(_0x30ef0c) {
    _0x21bdc8["unshift"](_0x30ef0c);
  }
  var _0x3bea71 = 0, _0x38b6ef = null, _0x53c8b4 = null;
  function _0x3bde32(_0x2dc32d) {
    return _0x2dc32d;
  }
  function _0x3e50c2(_0x1b1f16) {
    _0x3bea71++, _0x3d01d3["monitorRunDependencies"] && _0x3d01d3["monitorRunDependencies"](_0x3bea71);
  }
  function _0x47f78c(_0x2dabad) {
    _0x3bea71--;
    _0x3d01d3["monitorRunDependencies"] && _0x3d01d3["monitorRunDependencies"](_0x3bea71);
    if (_0x3bea71 == 0) {
      _0x38b6ef !== null && (clearInterval(_0x38b6ef), _0x38b6ef = null);
      if (_0x53c8b4) {
        var _0x2eea6b = _0x53c8b4;
        _0x53c8b4 = null, _0x2eea6b();
      }
    }
  }
  _0x3d01d3["preloadedImages"] = {}, _0x3d01d3["preloadedAudios"] = {};
  function _0x4c406f(_0x5599a5) {
    _0x3d01d3["onAbort"] && _0x3d01d3["onAbort"](_0x5599a5);
    _0x5599a5 += "", _0x366b43(_0x5599a5), _0x259747 = !![], _0x474a84 = 1, _0x5599a5 = "abort(" + _0x5599a5 + "). Build with -s ASSERTIONS=1 for more info.";
    var _0x555be9 = new WebAssembly["RuntimeError"](_0x5599a5);
    throw _0x555be9;
  }
  var _0x17adad = "data:application/octet-stream;base64,";
  function _0x2417e2(_0x245a72) {
    return _0x245a72["startsWith"](_0x17adad);
  }
  function _0x5df6df(_0x176e13) {
    return _0x176e13["startsWith"]("file://");
  }
  var _0x449464 = "build.wasm";
  !_0x2417e2(_0x449464) && (_0x449464 = _0x48e2e4(_0x449464));
  function _0x28031b(_0x385375) {
    try {
      if (_0x385375 == _0x449464 && _0x55ffcd) return new Uint8Array(_0x55ffcd);
      if (_0x4f4c99) return _0x4f4c99(_0x385375); else throw "both async and sync fetching of the wasm failed";
    } catch (_0x22feab) {
      _0x4c406f(_0x22feab);
    }
  }
  function _0x1335b4() {
    if (!_0x55ffcd && (_0x40ddce || _0x3a9e74)) {
      if (typeof fetch === "function" && !_0x5df6df(_0x449464)) return fetch(_0x449464, {credentials: "same-origin"})["then"](function (_0x2b96b4) {
        if (!_0x2b96b4["ok"]) throw "failed to load wasm binary file at '" + _0x449464 + "'";
        return _0x2b96b4["arrayBuffer"]();
      })["catch"](function () {
        return _0x28031b(_0x449464);
      }); else {
        if (_0x265298) return new Promise(function (_0x52c8a4, _0x232ac0) {
          _0x265298(_0x449464, function (_0xa0aceb) {
            _0x52c8a4(new Uint8Array(_0xa0aceb));
          }, _0x232ac0);
        });
      }
    }
    return Promise["resolve"]()["then"](function () {
      return _0x28031b(_0x449464);
    });
  }
  function _0x5941b4() {
    var _0x58ca0b = {a: _0x5b4b5a};
    function _0x24664e(_0x17443f, _0x90ff1a) {
      var _0x164e16 = _0x17443f["exports"];
      _0x3d01d3["asm"] = _0x164e16, _0x2f0d89 = _0x3d01d3["asm"]["Fj"], _0x32e1e2(_0x2f0d89["buffer"]), _0x588bca = _0x3d01d3["asm"]["dk"], _0x1c2dfe(_0x3d01d3["asm"]["Gj"]), _0x47f78c("wasm-instantiate");
    }
    _0x3e50c2("wasm-instantiate");
    function _0x13a1cd(_0x389cfe) {
      _0x24664e(_0x389cfe["instance"]);
    }
    function _0x28c8ae(_0x2d4441) {
      return _0x1335b4()["then"](function (_0x46cf28) {
        var _0x40171c = WebAssembly["instantiate"](_0x46cf28, _0x58ca0b);
        return _0x40171c;
      })["then"](_0x2d4441, function (_0x57c97b) {
        _0x366b43("failed to asynchronously prepare wasm: " + _0x57c97b), _0x4c406f(_0x57c97b);
      });
    }
    function _0x37cd23() {
      return !_0x55ffcd && typeof WebAssembly["instantiateStreaming"] === "function" && !_0x2417e2(_0x449464) && !_0x5df6df(_0x449464) && typeof fetch === "function" ? fetch(_0x449464, {credentials: "same-origin"})["then"](function (_0x5e9372) {
        var _0xcac3f5 = WebAssembly["instantiateStreaming"](_0x5e9372, _0x58ca0b);
        return _0xcac3f5["then"](_0x13a1cd, function (_0x390fc1) {
          return _0x366b43("wasm streaming compile failed: " + _0x390fc1), _0x366b43("falling back to ArrayBuffer instantiation"), _0x28c8ae(_0x13a1cd);
        });
      }) : _0x28c8ae(_0x13a1cd);
    }
    if (_0x3d01d3["instantiateWasm"]) try {
      var _0x131c71 = _0x3d01d3["instantiateWasm"](_0x58ca0b, _0x24664e);
      return _0x131c71;
    } catch (_0x469e2d) {
      return _0x366b43("Module.instantiateWasm callback failed with error: " + _0x469e2d), ![];
    }
    return _0x37cd23(), {};
  }
  var _0x2eda49, _0x437765, _0xaba1f7 = {3726248: function () {
    return _0x3d01d3["webglContextAttributes"]["premultipliedAlpha"];
  }, 3726309: function () {
    return _0x3d01d3["webglContextAttributes"]["preserveDrawingBuffer"];
  }, 3726373: function () {
    return _0x3d01d3["webglContextAttributes"]["powerPreference"];
  }};
  function _0x6fff(_0x42acb1) {
    while (_0x42acb1["length"] > 0) {
      var _0x4b81da = _0x42acb1["shift"]();
      if (typeof _0x4b81da == "function") {
        _0x4b81da(_0x3d01d3);
        continue;
      }
      var _0x15180a = _0x4b81da["func"];
      typeof _0x15180a === "number" ? _0x4b81da["arg"] === undefined ? function () {
        _0x418e27["call"](null, _0x15180a);
      }() : function (_0x4ceaae) {
        _0x29b024["apply"](null, [_0x15180a, _0x4ceaae]);
      }(_0x4b81da["arg"]) : _0x15180a(_0x4b81da["arg"] === undefined ? null : _0x4b81da["arg"]);
    }
  }
  function _0x44d746(_0x2cd097) {
    return _0x2cd097;
  }
  function _0x4377d9(_0x5e2580) {
    var _0x5b6992 = /\b_Z[\w\d_]+/g;
    return _0x5e2580["replace"](_0x5b6992, function (_0x19002d) {
      var _0x23857a = _0x44d746(_0x19002d);
      return _0x19002d === _0x23857a ? _0x19002d : _0x23857a + " [" + _0x19002d + "]";
    });
  }
  function _0x30e49d(_0x557173, _0x564c26, _0x1c4395) {
    var _0x295124 = _0x3d01d3["dynCall_" + _0x557173];
    return _0x1c4395 && _0x1c4395["length"] ? _0x295124["apply"](null, [_0x564c26]["concat"](_0x1c4395)) : _0x295124["call"](null, _0x564c26);
  }
  function _0x3b8595(_0x550139, _0x23fbb9, _0x3bff70) {
    return _0x30e49d(_0x550139, _0x23fbb9, _0x3bff70);
  }
  function _0x5b7e0a() {
    var _0x339cc6 = new Error;
    if (!_0x339cc6["stack"]) {
      try {
        throw new Error;
      } catch (_0x5bfe12) {
        _0x339cc6 = _0x5bfe12;
      }
      if (!_0x339cc6["stack"]) return "(no stack trace available)";
    }
    return _0x339cc6["stack"]["toString"]();
  }
  var _0x15c330 = 0;
  function _0x41f9cc() {
    return _0x5837f7 || _0x15c330 > 0;
  }
  function _0x39ad7b() {
    var _0x18e2d8 = _0x5b7e0a();
    if (_0x3d01d3["extraStackTrace"]) _0x18e2d8 += "\n" + _0x3d01d3["extraStackTrace"]();
    return _0x4377d9(_0x18e2d8);
  }
  function _0xdab72f(_0x59afc6, _0x334a22, _0x2eac0f, _0x35dca8, _0x56819e) {
    var _0x5f185d = _0x5a9382(_0x59afc6), _0x14a436 = _0x5a9382(_0x334a22), _0x5e56ed = _0x5a9382(_0x2eac0f), _0x112095 = _0x5a9382(_0x35dca8), _0x6d7c68 = _0x5a9382(_0x56819e);
    try {
      firebase["firestore"]()["collection"](_0x5f185d)["add"](JSON["parse"](_0x14a436))["then"](function (_0x2303ff) {
        window["unityInstance"]["SendMessage"](_0x5e56ed, _0x112095, "Success: document added in collection " + _0x5f185d);
      })["catch"](function (_0x3f4114) {
        window["unityInstance"]["SendMessage"](_0x5e56ed, _0x6d7c68, JSON["stringify"](_0x3f4114, Object["getOwnPropertyNames"](_0x3f4114)));
      });
    } catch (_0x2a393d) {
      window["unityInstance"]["SendMessage"](_0x5e56ed, _0x6d7c68, JSON["stringify"](_0x2a393d, Object["getOwnPropertyNames"](_0x2a393d)));
    }
  }
  function _0x33c2da(_0x29f038, _0x304bdf, _0x5ad27d, _0x5ea709, _0x210055, _0x23b2f7, _0x23d7c6) {
    var _0x5f282d = _0x5a9382(_0x29f038), _0x40719e = _0x5a9382(_0x304bdf), _0x11d9c0 = _0x5a9382(_0x5ad27d), _0x2c1819 = _0x5a9382(_0x5ea709), _0x4af5b1 = _0x5a9382(_0x210055), _0x2eb59c = _0x5a9382(_0x23b2f7), _0x134e75 = _0x5a9382(_0x23d7c6);
    try {
      var _0x5ea709 = {};
      _0x5ea709[_0x11d9c0] = firebase["firestore"]["FieldValue"]["arrayUnion"](JSON["parse"](_0x2c1819)), firebase["firestore"]()["collection"](_0x5f282d)["doc"](_0x40719e)["update"](_0x5ea709)["then"](function () {
        window["unityInstance"]["SendMessage"](_0x4af5b1, _0x2eb59c, "Success: element " + _0x2c1819 + " was added in " + _0x11d9c0);
      })["catch"](function (_0xa94f46) {
        window["unityInstance"]["SendMessage"](_0x4af5b1, _0x134e75, JSON["stringify"](_0xa94f46, Object["getOwnPropertyNames"](_0xa94f46)));
      });
    } catch (_0x386d69) {
      window["unityInstance"]["SendMessage"](_0x4af5b1, _0x134e75, JSON["stringify"](_0x386d69, Object["getOwnPropertyNames"](_0x386d69)));
    }
  }
  function _0x53c5df(_0x4296d7) {
    try {
      window["CrazyGames"]["SDK"]["user"]["addScore"](_0x4296d7);
    } catch (_0x5aa978) {
      window["UnitySDK"]["logError"]("Error while calling addScore:", _0x5aa978);
    }
  }
  function _0x17861e(_0x536922, _0x58e713) {
    try {
      window["CrazyGames"]["SDK"]["analytics"]["trackOrder"](window["unityStringify"](_0x536922), JSON["parse"](window["unityStringify"](_0x58e713)));
    } catch (_0x449ec3) {
      window["UnitySDK"]["logError"]("Error while calling trackOrder:", _0x449ec3);
    }
  }
  function _0x27d527(_0x504e5e) {
    const _0x3c75c8 = document["createElement"]("textarea");
    _0x3c75c8["value"] = window["unityStringify"](_0x504e5e), document["body"]["appendChild"](_0x3c75c8), _0x3c75c8["select"](), _0x3c75c8["setSelectionRange"](0, 99999), document["execCommand"]("copy"), document["body"]["removeChild"](_0x3c75c8);
  }
  function _0x49fb4e(_0x2fa6ac, _0x333dfe, _0x1010d1, _0x2fa366, _0x54626f) {
    var _0x57d36e = _0x5a9382(_0x2fa6ac), _0x16e9af = _0x5a9382(_0x333dfe), _0x1c8a47 = _0x5a9382(_0x1010d1), _0x1df30c = _0x5a9382(_0x2fa366), _0x4f1b40 = _0x5a9382(_0x54626f);
    try {
      firebase["auth"]()["createUserWithEmailAndPassword"](_0x57d36e, _0x16e9af)["then"](function (_0x12f963) {
        window["unityInstance"]["SendMessage"](_0x1c8a47, _0x1df30c, "Success: signed up for " + _0x57d36e);
      })["catch"](function (_0x43a415) {
        window["unityInstance"]["SendMessage"](_0x1c8a47, _0x4f1b40, JSON["stringify"](_0x43a415, Object["getOwnPropertyNames"](_0x43a415)));
      });
    } catch (_0x54bcca) {
      window["unityInstance"]["SendMessage"](_0x1c8a47, _0x4f1b40, JSON["stringify"](_0x54bcca, Object["getOwnPropertyNames"](_0x54bcca)));
    }
  }
  function _0xe11fc1() {
    try {
      window["CrazyGames"]["SDK"]["data"]["clear"]();
    } catch (_0x348b78) {
      window["UnitySDK"]["logError"]("Error while calling clear:", _0x348b78);
    }
  }
  function _0x2949c8(_0xc21564) {
    var _0x4388e8 = null;
    try {
      _0x4388e8 = window["CrazyGames"]["SDK"]["data"]["getItem"](window["unityStringify"](_0xc21564));
    } catch (_0x4a1eb3) {
      window["UnitySDK"]["logError"]("Error while calling getItem:", _0x4a1eb3);
    }
    var _0x2b3af8 = _0x2c1249(_0x4388e8 + "") + 1, _0x28f5a5 = _0x499029(_0x2b3af8);
    return _0xf36afc(_0x4388e8, _0x28f5a5, _0x2b3af8), _0x28f5a5;
  }
  function _0x28e610(_0x49c7fa) {
    var _0xc5890c = null;
    try {
      _0xc5890c = window["CrazyGames"]["SDK"]["data"]["getItem"](window["unityStringify"](_0x49c7fa));
    } catch (_0x254c6a) {
      window["UnitySDK"]["logError"]("Error while calling getItem:", _0x254c6a);
    }
    return _0xc5890c !== null;
  }
  function _0x1aad12(_0x188c73) {
    try {
      window["CrazyGames"]["SDK"]["data"]["removeItem"](window["unityStringify"](_0x188c73));
    } catch (_0x409611) {
      window["UnitySDK"]["logError"]("Error while calling removeItem:", _0x409611);
    }
  }
  function _0x5f4472(_0xc34f84, _0x470f18) {
    try {
      window["CrazyGames"]["SDK"]["data"]["setItem"](window["unityStringify"](_0xc34f84), window["unityStringify"](_0x470f18));
    } catch (_0x28321a) {
      window["UnitySDK"]["logError"]("Error while calling setItem:", _0x28321a);
    }
  }
  function _0x1ca42f(_0x530237, _0x3bcae0, _0xa6537e, _0x4b1306, _0x23256d) {
    var _0x422ba0 = _0x5a9382(_0x530237), _0x120034 = _0x5a9382(_0x3bcae0), _0x1bc774 = _0x5a9382(_0xa6537e), _0x5199fb = _0x5a9382(_0x4b1306), _0x96a800 = _0x5a9382(_0x23256d);
    try {
      firebase["firestore"]()["collection"](_0x422ba0)["doc"](_0x120034)["delete"]()["then"](function () {
        window["unityInstance"]["SendMessage"](_0x1bc774, _0x5199fb, "Success: document " + _0x120034 + " was deleted");
      })["catch"](function (_0x241a6f) {
        window["unityInstance"]["SendMessage"](_0x1bc774, _0x96a800, JSON["stringify"](_0x241a6f, Object["getOwnPropertyNames"](_0x241a6f)));
      });
    } catch (_0x5dc938) {
      window["unityInstance"]["SendMessage"](_0x1bc774, _0x96a800, JSON["stringify"](_0x5dc938, Object["getOwnPropertyNames"](_0x5dc938)));
    }
  }
  function _0x159292(_0x4d310a, _0x51c089, _0x18b347, _0x12154e, _0x1a3ab6, _0x3afab7) {
    var _0x59112c = _0x5a9382(_0x4d310a), _0x4be6ab = _0x5a9382(_0x51c089), _0x352273 = _0x5a9382(_0x18b347), _0x13f66a = _0x5a9382(_0x12154e), _0x2a1371 = _0x5a9382(_0x1a3ab6), _0x54a6b7 = _0x5a9382(_0x3afab7);
    try {
      var _0x1ffcab = {};
      _0x1ffcab[_0x352273] = firebase["firestore"]["FieldValue"]["delete"](), firebase["firestore"]()["collection"](_0x59112c)["doc"](_0x4be6ab)["update"](_0x1ffcab)["then"](function () {
        window["unityInstance"]["SendMessage"](_0x13f66a, _0x2a1371, "Success: field " + _0x352273 + " was deleted");
      })["catch"](function (_0x3ac678) {
        window["unityInstance"]["SendMessage"](_0x13f66a, _0x54a6b7, JSON["stringify"](_0x3ac678, Object["getOwnPropertyNames"](_0x3ac678)));
      });
    } catch (_0x55cd88) {
      window["unityInstance"]["SendMessage"](_0x13f66a, _0x54a6b7, JSON["stringify"](_0x55cd88, Object["getOwnPropertyNames"](_0x55cd88)));
    }
  }
  function _0x1e03f9(_0x56c893, _0x4cf2f4, _0x33f51f, _0xdfaf9c) {
    var _0x296ff4 = _0x5a9382(_0x56c893), _0x194662 = _0x5a9382(_0x4cf2f4), _0x22cf0b = _0x5a9382(_0x33f51f), _0x183327 = _0x5a9382(_0xdfaf9c);
    try {
      firebase["database"]()["ref"](_0x296ff4)["remove"]()["then"](function (_0xfcb192) {
        window["unityInstance"]["SendMessage"](_0x194662, _0x22cf0b, "Success: " + _0x296ff4 + " was deleted");
      });
    } catch (_0x49ea24) {
      window["unityInstance"]["SendMessage"](_0x194662, _0x183327, JSON["stringify"](_0x49ea24, Object["getOwnPropertyNames"](_0x49ea24)));
    }
  }
  function _0x1f67c1(_0x176ad7, _0x52dc63, _0x2a8788, _0x865a1) {
    var _0x203792 = _0x5a9382(_0x176ad7), _0x27c862 = _0x5a9382(_0x52dc63), _0x2f4d8d = _0x5a9382(_0x2a8788), _0x238b7b = _0x5a9382(_0x865a1);
    try {
      firebase["storage"]()["ref"](_0x203792)["getDownloadURL"]()["then"](function (_0x5743eb) {
        var _0x185546 = new XMLHttpRequest;
        _0x185546["responseType"] = "arraybuffer", _0x185546["onload"] = function (_0xfdb772) {
          var _0x3883eb = _0x185546["response"];
          window["unityInstance"]["SendMessage"](_0x27c862, _0x2f4d8d, _0x3ed1e5(_0x3883eb));
        }, _0x185546["open"]("GET", _0x5743eb), _0x185546["send"]();
      })["catch"](function (_0x22ff25) {
        window["unityInstance"]["SendMessage"](_0x27c862, _0x238b7b, JSON["stringify"](_0x22ff25, Object["getOwnPropertyNames"](_0x22ff25)));
      });
    } catch (_0x43fa3f) {
      window["unityInstance"]["SendMessage"](_0x27c862, _0x238b7b, JSON["stringify"](_0x43fa3f, Object["getOwnPropertyNames"](_0x43fa3f)));
    }
    function _0x3ed1e5(_0x213216) {
      var _0xaf63bd = "", _0x4c19d7 = new Uint8Array(_0x213216), _0xfc48c3 = _0x4c19d7["byteLength"];
      for (var _0x508ffb = 0; _0x508ffb < _0xfc48c3; _0x508ffb++) {
        _0xaf63bd += String["fromCharCode"](_0x4c19d7[_0x508ffb]);
      }
      return window["btoa"](_0xaf63bd);
    }
  }
  function _0x4dc999() {
    try {
      window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Getting WeeGoo InGame Ad"), window[preroll["config"]["loaderObjectName"]]["refetchAd"]();
    } catch (_0x4be6e7) {
      console["log"]("No WeeGooAFG implementation found!");
    }
  }
  function _0x19fa2f(_0x1afe11) {
    var _0x41baf5 = {adStarted: function () {
      _0x22ac38("GMSDKAdvertisement", "JSLibCallback_AdStarted");
    }, adFinished: function () {
      _0x22ac38("GMSDKAdvertisement", "JSLibCallback_AdFinished");
    }, adError: function (_0x307eef) {
      _0x22ac38("GMSDKAdvertisement", "JSLibCallback_AdError", JSON["stringify"](_0x307eef));
    }}, _0xf24127 = window["GMSOFT_GMADS_INFO"]["reward"], _0x44dfcb = _0xf24127[Math["floor"](Math["random"]() * _0xf24127["length"])];
    try {
      var _0x1f9bda = document["createElement"]("div");
      _0x1f9bda["id"] = "gm-ad-overlay", _0x1f9bda["style"]["cssText"] = "\n          position: fixed;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          background: rgba(0, 0, 0, 0.9);\n          z-index: 9999;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n        ";
      var _0x195799 = document["createElement"]("div");
      _0x195799["style"]["cssText"] = "\n          position: relative;\n          max-width: 90%;\n          max-height: 80%;\n          background: #000;\n          border-radius: 8px;\n          overflow: hidden;\n        ";
      var _0x58713c = document["createElement"]("video");
      _0x58713c["src"] = _0x44dfcb["image"], _0x58713c["style"]["cssText"] = "\n          width: 100%;\n          height: 100%;\n          display: block;\n        ", _0x58713c["autoplay"] = !![], _0x58713c["muted"] = !![], _0x58713c["preload"] = "auto";
      var _0x4c7431 = document["createElement"]("button");
      _0x4c7431["innerHTML"] = "Skip (5)", _0x4c7431["disabled"] = !![], _0x4c7431["style"]["cssText"] = "\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          background: rgba(0, 0, 0, 0.8);\n          color: white;\n          border: 1px solid #666;\n          border-radius: 6px;\n          padding: 10px 16px;\n          cursor: pointer;\n          font-size: 16px;\n          font-weight: bold;\n          z-index: 10001;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.3);\n        ", _0x4c7431["disabled"] = !![], _0x4c7431["style"]["opacity"] = "0.5";
      var _0x42add2 = document["createElement"]("div");
      _0x42add2["style"]["cssText"] = "\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          width: 100%;\n          height: 6px;\n          background: rgba(255, 255, 255, 0.3);\n          z-index: 10001;\n        ";
      var _0xa114b5 = document["createElement"]("div");
      _0xa114b5["style"]["cssText"] = "\n          height: 100%;\n          width: 0%;\n          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);\n          transition: width 0.1s ease;\n        ";
      var _0x52e6d8 = 5, _0xa806dd = setInterval(function () {
        _0x52e6d8--, _0x52e6d8 > 0 ? _0x4c7431["innerHTML"] = "Skip (" + _0x52e6d8 + ")" : (_0x4c7431["innerHTML"] = "Skip", _0x4c7431["disabled"] = ![], _0x4c7431["style"]["opacity"] = "1", _0x4c7431["style"]["cursor"] = "pointer", clearInterval(_0xa806dd));
      }, 1e3);
      function _0x73c156() {
        _0x1f9bda && _0x1f9bda["parentNode"] && _0x1f9bda["parentNode"]["removeChild"](_0x1f9bda), clearInterval(_0xa806dd), _0x41baf5["adFinished"]();
      }
      function _0x16f641() {
        window["open"](_0x44dfcb["url"], "_blank");
      }
      function _0x15d8e2() {
        if (_0x58713c["duration"] && _0x58713c["currentTime"]) {
          var _0x2c7da0 = _0x58713c["currentTime"] / _0x58713c["duration"] * 100;
          _0xa114b5["style"]["width"] = _0x2c7da0 + "%";
        }
      }
      _0x58713c["addEventListener"]("loadstart", function () {
        _0x41baf5["adStarted"]();
      }), _0x58713c["addEventListener"]("timeupdate", function () {
        _0x15d8e2();
      }), _0x58713c["addEventListener"]("ended", function () {
        _0x73c156();
      }), _0x58713c["addEventListener"]("error", function (_0x3f69f3) {
        var _0x233383 = {message: "Video load error", code: _0x3f69f3["target"]["error"] ? _0x3f69f3["target"]["error"]["code"] : "unknown"};
        _0x41baf5["adError"](_0x233383), _0x73c156();
      }), _0x58713c["addEventListener"]("click", function () {
        _0x16f641();
      }), _0x4c7431["addEventListener"]("click", function () {
        !_0x4c7431["disabled"] && _0x73c156();
      }), _0x58713c["addEventListener"]("contextmenu", function (_0x39534e) {
        _0x39534e["preventDefault"]();
      }), _0x42add2["appendChild"](_0xa114b5), _0x195799["appendChild"](_0x58713c), _0x195799["appendChild"](_0x4c7431), _0x195799["appendChild"](_0x42add2), _0x1f9bda["appendChild"](_0x195799), document["body"]["appendChild"](_0x1f9bda), _0x58713c["play"]()["catch"](function (_0x42e0ff) {
        console["error"]("Video play error:", _0x42e0ff), _0x41baf5["adError"]({message: "Cannot play video", details: _0x42e0ff["message"]}), _0x73c156();
      });
    } catch (_0x22656c) {
      console["error"]("Ad overlay creation error:", _0x22656c), _0x41baf5["adError"]({message: "Failed to create ad overlay", details: _0x22656c["message"]});
    }
  }
  function _0x47e4e0(_0x24bd8f, _0x585270) {
    gmEvent(_0x5a9382(_0x24bd8f), _0x5a9382(_0x585270));
  }
  function _0x5a8e77() {
    const _0x378f50 = "gmsdksigndomain";
    try {
      if (localStorage["hasOwnProperty"](_0x378f50)) {
        let _0x3788bc = localStorage["getItem"](_0x378f50);
        if (_0x3788bc && _0x3788bc["length"] > 10) {
          window["GMSOFT_SIGNED"] = _0x3788bc, console["log"]("Local storage GM_SDK_GetVeryfiedSignature: ", window["GMSOFT_SIGNED"]), _0x22ac38("GmSoft", "OnGetVeryfiedSignature", window["GMSOFT_SIGNED"]);
          return;
        }
      }
    } catch (_0x1269e6) {
      console["error"]("Error getting GM_SDK_GetVeryfiedSignature from local storage: ", _0x1269e6);
    }
    try {
      let _0x544414 = "hn=" + window["location"]["hostname"], _0x1a716b = btoa(_0x544414), _0x1260aa = "https://api.cdnwave.com/sdkdom/keysigned";
      window["GMSOFT_OPTIONS"] && window["GMSOFT_OPTIONS"]["signedurl"] && (_0x1260aa = window["GMSOFT_OPTIONS"]["signedurl"]);
      let _0x42c01f = _0x1260aa + "?params=" + _0x1a716b;
      var _0x51e434 = new XMLHttpRequest;
      let _0xd945ff = "";
      _0x51e434["open"]("GET", _0x42c01f, ![]), _0x51e434["send"](_0xd945ff);
      let _0x12c6a3 = _0x51e434["responseText"];
      if (_0x12c6a3 && atob(_0x12c6a3) === "bangame") {
        document["dispatchEvent"](new CustomEvent("gmsoftbanevent", {detail: "libevent"}));
        return;
      }
      window["GMSOFT_SIGNED"] = _0x12c6a3, localStorage["setItem"](_0x378f50, _0x12c6a3), console["log"]("send request GM_SDK_GetVeryfiedSignature: ", window["GMSOFT_SIGNED"]), _0x22ac38("GmSoft", "OnGetVeryfiedSignature", window["GMSOFT_SIGNED"]);
    } catch (_0x5d5d99) {
      console["error"]("Error fetching GM_SDK_GetVeryfiedSignature: ", _0x5d5d99);
    }
  }
  function _0xc79b24() {
    let _0x5b07ed = document["location"]["hostname"];
    _0x22ac38("GmSoft", "SetUnityHostName", _0x5b07ed), _0x22ac38("GmSoft", "SetSDKType", window["GMSOFT_SDKTYPE"]);
  }
  function _0x5f437d() {
    console["log"]("GM_SDK_StartGame");
    try {
      gmStartGame(function () {
        _0x22ac38("GmSoft", "SetGameInfoParam", JSON["stringify"](window["GMSOFT_GAME_INFO"]));
      });
    } catch (_0x209b71) {
      console["error"]("Error JS 12", _0x209b71);
    }
    try {
      gmStartAds(function () {
        _0x22ac38("GmSoft", "SetAdParam", JSON["stringify"](window["GMSOFT_ADS_INFO"]));
      });
    } catch (_0x18a8f1) {
      console["error"]("Error JS 20", _0x18a8f1);
    }
    try {
      document["addEventListener"]("gmsoftbanevent", _0x47b4a9 => {
        _0x22ac38("GmSoft", "LockGame", _0x47b4a9["detail"]);
      });
    } catch (_0x35f7ac) {
      console["error"]("Error JS 28", _0x35f7ac);
    }
  }
  function _0x40b192(_0x334e2a) {
    try {
      window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Sending game event"), window[preroll["config"]["loaderObjectName"]]["GameEvent"](_0x334e2a);
    } catch (_0x5bce65) {
      console["log"]("No WeeGooAFG implementation found!");
    }
  }
  function _0x1c382d() {
    try {
      window["CrazyGames"]["SDK"]["game"]["gameplayStart"]();
    } catch (_0x83fad4) {
      window["UnitySDK"]["logError"]("Error while calling gameplayStart:", _0x83fad4);
    }
  }
  function _0x4f9c5f() {
    try {
      window["CrazyGames"]["SDK"]["game"]["gameplayStop"]();
    } catch (_0x43a361) {
      window["UnitySDK"]["logError"]("Error while calling gameplayStop:", _0x43a361);
    }
  }
  function _0x1c214f() {
    var _0x1f1952 = firebaseConfig["projectId"], _0x1eb21d = _0x2c1249(_0x1f1952) + 1, _0x3c335c = _0x499029(_0x1eb21d);
    return _0xf36afc(_0x1f1952, _0x3c335c, _0x1eb21d), _0x3c335c;
  }
  function _0x4ffea8(_0x4b6715, _0xc2a142, _0x12f5fa, _0x5e9d06, _0x238a61) {
    var _0x4c4da3 = _0x5a9382(_0x4b6715), _0x849185 = _0x5a9382(_0xc2a142), _0x3ce31f = _0x5a9382(_0x12f5fa), _0x3c5bcc = _0x5a9382(_0x5e9d06), _0xed6960 = _0x5a9382(_0x238a61);
    try {
      firebase["firestore"]()["collection"](_0x4c4da3)["doc"](_0x849185)["get"]()["then"](function (_0x31994b) {
        _0x31994b["exists"] ? window["unityInstance"]["SendMessage"](_0x3ce31f, _0x3c5bcc, JSON["stringify"](_0x31994b["data"]())) : window["unityInstance"]["SendMessage"](_0x3ce31f, _0x3c5bcc, "null");
      })["catch"](function (_0x59c9c4) {
        window["unityInstance"]["SendMessage"](_0x3ce31f, _0xed6960, JSON["stringify"](_0x59c9c4, Object["getOwnPropertyNames"](_0x59c9c4)));
      });
    } catch (_0x32cba3) {
      window["unityInstance"]["SendMessage"](_0x3ce31f, _0xed6960, JSON["stringify"](_0x32cba3, Object["getOwnPropertyNames"](_0x32cba3)));
    }
  }
  function _0x470f1a(_0x375598, _0x11ba0e, _0x2d9619, _0x3c5140) {
    var _0x35d09a = _0x5a9382(_0x375598), _0x2571e4 = _0x5a9382(_0x11ba0e), _0x37a436 = _0x5a9382(_0x2d9619), _0x3a43c2 = _0x5a9382(_0x3c5140);
    try {
      firebase["firestore"]()["collection"](_0x35d09a)["get"]()["then"](function (_0x2b2cf0) {
        var _0x1d54fe = {};
        _0x2b2cf0["forEach"](function (_0x873c46) {
          _0x1d54fe[_0x873c46["id"]] = _0x873c46["data"]();
        }), window["unityInstance"]["SendMessage"](_0x2571e4, _0x37a436, JSON["stringify"](_0x1d54fe));
      })["catch"](function (_0x12aa77) {
        window["unityInstance"]["SendMessage"](_0x2571e4, _0x3a43c2, JSON["stringify"](_0x12aa77, Object["getOwnPropertyNames"](_0x12aa77)));
      });
    } catch (_0x5be26b) {
      window["unityInstance"]["SendMessage"](_0x2571e4, _0x3a43c2, JSON["stringify"](_0x5be26b, Object["getOwnPropertyNames"](_0x5be26b)));
    }
  }
  function _0x47992c() {
    var _0x4ad123 = window["CrazyGames"]["SDK"]["environment"], _0x46264f = _0x2c1249(_0x4ad123) + 1, _0x3260b1 = _0x499029(_0x46264f);
    return _0xf36afc(_0x4ad123, _0x3260b1, _0x46264f), _0x3260b1;
  }
  function _0x54f1ac() {
    var _0x155afc = JSON["stringify"](window["CrazyGames"]["SDK"]["game"]["settings"]), _0x14990b = _0x2c1249(_0x155afc) + 1, _0x38b502 = _0x499029(_0x14990b);
    return _0xf36afc(_0x155afc, _0x38b502, _0x14990b), _0x38b502;
  }
  function _0x36145b(_0x13fb12) {
    var _0xd23d2b = new URLSearchParams(window["location"]["search"]), _0x3e1e3f = _0xd23d2b["get"](window["unityStringify"](_0x13fb12));
    _0x3e1e3f === null && (_0x3e1e3f = "");
    var _0x3c3b31 = _0x2c1249(_0x3e1e3f) + 1, _0x3c53bc = _0x499029(_0x3c3b31);
    return _0xf36afc(_0x3e1e3f, _0x3c53bc, _0x3c3b31), _0x3c53bc;
  }
  function _0x36cda0() {
    return window["CrazyGames"]["SDK"]["isQaTool"];
  }
  function _0x1d180c(_0x3773cd, _0x46e5f5, _0x3779cf, _0x753d88) {
    var _0x13ae8f = _0x5a9382(_0x3773cd), _0x11a617 = _0x5a9382(_0x46e5f5), _0x202e7c = _0x5a9382(_0x3779cf), _0x17e3b6 = _0x5a9382(_0x753d88);
    try {
      firebase["database"]()["ref"](_0x13ae8f)["once"]("value")["then"](function (_0x225916) {
        window["unityInstance"]["SendMessage"](_0x11a617, _0x202e7c, JSON["stringify"](_0x225916["val"]()));
      });
    } catch (_0xa1bce7) {
      window["unityInstance"]["SendMessage"](_0x11a617, _0x17e3b6, JSON["stringify"](_0xa1bce7, Object["getOwnPropertyNames"](_0xa1bce7)));
    }
  }
  function _0x5c6cde() {
    var _0x303f07 = JSON["stringify"](window["CrazyGames"]["SDK"]["user"]["systemInfo"]), _0x2a90e8 = _0x2c1249(_0x303f07) + 1, _0x49fc29 = _0x499029(_0x2a90e8);
    return _0xf36afc(_0x303f07, _0x49fc29, _0x2a90e8), _0x49fc29;
  }
  function _0x222982() {
    window["CrazyGames"]["SDK"]["user"]["getUser"]()["then"](function (_0x4a78ca) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_GetUser", JSON["stringify"]({userJson: JSON["stringify"](_0x4a78ca)}));
    })["catch"](function (_0x41b1cf) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_GetUser", JSON["stringify"]({errorJson: JSON["stringify"](_0x41b1cf)}));
    });
  }
  function _0x4fd017() {
    window["CrazyGames"]["SDK"]["user"]["getUserToken"]()["then"](function (_0x11274e) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON["stringify"]({token: _0x11274e}));
    })["catch"](function (_0x10a329) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_GetUserToken", JSON["stringify"]({errorJson: JSON["stringify"](_0x10a329)}));
    });
  }
  function _0x56edeb() {
    window["CrazyGames"]["SDK"]["user"]["getXsollaUserToken"]()["then"](function (_0x564782) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON["stringify"]({token: _0x564782}));
    })["catch"](function (_0x511f4f) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_GetXsollaUserToken", JSON["stringify"]({errorJson: JSON["stringify"](_0x511f4f)}));
    });
  }
  function _0x25619c() {}
  function _0x4504f0() {
    console["log"]("afg.ready: " + afg["ready"]), afg["ready"] ? (_0x22ac38("H5Adverisement", "PreloadRewardedVideoCallback", 1), afg["adBreak"]({type: "reward", name: "reward ads", beforeReward: function (_0x5465ee) {
      this["_showRewardAdFn"] = _0x5465ee, console["log"]("[H5 Ads] before reward");
    }["bind"](this), adViewed: function () {
      this["_showRewardAdFn"] = null, _0x22ac38("H5Adverisement", "RewardedVideoSuccessCallback"), console["log"]("[H5 Ads] ad viewed");
    }["bind"](this), adDismissed: function () {
      this["_showRewardAdFn"] = null, _0x22ac38("H5Adverisement", "RewardedVideoFailureCallback"), console["log"]("[H5 Ads] ad failure");
    }["bind"](this), adBreakDone: function (_0x347d40) {
      console["log"]("[H5 Ads] Reward break done"), _0x22ac38("H5Adverisement", "ResumeGameCallback");
    }["bind"](this)})) : (console["log"]("[H5 Ads] no reward ads"), _0x22ac38("H5Adverisement", "PreloadRewardedVideoCallback", 0));
  }
  function _0x28b6a3() {
    afg["ready"] ? afg["adBreak"]({type: "next", name: "next", beforeAd: function () {
      afg["onBeforeAd"](), console["log"]("[H5 Ads] Before ad"), _0x22ac38("H5Adverisement", "PauseGameCallback");
    }["bind"](this), adBreakDone: function () {
      console["log"]("[H5 Ads] Ad break done"), _0x22ac38("H5Adverisement", "ResumeGameCallback");
    }["bind"](this)}) : (console["log"]("no " + adType + " ads"), _0x22ac38("H5Adverisement", "ResumeGameCallback"));
  }
  function _0x4e680c() {
    this["_showRewardAdFn"] ? (_0x22ac38("H5Adverisement", "PauseGameCallback"), this["_showRewardAdFn"]()) : _0x22ac38("H5Adverisement", "ResumeGameCallback");
  }
  function _0x1625e9() {
    try {
      window["CrazyGames"]["SDK"]["game"]["happytime"]();
    } catch (_0x390bd7) {
      window["UnitySDK"]["logError"]("Error while calling happytime:", _0x390bd7);
    }
  }
  function _0x4eecce() {
    try {
      window["CrazyGames"]["SDK"]["game"]["hideInviteButton"]();
    } catch (_0x5ac701) {
      window["UnitySDK"]["logError"]("Error while calling hideInviteButton:", _0x5ac701);
    }
  }
  function _0x4528c1(_0x4932c6, _0xfe3edd, _0x51bf1d, _0x4c03a5, _0x220ff9, _0x4413bc, _0x5e49ce) {
    var _0x57b313 = _0x5a9382(_0x4932c6), _0x389f19 = _0x5a9382(_0xfe3edd), _0x41878b = _0x5a9382(_0x51bf1d), _0x351490 = _0x5a9382(_0x220ff9), _0x515cb5 = _0x5a9382(_0x4413bc), _0x5bd565 = _0x5a9382(_0x5e49ce);
    try {
      var _0x1dbe13 = {};
      _0x1dbe13[_0x41878b] = firebase["firestore"]["FieldValue"]["increment"](_0x4c03a5), firebase["firestore"]()["collection"](_0x57b313)["doc"](_0x389f19)["update"](_0x1dbe13)["then"](function () {
        window["unityInstance"]["SendMessage"](_0x351490, _0x515cb5, "Success: incremented " + _0x41878b + " by " + _0x4c03a5);
      })["catch"](function (_0x22816a) {
        window["unityInstance"]["SendMessage"](_0x351490, _0x5bd565, JSON["stringify"](_0x22816a, Object["getOwnPropertyNames"](_0x22816a)));
      });
    } catch (_0x2d32e4) {
      window["unityInstance"]["SendMessage"](_0x351490, _0x5bd565, JSON["stringify"](_0x2d32e4, Object["getOwnPropertyNames"](_0x2d32e4)));
    }
  }
  function _0x1f9a9a(_0x457712) {
    typeof _0x5a9382 !== "undefined" ? window["unityStringify"] = _0x5a9382 : window["unityStringify"] = _0x5a9382;
    window["UnitySDK"] = {version: window["unityStringify"](_0x457712), pointerLockElement: undefined, unlockPointer: function () {
      this["pointerLockElement"] = document["pointerLockElement"] || null, this["pointerLockElement"] && document["exitPointerLock"] && document["exitPointerLock"]();
    }, lockPointer: function () {
      this["pointerLockElement"] && this["pointerLockElement"]["requestPointerLock"] && this["pointerLockElement"]["requestPointerLock"]();
    }, logError: function () {
      var _0x35e0ba = Array["prototype"]["slice"]["call"](arguments);
      _0x35e0ba["unshift"]("[JsLib]"), console["error"]["apply"](console, _0x35e0ba);
    }};
    var _0x43be23 = {wrapper: {engine: "unity", sdkVersion: window["unityStringify"](_0x457712)}}, _0x5a28a9 = document["createElement"]("script");
    _0x5a28a9["src"] = "https://sdk.crazygames.com/crazygames-sdk-v3.js", document["head"]["appendChild"](_0x5a28a9), _0x5a28a9["addEventListener"]("load", function () {
      window["CrazyGames"]["SDK"]["init"](_0x43be23)["then"](function () {
        _0x22ac38("CrazySDKSingleton", "JSLibCallback_Init"), window["CrazyGames"]["SDK"]["ad"]["hasAdblock"]()["then"](function (_0x21d512) {
          _0x22ac38("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", _0x21d512 ? 1 : 0);
        })["catch"](function (_0xa9aa12) {
          window["UnitySDK"]["logError"]("Error while checking adblock:", _0xa9aa12), _0x22ac38("CrazySDKSingleton", "JSLibCallback_AdblockDetectionResult", 0);
        }), window["CrazyGames"]["SDK"]["user"]["addAuthListener"](function (_0x42baac) {
          _0x22ac38("CrazySDKSingleton", "JSLibCallback_AuthListener", JSON["stringify"]({userJson: JSON["stringify"](_0x42baac)}));
        });
      });
    });
  }
  function _0x2c4a55() {
    return window["CrazyGames"]["SDK"]["user"]["isUserAccountAvailable"];
  }
  var _0x10ab7c = null, _0x3da58a = 0;
  function _0x2f51db() {
    return _0x10ab7c && _0x10ab7c["activated"] || _0x3da58a != 0;
  }
  var _0x10e8ab = 1, _0x2f6ea8 = {x: 0, y: 0, z: 0};
  function _0x35c93c() {
    _0x2f6ea8 = {x: _0x10ab7c["x"] * _0x10e8ab, y: _0x10ab7c["y"] * _0x10e8ab, z: _0x10ab7c["z"] * _0x10e8ab};
    if (_0x3da58a != 0) _0x30f76c(_0x3da58a, _0x2f6ea8["x"], _0x2f6ea8["y"], _0x2f6ea8["z"]);
  }
  var _0x12fc04 = 0, _0x2cf8ad = 0, _0x2d54f1 = 0, _0x1f7183 = 0, _0x479a84 = 0;
  function _0x5b8f4e(_0x5252d1, _0x53cc9b) {
    var _0xfe95ae = {x: _0x5252d1["x"] - _0x53cc9b["x"], y: _0x5252d1["y"] - _0x53cc9b["y"], z: _0x5252d1["z"] - _0x53cc9b["z"]}, _0x5f480e = _0xfe95ae["x"] * _0xfe95ae["x"] + _0xfe95ae["y"] * _0xfe95ae["y"] + _0xfe95ae["z"] * _0xfe95ae["z"], _0x4253a0 = {x: _0x5252d1["x"] + _0x53cc9b["x"], y: _0x5252d1["y"] + _0x53cc9b["y"], z: _0x5252d1["z"] + _0x53cc9b["z"]}, _0xf48ee6 = _0x4253a0["x"] * _0x4253a0["x"] + _0x4253a0["y"] * _0x4253a0["y"] + _0x4253a0["z"] * _0x4253a0["z"];
    return _0x5f480e <= _0xf48ee6 ? _0xfe95ae : _0x4253a0;
  }
  function _0x1bcfc3(_0x210bb2) {
    var _0x67447e = {x: _0x210bb2["accelerationIncludingGravity"]["x"] * _0x10e8ab, y: _0x210bb2["accelerationIncludingGravity"]["y"] * _0x10e8ab, z: _0x210bb2["accelerationIncludingGravity"]["z"] * _0x10e8ab};
    if (_0x3da58a != 0) _0x30f76c(_0x3da58a, _0x67447e["x"], _0x67447e["y"], _0x67447e["z"]);
    var _0x3b5597 = {x: _0x210bb2["acceleration"]["x"] * _0x10e8ab, y: _0x210bb2["acceleration"]["y"] * _0x10e8ab, z: _0x210bb2["acceleration"]["z"] * _0x10e8ab};
    if (_0x2d54f1 != 0) _0x30f76c(_0x2d54f1, _0x3b5597["x"], _0x3b5597["y"], _0x3b5597["z"]);
    if (_0x1f7183 != 0) {
      var _0x59f35b = _0x5b8f4e(_0x67447e, _0x3b5597);
      _0x30f76c(_0x1f7183, _0x59f35b["x"], _0x59f35b["y"], _0x59f35b["z"]);
    }
    if (_0x479a84 != 0) {
      var _0x5379f8 = Math["PI"] / 180;
      _0x30f76c(_0x479a84, _0x210bb2["rotationRate"]["alpha"] * _0x5379f8, _0x210bb2["rotationRate"]["beta"] * _0x5379f8, _0x210bb2["rotationRate"]["gamma"] * _0x5379f8);
    }
  }
  var _0x4ded3c = 0;
  function _0x58d4f4(_0x5ce5d4) {
    _0x5ce5d4 & 1 && (typeof DeviceOrientationEvent["requestPermission"] === "function" && DeviceOrientationEvent["requestPermission"]()["then"](function (_0x5b61ac) {
      _0x5b61ac === "granted" ? _0x4ded3c &= ~1 : _0x2b847b("DeviceOrientationEvent permission not granted");
    })["catch"](function (_0x7fbb40) {
      _0x2b847b(_0x7fbb40), _0x4ded3c |= 1;
    })), _0x5ce5d4 & 2 && (typeof DeviceMotionEvent["requestPermission"] === "function" && DeviceMotionEvent["requestPermission"]()["then"](function (_0x5b8ee4) {
      _0x5b8ee4 === "granted" ? _0x4ded3c &= ~2 : _0x2b847b("DeviceMotionEvent permission not granted");
    })["catch"](function (_0x20b6d2) {
      _0x2b847b(_0x20b6d2), _0x4ded3c |= 2;
    }));
  }
  function _0x468be5() {
    _0x3da58a == 0 && _0x2d54f1 == 0 && _0x1f7183 == 0 && _0x479a84 == 0 && (_0x58d4f4(2), window["addEventListener"]("devicemotion", _0x1bcfc3));
  }
  function _0x694f7c() {
    var _0x135590 = 9.80665;
    _0x10e8ab = /(iPhone|iPad|Macintosh)/i["test"](navigator["userAgent"]) ? 1 / _0x135590 : -1 / _0x135590;
  }
  function _0x179e06(_0x3c71cd, _0x42d6d0) {
    _0x694f7c();
    if (typeof Accelerometer === "undefined") {
      _0x468be5();
      if (_0x3c71cd != 0) _0x3da58a = _0x3c71cd;
      return;
    }
    if (_0x3c71cd != 0) _0x3da58a = _0x3c71cd;
    function _0x11d33f(_0x357017) {
      _0x10ab7c = new Accelerometer({frequency: _0x357017, referenceFrame: "device"}), _0x10ab7c["addEventListener"]("reading", _0x35c93c), _0x10ab7c["addEventListener"]("error", function (_0x5354ce) {
        _0x2b847b(_0x5354ce["error"] ? _0x5354ce["error"] : _0x5354ce);
      }), _0x10ab7c["start"](), _0x2cf8ad = _0x357017;
    }
    if (_0x10ab7c) _0x2cf8ad != _0x42d6d0 && (_0x10ab7c["stop"](), _0x10ab7c["removeEventListener"]("reading", _0x35c93c), _0x11d33f(_0x42d6d0)); else _0x12fc04 != 0 ? _0x12fc04 = _0x42d6d0 : (_0x12fc04 = _0x42d6d0, navigator["permissions"]["query"]({name: "accelerometer"})["then"](function (_0x56eb17) {
      _0x56eb17["state"] === "granted" ? _0x11d33f(_0x12fc04) : _0x2b847b("No permission to use Accelerometer."), _0x12fc04 = 0;
    }));
  }
  function _0x3828a0() {
    _0x3da58a == 0 && _0x2d54f1 == 0 && _0x1f7183 == 0 && _0x479a84 == 0 && window["removeEventListener"]("devicemotion", _0x537a89);
  }
  function _0x4253f1() {
    if (_0x10ab7c) (typeof GravitySensor !== "undefined" || _0x1f7183 == 0) && (_0x10ab7c["stop"](), _0x10ab7c["removeEventListener"]("reading", _0x35c93c), _0x10ab7c = null), _0x3da58a = 0, _0x2cf8ad = 0; else _0x3da58a != 0 && (_0x3da58a = 0, _0x3828a0());
  }
  function _0x2a8a53(_0x379ac2, _0x35fd30) {
    var _0x1ee0bf = "";
    for (var _0xbcd806 = 0; _0xbcd806 < _0x35fd30; _0xbcd806++) _0x1ee0bf += String["fromCharCode"](_0x1c2f04[_0x379ac2 + _0xbcd806]);
    _0x3d01d3["canvas"]["style"]["cursor"] = "url(data:image/cur;base64," + btoa(_0x1ee0bf) + "),default";
  }
  function _0x5e99c3(_0x5b676d) {
    _0x3d01d3["canvas"]["style"]["cursor"] = _0x5b676d ? "default" : "none";
  }
  function _0x4d3345(_0x43469c) {
    if (typeof window["CSS"] !== "undefined" && typeof window["CSS"]["escape"] !== "undefined") return window["CSS"]["escape"](_0x43469c);
    return _0x43469c["replace"](/(#|\.|\+|\[|\]|\(|\)|\{|\})/g, "\\$1");
  }
  function _0x55726c() {
    var _0x35d710 = _0x3d01d3["canvas"] ? _0x3d01d3["canvas"]["id"] : "unity-canvas";
    return "#" + _0x4d3345(_0x35d710);
  }
  function _0x3843d6(_0x1ef635, _0xbab53b, _0x5dfa8e, _0x571eb2) {
    var _0x5ee8da = document["querySelector"](_0x55726c()), _0x1db8af = _0x5ee8da && _0x5ee8da["getBoundingClientRect"]();
    _0x9bfde5[_0x5dfa8e >> 2] = _0x1ef635 - (_0x1db8af ? _0x1db8af["left"] : 0), _0x9bfde5[_0x571eb2 >> 2] = _0xbab53b - (_0x1db8af ? _0x1db8af["top"] : 0);
  }
  function _0x335fc3(_0x5eb9f4) {
    var _0x40bb80 = _0x2c1249(_0x5eb9f4) + 1, _0x55d90d = _0x499029(_0x40bb80);
    return _0xf36afc(_0x5eb9f4, _0x55d90d, _0x40bb80), _0x55d90d;
  }
  function _0x579876() {
    var _0x350e83 = _0x55726c();
    return _0x579876["selector"] != _0x350e83 && (_0x3426bf(_0x579876["ptr"]), _0x579876["ptr"] = _0x335fc3(_0x350e83), _0x579876["selector"] = _0x350e83), _0x579876["ptr"];
  }
  function _0x16bbd1(_0x2111ae) {
    var _0x2fe49f = _0x5a9382(_0x2111ae);
    try {
      eval(_0x2fe49f);
    } catch (_0x1d152a) {
      console["error"](_0x1d152a);
    }
  }
  function _0x3d255e(_0x4b8523) {
    var _0x1cbb10 = _0x5a9382(_0x4b8523);
    window["open"](_0x1cbb10, "_blank", "");
  }
  var _0x46c25d = {numPendingSync: 0, syncInternal: 1e3, syncInProgress: ![], sync: function (_0x55d582) {
    if (_0x55d582) {
      if (_0x46c25d["numPendingSync"] == 0) return;
    } else {
      if (_0x46c25d["syncInProgress"]) {
        _0x46c25d["numPendingSync"]++;
        return;
      }
    }
    _0x46c25d["syncInProgress"] = !![], _0x37953b["syncfs"](![], function (_0x2446da) {
      _0x46c25d["syncInProgress"] = ![];
    }), _0x46c25d["numPendingSync"] = 0;
  }};
  function _0x1af8aa() {
    _0x3d01d3["setInterval"](function () {
      _0x46c25d["sync"](!![]);
    }, _0x46c25d["syncInternal"]);
  }
  function _0x375996() {
    _0x46c25d["sync"](![]);
  }
  var _0x3f718f = null;
  function _0x3e770d() {
    return typeof GravitySensor !== "undefined" ? _0x3f718f && _0x3f718f["activated"] : _0x1f7183 != 0;
  }
  function _0x267977() {
    if (_0x1f7183 != 0) _0x30f76c(_0x1f7183, _0x3f718f["x"] * _0x10e8ab, _0x3f718f["y"] * _0x10e8ab, _0x3f718f["z"] * _0x10e8ab);
  }
  var _0x1fbf73 = 0, _0x45c17a = null;
  function _0x62d4ad() {
    var _0x1c5b72 = {x: _0x45c17a["x"] * _0x10e8ab, y: _0x45c17a["y"] * _0x10e8ab, z: _0x45c17a["z"] * _0x10e8ab};
    if (_0x2d54f1 != 0) _0x30f76c(_0x2d54f1, _0x1c5b72["x"], _0x1c5b72["y"], _0x1c5b72["z"]);
    if (_0x1f7183 != 0 && typeof GravitySensor === "undefined") {
      var _0x1eb5c1 = _0x5b8f4e(_0x2f6ea8, _0x1c5b72);
      _0x30f76c(_0x1f7183, _0x1eb5c1["x"], _0x1eb5c1["y"], _0x1eb5c1["z"]);
    }
  }
  var _0x5a6537 = 0, _0x5b787f = 0;
  function _0xd38cfe(_0x4da7ab, _0x29f4d1) {
    _0x694f7c();
    if (typeof LinearAccelerationSensor === "undefined") {
      _0x468be5();
      if (_0x4da7ab != 0) _0x2d54f1 = _0x4da7ab;
      return;
    }
    if (_0x4da7ab != 0) _0x2d54f1 = _0x4da7ab;
    function _0x5a39ea(_0x3e2757) {
      _0x45c17a = new LinearAccelerationSensor({frequency: _0x3e2757, referenceFrame: "device"}), _0x45c17a["addEventListener"]("reading", _0x62d4ad), _0x45c17a["addEventListener"]("error", function (_0x3a522c) {
        _0x2b847b(_0x3a522c["error"] ? _0x3a522c["error"] : _0x3a522c);
      }), _0x45c17a["start"](), _0x5b787f = _0x3e2757;
    }
    if (_0x45c17a) _0x5b787f != _0x29f4d1 && (_0x45c17a["stop"](), _0x45c17a["removeEventListener"]("reading", _0x62d4ad), _0x5a39ea(_0x29f4d1)); else _0x5a6537 != 0 ? _0x5a6537 = _0x29f4d1 : (_0x5a6537 = _0x29f4d1, navigator["permissions"]["query"]({name: "accelerometer"})["then"](function (_0x3260a2) {
      _0x3260a2["state"] === "granted" ? _0x5a39ea(_0x5a6537) : _0x2b847b("No permission to use LinearAccelerationSensor."), _0x5a6537 = 0;
    }));
  }
  function _0x2bce7a(_0x96cc78, _0x247474) {
    if (typeof GravitySensor === "undefined") {
      _0x179e06(0, Math["max"](_0x247474, _0x2cf8ad)), _0xd38cfe(0, Math["max"](_0x247474, _0x5b787f)), _0x1f7183 = _0x96cc78;
      return;
    }
    _0x694f7c(), _0x1f7183 = _0x96cc78;
    function _0x4d9f2f(_0x1107ce) {
      _0x3f718f = new GravitySensor({frequency: _0x1107ce, referenceFrame: "device"}), _0x3f718f["addEventListener"]("reading", _0x267977), _0x3f718f["addEventListener"]("error", function (_0x5003d7) {
        _0x2b847b(_0x5003d7["error"] ? _0x5003d7["error"] : _0x5003d7);
      }), _0x3f718f["start"]();
    }
    if (_0x3f718f) _0x3f718f["stop"](), _0x3f718f["removeEventListener"]("reading", _0x267977), _0x4d9f2f(_0x247474); else _0x1fbf73 != 0 ? _0x1fbf73 = _0x247474 : (_0x1fbf73 = _0x247474, navigator["permissions"]["query"]({name: "accelerometer"})["then"](function (_0x3c501d) {
      _0x3c501d["state"] === "granted" ? _0x4d9f2f(_0x1fbf73) : _0x2b847b("No permission to use GravitySensor."), _0x1fbf73 = 0;
    }));
  }
  function _0x30a1a() {
    if (_0x45c17a) (typeof GravitySensor !== "undefined" || _0x1f7183 == 0) && (_0x45c17a["stop"](), _0x45c17a["removeEventListener"]("reading", _0x62d4ad), _0x45c17a = null), _0x2d54f1 = 0, _0x5b787f = 0; else _0x2d54f1 != 0 && (_0x2d54f1 = 0, _0x3828a0());
  }
  function _0x238314() {
    _0x1f7183 = 0;
    if (typeof GravitySensor === "undefined") {
      if (_0x3da58a == 0) _0x4253f1();
      if (_0x2d54f1 == 0) _0x30a1a();
      return;
    }
    _0x3f718f && (_0x3f718f["stop"](), _0x3f718f["removeEventListener"]("reading", _0x267977), _0x3f718f = null);
  }
  function _0x167c11(_0x3a8ea7) {
    try {
      (function () {
        _0x418e27["call"](null, _0x3a8ea7);
      }());
    } catch (_0x2f4a01) {
      console["warn"](_0x2f4a01);
    }
  }
  var _0x85d8d9 = null;
  function _0x24de15() {
    return _0x85d8d9 && _0x85d8d9["activated"] || _0x479a84 != 0;
  }
  function _0x42071b() {
    if (_0x479a84 != 0) _0x30f76c(_0x479a84, _0x85d8d9["x"], _0x85d8d9["y"], _0x85d8d9["z"]);
  }
  var _0x513761 = 0;
  function _0x20cb75(_0x6f3dee, _0x111a77) {
    if (typeof Gyroscope === "undefined") {
      _0x468be5(), _0x479a84 = _0x6f3dee;
      return;
    }
    _0x479a84 = _0x6f3dee;
    function _0x49bb4b(_0x5dfc0f) {
      _0x85d8d9 = new Gyroscope({frequency: _0x5dfc0f, referenceFrame: "device"}), _0x85d8d9["addEventListener"]("reading", _0x42071b), _0x85d8d9["addEventListener"]("error", function (_0x2087b4) {
        _0x2b847b(_0x2087b4["error"] ? _0x2087b4["error"] : _0x2087b4);
      }), _0x85d8d9["start"]();
    }
    if (_0x85d8d9) _0x85d8d9["stop"](), _0x85d8d9["removeEventListener"]("reading", _0x42071b), _0x49bb4b(_0x111a77); else _0x513761 != 0 ? _0x513761 = _0x111a77 : (_0x513761 = _0x111a77, navigator["permissions"]["query"]({name: "gyroscope"})["then"](function (_0x2ae38f) {
      _0x2ae38f["state"] === "granted" ? _0x49bb4b(_0x513761) : _0x2b847b("No permission to use Gyroscope."), _0x513761 = 0;
    }));
  }
  function _0x3def22() {
    if (_0x85d8d9) _0x85d8d9["stop"](), _0x85d8d9["removeEventListener"]("reading", _0x42071b), _0x85d8d9 = null, _0x479a84 = 0; else _0x479a84 != 0 && (_0x479a84 = 0, _0x3828a0());
  }
  function _0x20a3b3() {
    const _0x285d46 = function (_0xc03742) {
      if (_0xc03742["target"]["localName"] !== "canvas") _0x413084();
    };
    document["addEventListener"]("contextmenu", _0x285d46), _0x3d01d3["deinitializers"]["push"](function () {
      document["removeEventListener"]("contextmenu", _0x285d46);
    });
  }
  function _0x119ba9() {
    return _0x45c17a && _0x45c17a["activated"] || _0x2d54f1 != 0;
  }
  function _0x203e46(_0x37cf0d, _0x49a7ed) {
    var _0x27a06f = _0x5a9382(_0x37cf0d);
    if (typeof dump == "function") dump(_0x27a06f);
    switch (_0x49a7ed) {
      case 0:
      case 1:
      case 4:
        console["error"](_0x27a06f);
        return;
      case 2:
        console["warn"](_0x27a06f);
        return;
      case 3:
      case 5:
        console["log"](_0x27a06f);
        return;
      default:
        console["error"]("Unknown console message type!"), console["error"](_0x27a06f);
    }
  }
  function _0x5cb4dd(_0x4cba38, _0x34d1a9) {
    var _0x325db5 = _0x39ad7b();
    if (_0x4cba38) _0xf36afc(_0x325db5, _0x4cba38, _0x34d1a9);
    return _0x2c1249(_0x325db5);
  }
  var _0x2cc045 = null, _0x139561 = 0;
  function _0x120d30() {
    return _0x2cc045 && _0x2cc045["activated"] || _0x139561 != 0;
  }
  function _0xa736f9() {
    if (_0x139561 != 0) _0x65e4ee(_0x139561, _0x2cc045["quaternion"][0], _0x2cc045["quaternion"][1], _0x2cc045["quaternion"][2], _0x2cc045["quaternion"][3]);
  }
  var _0x41313b = 0;
  function _0x537a89(_0x15c769) {
    if (_0x139561) {
      var _0x40468b = Math["PI"] / 180, _0x4e8890 = _0x15c769["beta"] * _0x40468b, _0x33a439 = _0x15c769["gamma"] * _0x40468b, _0x56d364 = _0x15c769["alpha"] * _0x40468b, _0x539cab = Math["cos"](_0x4e8890 / 2), _0x20c955 = Math["sin"](_0x4e8890 / 2), _0x266dcf = Math["cos"](_0x33a439 / 2), _0x75fa6f = Math["sin"](_0x33a439 / 2), _0xd9630f = Math["cos"](_0x56d364 / 2), _0x53736f = Math["sin"](_0x56d364 / 2), _0x22b8f7 = _0x20c955 * _0x266dcf * _0xd9630f - _0x539cab * _0x75fa6f * _0x53736f, _0x3beff3 = _0x539cab * _0x75fa6f * _0xd9630f + _0x20c955 * _0x266dcf * _0x53736f, _0x4797ae = _0x539cab * _0x266dcf * _0x53736f + _0x20c955 * _0x75fa6f * _0xd9630f, _0x2dbdfa = _0x539cab * _0x266dcf * _0xd9630f - _0x20c955 * _0x75fa6f * _0x53736f;
      _0x65e4ee(_0x139561, _0x22b8f7, _0x3beff3, _0x4797ae, _0x2dbdfa);
    }
  }
  function _0x548be6(_0x35fe71, _0x245ce3) {
    if (typeof RelativeOrientationSensor === "undefined") {
      _0x139561 == 0 && (_0x139561 = _0x35fe71, _0x58d4f4(1), window["addEventListener"]("deviceorientation", _0x537a89));
      return;
    }
    _0x139561 = _0x35fe71;
    function _0x2e55f9(_0x55bc94) {
      _0x2cc045 = new RelativeOrientationSensor({frequency: _0x55bc94, referenceFrame: "device"}), _0x2cc045["addEventListener"]("reading", _0xa736f9), _0x2cc045["addEventListener"]("error", function (_0x211f62) {
        _0x2b847b(_0x211f62["error"] ? _0x211f62["error"] : _0x211f62);
      }), _0x2cc045["start"]();
    }
    if (_0x2cc045) _0x2cc045["stop"](), _0x2cc045["removeEventListener"]("reading", _0xa736f9), _0x2e55f9(_0x245ce3); else _0x41313b != 0 ? _0x41313b = _0x245ce3 : (_0x41313b = _0x245ce3, Promise["all"]([navigator["permissions"]["query"]({name: "accelerometer"}), navigator["permissions"]["query"]({name: "gyroscope"})])["then"](function (_0x5e5843) {
      _0x5e5843["every"](function (_0x3b8992) {
        return _0x3b8992["state"] === "granted";
      }) ? _0x2e55f9(_0x41313b) : _0x2b847b("No permissions to use RelativeOrientationSensor."), _0x41313b = 0;
    }));
  }
  function _0x1960f4() {
    if (_0x2cc045) _0x2cc045["stop"](), _0x2cc045["removeEventListener"]("reading", _0xa736f9), _0x2cc045 = null; else _0x139561 != 0 && window["removeEventListener"]("deviceorientation", _0x537a89);
    _0x139561 = 0;
  }
  function _0x3dec98() {
    if (_0x4ded3c == 0) return;
    _0x58d4f4(_0x4ded3c);
  }
  function _0x2ea5cb() {
    _0x3d01d3["QuitCleanup"]();
  }
  var _0x5b4557 = 0;
  function _0x660def() {
    if (_0x5b4557) _0x11063c(_0x5b4557, window["innerWidth"], window["innerHeight"], screen["orientation"] ? screen["orientation"]["angle"] : window["orientation"]);
  }
  function _0x4f8b6() {
    _0x5b4557 = 0, window["removeEventListener"]("resize", _0x660def), screen["orientation"] && screen["orientation"]["removeEventListener"]("change", _0x660def);
  }
  function _0x33fab0(_0x4dc023) {
    !_0x5b4557 && (screen["orientation"] && screen["orientation"]["addEventListener"]("change", _0x660def), window["addEventListener"]("resize", _0x660def), _0x5b4557 = _0x4dc023, setTimeout(_0x660def, 0));
  }
  var _0x36929c = -1, _0x2703f4 = -1, _0x128e48 = -1;
  function _0x153c6d(_0x11f91a) {
    if (!screen["orientation"] || !screen["orientation"]["lock"]) return;
    function _0x4a362e() {
      _0x2703f4 = _0x36929c;
      var _0x3efc02 = ["any", 0, "landscape", "portrait", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"], _0x54ae8f = _0x3efc02[_0x2703f4];
      screen["orientation"]["lock"](_0x54ae8f)["then"](function () {
        _0x36929c != _0x2703f4 ? _0x128e48 = setTimeout(_0x4a362e, 0) : _0x128e48 = -1;
      })["catch"](function (_0x250e4f) {
        _0x2b847b(_0x250e4f), _0x128e48 = -1;
      });
    }
    _0x36929c = _0x11f91a, _0x128e48 == -1 && _0x11f91a != _0x2703f4 && (_0x128e48 = setTimeout(_0x4a362e, 0));
  }
  var _0x4093a3 = {audioInstanceIdCounter: 0, audioInstances: {}, audioContext: null, audioWebEnabled: 0, audioCache: [], pendingAudioSources: {}};
  function _0x4b7e69(_0x35276b) {
    _0x35276b["estimatePlaybackPosition"] = function () {
      var _0x283fde = (_0x4093a3["audioContext"]["currentTime"] - _0x35276b["playbackStartTime"]) * _0x35276b["playbackRate"]["value"];
      return _0x35276b["loop"] && _0x283fde >= _0x35276b["loopStart"] && (_0x283fde = (_0x283fde - _0x35276b["loopStart"]) % (_0x35276b["loopEnd"] - _0x35276b["loopStart"]) + _0x35276b["loopStart"]), _0x283fde;
    }, _0x35276b["setPitch"] = function (_0x11e7c5) {
      var _0x3ac1f7 = _0x35276b["estimatePlaybackPosition"]();
      _0x3ac1f7 >= 0 && (_0x35276b["playbackStartTime"] = _0x4093a3["audioContext"]["currentTime"] - _0x3ac1f7 / _0x11e7c5);
      if (_0x35276b["playbackRate"]["value"] !== _0x11e7c5) _0x35276b["playbackRate"]["value"] = _0x11e7c5;
    };
  }
  function _0xa16c45(_0x5d9888, _0x1e989a) {
    var _0x11f20d = {buffer: _0x5d9888, error: _0x1e989a};
    return _0x11f20d["release"] = function () {}, _0x11f20d["getLength"] = function () {
      if (!this["buffer"]) return console["log"]("Trying to get length of sound which is not loaded."), 0;
      var _0x53d6ed = 44100 / this["buffer"]["sampleRate"];
      return this["buffer"]["length"] * _0x53d6ed;
    }, _0x11f20d["getData"] = function (_0x2aaa22, _0x2fbdd0) {
      if (!this["buffer"]) return console["log"]("Trying to get data of sound which is not loaded."), 0;
      var _0x717364 = _0x2aaa22 >> 2, _0x5c0386 = _0x55bdf6["subarray"](_0x717364, _0x717364 + (_0x2fbdd0 >> 2)), _0x246e13 = Math["floor"]((_0x2fbdd0 >> 2) / this["buffer"]["numberOfChannels"]), _0x179988 = Math["min"](this["buffer"]["length"], _0x246e13);
      for (var _0x2ab497 = 0; _0x2ab497 < this["buffer"]["numberOfChannels"]; _0x2ab497++) {
        var _0x41ff26 = this["buffer"]["getChannelData"](_0x2ab497)["subarray"](0, _0x179988);
        _0x5c0386["set"](_0x41ff26, _0x2ab497 * _0x179988);
      }
      return _0x179988 * this["buffer"]["numberOfChannels"] * 4;
    }, _0x11f20d["getNumberOfChannels"] = function () {
      if (!this["buffer"]) return console["log"]("Trying to get metadata of sound which is not loaded."), 0;
      return this["buffer"]["numberOfChannels"];
    }, _0x11f20d["getFrequency"] = function () {
      if (!this["buffer"]) return console["log"]("Trying to get metadata of sound which is not loaded."), 0;
      return this["buffer"]["sampleRate"];
    }, _0x11f20d["createSourceNode"] = function () {
      !this["buffer"] && console["log"]("Trying to play sound which is not loaded.");
      var _0x418de0 = _0x4093a3["audioContext"]["createBufferSource"]();
      return _0x418de0["buffer"] = this["buffer"], _0x4b7e69(_0x418de0), _0x418de0;
    }, _0x11f20d;
  }
  function _0x165049(_0x4e1178, _0x4393c8) {
    var _0x5d0d5f = {callback: _0x4e1178, userData: _0x4393c8, source: null, gain: _0x4093a3["audioContext"]["createGain"](), panner: _0x4093a3["audioContext"]["createPanner"](), threeD: ![], loop: ![], loopStart: 0, loopEnd: 0, pitch: 1};
    return _0x5d0d5f["panner"]["rolloffFactor"] = 0, _0x5d0d5f["release"] = function () {
      this["disconnectSource"](), this["gain"]["disconnect"](), this["panner"]["disconnect"]();
    }, _0x5d0d5f["playSoundClip"] = function (_0x9a8abb, _0x1a2af1, _0x293b57) {
      try {
        var _0xae3e = this;
        this["source"] = _0x9a8abb["createSourceNode"](), this["setupPanning"](), this["source"]["onended"] = function () {
          _0xae3e["source"]["isStopped"] = !![], _0xae3e["disconnectSource"](), _0xae3e["callback"] && _0x3b8595("vi", _0xae3e["callback"], [_0xae3e["userData"]]);
        }, this["source"]["loop"] = this["loop"], this["source"]["loopStart"] = this["loopStart"], this["source"]["loopEnd"] = this["loopEnd"], this["source"]["start"](_0x1a2af1, _0x293b57), this["source"]["playbackStartTime"] = _0x1a2af1 - _0x293b57 / this["source"]["playbackRate"]["value"], this["source"]["setPitch"](this["pitch"]);
      } catch (_0x2110fa) {
        console["error"]("Channel.playSoundClip error. Exception: " + _0x2110fa);
      }
    }, _0x5d0d5f["stop"] = function (_0x26996c) {
      if (!this["source"]) return;
      try {
        _0x5d0d5f["source"]["stop"](_0x4093a3["audioContext"]["currentTime"] + _0x26996c);
      } catch (_0x46a864) {}
      _0x26996c == 0 && this["disconnectSource"]();
    }, _0x5d0d5f["isPaused"] = function () {
      if (!this["source"]) return !![];
      if (this["source"]["isPausedMockNode"]) return !![];
      if (this["source"]["mediaElement"]) return this["source"]["mediaElement"]["paused"] || this["source"]["pauseRequested"];
      return ![];
    }, _0x5d0d5f["pause"] = function () {
      if (!this["source"] || this["source"]["isPausedMockNode"]) return;
      if (this["source"]["mediaElement"]) {
        this["source"]["_pauseMediaElement"]();
        return;
      }
      var _0x2d98e1 = {isPausedMockNode: !![], buffer: this["source"]["buffer"], loop: this["source"]["loop"], loopStart: this["source"]["loopStart"], loopEnd: this["source"]["loopEnd"], playbackRate: this["source"]["playbackRate"]["value"], scheduledStopTime: undefined, playbackPausedAtPosition: this["source"]["estimatePlaybackPosition"](), setPitch: function (_0x12e91b) {
        this["playbackRate"] = _0x12e91b;
      }, stop: function (_0x34dd0c) {
        this["scheduledStopTime"] = _0x34dd0c;
      }};
      this["stop"](0), this["disconnectSource"](), this["source"] = _0x2d98e1;
    }, _0x5d0d5f["resume"] = function () {
      if (this["source"] && this["source"]["mediaElement"]) {
        this["source"]["start"](undefined, this["source"]["currentTime"]);
        return;
      }
      if (!this["source"] || !this["source"]["isPausedMockNode"]) return;
      var _0x4a42b2 = this["source"], _0x2d6575 = _0xa16c45(_0x4a42b2["buffer"], ![]);
      this["playSoundClip"](_0x2d6575, _0x4093a3["audioContext"]["currentTime"], Math["max"](0, _0x4a42b2["playbackPausedAtPosition"])), this["source"]["loop"] = _0x4a42b2["loop"], this["source"]["loopStart"] = _0x4a42b2["loopStart"], this["source"]["loopEnd"] = _0x4a42b2["loopEnd"], this["source"]["setPitch"](_0x4a42b2["playbackRate"]);
      if (typeof _0x4a42b2["scheduledStopTime"] !== "undefined") {
        var _0x254af0 = Math["max"](_0x4a42b2["scheduledStopTime"] - _0x4093a3["audioContext"]["currentTime"], 0);
        this["stop"](_0x254af0);
      }
    }, _0x5d0d5f["setLoop"] = function (_0x51c906) {
      this["loop"] = _0x51c906;
      if (!this["source"] || this["source"]["loop"] == _0x51c906) return;
      this["source"]["loop"] = _0x51c906;
    }, _0x5d0d5f["setLoopPoints"] = function (_0x2aa328, _0x19451c) {
      this["loopStart"] = _0x2aa328, this["loopEnd"] = _0x19451c;
      if (!this["source"]) return;
      this["source"]["loopStart"] !== _0x2aa328 && (this["source"]["loopStart"] = _0x2aa328), this["source"]["loopEnd"] !== _0x19451c && (this["source"]["loopEnd"] = _0x19451c);
    }, _0x5d0d5f["set3D"] = function (_0x5e1978) {
      if (this["threeD"] == _0x5e1978) return;
      this["threeD"] = _0x5e1978;
      if (!this["source"]) return;
      this["setupPanning"]();
    }, _0x5d0d5f["setPitch"] = function (_0x105daf) {
      this["pitch"] = _0x105daf;
      if (!this["source"]) return;
      this["source"]["setPitch"](_0x105daf);
    }, _0x5d0d5f["setVolume"] = function (_0x1e5e79) {
      if (this["gain"]["gain"]["value"] == _0x1e5e79) return;
      this["gain"]["gain"]["value"] = _0x1e5e79;
    }, _0x5d0d5f["setPosition"] = function (_0xf38113, _0x47b74c, _0x368bd7) {
      var _0x191735 = this["panner"];
      if (_0x191735["positionX"]) {
        if (_0x191735["positionX"]["value"] !== _0xf38113) _0x191735["positionX"]["value"] = _0xf38113;
        if (_0x191735["positionY"]["value"] !== _0x47b74c) _0x191735["positionY"]["value"] = _0x47b74c;
        if (_0x191735["positionZ"]["value"] !== _0x368bd7) _0x191735["positionZ"]["value"] = _0x368bd7;
      } else (_0x191735["_x"] !== _0xf38113 || _0x191735["_y"] !== _0x47b74c || _0x191735["_z"] !== _0x368bd7) && (_0x191735["setPosition"](_0xf38113, _0x47b74c, _0x368bd7), _0x191735["_x"] = _0xf38113, _0x191735["_y"] = _0x47b74c, _0x191735["_z"] = _0x368bd7);
    }, _0x5d0d5f["disconnectSource"] = function () {
      if (!this["source"] || this["source"]["isPausedMockNode"]) return;
      this["source"]["mediaElement"] && this["source"]["_pauseMediaElement"](), this["source"]["onended"] = null, this["source"]["disconnect"](), delete this["source"];
    }, _0x5d0d5f["setupPanning"] = function () {
      if (this["source"]["isPausedMockNode"]) return;
      this["source"]["disconnect"](), this["panner"]["disconnect"](), this["gain"]["disconnect"](), this["threeD"] ? (this["source"]["connect"](this["panner"]), this["panner"]["connect"](this["gain"])) : this["source"]["connect"](this["gain"]), this["gain"]["connect"](_0x4093a3["audioContext"]["destination"]);
    }, _0x5d0d5f["isStopped"] = function () {
      if (!this["source"]) return !![];
      if (this["source"]["mediaElement"]) return this["source"]["isStopped"];
      return ![];
    }, _0x5d0d5f;
  }
  function _0x11331a(_0x1a5252, _0x2933ed) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    return _0x4093a3["audioInstances"][++_0x4093a3["audioInstanceIdCounter"]] = _0x165049(_0x1a5252, _0x2933ed), _0x4093a3["audioInstanceIdCounter"];
  }
  function _0x324fbb(_0x5ad71c) {
    if (_0x4093a3["audioWebEnabled"] == 0) return 0;
    var _0x1bb832 = _0x4093a3["audioInstances"][_0x5ad71c];
    if (!_0x1bb832) return 0;
    return _0x1bb832["getLength"]();
  }
  function _0x554eef(_0x2e0ff0) {
    if (_0x4093a3["audioWebEnabled"] == 0) return 2;
    var _0x3386ca = _0x4093a3["audioInstances"][_0x2e0ff0];
    if (_0x3386ca["error"]) return 2;
    if (_0x3386ca["buffer"] || _0x3386ca["url"]) return 0;
    return 1;
  }
  function _0x3b5080(_0x512309) {
    var _0x52ab8a = _0x4093a3["pendingAudioSources"][_0x512309];
    _0x52ab8a["sourceNode"]["_startPlayback"](_0x52ab8a["offset"]), delete _0x4093a3["pendingAudioSources"][_0x512309];
  }
  function _0x31cd93() {
    Object["keys"](_0x4093a3["pendingAudioSources"])["forEach"](function (_0xb33da4) {
      _0x3b5080(_0xb33da4);
    });
  }
  function _0x5ecaf6() {
    try {
      window["AudioContext"] = window["AudioContext"] || window["webkitAudioContext"], _0x4093a3["audioContext"] = new AudioContext;
      var _0x30d7e6 = function () {
        if (_0x4093a3["audioContext"]["state"] === "suspended") _0x4093a3["audioContext"]["resume"]()["catch"](function (_0x322614) {
          console["warn"]("Could not resume audio context. Exception: " + _0x322614);
        }); else _0x3d01d3["clearInterval"](_0x37a9d0);
      }, _0x37a9d0 = _0x3d01d3["setInterval"](_0x30d7e6, 400);
      _0x4093a3["audioWebEnabled"] = 1;
      var _0x394c42 = function () {
        try {
          _0x4093a3["audioContext"]["state"] !== "running" && _0x4093a3["audioContext"]["state"] !== "closed" && _0x4093a3["audioContext"]["resume"]()["catch"](function (_0x297cf6) {
            console["warn"]("Could not resume audio context. Exception: " + _0x297cf6);
          });
          _0x31cd93();
          var _0x278cd5 = 20;
          while (_0x4093a3["audioCache"]["length"] < _0x278cd5) {
            var _0x404416 = new Audio;
            _0x404416["autoplay"] = ![], _0x4093a3["audioCache"]["push"](_0x404416);
          }
        } catch (_0x5e5afd) {}
      };
      window["addEventListener"]("mousedown", _0x394c42), window["addEventListener"]("touchstart", _0x394c42), _0x3d01d3["deinitializers"]["push"](function () {
        window["removeEventListener"]("mousedown", _0x394c42), window["removeEventListener"]("touchstart", _0x394c42);
      });
    } catch (_0x4c8735) {
      alert("Web Audio API is not supported in this browser");
    }
  }
  function _0x1eb53(_0x593411) {
    var _0x28d966 = _0xa16c45(null, ![]);
    return _0x4093a3["audioContext"]["decodeAudioData"](_0x593411, function (_0x52d2b8) {
      _0x28d966["buffer"] = _0x52d2b8;
    }, function (_0x30dec4) {
      _0x28d966["error"] = !![], console["log"]("Decode error: " + _0x30dec4);
    }), _0x28d966;
  }
  function _0x15b500(_0x297aa2, _0x2f0956) {
    _0x4093a3["pendingAudioSources"][_0x297aa2["mediaElement"]["src"]] = {sourceNode: _0x297aa2, offset: _0x2f0956};
  }
  function _0x396cca(_0x5ad138) {
    switch (_0x5ad138) {
      case 13:
        return "audio/mpeg";
      case 20:
        return "audio/wav";
      default:
        return "audio/mp4";
    }
  }
  function _0x18121c(_0xc1613c, _0x3ed99c) {
    var _0x3a7278 = _0x396cca(_0x3ed99c), _0x7dbba1 = new Blob([_0xc1613c], {type: _0x3a7278}), _0xd86820 = {url: URL["createObjectURL"](_0x7dbba1), error: ![], mediaElement: new Audio};
    return _0xd86820["mediaElement"]["preload"] = "metadata", _0xd86820["mediaElement"]["src"] = _0xd86820["url"], _0xd86820["release"] = function () {
      if (!this["mediaElement"]) return;
      this["mediaElement"]["src"] = "", URL["revokeObjectURL"](this["url"]), delete this["mediaElement"], delete this["url"];
    }, _0xd86820["getLength"] = function () {
      return this["mediaElement"]["duration"] * 44100;
    }, _0xd86820["getData"] = function (_0x275f52, _0x1f2f4f) {
      return console["warn"]("getData() is not supported for compressed sound."), 0;
    }, _0xd86820["getNumberOfChannels"] = function () {
      return console["warn"]("getNumberOfChannels() is not supported for compressed sound."), 0;
    }, _0xd86820["getFrequency"] = function () {
      return console["warn"]("getFrequency() is not supported for compressed sound."), 0;
    }, _0xd86820["createSourceNode"] = function () {
      var _0x54c40f = this, _0x2d66ea = _0x4093a3["audioCache"]["length"] ? _0x4093a3["audioCache"]["pop"]() : new Audio;
      _0x2d66ea["preload"] = "metadata", _0x2d66ea["src"] = this["url"];
      var _0x306625 = _0x4093a3["audioContext"]["createMediaElementSource"](_0x2d66ea);
      return Object["defineProperty"](_0x306625, "loop", {get: function () {
        return _0x306625["mediaElement"]["loop"];
      }, set: function (_0x285e39) {
        if (_0x306625["mediaElement"]["loop"] !== _0x285e39) _0x306625["mediaElement"]["loop"] = _0x285e39;
      }}), _0x306625["playbackRate"] = {}, Object["defineProperty"](_0x306625["playbackRate"], "value", {get: function () {
        return _0x306625["mediaElement"]["playbackRate"];
      }, set: function (_0x475e38) {
        if (_0x306625["mediaElement"]["playbackRate"] !== _0x475e38) _0x306625["mediaElement"]["playbackRate"] = _0x475e38;
      }}), Object["defineProperty"](_0x306625, "currentTime", {get: function () {
        return _0x306625["mediaElement"]["currentTime"];
      }, set: function (_0x57f298) {
        if (_0x306625["mediaElement"]["currentTime"] !== _0x57f298) _0x306625["mediaElement"]["currentTime"] = _0x57f298;
      }}), Object["defineProperty"](_0x306625, "mute", {get: function () {
        return _0x306625["mediaElement"]["mute"];
      }, set: function (_0x3546bb) {
        if (_0x306625["mediaElement"]["mute"] !== _0x3546bb) _0x306625["mediaElement"]["mute"] = _0x3546bb;
      }}), Object["defineProperty"](_0x306625, "onended", {get: function () {
        return _0x306625["mediaElement"]["onended"];
      }, set: function (_0x1c5952) {
        _0x306625["mediaElement"]["onended"] = _0x1c5952;
      }}), _0x306625["playPromise"] = null, _0x306625["playTimeout"] = null, _0x306625["pauseRequested"] = ![], _0x306625["isStopped"] = ![], _0x306625["_pauseMediaElement"] = function () {
        _0x306625["playPromise"] || _0x306625["playTimeout"] ? _0x306625["pauseRequested"] = !![] : _0x306625["mediaElement"]["pause"]();
      }, _0x306625["_startPlayback"] = function (_0x507f88) {
        if (_0x306625["playPromise"] || _0x306625["playTimeout"]) {
          _0x306625["mediaElement"]["currentTime"] = _0x507f88, _0x306625["pauseRequested"] = ![];
          return;
        }
        _0x306625["mediaElement"]["currentTime"] = _0x507f88, _0x306625["playPromise"] = _0x306625["mediaElement"]["play"](), _0x306625["playPromise"] && _0x306625["playPromise"]["then"](function () {
          _0x306625["pauseRequested"] && (_0x306625["mediaElement"]["pause"](), _0x306625["pauseRequested"] = ![]), _0x306625["playPromise"] = null;
        })["catch"](function (_0x6e15b5) {
          _0x306625["playPromise"] = null;
          if (_0x6e15b5["name"] !== "NotAllowedError") throw _0x6e15b5;
          _0x15b500(_0x306625, _0x507f88);
        });
      }, _0x306625["start"] = function (_0x1d8b5b, _0x47eb88) {
        typeof _0x1d8b5b === "undefined" && (_0x1d8b5b = _0x4093a3["audioContext"]["currentTime"]);
        typeof _0x47eb88 === "undefined" && (_0x47eb88 = 0);
        var _0xaf128a = 4, _0x54fec1 = (_0x1d8b5b - _0x4093a3["audioContext"]["currentTime"]) * 1e3;
        _0x54fec1 > _0xaf128a ? _0x306625["playTimeout"] = setTimeout(function () {
          _0x306625["playTimeout"] = null, _0x306625["_startPlayback"](_0x47eb88);
        }, _0x54fec1) : _0x306625["_startPlayback"](_0x47eb88);
      }, _0x306625["stop"] = function (_0x130d15) {
        typeof _0x130d15 === "undefined" && (_0x130d15 = _0x4093a3["audioContext"]["currentTime"]);
        var _0x10aad5 = 4, _0x34c2ac = (_0x130d15 - _0x4093a3["audioContext"]["currentTime"]) * 1e3;
        _0x34c2ac > _0x10aad5 ? setTimeout(function () {
          _0x306625["_pauseMediaElement"](), _0x306625["isStopped"] = !![];
        }, _0x34c2ac) : (_0x306625["_pauseMediaElement"](), _0x306625["isStopped"] = !![]);
      }, _0x4b7e69(_0x306625), _0x306625;
    }, _0xd86820;
  }
  function _0x13ecc7(_0x28e1ce, _0x27ef8d, _0x8b18d7, _0x47d386) {
    if (_0x4093a3["audioWebEnabled"] == 0) return 0;
    var _0x551b40 = _0x1c2f04["buffer"]["slice"](_0x28e1ce, _0x28e1ce + _0x27ef8d);
    if (_0x27ef8d < 131072) _0x8b18d7 = 1;
    var _0xd6458e;
    return _0x8b18d7 ? _0xd6458e = _0x1eb53(_0x551b40) : _0xd6458e = _0x18121c(_0x551b40, _0x47d386), _0x4093a3["audioInstances"][++_0x4093a3["audioInstanceIdCounter"]] = _0xd6458e, _0x4093a3["audioInstanceIdCounter"];
  }
  function _0x111441(_0x42c55e, _0x3db255, _0xc296cb, _0x5911cb) {
    var _0xa2a826 = _0x4093a3["audioContext"]["createBuffer"](_0x42c55e, _0x3db255, _0xc296cb);
    for (var _0x238359 = 0; _0x238359 < _0x42c55e; _0x238359++) {
      var _0x4b531e = (_0x5911cb >> 2) + _0x3db255 * _0x238359, _0x5ecbe6 = _0xa2a826["copyToChannel"] || function (_0x1336ff, _0x311140, _0x1d0917) {
        var _0x20dca1 = _0x1336ff["subarray"](0, Math["min"](_0x1336ff["length"], this["length"] - (_0x1d0917 | 0)));
        this["getChannelData"](_0x311140 | 0)["set"](_0x20dca1, _0x1d0917 | 0);
      };
      _0x5ecbe6["apply"](_0xa2a826, [_0x55bdf6["subarray"](_0x4b531e, _0x4b531e + _0x3db255), _0x238359, 0]);
    }
    return _0xa16c45(_0xa2a826, ![]);
  }
  function _0x1e2286(_0x18cc01, _0x23eff7, _0x39ba11, _0x4c9f22) {
    if (_0x4093a3["audioWebEnabled"] == 0) return 0;
    var _0x2fa516 = _0x111441(_0x18cc01, _0x23eff7, _0x39ba11, _0x4c9f22);
    return _0x4093a3["audioInstances"][++_0x4093a3["audioInstanceIdCounter"]] = _0x2fa516, _0x4093a3["audioInstanceIdCounter"];
  }
  function _0x6cb212(_0x3b7d53, _0x189411, _0x544933, _0x54db55) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    _0x4e207f(_0x189411, 0);
    var _0x4a63ca = _0x4093a3["audioInstances"][_0x3b7d53], _0x2ebd71 = _0x4093a3["audioInstances"][_0x189411];
    if (!_0x4a63ca) {
      console["log"]("Trying to play sound which is not loaded.");
      return;
    }
    try {
      _0x2ebd71["playSoundClip"](_0x4a63ca, _0x4093a3["audioContext"]["currentTime"] + _0x54db55, _0x544933);
    } catch (_0x1238e2) {
      console["error"]("playSoundClip error. Exception: " + e);
    }
  }
  function _0xb1d441(_0x318ee2) {
    var _0x1f53a2 = _0x4093a3["audioInstances"][_0x318ee2];
    _0x1f53a2 && _0x1f53a2["release"](), delete _0x4093a3["audioInstances"][_0x318ee2];
  }
  function _0x500a2d() {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    if (_0x4093a3["audioContext"]["state"] === "suspended") _0x4093a3["audioContext"]["resume"]()["catch"](function (_0x5478ab) {
      console["warn"]("Could not resume audio context. Exception: " + _0x5478ab);
    });
  }
  function _0x3a3068(_0x4383fe, _0x248240) {
    var _0x4142c4 = _0x4093a3["audioInstances"][_0x4383fe];
    _0x4142c4["set3D"](_0x248240);
  }
  function _0x2b3572(_0x37e483, _0x313808, _0x26b2f2, _0x4b8b01, _0x1e98cd, _0x51eb8b) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    _0x37e483 = -_0x37e483, _0x313808 = -_0x313808, _0x26b2f2 = -_0x26b2f2;
    var _0x36072d = _0x4093a3["audioContext"]["listener"];
    if (_0x36072d["forwardX"]) {
      if (_0x36072d["forwardX"]["value"] !== _0x37e483) _0x36072d["forwardX"]["value"] = _0x37e483;
      if (_0x36072d["forwardY"]["value"] !== _0x313808) _0x36072d["forwardY"]["value"] = _0x313808;
      if (_0x36072d["forwardZ"]["value"] !== _0x26b2f2) _0x36072d["forwardZ"]["value"] = _0x26b2f2;
      if (_0x36072d["upX"]["value"] !== _0x4b8b01) _0x36072d["upX"]["value"] = _0x4b8b01;
      if (_0x36072d["upY"]["value"] !== _0x1e98cd) _0x36072d["upY"]["value"] = _0x1e98cd;
      if (_0x36072d["upZ"]["value"] !== _0x51eb8b) _0x36072d["upZ"]["value"] = _0x51eb8b;
    } else (_0x36072d["_forwardX"] !== _0x37e483 || _0x36072d["_forwardY"] !== _0x313808 || _0x36072d["_forwardZ"] !== _0x26b2f2 || _0x36072d["_upX"] !== _0x4b8b01 || _0x36072d["_upY"] !== _0x1e98cd || _0x36072d["_upZ"] !== _0x51eb8b) && (_0x36072d["setOrientation"](_0x37e483, _0x313808, _0x26b2f2, _0x4b8b01, _0x1e98cd, _0x51eb8b), _0x36072d["_forwardX"] = _0x37e483, _0x36072d["_forwardY"] = _0x313808, _0x36072d["_forwardZ"] = _0x26b2f2, _0x36072d["_upX"] = _0x4b8b01, _0x36072d["_upY"] = _0x1e98cd, _0x36072d["_upZ"] = _0x51eb8b);
  }
  function _0x87cbde(_0xd8c6ad, _0x2ae3b9, _0x463bba) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    var _0x386b05 = _0x4093a3["audioContext"]["listener"];
    if (_0x386b05["positionX"]) {
      if (_0x386b05["positionX"]["value"] !== _0xd8c6ad) _0x386b05["positionX"]["value"] = _0xd8c6ad;
      if (_0x386b05["positionY"]["value"] !== _0x2ae3b9) _0x386b05["positionY"]["value"] = _0x2ae3b9;
      if (_0x386b05["positionZ"]["value"] !== _0x463bba) _0x386b05["positionZ"]["value"] = _0x463bba;
    } else (_0x386b05["_positionX"] !== _0xd8c6ad || _0x386b05["_positionY"] !== _0x2ae3b9 || _0x386b05["_positionZ"] !== _0x463bba) && (_0x386b05["setPosition"](_0xd8c6ad, _0x2ae3b9, _0x463bba), _0x386b05["_positionX"] = _0xd8c6ad, _0x386b05["_positionY"] = _0x2ae3b9, _0x386b05["_positionZ"] = _0x463bba);
  }
  function _0x6fd6fe(_0x374d80, _0x12939a) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    var _0x42b3db = _0x4093a3["audioInstances"][_0x374d80];
    _0x42b3db["setLoop"](_0x12939a);
  }
  function _0x9b966d(_0x4f0437, _0x32982e, _0x43fa5f) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    var _0x208b7d = _0x4093a3["audioInstances"][_0x4f0437];
    _0x208b7d["setLoopPoints"](_0x32982e, _0x43fa5f);
  }
  function _0x344cba(_0x2c400e, _0x48e678) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    var _0x2aa24a = _0x4093a3["audioInstances"][_0x2c400e];
    if (_0x48e678 != _0x2aa24a["isPaused"]()) {
      if (_0x48e678) _0x2aa24a["pause"](); else _0x2aa24a["resume"]();
    }
  }
  function _0x4c72e7(_0x347d6e, _0x348cad) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    try {
      var _0x32b387 = _0x4093a3["audioInstances"][_0x347d6e];
      _0x32b387["setPitch"](_0x348cad);
    } catch (_0x224427) {
      console["error"]("JS_Sound_SetPitch(channel=" + _0x347d6e + ", pitch=" + _0x348cad + ") threw an exception: " + _0x224427);
    }
  }
  function _0x1db958(_0x21b0cc, _0x347930, _0x27e54a, _0x7d0a2a) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    var _0x4450eb = _0x4093a3["audioInstances"][_0x21b0cc];
    _0x4450eb["setPosition"](_0x347930, _0x27e54a, _0x7d0a2a);
  }
  function _0x5de3b8(_0x1e064e, _0x48da68) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    try {
      var _0x22b8ab = _0x4093a3["audioInstances"][_0x1e064e];
      _0x22b8ab["setVolume"](_0x48da68);
    } catch (_0x335854) {
      console["error"]("JS_Sound_SetVolume(channel=" + _0x1e064e + ", volume=" + _0x48da68 + ") threw an exception: " + _0x335854);
    }
  }
  function _0x4e207f(_0x57eacf, _0x5954a0) {
    if (_0x4093a3["audioWebEnabled"] == 0) return;
    var _0x4ee3c7 = _0x4093a3["audioInstances"][_0x57eacf];
    _0x4ee3c7["stop"](_0x5954a0);
  }
  function _0x59a0b9(_0x3c339b, _0x1c2915) {
    var _0x3094e9 = _0x3d01d3["SystemInfo"]["browser"];
    if (_0x3c339b) _0xf36afc(_0x3094e9, _0x3c339b, _0x1c2915);
    return _0x2c1249(_0x3094e9);
  }
  function _0x5008c8(_0xfa9f8, _0x1a71be) {
    var _0x1a42eb = _0x3d01d3["SystemInfo"]["browserVersion"];
    if (_0xfa9f8) _0xf36afc(_0x1a42eb, _0xfa9f8, _0x1a71be);
    return _0x2c1249(_0x1a42eb);
  }
  function _0x6cacba(_0x38583d, _0x423985, _0x4860cf) {
    var _0x1c8df6 = _0x5a9382(_0x38583d), _0x1ead61 = _0x1c8df6 == "#canvas" ? _0x3d01d3["canvas"] : document["querySelector"](_0x1c8df6), _0x6ca1d8 = 0, _0x48758a = 0;
    if (_0x1ead61) {
      var _0x461bcc = _0x1ead61["getBoundingClientRect"]();
      _0x6ca1d8 = _0x461bcc["width"], _0x48758a = _0x461bcc["height"];
    }
    _0x14c82b[_0x423985 >> 3] = _0x6ca1d8, _0x14c82b[_0x4860cf >> 3] = _0x48758a;
  }
  function _0x1960d0(_0x37a5ed, _0x36ed49) {
    if (_0x37a5ed) _0xf36afc("https://gamea.azgame.io/city-brawl/", _0x37a5ed, _0x36ed49);
    return _0x2c1249("https://gamea.azgame.io/city-brawl/");
  }
  function _0x2b77e9(_0x168afc, _0x23b2b3) {
    var _0x271478 = _0x3d01d3["SystemInfo"]["gpu"];
    if (_0x168afc) _0xf36afc(_0x271478, _0x168afc, _0x23b2b3);
    return _0x2c1249(_0x271478);
  }
  function _0x50705e(_0x1cb893, _0x636c4d) {
    var _0xcd9fee = _0x3d01d3["SystemInfo"]["language"];
    if (_0x1cb893) _0xf36afc(_0xcd9fee, _0x1cb893, _0x636c4d);
    return _0x2c1249(_0xcd9fee);
  }
  function _0x1c7223() {
    return _0x3d01d3["matchWebGLToCanvasSize"] || _0x3d01d3["matchWebGLToCanvasSize"] === undefined;
  }
  function _0x145af0() {
    return _0x1c2f04["length"] / (1024 * 1024);
  }
  function _0x2b53e0(_0x36f3da, _0x237181) {
    var _0x4d1df4 = _0x3d01d3["SystemInfo"]["os"] + " " + _0x3d01d3["SystemInfo"]["osVersion"];
    if (_0x36f3da) _0xf36afc(_0x4d1df4, _0x36f3da, _0x237181);
    return _0x2c1249(_0x4d1df4);
  }
  function _0x439667() {
    return _0x3d01d3["matchWebGLToCanvasSize"] == ![] ? 1 : _0x3d01d3["devicePixelRatio"] || window["devicePixelRatio"] || 1;
  }
  function _0x24745b(_0x1bf217, _0x453eaa) {
    _0x14c82b[_0x1bf217 >> 3] = _0x3d01d3["SystemInfo"]["width"], _0x14c82b[_0x453eaa >> 3] = _0x3d01d3["SystemInfo"]["height"];
  }
  function _0x14893e() {
    var _0x5701ba = _0x499cc5["getExtension"]("WEBGL_compressed_texture_astc");
    if (_0x5701ba && _0x5701ba["getSupportedProfiles"]) return _0x5701ba["getSupportedProfiles"]()["includes"]("hdr");
    return ![];
  }
  function _0x3bce65() {
    return _0x3d01d3["SystemInfo"]["hasCursorLock"];
  }
  function _0x4de6e0() {
    return _0x3d01d3["SystemInfo"]["hasFullscreen"];
  }
  function _0x408697() {
    return _0x3d01d3["SystemInfo"]["hasWebGL"];
  }
  function _0x35f4a6() {
    return _0x3d01d3["SystemInfo"]["mobile"];
  }
  function _0x31eb4b() {
    return !!_0x3d01d3["shouldQuit"];
  }
  var _0x56165e = {requests: {}, responses: {}, abortControllers: {}, timer: {}, nextRequestId: 1};
  function _0x3d3983(_0x725134) {
    var _0xf3f97f = _0x56165e["abortControllers"][_0x725134];
    if (!_0xf3f97f || _0xf3f97f["signal"]["aborted"]) return;
    _0xf3f97f["abort"]();
  }
  function _0x580c1d(_0x38d82, _0x2282c9) {
    var _0x31d972 = _0x5a9382(_0x38d82), _0x170e97 = _0x5a9382(_0x2282c9), _0x5e8667 = new AbortController, _0x5af879 = {url: _0x31d972, init: {method: _0x170e97, signal: _0x5e8667["signal"], headers: {}, enableStreamingDownload: !![]}, tempBuffer: null, tempBufferSize: 0};
    return _0x56165e["abortControllers"][_0x56165e["nextRequestId"]] = _0x5e8667, _0x56165e["requests"][_0x56165e["nextRequestId"]] = _0x5af879, _0x56165e["nextRequestId"]++;
  }
  function _0x3c473b(_0x4b0246) {
    var _0x24ee5f = _0x56165e["responses"][_0x4b0246];
    if (!_0x24ee5f) return "";
    if (_0x24ee5f["headerString"]) return _0x24ee5f["headerString"];
    var _0x3fea45 = "", _0xaae93 = _0x24ee5f["headers"]["entries"]();
    for (var _0x249a8e = _0xaae93["next"](); !_0x249a8e["done"]; _0x249a8e = _0xaae93["next"]()) {
      _0x3fea45 += _0x249a8e["value"][0] + ": " + _0x249a8e["value"][1] + "\r\n";
    }
    return _0x24ee5f["headerString"] = _0x3fea45, _0x3fea45;
  }
  function _0x2f5c7c(_0x277db2, _0x80b1b1, _0x270ec9, _0x290573, _0x5651b1) {
    var _0x3ddf9b = _0x56165e["responses"][_0x277db2];
    if (!_0x3ddf9b) {
      _0xf36afc("", _0x80b1b1, _0x270ec9), _0xf36afc("", _0x290573, _0x5651b1);
      return;
    }
    if (_0x80b1b1) {
      var _0x5877b8 = _0x3c473b(_0x277db2);
      _0xf36afc(_0x5877b8, _0x80b1b1, _0x270ec9);
    }
    _0x290573 && _0xf36afc(_0x3ddf9b["url"], _0x290573, _0x5651b1);
  }
  function _0x354d03(_0x3beb3, _0x1a81e3) {
    var _0x329398 = _0x56165e["responses"][_0x3beb3];
    if (!_0x329398) {
      _0x9bfde5[_0x1a81e3 >> 2] = 0, _0x9bfde5[(_0x1a81e3 >> 2) + 1] = 0;
      return;
    }
    var _0x4fad65 = _0x3c473b(_0x3beb3);
    _0x9bfde5[_0x1a81e3 >> 2] = _0x2c1249(_0x4fad65), _0x9bfde5[(_0x1a81e3 >> 2) + 1] = _0x2c1249(_0x329398["url"]);
  }
  function _0xea3396(_0x262e52) {
    _0x56165e["timer"][_0x262e52] && clearTimeout(_0x56165e["timer"][_0x262e52]), delete _0x56165e["requests"][_0x262e52], delete _0x56165e["responses"][_0x262e52], delete _0x56165e["abortControllers"][_0x262e52], delete _0x56165e["timer"][_0x262e52];
  }
  function _0x535ac8(_0x6ee9b3, _0x3496c4, _0x556a3e, _0x522e65, _0x30276c, _0x1cb64f) {
    var _0x1a5a6d = _0x56165e["requests"][_0x6ee9b3], _0x124e18 = _0x56165e["abortControllers"][_0x6ee9b3];
    function _0x5da529(_0x1ae3d7) {
      if (!_0x1a5a6d["tempBuffer"]) {
        const _0x33c1a3 = Math["max"](_0x1ae3d7, 1024);
        _0x1a5a6d["tempBuffer"] = _0x499029(_0x33c1a3), _0x1a5a6d["tempBufferSize"] = _0x33c1a3;
      }
      return _0x1a5a6d["tempBufferSize"] < _0x1ae3d7 && (_0x3426bf(_0x1a5a6d["tempBuffer"]), _0x1a5a6d["tempBuffer"] = _0x499029(_0x1ae3d7), _0x1a5a6d["tempBufferSize"] = _0x1ae3d7), _0x1a5a6d["tempBuffer"];
    }
    function _0x1a3738() {
      _0x56165e["timer"][_0x6ee9b3] && (clearTimeout(_0x56165e["timer"][_0x6ee9b3]), delete _0x56165e["timer"][_0x6ee9b3]);
    }
    function _0x463a1a(_0x28967c, _0x3ff3ce) {
      _0x1a3738();
      if (!_0x30276c) return;
      var _0x44bdf9 = 0;
      if (_0x1a5a6d["init"]["enableStreamingDownload"]) _0x3b8595("viiiiii", _0x30276c, [_0x522e65, _0x28967c["status"], 0, _0x3ff3ce["length"], 0, _0x44bdf9]); else {
        if (_0x3ff3ce["length"] != 0) {
          var _0x519363 = _0x499029(_0x3ff3ce["length"]);
          _0x1c2f04["set"](_0x3ff3ce, _0x519363), _0x3b8595("viiiiii", _0x30276c, [_0x522e65, _0x28967c["status"], _0x519363, _0x3ff3ce["length"], 0, _0x44bdf9]);
        } else _0x3b8595("viiiiii", _0x30276c, [_0x522e65, _0x28967c["status"], 0, 0, 0, _0x44bdf9]);
      }
      _0x1a5a6d["tempBuffer"] && _0x3426bf(_0x1a5a6d["tempBuffer"]);
    }
    function _0x42a30e(_0x1eae51, _0x41b8ae) {
      _0x1a3738();
      if (!_0x30276c) return;
      var _0x14d182 = _0x2c1249(_0x1eae51) + 1, _0x179fe0 = _0x499029(_0x14d182);
      _0xf36afc(_0x1eae51, _0x179fe0, _0x14d182), _0x3b8595("viiiiii", _0x30276c, [_0x522e65, 500, 0, 0, _0x179fe0, _0x41b8ae]), _0x3426bf(_0x179fe0), _0x1a5a6d["tempBuffer"] && _0x3426bf(_0x1a5a6d["tempBuffer"]);
    }
    function _0x217d7c(_0x1af1e2) {
      if (!_0x1cb64f || !_0x1af1e2["lengthComputable"]) return;
      var _0xeb6447 = _0x1af1e2["response"];
      _0x56165e["responses"][_0x6ee9b3] = _0xeb6447;
      if (_0x1af1e2["chunk"]) {
        var _0x14d806 = _0x5da529(_0x1af1e2["chunk"]["length"]);
        _0x1c2f04["set"](_0x1af1e2["chunk"], _0x14d806), _0x3b8595("viiiiii", _0x1cb64f, [_0x522e65, _0xeb6447["status"], _0x1af1e2["loaded"], _0x1af1e2["total"], _0x14d806, _0x1af1e2["chunk"]["length"]]);
      } else _0x3b8595("viiiiii", _0x1cb64f, [_0x522e65, _0xeb6447["status"], _0x1af1e2["loaded"], _0x1af1e2["total"], 0, 0]);
    }
    try {
      if (_0x556a3e > 0) {
        var _0x54d949 = _0x1c2f04["subarray"](_0x3496c4, _0x3496c4 + _0x556a3e);
        _0x1a5a6d["init"]["body"] = new Blob([_0x54d949]);
      }
      _0x1a5a6d["timeout"] && (_0x56165e["timer"][_0x6ee9b3] = setTimeout(function () {
        _0x1a5a6d["isTimedOut"] = !![], _0x124e18["abort"]();
      }, _0x1a5a6d["timeout"]));
      var _0x1eca0f = _0x3d01d3["fetchWithProgress"];
      _0x1a5a6d["init"]["onProgress"] = _0x217d7c, _0x3d01d3["companyName"] && _0x3d01d3["productName"] && _0x3d01d3["cachedFetch"] && (_0x1eca0f = _0x3d01d3["cachedFetch"], _0x1a5a6d["init"]["companyName"] = _0x3d01d3["companyName"], _0x1a5a6d["init"]["productName"] = _0x3d01d3["productName"], _0x1a5a6d["control"] = _0x3d01d3["cacheControl"](_0x1a5a6d["url"])), _0x1eca0f(_0x1a5a6d["url"], _0x1a5a6d["init"])["then"](function (_0x2d26cb) {
        _0x56165e["responses"][_0x6ee9b3] = _0x2d26cb, _0x463a1a(_0x2d26cb, _0x2d26cb["parsedBody"]);
      })["catch"](function (_0x5131ab) {
        var _0x47d69e = 2, _0x39c2c1 = 17, _0x28c6ae = 14;
        if (_0x1a5a6d["isTimedOut"]) _0x42a30e("Connection timed out.", _0x28c6ae); else _0x124e18["signal"]["aborted"] ? _0x42a30e("Aborted.", _0x39c2c1) : _0x42a30e(_0x5131ab["message"], _0x47d69e);
      });
    } catch (_0x24ec3d) {
      var _0x7f6a39 = 2;
      _0x42a30e(_0x24ec3d["message"], _0x7f6a39);
    }
  }
  function _0x52a0a9(_0x475ee3, _0x5b0dd9) {
    var _0x3dd01c = _0x56165e["requests"][_0x475ee3];
    if (!_0x3dd01c) return;
    _0x3dd01c["init"]["redirect"] = _0x5b0dd9 === 0 ? "error" : "follow";
  }
  function _0x26fb0d(_0x54d4ba, _0x4ed0be, _0x2d9841) {
    var _0x5c4603 = _0x56165e["requests"][_0x54d4ba];
    if (!_0x5c4603) return;
    var _0x23f0e5 = _0x5a9382(_0x4ed0be), _0x227359 = _0x5a9382(_0x2d9841);
    _0x5c4603["init"]["headers"][_0x23f0e5] = _0x227359;
  }
  function _0x12a816(_0x340e69, _0x3b3a20) {
    var _0x54d3e1 = _0x56165e["requests"][_0x340e69];
    if (!_0x54d3e1) return;
    _0x54d3e1["timeout"] = _0x3b3a20;
  }
  function _0x37b947(_0xaaa29a, _0x4b7965, _0x4bd2d4, _0x291bee) {
    var _0x1a2be8 = _0x5a9382(_0xaaa29a), _0x4c72f = _0x5a9382(_0x4b7965), _0x63ba5c = _0x5a9382(_0x4bd2d4), _0x2b7fac = _0x5a9382(_0x291bee);
    try {
      firebase["database"]()["ref"](_0x1a2be8)["on"]("child_added", function (_0x357640) {
        window["unityInstance"]["SendMessage"](_0x4c72f, _0x63ba5c, JSON["stringify"](_0x357640["val"]()));
      });
    } catch (_0x4da37a) {
      window["unityInstance"]["SendMessage"](_0x4c72f, _0x2b7fac, JSON["stringify"](_0x4da37a, Object["getOwnPropertyNames"](_0x4da37a)));
    }
  }
  function _0x5153dd(_0x319cbe, _0x1d3cd6, _0x4f862c, _0x21703c) {
    var _0x12395d = _0x5a9382(_0x319cbe), _0x1f0c4b = _0x5a9382(_0x1d3cd6), _0x9ab294 = _0x5a9382(_0x4f862c), _0x58c583 = _0x5a9382(_0x21703c);
    try {
      firebase["database"]()["ref"](_0x12395d)["on"]("child_changed", function (_0x4a9953) {
        window["unityInstance"]["SendMessage"](_0x1f0c4b, _0x9ab294, JSON["stringify"](_0x4a9953["val"]()));
      });
    } catch (_0x3fbd94) {
      window["unityInstance"]["SendMessage"](_0x1f0c4b, _0x58c583, JSON["stringify"](_0x3fbd94, Object["getOwnPropertyNames"](_0x3fbd94)));
    }
  }
  function _0x3bd3df(_0x598228, _0x325f56, _0x2cfded, _0x450302) {
    var _0x1b6de0 = _0x5a9382(_0x598228), _0x1cda1b = _0x5a9382(_0x325f56), _0x1daca1 = _0x5a9382(_0x2cfded), _0x579f1b = _0x5a9382(_0x450302);
    try {
      firebase["database"]()["ref"](_0x1b6de0)["on"]("child_removed", function (_0x5076b1) {
        window["unityInstance"]["SendMessage"](_0x1cda1b, _0x1daca1, JSON["stringify"](_0x5076b1["val"]()));
      });
    } catch (_0x5845d6) {
      window["unityInstance"]["SendMessage"](_0x1cda1b, _0x579f1b, JSON["stringify"](_0x5845d6, Object["getOwnPropertyNames"](_0x5845d6)));
    }
  }
  function _0x31dea1(_0x4535d5, _0x274cb0, _0x59df61, _0x4846a2, _0x49f657) {
    var _0x1efdc6 = _0x5a9382(_0x4535d5), _0x1b3ae1 = _0x5a9382(_0x59df61), _0x5706b0 = _0x5a9382(_0x4846a2), _0xef59d7 = _0x5a9382(_0x49f657);
    try {
      if (typeof firestorelisteners === "undefined") firestorelisteners = {};
      this["firestorelisteners"][_0x1efdc6 + "/collection/"] = firebase["firestore"]()["collection"](_0x1efdc6)["onSnapshot"]({includeMetadataChanges: _0x274cb0 == 1}, function (_0x5c6b9d) {
        var _0x1afcbe = {};
        _0x5c6b9d["forEach"](function (_0x3ea91c) {
          _0x1afcbe[_0x3ea91c["id"]] = _0x3ea91c["data"]();
        }), window["unityInstance"]["SendMessage"](_0x1b3ae1, _0x5706b0, JSON["stringify"](_0x1afcbe));
      }, function (_0x25e44e) {
        window["unityInstance"]["SendMessage"](_0x1b3ae1, _0xef59d7, JSON["stringify"](_0x25e44e, Object["getOwnPropertyNames"](_0x25e44e)));
      });
    } catch (_0x4afa52) {
      window["unityInstance"]["SendMessage"](_0x1b3ae1, _0xef59d7, JSON["stringify"](_0x4afa52, Object["getOwnPropertyNames"](_0x4afa52)));
    }
  }
  function _0x2226ea(_0x167e99, _0x2264a9, _0x3aa104, _0x19f1b9, _0x3fbd8b, _0x364026) {
    var _0x3d7650 = _0x5a9382(_0x167e99), _0x8d77fa = _0x5a9382(_0x2264a9), _0x254cc2 = _0x5a9382(_0x19f1b9), _0x4a96c0 = _0x5a9382(_0x3fbd8b), _0x24556e = _0x5a9382(_0x364026);
    try {
      if (typeof firestorelisteners === "undefined") firestorelisteners = {};
      this["firestorelisteners"][_0x3d7650 + "/" + _0x8d77fa] = firebase["firestore"]()["collection"](_0x3d7650)["doc"](_0x8d77fa)["onSnapshot"]({includeMetadataChanges: _0x3aa104 == 1}, function (_0x5aa0e0) {
        window["unityInstance"]["SendMessage"](_0x254cc2, _0x4a96c0, JSON["stringify"](_0x5aa0e0["data"]()));
      }, function (_0x2ab12e) {
        window["unityInstance"]["SendMessage"](_0x254cc2, _0x24556e, JSON["stringify"](_0x2ab12e, Object["getOwnPropertyNames"](_0x2ab12e)));
      });
    } catch (_0x428654) {
      window["unityInstance"]["SendMessage"](_0x254cc2, _0x24556e, JSON["stringify"](_0x428654, Object["getOwnPropertyNames"](_0x428654)));
    }
  }
  function _0x1441fe(_0x2c2959, _0x4648b8, _0xd2fcd8, _0x5ba655) {
    var _0x25f2cf = _0x5a9382(_0x2c2959), _0x21967a = _0x5a9382(_0x4648b8), _0x53ab1f = _0x5a9382(_0xd2fcd8), _0x9f3ae7 = _0x5a9382(_0x5ba655);
    try {
      firebase["database"]()["ref"](_0x25f2cf)["on"]("value", function (_0x3811d9) {
        window["unityInstance"]["SendMessage"](_0x21967a, _0x53ab1f, JSON["stringify"](_0x3811d9["val"]()));
      });
    } catch (_0xdb3bee) {
      window["unityInstance"]["SendMessage"](_0x21967a, _0x9f3ae7, JSON["stringify"](_0xdb3bee, Object["getOwnPropertyNames"](_0xdb3bee)));
    }
  }
  function _0x131552(_0x1fba98) {
    var _0x272326 = _0x5a9382(_0x1fba98);
    firebaseLogEvent(_0x272326);
  }
  function _0xa7a2da(_0xe2074b, _0x47dd87) {
    var _0x1dd334 = _0x5a9382(_0xe2074b), _0x541dcc = JSON["parse"](_0x5a9382(_0x47dd87));
    firebaseLogEventParameter(_0x1dd334, _0x541dcc);
  }
  function _0x233056(_0x1bf61b, _0x2f0ee5, _0x59e456, _0x481910, _0x500dc0) {
    var _0x33272e = _0x5a9382(_0x1bf61b), _0x4e851b = _0x5a9382(_0x59e456), _0x34d3d3 = _0x5a9382(_0x481910), _0x1476e0 = _0x5a9382(_0x500dc0);
    try {
      firebase["database"]()["ref"](_0x33272e)["transaction"](function (_0x10a9d6) {
        return !isNaN(_0x10a9d6) ? _0x10a9d6 + _0x2f0ee5 : _0x2f0ee5;
      })["then"](function (_0x3493a3) {
        window["unityInstance"]["SendMessage"](_0x4e851b, _0x34d3d3, "Success: transaction run in " + _0x33272e);
      });
    } catch (_0x48fa51) {
      window["unityInstance"]["SendMessage"](_0x4e851b, _0x1476e0, JSON["stringify"](_0x48fa51, Object["getOwnPropertyNames"](_0x48fa51)));
    }
  }
  function _0x200c7b(_0x15c205, _0x41cf6d, _0x4a4e85) {
    var _0xbc57e0 = _0x5a9382(_0x15c205), _0x3f0829 = _0x5a9382(_0x41cf6d), _0x420d79 = _0x5a9382(_0x4a4e85);
    firebase["auth"]()["onAuthStateChanged"](function (_0x52701a) {
      _0x52701a ? window["unityInstance"]["SendMessage"](_0xbc57e0, _0x3f0829, JSON["stringify"](_0x52701a)) : window["unityInstance"]["SendMessage"](_0xbc57e0, _0x420d79, "User signed out");
    });
  }
  function _0x2cf662(_0x570d86) {
    window["wgUnityInstance"] = _0x3d01d3;
    try {
      window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: WeeGoo InGame Ad, pinging."), window[preroll["config"]["loaderObjectName"]]["ping"](_0x570d86);
    } catch (_0x2daa80) {
      console["log"]("WGSDK: No production WGSDK resources found, loading development resources.");
      var _0x38aa8d = document["createElement"]("script");
      _0x38aa8d["addEventListener"]("load", function (_0x51697d) {
        var _0x1267a7 = document["createElement"]("script");
        _0x1267a7["addEventListener"]("load", function (_0x1ed778) {
          console["log"]("WGSDK: Development resources loaded."), _0x1f050f(_0x570d86, !![]);
        }["bind"](this)), document["getElementsByTagName"]("head")[0]["appendChild"](_0x1267a7), _0x1267a7["src"] = window["GMSOFT_ADS_INFO"]["wgLibrary"];
      }["bind"](this)), document["getElementsByTagName"]("head")[0]["appendChild"](_0x38aa8d), _0x38aa8d["src"] = window["GMSOFT_ADS_INFO"]["wgConf"];
    }
  }
  function _0x1f050f(_0x18cf8b, _0x4af21c) {
    var _0x4d994f;
    _0x4af21c === !![] ? _0x4d994f = _0x18cf8b : _0x4d994f = _0x5a9382(_0x18cf8b), setTimeout(function () {
      _0x2cf662(_0x4d994f);
    }, 250);
  }
  function _0x504b3b(_0x897398, _0x38c95e, _0x247075, _0x3155c9, _0x3b4267) {
    var _0x1b6e91 = _0x5a9382(_0x897398), _0x3f5656 = _0x5a9382(_0x38c95e), _0xc338eb = _0x5a9382(_0x247075), _0xd8f77e = _0x5a9382(_0x3155c9), _0x5c6757 = _0x5a9382(_0x3b4267);
    try {
      firebase["database"]()["ref"](_0x1b6e91)["set"](JSON["parse"](_0x3f5656))["then"](function (_0x311277) {
        window["unityInstance"]["SendMessage"](_0xc338eb, _0xd8f77e, "Success: " + _0x3f5656 + " was posted to " + _0x1b6e91);
      });
    } catch (_0x49f4a8) {
      window["unityInstance"]["SendMessage"](_0xc338eb, _0x5c6757, JSON["stringify"](_0x49f4a8, Object["getOwnPropertyNames"](_0x49f4a8)));
    }
  }
  function _0x3a5000(_0x1fdf05, _0x3dfa0f, _0xb85a7e, _0x3c2f01, _0x416bad) {
    var _0x5dc792 = _0x5a9382(_0x1fdf05), _0x31a79e = _0x5a9382(_0x3dfa0f), _0x546cba = _0x5a9382(_0xb85a7e), _0x25aaed = _0x5a9382(_0x3c2f01), _0x2be767 = _0x5a9382(_0x416bad);
    try {
      firebase["database"]()["ref"](_0x5dc792)["push"]()["set"](JSON["parse"](_0x31a79e))["then"](function (_0x1bc80b) {
        window["unityInstance"]["SendMessage"](_0x546cba, _0x25aaed, "Success: " + _0x31a79e + " was pushed to " + _0x5dc792);
      });
    } catch (_0x505957) {
      window["unityInstance"]["SendMessage"](_0x546cba, _0x2be767, JSON["stringify"](_0x505957, Object["getOwnPropertyNames"](_0x505957)));
    }
  }
  function _0x32850b() {
    try {
      window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Refetching reward ad."), window[preroll["config"]["loaderObjectName"]]["rewarded"]["initSlot"]["call"](window[preroll["config"]["loaderObjectName"]]);
    } catch (_0x3a2315) {
      console["log"]("No WeeGooAFG implementation found!");
    }
  }
  function _0x75c409() {
    try {
      window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Game controls registered."), window[window["preroll"]["config"]["loaderObjectName"]]["registerGameControls"](_0x3d01d3);
    } catch (_0x14bac1) {
      console["log"]("WGSDK: Can not register game controls."), setTimeout(function () {
        _0x75c409();
      }, 250);
    }
  }
  function _0x6b3d25() {
    try {
      window[preroll["config"]["loaderObjectName"]]["log"]("WGSDK: Reward callbacks registered."), window[window["preroll"]["config"]["loaderObjectName"]]["registerRewardCallbacks"]({onReady: "OnReadyMethod", onSuccess: "OnSuccessMethod", onFail: "OnFailMethod"});
    } catch (_0x440b4e) {
      console["log"]("WGSDK: Can not register reward ad callbacks."), _0x4119b6();
    }
  }
  function _0x4119b6() {
    setTimeout(function () {
      _0x6b3d25();
    }, 250);
  }
  function _0x27c74a(_0x2fb6ee, _0x2e157f, _0x543e1f, _0x3e03fa, _0x111f42, _0x2499ed, _0x58fc6a) {
    var _0x2de335 = _0x5a9382(_0x2fb6ee), _0x4973e4 = _0x5a9382(_0x2e157f), _0xeb3194 = _0x5a9382(_0x543e1f), _0x5b0389 = _0x5a9382(_0x3e03fa), _0x4bd826 = _0x5a9382(_0x111f42), _0x40f953 = _0x5a9382(_0x2499ed), _0x1f1211 = _0x5a9382(_0x58fc6a);
    try {
      var _0x3e03fa = {};
      _0x3e03fa[_0xeb3194] = firebase["firestore"]["FieldValue"]["arrayRemove"](JSON["parse"](_0x5b0389)), firebase["firestore"]()["collection"](_0x2de335)["doc"](_0x4973e4)["update"](_0x3e03fa)["then"](function () {
        window["unityInstance"]["SendMessage"](_0x4bd826, _0x40f953, "Success: element " + _0x5b0389 + " was removed in " + _0xeb3194);
      })["catch"](function (_0x5721cb) {
        window["unityInstance"]["SendMessage"](_0x4bd826, _0x1f1211, JSON["stringify"](_0x5721cb, Object["getOwnPropertyNames"](_0x5721cb)));
      });
    } catch (_0x5579b0) {
      window["unityInstance"]["SendMessage"](_0x4bd826, _0x1f1211, JSON["stringify"](_0x5579b0, Object["getOwnPropertyNames"](_0x5579b0)));
    }
  }
  function _0x55a4e8(_0x3dc49d) {
    var _0x1d6d0f = window["unityStringify"](_0x3dc49d), _0x4be82a = {adStarted: function () {
      window["UnitySDK"]["unlockPointer"](), _0x22ac38("CrazySDKSingleton", "JSLibCallback_AdStarted");
    }, adFinished: function () {
      window["UnitySDK"]["lockPointer"](), _0x22ac38("CrazySDKSingleton", "JSLibCallback_AdFinished");
    }, adError: function (_0x2fcafa) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_AdError", JSON["stringify"](_0x2fcafa));
    }};
    window["CrazyGames"]["SDK"]["ad"]["requestAd"](_0x1d6d0f, _0x4be82a)["catch"](function (_0x25d29d) {
      window["UnitySDK"]["logError"]("Error while requesting ad:", _0x25d29d), _0x22ac38("CrazySDKSingleton", "JSLibCallback_AdError", JSON["stringify"]({code: "unknown", message: _0x25d29d["message"] || "Unknown error"}));
    });
  }
  function _0x435cd4(_0x487d7b) {
    var _0x3ab03f = JSON["parse"](window["unityStringify"](_0x487d7b));
    try {
      window["CrazyGames"]["SDK"]["banner"]["requestOverlayBanners"](_0x3ab03f, function (_0x36246b, _0x4e6605, _0x529008) {});
    } catch (_0x3367ef) {
      window["UnitySDK"]["logError"]("Error while requesting banners:", _0x3367ef);
    }
  }
  function _0x589939(_0x5eeb2e) {
    var _0x40178b = JSON["parse"](window["unityStringify"](_0x5eeb2e)), _0x3cedfd = "";
    try {
      _0x3cedfd = window["CrazyGames"]["SDK"]["game"]["inviteLink"](_0x40178b);
    } catch (_0x59196b) {
      window["UnitySDK"]["logError"]("Error while requesting invite url:", _0x59196b);
    }
    var _0x3704c9 = _0x2c1249(_0x3cedfd) + 1, _0x4ad2ef = _0x499029(_0x3704c9);
    return _0xf36afc(_0x3cedfd, _0x4ad2ef, _0x3704c9), _0x4ad2ef;
  }
  function _0x19114d(_0x3989c2) {
    _0x3989c2 = _0x5a9382(_0x3989c2), window["GD_OPTIONS"] = {debug: ![], gameId: _0x3989c2, onEvent: function (_0x33d45d) {
      switch (_0x33d45d["name"]) {
        case "SDK_GAME_START":
          _0x22ac38("GameDistribution", "ResumeGameCallback");
          break;
        case "SDK_GAME_PAUSE":
          _0x22ac38("GameDistribution", "PauseGameCallback");
          break;
        case "SDK_REWARDED_WATCH_COMPLETE":
          _0x22ac38("GameDistribution", "RewardedCompleteCallback");
          break;
        case "SDK_ERROR":
          break;
        default:
          _0x22ac38("GameDistribution", "EventCallback", _0x33d45d["name"]);
      }
    }}, function (_0x42fb44, _0x2fa52b, _0x3ee602) {
      var _0x1df7df, _0x402763 = _0x42fb44["getElementsByTagName"](_0x2fa52b)[0];
      if (_0x42fb44["getElementById"](_0x3ee602)) return;
      _0x1df7df = _0x42fb44["createElement"](_0x2fa52b), _0x1df7df["id"] = _0x3ee602, _0x1df7df["src"] = "//html5.api.gamedistribution.com/main.min.js", _0x402763["parentNode"]["insertBefore"](_0x1df7df, _0x402763);
    }(document, "script", "gamedistribution-jssdk");
  }
  function _0x2fd30b() {
    typeof gdsdk !== "undefined" && typeof gdsdk["preloadAd"] !== "undefined" && gdsdk["preloadAd"](gdsdk["AdType"]["Rewarded"])["then"](function (_0x234685) {
      _0x22ac38("GameDistribution", "PreloadRewardedVideoCallback", 1);
    })["catch"](function (_0x13f53a) {
      _0x22ac38("GameDistribution", "PreloadRewardedVideoCallback", 0);
    });
  }
  function _0x5f098f(_0x6317c4) {
    _0x6317c4 = _0x5a9382(_0x6317c4), typeof gdsdk !== "undefined" && typeof gdsdk["sendEvent"] !== "undefined" && typeof _0x6317c4 !== "undefined" && gdsdk["sendEvent"](_0x6317c4)["then"](function (_0x1f614e) {
      console["log"]("Game event post message sent Succesfully...");
    })["catch"](function (_0x508b51) {
      console["log"](_0x508b51["message"]);
    });
  }
  function _0x3c0199(_0x501d11) {
    typeof gdsdk !== "undefined" && typeof gdsdk["showAd"] !== "undefined" && (_0x501d11 = _0x5a9382(_0x501d11) || gdsdk["AdType"]["Interstitial"], gdsdk["showAd"](_0x501d11)["then"](function (_0x5dc3cf) {
      _0x501d11 === gdsdk["AdType"]["Rewarded"] && _0x22ac38("GameDistribution", "RewardedVideoSuccessCallback");
    })["catch"](function (_0x2e0216) {
      _0x501d11 === gdsdk["AdType"]["Rewarded"] && _0x22ac38("GameDistribution", "RewardedVideoFailureCallback");
    }));
  }
  function _0x1a855c(_0x4d2393, _0x415121, _0x2161c6, _0x28ec31, _0x5db7ac, _0xc10f7a) {
    var _0x1b13ae = _0x5a9382(_0x4d2393), _0x4dc578 = _0x5a9382(_0x415121), _0x4003e3 = _0x5a9382(_0x2161c6), _0x4d28c6 = _0x5a9382(_0x28ec31), _0x5d42d9 = _0x5a9382(_0x5db7ac), _0x45fb34 = _0x5a9382(_0xc10f7a);
    try {
      firebase["firestore"]()["collection"](_0x1b13ae)["doc"](_0x4dc578)["set"](JSON["parse"](_0x4003e3))["then"](function () {
        window["unityInstance"]["SendMessage"](_0x4d28c6, _0x5d42d9, "Success: document " + _0x4dc578 + " was set");
      })["catch"](function (_0x3d4bcc) {
        window["unityInstance"]["SendMessage"](_0x4d28c6, _0x45fb34, JSON["stringify"](_0x3d4bcc, Object["getOwnPropertyNames"](_0x3d4bcc)));
      });
    } catch (_0x311750) {
      window["unityInstance"]["SendMessage"](_0x4d28c6, _0x45fb34, JSON["stringify"](_0x311750, Object["getOwnPropertyNames"](_0x311750)));
    }
  }
  function _0x3ef9e1(_0x1efaf6) {
    var _0x2ac372 = JSON["parse"](_0x5a9382(_0x1efaf6));
    firebaseSetUserProperties(_0x2ac372);
  }
  function _0x279b1f() {
    window["CrazyGames"]["SDK"]["user"]["showAccountLinkPrompt"]()["then"](function (_0x24cfa2) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON["stringify"]({linkAccountResponseStr: JSON["stringify"](_0x24cfa2)}));
    })["catch"](function (_0xb1c399) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_ShowAccountLinkPrompt", JSON["stringify"]({errorJson: JSON["stringify"](_0xb1c399)}));
    });
  }
  function _0x59f731() {
    window["CrazyGames"]["SDK"]["user"]["showAuthPrompt"]()["then"](function (_0x19d185) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON["stringify"]({userJson: JSON["stringify"](_0x19d185)}));
    })["catch"](function (_0x51e88e) {
      _0x22ac38("CrazySDKSingleton", "JSLibCallback_ShowAuthPrompt", JSON["stringify"]({errorJson: JSON["stringify"](_0x51e88e)}));
    });
  }
  function _0x6299b5(_0x4241d4) {
    var _0x1c6666 = JSON["parse"](window["unityStringify"](_0x4241d4)), _0x3db052 = "";
    try {
      _0x3db052 = window["CrazyGames"]["SDK"]["game"]["showInviteButton"](_0x1c6666);
    } catch (_0x58d982) {
      window["UnitySDK"]["logError"]("Error while showing invite button:", _0x58d982);
    }
    var _0x53e110 = _0x2c1249(_0x3db052) + 1, _0x30d290 = _0x499029(_0x53e110);
    return _0xf36afc(_0x3db052, _0x30d290, _0x53e110), _0x30d290;
  }
  function _0x4c08a6() {
    window[preroll["config"]["loaderObjectName"]]["showRewardAd"]();
  }
  function _0x1d670a(_0x42e551, _0x51f480, _0x3f39f3) {
    var _0x581ccb = _0x5a9382(_0x42e551), _0x1bf23f = _0x5a9382(_0x51f480), _0x31de91 = _0x5a9382(_0x3f39f3);
    try {
      firebase["auth"]()["signInAnonymously"]()["then"](function (_0x127acc) {
        window["unityInstance"]["SendMessage"](_0x581ccb, _0x1bf23f, "Success: signed up for " + _0x127acc);
      })["catch"](function (_0x26fa41) {
        window["unityInstance"]["SendMessage"](_0x581ccb, _0x31de91, JSON["stringify"](_0x26fa41, Object["getOwnPropertyNames"](_0x26fa41)));
      });
    } catch (_0x23b3d8) {
      window["unityInstance"]["SendMessage"](_0x581ccb, _0x31de91, JSON["stringify"](_0x23b3d8, Object["getOwnPropertyNames"](_0x23b3d8)));
    }
  }
  function _0x530ccc(_0x3a6d13, _0x274652, _0x11ad93, _0x18f15b, _0x4d6078) {
    var _0x101ab9 = _0x5a9382(_0x3a6d13), _0xb9380b = _0x5a9382(_0x274652), _0x1e1596 = _0x5a9382(_0x11ad93), _0x283c81 = _0x5a9382(_0x18f15b), _0x25337e = _0x5a9382(_0x4d6078);
    try {
      firebase["auth"]()["signInWithEmailAndPassword"](_0x101ab9, _0xb9380b)["then"](function (_0x37b932) {
        window["unityInstance"]["SendMessage"](_0x1e1596, _0x283c81, "Success: signed in for " + _0x101ab9);
      })["catch"](function (_0x394269) {
        window["unityInstance"]["SendMessage"](_0x1e1596, _0x25337e, JSON["stringify"](_0x394269, Object["getOwnPropertyNames"](_0x394269)));
      });
    } catch (_0x36df42) {
      window["unityInstance"]["SendMessage"](_0x1e1596, _0x25337e, JSON["stringify"](_0x36df42, Object["getOwnPropertyNames"](_0x36df42)));
    }
  }
  function _0x55fa98(_0x31a57c, _0x37462c, _0x3c5044) {
    var _0x3070d6 = _0x5a9382(_0x31a57c), _0x21d39e = _0x5a9382(_0x37462c), _0x3cefb1 = _0x5a9382(_0x3c5044);
    try {
      var _0x195f37 = new firebase["auth"]["FacebookAuthProvider"];
      firebase["auth"]()["signInWithRedirect"](_0x195f37)["then"](function (_0x1a990b) {
        window["unityInstance"]["SendMessage"](_0x3070d6, _0x21d39e, "Success: signed in with Facebook!");
      })["catch"](function (_0x198abc) {
        window["unityInstance"]["SendMessage"](_0x3070d6, _0x3cefb1, JSON["stringify"](_0x198abc, Object["getOwnPropertyNames"](_0x198abc)));
      });
    } catch (_0xd79086) {
      window["unityInstance"]["SendMessage"](_0x3070d6, _0x3cefb1, JSON["stringify"](_0xd79086, Object["getOwnPropertyNames"](_0xd79086)));
    }
  }
  function _0x3836e7(_0x4dff2f, _0x413a81, _0x12d70e) {
    var _0x2ac41f = _0x5a9382(_0x4dff2f), _0x27d153 = _0x5a9382(_0x413a81), _0x5029f3 = _0x5a9382(_0x12d70e);
    try {
      var _0x36574c = new firebase["auth"]["GoogleAuthProvider"];
      firebase["auth"]()["signInWithRedirect"](_0x36574c)["then"](function (_0xece5a6) {
        window["unityInstance"]["SendMessage"](_0x2ac41f, _0x27d153, "Success: signed in with Google!");
      })["catch"](function (_0x3b91e1) {
        window["unityInstance"]["SendMessage"](_0x2ac41f, _0x5029f3, JSON["stringify"](_0x3b91e1, Object["getOwnPropertyNames"](_0x3b91e1)));
      });
    } catch (_0x22c381) {
      window["unityInstance"]["SendMessage"](_0x2ac41f, _0x5029f3, JSON["stringify"](_0x22c381, Object["getOwnPropertyNames"](_0x22c381)));
    }
  }
  function _0x2a63e7(_0x43b3c9, _0x1a0255, _0x1aa3e6, _0x4488a0) {
    var _0x2f824a = _0x5a9382(_0x43b3c9), _0x91f616 = _0x5a9382(_0x1a0255), _0x4746af = _0x5a9382(_0x1aa3e6), _0x329cca = _0x5a9382(_0x4488a0);
    try {
      firebase["database"]()["ref"](_0x2f824a)["off"]("child_added"), window["unityInstance"]["SendMessage"](_0x91f616, _0x4746af, "Success: listener removed");
    } catch (_0x5f11c9) {
      window["unityInstance"]["SendMessage"](_0x91f616, _0x329cca, JSON["stringify"](_0x5f11c9, Object["getOwnPropertyNames"](_0x5f11c9)));
    }
  }
  function _0x52f5dc(_0x47324f, _0x2b063f, _0x31d247, _0x49e61e) {
    var _0x50abb0 = _0x5a9382(_0x47324f), _0x48138f = _0x5a9382(_0x2b063f), _0x4ffcb6 = _0x5a9382(_0x31d247), _0x53f989 = _0x5a9382(_0x49e61e);
    try {
      firebase["database"]()["ref"](_0x50abb0)["off"]("child_changed"), window["unityInstance"]["SendMessage"](_0x48138f, _0x4ffcb6, "Success: listener removed");
    } catch (_0x20409a) {
      window["unityInstance"]["SendMessage"](_0x48138f, _0x53f989, JSON["stringify"](_0x20409a, Object["getOwnPropertyNames"](_0x20409a)));
    }
  }
  function _0x57dd13(_0x254c9c, _0xb1294b, _0xadbe7b, _0x54fa83) {
    var _0x5c37e = _0x5a9382(_0x254c9c), _0x4469fd = _0x5a9382(_0xb1294b), _0x23920c = _0x5a9382(_0xadbe7b), _0x4961f4 = _0x5a9382(_0x54fa83);
    try {
      firebase["database"]()["ref"](_0x5c37e)["off"]("child_removed"), window["unityInstance"]["SendMessage"](_0x4469fd, _0x23920c, "Success: listener removed");
    } catch (_0x59f3cc) {
      window["unityInstance"]["SendMessage"](_0x4469fd, _0x4961f4, JSON["stringify"](_0x59f3cc, Object["getOwnPropertyNames"](_0x59f3cc)));
    }
  }
  function _0xc9f302(_0x35cff1, _0xb9c306, _0x5538af, _0x468d14) {
    var _0xc64759 = _0x5a9382(_0x35cff1), _0x5d7bf5 = _0x5a9382(_0xb9c306), _0x22aba0 = _0x5a9382(_0x5538af), _0x4fbf6f = _0x5a9382(_0x468d14);
    try {
      if (typeof firestorelisteners === "undefined") firestorelisteners = {};
      this["firestorelisteners"][_0xc64759 + "/collection/"](), window["unityInstance"]["SendMessage"](_0x5d7bf5, _0x22aba0, "Success: listener was removed");
    } catch (_0x19e004) {
      window["unityInstance"]["SendMessage"](_0x5d7bf5, _0x4fbf6f, JSON["stringify"](_0x19e004, Object["getOwnPropertyNames"](_0x19e004)));
    }
  }
  function _0x232a68(_0x1247e0, _0x100ff0, _0x43385a, _0x398862, _0x3d47c7) {
    var _0x180a8b = _0x5a9382(_0x1247e0), _0x25957a = _0x5a9382(_0x100ff0), _0x5cdd85 = _0x5a9382(_0x43385a), _0x539245 = _0x5a9382(_0x398862), _0x63e908 = _0x5a9382(_0x3d47c7);
    try {
      if (typeof firestorelisteners === "undefined") firestorelisteners = {};
      this["firestorelisteners"][_0x180a8b + "/" + _0x25957a](), window["unityInstance"]["SendMessage"](_0x5cdd85, _0x539245, "Success: listener was removed");
    } catch (_0x2e8d05) {
      window["unityInstance"]["SendMessage"](_0x5cdd85, _0x63e908, JSON["stringify"](_0x2e8d05, Object["getOwnPropertyNames"](_0x2e8d05)));
    }
  }
  function _0x47f394(_0x5450c5, _0x2509eb, _0xb59442, _0x232acc) {
    var _0x3314a5 = _0x5a9382(_0x5450c5), _0x49a222 = _0x5a9382(_0x2509eb), _0xda4455 = _0x5a9382(_0xb59442), _0x3e46cd = _0x5a9382(_0x232acc);
    try {
      firebase["database"]()["ref"](_0x3314a5)["off"]("value"), window["unityInstance"]["SendMessage"](_0x49a222, _0xda4455, "Success: listener removed");
    } catch (_0xfd3be5) {
      window["unityInstance"]["SendMessage"](_0x49a222, _0x3e46cd, JSON["stringify"](_0xfd3be5, Object["getOwnPropertyNames"](_0xfd3be5)));
    }
  }
  function _0x69279c() {
    try {
      window["CrazyGames"]["SDK"]["data"]["syncUnityGameData"]();
    } catch (_0x3aad58) {
      window["UnitySDK"]["logError"]("Error while calling syncUnityGameData:", _0x3aad58);
    }
  }
  function _0x54cf93(_0x548870, _0x557b92, _0x528806, _0x149fe9) {
    var _0x239177 = _0x5a9382(_0x548870), _0x523d1f = _0x5a9382(_0x557b92), _0x253341 = _0x5a9382(_0x528806), _0x32d14e = _0x5a9382(_0x149fe9);
    try {
      firebase["database"]()["ref"](_0x239177)["transaction"](function (_0x40cace) {
        return typeof _0x40cace === "boolean" ? !_0x40cace : !![];
      })["then"](function (_0x5aae26) {
        window["unityInstance"]["SendMessage"](_0x523d1f, _0x253341, "Success: transaction run in " + _0x239177);
      });
    } catch (_0x5ec633) {
      window["unityInstance"]["SendMessage"](_0x523d1f, _0x32d14e, JSON["stringify"](_0x5ec633, Object["getOwnPropertyNames"](_0x5ec633)));
    }
  }
  function _0x19db96(_0x428cca, _0x48e67d, _0x21a383, _0x4a4097, _0x553110, _0x183cd6) {
    var _0x237f6b = _0x5a9382(_0x428cca), _0xccf026 = _0x5a9382(_0x48e67d), _0x12ed0d = _0x5a9382(_0x21a383), _0x25d196 = _0x5a9382(_0x4a4097), _0x5b430d = _0x5a9382(_0x553110), _0x182810 = _0x5a9382(_0x183cd6);
    try {
      firebase["firestore"]()["collection"](_0x237f6b)["doc"](_0xccf026)["update"](JSON["parse"](_0x12ed0d))["then"](function () {
        window["unityInstance"]["SendMessage"](_0x25d196, _0x5b430d, "Success: document " + _0xccf026 + " was updated");
      })["catch"](function (_0x2e2fb2) {
        window["unityInstance"]["SendMessage"](_0x25d196, _0x182810, JSON["stringify"](_0x2e2fb2, Object["getOwnPropertyNames"](_0x2e2fb2)));
      });
    } catch (_0x2d4ce8) {
      window["unityInstance"]["SendMessage"](_0x25d196, _0x182810, JSON["stringify"](_0x2d4ce8, Object["getOwnPropertyNames"](_0x2d4ce8)));
    }
  }
  function _0x11e283(_0x5682fd, _0xfd2567, _0x5e9126, _0x44bc92, _0x5c52b3) {
    var _0x4f36e8 = _0x5a9382(_0x5682fd), _0x321ca9 = _0x5a9382(_0xfd2567), _0x160ad9 = _0x5a9382(_0x5e9126), _0x4976c8 = _0x5a9382(_0x44bc92), _0x567a74 = _0x5a9382(_0x5c52b3);
    try {
      firebase["database"]()["ref"](_0x4f36e8)["update"](JSON["parse"](_0x321ca9))["then"](function (_0x28f5f4) {
        window["unityInstance"]["SendMessage"](_0x160ad9, _0x4976c8, "Success: " + _0x321ca9 + " was updated in " + _0x4f36e8);
      });
    } catch (_0x5ad721) {
      window["unityInstance"]["SendMessage"](_0x160ad9, _0x567a74, JSON["stringify"](_0x5ad721, Object["getOwnPropertyNames"](_0x5ad721)));
    }
  }
  function _0x124852(_0x21d2bd, _0x555ff9, _0x1bdbdd, _0x18a170, _0x1cd4b4) {
    var _0x300d58 = _0x5a9382(_0x21d2bd), _0x48c366 = _0x5a9382(_0x555ff9), _0x1fb804 = _0x5a9382(_0x1bdbdd), _0x519ef3 = _0x5a9382(_0x18a170), _0x336c32 = _0x5a9382(_0x1cd4b4);
    try {
      firebase["storage"]()["ref"](_0x300d58)["put"](_0x53811c(_0x48c366))["then"](function (_0x5bb2f1) {
        window["unityInstance"]["SendMessage"](_0x1fb804, _0x519ef3, "Success: data was posted to " + _0x300d58);
      });
    } catch (_0x1f9889) {
      window["unityInstance"]["SendMessage"](_0x1fb804, _0x336c32, JSON["stringify"](_0x1f9889, Object["getOwnPropertyNames"](_0x1f9889)));
    }
    function _0x53811c(_0x130fae) {
      var _0x14e66e = window["atob"](_0x130fae), _0x19e8ff = _0x14e66e["length"], _0x4b95cd = new Uint8Array(_0x19e8ff);
      for (var _0x3f18d9 = 0; _0x3f18d9 < _0x19e8ff; _0x3f18d9++) {
        _0x4b95cd[_0x3f18d9] = _0x14e66e["charCodeAt"](_0x3f18d9);
      }
      return _0x4b95cd["buffer"];
    }
  }
  var _0x17c34b = {DESTRUCTOR_OFFSET: 0, REFCOUNT_OFFSET: 4, TYPE_OFFSET: 8, CAUGHT_OFFSET: 12, RETHROWN_OFFSET: 13, SIZE: 16};
  function _0x396412(_0x253cf3) {
    return _0x499029(_0x253cf3 + _0x17c34b["SIZE"]) + _0x17c34b["SIZE"];
  }
  function _0xdf30ad(_0x139d5e) {
    this["excPtr"] = _0x139d5e, this["ptr"] = _0x139d5e - _0x17c34b["SIZE"], this["set_type"] = function (_0x323f7d) {
      _0x5f4233[this["ptr"] + _0x17c34b["TYPE_OFFSET"] >> 2] = _0x323f7d;
    }, this["get_type"] = function () {
      return _0x5f4233[this["ptr"] + _0x17c34b["TYPE_OFFSET"] >> 2];
    }, this["set_destructor"] = function (_0x5a9687) {
      _0x5f4233[this["ptr"] + _0x17c34b["DESTRUCTOR_OFFSET"] >> 2] = _0x5a9687;
    }, this["get_destructor"] = function () {
      return _0x5f4233[this["ptr"] + _0x17c34b["DESTRUCTOR_OFFSET"] >> 2];
    }, this["set_refcount"] = function (_0x3fd7ea) {
      _0x5f4233[this["ptr"] + _0x17c34b["REFCOUNT_OFFSET"] >> 2] = _0x3fd7ea;
    }, this["set_caught"] = function (_0x56a64c) {
      _0x56a64c = _0x56a64c ? 1 : 0, _0x2c8e41[this["ptr"] + _0x17c34b["CAUGHT_OFFSET"] >> 0] = _0x56a64c;
    }, this["get_caught"] = function () {
      return _0x2c8e41[this["ptr"] + _0x17c34b["CAUGHT_OFFSET"] >> 0] != 0;
    }, this["set_rethrown"] = function (_0x2794f7) {
      _0x2794f7 = _0x2794f7 ? 1 : 0, _0x2c8e41[this["ptr"] + _0x17c34b["RETHROWN_OFFSET"] >> 0] = _0x2794f7;
    }, this["get_rethrown"] = function () {
      return _0x2c8e41[this["ptr"] + _0x17c34b["RETHROWN_OFFSET"] >> 0] != 0;
    }, this["init"] = function (_0x2c2d73, _0x4de880) {
      this["set_type"](_0x2c2d73), this["set_destructor"](_0x4de880), this["set_refcount"](0), this["set_caught"](![]), this["set_rethrown"](![]);
    }, this["add_ref"] = function () {
      var _0x4e94ad = _0x5f4233[this["ptr"] + _0x17c34b["REFCOUNT_OFFSET"] >> 2];
      _0x5f4233[this["ptr"] + _0x17c34b["REFCOUNT_OFFSET"] >> 2] = _0x4e94ad + 1;
    }, this["release_ref"] = function () {
      var _0x5435fb = _0x5f4233[this["ptr"] + _0x17c34b["REFCOUNT_OFFSET"] >> 2];
      return _0x5f4233[this["ptr"] + _0x17c34b["REFCOUNT_OFFSET"] >> 2] = _0x5435fb - 1, _0x5435fb === 1;
    };
  }
  function _0x2f7aa6(_0x55ae8d) {
    this["free"] = function () {
      _0x3426bf(this["ptr"]), this["ptr"] = 0;
    }, this["set_base_ptr"] = function (_0x534ed6) {
      _0x5f4233[this["ptr"] >> 2] = _0x534ed6;
    }, this["get_base_ptr"] = function () {
      return _0x5f4233[this["ptr"] >> 2];
    }, this["set_adjusted_ptr"] = function (_0x1a7dac) {
      var _0x1cf261 = 4;
      _0x5f4233[this["ptr"] + _0x1cf261 >> 2] = _0x1a7dac;
    }, this["get_adjusted_ptr"] = function () {
      var _0x608e3f = 4;
      return _0x5f4233[this["ptr"] + _0x608e3f >> 2];
    }, this["get_exception_ptr"] = function () {
      var _0x24c326 = _0x5017af(this["get_exception_info"]()["get_type"]());
      if (_0x24c326) return _0x5f4233[this["get_base_ptr"]() >> 2];
      var _0x2a1f4c = this["get_adjusted_ptr"]();
      if (_0x2a1f4c !== 0) return _0x2a1f4c;
      return this["get_base_ptr"]();
    }, this["get_exception_info"] = function () {
      return new _0xdf30ad(this["get_base_ptr"]());
    }, _0x55ae8d === undefined ? (this["ptr"] = _0x499029(8), this["set_adjusted_ptr"](0)) : this["ptr"] = _0x55ae8d;
  }
  var _0x330f9c = [];
  function _0x1a05e1(_0x176be6) {
    _0x176be6["add_ref"]();
  }
  var _0xa150b2 = 0;
  function _0x249b5c(_0x1f07d7) {
    var _0x577aa9 = new _0x2f7aa6(_0x1f07d7), _0x19f9cb = _0x577aa9["get_exception_info"]();
    return !_0x19f9cb["get_caught"]() && (_0x19f9cb["set_caught"](!![]), _0xa150b2--), _0x19f9cb["set_rethrown"](![]), _0x330f9c["push"](_0x577aa9), _0x1a05e1(_0x19f9cb), _0x577aa9["get_exception_ptr"]();
  }
  var _0xb17c30 = 0;
  function _0x35576e(_0x39cf44) {
    return _0x3426bf(new _0xdf30ad(_0x39cf44)["ptr"]);
  }
  function _0x494e0a(_0x14158d) {
    if (_0x14158d["release_ref"]() && !_0x14158d["get_rethrown"]()) {
      var _0xdef02 = _0x14158d["get_destructor"]();
      _0xdef02 && function (_0x219834) {
        return _0x35b840["apply"](null, [_0xdef02, _0x219834]);
      }(_0x14158d["excPtr"]), _0x35576e(_0x14158d["excPtr"]);
    }
  }
  function _0x4e6023() {
    _0x2ed5d3(0);
    var _0x1cd94d = _0x330f9c["pop"]();
    _0x494e0a(_0x1cd94d["get_exception_info"]()), _0x1cd94d["free"](), _0xb17c30 = 0;
  }
  function _0xa59ef0(_0x374f3f) {
    var _0x25b9dd = new _0x2f7aa6(_0x374f3f), _0x10a5fc = _0x25b9dd["get_base_ptr"]();
    !_0xb17c30 && (_0xb17c30 = _0x10a5fc);
    _0x25b9dd["free"]();
    throw _0x10a5fc;
  }
  function _0x8f69b7() {
    var _0x3a298e = _0xb17c30;
    if (!_0x3a298e) return _0x172fe6(0), 0 | 0;
    var _0x2c0bf0 = new _0xdf30ad(_0x3a298e), _0x37c35f = _0x2c0bf0["get_type"](), _0x3463af = new _0x2f7aa6;
    _0x3463af["set_base_ptr"](_0x3a298e);
    if (!_0x37c35f) return _0x172fe6(0), _0x3463af["ptr"] | 0;
    var _0x181b61 = Array["prototype"]["slice"]["call"](arguments), _0x4e35c4 = _0x217682(), _0x7b294a = _0x2c26ef(4);
    _0x5f4233[_0x7b294a >> 2] = _0x3a298e;
    for (var _0x44beb7 = 0; _0x44beb7 < _0x181b61["length"]; _0x44beb7++) {
      var _0x556207 = _0x181b61[_0x44beb7];
      if (_0x556207 === 0 || _0x556207 === _0x37c35f) break;
      if (_0x17e576(_0x556207, _0x37c35f, _0x7b294a)) {
        var _0x46fca9 = _0x5f4233[_0x7b294a >> 2];
        return _0x3a298e !== _0x46fca9 && _0x3463af["set_adjusted_ptr"](_0x46fca9), _0x172fe6(_0x556207), _0x3463af["ptr"] | 0;
      }
    }
    return _0x994ba8(_0x4e35c4), _0x172fe6(_0x37c35f), _0x3463af["ptr"] | 0;
  }
  function _0x7736ca() {
    var _0x34abcd = _0xb17c30;
    if (!_0x34abcd) return _0x172fe6(0), 0 | 0;
    var _0x3986e5 = new _0xdf30ad(_0x34abcd), _0x1d4eeb = _0x3986e5["get_type"](), _0x2821f6 = new _0x2f7aa6;
    _0x2821f6["set_base_ptr"](_0x34abcd);
    if (!_0x1d4eeb) return _0x172fe6(0), _0x2821f6["ptr"] | 0;
    var _0x21921b = Array["prototype"]["slice"]["call"](arguments), _0x2bac62 = _0x217682(), _0x5f219e = _0x2c26ef(4);
    _0x5f4233[_0x5f219e >> 2] = _0x34abcd;
    for (var _0x44d7be = 0; _0x44d7be < _0x21921b["length"]; _0x44d7be++) {
      var _0xabfbf9 = _0x21921b[_0x44d7be];
      if (_0xabfbf9 === 0 || _0xabfbf9 === _0x1d4eeb) break;
      if (_0x17e576(_0xabfbf9, _0x1d4eeb, _0x5f219e)) {
        var _0x3968db = _0x5f4233[_0x5f219e >> 2];
        return _0x34abcd !== _0x3968db && _0x2821f6["set_adjusted_ptr"](_0x3968db), _0x172fe6(_0xabfbf9), _0x2821f6["ptr"] | 0;
      }
    }
    return _0x994ba8(_0x2bac62), _0x172fe6(_0x1d4eeb), _0x2821f6["ptr"] | 0;
  }
  function _0x43b61c() {
    var _0x5e5875 = _0xb17c30;
    if (!_0x5e5875) return _0x172fe6(0), 0 | 0;
    var _0x14aa2e = new _0xdf30ad(_0x5e5875), _0x1f4f21 = _0x14aa2e["get_type"](), _0x53b338 = new _0x2f7aa6;
    _0x53b338["set_base_ptr"](_0x5e5875);
    if (!_0x1f4f21) return _0x172fe6(0), _0x53b338["ptr"] | 0;
    var _0x537192 = Array["prototype"]["slice"]["call"](arguments), _0xd04aa3 = _0x217682(), _0x2f4afa = _0x2c26ef(4);
    _0x5f4233[_0x2f4afa >> 2] = _0x5e5875;
    for (var _0x485c7e = 0; _0x485c7e < _0x537192["length"]; _0x485c7e++) {
      var _0x140a79 = _0x537192[_0x485c7e];
      if (_0x140a79 === 0 || _0x140a79 === _0x1f4f21) break;
      if (_0x17e576(_0x140a79, _0x1f4f21, _0x2f4afa)) {
        var _0x20515f = _0x5f4233[_0x2f4afa >> 2];
        return _0x5e5875 !== _0x20515f && _0x53b338["set_adjusted_ptr"](_0x20515f), _0x172fe6(_0x140a79), _0x53b338["ptr"] | 0;
      }
    }
    return _0x994ba8(_0xd04aa3), _0x172fe6(_0x1f4f21), _0x53b338["ptr"] | 0;
  }
  function _0x5bc510() {
    var _0x63fbc1 = _0x330f9c["pop"]();
    !_0x63fbc1 && _0x4c406f("no exception to throw");
    var _0x5cd7fd = _0x63fbc1["get_exception_info"](), _0x4904b6 = _0x63fbc1["get_base_ptr"]();
    !_0x5cd7fd["get_rethrown"]() ? (_0x330f9c["push"](_0x63fbc1), _0x5cd7fd["set_rethrown"](!![]), _0x5cd7fd["set_caught"](![]), _0xa150b2++) : _0x63fbc1["free"]();
    _0xb17c30 = _0x4904b6;
    throw _0x4904b6;
  }
  function _0x574477(_0x35be41, _0x710301, _0x509772) {
    var _0x47b2d9 = new _0xdf30ad(_0x35be41);
    _0x47b2d9["init"](_0x710301, _0x509772), _0xb17c30 = _0x35be41, _0xa150b2++;
    throw _0x35be41;
  }
  function _0x49140d(_0x2ec32d, _0x4ef380) {
    var _0x5aece1 = new Date(_0x5f4233[_0x2ec32d >> 2] * 1e3);
    _0x5f4233[_0x4ef380 >> 2] = _0x5aece1["getUTCSeconds"](), _0x5f4233[_0x4ef380 + 4 >> 2] = _0x5aece1["getUTCMinutes"](), _0x5f4233[_0x4ef380 + 8 >> 2] = _0x5aece1["getUTCHours"](), _0x5f4233[_0x4ef380 + 12 >> 2] = _0x5aece1["getUTCDate"](), _0x5f4233[_0x4ef380 + 16 >> 2] = _0x5aece1["getUTCMonth"](), _0x5f4233[_0x4ef380 + 20 >> 2] = _0x5aece1["getUTCFullYear"]() - 1900, _0x5f4233[_0x4ef380 + 24 >> 2] = _0x5aece1["getUTCDay"](), _0x5f4233[_0x4ef380 + 36 >> 2] = 0, _0x5f4233[_0x4ef380 + 32 >> 2] = 0;
    var _0x35c0a6 = Date["UTC"](_0x5aece1["getUTCFullYear"](), 0, 1, 0, 0, 0, 0), _0x2b91be = (_0x5aece1["getTime"]() - _0x35c0a6) / (1e3 * 60 * 60 * 24) | 0;
    _0x5f4233[_0x4ef380 + 28 >> 2] = _0x2b91be;
    if (!_0x49140d["GMTString"]) _0x49140d["GMTString"] = _0x29cbbd("GMT");
    return _0x5f4233[_0x4ef380 + 40 >> 2] = _0x49140d["GMTString"], _0x4ef380;
  }
  function _0x1469b1(_0x5446cc, _0x21f3ec) {
    return _0x49140d(_0x5446cc, _0x21f3ec);
  }
  function _0x179f30() {
    if (_0x179f30["called"]) return;
    _0x179f30["called"] = !![];
    var _0x5afa04 = (new Date)["getFullYear"](), _0x4ec10f = new Date(_0x5afa04, 0, 1), _0x934a9a = new Date(_0x5afa04, 6, 1), _0x4f60ac = _0x4ec10f["getTimezoneOffset"](), _0x44a512 = _0x934a9a["getTimezoneOffset"](), _0x115788 = Math["max"](_0x4f60ac, _0x44a512);
    _0x5f4233[_0x4aeb19() >> 2] = _0x115788 * 60, _0x5f4233[_0x4452b8() >> 2] = Number(_0x4f60ac != _0x44a512);
    function _0x548f59(_0x4645cb) {
      var _0x342a8d = _0x4645cb["toTimeString"]()["match"](/\(([A-Za-z ]+)\)$/);
      return _0x342a8d ? _0x342a8d[1] : "GMT";
    }
    var _0x398399 = _0x548f59(_0x4ec10f), _0x43a527 = _0x548f59(_0x934a9a), _0x371035 = _0x29cbbd(_0x398399), _0x361f9c = _0x29cbbd(_0x43a527);
    _0x44a512 < _0x4f60ac ? (_0x5f4233[_0x5ac09d() >> 2] = _0x371035, _0x5f4233[_0x5ac09d() + 4 >> 2] = _0x361f9c) : (_0x5f4233[_0x5ac09d() >> 2] = _0x361f9c, _0x5f4233[_0x5ac09d() + 4 >> 2] = _0x371035);
  }
  function _0x1f64af(_0xfd9984, _0x525eaf) {
    _0x179f30();
    var _0x577062 = new Date(_0x5f4233[_0xfd9984 >> 2] * 1e3);
    _0x5f4233[_0x525eaf >> 2] = _0x577062["getSeconds"](), _0x5f4233[_0x525eaf + 4 >> 2] = _0x577062["getMinutes"](), _0x5f4233[_0x525eaf + 8 >> 2] = _0x577062["getHours"](), _0x5f4233[_0x525eaf + 12 >> 2] = _0x577062["getDate"](), _0x5f4233[_0x525eaf + 16 >> 2] = _0x577062["getMonth"](), _0x5f4233[_0x525eaf + 20 >> 2] = _0x577062["getFullYear"]() - 1900, _0x5f4233[_0x525eaf + 24 >> 2] = _0x577062["getDay"]();
    var _0x52a1d2 = new Date(_0x577062["getFullYear"](), 0, 1), _0x21f1ee = (_0x577062["getTime"]() - _0x52a1d2["getTime"]()) / (1e3 * 60 * 60 * 24) | 0;
    _0x5f4233[_0x525eaf + 28 >> 2] = _0x21f1ee, _0x5f4233[_0x525eaf + 36 >> 2] = -(_0x577062["getTimezoneOffset"]() * 60);
    var _0x5c076d = new Date(_0x577062["getFullYear"](), 6, 1)["getTimezoneOffset"](), _0x35476a = _0x52a1d2["getTimezoneOffset"](), _0x55f13b = (_0x5c076d != _0x35476a && _0x577062["getTimezoneOffset"]() == Math["min"](_0x35476a, _0x5c076d)) | 0;
    _0x5f4233[_0x525eaf + 32 >> 2] = _0x55f13b;
    var _0x3ac3f2 = _0x5f4233[_0x5ac09d() + (_0x55f13b ? 4 : 0) >> 2];
    return _0x5f4233[_0x525eaf + 40 >> 2] = _0x3ac3f2, _0x525eaf;
  }
  function _0x2a00a2(_0x393bd1, _0x55d952) {
    return _0x1f64af(_0x393bd1, _0x55d952);
  }
  var _0x38ed9d = {splitPath: function (_0x130296) {
    var _0x1ff789 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
    return _0x1ff789["exec"](_0x130296)["slice"](1);
  }, normalizeArray: function (_0x36c0de, _0xae1ffb) {
    var _0x355379 = 0;
    for (var _0x4adc7b = _0x36c0de["length"] - 1; _0x4adc7b >= 0; _0x4adc7b--) {
      var _0x2b9554 = _0x36c0de[_0x4adc7b];
      if (_0x2b9554 === ".") _0x36c0de["splice"](_0x4adc7b, 1); else {
        if (_0x2b9554 === "..") _0x36c0de["splice"](_0x4adc7b, 1), _0x355379++; else _0x355379 && (_0x36c0de["splice"](_0x4adc7b, 1), _0x355379--);
      }
    }
    if (_0xae1ffb) for (; _0x355379; _0x355379--) {
      _0x36c0de["unshift"]("..");
    }
    return _0x36c0de;
  }, normalize: function (_0x538e4b) {
    var _0x2b5a14 = _0x538e4b["charAt"](0) === "/", _0x481716 = _0x538e4b["substr"](-1) === "/";
    return _0x538e4b = _0x38ed9d["normalizeArray"](_0x538e4b["split"]("/")["filter"](function (_0x2f47f3) {
      return !!_0x2f47f3;
    }), !_0x2b5a14)["join"]("/"), !_0x538e4b && !_0x2b5a14 && (_0x538e4b = "."), _0x538e4b && _0x481716 && (_0x538e4b += "/"), (_0x2b5a14 ? "/" : "") + _0x538e4b;
  }, dirname: function (_0xa33379) {
    var _0x247444 = _0x38ed9d["splitPath"](_0xa33379), _0xf63296 = _0x247444[0], _0x2f957d = _0x247444[1];
    if (!_0xf63296 && !_0x2f957d) return ".";
    return _0x2f957d && (_0x2f957d = _0x2f957d["substr"](0, _0x2f957d["length"] - 1)), _0xf63296 + _0x2f957d;
  }, basename: function (_0x5ff102) {
    if (_0x5ff102 === "/") return "/";
    _0x5ff102 = _0x38ed9d["normalize"](_0x5ff102), _0x5ff102 = _0x5ff102["replace"](/\/$/, "");
    var _0x5a85c0 = _0x5ff102["lastIndexOf"]("/");
    if (_0x5a85c0 === -1) return _0x5ff102;
    return _0x5ff102["substr"](_0x5a85c0 + 1);
  }, extname: function (_0x25a553) {
    return _0x38ed9d["splitPath"](_0x25a553)[3];
  }, join: function () {
    var _0x2b6bb6 = Array["prototype"]["slice"]["call"](arguments, 0);
    return _0x38ed9d["normalize"](_0x2b6bb6["join"]("/"));
  }, join2: function (_0x5e0e48, _0x19a599) {
    return _0x38ed9d["normalize"](_0x5e0e48 + "/" + _0x19a599);
  }};
  function _0x34e668() {
    if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
      var _0x2d6c76 = new Uint8Array(1);
      return function () {
        return crypto["getRandomValues"](_0x2d6c76), _0x2d6c76[0];
      };
    } else {
      if (_0x2d4503) try {
        var _0x168083 = require("crypto");
        return function () {
          return _0x168083["randomBytes"](1)[0];
        };
      } catch (_0x2b31d8) {}
    }
    return function () {
      _0x4c406f("randomDevice");
    };
  }
  var _0x4fc216 = {resolve: function () {
    var _0xe6bcf5 = "", _0x36dd47 = ![];
    for (var _0x1e8096 = arguments["length"] - 1; _0x1e8096 >= -1 && !_0x36dd47; _0x1e8096--) {
      var _0x6f2fb6 = _0x1e8096 >= 0 ? arguments[_0x1e8096] : _0x37953b["cwd"]();
      if (typeof _0x6f2fb6 !== "string") throw new TypeError("Arguments to path.resolve must be strings"); else {
        if (!_0x6f2fb6) return "";
      }
      _0xe6bcf5 = _0x6f2fb6 + "/" + _0xe6bcf5, _0x36dd47 = _0x6f2fb6["charAt"](0) === "/";
    }
    return _0xe6bcf5 = _0x38ed9d["normalizeArray"](_0xe6bcf5["split"]("/")["filter"](function (_0x51838e) {
      return !!_0x51838e;
    }), !_0x36dd47)["join"]("/"), (_0x36dd47 ? "/" : "") + _0xe6bcf5 || ".";
  }, relative: function (_0x852c78, _0x4e4e45) {
    _0x852c78 = _0x4fc216["resolve"](_0x852c78)["substr"](1), _0x4e4e45 = _0x4fc216["resolve"](_0x4e4e45)["substr"](1);
    function _0x5f2a2b(_0x47f3a0) {
      var _0x1d4d80 = 0;
      for (; _0x1d4d80 < _0x47f3a0["length"]; _0x1d4d80++) {
        if (_0x47f3a0[_0x1d4d80] !== "") break;
      }
      var _0xb3479d = _0x47f3a0["length"] - 1;
      for (; _0xb3479d >= 0; _0xb3479d--) {
        if (_0x47f3a0[_0xb3479d] !== "") break;
      }
      if (_0x1d4d80 > _0xb3479d) return [];
      return _0x47f3a0["slice"](_0x1d4d80, _0xb3479d - _0x1d4d80 + 1);
    }
    var _0x2e2131 = _0x5f2a2b(_0x852c78["split"]("/")), _0x268544 = _0x5f2a2b(_0x4e4e45["split"]("/")), _0x599094 = Math["min"](_0x2e2131["length"], _0x268544["length"]), _0x28aed6 = _0x599094;
    for (var _0x4999bf = 0; _0x4999bf < _0x599094; _0x4999bf++) {
      if (_0x2e2131[_0x4999bf] !== _0x268544[_0x4999bf]) {
        _0x28aed6 = _0x4999bf;
        break;
      }
    }
    var _0x14e823 = [];
    for (var _0x4999bf = _0x28aed6; _0x4999bf < _0x2e2131["length"]; _0x4999bf++) {
      _0x14e823["push"]("..");
    }
    return _0x14e823 = _0x14e823["concat"](_0x268544["slice"](_0x28aed6)), _0x14e823["join"]("/");
  }}, _0x538541 = {ttys: [], init: function () {}, shutdown: function () {}, register: function (_0x3c95ef, _0x308ee0) {
    _0x538541["ttys"][_0x3c95ef] = {input: [], output: [], ops: _0x308ee0}, _0x37953b["registerDevice"](_0x3c95ef, _0x538541["stream_ops"]);
  }, stream_ops: {open: function (_0x85071f) {
    var _0x17a82e = _0x538541["ttys"][_0x85071f["node"]["rdev"]];
    if (!_0x17a82e) throw new _0x37953b["ErrnoError"](43);
    _0x85071f["tty"] = _0x17a82e, _0x85071f["seekable"] = ![];
  }, close: function (_0x4c1cef) {
    _0x4c1cef["tty"]["ops"]["flush"](_0x4c1cef["tty"]);
  }, flush: function (_0x435b4d) {
    _0x435b4d["tty"]["ops"]["flush"](_0x435b4d["tty"]);
  }, read: function (_0x5dcd52, _0x2b8ed0, _0x2de7ec, _0x18d2a9, _0x28e8d9) {
    if (!_0x5dcd52["tty"] || !_0x5dcd52["tty"]["ops"]["get_char"]) throw new _0x37953b["ErrnoError"](60);
    var _0x480401 = 0;
    for (var _0x66d02d = 0; _0x66d02d < _0x18d2a9; _0x66d02d++) {
      var _0x92e710;
      try {
        _0x92e710 = _0x5dcd52["tty"]["ops"]["get_char"](_0x5dcd52["tty"]);
      } catch (_0x539a4d) {
        throw new _0x37953b["ErrnoError"](29);
      }
      if (_0x92e710 === undefined && _0x480401 === 0) throw new _0x37953b["ErrnoError"](6);
      if (_0x92e710 === null || _0x92e710 === undefined) break;
      _0x480401++, _0x2b8ed0[_0x2de7ec + _0x66d02d] = _0x92e710;
    }
    return _0x480401 && (_0x5dcd52["node"]["timestamp"] = Date["now"]()), _0x480401;
  }, write: function (_0x4f1c16, _0x5a33b8, _0x2f830c, _0x139b19, _0x3bdbcd) {
    if (!_0x4f1c16["tty"] || !_0x4f1c16["tty"]["ops"]["put_char"]) throw new _0x37953b["ErrnoError"](60);
    try {
      for (var _0x31c6ea = 0; _0x31c6ea < _0x139b19; _0x31c6ea++) {
        _0x4f1c16["tty"]["ops"]["put_char"](_0x4f1c16["tty"], _0x5a33b8[_0x2f830c + _0x31c6ea]);
      }
    } catch (_0x2c5970) {
      throw new _0x37953b["ErrnoError"](29);
    }
    return _0x139b19 && (_0x4f1c16["node"]["timestamp"] = Date["now"]()), _0x31c6ea;
  }}, default_tty_ops: {get_char: function (_0x3d807b) {
    if (!_0x3d807b["input"]["length"]) {
      var _0x26f2b1 = null;
      if (_0x2d4503) {
        var _0x28370e = 256, _0x352205 = Buffer["alloc"] ? Buffer["alloc"](_0x28370e) : new Buffer(_0x28370e), _0x4a14db = 0;
        try {
          _0x4a14db = _0x128c14["readSync"](process["stdin"]["fd"], _0x352205, 0, _0x28370e, null);
        } catch (_0x2b16f4) {
          if (_0x2b16f4["toString"]()["includes"]("EOF")) _0x4a14db = 0; else throw _0x2b16f4;
        }
        _0x4a14db > 0 ? _0x26f2b1 = _0x352205["slice"](0, _0x4a14db)["toString"]("utf-8") : _0x26f2b1 = null;
      } else {
        if (typeof window != "undefined" && typeof window["prompt"] == "function") _0x26f2b1 = window["prompt"]("Input: "), _0x26f2b1 !== null && (_0x26f2b1 += "\n"); else typeof readline == "function" && (_0x26f2b1 = readline(), _0x26f2b1 !== null && (_0x26f2b1 += "\n"));
      }
      if (!_0x26f2b1) return null;
      _0x3d807b["input"] = _0x4c56db(_0x26f2b1, !![]);
    }
    return _0x3d807b["input"]["shift"]();
  }, put_char: function (_0x346d20, _0x511da6) {
    if (_0x511da6 === null || _0x511da6 === 10) _0x507ddf(_0x2c9ef7(_0x346d20["output"], 0)), _0x346d20["output"] = []; else {
      if (_0x511da6 != 0) _0x346d20["output"]["push"](_0x511da6);
    }
  }, flush: function (_0x4d582b) {
    _0x4d582b["output"] && _0x4d582b["output"]["length"] > 0 && (_0x507ddf(_0x2c9ef7(_0x4d582b["output"], 0)), _0x4d582b["output"] = []);
  }}, default_tty1_ops: {put_char: function (_0x3151a5, _0x217705) {
    if (_0x217705 === null || _0x217705 === 10) _0x366b43(_0x2c9ef7(_0x3151a5["output"], 0)), _0x3151a5["output"] = []; else {
      if (_0x217705 != 0) _0x3151a5["output"]["push"](_0x217705);
    }
  }, flush: function (_0x481a7d) {
    _0x481a7d["output"] && _0x481a7d["output"]["length"] > 0 && (_0x366b43(_0x2c9ef7(_0x481a7d["output"], 0)), _0x481a7d["output"] = []);
  }}};
  function _0x2d52d7(_0x3f7978) {
    var _0xb84f62 = _0x3db561(_0x3f7978, 65536), _0x38481a = _0x499029(_0xb84f62);
    while (_0x3f7978 < _0xb84f62) _0x2c8e41[_0x38481a + _0x3f7978++] = 0;
    return _0x38481a;
  }
  var _0x2d95a6 = {ops_table: null, mount: function (_0xdea1ec) {
    return _0x2d95a6["createNode"](null, "/", 16384 | 511, 0);
  }, createNode: function (_0xea8ea4, _0x19ae8b, _0x56a25f, _0x2ace87) {
    if (_0x37953b["isBlkdev"](_0x56a25f) || _0x37953b["isFIFO"](_0x56a25f)) throw new _0x37953b["ErrnoError"](63);
    !_0x2d95a6["ops_table"] && (_0x2d95a6["ops_table"] = {dir: {node: {getattr: _0x2d95a6["node_ops"]["getattr"], setattr: _0x2d95a6["node_ops"]["setattr"], lookup: _0x2d95a6["node_ops"]["lookup"], mknod: _0x2d95a6["node_ops"]["mknod"], rename: _0x2d95a6["node_ops"]["rename"], unlink: _0x2d95a6["node_ops"]["unlink"], rmdir: _0x2d95a6["node_ops"]["rmdir"], readdir: _0x2d95a6["node_ops"]["readdir"], symlink: _0x2d95a6["node_ops"]["symlink"]}, stream: {llseek: _0x2d95a6["stream_ops"]["llseek"]}}, file: {node: {getattr: _0x2d95a6["node_ops"]["getattr"], setattr: _0x2d95a6["node_ops"]["setattr"]}, stream: {llseek: _0x2d95a6["stream_ops"]["llseek"], read: _0x2d95a6["stream_ops"]["read"], write: _0x2d95a6["stream_ops"]["write"], allocate: _0x2d95a6["stream_ops"]["allocate"], mmap: _0x2d95a6["stream_ops"]["mmap"], msync: _0x2d95a6["stream_ops"]["msync"]}}, link: {node: {getattr: _0x2d95a6["node_ops"]["getattr"], setattr: _0x2d95a6["node_ops"]["setattr"], readlink: _0x2d95a6["node_ops"]["readlink"]}, stream: {}}, chrdev: {node: {getattr: _0x2d95a6["node_ops"]["getattr"], setattr: _0x2d95a6["node_ops"]["setattr"]}, stream: _0x37953b["chrdev_stream_ops"]}});
    var _0x4b29b5 = _0x37953b["createNode"](_0xea8ea4, _0x19ae8b, _0x56a25f, _0x2ace87);
    if (_0x37953b["isDir"](_0x4b29b5["mode"])) _0x4b29b5["node_ops"] = _0x2d95a6["ops_table"]["dir"]["node"], _0x4b29b5["stream_ops"] = _0x2d95a6["ops_table"]["dir"]["stream"], _0x4b29b5["contents"] = {}; else {
      if (_0x37953b["isFile"](_0x4b29b5["mode"])) _0x4b29b5["node_ops"] = _0x2d95a6["ops_table"]["file"]["node"], _0x4b29b5["stream_ops"] = _0x2d95a6["ops_table"]["file"]["stream"], _0x4b29b5["usedBytes"] = 0, _0x4b29b5["contents"] = null; else {
        if (_0x37953b["isLink"](_0x4b29b5["mode"])) _0x4b29b5["node_ops"] = _0x2d95a6["ops_table"]["link"]["node"], _0x4b29b5["stream_ops"] = _0x2d95a6["ops_table"]["link"]["stream"]; else _0x37953b["isChrdev"](_0x4b29b5["mode"]) && (_0x4b29b5["node_ops"] = _0x2d95a6["ops_table"]["chrdev"]["node"], _0x4b29b5["stream_ops"] = _0x2d95a6["ops_table"]["chrdev"]["stream"]);
      }
    }
    return _0x4b29b5["timestamp"] = Date["now"](), _0xea8ea4 && (_0xea8ea4["contents"][_0x19ae8b] = _0x4b29b5, _0xea8ea4["timestamp"] = _0x4b29b5["timestamp"]), _0x4b29b5;
  }, getFileDataAsTypedArray: function (_0x8c643) {
    if (!_0x8c643["contents"]) return new Uint8Array(0);
    if (_0x8c643["contents"]["subarray"]) return _0x8c643["contents"]["subarray"](0, _0x8c643["usedBytes"]);
    return new Uint8Array(_0x8c643["contents"]);
  }, expandFileStorage: function (_0x3d5ffc, _0x177651) {
    var _0x2b9f56 = _0x3d5ffc["contents"] ? _0x3d5ffc["contents"]["length"] : 0;
    if (_0x2b9f56 >= _0x177651) return;
    var _0x47cbf9 = 1024 * 1024;
    _0x177651 = Math["max"](_0x177651, _0x2b9f56 * (_0x2b9f56 < _0x47cbf9 ? 2 : 1.125) >>> 0);
    if (_0x2b9f56 != 0) _0x177651 = Math["max"](_0x177651, 256);
    var _0x525e17 = _0x3d5ffc["contents"];
    _0x3d5ffc["contents"] = new Uint8Array(_0x177651);
    if (_0x3d5ffc["usedBytes"] > 0) _0x3d5ffc["contents"]["set"](_0x525e17["subarray"](0, _0x3d5ffc["usedBytes"]), 0);
  }, resizeFileStorage: function (_0x41caeb, _0x4e1b8a) {
    if (_0x41caeb["usedBytes"] == _0x4e1b8a) return;
    if (_0x4e1b8a == 0) _0x41caeb["contents"] = null, _0x41caeb["usedBytes"] = 0; else {
      var _0x173c36 = _0x41caeb["contents"];
      _0x41caeb["contents"] = new Uint8Array(_0x4e1b8a), _0x173c36 && _0x41caeb["contents"]["set"](_0x173c36["subarray"](0, Math["min"](_0x4e1b8a, _0x41caeb["usedBytes"]))), _0x41caeb["usedBytes"] = _0x4e1b8a;
    }
  }, node_ops: {getattr: function (_0x447a68) {
    var _0x313129 = {};
    _0x313129["dev"] = _0x37953b["isChrdev"](_0x447a68["mode"]) ? _0x447a68["id"] : 1, _0x313129["ino"] = _0x447a68["id"], _0x313129["mode"] = _0x447a68["mode"], _0x313129["nlink"] = 1, _0x313129["uid"] = 0, _0x313129["gid"] = 0, _0x313129["rdev"] = _0x447a68["rdev"];
    if (_0x37953b["isDir"](_0x447a68["mode"])) _0x313129["size"] = 4096; else {
      if (_0x37953b["isFile"](_0x447a68["mode"])) _0x313129["size"] = _0x447a68["usedBytes"]; else _0x37953b["isLink"](_0x447a68["mode"]) ? _0x313129["size"] = _0x447a68["link"]["length"] : _0x313129["size"] = 0;
    }
    return _0x313129["atime"] = new Date(_0x447a68["timestamp"]), _0x313129["mtime"] = new Date(_0x447a68["timestamp"]), _0x313129["ctime"] = new Date(_0x447a68["timestamp"]), _0x313129["blksize"] = 4096, _0x313129["blocks"] = Math["ceil"](_0x313129["size"] / _0x313129["blksize"]), _0x313129;
  }, setattr: function (_0x2b476f, _0x38e417) {
    _0x38e417["mode"] !== undefined && (_0x2b476f["mode"] = _0x38e417["mode"]), _0x38e417["timestamp"] !== undefined && (_0x2b476f["timestamp"] = _0x38e417["timestamp"]), _0x38e417["size"] !== undefined && _0x2d95a6["resizeFileStorage"](_0x2b476f, _0x38e417["size"]);
  }, lookup: function (_0x417cdb, _0x5257b6) {
    throw _0x37953b["genericErrors"][44];
  }, mknod: function (_0x997b9f, _0x3f38db, _0x2c05c4, _0xcf1d7f) {
    return _0x2d95a6["createNode"](_0x997b9f, _0x3f38db, _0x2c05c4, _0xcf1d7f);
  }, rename: function (_0xbf3cdf, _0x10170e, _0x1efbaf) {
    if (_0x37953b["isDir"](_0xbf3cdf["mode"])) {
      var _0x4e5b31;
      try {
        _0x4e5b31 = _0x37953b["lookupNode"](_0x10170e, _0x1efbaf);
      } catch (_0x5317f8) {}
      if (_0x4e5b31) for (var _0x113c22 in _0x4e5b31["contents"]) {
        throw new _0x37953b["ErrnoError"](55);
      }
    }
    delete _0xbf3cdf["parent"]["contents"][_0xbf3cdf["name"]], _0xbf3cdf["parent"]["timestamp"] = Date["now"](), _0xbf3cdf["name"] = _0x1efbaf, _0x10170e["contents"][_0x1efbaf] = _0xbf3cdf, _0x10170e["timestamp"] = _0xbf3cdf["parent"]["timestamp"], _0xbf3cdf["parent"] = _0x10170e;
  }, unlink: function (_0x30a9ea, _0x4228f3) {
    delete _0x30a9ea["contents"][_0x4228f3], _0x30a9ea["timestamp"] = Date["now"]();
  }, rmdir: function (_0x1e5e5d, _0x47c4aa) {
    var _0x2affdb = _0x37953b["lookupNode"](_0x1e5e5d, _0x47c4aa);
    for (var _0x1f8f1b in _0x2affdb["contents"]) {
      throw new _0x37953b["ErrnoError"](55);
    }
    delete _0x1e5e5d["contents"][_0x47c4aa], _0x1e5e5d["timestamp"] = Date["now"]();
  }, readdir: function (_0x4f79e5) {
    var _0x1ea297 = [".", ".."];
    for (var _0x45de75 in _0x4f79e5["contents"]) {
      if (!_0x4f79e5["contents"]["hasOwnProperty"](_0x45de75)) continue;
      _0x1ea297["push"](_0x45de75);
    }
    return _0x1ea297;
  }, symlink: function (_0x33f77d, _0x58ff3c, _0x278bfd) {
    var _0x46099e = _0x2d95a6["createNode"](_0x33f77d, _0x58ff3c, 511 | 40960, 0);
    return _0x46099e["link"] = _0x278bfd, _0x46099e;
  }, readlink: function (_0x2ff1bd) {
    if (!_0x37953b["isLink"](_0x2ff1bd["mode"])) throw new _0x37953b["ErrnoError"](28);
    return _0x2ff1bd["link"];
  }}, stream_ops: {read: function (_0x52da6c, _0x556387, _0x3059d8, _0x490c90, _0x42e4c3) {
    var _0x46edea = _0x52da6c["node"]["contents"];
    if (_0x42e4c3 >= _0x52da6c["node"]["usedBytes"]) return 0;
    var _0x1d1e74 = Math["min"](_0x52da6c["node"]["usedBytes"] - _0x42e4c3, _0x490c90);
    if (_0x1d1e74 > 8 && _0x46edea["subarray"]) _0x556387["set"](_0x46edea["subarray"](_0x42e4c3, _0x42e4c3 + _0x1d1e74), _0x3059d8); else {
      for (var _0x36a0b7 = 0; _0x36a0b7 < _0x1d1e74; _0x36a0b7++) _0x556387[_0x3059d8 + _0x36a0b7] = _0x46edea[_0x42e4c3 + _0x36a0b7];
    }
    return _0x1d1e74;
  }, write: function (_0x1cf09f, _0x24304c, _0x46f62e, _0x301221, _0x30de18, _0x4f9565) {
    _0x24304c["buffer"] === _0x2c8e41["buffer"] && (_0x4f9565 = ![]);
    if (!_0x301221) return 0;
    var _0xf4f32c = _0x1cf09f["node"];
    _0xf4f32c["timestamp"] = Date["now"]();
    if (_0x24304c["subarray"] && (!_0xf4f32c["contents"] || _0xf4f32c["contents"]["subarray"])) {
      if (_0x4f9565) return _0xf4f32c["contents"] = _0x24304c["subarray"](_0x46f62e, _0x46f62e + _0x301221), _0xf4f32c["usedBytes"] = _0x301221, _0x301221; else {
        if (_0xf4f32c["usedBytes"] === 0 && _0x30de18 === 0) return _0xf4f32c["contents"] = _0x24304c["slice"](_0x46f62e, _0x46f62e + _0x301221), _0xf4f32c["usedBytes"] = _0x301221, _0x301221; else {
          if (_0x30de18 + _0x301221 <= _0xf4f32c["usedBytes"]) return _0xf4f32c["contents"]["set"](_0x24304c["subarray"](_0x46f62e, _0x46f62e + _0x301221), _0x30de18), _0x301221;
        }
      }
    }
    _0x2d95a6["expandFileStorage"](_0xf4f32c, _0x30de18 + _0x301221);
    if (_0xf4f32c["contents"]["subarray"] && _0x24304c["subarray"]) _0xf4f32c["contents"]["set"](_0x24304c["subarray"](_0x46f62e, _0x46f62e + _0x301221), _0x30de18); else for (var _0x2df1d9 = 0; _0x2df1d9 < _0x301221; _0x2df1d9++) {
      _0xf4f32c["contents"][_0x30de18 + _0x2df1d9] = _0x24304c[_0x46f62e + _0x2df1d9];
    }
    return _0xf4f32c["usedBytes"] = Math["max"](_0xf4f32c["usedBytes"], _0x30de18 + _0x301221), _0x301221;
  }, llseek: function (_0x7661ee, _0x3e49a7, _0x174d61) {
    var _0x417eb1 = _0x3e49a7;
    if (_0x174d61 === 1) _0x417eb1 += _0x7661ee["position"]; else _0x174d61 === 2 && (_0x37953b["isFile"](_0x7661ee["node"]["mode"]) && (_0x417eb1 += _0x7661ee["node"]["usedBytes"]));
    if (_0x417eb1 < 0) throw new _0x37953b["ErrnoError"](28);
    return _0x417eb1;
  }, allocate: function (_0x491e11, _0x3d99ac, _0x1a5c79) {
    _0x2d95a6["expandFileStorage"](_0x491e11["node"], _0x3d99ac + _0x1a5c79), _0x491e11["node"]["usedBytes"] = Math["max"](_0x491e11["node"]["usedBytes"], _0x3d99ac + _0x1a5c79);
  }, mmap: function (_0x477630, _0x4805b9, _0x2f9d92, _0x53a1af, _0x512e04, _0x26ef2f) {
    if (_0x4805b9 !== 0) throw new _0x37953b["ErrnoError"](28);
    if (!_0x37953b["isFile"](_0x477630["node"]["mode"])) throw new _0x37953b["ErrnoError"](43);
    var _0x1126bd, _0x407fe1, _0x531efe = _0x477630["node"]["contents"];
    if (!(_0x26ef2f & 2) && _0x531efe["buffer"] === _0x5ab467) _0x407fe1 = ![], _0x1126bd = _0x531efe["byteOffset"]; else {
      (_0x53a1af > 0 || _0x53a1af + _0x2f9d92 < _0x531efe["length"]) && (_0x531efe["subarray"] ? _0x531efe = _0x531efe["subarray"](_0x53a1af, _0x53a1af + _0x2f9d92) : _0x531efe = Array["prototype"]["slice"]["call"](_0x531efe, _0x53a1af, _0x53a1af + _0x2f9d92));
      _0x407fe1 = !![], _0x1126bd = _0x2d52d7(_0x2f9d92);
      if (!_0x1126bd) throw new _0x37953b["ErrnoError"](48);
      _0x2c8e41["set"](_0x531efe, _0x1126bd);
    }
    return {ptr: _0x1126bd, allocated: _0x407fe1};
  }, msync: function (_0x3b5d9a, _0x45563b, _0x3a20a1, _0xd9ce7c, _0x1aa5f1) {
    if (!_0x37953b["isFile"](_0x3b5d9a["node"]["mode"])) throw new _0x37953b["ErrnoError"](43);
    if (_0x1aa5f1 & 2) return 0;
    var _0x37930d = _0x2d95a6["stream_ops"]["write"](_0x3b5d9a, _0x45563b, 0, _0xd9ce7c, _0x3a20a1, ![]);
    return 0;
  }}}, _0x3e97fb = {dbs: {}, indexedDB: function () {
    if (typeof indexedDB !== "undefined") return indexedDB;
    var _0x22cd22 = null;
    if (typeof window === "object") _0x22cd22 = window["indexedDB"] || window["mozIndexedDB"] || window["webkitIndexedDB"] || window["msIndexedDB"];
    return _0x1e763e(_0x22cd22, "IDBFS used, but indexedDB not supported"), _0x22cd22;
  }, DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", mount: function (_0x9a2788) {
    return _0x2d95a6["mount"]["apply"](null, arguments);
  }, syncfs: function (_0x31c6aa, _0x1caccc, _0x3f940e) {
    _0x3e97fb["getLocalSet"](_0x31c6aa, function (_0x2673d3, _0x18b1f8) {
      if (_0x2673d3) return _0x3f940e(_0x2673d3);
      _0x3e97fb["getRemoteSet"](_0x31c6aa, function (_0x529718, _0x296e47) {
        if (_0x529718) return _0x3f940e(_0x529718);
        var _0xeb2c2f = _0x1caccc ? _0x296e47 : _0x18b1f8, _0x488a0f = _0x1caccc ? _0x18b1f8 : _0x296e47;
        _0x3e97fb["reconcile"](_0xeb2c2f, _0x488a0f, _0x3f940e);
      });
    });
  }, getDB: function (_0x1fbe63, _0x17744f) {
    var _0x31e78d = _0x3e97fb["dbs"][_0x1fbe63];
    if (_0x31e78d) return _0x17744f(null, _0x31e78d);
    var _0x3f2ef0;
    try {
      _0x3f2ef0 = _0x3e97fb["indexedDB"]()["open"](_0x1fbe63, _0x3e97fb["DB_VERSION"]);
    } catch (_0x494985) {
      return _0x17744f(_0x494985);
    }
    if (!_0x3f2ef0) return _0x17744f("Unable to connect to IndexedDB");
    _0x3f2ef0["onupgradeneeded"] = function (_0x2954bc) {
      var _0x46a8d1 = _0x2954bc["target"]["result"], _0x444847 = _0x2954bc["target"]["transaction"], _0x53bcaf;
      _0x46a8d1["objectStoreNames"]["contains"](_0x3e97fb["DB_STORE_NAME"]) ? _0x53bcaf = _0x444847["objectStore"](_0x3e97fb["DB_STORE_NAME"]) : _0x53bcaf = _0x46a8d1["createObjectStore"](_0x3e97fb["DB_STORE_NAME"]), !_0x53bcaf["indexNames"]["contains"]("timestamp") && _0x53bcaf["createIndex"]("timestamp", "timestamp", {unique: ![]});
    }, _0x3f2ef0["onsuccess"] = function () {
      _0x31e78d = _0x3f2ef0["result"], _0x3e97fb["dbs"][_0x1fbe63] = _0x31e78d, _0x17744f(null, _0x31e78d);
    }, _0x3f2ef0["onerror"] = function (_0x43a05e) {
      _0x17744f(this["error"]), _0x43a05e["preventDefault"]();
    };
  }, getLocalSet: function (_0x2c0206, _0x3c61fb) {
    var _0xb998ad = {};
    function _0x524a78(_0x3dd251) {
      return _0x3dd251 !== "." && _0x3dd251 !== "..";
    }
    function _0x2380b0(_0x51c678) {
      return function (_0x36c2f2) {
        return _0x38ed9d["join2"](_0x51c678, _0x36c2f2);
      };
    }
    var _0x17770e = _0x37953b["readdir"](_0x2c0206["mountpoint"])["filter"](_0x524a78)["map"](_0x2380b0(_0x2c0206["mountpoint"]));
    while (_0x17770e["length"]) {
      var _0x257716 = _0x17770e["pop"](), _0xe4905d;
      try {
        _0xe4905d = _0x37953b["stat"](_0x257716);
      } catch (_0x544b0a) {
        return _0x3c61fb(_0x544b0a);
      }
      _0x37953b["isDir"](_0xe4905d["mode"]) && _0x17770e["push"]["apply"](_0x17770e, _0x37953b["readdir"](_0x257716)["filter"](_0x524a78)["map"](_0x2380b0(_0x257716))), _0xb998ad[_0x257716] = {timestamp: _0xe4905d["mtime"]};
    }
    return _0x3c61fb(null, {type: "local", entries: _0xb998ad});
  }, getRemoteSet: function (_0x330602, _0x242b7b) {
    var _0x10a0a3 = {};
    _0x3e97fb["getDB"](_0x330602["mountpoint"], function (_0x254421, _0x42dd89) {
      if (_0x254421) return _0x242b7b(_0x254421);
      try {
        var _0x1c765c = _0x42dd89["transaction"]([_0x3e97fb["DB_STORE_NAME"]], "readonly");
        _0x1c765c["onerror"] = function (_0x410221) {
          _0x242b7b(this["error"]), _0x410221["preventDefault"]();
        };
        var _0x50ad33 = _0x1c765c["objectStore"](_0x3e97fb["DB_STORE_NAME"]), _0x47644f = _0x50ad33["index"]("timestamp");
        _0x47644f["openKeyCursor"]()["onsuccess"] = function (_0x11dcb0) {
          var _0x4366db = _0x11dcb0["target"]["result"];
          if (!_0x4366db) return _0x242b7b(null, {type: "remote", db: _0x42dd89, entries: _0x10a0a3});
          _0x10a0a3[_0x4366db["primaryKey"]] = {timestamp: _0x4366db["key"]}, _0x4366db["continue"]();
        };
      } catch (_0x513309) {
        return _0x242b7b(_0x513309);
      }
    });
  }, loadLocalEntry: function (_0x100db1, _0x19bfa1) {
    var _0x52b122, _0x55c46a;
    try {
      var _0x12e674 = _0x37953b["lookupPath"](_0x100db1);
      _0x55c46a = _0x12e674["node"], _0x52b122 = _0x37953b["stat"](_0x100db1);
    } catch (_0x599edf) {
      return _0x19bfa1(_0x599edf);
    }
    if (_0x37953b["isDir"](_0x52b122["mode"])) return _0x19bfa1(null, {timestamp: _0x52b122["mtime"], mode: _0x52b122["mode"]}); else return _0x37953b["isFile"](_0x52b122["mode"]) ? (_0x55c46a["contents"] = _0x2d95a6["getFileDataAsTypedArray"](_0x55c46a), _0x19bfa1(null, {timestamp: _0x52b122["mtime"], mode: _0x52b122["mode"], contents: _0x55c46a["contents"]})) : _0x19bfa1(new Error("node type not supported"));
  }, storeLocalEntry: function (_0x4a940e, _0x31b965, _0x1b6c04) {
    try {
      if (_0x37953b["isDir"](_0x31b965["mode"])) _0x37953b["mkdirTree"](_0x4a940e, _0x31b965["mode"]); else {
        if (_0x37953b["isFile"](_0x31b965["mode"])) _0x37953b["writeFile"](_0x4a940e, _0x31b965["contents"], {canOwn: !![]}); else return _0x1b6c04(new Error("node type not supported"));
      }
      _0x37953b["chmod"](_0x4a940e, _0x31b965["mode"]), _0x37953b["utime"](_0x4a940e, _0x31b965["timestamp"], _0x31b965["timestamp"]);
    } catch (_0x55c8b4) {
      return _0x1b6c04(_0x55c8b4);
    }
    _0x1b6c04(null);
  }, removeLocalEntry: function (_0x2f2213, _0x253b09) {
    try {
      var _0x35256e = _0x37953b["lookupPath"](_0x2f2213), _0x3f378f = _0x37953b["stat"](_0x2f2213);
      if (_0x37953b["isDir"](_0x3f378f["mode"])) _0x37953b["rmdir"](_0x2f2213); else _0x37953b["isFile"](_0x3f378f["mode"]) && _0x37953b["unlink"](_0x2f2213);
    } catch (_0x40a2e0) {
      return _0x253b09(_0x40a2e0);
    }
    _0x253b09(null);
  }, loadRemoteEntry: function (_0x55d55f, _0x322522, _0x2e10d3) {
    var _0x4cb148 = _0x55d55f["get"](_0x322522);
    _0x4cb148["onsuccess"] = function (_0x2eaa1c) {
      _0x2e10d3(null, _0x2eaa1c["target"]["result"]);
    }, _0x4cb148["onerror"] = function (_0x25a927) {
      _0x2e10d3(this["error"]), _0x25a927["preventDefault"]();
    };
  }, storeRemoteEntry: function (_0x2668d4, _0x31f6df, _0x1de085, _0x88b84c) {
    var _0x3b56fa = _0x2668d4["put"](_0x1de085, _0x31f6df);
    _0x3b56fa["onsuccess"] = function () {
      _0x88b84c(null);
    }, _0x3b56fa["onerror"] = function (_0x15da86) {
      _0x88b84c(this["error"]), _0x15da86["preventDefault"]();
    };
  }, removeRemoteEntry: function (_0x4a4a24, _0x3f5d44, _0x1addad) {
    var _0x48625e = _0x4a4a24["delete"](_0x3f5d44);
    _0x48625e["onsuccess"] = function () {
      _0x1addad(null);
    }, _0x48625e["onerror"] = function (_0x51e6d3) {
      _0x1addad(this["error"]), _0x51e6d3["preventDefault"]();
    };
  }, reconcile: function (_0x20ac2c, _0x2b04d2, _0x5014ab) {
    var _0x11d7b9 = 0, _0x542758 = [];
    Object["keys"](_0x20ac2c["entries"])["forEach"](function (_0x263c98) {
      var _0x231d14 = _0x20ac2c["entries"][_0x263c98], _0x79e760 = _0x2b04d2["entries"][_0x263c98];
      (!_0x79e760 || _0x231d14["timestamp"]["getTime"]() != _0x79e760["timestamp"]["getTime"]()) && (_0x542758["push"](_0x263c98), _0x11d7b9++);
    });
    var _0x2a3463 = [];
    Object["keys"](_0x2b04d2["entries"])["forEach"](function (_0x17dc6f) {
      !_0x20ac2c["entries"][_0x17dc6f] && (_0x2a3463["push"](_0x17dc6f), _0x11d7b9++);
    });
    if (!_0x11d7b9) return _0x5014ab(null);
    var _0x152e45 = ![], _0x24a8b7 = _0x20ac2c["type"] === "remote" ? _0x20ac2c["db"] : _0x2b04d2["db"], _0x24004a = _0x24a8b7["transaction"]([_0x3e97fb["DB_STORE_NAME"]], "readwrite"), _0x1b2a71 = _0x24004a["objectStore"](_0x3e97fb["DB_STORE_NAME"]);
    function _0x290f1f(_0x9dbd00) {
      if (_0x9dbd00 && !_0x152e45) return _0x152e45 = !![], _0x5014ab(_0x9dbd00);
    }
    _0x24004a["onerror"] = function (_0x1dc309) {
      _0x290f1f(this["error"]), _0x1dc309["preventDefault"]();
    }, _0x24004a["oncomplete"] = function (_0x3d849b) {
      !_0x152e45 && _0x5014ab(null);
    }, _0x542758["sort"]()["forEach"](function (_0x4ef010) {
      _0x2b04d2["type"] === "local" ? _0x3e97fb["loadRemoteEntry"](_0x1b2a71, _0x4ef010, function (_0x1d7c58, _0x342d64) {
        if (_0x1d7c58) return _0x290f1f(_0x1d7c58);
        _0x3e97fb["storeLocalEntry"](_0x4ef010, _0x342d64, _0x290f1f);
      }) : _0x3e97fb["loadLocalEntry"](_0x4ef010, function (_0x172cf3, _0x47c056) {
        if (_0x172cf3) return _0x290f1f(_0x172cf3);
        _0x3e97fb["storeRemoteEntry"](_0x1b2a71, _0x4ef010, _0x47c056, _0x290f1f);
      });
    }), _0x2a3463["sort"]()["reverse"]()["forEach"](function (_0x5ea718) {
      _0x2b04d2["type"] === "local" ? _0x3e97fb["removeLocalEntry"](_0x5ea718, _0x290f1f) : _0x3e97fb["removeRemoteEntry"](_0x1b2a71, _0x5ea718, _0x290f1f);
    });
  }}, _0x37953b = {root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: ![], ignorePermissions: !![], trackingDelegate: {}, tracking: {openFlags: {READ: 1, WRITE: 2}}, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: function (_0x424047, _0x675b5e) {
    _0x424047 = _0x4fc216["resolve"](_0x37953b["cwd"](), _0x424047), _0x675b5e = _0x675b5e || {};
    if (!_0x424047) return {path: "", node: null};
    var _0x51326e = {follow_mount: !![], recurse_count: 0};
    for (var _0x5cb999 in _0x51326e) {
      _0x675b5e[_0x5cb999] === undefined && (_0x675b5e[_0x5cb999] = _0x51326e[_0x5cb999]);
    }
    if (_0x675b5e["recurse_count"] > 8) throw new _0x37953b["ErrnoError"](32);
    var _0x4265e4 = _0x38ed9d["normalizeArray"](_0x424047["split"]("/")["filter"](function (_0x205a1a) {
      return !!_0x205a1a;
    }), ![]), _0x5d2b63 = _0x37953b["root"], _0x53758b = "/";
    for (var _0x36cf97 = 0; _0x36cf97 < _0x4265e4["length"]; _0x36cf97++) {
      var _0x166332 = _0x36cf97 === _0x4265e4["length"] - 1;
      if (_0x166332 && _0x675b5e["parent"]) break;
      _0x5d2b63 = _0x37953b["lookupNode"](_0x5d2b63, _0x4265e4[_0x36cf97]), _0x53758b = _0x38ed9d["join2"](_0x53758b, _0x4265e4[_0x36cf97]);
      _0x37953b["isMountpoint"](_0x5d2b63) && ((!_0x166332 || _0x166332 && _0x675b5e["follow_mount"]) && (_0x5d2b63 = _0x5d2b63["mounted"]["root"]));
      if (!_0x166332 || _0x675b5e["follow"]) {
        var _0x2c6c8b = 0;
        while (_0x37953b["isLink"](_0x5d2b63["mode"])) {
          var _0x495121 = _0x37953b["readlink"](_0x53758b);
          _0x53758b = _0x4fc216["resolve"](_0x38ed9d["dirname"](_0x53758b), _0x495121);
          var _0x511021 = _0x37953b["lookupPath"](_0x53758b, {recurse_count: _0x675b5e["recurse_count"]});
          _0x5d2b63 = _0x511021["node"];
          if (_0x2c6c8b++ > 40) throw new _0x37953b["ErrnoError"](32);
        }
      }
    }
    return {path: _0x53758b, node: _0x5d2b63};
  }, getPath: function (_0x4f9376) {
    var _0x3de317;
    while (!![]) {
      if (_0x37953b["isRoot"](_0x4f9376)) {
        var _0x13e0af = _0x4f9376["mount"]["mountpoint"];
        if (!_0x3de317) return _0x13e0af;
        return _0x13e0af[_0x13e0af["length"] - 1] !== "/" ? _0x13e0af + "/" + _0x3de317 : _0x13e0af + _0x3de317;
      }
      _0x3de317 = _0x3de317 ? _0x4f9376["name"] + "/" + _0x3de317 : _0x4f9376["name"], _0x4f9376 = _0x4f9376["parent"];
    }
  }, hashName: function (_0x15ed1c, _0x2c3f27) {
    var _0x1d8fe7 = 0;
    for (var _0x5baf44 = 0; _0x5baf44 < _0x2c3f27["length"]; _0x5baf44++) {
      _0x1d8fe7 = (_0x1d8fe7 << 5) - _0x1d8fe7 + _0x2c3f27["charCodeAt"](_0x5baf44) | 0;
    }
    return (_0x15ed1c + _0x1d8fe7 >>> 0) % _0x37953b["nameTable"]["length"];
  }, hashAddNode: function (_0x410946) {
    var _0x2f2d93 = _0x37953b["hashName"](_0x410946["parent"]["id"], _0x410946["name"]);
    _0x410946["name_next"] = _0x37953b["nameTable"][_0x2f2d93], _0x37953b["nameTable"][_0x2f2d93] = _0x410946;
  }, hashRemoveNode: function (_0x1d9282) {
    var _0x446117 = _0x37953b["hashName"](_0x1d9282["parent"]["id"], _0x1d9282["name"]);
    if (_0x37953b["nameTable"][_0x446117] === _0x1d9282) _0x37953b["nameTable"][_0x446117] = _0x1d9282["name_next"]; else {
      var _0x19606f = _0x37953b["nameTable"][_0x446117];
      while (_0x19606f) {
        if (_0x19606f["name_next"] === _0x1d9282) {
          _0x19606f["name_next"] = _0x1d9282["name_next"];
          break;
        }
        _0x19606f = _0x19606f["name_next"];
      }
    }
  }, lookupNode: function (_0x563d16, _0x5b762c) {
    var _0x486884 = _0x37953b["mayLookup"](_0x563d16);
    if (_0x486884) throw new _0x37953b["ErrnoError"](_0x486884, _0x563d16);
    var _0x423e1f = _0x37953b["hashName"](_0x563d16["id"], _0x5b762c);
    for (var _0x10e333 = _0x37953b["nameTable"][_0x423e1f]; _0x10e333; _0x10e333 = _0x10e333["name_next"]) {
      var _0x3e1b0e = _0x10e333["name"];
      if (_0x10e333["parent"]["id"] === _0x563d16["id"] && _0x3e1b0e === _0x5b762c) return _0x10e333;
    }
    return _0x37953b["lookup"](_0x563d16, _0x5b762c);
  }, createNode: function (_0x1e0a46, _0x3febb9, _0x430459, _0x167310) {
    var _0x3f09a5 = new _0x37953b["FSNode"](_0x1e0a46, _0x3febb9, _0x430459, _0x167310);
    return _0x37953b["hashAddNode"](_0x3f09a5), _0x3f09a5;
  }, destroyNode: function (_0x16a575) {
    _0x37953b["hashRemoveNode"](_0x16a575);
  }, isRoot: function (_0x2f216b) {
    return _0x2f216b === _0x2f216b["parent"];
  }, isMountpoint: function (_0x18aa2a) {
    return !!_0x18aa2a["mounted"];
  }, isFile: function (_0x4c9679) {
    return (_0x4c9679 & 61440) === 32768;
  }, isDir: function (_0x2c09c6) {
    return (_0x2c09c6 & 61440) === 16384;
  }, isLink: function (_0x59dace) {
    return (_0x59dace & 61440) === 40960;
  }, isChrdev: function (_0x5d9ba7) {
    return (_0x5d9ba7 & 61440) === 8192;
  }, isBlkdev: function (_0x1b9417) {
    return (_0x1b9417 & 61440) === 24576;
  }, isFIFO: function (_0x3f4776) {
    return (_0x3f4776 & 61440) === 4096;
  }, isSocket: function (_0x5c379b) {
    return (_0x5c379b & 49152) === 49152;
  }, flagModes: {r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090}, modeStringToFlags: function (_0x1acdf4) {
    var _0x4c6132 = _0x37953b["flagModes"][_0x1acdf4];
    if (typeof _0x4c6132 === "undefined") throw new Error("Unknown file open mode: " + _0x1acdf4);
    return _0x4c6132;
  }, flagsToPermissionString: function (_0x52b1a8) {
    var _0x5ce7fb = ["r", "w", "rw"][_0x52b1a8 & 3];
    return _0x52b1a8 & 512 && (_0x5ce7fb += "w"), _0x5ce7fb;
  }, nodePermissions: function (_0x5e23c4, _0x137600) {
    if (_0x37953b["ignorePermissions"]) return 0;
    if (_0x137600["includes"]("r") && !(_0x5e23c4["mode"] & 292)) return 2; else {
      if (_0x137600["includes"]("w") && !(_0x5e23c4["mode"] & 146)) return 2; else {
        if (_0x137600["includes"]("x") && !(_0x5e23c4["mode"] & 73)) return 2;
      }
    }
    return 0;
  }, mayLookup: function (_0x5c6b9b) {
    var _0x226f40 = _0x37953b["nodePermissions"](_0x5c6b9b, "x");
    if (_0x226f40) return _0x226f40;
    if (!_0x5c6b9b["node_ops"]["lookup"]) return 2;
    return 0;
  }, mayCreate: function (_0x34a7e3, _0x5df785) {
    try {
      var _0xde3fa8 = _0x37953b["lookupNode"](_0x34a7e3, _0x5df785);
      return 20;
    } catch (_0x6c46d0) {}
    return _0x37953b["nodePermissions"](_0x34a7e3, "wx");
  }, mayDelete: function (_0x35bf82, _0x48ad5b, _0x4748ff) {
    var _0x27577c;
    try {
      _0x27577c = _0x37953b["lookupNode"](_0x35bf82, _0x48ad5b);
    } catch (_0xeb6dbe) {
      return _0xeb6dbe["errno"];
    }
    var _0xe1c429 = _0x37953b["nodePermissions"](_0x35bf82, "wx");
    if (_0xe1c429) return _0xe1c429;
    if (_0x4748ff) {
      if (!_0x37953b["isDir"](_0x27577c["mode"])) return 54;
      if (_0x37953b["isRoot"](_0x27577c) || _0x37953b["getPath"](_0x27577c) === _0x37953b["cwd"]()) return 10;
    } else {
      if (_0x37953b["isDir"](_0x27577c["mode"])) return 31;
    }
    return 0;
  }, mayOpen: function (_0x15e2c4, _0x717047) {
    if (!_0x15e2c4) return 44;
    if (_0x37953b["isLink"](_0x15e2c4["mode"])) return 32; else {
      if (_0x37953b["isDir"](_0x15e2c4["mode"])) {
        if (_0x37953b["flagsToPermissionString"](_0x717047) !== "r" || _0x717047 & 512) return 31;
      }
    }
    return _0x37953b["nodePermissions"](_0x15e2c4, _0x37953b["flagsToPermissionString"](_0x717047));
  }, MAX_OPEN_FDS: 4096, nextfd: function (_0x73ac9a, _0x22041f) {
    _0x73ac9a = _0x73ac9a || 0, _0x22041f = _0x22041f || _0x37953b["MAX_OPEN_FDS"];
    for (var _0x3b1e73 = _0x73ac9a; _0x3b1e73 <= _0x22041f; _0x3b1e73++) {
      if (!_0x37953b["streams"][_0x3b1e73]) return _0x3b1e73;
    }
    throw new _0x37953b["ErrnoError"](33);
  }, getStream: function (_0x20bee8) {
    return _0x37953b["streams"][_0x20bee8];
  }, createStream: function (_0x3bf7de, _0x560dd8, _0x2bd665) {
    !_0x37953b["FSStream"] && (_0x37953b["FSStream"] = function () {}, _0x37953b["FSStream"]["prototype"] = {object: {get: function () {
      return this["node"];
    }, set: function (_0x41a77c) {
      this["node"] = _0x41a77c;
    }}, isRead: {get: function () {
      return (this["flags"] & 2097155) !== 1;
    }}, isWrite: {get: function () {
      return (this["flags"] & 2097155) !== 0;
    }}, isAppend: {get: function () {
      return this["flags"] & 1024;
    }}});
    var _0x1a4444 = new _0x37953b["FSStream"];
    for (var _0x483d71 in _0x3bf7de) {
      _0x1a4444[_0x483d71] = _0x3bf7de[_0x483d71];
    }
    _0x3bf7de = _0x1a4444;
    var _0x491f35 = _0x37953b["nextfd"](_0x560dd8, _0x2bd665);
    return _0x3bf7de["fd"] = _0x491f35, _0x37953b["streams"][_0x491f35] = _0x3bf7de, _0x3bf7de;
  }, closeStream: function (_0xc58dee) {
    _0x37953b["streams"][_0xc58dee] = null;
  }, chrdev_stream_ops: {open: function (_0x40b421) {
    var _0x55bda4 = _0x37953b["getDevice"](_0x40b421["node"]["rdev"]);
    _0x40b421["stream_ops"] = _0x55bda4["stream_ops"], _0x40b421["stream_ops"]["open"] && _0x40b421["stream_ops"]["open"](_0x40b421);
  }, llseek: function () {
    throw new _0x37953b["ErrnoError"](70);
  }}, major: function (_0x1342cd) {
    return _0x1342cd >> 8;
  }, minor: function (_0x421db3) {
    return _0x421db3 & 255;
  }, makedev: function (_0x5e8cf1, _0x1d64f5) {
    return _0x5e8cf1 << 8 | _0x1d64f5;
  }, registerDevice: function (_0x20b92f, _0x542716) {
    _0x37953b["devices"][_0x20b92f] = {stream_ops: _0x542716};
  }, getDevice: function (_0x2e9a83) {
    return _0x37953b["devices"][_0x2e9a83];
  }, getMounts: function (_0x21ec82) {
    var _0x47575d = [], _0x52168e = [_0x21ec82];
    while (_0x52168e["length"]) {
      var _0x2021aa = _0x52168e["pop"]();
      _0x47575d["push"](_0x2021aa), _0x52168e["push"]["apply"](_0x52168e, _0x2021aa["mounts"]);
    }
    return _0x47575d;
  }, syncfs: function (_0x2cc732, _0x1fd55a) {
    typeof _0x2cc732 === "function" && (_0x1fd55a = _0x2cc732, _0x2cc732 = ![]);
    _0x37953b["syncFSRequests"]++;
    _0x37953b["syncFSRequests"] > 1 && _0x366b43("warning: " + _0x37953b["syncFSRequests"] + " FS.syncfs operations in flight at once, probably just doing extra work");
    var _0x54f352 = _0x37953b["getMounts"](_0x37953b["root"]["mount"]), _0x14e1bd = 0;
    function _0x5d4f52(_0x52861e) {
      return _0x37953b["syncFSRequests"]--, _0x1fd55a(_0x52861e);
    }
    function _0x3f4bc7(_0x5c78ac) {
      if (_0x5c78ac) {
        if (!_0x3f4bc7["errored"]) return _0x3f4bc7["errored"] = !![], _0x5d4f52(_0x5c78ac);
        return;
      }
      ++_0x14e1bd >= _0x54f352["length"] && _0x5d4f52(null);
    }
    _0x54f352["forEach"](function (_0x2e66f7) {
      if (!_0x2e66f7["type"]["syncfs"]) return _0x3f4bc7(null);
      _0x2e66f7["type"]["syncfs"](_0x2e66f7, _0x2cc732, _0x3f4bc7);
    });
  }, mount: function (_0x41edd6, _0x3b5dd9, _0x22764e) {
    var _0x49e32f = _0x22764e === "/", _0x5947dc = !_0x22764e, _0x245e72;
    if (_0x49e32f && _0x37953b["root"]) throw new _0x37953b["ErrnoError"](10); else {
      if (!_0x49e32f && !_0x5947dc) {
        var _0x30e528 = _0x37953b["lookupPath"](_0x22764e, {follow_mount: ![]});
        _0x22764e = _0x30e528["path"], _0x245e72 = _0x30e528["node"];
        if (_0x37953b["isMountpoint"](_0x245e72)) throw new _0x37953b["ErrnoError"](10);
        if (!_0x37953b["isDir"](_0x245e72["mode"])) throw new _0x37953b["ErrnoError"](54);
      }
    }
    var _0x80e1bd = {type: _0x41edd6, opts: _0x3b5dd9, mountpoint: _0x22764e, mounts: []}, _0x2f1eeb = _0x41edd6["mount"](_0x80e1bd);
    _0x2f1eeb["mount"] = _0x80e1bd, _0x80e1bd["root"] = _0x2f1eeb;
    if (_0x49e32f) _0x37953b["root"] = _0x2f1eeb; else _0x245e72 && (_0x245e72["mounted"] = _0x80e1bd, _0x245e72["mount"] && _0x245e72["mount"]["mounts"]["push"](_0x80e1bd));
    return _0x2f1eeb;
  }, unmount: function (_0x4dc3c7) {
    var _0x1502b0 = _0x37953b["lookupPath"](_0x4dc3c7, {follow_mount: ![]});
    if (!_0x37953b["isMountpoint"](_0x1502b0["node"])) throw new _0x37953b["ErrnoError"](28);
    var _0xf24661 = _0x1502b0["node"], _0x1ee961 = _0xf24661["mounted"], _0x42f10d = _0x37953b["getMounts"](_0x1ee961);
    Object["keys"](_0x37953b["nameTable"])["forEach"](function (_0x3683db) {
      var _0x4d0b28 = _0x37953b["nameTable"][_0x3683db];
      while (_0x4d0b28) {
        var _0x59d1a3 = _0x4d0b28["name_next"];
        _0x42f10d["includes"](_0x4d0b28["mount"]) && _0x37953b["destroyNode"](_0x4d0b28), _0x4d0b28 = _0x59d1a3;
      }
    }), _0xf24661["mounted"] = null;
    var _0x28e4ef = _0xf24661["mount"]["mounts"]["indexOf"](_0x1ee961);
    _0xf24661["mount"]["mounts"]["splice"](_0x28e4ef, 1);
  }, lookup: function (_0x46253f, _0x287937) {
    return _0x46253f["node_ops"]["lookup"](_0x46253f, _0x287937);
  }, mknod: function (_0x283656, _0x2eae92, _0x201a72) {
    var _0x346626 = _0x37953b["lookupPath"](_0x283656, {parent: !![]}), _0x5ae2ad = _0x346626["node"], _0x37e14d = _0x38ed9d["basename"](_0x283656);
    if (!_0x37e14d || _0x37e14d === "." || _0x37e14d === "..") throw new _0x37953b["ErrnoError"](28);
    var _0x3fbc87 = _0x37953b["mayCreate"](_0x5ae2ad, _0x37e14d);
    if (_0x3fbc87) throw new _0x37953b["ErrnoError"](_0x3fbc87);
    if (!_0x5ae2ad["node_ops"]["mknod"]) throw new _0x37953b["ErrnoError"](63);
    return _0x5ae2ad["node_ops"]["mknod"](_0x5ae2ad, _0x37e14d, _0x2eae92, _0x201a72);
  }, create: function (_0x5c7cdc, _0x6bc7e0) {
    return _0x6bc7e0 = _0x6bc7e0 !== undefined ? _0x6bc7e0 : 438, _0x6bc7e0 &= 4095, _0x6bc7e0 |= 32768, _0x37953b["mknod"](_0x5c7cdc, _0x6bc7e0, 0);
  }, mkdir: function (_0x56e1c2, _0x4c240e) {
    return _0x4c240e = _0x4c240e !== undefined ? _0x4c240e : 511, _0x4c240e &= 511 | 512, _0x4c240e |= 16384, _0x37953b["mknod"](_0x56e1c2, _0x4c240e, 0);
  }, mkdirTree: function (_0x175ae5, _0x13b534) {
    var _0x181eba = _0x175ae5["split"]("/"), _0x5660ed = "";
    for (var _0x371010 = 0; _0x371010 < _0x181eba["length"]; ++_0x371010) {
      if (!_0x181eba[_0x371010]) continue;
      _0x5660ed += "/" + _0x181eba[_0x371010];
      try {
        _0x37953b["mkdir"](_0x5660ed, _0x13b534);
      } catch (_0x12863f) {
        if (_0x12863f["errno"] != 20) throw _0x12863f;
      }
    }
  }, mkdev: function (_0x8cd484, _0x2ea3b8, _0x1de274) {
    return typeof _0x1de274 === "undefined" && (_0x1de274 = _0x2ea3b8, _0x2ea3b8 = 438), _0x2ea3b8 |= 8192, _0x37953b["mknod"](_0x8cd484, _0x2ea3b8, _0x1de274);
  }, symlink: function (_0x51cf40, _0x1d3feb) {
    if (!_0x4fc216["resolve"](_0x51cf40)) throw new _0x37953b["ErrnoError"](44);
    var _0x705537 = _0x37953b["lookupPath"](_0x1d3feb, {parent: !![]}), _0x51f660 = _0x705537["node"];
    if (!_0x51f660) throw new _0x37953b["ErrnoError"](44);
    var _0x411150 = _0x38ed9d["basename"](_0x1d3feb), _0x58c93d = _0x37953b["mayCreate"](_0x51f660, _0x411150);
    if (_0x58c93d) throw new _0x37953b["ErrnoError"](_0x58c93d);
    if (!_0x51f660["node_ops"]["symlink"]) throw new _0x37953b["ErrnoError"](63);
    return _0x51f660["node_ops"]["symlink"](_0x51f660, _0x411150, _0x51cf40);
  }, rename: function (_0x44ba65, _0x45e3d6) {
    var _0x52dcef = _0x38ed9d["dirname"](_0x44ba65), _0x2881fc = _0x38ed9d["dirname"](_0x45e3d6), _0xe7247f = _0x38ed9d["basename"](_0x44ba65), _0xafd6a0 = _0x38ed9d["basename"](_0x45e3d6), _0x42f50e, _0x5a978b, _0x265148;
    _0x42f50e = _0x37953b["lookupPath"](_0x44ba65, {parent: !![]}), _0x5a978b = _0x42f50e["node"], _0x42f50e = _0x37953b["lookupPath"](_0x45e3d6, {parent: !![]}), _0x265148 = _0x42f50e["node"];
    if (!_0x5a978b || !_0x265148) throw new _0x37953b["ErrnoError"](44);
    if (_0x5a978b["mount"] !== _0x265148["mount"]) throw new _0x37953b["ErrnoError"](75);
    var _0x51fc0c = _0x37953b["lookupNode"](_0x5a978b, _0xe7247f), _0x2d354b = _0x4fc216["relative"](_0x44ba65, _0x2881fc);
    if (_0x2d354b["charAt"](0) !== ".") throw new _0x37953b["ErrnoError"](28);
    _0x2d354b = _0x4fc216["relative"](_0x45e3d6, _0x52dcef);
    if (_0x2d354b["charAt"](0) !== ".") throw new _0x37953b["ErrnoError"](55);
    var _0x4ce06d;
    try {
      _0x4ce06d = _0x37953b["lookupNode"](_0x265148, _0xafd6a0);
    } catch (_0x12308e) {}
    if (_0x51fc0c === _0x4ce06d) return;
    var _0xf00b24 = _0x37953b["isDir"](_0x51fc0c["mode"]), _0x30b9c4 = _0x37953b["mayDelete"](_0x5a978b, _0xe7247f, _0xf00b24);
    if (_0x30b9c4) throw new _0x37953b["ErrnoError"](_0x30b9c4);
    _0x30b9c4 = _0x4ce06d ? _0x37953b["mayDelete"](_0x265148, _0xafd6a0, _0xf00b24) : _0x37953b["mayCreate"](_0x265148, _0xafd6a0);
    if (_0x30b9c4) throw new _0x37953b["ErrnoError"](_0x30b9c4);
    if (!_0x5a978b["node_ops"]["rename"]) throw new _0x37953b["ErrnoError"](63);
    if (_0x37953b["isMountpoint"](_0x51fc0c) || _0x4ce06d && _0x37953b["isMountpoint"](_0x4ce06d)) throw new _0x37953b["ErrnoError"](10);
    if (_0x265148 !== _0x5a978b) {
      _0x30b9c4 = _0x37953b["nodePermissions"](_0x5a978b, "w");
      if (_0x30b9c4) throw new _0x37953b["ErrnoError"](_0x30b9c4);
    }
    try {
      _0x37953b["trackingDelegate"]["willMovePath"] && _0x37953b["trackingDelegate"]["willMovePath"](_0x44ba65, _0x45e3d6);
    } catch (_0x3a4035) {
      _0x366b43("FS.trackingDelegate['willMovePath']('" + _0x44ba65 + "', '" + _0x45e3d6 + "') threw an exception: " + _0x3a4035["message"]);
    }
    _0x37953b["hashRemoveNode"](_0x51fc0c);
    try {
      _0x5a978b["node_ops"]["rename"](_0x51fc0c, _0x265148, _0xafd6a0);
    } catch (_0x5e0f86) {
      throw _0x5e0f86;
    } finally {
      _0x37953b["hashAddNode"](_0x51fc0c);
    }
    try {
      if (_0x37953b["trackingDelegate"]["onMovePath"]) _0x37953b["trackingDelegate"]["onMovePath"](_0x44ba65, _0x45e3d6);
    } catch (_0x95cdf2) {
      _0x366b43("FS.trackingDelegate['onMovePath']('" + _0x44ba65 + "', '" + _0x45e3d6 + "') threw an exception: " + _0x95cdf2["message"]);
    }
  }, rmdir: function (_0x12ffe3) {
    var _0x1cb1b3 = _0x37953b["lookupPath"](_0x12ffe3, {parent: !![]}), _0x44a1fe = _0x1cb1b3["node"], _0x30895a = _0x38ed9d["basename"](_0x12ffe3), _0x3ed82b = _0x37953b["lookupNode"](_0x44a1fe, _0x30895a), _0x25f14d = _0x37953b["mayDelete"](_0x44a1fe, _0x30895a, !![]);
    if (_0x25f14d) throw new _0x37953b["ErrnoError"](_0x25f14d);
    if (!_0x44a1fe["node_ops"]["rmdir"]) throw new _0x37953b["ErrnoError"](63);
    if (_0x37953b["isMountpoint"](_0x3ed82b)) throw new _0x37953b["ErrnoError"](10);
    try {
      _0x37953b["trackingDelegate"]["willDeletePath"] && _0x37953b["trackingDelegate"]["willDeletePath"](_0x12ffe3);
    } catch (_0x2a77c3) {
      _0x366b43("FS.trackingDelegate['willDeletePath']('" + _0x12ffe3 + "') threw an exception: " + _0x2a77c3["message"]);
    }
    _0x44a1fe["node_ops"]["rmdir"](_0x44a1fe, _0x30895a), _0x37953b["destroyNode"](_0x3ed82b);
    try {
      if (_0x37953b["trackingDelegate"]["onDeletePath"]) _0x37953b["trackingDelegate"]["onDeletePath"](_0x12ffe3);
    } catch (_0x17ca33) {
      _0x366b43("FS.trackingDelegate['onDeletePath']('" + _0x12ffe3 + "') threw an exception: " + _0x17ca33["message"]);
    }
  }, readdir: function (_0x83c8f2) {
    var _0x5deb02 = _0x37953b["lookupPath"](_0x83c8f2, {follow: !![]}), _0x1de257 = _0x5deb02["node"];
    if (!_0x1de257["node_ops"]["readdir"]) throw new _0x37953b["ErrnoError"](54);
    return _0x1de257["node_ops"]["readdir"](_0x1de257);
  }, unlink: function (_0x30a1d7) {
    var _0x4cc6c6 = _0x37953b["lookupPath"](_0x30a1d7, {parent: !![]}), _0x518a7d = _0x4cc6c6["node"], _0x1c4a8 = _0x38ed9d["basename"](_0x30a1d7), _0x569fcc = _0x37953b["lookupNode"](_0x518a7d, _0x1c4a8), _0x5866e4 = _0x37953b["mayDelete"](_0x518a7d, _0x1c4a8, ![]);
    if (_0x5866e4) throw new _0x37953b["ErrnoError"](_0x5866e4);
    if (!_0x518a7d["node_ops"]["unlink"]) throw new _0x37953b["ErrnoError"](63);
    if (_0x37953b["isMountpoint"](_0x569fcc)) throw new _0x37953b["ErrnoError"](10);
    try {
      _0x37953b["trackingDelegate"]["willDeletePath"] && _0x37953b["trackingDelegate"]["willDeletePath"](_0x30a1d7);
    } catch (_0x519dcb) {
      _0x366b43("FS.trackingDelegate['willDeletePath']('" + _0x30a1d7 + "') threw an exception: " + _0x519dcb["message"]);
    }
    _0x518a7d["node_ops"]["unlink"](_0x518a7d, _0x1c4a8), _0x37953b["destroyNode"](_0x569fcc);
    try {
      if (_0x37953b["trackingDelegate"]["onDeletePath"]) _0x37953b["trackingDelegate"]["onDeletePath"](_0x30a1d7);
    } catch (_0x3b9d37) {
      _0x366b43("FS.trackingDelegate['onDeletePath']('" + _0x30a1d7 + "') threw an exception: " + _0x3b9d37["message"]);
    }
  }, readlink: function (_0x5a1359) {
    var _0x218a68 = _0x37953b["lookupPath"](_0x5a1359), _0x48d6d5 = _0x218a68["node"];
    if (!_0x48d6d5) throw new _0x37953b["ErrnoError"](44);
    if (!_0x48d6d5["node_ops"]["readlink"]) throw new _0x37953b["ErrnoError"](28);
    return _0x4fc216["resolve"](_0x37953b["getPath"](_0x48d6d5["parent"]), _0x48d6d5["node_ops"]["readlink"](_0x48d6d5));
  }, stat: function (_0x26ccd2, _0x4892bd) {
    var _0x5da957 = _0x37953b["lookupPath"](_0x26ccd2, {follow: !_0x4892bd}), _0x2274cb = _0x5da957["node"];
    if (!_0x2274cb) throw new _0x37953b["ErrnoError"](44);
    if (!_0x2274cb["node_ops"]["getattr"]) throw new _0x37953b["ErrnoError"](63);
    return _0x2274cb["node_ops"]["getattr"](_0x2274cb);
  }, lstat: function (_0x324888) {
    return _0x37953b["stat"](_0x324888, !![]);
  }, chmod: function (_0x14fb5b, _0x112191, _0x2b1b23) {
    var _0xe6480a;
    if (typeof _0x14fb5b === "string") {
      var _0x1cee80 = _0x37953b["lookupPath"](_0x14fb5b, {follow: !_0x2b1b23});
      _0xe6480a = _0x1cee80["node"];
    } else _0xe6480a = _0x14fb5b;
    if (!_0xe6480a["node_ops"]["setattr"]) throw new _0x37953b["ErrnoError"](63);
    _0xe6480a["node_ops"]["setattr"](_0xe6480a, {mode: _0x112191 & 4095 | _0xe6480a["mode"] & ~4095, timestamp: Date["now"]()});
  }, lchmod: function (_0x285157, _0x441423) {
    _0x37953b["chmod"](_0x285157, _0x441423, !![]);
  }, fchmod: function (_0x45e798, _0x5e0b17) {
    var _0x140e3f = _0x37953b["getStream"](_0x45e798);
    if (!_0x140e3f) throw new _0x37953b["ErrnoError"](8);
    _0x37953b["chmod"](_0x140e3f["node"], _0x5e0b17);
  }, chown: function (_0x1d8558, _0x206901, _0x591b93, _0x576614) {
    var _0x536665;
    if (typeof _0x1d8558 === "string") {
      var _0xfac3ba = _0x37953b["lookupPath"](_0x1d8558, {follow: !_0x576614});
      _0x536665 = _0xfac3ba["node"];
    } else _0x536665 = _0x1d8558;
    if (!_0x536665["node_ops"]["setattr"]) throw new _0x37953b["ErrnoError"](63);
    _0x536665["node_ops"]["setattr"](_0x536665, {timestamp: Date["now"]()});
  }, lchown: function (_0x3a9bba, _0x3c01fc, _0xeec539) {
    _0x37953b["chown"](_0x3a9bba, _0x3c01fc, _0xeec539, !![]);
  }, fchown: function (_0x135d5e, _0x1523c6, _0x4b44a5) {
    var _0x4a3e53 = _0x37953b["getStream"](_0x135d5e);
    if (!_0x4a3e53) throw new _0x37953b["ErrnoError"](8);
    _0x37953b["chown"](_0x4a3e53["node"], _0x1523c6, _0x4b44a5);
  }, truncate: function (_0x28cf01, _0x121063) {
    if (_0x121063 < 0) throw new _0x37953b["ErrnoError"](28);
    var _0x232372;
    if (typeof _0x28cf01 === "string") {
      var _0x490632 = _0x37953b["lookupPath"](_0x28cf01, {follow: !![]});
      _0x232372 = _0x490632["node"];
    } else _0x232372 = _0x28cf01;
    if (!_0x232372["node_ops"]["setattr"]) throw new _0x37953b["ErrnoError"](63);
    if (_0x37953b["isDir"](_0x232372["mode"])) throw new _0x37953b["ErrnoError"](31);
    if (!_0x37953b["isFile"](_0x232372["mode"])) throw new _0x37953b["ErrnoError"](28);
    var _0xe4ae9e = _0x37953b["nodePermissions"](_0x232372, "w");
    if (_0xe4ae9e) throw new _0x37953b["ErrnoError"](_0xe4ae9e);
    _0x232372["node_ops"]["setattr"](_0x232372, {size: _0x121063, timestamp: Date["now"]()});
  }, ftruncate: function (_0x1df0e5, _0x1f543a) {
    var _0x2ae9d5 = _0x37953b["getStream"](_0x1df0e5);
    if (!_0x2ae9d5) throw new _0x37953b["ErrnoError"](8);
    if ((_0x2ae9d5["flags"] & 2097155) === 0) throw new _0x37953b["ErrnoError"](28);
    _0x37953b["truncate"](_0x2ae9d5["node"], _0x1f543a);
  }, utime: function (_0x256f1a, _0x273081, _0x24026b) {
    var _0x122816 = _0x37953b["lookupPath"](_0x256f1a, {follow: !![]}), _0x5c45f2 = _0x122816["node"];
    _0x5c45f2["node_ops"]["setattr"](_0x5c45f2, {timestamp: Math["max"](_0x273081, _0x24026b)});
  }, open: function (_0x36b613, _0x24bd46, _0x4dd2e9, _0x128055, _0x1cba34) {
    if (_0x36b613 === "") throw new _0x37953b["ErrnoError"](44);
    _0x24bd46 = typeof _0x24bd46 === "string" ? _0x37953b["modeStringToFlags"](_0x24bd46) : _0x24bd46, _0x4dd2e9 = typeof _0x4dd2e9 === "undefined" ? 438 : _0x4dd2e9;
    _0x24bd46 & 64 ? _0x4dd2e9 = _0x4dd2e9 & 4095 | 32768 : _0x4dd2e9 = 0;
    var _0x1cf68f;
    if (typeof _0x36b613 === "object") _0x1cf68f = _0x36b613; else {
      _0x36b613 = _0x38ed9d["normalize"](_0x36b613);
      try {
        var _0x83dae6 = _0x37953b["lookupPath"](_0x36b613, {follow: !(_0x24bd46 & 131072)});
        _0x1cf68f = _0x83dae6["node"];
      } catch (_0x1573d9) {}
    }
    var _0x3ee2fc = ![];
    if (_0x24bd46 & 64) {
      if (_0x1cf68f) {
        if (_0x24bd46 & 128) throw new _0x37953b["ErrnoError"](20);
      } else _0x1cf68f = _0x37953b["mknod"](_0x36b613, _0x4dd2e9, 0), _0x3ee2fc = !![];
    }
    if (!_0x1cf68f) throw new _0x37953b["ErrnoError"](44);
    _0x37953b["isChrdev"](_0x1cf68f["mode"]) && (_0x24bd46 &= ~512);
    if (_0x24bd46 & 65536 && !_0x37953b["isDir"](_0x1cf68f["mode"])) throw new _0x37953b["ErrnoError"](54);
    if (!_0x3ee2fc) {
      var _0xdd90b3 = _0x37953b["mayOpen"](_0x1cf68f, _0x24bd46);
      if (_0xdd90b3) throw new _0x37953b["ErrnoError"](_0xdd90b3);
    }
    _0x24bd46 & 512 && _0x37953b["truncate"](_0x1cf68f, 0);
    _0x24bd46 &= ~(128 | 512 | 131072);
    var _0x317204 = _0x37953b["createStream"]({node: _0x1cf68f, path: _0x37953b["getPath"](_0x1cf68f), flags: _0x24bd46, seekable: !![], position: 0, stream_ops: _0x1cf68f["stream_ops"], ungotten: [], error: ![]}, _0x128055, _0x1cba34);
    _0x317204["stream_ops"]["open"] && _0x317204["stream_ops"]["open"](_0x317204);
    if (_0x3d01d3["logReadFiles"] && !(_0x24bd46 & 1)) {
      if (!_0x37953b["readFiles"]) _0x37953b["readFiles"] = {};
      !(_0x36b613 in _0x37953b["readFiles"]) && (_0x37953b["readFiles"][_0x36b613] = 1, _0x366b43("FS.trackingDelegate error on read file: " + _0x36b613));
    }
    try {
      if (_0x37953b["trackingDelegate"]["onOpenFile"]) {
        var _0x181d2b = 0;
        (_0x24bd46 & 2097155) !== 1 && (_0x181d2b |= _0x37953b["tracking"]["openFlags"]["READ"]), (_0x24bd46 & 2097155) !== 0 && (_0x181d2b |= _0x37953b["tracking"]["openFlags"]["WRITE"]), _0x37953b["trackingDelegate"]["onOpenFile"](_0x36b613, _0x181d2b);
      }
    } catch (_0x320357) {
      _0x366b43("FS.trackingDelegate['onOpenFile']('" + _0x36b613 + "', flags) threw an exception: " + _0x320357["message"]);
    }
    return _0x317204;
  }, close: function (_0x2ce200) {
    if (_0x37953b["isClosed"](_0x2ce200)) throw new _0x37953b["ErrnoError"](8);
    if (_0x2ce200["getdents"]) _0x2ce200["getdents"] = null;
    try {
      _0x2ce200["stream_ops"]["close"] && _0x2ce200["stream_ops"]["close"](_0x2ce200);
    } catch (_0x35566e) {
      throw _0x35566e;
    } finally {
      _0x37953b["closeStream"](_0x2ce200["fd"]);
    }
    _0x2ce200["fd"] = null;
  }, isClosed: function (_0x3bd2b7) {
    return _0x3bd2b7["fd"] === null;
  }, llseek: function (_0x47b0bf, _0x13dd4e, _0x30a013) {
    if (_0x37953b["isClosed"](_0x47b0bf)) throw new _0x37953b["ErrnoError"](8);
    if (!_0x47b0bf["seekable"] || !_0x47b0bf["stream_ops"]["llseek"]) throw new _0x37953b["ErrnoError"](70);
    if (_0x30a013 != 0 && _0x30a013 != 1 && _0x30a013 != 2) throw new _0x37953b["ErrnoError"](28);
    return _0x47b0bf["position"] = _0x47b0bf["stream_ops"]["llseek"](_0x47b0bf, _0x13dd4e, _0x30a013), _0x47b0bf["ungotten"] = [], _0x47b0bf["position"];
  }, read: function (_0x369bbd, _0x272783, _0x34f13a, _0x7bfe27, _0x5a9570) {
    if (_0x7bfe27 < 0 || _0x5a9570 < 0) throw new _0x37953b["ErrnoError"](28);
    if (_0x37953b["isClosed"](_0x369bbd)) throw new _0x37953b["ErrnoError"](8);
    if ((_0x369bbd["flags"] & 2097155) === 1) throw new _0x37953b["ErrnoError"](8);
    if (_0x37953b["isDir"](_0x369bbd["node"]["mode"])) throw new _0x37953b["ErrnoError"](31);
    if (!_0x369bbd["stream_ops"]["read"]) throw new _0x37953b["ErrnoError"](28);
    var _0x4e901b = typeof _0x5a9570 !== "undefined";
    if (!_0x4e901b) _0x5a9570 = _0x369bbd["position"]; else {
      if (!_0x369bbd["seekable"]) throw new _0x37953b["ErrnoError"](70);
    }
    var _0x1d5a49 = _0x369bbd["stream_ops"]["read"](_0x369bbd, _0x272783, _0x34f13a, _0x7bfe27, _0x5a9570);
    if (!_0x4e901b) _0x369bbd["position"] += _0x1d5a49;
    return _0x1d5a49;
  }, write: function (_0x3cb138, _0x3bf9b2, _0x456f03, _0x118f20, _0x2e47aa, _0x4929e0) {
    if (_0x118f20 < 0 || _0x2e47aa < 0) throw new _0x37953b["ErrnoError"](28);
    if (_0x37953b["isClosed"](_0x3cb138)) throw new _0x37953b["ErrnoError"](8);
    if ((_0x3cb138["flags"] & 2097155) === 0) throw new _0x37953b["ErrnoError"](8);
    if (_0x37953b["isDir"](_0x3cb138["node"]["mode"])) throw new _0x37953b["ErrnoError"](31);
    if (!_0x3cb138["stream_ops"]["write"]) throw new _0x37953b["ErrnoError"](28);
    _0x3cb138["seekable"] && _0x3cb138["flags"] & 1024 && _0x37953b["llseek"](_0x3cb138, 0, 2);
    var _0x3b45e1 = typeof _0x2e47aa !== "undefined";
    if (!_0x3b45e1) _0x2e47aa = _0x3cb138["position"]; else {
      if (!_0x3cb138["seekable"]) throw new _0x37953b["ErrnoError"](70);
    }
    var _0x5cc24a = _0x3cb138["stream_ops"]["write"](_0x3cb138, _0x3bf9b2, _0x456f03, _0x118f20, _0x2e47aa, _0x4929e0);
    if (!_0x3b45e1) _0x3cb138["position"] += _0x5cc24a;
    try {
      if (_0x3cb138["path"] && _0x37953b["trackingDelegate"]["onWriteToFile"]) _0x37953b["trackingDelegate"]["onWriteToFile"](_0x3cb138["path"]);
    } catch (_0x31656a) {
      _0x366b43("FS.trackingDelegate['onWriteToFile']('" + _0x3cb138["path"] + "') threw an exception: " + _0x31656a["message"]);
    }
    return _0x5cc24a;
  }, allocate: function (_0x58b805, _0x4cb425, _0xcddf66) {
    if (_0x37953b["isClosed"](_0x58b805)) throw new _0x37953b["ErrnoError"](8);
    if (_0x4cb425 < 0 || _0xcddf66 <= 0) throw new _0x37953b["ErrnoError"](28);
    if ((_0x58b805["flags"] & 2097155) === 0) throw new _0x37953b["ErrnoError"](8);
    if (!_0x37953b["isFile"](_0x58b805["node"]["mode"]) && !_0x37953b["isDir"](_0x58b805["node"]["mode"])) throw new _0x37953b["ErrnoError"](43);
    if (!_0x58b805["stream_ops"]["allocate"]) throw new _0x37953b["ErrnoError"](138);
    _0x58b805["stream_ops"]["allocate"](_0x58b805, _0x4cb425, _0xcddf66);
  }, mmap: function (_0x2c887d, _0xf1009e, _0x1494c3, _0x24dcd4, _0x32cfdd, _0x5ed4d6) {
    if ((_0x32cfdd & 2) !== 0 && (_0x5ed4d6 & 2) === 0 && (_0x2c887d["flags"] & 2097155) !== 2) throw new _0x37953b["ErrnoError"](2);
    if ((_0x2c887d["flags"] & 2097155) === 1) throw new _0x37953b["ErrnoError"](2);
    if (!_0x2c887d["stream_ops"]["mmap"]) throw new _0x37953b["ErrnoError"](43);
    return _0x2c887d["stream_ops"]["mmap"](_0x2c887d, _0xf1009e, _0x1494c3, _0x24dcd4, _0x32cfdd, _0x5ed4d6);
  }, msync: function (_0x1e56df, _0x5c0850, _0x4e5289, _0x25826c, _0x39b982) {
    if (!_0x1e56df || !_0x1e56df["stream_ops"]["msync"]) return 0;
    return _0x1e56df["stream_ops"]["msync"](_0x1e56df, _0x5c0850, _0x4e5289, _0x25826c, _0x39b982);
  }, munmap: function (_0x5b8ed7) {
    return 0;
  }, ioctl: function (_0x538ad7, _0x4a7caa, _0x2befd5) {
    if (!_0x538ad7["stream_ops"]["ioctl"]) throw new _0x37953b["ErrnoError"](59);
    return _0x538ad7["stream_ops"]["ioctl"](_0x538ad7, _0x4a7caa, _0x2befd5);
  }, readFile: function (_0x4a003e, _0x4f6671) {
    _0x4f6671 = _0x4f6671 || {}, _0x4f6671["flags"] = _0x4f6671["flags"] || 0, _0x4f6671["encoding"] = _0x4f6671["encoding"] || "binary";
    if (_0x4f6671["encoding"] !== "utf8" && _0x4f6671["encoding"] !== "binary") throw new Error('Invalid encoding type "' + _0x4f6671["encoding"] + '"');
    var _0x3f8435, _0x130c47 = _0x37953b["open"](_0x4a003e, _0x4f6671["flags"]), _0x39533c = _0x37953b["stat"](_0x4a003e), _0xe13392 = _0x39533c["size"], _0x333085 = new Uint8Array(_0xe13392);
    _0x37953b["read"](_0x130c47, _0x333085, 0, _0xe13392, 0);
    if (_0x4f6671["encoding"] === "utf8") _0x3f8435 = _0x2c9ef7(_0x333085, 0); else _0x4f6671["encoding"] === "binary" && (_0x3f8435 = _0x333085);
    return _0x37953b["close"](_0x130c47), _0x3f8435;
  }, writeFile: function (_0x4b87b6, _0x357529, _0x4458a2) {
    _0x4458a2 = _0x4458a2 || {}, _0x4458a2["flags"] = _0x4458a2["flags"] || 577;
    var _0x5a4c42 = _0x37953b["open"](_0x4b87b6, _0x4458a2["flags"], _0x4458a2["mode"]);
    if (typeof _0x357529 === "string") {
      var _0x411f4f = new Uint8Array(_0x2c1249(_0x357529) + 1), _0x496da3 = _0x222a25(_0x357529, _0x411f4f, 0, _0x411f4f["length"]);
      _0x37953b["write"](_0x5a4c42, _0x411f4f, 0, _0x496da3, undefined, _0x4458a2["canOwn"]);
    } else {
      if (ArrayBuffer["isView"](_0x357529)) _0x37953b["write"](_0x5a4c42, _0x357529, 0, _0x357529["byteLength"], undefined, _0x4458a2["canOwn"]); else throw new Error("Unsupported data type");
    }
    _0x37953b["close"](_0x5a4c42);
  }, cwd: function () {
    return _0x37953b["currentPath"];
  }, chdir: function (_0x2601ae) {
    var _0x15ac69 = _0x37953b["lookupPath"](_0x2601ae, {follow: !![]});
    if (_0x15ac69["node"] === null) throw new _0x37953b["ErrnoError"](44);
    if (!_0x37953b["isDir"](_0x15ac69["node"]["mode"])) throw new _0x37953b["ErrnoError"](54);
    var _0x259187 = _0x37953b["nodePermissions"](_0x15ac69["node"], "x");
    if (_0x259187) throw new _0x37953b["ErrnoError"](_0x259187);
    _0x37953b["currentPath"] = _0x15ac69["path"];
  }, createDefaultDirectories: function () {
    _0x37953b["mkdir"]("/tmp"), _0x37953b["mkdir"]("/home"), _0x37953b["mkdir"]("/home/web_user");
  }, createDefaultDevices: function () {
    _0x37953b["mkdir"]("/dev"), _0x37953b["registerDevice"](_0x37953b["makedev"](1, 3), {read: function () {
      return 0;
    }, write: function (_0x58162e, _0x4cdc1c, _0x40c492, _0x18511c, _0x43ea2e) {
      return _0x18511c;
    }}), _0x37953b["mkdev"]("/dev/null", _0x37953b["makedev"](1, 3)), _0x538541["register"](_0x37953b["makedev"](5, 0), _0x538541["default_tty_ops"]), _0x538541["register"](_0x37953b["makedev"](6, 0), _0x538541["default_tty1_ops"]), _0x37953b["mkdev"]("/dev/tty", _0x37953b["makedev"](5, 0)), _0x37953b["mkdev"]("/dev/tty1", _0x37953b["makedev"](6, 0));
    var _0x2d8974 = _0x34e668();
    _0x37953b["createDevice"]("/dev", "random", _0x2d8974), _0x37953b["createDevice"]("/dev", "urandom", _0x2d8974), _0x37953b["mkdir"]("/dev/shm"), _0x37953b["mkdir"]("/dev/shm/tmp");
  }, createSpecialDirectories: function () {
    _0x37953b["mkdir"]("/proc");
    var _0x1d9d54 = _0x37953b["mkdir"]("/proc/self");
    _0x37953b["mkdir"]("/proc/self/fd"), _0x37953b["mount"]({mount: function () {
      var _0x320fc4 = _0x37953b["createNode"](_0x1d9d54, "fd", 16384 | 511, 73);
      return _0x320fc4["node_ops"] = {lookup: function (_0x4e40a8, _0x211c23) {
        var _0x166051 = +_0x211c23, _0x3dbfbe = _0x37953b["getStream"](_0x166051);
        if (!_0x3dbfbe) throw new _0x37953b["ErrnoError"](8);
        var _0x3f0838 = {parent: null, mount: {mountpoint: "fake"}, node_ops: {readlink: function () {
          return _0x3dbfbe["path"];
        }}};
        return _0x3f0838["parent"] = _0x3f0838, _0x3f0838;
      }}, _0x320fc4;
    }}, {}, "/proc/self/fd");
  }, createStandardStreams: function () {
    _0x3d01d3["stdin"] ? _0x37953b["createDevice"]("/dev", "stdin", _0x3d01d3["stdin"]) : _0x37953b["symlink"]("/dev/tty", "/dev/stdin");
    _0x3d01d3["stdout"] ? _0x37953b["createDevice"]("/dev", "stdout", null, _0x3d01d3["stdout"]) : _0x37953b["symlink"]("/dev/tty", "/dev/stdout");
    _0x3d01d3["stderr"] ? _0x37953b["createDevice"]("/dev", "stderr", null, _0x3d01d3["stderr"]) : _0x37953b["symlink"]("/dev/tty1", "/dev/stderr");
    var _0x2d94e2 = _0x37953b["open"]("/dev/stdin", 0), _0x28ca54 = _0x37953b["open"]("/dev/stdout", 1), _0x2be125 = _0x37953b["open"]("/dev/stderr", 1);
  }, ensureErrnoError: function () {
    if (_0x37953b["ErrnoError"]) return;
    _0x37953b["ErrnoError"] = function _0x55138e(_0x1bd651, _0x3a26d3) {
      this["node"] = _0x3a26d3, this["setErrno"] = function (_0x4cef02) {
        this["errno"] = _0x4cef02;
      }, this["setErrno"](_0x1bd651), this["message"] = "FS error";
    }, _0x37953b["ErrnoError"]["prototype"] = new Error, _0x37953b["ErrnoError"]["prototype"]["constructor"] = _0x37953b["ErrnoError"], [44]["forEach"](function (_0x3b7a85) {
      _0x37953b["genericErrors"][_0x3b7a85] = new _0x37953b["ErrnoError"](_0x3b7a85), _0x37953b["genericErrors"][_0x3b7a85]["stack"] = "<generic error, no stack>";
    });
  }, staticInit: function () {
    _0x37953b["ensureErrnoError"](), _0x37953b["nameTable"] = new Array(4096), _0x37953b["mount"](_0x2d95a6, {}, "/"), _0x37953b["createDefaultDirectories"](), _0x37953b["createDefaultDevices"](), _0x37953b["createSpecialDirectories"](), _0x37953b["filesystems"] = {MEMFS: _0x2d95a6, IDBFS: _0x3e97fb};
  }, init: function (_0x5d4159, _0x11dca8, _0x180ac9) {
    _0x37953b["init"]["initialized"] = !![], _0x37953b["ensureErrnoError"](), _0x3d01d3["stdin"] = _0x5d4159 || _0x3d01d3["stdin"], _0x3d01d3["stdout"] = _0x11dca8 || _0x3d01d3["stdout"], _0x3d01d3["stderr"] = _0x180ac9 || _0x3d01d3["stderr"], _0x37953b["createStandardStreams"]();
  }, quit: function () {
    _0x37953b["init"]["initialized"] = ![];
    var _0x207af4 = _0x3d01d3["_fflush"];
    if (_0x207af4) _0x207af4(0);
    for (var _0x1a1353 = 0; _0x1a1353 < _0x37953b["streams"]["length"]; _0x1a1353++) {
      var _0x244f3b = _0x37953b["streams"][_0x1a1353];
      if (!_0x244f3b) continue;
      _0x37953b["close"](_0x244f3b);
    }
  }, getMode: function (_0x58556d, _0x5cbefa) {
    var _0x3fa0b0 = 0;
    if (_0x58556d) _0x3fa0b0 |= 292 | 73;
    if (_0x5cbefa) _0x3fa0b0 |= 146;
    return _0x3fa0b0;
  }, findObject: function (_0x5b188e, _0x15146a) {
    var _0x536f1c = _0x37953b["analyzePath"](_0x5b188e, _0x15146a);
    return _0x536f1c["exists"] ? _0x536f1c["object"] : null;
  }, analyzePath: function (_0x204fe2, _0x31addc) {
    try {
      var _0xef3067 = _0x37953b["lookupPath"](_0x204fe2, {follow: !_0x31addc});
      _0x204fe2 = _0xef3067["path"];
    } catch (_0x387841) {}
    var _0x1ceadc = {isRoot: ![], exists: ![], error: 0, name: null, path: null, object: null, parentExists: ![], parentPath: null, parentObject: null};
    try {
      var _0xef3067 = _0x37953b["lookupPath"](_0x204fe2, {parent: !![]});
      _0x1ceadc["parentExists"] = !![], _0x1ceadc["parentPath"] = _0xef3067["path"], _0x1ceadc["parentObject"] = _0xef3067["node"], _0x1ceadc["name"] = _0x38ed9d["basename"](_0x204fe2), _0xef3067 = _0x37953b["lookupPath"](_0x204fe2, {follow: !_0x31addc}), _0x1ceadc["exists"] = !![], _0x1ceadc["path"] = _0xef3067["path"], _0x1ceadc["object"] = _0xef3067["node"], _0x1ceadc["name"] = _0xef3067["node"]["name"], _0x1ceadc["isRoot"] = _0xef3067["path"] === "/";
    } catch (_0x24158c) {
      _0x1ceadc["error"] = _0x24158c["errno"];
    }
    return _0x1ceadc;
  }, createPath: function (_0x2fe1ae, _0x4b54a8, _0x13dbf8, _0x31c019) {
    _0x2fe1ae = typeof _0x2fe1ae === "string" ? _0x2fe1ae : _0x37953b["getPath"](_0x2fe1ae);
    var _0xe38364 = _0x4b54a8["split"]("/")["reverse"]();
    while (_0xe38364["length"]) {
      var _0x503100 = _0xe38364["pop"]();
      if (!_0x503100) continue;
      var _0xa1d3e6 = _0x38ed9d["join2"](_0x2fe1ae, _0x503100);
      try {
        _0x37953b["mkdir"](_0xa1d3e6);
      } catch (_0x131f50) {}
      _0x2fe1ae = _0xa1d3e6;
    }
    return _0xa1d3e6;
  }, createFile: function (_0x5660b1, _0x3e45b7, _0x1204ee, _0x15c537, _0x1a00f0) {
    var _0x3abf5b = _0x38ed9d["join2"](typeof _0x5660b1 === "string" ? _0x5660b1 : _0x37953b["getPath"](_0x5660b1), _0x3e45b7), _0x563bf8 = _0x37953b["getMode"](_0x15c537, _0x1a00f0);
    return _0x37953b["create"](_0x3abf5b, _0x563bf8);
  }, createDataFile: function (_0x501c88, _0x4362cd, _0x4732c9, _0x12bbfe, _0x536003, _0x19399a) {
    var _0x2c558c = _0x4362cd ? _0x38ed9d["join2"](typeof _0x501c88 === "string" ? _0x501c88 : _0x37953b["getPath"](_0x501c88), _0x4362cd) : _0x501c88, _0x579592 = _0x37953b["getMode"](_0x12bbfe, _0x536003), _0x8fb55 = _0x37953b["create"](_0x2c558c, _0x579592);
    if (_0x4732c9) {
      if (typeof _0x4732c9 === "string") {
        var _0x4d8b49 = new Array(_0x4732c9["length"]);
        for (var _0xec01a1 = 0, _0x1ef58a = _0x4732c9["length"]; _0xec01a1 < _0x1ef58a; ++_0xec01a1) _0x4d8b49[_0xec01a1] = _0x4732c9["charCodeAt"](_0xec01a1);
        _0x4732c9 = _0x4d8b49;
      }
      _0x37953b["chmod"](_0x8fb55, _0x579592 | 146);
      var _0x3fbb19 = _0x37953b["open"](_0x8fb55, 577);
      _0x37953b["write"](_0x3fbb19, _0x4732c9, 0, _0x4732c9["length"], 0, _0x19399a), _0x37953b["close"](_0x3fbb19), _0x37953b["chmod"](_0x8fb55, _0x579592);
    }
    return _0x8fb55;
  }, createDevice: function (_0x3da9de, _0x1280d8, _0x2009fa, _0x8d9ae) {
    var _0x1b5e1f = _0x38ed9d["join2"](typeof _0x3da9de === "string" ? _0x3da9de : _0x37953b["getPath"](_0x3da9de), _0x1280d8), _0x1d8871 = _0x37953b["getMode"](!!_0x2009fa, !!_0x8d9ae);
    if (!_0x37953b["createDevice"]["major"]) _0x37953b["createDevice"]["major"] = 64;
    var _0x29f671 = _0x37953b["makedev"](_0x37953b["createDevice"]["major"]++, 0);
    return _0x37953b["registerDevice"](_0x29f671, {open: function (_0x5793c8) {
      _0x5793c8["seekable"] = ![];
    }, close: function (_0x5734f5) {
      _0x8d9ae && _0x8d9ae["buffer"] && _0x8d9ae["buffer"]["length"] && _0x8d9ae(10);
    }, read: function (_0x3e5fd8, _0x10ffdd, _0x4af397, _0x13cfca, _0x176db8) {
      var _0x585f9a = 0;
      for (var _0x507edc = 0; _0x507edc < _0x13cfca; _0x507edc++) {
        var _0x22eda8;
        try {
          _0x22eda8 = _0x2009fa();
        } catch (_0x3b4e9e) {
          throw new _0x37953b["ErrnoError"](29);
        }
        if (_0x22eda8 === undefined && _0x585f9a === 0) throw new _0x37953b["ErrnoError"](6);
        if (_0x22eda8 === null || _0x22eda8 === undefined) break;
        _0x585f9a++, _0x10ffdd[_0x4af397 + _0x507edc] = _0x22eda8;
      }
      return _0x585f9a && (_0x3e5fd8["node"]["timestamp"] = Date["now"]()), _0x585f9a;
    }, write: function (_0x1aabe4, _0x19db39, _0x4887dc, _0x108414, _0x457de8) {
      for (var _0x560e71 = 0; _0x560e71 < _0x108414; _0x560e71++) {
        try {
          _0x8d9ae(_0x19db39[_0x4887dc + _0x560e71]);
        } catch (_0x26fe4f) {
          throw new _0x37953b["ErrnoError"](29);
        }
      }
      return _0x108414 && (_0x1aabe4["node"]["timestamp"] = Date["now"]()), _0x560e71;
    }}), _0x37953b["mkdev"](_0x1b5e1f, _0x1d8871, _0x29f671);
  }, forceLoadFile: function (_0xde9e86) {
    if (_0xde9e86["isDevice"] || _0xde9e86["isFolder"] || _0xde9e86["link"] || _0xde9e86["contents"]) return !![];
    if (typeof XMLHttpRequest !== "undefined") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."); else {
      if (_0x4c15fd) try {
        _0xde9e86["contents"] = _0x4c56db(_0x4c15fd(_0xde9e86["url"]), !![]), _0xde9e86["usedBytes"] = _0xde9e86["contents"]["length"];
      } catch (_0x3cc493) {
        throw new _0x37953b["ErrnoError"](29);
      } else throw new Error("Cannot load without read() or XMLHttpRequest.");
    }
  }, createLazyFile: function (_0x6ebe7, _0x20302a, _0x250dba, _0x26e3c1, _0x265002) {
    function _0x38d120() {
      this["lengthKnown"] = ![], this["chunks"] = [];
    }
    _0x38d120["prototype"]["get"] = function _0x2ed0b1(_0xf6c4d1) {
      if (_0xf6c4d1 > this["length"] - 1 || _0xf6c4d1 < 0) return undefined;
      var _0x4f5855 = _0xf6c4d1 % this["chunkSize"], _0xc049e8 = _0xf6c4d1 / this["chunkSize"] | 0;
      return this["getter"](_0xc049e8)[_0x4f5855];
    }, _0x38d120["prototype"]["setDataGetter"] = function _0x45c1b5(_0x10617f) {
      this["getter"] = _0x10617f;
    }, _0x38d120["prototype"]["cacheLength"] = function _0x1547e0() {
      var _0x501a80 = new XMLHttpRequest;
      _0x501a80["open"]("HEAD", _0x250dba, ![]), _0x501a80["send"](null);
      if (!(_0x501a80["status"] >= 200 && _0x501a80["status"] < 300 || _0x501a80["status"] === 304)) throw new Error("Couldn't load " + _0x250dba + ". Status: " + _0x501a80["status"]);
      var _0x53bc76 = Number(_0x501a80["getResponseHeader"]("Content-length")), _0x18e00f, _0x1c70ae = (_0x18e00f = _0x501a80["getResponseHeader"]("Accept-Ranges")) && _0x18e00f === "bytes", _0x11ad4d = (_0x18e00f = _0x501a80["getResponseHeader"]("Content-Encoding")) && _0x18e00f === "gzip", _0x37621e = 1024 * 1024;
      if (!_0x1c70ae) _0x37621e = _0x53bc76;
      var _0x33ed2f = function (_0x153815, _0x25aafe) {
        if (_0x153815 > _0x25aafe) throw new Error("invalid range (" + _0x153815 + ", " + _0x25aafe + ") or no bytes requested!");
        if (_0x25aafe > _0x53bc76 - 1) throw new Error("only " + _0x53bc76 + " bytes available! programmer error!");
        var _0x1e2bc2 = new XMLHttpRequest;
        _0x1e2bc2["open"]("GET", _0x250dba, ![]);
        if (_0x53bc76 !== _0x37621e) _0x1e2bc2["setRequestHeader"]("Range", "bytes=" + _0x153815 + "-" + _0x25aafe);
        if (typeof Uint8Array != "undefined") _0x1e2bc2["responseType"] = "arraybuffer";
        _0x1e2bc2["overrideMimeType"] && _0x1e2bc2["overrideMimeType"]("text/plain; charset=x-user-defined");
        _0x1e2bc2["send"](null);
        if (!(_0x1e2bc2["status"] >= 200 && _0x1e2bc2["status"] < 300 || _0x1e2bc2["status"] === 304)) throw new Error("Couldn't load " + _0x250dba + ". Status: " + _0x1e2bc2["status"]);
        return _0x1e2bc2["response"] !== undefined ? new Uint8Array(_0x1e2bc2["response"] || []) : _0x4c56db(_0x1e2bc2["responseText"] || "", !![]);
      }, _0x4975ce = this;
      _0x4975ce["setDataGetter"](function (_0x69fefb) {
        var _0x59a289 = _0x69fefb * _0x37621e, _0x1ebd28 = (_0x69fefb + 1) * _0x37621e - 1;
        _0x1ebd28 = Math["min"](_0x1ebd28, _0x53bc76 - 1);
        typeof _0x4975ce["chunks"][_0x69fefb] === "undefined" && (_0x4975ce["chunks"][_0x69fefb] = _0x33ed2f(_0x59a289, _0x1ebd28));
        if (typeof _0x4975ce["chunks"][_0x69fefb] === "undefined") throw new Error("doXHR failed!");
        return _0x4975ce["chunks"][_0x69fefb];
      }), (_0x11ad4d || !_0x53bc76) && (_0x37621e = _0x53bc76 = 1, _0x53bc76 = this["getter"](0)["length"], _0x37621e = _0x53bc76, _0x507ddf("LazyFiles on gzip forces download of the whole file when length is accessed")), this["_length"] = _0x53bc76, this["_chunkSize"] = _0x37621e, this["lengthKnown"] = !![];
    };
    if (typeof XMLHttpRequest !== "undefined") {
      if (!_0x3a9e74) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
      var _0x52840f = new _0x38d120;
      Object["defineProperties"](_0x52840f, {length: {get: function () {
        return !this["lengthKnown"] && this["cacheLength"](), this["_length"];
      }}, chunkSize: {get: function () {
        return !this["lengthKnown"] && this["cacheLength"](), this["_chunkSize"];
      }}});
      var _0x513533 = {isDevice: ![], contents: _0x52840f};
    } else var _0x513533 = {isDevice: ![], url: _0x250dba};
    var _0x3c08ea = _0x37953b["createFile"](_0x6ebe7, _0x20302a, _0x513533, _0x26e3c1, _0x265002);
    if (_0x513533["contents"]) _0x3c08ea["contents"] = _0x513533["contents"]; else _0x513533["url"] && (_0x3c08ea["contents"] = null, _0x3c08ea["url"] = _0x513533["url"]);
    Object["defineProperties"](_0x3c08ea, {usedBytes: {get: function () {
      return this["contents"]["length"];
    }}});
    var _0x436435 = {}, _0x3a16e4 = Object["keys"](_0x3c08ea["stream_ops"]);
    return _0x3a16e4["forEach"](function (_0x186dc9) {
      var _0x3b9315 = _0x3c08ea["stream_ops"][_0x186dc9];
      _0x436435[_0x186dc9] = function _0x3818e3() {
        return _0x37953b["forceLoadFile"](_0x3c08ea), _0x3b9315["apply"](null, arguments);
      };
    }), _0x436435["read"] = function _0x4bf4cf(_0x2346c9, _0x579a48, _0x5b243a, _0x58b632, _0x111a25) {
      _0x37953b["forceLoadFile"](_0x3c08ea);
      var _0x146692 = _0x2346c9["node"]["contents"];
      if (_0x111a25 >= _0x146692["length"]) return 0;
      var _0x5abc6f = Math["min"](_0x146692["length"] - _0x111a25, _0x58b632);
      if (_0x146692["slice"]) for (var _0x1eea51 = 0; _0x1eea51 < _0x5abc6f; _0x1eea51++) {
        _0x579a48[_0x5b243a + _0x1eea51] = _0x146692[_0x111a25 + _0x1eea51];
      } else for (var _0x1eea51 = 0; _0x1eea51 < _0x5abc6f; _0x1eea51++) {
        _0x579a48[_0x5b243a + _0x1eea51] = _0x146692["get"](_0x111a25 + _0x1eea51);
      }
      return _0x5abc6f;
    }, _0x3c08ea["stream_ops"] = _0x436435, _0x3c08ea;
  }, createPreloadedFile: function (_0x19dc1c, _0x2ddd3c, _0xe1d41b, _0x4d0dda, _0x17c380, _0x36021a, _0x5db07d, _0x2b3d90, _0x5e7330, _0x334d44) {
    _0xee22e2["init"]();
    var _0x1fd1ee = _0x2ddd3c ? _0x4fc216["resolve"](_0x38ed9d["join2"](_0x19dc1c, _0x2ddd3c)) : _0x19dc1c, _0x1ee905 = _0x3bde32("cp " + _0x1fd1ee);
    function _0x523ac5(_0x43ab9f) {
      function _0x5c2c6e(_0x12beec) {
        if (_0x334d44) _0x334d44();
        !_0x2b3d90 && _0x37953b["createDataFile"](_0x19dc1c, _0x2ddd3c, _0x12beec, _0x4d0dda, _0x17c380, _0x5e7330);
        if (_0x36021a) _0x36021a();
        _0x47f78c(_0x1ee905);
      }
      var _0x3e0ee7 = ![];
      _0x3d01d3["preloadPlugins"]["forEach"](function (_0x54ffcd) {
        if (_0x3e0ee7) return;
        _0x54ffcd["canHandle"](_0x1fd1ee) && (_0x54ffcd["handle"](_0x43ab9f, _0x1fd1ee, _0x5c2c6e, function () {
          if (_0x5db07d) _0x5db07d();
          _0x47f78c(_0x1ee905);
        }), _0x3e0ee7 = !![]);
      });
      if (!_0x3e0ee7) _0x5c2c6e(_0x43ab9f);
    }
    _0x3e50c2(_0x1ee905), typeof _0xe1d41b == "string" ? _0xee22e2["asyncLoad"](_0xe1d41b, function (_0x374e49) {
      _0x523ac5(_0x374e49);
    }, _0x5db07d) : _0x523ac5(_0xe1d41b);
  }, indexedDB: function () {
    return window["indexedDB"] || window["mozIndexedDB"] || window["webkitIndexedDB"] || window["msIndexedDB"];
  }, DB_NAME: function () {
    return "EM_FS_" + window["location"]["pathname"];
  }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: function (_0x367e6f, _0x364725, _0x27a18a) {
    _0x364725 = _0x364725 || function () {}, _0x27a18a = _0x27a18a || function () {};
    var _0x1ebacd = _0x37953b["indexedDB"]();
    try {
      var _0x56e702 = _0x1ebacd["open"](_0x37953b["DB_NAME"](), _0x37953b["DB_VERSION"]);
    } catch (_0x2b5d4d) {
      return _0x27a18a(_0x2b5d4d);
    }
    _0x56e702["onupgradeneeded"] = function _0x511027() {
      _0x507ddf("creating db");
      var _0x18e0e4 = _0x56e702["result"];
      _0x18e0e4["createObjectStore"](_0x37953b["DB_STORE_NAME"]);
    }, _0x56e702["onsuccess"] = function _0x2145a0() {
      var _0x396154 = _0x56e702["result"], _0x28ee03 = _0x396154["transaction"]([_0x37953b["DB_STORE_NAME"]], "readwrite"), _0x150843 = _0x28ee03["objectStore"](_0x37953b["DB_STORE_NAME"]), _0x4e703e = 0, _0x210c91 = 0, _0x1003a2 = _0x367e6f["length"];
      function _0x1b5149() {
        if (_0x210c91 == 0) _0x364725(); else _0x27a18a();
      }
      _0x367e6f["forEach"](function (_0x3a498e) {
        var _0x3d2bee = _0x150843["put"](_0x37953b["analyzePath"](_0x3a498e)["object"]["contents"], _0x3a498e);
        _0x3d2bee["onsuccess"] = function _0x29b5e5() {
          _0x4e703e++;
          if (_0x4e703e + _0x210c91 == _0x1003a2) _0x1b5149();
        }, _0x3d2bee["onerror"] = function _0x3956ca() {
          _0x210c91++;
          if (_0x4e703e + _0x210c91 == _0x1003a2) _0x1b5149();
        };
      }), _0x28ee03["onerror"] = _0x27a18a;
    }, _0x56e702["onerror"] = _0x27a18a;
  }, loadFilesFromDB: function (_0x5e0f19, _0x8b2e73, _0x126765) {
    _0x8b2e73 = _0x8b2e73 || function () {}, _0x126765 = _0x126765 || function () {};
    var _0x4a50c4 = _0x37953b["indexedDB"]();
    try {
      var _0x2e1a36 = _0x4a50c4["open"](_0x37953b["DB_NAME"](), _0x37953b["DB_VERSION"]);
    } catch (_0xe0f027) {
      return _0x126765(_0xe0f027);
    }
    _0x2e1a36["onupgradeneeded"] = _0x126765, _0x2e1a36["onsuccess"] = function _0x177abf() {
      var _0xbd311b = _0x2e1a36["result"];
      try {
        var _0x380801 = _0xbd311b["transaction"]([_0x37953b["DB_STORE_NAME"]], "readonly");
      } catch (_0x2dc70c) {
        _0x126765(_0x2dc70c);
        return;
      }
      var _0x12ae6 = _0x380801["objectStore"](_0x37953b["DB_STORE_NAME"]), _0x4c4c09 = 0, _0x50b308 = 0, _0x1a728e = _0x5e0f19["length"];
      function _0x41dd58() {
        if (_0x50b308 == 0) _0x8b2e73(); else _0x126765();
      }
      _0x5e0f19["forEach"](function (_0x2a8836) {
        var _0x14e0b1 = _0x12ae6["get"](_0x2a8836);
        _0x14e0b1["onsuccess"] = function _0x48a59e() {
          _0x37953b["analyzePath"](_0x2a8836)["exists"] && _0x37953b["unlink"](_0x2a8836);
          _0x37953b["createDataFile"](_0x38ed9d["dirname"](_0x2a8836), _0x38ed9d["basename"](_0x2a8836), _0x14e0b1["result"], !![], !![], !![]), _0x4c4c09++;
          if (_0x4c4c09 + _0x50b308 == _0x1a728e) _0x41dd58();
        }, _0x14e0b1["onerror"] = function _0x55277b() {
          _0x50b308++;
          if (_0x4c4c09 + _0x50b308 == _0x1a728e) _0x41dd58();
        };
      }), _0x380801["onerror"] = _0x126765;
    }, _0x2e1a36["onerror"] = _0x126765;
  }}, _0x315b4e = {mappings: {}, DEFAULT_POLLMASK: 5, umask: 511, calculateAt: function (_0x4c5c36, _0x47e212, _0x1119da) {
    if (_0x47e212[0] === "/") return _0x47e212;
    var _0x6275d5;
    if (_0x4c5c36 === -100) _0x6275d5 = _0x37953b["cwd"](); else {
      var _0x93deac = _0x37953b["getStream"](_0x4c5c36);
      if (!_0x93deac) throw new _0x37953b["ErrnoError"](8);
      _0x6275d5 = _0x93deac["path"];
    }
    if (_0x47e212["length"] == 0) {
      if (!_0x1119da) throw new _0x37953b["ErrnoError"](44);
      return _0x6275d5;
    }
    return _0x38ed9d["join2"](_0x6275d5, _0x47e212);
  }, doStat: function (_0x58e72e, _0x4cd0cc, _0x19f452) {
    try {
      var _0x2a74dd = _0x58e72e(_0x4cd0cc);
    } catch (_0x4389f9) {
      if (_0x4389f9 && _0x4389f9["node"] && _0x38ed9d["normalize"](_0x4cd0cc) !== _0x38ed9d["normalize"](_0x37953b["getPath"](_0x4389f9["node"]))) return -54;
      throw _0x4389f9;
    }
    return _0x5f4233[_0x19f452 >> 2] = _0x2a74dd["dev"], _0x5f4233[_0x19f452 + 4 >> 2] = 0, _0x5f4233[_0x19f452 + 8 >> 2] = _0x2a74dd["ino"], _0x5f4233[_0x19f452 + 12 >> 2] = _0x2a74dd["mode"], _0x5f4233[_0x19f452 + 16 >> 2] = _0x2a74dd["nlink"], _0x5f4233[_0x19f452 + 20 >> 2] = _0x2a74dd["uid"], _0x5f4233[_0x19f452 + 24 >> 2] = _0x2a74dd["gid"], _0x5f4233[_0x19f452 + 28 >> 2] = _0x2a74dd["rdev"], _0x5f4233[_0x19f452 + 32 >> 2] = 0, (_0x437765 = [_0x2a74dd["size"] >>> 0, (_0x2eda49 = _0x2a74dd["size"], +Math["abs"](_0x2eda49) >= 1 ? _0x2eda49 > 0 ? (Math["min"](+Math["floor"](_0x2eda49 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x2eda49 - +(~~_0x2eda49 >>> 0)) / 4294967296) >>> 0 : 0)], _0x5f4233[_0x19f452 + 40 >> 2] = _0x437765[0], _0x5f4233[_0x19f452 + 44 >> 2] = _0x437765[1]), _0x5f4233[_0x19f452 + 48 >> 2] = 4096, _0x5f4233[_0x19f452 + 52 >> 2] = _0x2a74dd["blocks"], _0x5f4233[_0x19f452 + 56 >> 2] = _0x2a74dd["atime"]["getTime"]() / 1e3 | 0, _0x5f4233[_0x19f452 + 60 >> 2] = 0, _0x5f4233[_0x19f452 + 64 >> 2] = _0x2a74dd["mtime"]["getTime"]() / 1e3 | 0, _0x5f4233[_0x19f452 + 68 >> 2] = 0, _0x5f4233[_0x19f452 + 72 >> 2] = _0x2a74dd["ctime"]["getTime"]() / 1e3 | 0, _0x5f4233[_0x19f452 + 76 >> 2] = 0, (_0x437765 = [_0x2a74dd["ino"] >>> 0, (_0x2eda49 = _0x2a74dd["ino"], +Math["abs"](_0x2eda49) >= 1 ? _0x2eda49 > 0 ? (Math["min"](+Math["floor"](_0x2eda49 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x2eda49 - +(~~_0x2eda49 >>> 0)) / 4294967296) >>> 0 : 0)], _0x5f4233[_0x19f452 + 80 >> 2] = _0x437765[0], _0x5f4233[_0x19f452 + 84 >> 2] = _0x437765[1]), 0;
  }, doMsync: function (_0x381ae9, _0x198ae6, _0x500faf, _0x9ddca3, _0x170fe2) {
    var _0xfb2ca0 = _0x1c2f04["slice"](_0x381ae9, _0x381ae9 + _0x500faf);
    _0x37953b["msync"](_0x198ae6, _0xfb2ca0, _0x170fe2, _0x500faf, _0x9ddca3);
  }, doMkdir: function (_0xa847cc, _0x24d1d8) {
    _0xa847cc = _0x38ed9d["normalize"](_0xa847cc);
    if (_0xa847cc[_0xa847cc["length"] - 1] === "/") _0xa847cc = _0xa847cc["substr"](0, _0xa847cc["length"] - 1);
    return _0x37953b["mkdir"](_0xa847cc, _0x24d1d8, 0), 0;
  }, doMknod: function (_0x18de37, _0x37cf56, _0x161417) {
    switch (_0x37cf56 & 61440) {
      case 32768:
      case 8192:
      case 24576:
      case 4096:
      case 49152:
        break;
      default:
        return -28;
    }
    return _0x37953b["mknod"](_0x18de37, _0x37cf56, _0x161417), 0;
  }, doReadlink: function (_0x502ed5, _0x47f52d, _0x2bf974) {
    if (_0x2bf974 <= 0) return -28;
    var _0x56eb8a = _0x37953b["readlink"](_0x502ed5), _0x3b2d4b = Math["min"](_0x2bf974, _0x2c1249(_0x56eb8a)), _0x438ed1 = _0x2c8e41[_0x47f52d + _0x3b2d4b];
    return _0xf36afc(_0x56eb8a, _0x47f52d, _0x2bf974 + 1), _0x2c8e41[_0x47f52d + _0x3b2d4b] = _0x438ed1, _0x3b2d4b;
  }, doAccess: function (_0x44f660, _0xb583a6) {
    if (_0xb583a6 & ~7) return -28;
    var _0x505cd6, _0x5501d3 = _0x37953b["lookupPath"](_0x44f660, {follow: !![]});
    _0x505cd6 = _0x5501d3["node"];
    if (!_0x505cd6) return -44;
    var _0x5d5294 = "";
    if (_0xb583a6 & 4) _0x5d5294 += "r";
    if (_0xb583a6 & 2) _0x5d5294 += "w";
    if (_0xb583a6 & 1) _0x5d5294 += "x";
    if (_0x5d5294 && _0x37953b["nodePermissions"](_0x505cd6, _0x5d5294)) return -2;
    return 0;
  }, doDup: function (_0x4c0577, _0x4acd8b, _0x22532d) {
    var _0x513b7d = _0x37953b["getStream"](_0x22532d);
    if (_0x513b7d) _0x37953b["close"](_0x513b7d);
    return _0x37953b["open"](_0x4c0577, _0x4acd8b, 0, _0x22532d, _0x22532d)["fd"];
  }, doReadv: function (_0x1c69e8, _0x7f60f, _0x365491, _0x1d0986) {
    var _0x2b35fd = 0;
    for (var _0x42cbcd = 0; _0x42cbcd < _0x365491; _0x42cbcd++) {
      var _0x587552 = _0x5f4233[_0x7f60f + _0x42cbcd * 8 >> 2], _0x4a7536 = _0x5f4233[_0x7f60f + (_0x42cbcd * 8 + 4) >> 2], _0x1f051e = _0x37953b["read"](_0x1c69e8, _0x2c8e41, _0x587552, _0x4a7536, _0x1d0986);
      if (_0x1f051e < 0) return -1;
      _0x2b35fd += _0x1f051e;
      if (_0x1f051e < _0x4a7536) break;
    }
    return _0x2b35fd;
  }, doWritev: function (_0x43697b, _0x159723, _0x131b03, _0x349a40) {
    var _0x2152b8 = 0;
    for (var _0xffa91f = 0; _0xffa91f < _0x131b03; _0xffa91f++) {
      var _0x1026db = _0x5f4233[_0x159723 + _0xffa91f * 8 >> 2], _0x5ea4aa = _0x5f4233[_0x159723 + (_0xffa91f * 8 + 4) >> 2], _0x54d66c = _0x37953b["write"](_0x43697b, _0x2c8e41, _0x1026db, _0x5ea4aa, _0x349a40);
      if (_0x54d66c < 0) return -1;
      _0x2152b8 += _0x54d66c;
    }
    return _0x2152b8;
  }, varargs: undefined, get: function () {
    _0x315b4e["varargs"] += 4;
    var _0x5e346d = _0x5f4233[_0x315b4e["varargs"] - 4 >> 2];
    return _0x5e346d;
  }, getStr: function (_0x9dfdfe) {
    var _0x19dadc = _0x5a9382(_0x9dfdfe);
    return _0x19dadc;
  }, getStreamFromFD: function (_0x1f8568) {
    var _0x93f161 = _0x37953b["getStream"](_0x1f8568);
    if (!_0x93f161) throw new _0x37953b["ErrnoError"](8);
    return _0x93f161;
  }, get64: function (_0x5e36ca, _0x4a8088) {
    return _0x5e36ca;
  }};
  function _0x18c714(_0x55cef2, _0x237f74, _0x32b2f5, _0x31a49c, _0x16509a) {
    try {
      var _0xc9dac9 = 0, _0x42ca10 = _0x237f74 ? _0x5f4233[_0x237f74 >> 2] : 0, _0x5d87f6 = _0x237f74 ? _0x5f4233[_0x237f74 + 4 >> 2] : 0, _0x2fbef3 = _0x32b2f5 ? _0x5f4233[_0x32b2f5 >> 2] : 0, _0x529a10 = _0x32b2f5 ? _0x5f4233[_0x32b2f5 + 4 >> 2] : 0, _0x2257ef = _0x31a49c ? _0x5f4233[_0x31a49c >> 2] : 0, _0x477275 = _0x31a49c ? _0x5f4233[_0x31a49c + 4 >> 2] : 0, _0x2796ef = 0, _0x4f0002 = 0, _0x97b19 = 0, _0xe8cfd3 = 0, _0x1bc416 = 0, _0x57b6b3 = 0, _0x2a36fa = (_0x237f74 ? _0x5f4233[_0x237f74 >> 2] : 0) | (_0x32b2f5 ? _0x5f4233[_0x32b2f5 >> 2] : 0) | (_0x31a49c ? _0x5f4233[_0x31a49c >> 2] : 0), _0x5e0735 = (_0x237f74 ? _0x5f4233[_0x237f74 + 4 >> 2] : 0) | (_0x32b2f5 ? _0x5f4233[_0x32b2f5 + 4 >> 2] : 0) | (_0x31a49c ? _0x5f4233[_0x31a49c + 4 >> 2] : 0), _0x5cca6c = function (_0x1fefa1, _0x299d89, _0x3c2d51, _0x33d0cc) {
        return _0x1fefa1 < 32 ? _0x299d89 & _0x33d0cc : _0x3c2d51 & _0x33d0cc;
      };
      for (var _0x28ce6e = 0; _0x28ce6e < _0x55cef2; _0x28ce6e++) {
        var _0x2f2174 = 1 << _0x28ce6e % 32;
        if (!_0x5cca6c(_0x28ce6e, _0x2a36fa, _0x5e0735, _0x2f2174)) continue;
        var _0x1478db = _0x37953b["getStream"](_0x28ce6e);
        if (!_0x1478db) throw new _0x37953b["ErrnoError"](8);
        var _0x54ab5c = _0x315b4e["DEFAULT_POLLMASK"];
        _0x1478db["stream_ops"]["poll"] && (_0x54ab5c = _0x1478db["stream_ops"]["poll"](_0x1478db)), _0x54ab5c & 1 && _0x5cca6c(_0x28ce6e, _0x42ca10, _0x5d87f6, _0x2f2174) && (_0x28ce6e < 32 ? _0x2796ef = _0x2796ef | _0x2f2174 : _0x4f0002 = _0x4f0002 | _0x2f2174, _0xc9dac9++), _0x54ab5c & 4 && _0x5cca6c(_0x28ce6e, _0x2fbef3, _0x529a10, _0x2f2174) && (_0x28ce6e < 32 ? _0x97b19 = _0x97b19 | _0x2f2174 : _0xe8cfd3 = _0xe8cfd3 | _0x2f2174, _0xc9dac9++), _0x54ab5c & 2 && _0x5cca6c(_0x28ce6e, _0x2257ef, _0x477275, _0x2f2174) && (_0x28ce6e < 32 ? _0x1bc416 = _0x1bc416 | _0x2f2174 : _0x57b6b3 = _0x57b6b3 | _0x2f2174, _0xc9dac9++);
      }
      return _0x237f74 && (_0x5f4233[_0x237f74 >> 2] = _0x2796ef, _0x5f4233[_0x237f74 + 4 >> 2] = _0x4f0002), _0x32b2f5 && (_0x5f4233[_0x32b2f5 >> 2] = _0x97b19, _0x5f4233[_0x32b2f5 + 4 >> 2] = _0xe8cfd3), _0x31a49c && (_0x5f4233[_0x31a49c >> 2] = _0x1bc416, _0x5f4233[_0x31a49c + 4 >> 2] = _0x57b6b3), _0xc9dac9;
    } catch (_0x5881b5) {
      if (typeof _0x37953b === "undefined" || !(_0x5881b5 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x5881b5);
      return -_0x5881b5["errno"];
    }
  }
  var _0x4ea6fd = {EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135}, _0x5854a5 = {mount: function (_0x4bf61a) {
    return _0x3d01d3["websocket"] = _0x3d01d3["websocket"] && "object" === typeof _0x3d01d3["websocket"] ? _0x3d01d3["websocket"] : {}, _0x3d01d3["websocket"]["_callbacks"] = {}, _0x3d01d3["websocket"]["on"] = function (_0x19c2dc, _0x4b56e4) {
      return "function" === typeof _0x4b56e4 && (this["_callbacks"][_0x19c2dc] = _0x4b56e4), this;
    }, _0x3d01d3["websocket"]["emit"] = function (_0x56014a, _0x347fda) {
      "function" === typeof this["_callbacks"][_0x56014a] && this["_callbacks"][_0x56014a]["call"](this, _0x347fda);
    }, _0x37953b["createNode"](null, "/", 16384 | 511, 0);
  }, createSocket: function (_0x5e2e3d, _0x3bbb5f, _0x5b2d49) {
    _0x3bbb5f &= ~526336;
    var _0x2177d9 = _0x3bbb5f == 1;
    _0x5b2d49 && _0x1e763e(_0x2177d9 == (_0x5b2d49 == 6));
    var _0x3559c7 = {family: _0x5e2e3d, type: _0x3bbb5f, protocol: _0x5b2d49, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: _0x5854a5["websocket_sock_ops"]}, _0x349a17 = _0x5854a5["nextname"](), _0x57ea26 = _0x37953b["createNode"](_0x5854a5["root"], _0x349a17, 49152, 0);
    _0x57ea26["sock"] = _0x3559c7;
    var _0x2daa8e = _0x37953b["createStream"]({path: _0x349a17, node: _0x57ea26, flags: 2, seekable: ![], stream_ops: _0x5854a5["stream_ops"]});
    return _0x3559c7["stream"] = _0x2daa8e, _0x3559c7;
  }, getSocket: function (_0x2a622f) {
    var _0x4b887a = _0x37953b["getStream"](_0x2a622f);
    if (!_0x4b887a || !_0x37953b["isSocket"](_0x4b887a["node"]["mode"])) return null;
    return _0x4b887a["node"]["sock"];
  }, stream_ops: {poll: function (_0xe447b3) {
    var _0x359fb7 = _0xe447b3["node"]["sock"];
    return _0x359fb7["sock_ops"]["poll"](_0x359fb7);
  }, ioctl: function (_0x38abce, _0xec9fc4, _0x3dab5c) {
    var _0x3e16ea = _0x38abce["node"]["sock"];
    return _0x3e16ea["sock_ops"]["ioctl"](_0x3e16ea, _0xec9fc4, _0x3dab5c);
  }, read: function (_0x18dd8f, _0x502198, _0xad567b, _0x1321a7, _0x2498cf) {
    var _0x59e1c2 = _0x18dd8f["node"]["sock"], _0x22b1d7 = _0x59e1c2["sock_ops"]["recvmsg"](_0x59e1c2, _0x1321a7);
    if (!_0x22b1d7) return 0;
    return _0x502198["set"](_0x22b1d7["buffer"], _0xad567b), _0x22b1d7["buffer"]["length"];
  }, write: function (_0x2a1993, _0x1eca34, _0x5514ca, _0x2c86f5, _0x36e428) {
    var _0x58f98c = _0x2a1993["node"]["sock"];
    return _0x58f98c["sock_ops"]["sendmsg"](_0x58f98c, _0x1eca34, _0x5514ca, _0x2c86f5);
  }, close: function (_0x378336) {
    var _0xc7ad28 = _0x378336["node"]["sock"];
    _0xc7ad28["sock_ops"]["close"](_0xc7ad28);
  }}, nextname: function () {
    return !_0x5854a5["nextname"]["current"] && (_0x5854a5["nextname"]["current"] = 0), "socket[" + _0x5854a5["nextname"]["current"]++ + "]";
  }, websocket_sock_ops: {createPeer: function (_0x57a0aa, _0x54983d, _0x524649) {
    var _0x654654;
    typeof _0x54983d === "object" && (_0x654654 = _0x54983d, _0x54983d = null, _0x524649 = null);
    if (_0x654654) {
      if (_0x654654["_socket"]) _0x54983d = _0x654654["_socket"]["remoteAddress"], _0x524649 = _0x654654["_socket"]["remotePort"]; else {
        var _0xf94fcd = /ws[s]?:\/\/([^:]+):(\d+)/["exec"](_0x654654["url"]);
        if (!_0xf94fcd) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
        _0x54983d = _0xf94fcd[1], _0x524649 = parseInt(_0xf94fcd[2], 10);
      }
    } else try {
      var _0x40b8a1 = _0x3d01d3["websocket"] && "object" === typeof _0x3d01d3["websocket"], _0x1569f6 = "ws:#"["replace"]("#", "//");
      _0x40b8a1 && ("string" === typeof _0x3d01d3["websocket"]["url"] && (_0x1569f6 = _0x3d01d3["websocket"]["url"]));
      if (_0x1569f6 === "ws://" || _0x1569f6 === "wss://") {
        var _0x31b17b = _0x54983d["split"]("/");
        _0x1569f6 = _0x1569f6 + _0x31b17b[0] + ":" + _0x524649 + "/" + _0x31b17b["slice"](1)["join"]("/");
      }
      var _0x5793e2 = "binary";
      _0x40b8a1 && ("string" === typeof _0x3d01d3["websocket"]["subprotocol"] && (_0x5793e2 = _0x3d01d3["websocket"]["subprotocol"]));
      var _0x438fa0 = undefined;
      _0x5793e2 !== "null" && (_0x5793e2 = _0x5793e2["replace"](/^ +| +$/g, "")["split"](/ *, */), _0x438fa0 = _0x2d4503 ? {protocol: _0x5793e2["toString"]()} : _0x5793e2);
      _0x40b8a1 && null === _0x3d01d3["websocket"]["subprotocol"] && (_0x5793e2 = "null", _0x438fa0 = undefined);
      var _0x1599ae;
      _0x2d4503 ? _0x1599ae = require("ws") : _0x1599ae = WebSocket, _0x654654 = new _0x1599ae(_0x1569f6, _0x438fa0), _0x654654["binaryType"] = "arraybuffer";
    } catch (_0x1a591e) {
      throw new _0x37953b["ErrnoError"](_0x4ea6fd["EHOSTUNREACH"]);
    }
    var _0x415cdc = {addr: _0x54983d, port: _0x524649, socket: _0x654654, dgram_send_queue: []};
    return _0x5854a5["websocket_sock_ops"]["addPeer"](_0x57a0aa, _0x415cdc), _0x5854a5["websocket_sock_ops"]["handlePeerEvents"](_0x57a0aa, _0x415cdc), _0x57a0aa["type"] === 2 && typeof _0x57a0aa["sport"] !== "undefined" && _0x415cdc["dgram_send_queue"]["push"](new Uint8Array([255, 255, 255, 255, "p"["charCodeAt"](0), "o"["charCodeAt"](0), "r"["charCodeAt"](0), "t"["charCodeAt"](0), (_0x57a0aa["sport"] & 65280) >> 8, _0x57a0aa["sport"] & 255])), _0x415cdc;
  }, getPeer: function (_0x3c43a6, _0x1a76d2, _0x123685) {
    return _0x3c43a6["peers"][_0x1a76d2 + ":" + _0x123685];
  }, addPeer: function (_0xa240f, _0x8ecaa3) {
    _0xa240f["peers"][_0x8ecaa3["addr"] + ":" + _0x8ecaa3["port"]] = _0x8ecaa3;
  }, removePeer: function (_0x5f1a59, _0x3422ce) {
    delete _0x5f1a59["peers"][_0x3422ce["addr"] + ":" + _0x3422ce["port"]];
  }, handlePeerEvents: function (_0x557318, _0x12eb8c) {
    var _0x216bff = !![], _0x4cef16 = function () {
      _0x3d01d3["websocket"]["emit"]("open", _0x557318["stream"]["fd"]);
      try {
        var _0x5681f5 = _0x12eb8c["dgram_send_queue"]["shift"]();
        while (_0x5681f5) {
          _0x12eb8c["socket"]["send"](_0x5681f5), _0x5681f5 = _0x12eb8c["dgram_send_queue"]["shift"]();
        }
      } catch (_0x4a8df4) {
        _0x12eb8c["socket"]["close"]();
      }
    };
    function _0x182162(_0x137593) {
      if (typeof _0x137593 === "string") {
        var _0x10e3d1 = new TextEncoder;
        _0x137593 = _0x10e3d1["encode"](_0x137593);
      } else {
        _0x1e763e(_0x137593["byteLength"] !== undefined);
        if (_0x137593["byteLength"] == 0) return; else _0x137593 = new Uint8Array(_0x137593);
      }
      var _0x5e5fb9 = _0x216bff;
      _0x216bff = ![];
      if (_0x5e5fb9 && _0x137593["length"] === 10 && _0x137593[0] === 255 && _0x137593[1] === 255 && _0x137593[2] === 255 && _0x137593[3] === 255 && _0x137593[4] === "p"["charCodeAt"](0) && _0x137593[5] === "o"["charCodeAt"](0) && _0x137593[6] === "r"["charCodeAt"](0) && _0x137593[7] === "t"["charCodeAt"](0)) {
        var _0x5cb7e8 = _0x137593[8] << 8 | _0x137593[9];
        _0x5854a5["websocket_sock_ops"]["removePeer"](_0x557318, _0x12eb8c), _0x12eb8c["port"] = _0x5cb7e8, _0x5854a5["websocket_sock_ops"]["addPeer"](_0x557318, _0x12eb8c);
        return;
      }
      _0x557318["recv_queue"]["push"]({addr: _0x12eb8c["addr"], port: _0x12eb8c["port"], data: _0x137593}), _0x3d01d3["websocket"]["emit"]("message", _0x557318["stream"]["fd"]);
    }
    _0x2d4503 ? (_0x12eb8c["socket"]["on"]("open", _0x4cef16), _0x12eb8c["socket"]["on"]("message", function (_0x4ffbcb, _0xe7db56) {
      if (!_0xe7db56["binary"]) return;
      _0x182162(new Uint8Array(_0x4ffbcb)["buffer"]);
    }), _0x12eb8c["socket"]["on"]("close", function () {
      _0x3d01d3["websocket"]["emit"]("close", _0x557318["stream"]["fd"]);
    }), _0x12eb8c["socket"]["on"]("error", function (_0x4f8a69) {
      _0x557318["error"] = _0x4ea6fd["ECONNREFUSED"], _0x3d01d3["websocket"]["emit"]("error", [_0x557318["stream"]["fd"], _0x557318["error"], "ECONNREFUSED: Connection refused"]);
    })) : (_0x12eb8c["socket"]["onopen"] = _0x4cef16, _0x12eb8c["socket"]["onclose"] = function () {
      _0x3d01d3["websocket"]["emit"]("close", _0x557318["stream"]["fd"]);
    }, _0x12eb8c["socket"]["onmessage"] = function _0x24f368(_0x2e1bf8) {
      _0x182162(_0x2e1bf8["data"]);
    }, _0x12eb8c["socket"]["onerror"] = function (_0x139435) {
      _0x557318["error"] = _0x4ea6fd["ECONNREFUSED"], _0x3d01d3["websocket"]["emit"]("error", [_0x557318["stream"]["fd"], _0x557318["error"], "ECONNREFUSED: Connection refused"]);
    });
  }, poll: function (_0x312e99) {
    if (_0x312e99["type"] === 1 && _0x312e99["server"]) return _0x312e99["pending"]["length"] ? 64 | 1 : 0;
    var _0x2a1ffc = 0, _0x47bbdf = _0x312e99["type"] === 1 ? _0x5854a5["websocket_sock_ops"]["getPeer"](_0x312e99, _0x312e99["daddr"], _0x312e99["dport"]) : null;
    return (_0x312e99["recv_queue"]["length"] || !_0x47bbdf || _0x47bbdf && _0x47bbdf["socket"]["readyState"] === _0x47bbdf["socket"]["CLOSING"] || _0x47bbdf && _0x47bbdf["socket"]["readyState"] === _0x47bbdf["socket"]["CLOSED"]) && (_0x2a1ffc |= 64 | 1), (!_0x47bbdf || _0x47bbdf && _0x47bbdf["socket"]["readyState"] === _0x47bbdf["socket"]["OPEN"]) && (_0x2a1ffc |= 4), (_0x47bbdf && _0x47bbdf["socket"]["readyState"] === _0x47bbdf["socket"]["CLOSING"] || _0x47bbdf && _0x47bbdf["socket"]["readyState"] === _0x47bbdf["socket"]["CLOSED"]) && (_0x2a1ffc |= 16), _0x2a1ffc;
  }, ioctl: function (_0xe92598, _0x2192fe, _0x4f43d1) {
    switch (_0x2192fe) {
      case 21531:
        var _0x365c63 = 0;
        _0xe92598["recv_queue"]["length"] && (_0x365c63 = _0xe92598["recv_queue"][0]["data"]["length"]);
        _0x5f4233[_0x4f43d1 >> 2] = _0x365c63;
        return 0;
      default:
        return _0x4ea6fd["EINVAL"];
    }
  }, close: function (_0x25233b) {
    if (_0x25233b["server"]) {
      try {
        _0x25233b["server"]["close"]();
      } catch (_0x5c05f7) {}
      _0x25233b["server"] = null;
    }
    var _0x2efa09 = Object["keys"](_0x25233b["peers"]);
    for (var _0x26143a = 0; _0x26143a < _0x2efa09["length"]; _0x26143a++) {
      var _0x2a548e = _0x25233b["peers"][_0x2efa09[_0x26143a]];
      try {
        _0x2a548e["socket"]["close"]();
      } catch (_0x342769) {}
      _0x5854a5["websocket_sock_ops"]["removePeer"](_0x25233b, _0x2a548e);
    }
    return 0;
  }, bind: function (_0x16a5e7, _0x4f73f5, _0x20107c) {
    if (typeof _0x16a5e7["saddr"] !== "undefined" || typeof _0x16a5e7["sport"] !== "undefined") throw new _0x37953b["ErrnoError"](_0x4ea6fd["EINVAL"]);
    _0x16a5e7["saddr"] = _0x4f73f5, _0x16a5e7["sport"] = _0x20107c;
    if (_0x16a5e7["type"] === 2) {
      _0x16a5e7["server"] && (_0x16a5e7["server"]["close"](), _0x16a5e7["server"] = null);
      try {
        _0x16a5e7["sock_ops"]["listen"](_0x16a5e7, 0);
      } catch (_0x290266) {
        if (!(_0x290266 instanceof _0x37953b["ErrnoError"])) throw _0x290266;
        if (_0x290266["errno"] !== _0x4ea6fd["EOPNOTSUPP"]) throw _0x290266;
      }
    }
  }, connect: function (_0x5c35af, _0x34e480, _0x2985c1) {
    if (_0x5c35af["server"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EOPNOTSUPP"]);
    if (typeof _0x5c35af["daddr"] !== "undefined" && typeof _0x5c35af["dport"] !== "undefined") {
      var _0x1470db = _0x5854a5["websocket_sock_ops"]["getPeer"](_0x5c35af, _0x5c35af["daddr"], _0x5c35af["dport"]);
      if (_0x1470db) {
        if (_0x1470db["socket"]["readyState"] === _0x1470db["socket"]["CONNECTING"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EALREADY"]); else throw new _0x37953b["ErrnoError"](_0x4ea6fd["EISCONN"]);
      }
    }
    var _0x254dfd = _0x5854a5["websocket_sock_ops"]["createPeer"](_0x5c35af, _0x34e480, _0x2985c1);
    _0x5c35af["daddr"] = _0x254dfd["addr"], _0x5c35af["dport"] = _0x254dfd["port"];
    throw new _0x37953b["ErrnoError"](_0x4ea6fd["EINPROGRESS"]);
  }, listen: function (_0x30a823, _0x7ba430) {
    if (!_0x2d4503) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EOPNOTSUPP"]);
    if (_0x30a823["server"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EINVAL"]);
    var _0x19b420 = require("ws")["Server"], _0x2b8a1d = _0x30a823["saddr"];
    _0x30a823["server"] = new _0x19b420({host: _0x2b8a1d, port: _0x30a823["sport"]}), _0x3d01d3["websocket"]["emit"]("listen", _0x30a823["stream"]["fd"]), _0x30a823["server"]["on"]("connection", function (_0x30dc80) {
      if (_0x30a823["type"] === 1) {
        var _0x3b39be = _0x5854a5["createSocket"](_0x30a823["family"], _0x30a823["type"], _0x30a823["protocol"]), _0xb45017 = _0x5854a5["websocket_sock_ops"]["createPeer"](_0x3b39be, _0x30dc80);
        _0x3b39be["daddr"] = _0xb45017["addr"], _0x3b39be["dport"] = _0xb45017["port"], _0x30a823["pending"]["push"](_0x3b39be), _0x3d01d3["websocket"]["emit"]("connection", _0x3b39be["stream"]["fd"]);
      } else _0x5854a5["websocket_sock_ops"]["createPeer"](_0x30a823, _0x30dc80), _0x3d01d3["websocket"]["emit"]("connection", _0x30a823["stream"]["fd"]);
    }), _0x30a823["server"]["on"]("closed", function () {
      _0x3d01d3["websocket"]["emit"]("close", _0x30a823["stream"]["fd"]), _0x30a823["server"] = null;
    }), _0x30a823["server"]["on"]("error", function (_0x2cd2c4) {
      _0x30a823["error"] = _0x4ea6fd["EHOSTUNREACH"], _0x3d01d3["websocket"]["emit"]("error", [_0x30a823["stream"]["fd"], _0x30a823["error"], "EHOSTUNREACH: Host is unreachable"]);
    });
  }, accept: function (_0x325e9f) {
    if (!_0x325e9f["server"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EINVAL"]);
    var _0x359971 = _0x325e9f["pending"]["shift"]();
    return _0x359971["stream"]["flags"] = _0x325e9f["stream"]["flags"], _0x359971;
  }, getname: function (_0x3ad506, _0x2db72c) {
    var _0x5c7368, _0x26c6e3;
    if (_0x2db72c) {
      if (_0x3ad506["daddr"] === undefined || _0x3ad506["dport"] === undefined) throw new _0x37953b["ErrnoError"](_0x4ea6fd["ENOTCONN"]);
      _0x5c7368 = _0x3ad506["daddr"], _0x26c6e3 = _0x3ad506["dport"];
    } else _0x5c7368 = _0x3ad506["saddr"] || 0, _0x26c6e3 = _0x3ad506["sport"] || 0;
    return {addr: _0x5c7368, port: _0x26c6e3};
  }, sendmsg: function (_0x44d270, _0x7ba83, _0x36243f, _0xe4e1e2, _0x202a08, _0x23da69) {
    if (_0x44d270["type"] === 2) {
      (_0x202a08 === undefined || _0x23da69 === undefined) && (_0x202a08 = _0x44d270["daddr"], _0x23da69 = _0x44d270["dport"]);
      if (_0x202a08 === undefined || _0x23da69 === undefined) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EDESTADDRREQ"]);
    } else _0x202a08 = _0x44d270["daddr"], _0x23da69 = _0x44d270["dport"];
    var _0x538cca = _0x5854a5["websocket_sock_ops"]["getPeer"](_0x44d270, _0x202a08, _0x23da69);
    if (_0x44d270["type"] === 1) {
      if (!_0x538cca || _0x538cca["socket"]["readyState"] === _0x538cca["socket"]["CLOSING"] || _0x538cca["socket"]["readyState"] === _0x538cca["socket"]["CLOSED"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["ENOTCONN"]); else {
        if (_0x538cca["socket"]["readyState"] === _0x538cca["socket"]["CONNECTING"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EAGAIN"]);
      }
    }
    ArrayBuffer["isView"](_0x7ba83) && (_0x36243f += _0x7ba83["byteOffset"], _0x7ba83 = _0x7ba83["buffer"]);
    var _0x52efa7;
    _0x52efa7 = _0x7ba83["slice"](_0x36243f, _0x36243f + _0xe4e1e2);
    if (_0x44d270["type"] === 2) {
      if (!_0x538cca || _0x538cca["socket"]["readyState"] !== _0x538cca["socket"]["OPEN"]) return (!_0x538cca || _0x538cca["socket"]["readyState"] === _0x538cca["socket"]["CLOSING"] || _0x538cca["socket"]["readyState"] === _0x538cca["socket"]["CLOSED"]) && (_0x538cca = _0x5854a5["websocket_sock_ops"]["createPeer"](_0x44d270, _0x202a08, _0x23da69)), _0x538cca["dgram_send_queue"]["push"](_0x52efa7), _0xe4e1e2;
    }
    try {
      return _0x538cca["socket"]["send"](_0x52efa7), _0xe4e1e2;
    } catch (_0x4d2981) {
      throw new _0x37953b["ErrnoError"](_0x4ea6fd["EINVAL"]);
    }
  }, recvmsg: function (_0x4bf9e5, _0x386a45) {
    if (_0x4bf9e5["type"] === 1 && _0x4bf9e5["server"]) throw new _0x37953b["ErrnoError"](_0x4ea6fd["ENOTCONN"]);
    var _0x40dc64 = _0x4bf9e5["recv_queue"]["shift"]();
    if (!_0x40dc64) {
      if (_0x4bf9e5["type"] === 1) {
        var _0x5c94cd = _0x5854a5["websocket_sock_ops"]["getPeer"](_0x4bf9e5, _0x4bf9e5["daddr"], _0x4bf9e5["dport"]);
        if (!_0x5c94cd) throw new _0x37953b["ErrnoError"](_0x4ea6fd["ENOTCONN"]); else {
          if (_0x5c94cd["socket"]["readyState"] === _0x5c94cd["socket"]["CLOSING"] || _0x5c94cd["socket"]["readyState"] === _0x5c94cd["socket"]["CLOSED"]) return null; else throw new _0x37953b["ErrnoError"](_0x4ea6fd["EAGAIN"]);
        }
      } else throw new _0x37953b["ErrnoError"](_0x4ea6fd["EAGAIN"]);
    }
    var _0xfff7d2 = _0x40dc64["data"]["byteLength"] || _0x40dc64["data"]["length"], _0x433e49 = _0x40dc64["data"]["byteOffset"] || 0, _0x1c624c = _0x40dc64["data"]["buffer"] || _0x40dc64["data"], _0x49fc8c = Math["min"](_0x386a45, _0xfff7d2), _0x1dec73 = {buffer: new Uint8Array(_0x1c624c, _0x433e49, _0x49fc8c), addr: _0x40dc64["addr"], port: _0x40dc64["port"]};
    if (_0x4bf9e5["type"] === 1 && _0x49fc8c < _0xfff7d2) {
      var _0x41df8a = _0xfff7d2 - _0x49fc8c;
      _0x40dc64["data"] = new Uint8Array(_0x1c624c, _0x433e49 + _0x49fc8c, _0x41df8a), _0x4bf9e5["recv_queue"]["unshift"](_0x40dc64);
    }
    return _0x1dec73;
  }}};
  function _0x17d349(_0x12d475) {
    var _0x5ea584 = _0x5854a5["getSocket"](_0x12d475);
    if (!_0x5ea584) throw new _0x37953b["ErrnoError"](8);
    return _0x5ea584;
  }
  function _0xca8898(_0x559906) {
    return _0x5f4233[_0x2132dd() >> 2] = _0x559906, _0x559906;
  }
  function _0x1c2716(_0x2c00b4) {
    var _0x34f24d = _0x2c00b4["split"](".");
    for (var _0x1910ea = 0; _0x1910ea < 4; _0x1910ea++) {
      var _0xd74a18 = Number(_0x34f24d[_0x1910ea]);
      if (isNaN(_0xd74a18)) return null;
      _0x34f24d[_0x1910ea] = _0xd74a18;
    }
    return (_0x34f24d[0] | _0x34f24d[1] << 8 | _0x34f24d[2] << 16 | _0x34f24d[3] << 24) >>> 0;
  }
  function _0x25f676(_0x4f2331) {
    return parseInt(_0x4f2331);
  }
  function _0x18956b(_0x104f83) {
    var _0x302ba2, _0x5f3125, _0x521e6a, _0x575e8f, _0x39524d = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, _0x2bf536 = [];
    if (!_0x39524d["test"](_0x104f83)) return null;
    if (_0x104f83 === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
    _0x104f83["startsWith"]("::") ? _0x104f83 = _0x104f83["replace"]("::", "Z:") : _0x104f83 = _0x104f83["replace"]("::", ":Z:");
    _0x104f83["indexOf"](".") > 0 ? (_0x104f83 = _0x104f83["replace"](new RegExp("[.]", "g"), ":"), _0x302ba2 = _0x104f83["split"](":"), _0x302ba2[_0x302ba2["length"] - 4] = _0x25f676(_0x302ba2[_0x302ba2["length"] - 4]) + _0x25f676(_0x302ba2[_0x302ba2["length"] - 3]) * 256, _0x302ba2[_0x302ba2["length"] - 3] = _0x25f676(_0x302ba2[_0x302ba2["length"] - 2]) + _0x25f676(_0x302ba2[_0x302ba2["length"] - 1]) * 256, _0x302ba2 = _0x302ba2["slice"](0, _0x302ba2["length"] - 2)) : _0x302ba2 = _0x104f83["split"](":");
    _0x521e6a = 0, _0x575e8f = 0;
    for (_0x5f3125 = 0; _0x5f3125 < _0x302ba2["length"]; _0x5f3125++) {
      if (typeof _0x302ba2[_0x5f3125] === "string") {
        if (_0x302ba2[_0x5f3125] === "Z") {
          for (_0x575e8f = 0; _0x575e8f < 8 - _0x302ba2["length"] + 1; _0x575e8f++) {
            _0x2bf536[_0x5f3125 + _0x575e8f] = 0;
          }
          _0x521e6a = _0x575e8f - 1;
        } else _0x2bf536[_0x5f3125 + _0x521e6a] = _0x10f692(parseInt(_0x302ba2[_0x5f3125], 16));
      } else _0x2bf536[_0x5f3125 + _0x521e6a] = _0x302ba2[_0x5f3125];
    }
    return [_0x2bf536[1] << 16 | _0x2bf536[0], _0x2bf536[3] << 16 | _0x2bf536[2], _0x2bf536[5] << 16 | _0x2bf536[4], _0x2bf536[7] << 16 | _0x2bf536[6]];
  }
  function _0x5b019b(_0x1317fc, _0x788aa7, _0x33043c, _0x499639, _0x142ef3) {
    switch (_0x788aa7) {
      case 2:
        _0x33043c = _0x1c2716(_0x33043c);
        _0x142ef3 && (_0x5f4233[_0x142ef3 >> 2] = 16);
        _0x17c3b3[_0x1317fc >> 1] = _0x788aa7, _0x5f4233[_0x1317fc + 4 >> 2] = _0x33043c, _0x17c3b3[_0x1317fc + 2 >> 1] = _0x10f692(_0x499639), (_0x437765 = [0 >>> 0, (_0x2eda49 = 0, +Math["abs"](_0x2eda49) >= 1 ? _0x2eda49 > 0 ? (Math["min"](+Math["floor"](_0x2eda49 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x2eda49 - +(~~_0x2eda49 >>> 0)) / 4294967296) >>> 0 : 0)], _0x5f4233[_0x1317fc + 8 >> 2] = _0x437765[0], _0x5f4233[_0x1317fc + 12 >> 2] = _0x437765[1]);
        break;
      case 10:
        _0x33043c = _0x18956b(_0x33043c);
        _0x142ef3 && (_0x5f4233[_0x142ef3 >> 2] = 28);
        _0x5f4233[_0x1317fc >> 2] = _0x788aa7, _0x5f4233[_0x1317fc + 8 >> 2] = _0x33043c[0], _0x5f4233[_0x1317fc + 12 >> 2] = _0x33043c[1], _0x5f4233[_0x1317fc + 16 >> 2] = _0x33043c[2], _0x5f4233[_0x1317fc + 20 >> 2] = _0x33043c[3], _0x17c3b3[_0x1317fc + 2 >> 1] = _0x10f692(_0x499639), _0x5f4233[_0x1317fc + 4 >> 2] = 0, _0x5f4233[_0x1317fc + 24 >> 2] = 0;
        break;
      default:
        return 5;
    }
    return 0;
  }
  var _0x5a8f52 = {address_map: {id: 1, addrs: {}, names: {}}, lookup_name: function (_0x233266) {
    var _0x5f4c62 = _0x1c2716(_0x233266);
    if (_0x5f4c62 !== null) return _0x233266;
    _0x5f4c62 = _0x18956b(_0x233266);
    if (_0x5f4c62 !== null) return _0x233266;
    var _0x411a95;
    if (_0x5a8f52["address_map"]["addrs"][_0x233266]) _0x411a95 = _0x5a8f52["address_map"]["addrs"][_0x233266]; else {
      var _0x439ff5 = _0x5a8f52["address_map"]["id"]++;
      _0x1e763e(_0x439ff5 < 65535, "exceeded max address mappings of 65535"), _0x411a95 = "172.29." + (_0x439ff5 & 255) + "." + (_0x439ff5 & 65280), _0x5a8f52["address_map"]["names"][_0x411a95] = _0x233266, _0x5a8f52["address_map"]["addrs"][_0x233266] = _0x411a95;
    }
    return _0x411a95;
  }, lookup_addr: function (_0x3b8a80) {
    if (_0x5a8f52["address_map"]["names"][_0x3b8a80]) return _0x5a8f52["address_map"]["names"][_0x3b8a80];
    return null;
  }};
  function _0x563941(_0x53ce53, _0x4dc7da, _0xfa9f2a, _0x2ea350) {
    try {
      var _0x2dea1f = _0x17d349(_0x53ce53), _0x2bbbbd = _0x2dea1f["sock_ops"]["accept"](_0x2dea1f);
      if (_0x4dc7da) var _0x12d255 = _0x5b019b(_0x4dc7da, _0x2bbbbd["family"], _0x5a8f52["lookup_name"](_0x2bbbbd["daddr"]), _0x2bbbbd["dport"], _0xfa9f2a);
      return _0x2bbbbd["stream"]["fd"];
    } catch (_0x1ff4a9) {
      if (typeof _0x37953b === "undefined" || !(_0x1ff4a9 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x1ff4a9);
      return -_0x1ff4a9["errno"];
    }
  }
  function _0x419696(_0x4b5171, _0xbde1c1) {
    try {
      return _0x4b5171 = _0x315b4e["getStr"](_0x4b5171), _0x315b4e["doAccess"](_0x4b5171, _0xbde1c1);
    } catch (_0x4fdbb7) {
      if (typeof _0x37953b === "undefined" || !(_0x4fdbb7 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x4fdbb7);
      return -_0x4fdbb7["errno"];
    }
  }
  function _0x237540(_0x3de32c) {
    return (_0x3de32c & 255) + "." + (_0x3de32c >> 8 & 255) + "." + (_0x3de32c >> 16 & 255) + "." + (_0x3de32c >> 24 & 255);
  }
  function _0x39b5e8(_0x3d8739) {
    var _0x1fcd1c = "", _0x598173 = 0, _0x1cc55d = 0, _0x18cd48 = 0, _0x24c6af = 0, _0x3aa08f = 0, _0x163015 = 0, _0x17882a = [_0x3d8739[0] & 65535, _0x3d8739[0] >> 16, _0x3d8739[1] & 65535, _0x3d8739[1] >> 16, _0x3d8739[2] & 65535, _0x3d8739[2] >> 16, _0x3d8739[3] & 65535, _0x3d8739[3] >> 16], _0x1b8181 = !![], _0x2f3bcb = "";
    for (_0x163015 = 0; _0x163015 < 5; _0x163015++) {
      if (_0x17882a[_0x163015] !== 0) {
        _0x1b8181 = ![];
        break;
      }
    }
    if (_0x1b8181) {
      _0x2f3bcb = _0x237540(_0x17882a[6] | _0x17882a[7] << 16);
      if (_0x17882a[5] === -1) return _0x1fcd1c = "::ffff:", _0x1fcd1c += _0x2f3bcb, _0x1fcd1c;
      if (_0x17882a[5] === 0) {
        _0x1fcd1c = "::";
        if (_0x2f3bcb === "0.0.0.0") _0x2f3bcb = "";
        if (_0x2f3bcb === "0.0.0.1") _0x2f3bcb = "1";
        return _0x1fcd1c += _0x2f3bcb, _0x1fcd1c;
      }
    }
    for (_0x598173 = 0; _0x598173 < 8; _0x598173++) {
      _0x17882a[_0x598173] === 0 && (_0x598173 - _0x18cd48 > 1 && (_0x3aa08f = 0), _0x18cd48 = _0x598173, _0x3aa08f++), _0x3aa08f > _0x1cc55d && (_0x1cc55d = _0x3aa08f, _0x24c6af = _0x598173 - _0x1cc55d + 1);
    }
    for (_0x598173 = 0; _0x598173 < 8; _0x598173++) {
      if (_0x1cc55d > 1) {
        if (_0x17882a[_0x598173] === 0 && _0x598173 >= _0x24c6af && _0x598173 < _0x24c6af + _0x1cc55d) {
          if (_0x598173 === _0x24c6af) {
            _0x1fcd1c += ":";
            if (_0x24c6af === 0) _0x1fcd1c += ":";
          }
          continue;
        }
      }
      _0x1fcd1c += Number(_0x3377ef(_0x17882a[_0x598173] & 65535))["toString"](16), _0x1fcd1c += _0x598173 < 7 ? ":" : "";
    }
    return _0x1fcd1c;
  }
  function _0x46ca37(_0x1e59fd, _0x473555) {
    var _0x46106e = _0x17c3b3[_0x1e59fd >> 1], _0x19caaf = _0x3377ef(_0x2609db[_0x1e59fd + 2 >> 1]), _0x5c42f6;
    switch (_0x46106e) {
      case 2:
        if (_0x473555 !== 16) return {errno: 28};
        _0x5c42f6 = _0x5f4233[_0x1e59fd + 4 >> 2], _0x5c42f6 = _0x237540(_0x5c42f6);
        break;
      case 10:
        if (_0x473555 !== 28) return {errno: 28};
        _0x5c42f6 = [_0x5f4233[_0x1e59fd + 8 >> 2], _0x5f4233[_0x1e59fd + 12 >> 2], _0x5f4233[_0x1e59fd + 16 >> 2], _0x5f4233[_0x1e59fd + 20 >> 2]], _0x5c42f6 = _0x39b5e8(_0x5c42f6);
        break;
      default:
        return {errno: 5};
    }
    return {family: _0x46106e, addr: _0x5c42f6, port: _0x19caaf};
  }
  function _0x3275ef(_0xd20646, _0x14a7ee, _0x4bbb69) {
    if (_0x4bbb69 && _0xd20646 === 0) return null;
    var _0x2ec6ee = _0x46ca37(_0xd20646, _0x14a7ee);
    if (_0x2ec6ee["errno"]) throw new _0x37953b["ErrnoError"](_0x2ec6ee["errno"]);
    return _0x2ec6ee["addr"] = _0x5a8f52["lookup_addr"](_0x2ec6ee["addr"]) || _0x2ec6ee["addr"], _0x2ec6ee;
  }
  function _0x23e5cc(_0x71f722, _0x14d136, _0x43e493) {
    try {
      var _0x5d1ae3 = _0x17d349(_0x71f722), _0x4de931 = _0x3275ef(_0x14d136, _0x43e493);
      return _0x5d1ae3["sock_ops"]["bind"](_0x5d1ae3, _0x4de931["addr"], _0x4de931["port"]), 0;
    } catch (_0x4000a4) {
      if (typeof _0x37953b === "undefined" || !(_0x4000a4 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x4000a4);
      return -_0x4000a4["errno"];
    }
  }
  function _0x4da0d5(_0x30e625, _0x3c4935) {
    try {
      return _0x30e625 = _0x315b4e["getStr"](_0x30e625), _0x37953b["chmod"](_0x30e625, _0x3c4935), 0;
    } catch (_0xeb9022) {
      if (typeof _0x37953b === "undefined" || !(_0xeb9022 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0xeb9022);
      return -_0xeb9022["errno"];
    }
  }
  function _0x18c485(_0x48f5fc, _0x2f80c4, _0x2cd112) {
    try {
      var _0x525ee7 = _0x17d349(_0x48f5fc), _0x17b86d = _0x3275ef(_0x2f80c4, _0x2cd112);
      return _0x525ee7["sock_ops"]["connect"](_0x525ee7, _0x17b86d["addr"], _0x17b86d["port"]), 0;
    } catch (_0x25e222) {
      if (typeof _0x37953b === "undefined" || !(_0x25e222 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x25e222);
      return -_0x25e222["errno"];
    }
  }
  function _0x2e0fb7(_0x5ace33, _0x3f2306) {
    try {
      var _0x85d801 = _0x315b4e["getStreamFromFD"](_0x5ace33);
      if (_0x85d801["fd"] === _0x3f2306) return _0x3f2306;
      return _0x315b4e["doDup"](_0x85d801["path"], _0x85d801["flags"], _0x3f2306);
    } catch (_0x35e3e0) {
      if (typeof _0x37953b === "undefined" || !(_0x35e3e0 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x35e3e0);
      return -_0x35e3e0["errno"];
    }
  }
  function _0x35c432(_0x55aa1d, _0x187996, _0x5f0c01) {
    _0x315b4e["varargs"] = _0x5f0c01;
    try {
      var _0x34feef = _0x315b4e["getStreamFromFD"](_0x55aa1d);
      switch (_0x187996) {
        case 0:
          {
            var _0x280e88 = _0x315b4e["get"]();
            if (_0x280e88 < 0) return -28;
            var _0x48ecd6;
            return _0x48ecd6 = _0x37953b["open"](_0x34feef["path"], _0x34feef["flags"], 0, _0x280e88), _0x48ecd6["fd"];
          }
        case 1:
        case 2:
          return 0;
        case 3:
          return _0x34feef["flags"];
        case 4:
          {
            var _0x280e88 = _0x315b4e["get"]();
            return _0x34feef["flags"] |= _0x280e88, 0;
          }
        case 12:
          {
            var _0x280e88 = _0x315b4e["get"](), _0x57dd3f = 0;
            return _0x17c3b3[_0x280e88 + _0x57dd3f >> 1] = 2, 0;
          }
        case 13:
        case 14:
          return 0;
        case 16:
        case 8:
          return -28;
        case 9:
          _0xca8898(28);
          return -1;
        default:
          {
            return -28;
          }
      }
    } catch (_0x1f64d3) {
      if (typeof _0x37953b === "undefined" || !(_0x1f64d3 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x1f64d3);
      return -_0x1f64d3["errno"];
    }
  }
  function _0x430570(_0x1b4827, _0x32cde6) {
    try {
      var _0x24fe91 = _0x315b4e["getStreamFromFD"](_0x1b4827);
      return _0x315b4e["doStat"](_0x37953b["stat"], _0x24fe91["path"], _0x32cde6);
    } catch (_0x2a60c4) {
      if (typeof _0x37953b === "undefined" || !(_0x2a60c4 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x2a60c4);
      return -_0x2a60c4["errno"];
    }
  }
  function _0x4ac111(_0x3cc471, _0x8dee09) {
    try {
      if (_0x8dee09 === 0) return -28;
      var _0x25c119 = _0x37953b["cwd"](), _0x5f9ce3 = _0x2c1249(_0x25c119);
      if (_0x8dee09 < _0x5f9ce3 + 1) return -68;
      return _0xf36afc(_0x25c119, _0x3cc471, _0x8dee09), _0x3cc471;
    } catch (_0x3ff5ef) {
      if (typeof _0x37953b === "undefined" || !(_0x3ff5ef instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x3ff5ef);
      return -_0x3ff5ef["errno"];
    }
  }
  function _0x5aa57d(_0x3e4d4f, _0x2cd1df, _0x20774a) {
    try {
      var _0x505fa3 = _0x315b4e["getStreamFromFD"](_0x3e4d4f);
      !_0x505fa3["getdents"] && (_0x505fa3["getdents"] = _0x37953b["readdir"](_0x505fa3["path"]));
      var _0x33e6bb = 280, _0xfaee65 = 0, _0x54c91a = _0x37953b["llseek"](_0x505fa3, 0, 1), _0x1c78c8 = Math["floor"](_0x54c91a / _0x33e6bb);
      while (_0x1c78c8 < _0x505fa3["getdents"]["length"] && _0xfaee65 + _0x33e6bb <= _0x20774a) {
        var _0x5e3f6f, _0x1e2f5d, _0x559f73 = _0x505fa3["getdents"][_0x1c78c8];
        if (_0x559f73[0] === ".") _0x5e3f6f = 1, _0x1e2f5d = 4; else {
          var _0x4b251d = _0x37953b["lookupNode"](_0x505fa3["node"], _0x559f73);
          _0x5e3f6f = _0x4b251d["id"], _0x1e2f5d = _0x37953b["isChrdev"](_0x4b251d["mode"]) ? 2 : _0x37953b["isDir"](_0x4b251d["mode"]) ? 4 : _0x37953b["isLink"](_0x4b251d["mode"]) ? 10 : 8;
        }
        _0x437765 = [_0x5e3f6f >>> 0, (_0x2eda49 = _0x5e3f6f, +Math["abs"](_0x2eda49) >= 1 ? _0x2eda49 > 0 ? (Math["min"](+Math["floor"](_0x2eda49 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x2eda49 - +(~~_0x2eda49 >>> 0)) / 4294967296) >>> 0 : 0)], _0x5f4233[_0x2cd1df + _0xfaee65 >> 2] = _0x437765[0], _0x5f4233[_0x2cd1df + _0xfaee65 + 4 >> 2] = _0x437765[1], (_0x437765 = [(_0x1c78c8 + 1) * _0x33e6bb >>> 0, (_0x2eda49 = (_0x1c78c8 + 1) * _0x33e6bb, +Math["abs"](_0x2eda49) >= 1 ? _0x2eda49 > 0 ? (Math["min"](+Math["floor"](_0x2eda49 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x2eda49 - +(~~_0x2eda49 >>> 0)) / 4294967296) >>> 0 : 0)], _0x5f4233[_0x2cd1df + _0xfaee65 + 8 >> 2] = _0x437765[0], _0x5f4233[_0x2cd1df + _0xfaee65 + 12 >> 2] = _0x437765[1]), _0x17c3b3[_0x2cd1df + _0xfaee65 + 16 >> 1] = 280, _0x2c8e41[_0x2cd1df + _0xfaee65 + 18 >> 0] = _0x1e2f5d, _0xf36afc(_0x559f73, _0x2cd1df + _0xfaee65 + 19, 256), _0xfaee65 += _0x33e6bb, _0x1c78c8 += 1;
      }
      return _0x37953b["llseek"](_0x505fa3, _0x1c78c8 * _0x33e6bb, 0), _0xfaee65;
    } catch (_0x4c4760) {
      if (typeof _0x37953b === "undefined" || !(_0x4c4760 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x4c4760);
      return -_0x4c4760["errno"];
    }
  }
  function _0x44f96c() {
    return 0;
  }
  function _0x596709() {
    return _0x44f96c();
  }
  function _0x4f5c0b(_0x4893f1, _0x5c9f0b, _0x1ae9f4) {
    try {
      var _0x55c62a = _0x17d349(_0x4893f1);
      if (!_0x55c62a["daddr"]) return -53;
      var _0xd17e99 = _0x5b019b(_0x5c9f0b, _0x55c62a["family"], _0x5a8f52["lookup_name"](_0x55c62a["daddr"]), _0x55c62a["dport"], _0x1ae9f4);
      return 0;
    } catch (_0x42f756) {
      if (typeof _0x37953b === "undefined" || !(_0x42f756 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x42f756);
      return -_0x42f756["errno"];
    }
  }
  function _0x3b6ad3() {
    return 42;
  }
  function _0x2c24c9(_0xe7d9ce, _0x1a9b1d) {
    try {
      return _0x14a396(_0x1a9b1d, 0, 136), _0x5f4233[_0x1a9b1d >> 2] = 1, _0x5f4233[_0x1a9b1d + 4 >> 2] = 2, _0x5f4233[_0x1a9b1d + 8 >> 2] = 3, _0x5f4233[_0x1a9b1d + 12 >> 2] = 4, 0;
    } catch (_0x41daf9) {
      if (typeof _0x37953b === "undefined" || !(_0x41daf9 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x41daf9);
      return -_0x41daf9["errno"];
    }
  }
  function _0x56f7ea(_0x27154d, _0x2c063a, _0x529c3e) {
    try {
      _0x366b43("__sys_getsockname " + _0x27154d);
      var _0x556a7a = _0x17d349(_0x27154d), _0x29cc13 = _0x5b019b(_0x2c063a, _0x556a7a["family"], _0x5a8f52["lookup_name"](_0x556a7a["saddr"] || "0.0.0.0"), _0x556a7a["sport"], _0x529c3e);
      return 0;
    } catch (_0xb6f907) {
      if (typeof _0x37953b === "undefined" || !(_0xb6f907 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0xb6f907);
      return -_0xb6f907["errno"];
    }
  }
  function _0x258084(_0x3f540, _0x48b028, _0x31a0ac, _0x1a8664, _0x206ab7) {
    try {
      var _0x4eab53 = _0x17d349(_0x3f540);
      if (_0x48b028 === 1) {
        if (_0x31a0ac === 4) return _0x5f4233[_0x1a8664 >> 2] = _0x4eab53["error"], _0x5f4233[_0x206ab7 >> 2] = 4, _0x4eab53["error"] = null, 0;
      }
      return -50;
    } catch (_0x11f2b4) {
      if (typeof _0x37953b === "undefined" || !(_0x11f2b4 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x11f2b4);
      return -_0x11f2b4["errno"];
    }
  }
  function _0x48281e() {
    return _0x44f96c();
  }
  function _0x13534b(_0x2b077c, _0x5ae22c, _0x3e75c) {
    _0x315b4e["varargs"] = _0x3e75c;
    try {
      var _0x5e4bee = _0x315b4e["getStreamFromFD"](_0x2b077c);
      switch (_0x5ae22c) {
        case 21509:
        case 21505:
          {
            if (!_0x5e4bee["tty"]) return -59;
            return 0;
          }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
          {
            if (!_0x5e4bee["tty"]) return -59;
            return 0;
          }
        case 21519:
          {
            if (!_0x5e4bee["tty"]) return -59;
            var _0x142238 = _0x315b4e["get"]();
            return _0x5f4233[_0x142238 >> 2] = 0, 0;
          }
        case 21520:
          {
            if (!_0x5e4bee["tty"]) return -59;
            return -28;
          }
        case 21531:
          {
            var _0x142238 = _0x315b4e["get"]();
            return _0x37953b["ioctl"](_0x5e4bee, _0x5ae22c, _0x142238);
          }
        case 21523:
          {
            if (!_0x5e4bee["tty"]) return -59;
            return 0;
          }
        case 21524:
          {
            if (!_0x5e4bee["tty"]) return -59;
            return 0;
          }
        default:
          _0x4c406f("bad ioctl syscall " + _0x5ae22c);
      }
    } catch (_0x4489c4) {
      if (typeof _0x37953b === "undefined" || !(_0x4489c4 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x4489c4);
      return -_0x4489c4["errno"];
    }
  }
  function _0x148462(_0x439eaf, _0x18de3b) {
    try {
      var _0x60dee2 = _0x17d349(_0x439eaf);
      return _0x60dee2["sock_ops"]["listen"](_0x60dee2, _0x18de3b), 0;
    } catch (_0x4dca4c) {
      if (typeof _0x37953b === "undefined" || !(_0x4dca4c instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x4dca4c);
      return -_0x4dca4c["errno"];
    }
  }
  function _0x4c6a99(_0x758c3c, _0x240b0d) {
    try {
      return _0x758c3c = _0x315b4e["getStr"](_0x758c3c), _0x315b4e["doStat"](_0x37953b["lstat"], _0x758c3c, _0x240b0d);
    } catch (_0x427ccd) {
      if (typeof _0x37953b === "undefined" || !(_0x427ccd instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x427ccd);
      return -_0x427ccd["errno"];
    }
  }
  function _0x53aecf(_0x5bd663, _0x3a9494) {
    try {
      return _0x5bd663 = _0x315b4e["getStr"](_0x5bd663), _0x315b4e["doMkdir"](_0x5bd663, _0x3a9494);
    } catch (_0x590fe2) {
      if (typeof _0x37953b === "undefined" || !(_0x590fe2 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x590fe2);
      return -_0x590fe2["errno"];
    }
  }
  function _0x46b177(_0x276da2, _0x2a85ab, _0xd10850, _0xae7bc5, _0x500ac4, _0x35cb0c) {
    _0x35cb0c <<= 12;
    var _0x50e028, _0x2ecf8b = ![];
    if ((_0xae7bc5 & 16) !== 0 && _0x276da2 % 65536 !== 0) return -28;
    if ((_0xae7bc5 & 32) !== 0) {
      _0x50e028 = _0x36f9f1(65536, _0x2a85ab);
      if (!_0x50e028) return -48;
      _0x14a396(_0x50e028, 0, _0x2a85ab), _0x2ecf8b = !![];
    } else {
      var _0xbeeb95 = _0x37953b["getStream"](_0x500ac4);
      if (!_0xbeeb95) return -8;
      var _0x497951 = _0x37953b["mmap"](_0xbeeb95, _0x276da2, _0x2a85ab, _0x35cb0c, _0xd10850, _0xae7bc5);
      _0x50e028 = _0x497951["ptr"], _0x2ecf8b = _0x497951["allocated"];
    }
    return _0x315b4e["mappings"][_0x50e028] = {malloc: _0x50e028, len: _0x2a85ab, allocated: _0x2ecf8b, fd: _0x500ac4, prot: _0xd10850, flags: _0xae7bc5, offset: _0x35cb0c}, _0x50e028;
  }
  function _0x473a92(_0x4cde63, _0x10758e, _0x44b0ff, _0x128e52, _0x5899a3, _0x21c9a5) {
    try {
      return _0x46b177(_0x4cde63, _0x10758e, _0x44b0ff, _0x128e52, _0x5899a3, _0x21c9a5);
    } catch (_0xe40300) {
      if (typeof _0x37953b === "undefined" || !(_0xe40300 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0xe40300);
      return -_0xe40300["errno"];
    }
  }
  function _0x268a68(_0x4509cd, _0x38dc87) {
    if ((_0x4509cd | 0) === -1 || _0x38dc87 === 0) return -28;
    var _0x4e8cf9 = _0x315b4e["mappings"][_0x4509cd];
    if (!_0x4e8cf9) return 0;
    if (_0x38dc87 === _0x4e8cf9["len"]) {
      var _0xb5e318 = _0x37953b["getStream"](_0x4e8cf9["fd"]);
      _0xb5e318 && (_0x4e8cf9["prot"] & 2 && _0x315b4e["doMsync"](_0x4509cd, _0xb5e318, _0x38dc87, _0x4e8cf9["flags"], _0x4e8cf9["offset"]), _0x37953b["munmap"](_0xb5e318)), _0x315b4e["mappings"][_0x4509cd] = null, _0x4e8cf9["allocated"] && _0x3426bf(_0x4e8cf9["malloc"]);
    }
    return 0;
  }
  function _0x3783ad(_0xe0198a, _0x362ebd) {
    try {
      return _0x268a68(_0xe0198a, _0x362ebd);
    } catch (_0x10c5a2) {
      if (typeof _0x37953b === "undefined" || !(_0x10c5a2 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x10c5a2);
      return -_0x10c5a2["errno"];
    }
  }
  function _0x21650d(_0x508f2, _0x332d34, _0x280a0f) {
    _0x315b4e["varargs"] = _0x280a0f;
    try {
      var _0x430e16 = _0x315b4e["getStr"](_0x508f2), _0x449cea = _0x280a0f ? _0x315b4e["get"]() : 0, _0x37d528 = _0x37953b["open"](_0x430e16, _0x332d34, _0x449cea);
      return _0x37d528["fd"];
    } catch (_0x46870d) {
      if (typeof _0x37953b === "undefined" || !(_0x46870d instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x46870d);
      return -_0x46870d["errno"];
    }
  }
  var _0x2dfe77 = {BUCKET_BUFFER_SIZE: 8192, mount: function (_0x4424ce) {
    return _0x37953b["createNode"](null, "/", 16384 | 511, 0);
  }, createPipe: function () {
    var _0x5b173a = {buckets: []};
    _0x5b173a["buckets"]["push"]({buffer: new Uint8Array(_0x2dfe77["BUCKET_BUFFER_SIZE"]), offset: 0, roffset: 0});
    var _0x223e20 = _0x2dfe77["nextname"](), _0x611e02 = _0x2dfe77["nextname"](), _0x5c833a = _0x37953b["createNode"](_0x2dfe77["root"], _0x223e20, 4096, 0), _0x131db5 = _0x37953b["createNode"](_0x2dfe77["root"], _0x611e02, 4096, 0);
    _0x5c833a["pipe"] = _0x5b173a, _0x131db5["pipe"] = _0x5b173a;
    var _0x472377 = _0x37953b["createStream"]({path: _0x223e20, node: _0x5c833a, flags: 0, seekable: ![], stream_ops: _0x2dfe77["stream_ops"]});
    _0x5c833a["stream"] = _0x472377;
    var _0xede5 = _0x37953b["createStream"]({path: _0x611e02, node: _0x131db5, flags: 1, seekable: ![], stream_ops: _0x2dfe77["stream_ops"]});
    return _0x131db5["stream"] = _0xede5, {readable_fd: _0x472377["fd"], writable_fd: _0xede5["fd"]};
  }, stream_ops: {poll: function (_0x53b09a) {
    var _0x2cfb79 = _0x53b09a["node"]["pipe"];
    if ((_0x53b09a["flags"] & 2097155) === 1) return 256 | 4; else {
      if (_0x2cfb79["buckets"]["length"] > 0) for (var _0x8e19b = 0; _0x8e19b < _0x2cfb79["buckets"]["length"]; _0x8e19b++) {
        var _0x18fc79 = _0x2cfb79["buckets"][_0x8e19b];
        if (_0x18fc79["offset"] - _0x18fc79["roffset"] > 0) return 64 | 1;
      }
    }
    return 0;
  }, ioctl: function (_0xab9f77, _0x5d0728, _0x205354) {
    return _0x4ea6fd["EINVAL"];
  }, fsync: function (_0x5d30ec) {
    return _0x4ea6fd["EINVAL"];
  }, read: function (_0x5e6ae7, _0x56d979, _0x5604c5, _0x49a046, _0x4de9cb) {
    var _0x11dce2 = _0x5e6ae7["node"]["pipe"], _0x10ede9 = 0;
    for (var _0x40526a = 0; _0x40526a < _0x11dce2["buckets"]["length"]; _0x40526a++) {
      var _0x3b1bec = _0x11dce2["buckets"][_0x40526a];
      _0x10ede9 += _0x3b1bec["offset"] - _0x3b1bec["roffset"];
    }
    _0x1e763e(_0x56d979 instanceof ArrayBuffer || ArrayBuffer["isView"](_0x56d979));
    var _0x582c9f = _0x56d979["subarray"](_0x5604c5, _0x5604c5 + _0x49a046);
    if (_0x49a046 <= 0) return 0;
    if (_0x10ede9 == 0) throw new _0x37953b["ErrnoError"](_0x4ea6fd["EAGAIN"]);
    var _0x212544 = Math["min"](_0x10ede9, _0x49a046), _0x8539da = _0x212544, _0x8aef91 = 0;
    for (var _0x40526a = 0; _0x40526a < _0x11dce2["buckets"]["length"]; _0x40526a++) {
      var _0x271831 = _0x11dce2["buckets"][_0x40526a], _0x23a597 = _0x271831["offset"] - _0x271831["roffset"];
      if (_0x212544 <= _0x23a597) {
        var _0x19a36b = _0x271831["buffer"]["subarray"](_0x271831["roffset"], _0x271831["offset"]);
        _0x212544 < _0x23a597 ? (_0x19a36b = _0x19a36b["subarray"](0, _0x212544), _0x271831["roffset"] += _0x212544) : _0x8aef91++;
        _0x582c9f["set"](_0x19a36b);
        break;
      } else {
        var _0x19a36b = _0x271831["buffer"]["subarray"](_0x271831["roffset"], _0x271831["offset"]);
        _0x582c9f["set"](_0x19a36b), _0x582c9f = _0x582c9f["subarray"](_0x19a36b["byteLength"]), _0x212544 -= _0x19a36b["byteLength"], _0x8aef91++;
      }
    }
    return _0x8aef91 && _0x8aef91 == _0x11dce2["buckets"]["length"] && (_0x8aef91--, _0x11dce2["buckets"][_0x8aef91]["offset"] = 0, _0x11dce2["buckets"][_0x8aef91]["roffset"] = 0), _0x11dce2["buckets"]["splice"](0, _0x8aef91), _0x8539da;
  }, write: function (_0x78deb4, _0x19a18c, _0x5dcedf, _0x38d206, _0x51ee87) {
    var _0x5c7715 = _0x78deb4["node"]["pipe"];
    _0x1e763e(_0x19a18c instanceof ArrayBuffer || ArrayBuffer["isView"](_0x19a18c));
    var _0x30a7f3 = _0x19a18c["subarray"](_0x5dcedf, _0x5dcedf + _0x38d206), _0x376c18 = _0x30a7f3["byteLength"];
    if (_0x376c18 <= 0) return 0;
    var _0x132afe = null;
    _0x5c7715["buckets"]["length"] == 0 ? (_0x132afe = {buffer: new Uint8Array(_0x2dfe77["BUCKET_BUFFER_SIZE"]), offset: 0, roffset: 0}, _0x5c7715["buckets"]["push"](_0x132afe)) : _0x132afe = _0x5c7715["buckets"][_0x5c7715["buckets"]["length"] - 1];
    _0x1e763e(_0x132afe["offset"] <= _0x2dfe77["BUCKET_BUFFER_SIZE"]);
    var _0x2067ac = _0x2dfe77["BUCKET_BUFFER_SIZE"] - _0x132afe["offset"];
    if (_0x2067ac >= _0x376c18) return _0x132afe["buffer"]["set"](_0x30a7f3, _0x132afe["offset"]), _0x132afe["offset"] += _0x376c18, _0x376c18; else _0x2067ac > 0 && (_0x132afe["buffer"]["set"](_0x30a7f3["subarray"](0, _0x2067ac), _0x132afe["offset"]), _0x132afe["offset"] += _0x2067ac, _0x30a7f3 = _0x30a7f3["subarray"](_0x2067ac, _0x30a7f3["byteLength"]));
    var _0x1a3fde = _0x30a7f3["byteLength"] / _0x2dfe77["BUCKET_BUFFER_SIZE"] | 0, _0x3634a9 = _0x30a7f3["byteLength"] % _0x2dfe77["BUCKET_BUFFER_SIZE"];
    for (var _0x24e96e = 0; _0x24e96e < _0x1a3fde; _0x24e96e++) {
      var _0x4f5204 = {buffer: new Uint8Array(_0x2dfe77["BUCKET_BUFFER_SIZE"]), offset: _0x2dfe77["BUCKET_BUFFER_SIZE"], roffset: 0};
      _0x5c7715["buckets"]["push"](_0x4f5204), _0x4f5204["buffer"]["set"](_0x30a7f3["subarray"](0, _0x2dfe77["BUCKET_BUFFER_SIZE"])), _0x30a7f3 = _0x30a7f3["subarray"](_0x2dfe77["BUCKET_BUFFER_SIZE"], _0x30a7f3["byteLength"]);
    }
    if (_0x3634a9 > 0) {
      var _0x4f5204 = {buffer: new Uint8Array(_0x2dfe77["BUCKET_BUFFER_SIZE"]), offset: _0x30a7f3["byteLength"], roffset: 0};
      _0x5c7715["buckets"]["push"](_0x4f5204), _0x4f5204["buffer"]["set"](_0x30a7f3);
    }
    return _0x376c18;
  }, close: function (_0x404a05) {
    var _0x54e6ce = _0x404a05["node"]["pipe"];
    _0x54e6ce["buckets"] = null;
  }}, nextname: function () {
    return !_0x2dfe77["nextname"]["current"] && (_0x2dfe77["nextname"]["current"] = 0), "pipe[" + _0x2dfe77["nextname"]["current"]++ + "]";
  }};
  function _0x346063(_0x5a93d4) {
    try {
      if (_0x5a93d4 == 0) throw new _0x37953b["ErrnoError"](21);
      var _0x406183 = _0x2dfe77["createPipe"]();
      return _0x5f4233[_0x5a93d4 >> 2] = _0x406183["readable_fd"], _0x5f4233[_0x5a93d4 + 4 >> 2] = _0x406183["writable_fd"], 0;
    } catch (_0x51d983) {
      if (typeof _0x37953b === "undefined" || !(_0x51d983 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x51d983);
      return -_0x51d983["errno"];
    }
  }
  function _0x5cdd87(_0x4590fe, _0x270e4e, _0x26f8fb) {
    try {
      var _0x7735a1 = 0;
      for (var _0x5320de = 0; _0x5320de < _0x270e4e; _0x5320de++) {
        var _0x5ecfac = _0x4590fe + 8 * _0x5320de, _0x41e0be = _0x5f4233[_0x5ecfac >> 2], _0x1ad6e6 = _0x17c3b3[_0x5ecfac + 4 >> 1], _0x5d5bc4 = 32, _0x3cd460 = _0x37953b["getStream"](_0x41e0be);
        _0x3cd460 && (_0x5d5bc4 = _0x315b4e["DEFAULT_POLLMASK"], _0x3cd460["stream_ops"]["poll"] && (_0x5d5bc4 = _0x3cd460["stream_ops"]["poll"](_0x3cd460)));
        _0x5d5bc4 &= _0x1ad6e6 | 8 | 16;
        if (_0x5d5bc4) _0x7735a1++;
        _0x17c3b3[_0x5ecfac + 6 >> 1] = _0x5d5bc4;
      }
      return _0x7735a1;
    } catch (_0x136b6a) {
      if (typeof _0x37953b === "undefined" || !(_0x136b6a instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x136b6a);
      return -_0x136b6a["errno"];
    }
  }
  function _0x52dfa9(_0x41c959, _0x53e6ad, _0x14aa92) {
    try {
      return _0x41c959 = _0x315b4e["getStr"](_0x41c959), _0x315b4e["doReadlink"](_0x41c959, _0x53e6ad, _0x14aa92);
    } catch (_0x46aca3) {
      if (typeof _0x37953b === "undefined" || !(_0x46aca3 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x46aca3);
      return -_0x46aca3["errno"];
    }
  }
  function _0x5eaef1(_0x561843, _0x5dd937, _0x5f3da8, _0xe0e02e, _0x5923cc, _0x497452) {
    try {
      var _0x448534 = _0x17d349(_0x561843), _0x1bb12e = _0x448534["sock_ops"]["recvmsg"](_0x448534, _0x5f3da8);
      if (!_0x1bb12e) return 0;
      if (_0x5923cc) var _0x38173b = _0x5b019b(_0x5923cc, _0x448534["family"], _0x5a8f52["lookup_name"](_0x1bb12e["addr"]), _0x1bb12e["port"], _0x497452);
      return _0x1c2f04["set"](_0x1bb12e["buffer"], _0x5dd937), _0x1bb12e["buffer"]["byteLength"];
    } catch (_0x4c5bf9) {
      if (typeof _0x37953b === "undefined" || !(_0x4c5bf9 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x4c5bf9);
      return -_0x4c5bf9["errno"];
    }
  }
  function _0x5a41e7(_0x3d9203, _0x4e6d59, _0x1d094d) {
    try {
      var _0x4330fb = _0x17d349(_0x3d9203), _0x25555a = _0x5f4233[_0x4e6d59 + 8 >> 2], _0xc485e3 = _0x5f4233[_0x4e6d59 + 12 >> 2], _0x4e8cc4 = 0;
      for (var _0x36bdbf = 0; _0x36bdbf < _0xc485e3; _0x36bdbf++) {
        _0x4e8cc4 += _0x5f4233[_0x25555a + (8 * _0x36bdbf + 4) >> 2];
      }
      var _0x10bce0 = _0x4330fb["sock_ops"]["recvmsg"](_0x4330fb, _0x4e8cc4);
      if (!_0x10bce0) return 0;
      var _0x5e1634 = _0x5f4233[_0x4e6d59 >> 2];
      if (_0x5e1634) var _0x4265ff = _0x5b019b(_0x5e1634, _0x4330fb["family"], _0x5a8f52["lookup_name"](_0x10bce0["addr"]), _0x10bce0["port"]);
      var _0x39cef7 = 0, _0x1f2bf8 = _0x10bce0["buffer"]["byteLength"];
      for (var _0x36bdbf = 0; _0x1f2bf8 > 0 && _0x36bdbf < _0xc485e3; _0x36bdbf++) {
        var _0x57f6d0 = _0x5f4233[_0x25555a + (8 * _0x36bdbf + 0) >> 2], _0x4681cb = _0x5f4233[_0x25555a + (8 * _0x36bdbf + 4) >> 2];
        if (!_0x4681cb) continue;
        var _0x4becac = Math["min"](_0x4681cb, _0x1f2bf8), _0x2da9ba = _0x10bce0["buffer"]["subarray"](_0x39cef7, _0x39cef7 + _0x4becac);
        _0x1c2f04["set"](_0x2da9ba, _0x57f6d0 + _0x39cef7), _0x39cef7 += _0x4becac, _0x1f2bf8 -= _0x4becac;
      }
      return _0x39cef7;
    } catch (_0x2bae15) {
      if (typeof _0x37953b === "undefined" || !(_0x2bae15 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x2bae15);
      return -_0x2bae15["errno"];
    }
  }
  function _0x5b3668(_0x24f75a, _0x4dfde7) {
    try {
      return _0x24f75a = _0x315b4e["getStr"](_0x24f75a), _0x4dfde7 = _0x315b4e["getStr"](_0x4dfde7), _0x37953b["rename"](_0x24f75a, _0x4dfde7), 0;
    } catch (_0x3e2793) {
      if (typeof _0x37953b === "undefined" || !(_0x3e2793 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x3e2793);
      return -_0x3e2793["errno"];
    }
  }
  function _0xd24d09(_0x22eb8d) {
    try {
      return _0x22eb8d = _0x315b4e["getStr"](_0x22eb8d), _0x37953b["rmdir"](_0x22eb8d), 0;
    } catch (_0x121a45) {
      if (typeof _0x37953b === "undefined" || !(_0x121a45 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x121a45);
      return -_0x121a45["errno"];
    }
  }
  function _0x73f34f(_0x22fcbf, _0x48b528, _0x31c0aa) {
    try {
      var _0x236a51 = _0x17d349(_0x22fcbf), _0xae7cf9 = _0x5f4233[_0x48b528 + 8 >> 2], _0x23c62c = _0x5f4233[_0x48b528 + 12 >> 2], _0xb1db6f, _0x383a0b, _0x96db0d = _0x5f4233[_0x48b528 >> 2], _0x4d8ee6 = _0x5f4233[_0x48b528 + 4 >> 2];
      if (_0x96db0d) {
        var _0x445b37 = _0x46ca37(_0x96db0d, _0x4d8ee6);
        if (_0x445b37["errno"]) return -_0x445b37["errno"];
        _0x383a0b = _0x445b37["port"], _0xb1db6f = _0x5a8f52["lookup_addr"](_0x445b37["addr"]) || _0x445b37["addr"];
      }
      var _0xd5205e = 0;
      for (var _0x878ffc = 0; _0x878ffc < _0x23c62c; _0x878ffc++) {
        _0xd5205e += _0x5f4233[_0xae7cf9 + (8 * _0x878ffc + 4) >> 2];
      }
      var _0x3b3323 = new Uint8Array(_0xd5205e), _0x20ea75 = 0;
      for (var _0x878ffc = 0; _0x878ffc < _0x23c62c; _0x878ffc++) {
        var _0x47a655 = _0x5f4233[_0xae7cf9 + (8 * _0x878ffc + 0) >> 2], _0x15e4e7 = _0x5f4233[_0xae7cf9 + (8 * _0x878ffc + 4) >> 2];
        for (var _0xdad9b9 = 0; _0xdad9b9 < _0x15e4e7; _0xdad9b9++) {
          _0x3b3323[_0x20ea75++] = _0x2c8e41[_0x47a655 + _0xdad9b9 >> 0];
        }
      }
      return _0x236a51["sock_ops"]["sendmsg"](_0x236a51, _0x3b3323, 0, _0xd5205e, _0xb1db6f, _0x383a0b);
    } catch (_0x3edece) {
      if (typeof _0x37953b === "undefined" || !(_0x3edece instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x3edece);
      return -_0x3edece["errno"];
    }
  }
  function _0x1369e0(_0x4bc072, _0x5b91c2, _0x586bec, _0x42a769, _0x1e0b83, _0xf6c715) {
    try {
      var _0x3dc84f = _0x17d349(_0x4bc072), _0x23a34a = _0x3275ef(_0x1e0b83, _0xf6c715, !![]);
      return !_0x23a34a ? _0x37953b["write"](_0x3dc84f["stream"], _0x2c8e41, _0x5b91c2, _0x586bec) : _0x3dc84f["sock_ops"]["sendmsg"](_0x3dc84f, _0x2c8e41, _0x5b91c2, _0x586bec, _0x23a34a["addr"], _0x23a34a["port"]);
    } catch (_0xe1e286) {
      if (typeof _0x37953b === "undefined" || !(_0xe1e286 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0xe1e286);
      return -_0xe1e286["errno"];
    }
  }
  function _0x3853af(_0x28a59b) {
    try {
      return -50;
    } catch (_0x19245e) {
      if (typeof _0x37953b === "undefined" || !(_0x19245e instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x19245e);
      return -_0x19245e["errno"];
    }
  }
  function _0x2be38f(_0x332f2c, _0x280179) {
    try {
      return _0x17d349(_0x332f2c), -52;
    } catch (_0x351db3) {
      if (typeof _0x37953b === "undefined" || !(_0x351db3 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x351db3);
      return -_0x351db3["errno"];
    }
  }
  function _0x505793(_0x3c5037, _0x9b01eb, _0x4c1732) {
    try {
      var _0x462509 = _0x5854a5["createSocket"](_0x3c5037, _0x9b01eb, _0x4c1732);
      return _0x462509["stream"]["fd"];
    } catch (_0xf0255a) {
      if (typeof _0x37953b === "undefined" || !(_0xf0255a instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0xf0255a);
      return -_0xf0255a["errno"];
    }
  }
  function _0x509c46(_0x486173, _0x29d0aa) {
    try {
      return _0x486173 = _0x315b4e["getStr"](_0x486173), _0x315b4e["doStat"](_0x37953b["stat"], _0x486173, _0x29d0aa);
    } catch (_0x3b0eb2) {
      if (typeof _0x37953b === "undefined" || !(_0x3b0eb2 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x3b0eb2);
      return -_0x3b0eb2["errno"];
    }
  }
  function _0x977bdf(_0x1d4a62, _0x3a291a, _0x239ac3) {
    try {
      return _0x1d4a62 = _0x315b4e["getStr"](_0x1d4a62), _0x5f4233[_0x239ac3 + 4 >> 2] = 4096, _0x5f4233[_0x239ac3 + 40 >> 2] = 4096, _0x5f4233[_0x239ac3 + 8 >> 2] = 1e6, _0x5f4233[_0x239ac3 + 12 >> 2] = 5e5, _0x5f4233[_0x239ac3 + 16 >> 2] = 5e5, _0x5f4233[_0x239ac3 + 20 >> 2] = _0x37953b["nextInode"], _0x5f4233[_0x239ac3 + 24 >> 2] = 1e6, _0x5f4233[_0x239ac3 + 28 >> 2] = 42, _0x5f4233[_0x239ac3 + 44 >> 2] = 2, _0x5f4233[_0x239ac3 + 36 >> 2] = 255, 0;
    } catch (_0x2a500e) {
      if (typeof _0x37953b === "undefined" || !(_0x2a500e instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x2a500e);
      return -_0x2a500e["errno"];
    }
  }
  function _0xe05d60(_0x4ff32c, _0x3865f0, _0x2bc257, _0x4ec0b9) {
    try {
      _0x4ff32c = _0x315b4e["getStr"](_0x4ff32c);
      var _0x647412 = _0x315b4e["get64"](_0x2bc257, _0x4ec0b9);
      return _0x37953b["truncate"](_0x4ff32c, _0x647412), 0;
    } catch (_0x26d670) {
      if (typeof _0x37953b === "undefined" || !(_0x26d670 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x26d670);
      return -_0x26d670["errno"];
    }
  }
  function _0x592799(_0x24e8e8) {
    try {
      if (!_0x24e8e8) return -21;
      var _0x48edff = {__size__: 390, domainname: 325, machine: 260, nodename: 65, release: 130, sysname: 0, version: 195}, _0x1c1a67 = function (_0x2474ed, _0x51b4fd) {
        var _0x29acb7 = _0x48edff[_0x2474ed];
        _0x2a9374(_0x51b4fd, _0x24e8e8 + _0x29acb7);
      };
      return _0x1c1a67("sysname", "Emscripten"), _0x1c1a67("nodename", "emscripten"), _0x1c1a67("release", "1.0"), _0x1c1a67("version", "#1"), _0x1c1a67("machine", "wasm32"), 0;
    } catch (_0x66c082) {
      if (typeof _0x37953b === "undefined" || !(_0x66c082 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x66c082);
      return -_0x66c082["errno"];
    }
  }
  function _0x1a0056(_0xc5849e) {
    try {
      return _0xc5849e = _0x315b4e["getStr"](_0xc5849e), _0x37953b["unlink"](_0xc5849e), 0;
    } catch (_0x46baf7) {
      if (typeof _0x37953b === "undefined" || !(_0x46baf7 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x46baf7);
      return -_0x46baf7["errno"];
    }
  }
  function _0x52939f() {
    _0x4c406f();
  }
  function _0x54b595() {
    if (_0x54b595["start"] === undefined) _0x54b595["start"] = Date["now"]();
    return (Date["now"]() - _0x54b595["start"]) * (1e6 / 1e3) | 0;
  }
  function _0x3a7f65() {
    if (_0x2d4503) return 1; else {
      if (typeof dateNow !== "undefined") return 1e3; else return 1e3;
    }
  }
  var _0x282ce3 = !![];
  function _0x1697b6(_0x127620, _0x59f2ef) {
    var _0x45048c;
    if (_0x127620 === 0) _0x45048c = 1e3 * 1e3; else {
      if (_0x127620 === 1 && _0x282ce3) _0x45048c = _0x3a7f65(); else return _0xca8898(28), -1;
    }
    return _0x5f4233[_0x59f2ef >> 2] = _0x45048c / 1e9 | 0, _0x5f4233[_0x59f2ef + 4 >> 2] = _0x45048c, 0;
  }
  var _0x1c532e;
  if (_0x2d4503) _0x1c532e = function () {
    var _0xe4d9da = process["hrtime"]();
    return _0xe4d9da[0] * 1e3 + _0xe4d9da[1] / 1e6;
  }; else {
    if (typeof dateNow !== "undefined") _0x1c532e = dateNow; else _0x1c532e = function () {
      return performance["now"]();
    };
  }
  function _0x32b83c(_0x254648, _0x1ad81c) {
    var _0x186412;
    if (_0x254648 === 0) _0x186412 = Date["now"](); else {
      if ((_0x254648 === 1 || _0x254648 === 4) && _0x282ce3) _0x186412 = _0x1c532e(); else return _0xca8898(28), -1;
    }
    return _0x5f4233[_0x1ad81c >> 2] = _0x186412 / 1e3 | 0, _0x5f4233[_0x1ad81c + 4 >> 2] = _0x186412 % 1e3 * 1e3 * 1e3 | 0, 0;
  }
  function _0x4171ec(_0x275ff1, _0x11f452) {
    return _0x275ff1 - _0x11f452;
  }
  function _0x368f8e(_0x4d4650) {}
  function _0x4e01d9() {
    return 0;
  }
  function _0x23f64f(_0x2bd736, _0x52391f) {}
  function _0x5b0260(_0x29a783, _0x2880cb) {
    return 0;
  }
  var _0x368d8f = [];
  function _0x4f217a(_0xe4b478, _0x3d7b18) {
    _0x368d8f["length"] = 0;
    var _0x537f35;
    _0x3d7b18 >>= 2;
    while (_0x537f35 = _0x1c2f04[_0xe4b478++]) {
      var _0xa7f0d9 = _0x537f35 < 105;
      if (_0xa7f0d9 && _0x3d7b18 & 1) _0x3d7b18++;
      _0x368d8f["push"](_0xa7f0d9 ? _0x14c82b[_0x3d7b18++ >> 1] : _0x5f4233[_0x3d7b18]), ++_0x3d7b18;
    }
    return _0x368d8f;
  }
  function _0x56069a(_0x140014, _0x325ba1, _0x33f208, _0x39775f) {
    var _0x5e3f6a = _0x4f217a(_0x325ba1, _0x33f208);
    return _0xaba1f7[_0x140014]["apply"](null, _0x5e3f6a);
  }
  function _0x4bbdbd(_0x5574cd, _0x1d8aca, _0xebc6d) {
    return _0x56069a(_0x5574cd, _0x1d8aca, _0xebc6d, 1);
  }
  function _0x723e13(_0x1c6160, _0x33f49d) {
    _0xee22e2["mainLoop"]["timingMode"] = _0x1c6160, _0xee22e2["mainLoop"]["timingValue"] = _0x33f49d;
    if (!_0xee22e2["mainLoop"]["func"]) return 1;
    !_0xee22e2["mainLoop"]["running"] && (_0xee22e2["mainLoop"]["running"] = !![]);
    if (_0x1c6160 == 0) _0xee22e2["mainLoop"]["scheduler"] = function _0x519f69() {
      var _0x4dd480 = Math["max"](0, _0xee22e2["mainLoop"]["tickStartTime"] + _0x33f49d - _0x1c532e()) | 0;
      setTimeout(_0xee22e2["mainLoop"]["runner"], _0x4dd480);
    }, _0xee22e2["mainLoop"]["method"] = "timeout"; else {
      if (_0x1c6160 == 1) _0xee22e2["mainLoop"]["scheduler"] = function _0x3dd627() {
        _0xee22e2["requestAnimationFrame"](_0xee22e2["mainLoop"]["runner"]);
      }, _0xee22e2["mainLoop"]["method"] = "rAF"; else {
        if (_0x1c6160 == 2) {
          if (typeof setImmediate === "undefined") {
            var _0x3ce33e = [], _0x47b8fd = "setimmediate", _0xc672ec = function (_0x1c15c4) {
              (_0x1c15c4["data"] === _0x47b8fd || _0x1c15c4["data"]["target"] === _0x47b8fd) && (_0x1c15c4["stopPropagation"](), _0x3ce33e["shift"]()());
            };
            addEventListener("message", _0xc672ec, !![]), setImmediate = function _0x101a51(_0x371e38) {
              _0x3ce33e["push"](_0x371e38);
              if (_0x3a9e74) {
                if (_0x3d01d3["setImmediates"] === undefined) _0x3d01d3["setImmediates"] = [];
                _0x3d01d3["setImmediates"]["push"](_0x371e38), postMessage({target: _0x47b8fd});
              } else postMessage(_0x47b8fd, "*");
            };
          }
          _0xee22e2["mainLoop"]["scheduler"] = function _0x3c8ba8() {
            setImmediate(_0xee22e2["mainLoop"]["runner"]);
          }, _0xee22e2["mainLoop"]["method"] = "immediate";
        }
      }
    }
    return 0;
  }
  function _0x6c3950(_0x4f782f) {
    _0x3a3d54(_0x4f782f);
  }
  function _0x573c92() {
    if (!_0x41f9cc()) try {
      _0x6c3950(_0x474a84);
    } catch (_0x35296b) {
      if (_0x35296b instanceof _0x561aff) return;
      throw _0x35296b;
    }
  }
  function _0x192ec5(_0x224635, _0x188777, _0x2712fc, _0x3fdacd, _0x5d104b) {
    _0x1e763e(!_0xee22e2["mainLoop"]["func"], "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), _0xee22e2["mainLoop"]["func"] = _0x224635, _0xee22e2["mainLoop"]["arg"] = _0x3fdacd;
    var _0x278845 = _0xee22e2["mainLoop"]["currentlyRunningMainloop"];
    function _0xf139d3() {
      if (_0x278845 < _0xee22e2["mainLoop"]["currentlyRunningMainloop"]) return _0x573c92(), ![];
      return !![];
    }
    _0xee22e2["mainLoop"]["running"] = ![], _0xee22e2["mainLoop"]["runner"] = function _0xf7825b() {
      if (_0x259747) return;
      if (_0xee22e2["mainLoop"]["queue"]["length"] > 0) {
        var _0x297115 = Date["now"](), _0x727858 = _0xee22e2["mainLoop"]["queue"]["shift"]();
        _0x727858["func"](_0x727858["arg"]);
        if (_0xee22e2["mainLoop"]["remainingBlockers"]) {
          var _0x3a5590 = _0xee22e2["mainLoop"]["remainingBlockers"], _0x5be7da = _0x3a5590 % 1 == 0 ? _0x3a5590 - 1 : Math["floor"](_0x3a5590);
          _0x727858["counted"] ? _0xee22e2["mainLoop"]["remainingBlockers"] = _0x5be7da : (_0x5be7da = _0x5be7da + 0.5, _0xee22e2["mainLoop"]["remainingBlockers"] = (8 * _0x3a5590 + _0x5be7da) / 9);
        }
        console["log"]('main loop blocker "' + _0x727858["name"] + '" took ' + (Date["now"]() - _0x297115) + " ms"), _0xee22e2["mainLoop"]["updateStatus"]();
        if (!_0xf139d3()) return;
        setTimeout(_0xee22e2["mainLoop"]["runner"], 0);
        return;
      }
      if (!_0xf139d3()) return;
      _0xee22e2["mainLoop"]["currentFrameNumber"] = _0xee22e2["mainLoop"]["currentFrameNumber"] + 1 | 0;
      if (_0xee22e2["mainLoop"]["timingMode"] == 1 && _0xee22e2["mainLoop"]["timingValue"] > 1 && _0xee22e2["mainLoop"]["currentFrameNumber"] % _0xee22e2["mainLoop"]["timingValue"] != 0) {
        _0xee22e2["mainLoop"]["scheduler"]();
        return;
      } else _0xee22e2["mainLoop"]["timingMode"] == 0 && (_0xee22e2["mainLoop"]["tickStartTime"] = _0x1c532e());
      _0x4a7ef5["newRenderingFrameStarted"](), _0xee22e2["mainLoop"]["runIter"](_0x224635);
      if (!_0xf139d3()) return;
      if (typeof SDL === "object" && SDL["audio"] && SDL["audio"]["queueNewAudioData"]) SDL["audio"]["queueNewAudioData"]();
      _0xee22e2["mainLoop"]["scheduler"]();
    };
    if (!_0x5d104b) {
      if (_0x188777 && _0x188777 > 0) _0x723e13(0, 1e3 / _0x188777); else _0x723e13(1, 1);
      _0xee22e2["mainLoop"]["scheduler"]();
    }
    if (_0x2712fc) throw "unwind";
  }
  function _0x4a5b33(_0x25d3af, _0x4b89d5) {
    if (_0x259747) return;
    if (_0x4b89d5) {
      _0x25d3af();
      return;
    }
    try {
      _0x25d3af();
    } catch (_0x4156e1) {
      if (_0x4156e1 instanceof _0x561aff) return; else {
        if (_0x4156e1 !== "unwind") {
          if (_0x4156e1 && typeof _0x4156e1 === "object" && _0x4156e1["stack"]) _0x366b43("exception thrown: " + [_0x4156e1, _0x4156e1["stack"]]);
          throw _0x4156e1;
        }
      }
    }
  }
  var _0xee22e2 = {mainLoop: {running: ![], scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function () {
    _0xee22e2["mainLoop"]["scheduler"] = null, _0xee22e2["mainLoop"]["currentlyRunningMainloop"]++;
  }, resume: function () {
    _0xee22e2["mainLoop"]["currentlyRunningMainloop"]++;
    var _0x5f550b = _0xee22e2["mainLoop"]["timingMode"], _0x3852dc = _0xee22e2["mainLoop"]["timingValue"], _0x41b921 = _0xee22e2["mainLoop"]["func"];
    _0xee22e2["mainLoop"]["func"] = null, _0x192ec5(_0x41b921, 0, ![], _0xee22e2["mainLoop"]["arg"], !![]), _0x723e13(_0x5f550b, _0x3852dc), _0xee22e2["mainLoop"]["scheduler"]();
  }, updateStatus: function () {
    if (_0x3d01d3["setStatus"]) {
      var _0x516408 = _0x3d01d3["statusMessage"] || "Please wait...", _0x5b8d3a = _0xee22e2["mainLoop"]["remainingBlockers"], _0x1eca41 = _0xee22e2["mainLoop"]["expectedBlockers"];
      _0x5b8d3a ? _0x5b8d3a < _0x1eca41 ? _0x3d01d3["setStatus"](_0x516408 + " (" + (_0x1eca41 - _0x5b8d3a) + "/" + _0x1eca41 + ")") : _0x3d01d3["setStatus"](_0x516408) : _0x3d01d3["setStatus"]("");
    }
  }, runIter: function (_0xff515) {
    if (_0x259747) return;
    if (_0x3d01d3["preMainLoop"]) {
      var _0x542824 = _0x3d01d3["preMainLoop"]();
      if (_0x542824 === ![]) return;
    }
    _0x4a5b33(_0xff515);
    if (_0x3d01d3["postMainLoop"]) _0x3d01d3["postMainLoop"]();
  }}, isFullscreen: ![], pointerLock: ![], moduleContextCreatedCallbacks: [], workers: [], init: function () {
    if (!_0x3d01d3["preloadPlugins"]) _0x3d01d3["preloadPlugins"] = [];
    if (_0xee22e2["initted"]) return;
    _0xee22e2["initted"] = !![];
    try {
      new Blob, _0xee22e2["hasBlobConstructor"] = !![];
    } catch (_0x51c6e7) {
      _0xee22e2["hasBlobConstructor"] = ![], console["log"]("warning: no blob constructor, cannot create blobs with mimetypes");
    }
    _0xee22e2["BlobBuilder"] = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !_0xee22e2["hasBlobConstructor"] ? console["log"]("warning: no BlobBuilder") : null, _0xee22e2["URLObject"] = typeof window != "undefined" ? window["URL"] ? window["URL"] : window["webkitURL"] : undefined;
    !_0x3d01d3["noImageDecoding"] && typeof _0xee22e2["URLObject"] === "undefined" && (console["log"]("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), _0x3d01d3["noImageDecoding"] = !![]);
    var _0x398985 = {};
    _0x398985["canHandle"] = function _0x4f2e43(_0x269ee5) {
      return !_0x3d01d3["noImageDecoding"] && /\.(jpg|jpeg|png|bmp)$/i["test"](_0x269ee5);
    }, _0x398985["handle"] = function _0x40f8e9(_0x10d3df, _0x503f37, _0x39fecb, _0x4b8888) {
      var _0x19b509 = null;
      if (_0xee22e2["hasBlobConstructor"]) try {
        _0x19b509 = new Blob([_0x10d3df], {type: _0xee22e2["getMimetype"](_0x503f37)}), _0x19b509["size"] !== _0x10d3df["length"] && (_0x19b509 = new Blob([new Uint8Array(_0x10d3df)["buffer"]], {type: _0xee22e2["getMimetype"](_0x503f37)}));
      } catch (_0x1ad367) {
        _0x2b847b("Blob constructor present but fails: " + _0x1ad367 + "; falling back to blob builder");
      }
      if (!_0x19b509) {
        var _0x5109cc = new _0xee22e2["BlobBuilder"];
        _0x5109cc["append"](new Uint8Array(_0x10d3df)["buffer"]), _0x19b509 = _0x5109cc["getBlob"]();
      }
      var _0x41e173 = _0xee22e2["URLObject"]["createObjectURL"](_0x19b509), _0x2a5ca9 = new Image;
      _0x2a5ca9["onload"] = function _0x1cd5cb() {
        _0x1e763e(_0x2a5ca9["complete"], "Image " + _0x503f37 + " could not be decoded");
        var _0x5d73e8 = document["createElement"]("canvas");
        _0x5d73e8["width"] = _0x2a5ca9["width"], _0x5d73e8["height"] = _0x2a5ca9["height"];
        var _0x323c86 = _0x5d73e8["getContext"]("2d");
        _0x323c86["drawImage"](_0x2a5ca9, 0, 0), _0x3d01d3["preloadedImages"][_0x503f37] = _0x5d73e8, _0xee22e2["URLObject"]["revokeObjectURL"](_0x41e173);
        if (_0x39fecb) _0x39fecb(_0x10d3df);
      }, _0x2a5ca9["onerror"] = function _0xfd720b(_0x5c82b7) {
        console["log"]("Image " + _0x41e173 + " could not be decoded");
        if (_0x4b8888) _0x4b8888();
      }, _0x2a5ca9["src"] = _0x41e173;
    }, _0x3d01d3["preloadPlugins"]["push"](_0x398985);
    var _0x2be24b = {};
    _0x2be24b["canHandle"] = function _0x531594(_0x42ee7b) {
      return !_0x3d01d3["noAudioDecoding"] && _0x42ee7b["substr"](-4) in {".ogg": 1, ".wav": 1, ".mp3": 1};
    }, _0x2be24b["handle"] = function _0x3e4526(_0x51205c, _0x1b0da0, _0x278c03, _0x232418) {
      var _0x1e5615 = ![];
      function _0x238e52(_0x222608) {
        if (_0x1e5615) return;
        _0x1e5615 = !![], _0x3d01d3["preloadedAudios"][_0x1b0da0] = _0x222608;
        if (_0x278c03) _0x278c03(_0x51205c);
      }
      function _0x5c09b3() {
        if (_0x1e5615) return;
        _0x1e5615 = !![], _0x3d01d3["preloadedAudios"][_0x1b0da0] = new Audio;
        if (_0x232418) _0x232418();
      }
      if (_0xee22e2["hasBlobConstructor"]) {
        try {
          var _0x347bb6 = new Blob([_0x51205c], {type: _0xee22e2["getMimetype"](_0x1b0da0)});
        } catch (_0x407c0e) {
          return _0x5c09b3();
        }
        var _0x57dd3e = _0xee22e2["URLObject"]["createObjectURL"](_0x347bb6), _0x2b739f = new Audio;
        _0x2b739f["addEventListener"]("canplaythrough", function () {
          _0x238e52(_0x2b739f);
        }, ![]), _0x2b739f["onerror"] = function _0x3430b3(_0x200f72) {
          if (_0x1e5615) return;
          console["log"]("warning: browser could not fully decode audio " + _0x1b0da0 + ", trying slower base64 approach");
          function _0x4e5c65(_0x514350) {
            var _0x2a8536 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _0x1cc98d = "=", _0x3d34f9 = "", _0x156cfc = 0, _0x5569d1 = 0;
            for (var _0x35fbaf = 0; _0x35fbaf < _0x514350["length"]; _0x35fbaf++) {
              _0x156cfc = _0x156cfc << 8 | _0x514350[_0x35fbaf], _0x5569d1 += 8;
              while (_0x5569d1 >= 6) {
                var _0x263cdd = _0x156cfc >> _0x5569d1 - 6 & 63;
                _0x5569d1 -= 6, _0x3d34f9 += _0x2a8536[_0x263cdd];
              }
            }
            if (_0x5569d1 == 2) _0x3d34f9 += _0x2a8536[(_0x156cfc & 3) << 4], _0x3d34f9 += _0x1cc98d + _0x1cc98d; else _0x5569d1 == 4 && (_0x3d34f9 += _0x2a8536[(_0x156cfc & 15) << 2], _0x3d34f9 += _0x1cc98d);
            return _0x3d34f9;
          }
          _0x2b739f["src"] = "data:audio/x-" + _0x1b0da0["substr"](-3) + ";base64," + _0x4e5c65(_0x51205c), _0x238e52(_0x2b739f);
        }, _0x2b739f["src"] = _0x57dd3e, _0xee22e2["safeSetTimeout"](function () {
          _0x238e52(_0x2b739f);
        }, 1e4);
      } else return _0x5c09b3();
    }, _0x3d01d3["preloadPlugins"]["push"](_0x2be24b);
    function _0x1928fe() {
      _0xee22e2["pointerLock"] = document["pointerLockElement"] === _0x3d01d3["canvas"] || document["mozPointerLockElement"] === _0x3d01d3["canvas"] || document["webkitPointerLockElement"] === _0x3d01d3["canvas"] || document["msPointerLockElement"] === _0x3d01d3["canvas"];
    }
    var _0x532e3b = _0x3d01d3["canvas"];
    _0x532e3b && (_0x532e3b["requestPointerLock"] = _0x532e3b["requestPointerLock"] || _0x532e3b["mozRequestPointerLock"] || _0x532e3b["webkitRequestPointerLock"] || _0x532e3b["msRequestPointerLock"] || function () {}, _0x532e3b["exitPointerLock"] = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function () {}, _0x532e3b["exitPointerLock"] = _0x532e3b["exitPointerLock"]["bind"](document), document["addEventListener"]("pointerlockchange", _0x1928fe, ![]), document["addEventListener"]("mozpointerlockchange", _0x1928fe, ![]), document["addEventListener"]("webkitpointerlockchange", _0x1928fe, ![]), document["addEventListener"]("mspointerlockchange", _0x1928fe, ![]), _0x3d01d3["elementPointerLock"] && _0x532e3b["addEventListener"]("click", function (_0x470b3) {
      !_0xee22e2["pointerLock"] && _0x3d01d3["canvas"]["requestPointerLock"] && (_0x3d01d3["canvas"]["requestPointerLock"](), _0x470b3["preventDefault"]());
    }, ![]));
  }, createContext: function (_0x23e578, _0x40aa74, _0x5bf558, _0x5bcd9a) {
    if (_0x40aa74 && _0x3d01d3["ctx"] && _0x23e578 == _0x3d01d3["canvas"]) return _0x3d01d3["ctx"];
    var _0x1ac07f, _0x2511a7;
    if (_0x40aa74) {
      var _0x112c2c = {antialias: ![], alpha: ![], majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1};
      if (_0x5bcd9a) for (var _0xe77e04 in _0x5bcd9a) {
        _0x112c2c[_0xe77e04] = _0x5bcd9a[_0xe77e04];
      }
      typeof _0x4a7ef5 !== "undefined" && (_0x2511a7 = _0x4a7ef5["createContext"](_0x23e578, _0x112c2c), _0x2511a7 && (_0x1ac07f = _0x4a7ef5["getContext"](_0x2511a7)["GLctx"]));
    } else _0x1ac07f = _0x23e578["getContext"]("2d");
    if (!_0x1ac07f) return null;
    if (_0x5bf558) {
      if (!_0x40aa74) _0x1e763e(typeof _0x499cc5 === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
      _0x3d01d3["ctx"] = _0x1ac07f;
      if (_0x40aa74) _0x4a7ef5["makeContextCurrent"](_0x2511a7);
      _0x3d01d3["useWebGL"] = _0x40aa74, _0xee22e2["moduleContextCreatedCallbacks"]["forEach"](function (_0x3472cc) {
        _0x3472cc();
      }), _0xee22e2["init"]();
    }
    return _0x1ac07f;
  }, destroyContext: function (_0x37d307, _0x512202, _0x5d6341) {}, fullscreenHandlersInstalled: ![], lockPointer: undefined, resizeCanvas: undefined, requestFullscreen: function (_0x525f04, _0x4e363a) {
    _0xee22e2["lockPointer"] = _0x525f04, _0xee22e2["resizeCanvas"] = _0x4e363a;
    if (typeof _0xee22e2["lockPointer"] === "undefined") _0xee22e2["lockPointer"] = !![];
    if (typeof _0xee22e2["resizeCanvas"] === "undefined") _0xee22e2["resizeCanvas"] = ![];
    var _0x10865b = _0x3d01d3["canvas"];
    function _0x66b1af() {
      _0xee22e2["isFullscreen"] = ![];
      var _0xf2a90d = _0x10865b["parentNode"];
      if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === _0xf2a90d) {
        _0x10865b["exitFullscreen"] = _0xee22e2["exitFullscreen"];
        if (_0xee22e2["lockPointer"]) _0x10865b["requestPointerLock"]();
        _0xee22e2["isFullscreen"] = !![], _0xee22e2["resizeCanvas"] ? _0xee22e2["setFullscreenCanvasSize"]() : _0xee22e2["updateCanvasDimensions"](_0x10865b);
      } else _0xf2a90d["parentNode"]["insertBefore"](_0x10865b, _0xf2a90d), _0xf2a90d["parentNode"]["removeChild"](_0xf2a90d), _0xee22e2["resizeCanvas"] ? _0xee22e2["setWindowedCanvasSize"]() : _0xee22e2["updateCanvasDimensions"](_0x10865b);
      if (_0x3d01d3["onFullScreen"]) _0x3d01d3["onFullScreen"](_0xee22e2["isFullscreen"]);
      if (_0x3d01d3["onFullscreen"]) _0x3d01d3["onFullscreen"](_0xee22e2["isFullscreen"]);
    }
    !_0xee22e2["fullscreenHandlersInstalled"] && (_0xee22e2["fullscreenHandlersInstalled"] = !![], document["addEventListener"]("fullscreenchange", _0x66b1af, ![]), document["addEventListener"]("mozfullscreenchange", _0x66b1af, ![]), document["addEventListener"]("webkitfullscreenchange", _0x66b1af, ![]), document["addEventListener"]("MSFullscreenChange", _0x66b1af, ![]));
    var _0x46ea5a = document["createElement"]("div");
    _0x10865b["parentNode"]["insertBefore"](_0x46ea5a, _0x10865b), _0x46ea5a["appendChild"](_0x10865b), _0x46ea5a["requestFullscreen"] = _0x46ea5a["requestFullscreen"] || _0x46ea5a["mozRequestFullScreen"] || _0x46ea5a["msRequestFullscreen"] || (_0x46ea5a["webkitRequestFullscreen"] ? function () {
      _0x46ea5a["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
    } : null) || (_0x46ea5a["webkitRequestFullScreen"] ? function () {
      _0x46ea5a["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
    } : null), _0x46ea5a["requestFullscreen"]();
  }, exitFullscreen: function () {
    if (!_0xee22e2["isFullscreen"]) return ![];
    var _0x15b957 = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function () {};
    return _0x15b957["apply"](document, []), !![];
  }, nextRAF: 0, fakeRequestAnimationFrame: function (_0x3fbd15) {
    var _0x57afec = Date["now"]();
    if (_0xee22e2["nextRAF"] === 0) _0xee22e2["nextRAF"] = _0x57afec + 1e3 / 60; else while (_0x57afec + 2 >= _0xee22e2["nextRAF"]) {
      _0xee22e2["nextRAF"] += 1e3 / 60;
    }
    var _0x25620f = Math["max"](_0xee22e2["nextRAF"] - _0x57afec, 0);
    setTimeout(_0x3fbd15, _0x25620f);
  }, requestAnimationFrame: function (_0xd1a4b8) {
    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(_0xd1a4b8);
      return;
    }
    var _0x4d6138 = _0xee22e2["fakeRequestAnimationFrame"];
    _0x4d6138(_0xd1a4b8);
  }, safeRequestAnimationFrame: function (_0x18bc4e) {
    return _0xee22e2["requestAnimationFrame"](function () {
      _0x4a5b33(_0x18bc4e);
    });
  }, safeSetTimeout: function (_0xbed9b, _0x549591) {
    return setTimeout(function () {
      _0x4a5b33(_0xbed9b);
    }, _0x549591);
  }, getMimetype: function (_0x2563f1) {
    return {jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg"}[_0x2563f1["substr"](_0x2563f1["lastIndexOf"](".") + 1)];
  }, getUserMedia: function (_0xcb6597) {
    !window["getUserMedia"] && (window["getUserMedia"] = navigator["getUserMedia"] || navigator["mozGetUserMedia"]), window["getUserMedia"](_0xcb6597);
  }, getMovementX: function (_0x559d5f) {
    return _0x559d5f["movementX"] || _0x559d5f["mozMovementX"] || _0x559d5f["webkitMovementX"] || 0;
  }, getMovementY: function (_0x426b53) {
    return _0x426b53["movementY"] || _0x426b53["mozMovementY"] || _0x426b53["webkitMovementY"] || 0;
  }, getMouseWheelDelta: function (_0x237908) {
    var _0x129715 = 0;
    switch (_0x237908["type"]) {
      case "DOMMouseScroll":
        _0x129715 = _0x237908["detail"] / 3;
        break;
      case "mousewheel":
        _0x129715 = _0x237908["wheelDelta"] / 120;
        break;
      case "wheel":
        _0x129715 = _0x237908["deltaY"];
        switch (_0x237908["deltaMode"]) {
          case 0:
            _0x129715 /= 100;
            break;
          case 1:
            _0x129715 /= 3;
            break;
          case 2:
            _0x129715 *= 80;
            break;
          default:
            throw "unrecognized mouse wheel delta mode: " + _0x237908["deltaMode"];
        }
        break;
      default:
        throw "unrecognized mouse wheel event: " + _0x237908["type"];
    }
    return _0x129715;
  }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function (_0x374519) {
    if (_0xee22e2["pointerLock"]) _0x374519["type"] != "mousemove" && "mozMovementX" in _0x374519 ? _0xee22e2["mouseMovementX"] = _0xee22e2["mouseMovementY"] = 0 : (_0xee22e2["mouseMovementX"] = _0xee22e2["getMovementX"](_0x374519), _0xee22e2["mouseMovementY"] = _0xee22e2["getMovementY"](_0x374519)), typeof SDL != "undefined" ? (_0xee22e2["mouseX"] = SDL["mouseX"] + _0xee22e2["mouseMovementX"], _0xee22e2["mouseY"] = SDL["mouseY"] + _0xee22e2["mouseMovementY"]) : (_0xee22e2["mouseX"] += _0xee22e2["mouseMovementX"], _0xee22e2["mouseY"] += _0xee22e2["mouseMovementY"]); else {
      var _0x55fa92 = _0x3d01d3["canvas"]["getBoundingClientRect"](), _0x502823 = _0x3d01d3["canvas"]["width"], _0x48a554 = _0x3d01d3["canvas"]["height"], _0x151ac0 = typeof window["scrollX"] !== "undefined" ? window["scrollX"] : window["pageXOffset"], _0x2cc99b = typeof window["scrollY"] !== "undefined" ? window["scrollY"] : window["pageYOffset"];
      if (_0x374519["type"] === "touchstart" || _0x374519["type"] === "touchend" || _0x374519["type"] === "touchmove") {
        var _0x538b6d = _0x374519["touch"];
        if (_0x538b6d === undefined) return;
        var _0xa49a72 = _0x538b6d["pageX"] - (_0x151ac0 + _0x55fa92["left"]), _0x785ff8 = _0x538b6d["pageY"] - (_0x2cc99b + _0x55fa92["top"]);
        _0xa49a72 = _0xa49a72 * (_0x502823 / _0x55fa92["width"]), _0x785ff8 = _0x785ff8 * (_0x48a554 / _0x55fa92["height"]);
        var _0x45d2a0 = {x: _0xa49a72, y: _0x785ff8};
        if (_0x374519["type"] === "touchstart") _0xee22e2["lastTouches"][_0x538b6d["identifier"]] = _0x45d2a0, _0xee22e2["touches"][_0x538b6d["identifier"]] = _0x45d2a0; else {
          if (_0x374519["type"] === "touchend" || _0x374519["type"] === "touchmove") {
            var _0x10175a = _0xee22e2["touches"][_0x538b6d["identifier"]];
            if (!_0x10175a) _0x10175a = _0x45d2a0;
            _0xee22e2["lastTouches"][_0x538b6d["identifier"]] = _0x10175a, _0xee22e2["touches"][_0x538b6d["identifier"]] = _0x45d2a0;
          }
        }
        return;
      }
      var _0x495ea9 = _0x374519["pageX"] - (_0x151ac0 + _0x55fa92["left"]), _0xaec76b = _0x374519["pageY"] - (_0x2cc99b + _0x55fa92["top"]);
      _0x495ea9 = _0x495ea9 * (_0x502823 / _0x55fa92["width"]), _0xaec76b = _0xaec76b * (_0x48a554 / _0x55fa92["height"]), _0xee22e2["mouseMovementX"] = _0x495ea9 - _0xee22e2["mouseX"], _0xee22e2["mouseMovementY"] = _0xaec76b - _0xee22e2["mouseY"], _0xee22e2["mouseX"] = _0x495ea9, _0xee22e2["mouseY"] = _0xaec76b;
    }
  }, asyncLoad: function (_0x4e1a1b, _0x6fa042, _0x358b5a, _0x85f2cd) {
    var _0x24ce77 = !_0x85f2cd ? _0x3bde32("al " + _0x4e1a1b) : "";
    _0x265298(_0x4e1a1b, function (_0x29d958) {
      _0x1e763e(_0x29d958, 'Loading data file "' + _0x4e1a1b + '" failed (no arrayBuffer).'), _0x6fa042(new Uint8Array(_0x29d958));
      if (_0x24ce77) _0x47f78c(_0x24ce77);
    }, function (_0x264d88) {
      if (_0x358b5a) _0x358b5a(); else throw 'Loading data file "' + _0x4e1a1b + '" failed.';
    });
    if (_0x24ce77) _0x3e50c2(_0x24ce77);
  }, resizeListeners: [], updateResizeListeners: function () {
    var _0x28cbf1 = _0x3d01d3["canvas"];
    _0xee22e2["resizeListeners"]["forEach"](function (_0x464f03) {
      _0x464f03(_0x28cbf1["width"], _0x28cbf1["height"]);
    });
  }, setCanvasSize: function (_0x56c2af, _0x3ebb48, _0x543abc) {
    var _0x238f17 = _0x3d01d3["canvas"];
    _0xee22e2["updateCanvasDimensions"](_0x238f17, _0x56c2af, _0x3ebb48);
    if (!_0x543abc) _0xee22e2["updateResizeListeners"]();
  }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function () {
    if (typeof SDL != "undefined") {
      var _0x1e9735 = _0x9bfde5[SDL["screen"] >> 2];
      _0x1e9735 = _0x1e9735 | 8388608, _0x5f4233[SDL["screen"] >> 2] = _0x1e9735;
    }
    _0xee22e2["updateCanvasDimensions"](_0x3d01d3["canvas"]), _0xee22e2["updateResizeListeners"]();
  }, setWindowedCanvasSize: function () {
    if (typeof SDL != "undefined") {
      var _0x2f5fee = _0x9bfde5[SDL["screen"] >> 2];
      _0x2f5fee = _0x2f5fee & ~8388608, _0x5f4233[SDL["screen"] >> 2] = _0x2f5fee;
    }
    _0xee22e2["updateCanvasDimensions"](_0x3d01d3["canvas"]), _0xee22e2["updateResizeListeners"]();
  }, updateCanvasDimensions: function (_0x573c7a, _0x8ba9ec, _0x5750a2) {
    _0x8ba9ec && _0x5750a2 ? (_0x573c7a["widthNative"] = _0x8ba9ec, _0x573c7a["heightNative"] = _0x5750a2) : (_0x8ba9ec = _0x573c7a["widthNative"], _0x5750a2 = _0x573c7a["heightNative"]);
    var _0x47e587 = _0x8ba9ec, _0x4816bb = _0x5750a2;
    _0x3d01d3["forcedAspectRatio"] && _0x3d01d3["forcedAspectRatio"] > 0 && (_0x47e587 / _0x4816bb < _0x3d01d3["forcedAspectRatio"] ? _0x47e587 = Math["round"](_0x4816bb * _0x3d01d3["forcedAspectRatio"]) : _0x4816bb = Math["round"](_0x47e587 / _0x3d01d3["forcedAspectRatio"]));
    if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === _0x573c7a["parentNode"] && typeof screen != "undefined") {
      var _0xef83bf = Math["min"](screen["width"] / _0x47e587, screen["height"] / _0x4816bb);
      _0x47e587 = Math["round"](_0x47e587 * _0xef83bf), _0x4816bb = Math["round"](_0x4816bb * _0xef83bf);
    }
    if (_0xee22e2["resizeCanvas"]) {
      if (_0x573c7a["width"] != _0x47e587) _0x573c7a["width"] = _0x47e587;
      if (_0x573c7a["height"] != _0x4816bb) _0x573c7a["height"] = _0x4816bb;
      typeof _0x573c7a["style"] != "undefined" && (_0x573c7a["style"]["removeProperty"]("width"), _0x573c7a["style"]["removeProperty"]("height"));
    } else {
      if (_0x573c7a["width"] != _0x8ba9ec) _0x573c7a["width"] = _0x8ba9ec;
      if (_0x573c7a["height"] != _0x5750a2) _0x573c7a["height"] = _0x5750a2;
      typeof _0x573c7a["style"] != "undefined" && (_0x47e587 != _0x8ba9ec || _0x4816bb != _0x5750a2 ? (_0x573c7a["style"]["setProperty"]("width", _0x47e587 + "px", "important"), _0x573c7a["style"]["setProperty"]("height", _0x4816bb + "px", "important")) : (_0x573c7a["style"]["removeProperty"]("width"), _0x573c7a["style"]["removeProperty"]("height")));
    }
  }, wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: function () {
    var _0x41be3c = _0xee22e2["nextWgetRequestHandle"];
    return _0xee22e2["nextWgetRequestHandle"]++, _0x41be3c;
  }};
  function _0x30077e() {
    _0xee22e2["mainLoop"]["pause"](), _0xee22e2["mainLoop"]["func"] = null;
  }
  function _0x77fdc9(_0x321f08) {
    clearInterval(_0x321f08);
  }
  var _0x38c1b7 = {inEventHandler: 0, removeAllEventListeners: function () {
    for (var _0x337ae2 = _0x38c1b7["eventHandlers"]["length"] - 1; _0x337ae2 >= 0; --_0x337ae2) {
      _0x38c1b7["_removeHandler"](_0x337ae2);
    }
    _0x38c1b7["eventHandlers"] = [], _0x38c1b7["deferredCalls"] = [];
  }, registerRemoveEventListeners: function () {
    !_0x38c1b7["removeEventListenersRegistered"] && (_0x52be0f["push"](_0x38c1b7["removeAllEventListeners"]), _0x38c1b7["removeEventListenersRegistered"] = !![]);
  }, deferredCalls: [], deferCall: function (_0xae6998, _0x304ead, _0x44510f) {
    function _0x59f6d0(_0xd1612b, _0x98d29e) {
      if (_0xd1612b["length"] != _0x98d29e["length"]) return ![];
      for (var _0x4a8346 in _0xd1612b) {
        if (_0xd1612b[_0x4a8346] != _0x98d29e[_0x4a8346]) return ![];
      }
      return !![];
    }
    for (var _0x2212c1 in _0x38c1b7["deferredCalls"]) {
      var _0x178217 = _0x38c1b7["deferredCalls"][_0x2212c1];
      if (_0x178217["targetFunction"] == _0xae6998 && _0x59f6d0(_0x178217["argsList"], _0x44510f)) return;
    }
    _0x38c1b7["deferredCalls"]["push"]({targetFunction: _0xae6998, precedence: _0x304ead, argsList: _0x44510f}), _0x38c1b7["deferredCalls"]["sort"](function (_0x57b55d, _0x4d9728) {
      return _0x57b55d["precedence"] < _0x4d9728["precedence"];
    });
  }, removeDeferredCalls: function (_0x461691) {
    for (var _0xd8fa5b = 0; _0xd8fa5b < _0x38c1b7["deferredCalls"]["length"]; ++_0xd8fa5b) {
      _0x38c1b7["deferredCalls"][_0xd8fa5b]["targetFunction"] == _0x461691 && (_0x38c1b7["deferredCalls"]["splice"](_0xd8fa5b, 1), --_0xd8fa5b);
    }
  }, canPerformEventHandlerRequests: function () {
    return _0x38c1b7["inEventHandler"] && _0x38c1b7["currentEventHandler"]["allowsDeferredCalls"];
  }, runDeferredCalls: function () {
    if (!_0x38c1b7["canPerformEventHandlerRequests"]()) return;
    for (var _0x100fa2 = 0; _0x100fa2 < _0x38c1b7["deferredCalls"]["length"]; ++_0x100fa2) {
      var _0x1a7e39 = _0x38c1b7["deferredCalls"][_0x100fa2];
      _0x38c1b7["deferredCalls"]["splice"](_0x100fa2, 1), --_0x100fa2, _0x1a7e39["targetFunction"]["apply"](null, _0x1a7e39["argsList"]);
    }
  }, eventHandlers: [], removeAllHandlersOnTarget: function (_0x183f8e, _0xc77817) {
    for (var _0x440691 = 0; _0x440691 < _0x38c1b7["eventHandlers"]["length"]; ++_0x440691) {
      _0x38c1b7["eventHandlers"][_0x440691]["target"] == _0x183f8e && (!_0xc77817 || _0xc77817 == _0x38c1b7["eventHandlers"][_0x440691]["eventTypeString"]) && _0x38c1b7["_removeHandler"](_0x440691--);
    }
  }, _removeHandler: function (_0x2ae602) {
    var _0x5d408d = _0x38c1b7["eventHandlers"][_0x2ae602];
    _0x5d408d["target"]["removeEventListener"](_0x5d408d["eventTypeString"], _0x5d408d["eventListenerFunc"], _0x5d408d["useCapture"]), _0x38c1b7["eventHandlers"]["splice"](_0x2ae602, 1);
  }, registerOrRemoveHandler: function (_0x4bcf36) {
    var _0x2d2e08 = function _0x487431(_0x4e73c5) {
      ++_0x38c1b7["inEventHandler"], _0x38c1b7["currentEventHandler"] = _0x4bcf36, _0x38c1b7["runDeferredCalls"](), _0x4bcf36["handlerFunc"](_0x4e73c5), _0x38c1b7["runDeferredCalls"](), --_0x38c1b7["inEventHandler"];
    };
    if (_0x4bcf36["callbackfunc"]) _0x4bcf36["eventListenerFunc"] = _0x2d2e08, _0x4bcf36["target"]["addEventListener"](_0x4bcf36["eventTypeString"], _0x2d2e08, _0x4bcf36["useCapture"]), _0x38c1b7["eventHandlers"]["push"](_0x4bcf36), _0x38c1b7["registerRemoveEventListeners"](); else for (var _0x52e761 = 0; _0x52e761 < _0x38c1b7["eventHandlers"]["length"]; ++_0x52e761) {
      _0x38c1b7["eventHandlers"][_0x52e761]["target"] == _0x4bcf36["target"] && _0x38c1b7["eventHandlers"][_0x52e761]["eventTypeString"] == _0x4bcf36["eventTypeString"] && _0x38c1b7["_removeHandler"](_0x52e761--);
    }
  }, getNodeNameForTarget: function (_0x1264d6) {
    if (!_0x1264d6) return "";
    if (_0x1264d6 == window) return "#window";
    if (_0x1264d6 == screen) return "#screen";
    return _0x1264d6 && _0x1264d6["nodeName"] ? _0x1264d6["nodeName"] : "";
  }, fullscreenEnabled: function () {
    return document["fullscreenEnabled"] || document["webkitFullscreenEnabled"];
  }}, _0x25adbd = {};
  function _0x3bf927(_0x4641ff) {
    return _0x4641ff > 2 ? _0x5a9382(_0x4641ff) : _0x4641ff;
  }
  var _0x55517e = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
  function _0x9e5645(_0x278cfb) {
    _0x278cfb = _0x3bf927(_0x278cfb);
    var _0x300732 = _0x55517e[_0x278cfb] || (typeof document !== "undefined" ? document["querySelector"](_0x278cfb) : undefined);
    return _0x300732;
  }
  function _0x257686(_0x46cec9) {
    return _0x9e5645(_0x46cec9);
  }
  function _0x2e0541(_0x142666, _0x3b3e97, _0x3c6bda) {
    var _0xa7d50a = _0x257686(_0x142666);
    if (!_0xa7d50a) return -4;
    _0x5f4233[_0x3b3e97 >> 2] = _0xa7d50a["width"], _0x5f4233[_0x3c6bda >> 2] = _0xa7d50a["height"];
  }
  function _0x20457a(_0x420aef) {
    var _0x191dcb = _0x217682(), _0x538c39 = _0x2c26ef(8), _0x2dcdaa = _0x538c39 + 4, _0xc29614 = _0x2c26ef(_0x420aef["id"]["length"] + 1);
    _0xf36afc(_0x420aef["id"], _0xc29614, _0x420aef["id"]["length"] + 1);
    var _0x1dd7e7 = _0x2e0541(_0xc29614, _0x538c39, _0x2dcdaa), _0x105516 = [_0x5f4233[_0x538c39 >> 2], _0x5f4233[_0x2dcdaa >> 2]];
    return _0x994ba8(_0x191dcb), _0x105516;
  }
  function _0x2b9fbc(_0x1993e0, _0xe5081d, _0x3b1480) {
    var _0x240e63 = _0x257686(_0x1993e0);
    if (!_0x240e63) return -4;
    return _0x240e63["width"] = _0xe5081d, _0x240e63["height"] = _0x3b1480, 0;
  }
  function _0x4ba10e(_0x17cd76, _0x364062, _0xcf979d) {
    if (!_0x17cd76["controlTransferredOffscreen"]) _0x17cd76["width"] = _0x364062, _0x17cd76["height"] = _0xcf979d; else {
      var _0x5cbc92 = _0x217682(), _0x57976d = _0x2c26ef(_0x17cd76["id"]["length"] + 1);
      _0xf36afc(_0x17cd76["id"], _0x57976d, _0x17cd76["id"]["length"] + 1), _0x2b9fbc(_0x57976d, _0x364062, _0xcf979d), _0x994ba8(_0x5cbc92);
    }
  }
  function _0xb7d217(_0x2a5e05) {
    var _0x3b874b = _0x20457a(_0x2a5e05), _0x3ebd5a = _0x3b874b[0], _0x35c31d = _0x3b874b[1], _0x2c2689 = _0x2a5e05["style"]["width"], _0x15192d = _0x2a5e05["style"]["height"], _0x2ec14a = _0x2a5e05["style"]["backgroundColor"], _0xd17e81 = document["body"]["style"]["backgroundColor"], _0x1b8cf7 = _0x2a5e05["style"]["paddingLeft"], _0x1e053f = _0x2a5e05["style"]["paddingRight"], _0x17093a = _0x2a5e05["style"]["paddingTop"], _0x4cfdd4 = _0x2a5e05["style"]["paddingBottom"], _0x4d8758 = _0x2a5e05["style"]["marginLeft"], _0x19fa0f = _0x2a5e05["style"]["marginRight"], _0x484ae6 = _0x2a5e05["style"]["marginTop"], _0x1b9eba = _0x2a5e05["style"]["marginBottom"], _0x3cf322 = document["body"]["style"]["margin"], _0x51ee52 = document["documentElement"]["style"]["overflow"], _0x9cf3e7 = document["body"]["scroll"], _0x49c724 = _0x2a5e05["style"]["imageRendering"];
    function _0x3885da() {
      var _0x3e6003 = document["fullscreenElement"] || document["webkitFullscreenElement"] || document["msFullscreenElement"];
      if (!_0x3e6003) {
        document["removeEventListener"]("fullscreenchange", _0x3885da), document["removeEventListener"]("webkitfullscreenchange", _0x3885da), _0x4ba10e(_0x2a5e05, _0x3ebd5a, _0x35c31d), _0x2a5e05["style"]["width"] = _0x2c2689, _0x2a5e05["style"]["height"] = _0x15192d, _0x2a5e05["style"]["backgroundColor"] = _0x2ec14a;
        if (!_0xd17e81) document["body"]["style"]["backgroundColor"] = "white";
        document["body"]["style"]["backgroundColor"] = _0xd17e81, _0x2a5e05["style"]["paddingLeft"] = _0x1b8cf7, _0x2a5e05["style"]["paddingRight"] = _0x1e053f, _0x2a5e05["style"]["paddingTop"] = _0x17093a, _0x2a5e05["style"]["paddingBottom"] = _0x4cfdd4, _0x2a5e05["style"]["marginLeft"] = _0x4d8758, _0x2a5e05["style"]["marginRight"] = _0x19fa0f, _0x2a5e05["style"]["marginTop"] = _0x484ae6, _0x2a5e05["style"]["marginBottom"] = _0x1b9eba, document["body"]["style"]["margin"] = _0x3cf322, document["documentElement"]["style"]["overflow"] = _0x51ee52, document["body"]["scroll"] = _0x9cf3e7, _0x2a5e05["style"]["imageRendering"] = _0x49c724;
        if (_0x2a5e05["GLctxObject"]) _0x2a5e05["GLctxObject"]["GLctx"]["viewport"](0, 0, _0x3ebd5a, _0x35c31d);
        _0x25adbd["canvasResizedCallback"] && function (_0x488486, _0x18b4fd, _0x3635bb) {
          return _0x493590["apply"](null, [_0x25adbd["canvasResizedCallback"], _0x488486, _0x18b4fd, _0x3635bb]);
        }(37, 0, _0x25adbd["canvasResizedCallbackUserData"]);
      }
    }
    return document["addEventListener"]("fullscreenchange", _0x3885da), document["addEventListener"]("webkitfullscreenchange", _0x3885da), _0x3885da;
  }
  function _0x59f39c(_0x2729e7, _0x3319c9, _0xf35ac2) {
    _0x2729e7["style"]["paddingLeft"] = _0x2729e7["style"]["paddingRight"] = _0xf35ac2 + "px", _0x2729e7["style"]["paddingTop"] = _0x2729e7["style"]["paddingBottom"] = _0x3319c9 + "px";
  }
  function _0x7aa55b(_0x471a2c) {
    return _0x55517e["indexOf"](_0x471a2c) < 0 ? _0x471a2c["getBoundingClientRect"]() : {left: 0, top: 0};
  }
  function _0x2b7b32(_0x6a6f18, _0x856db4) {
    var _0x469dfc = _0xb7d217(_0x6a6f18), _0x3e7aa4 = _0x856db4["softFullscreen"] ? innerWidth : screen["width"], _0x1fd511 = _0x856db4["softFullscreen"] ? innerHeight : screen["height"], _0x82e5a5 = _0x7aa55b(_0x6a6f18), _0x3cab92 = _0x82e5a5["width"], _0x490e1e = _0x82e5a5["height"], _0x468925 = _0x20457a(_0x6a6f18), _0x3f6f2c = _0x468925[0], _0x495c59 = _0x468925[1];
    if (_0x856db4["scaleMode"] == 3) _0x59f39c(_0x6a6f18, (_0x1fd511 - _0x490e1e) / 2, (_0x3e7aa4 - _0x3cab92) / 2), _0x3e7aa4 = _0x3cab92, _0x1fd511 = _0x490e1e; else {
      if (_0x856db4["scaleMode"] == 2) {
        if (_0x3e7aa4 * _0x495c59 < _0x3f6f2c * _0x1fd511) {
          var _0x44ff73 = _0x495c59 * _0x3e7aa4 / _0x3f6f2c;
          _0x59f39c(_0x6a6f18, (_0x1fd511 - _0x44ff73) / 2, 0), _0x1fd511 = _0x44ff73;
        } else {
          var _0x429639 = _0x3f6f2c * _0x1fd511 / _0x495c59;
          _0x59f39c(_0x6a6f18, 0, (_0x3e7aa4 - _0x429639) / 2), _0x3e7aa4 = _0x429639;
        }
      }
    }
    if (!_0x6a6f18["style"]["backgroundColor"]) _0x6a6f18["style"]["backgroundColor"] = "black";
    if (!document["body"]["style"]["backgroundColor"]) document["body"]["style"]["backgroundColor"] = "black";
    _0x6a6f18["style"]["width"] = _0x3e7aa4 + "px", _0x6a6f18["style"]["height"] = _0x1fd511 + "px";
    _0x856db4["filteringMode"] == 1 && (_0x6a6f18["style"]["imageRendering"] = "optimizeSpeed", _0x6a6f18["style"]["imageRendering"] = "-moz-crisp-edges", _0x6a6f18["style"]["imageRendering"] = "-o-crisp-edges", _0x6a6f18["style"]["imageRendering"] = "-webkit-optimize-contrast", _0x6a6f18["style"]["imageRendering"] = "optimize-contrast", _0x6a6f18["style"]["imageRendering"] = "crisp-edges", _0x6a6f18["style"]["imageRendering"] = "pixelated");
    var _0x43ae4d = _0x856db4["canvasResolutionScaleMode"] == 2 ? devicePixelRatio : 1;
    if (_0x856db4["canvasResolutionScaleMode"] != 0) {
      var _0xc48fe2 = _0x3e7aa4 * _0x43ae4d | 0, _0xed5bda = _0x1fd511 * _0x43ae4d | 0;
      _0x4ba10e(_0x6a6f18, _0xc48fe2, _0xed5bda);
      if (_0x6a6f18["GLctxObject"]) _0x6a6f18["GLctxObject"]["GLctx"]["viewport"](0, 0, _0xc48fe2, _0xed5bda);
    }
    return _0x469dfc;
  }
  function _0xb4213c(_0x4ba0a2, _0x2d3eda) {
    (_0x2d3eda["scaleMode"] != 0 || _0x2d3eda["canvasResolutionScaleMode"] != 0) && _0x2b7b32(_0x4ba0a2, _0x2d3eda);
    if (_0x4ba0a2["requestFullscreen"]) _0x4ba0a2["requestFullscreen"](); else {
      if (_0x4ba0a2["webkitRequestFullscreen"]) _0x4ba0a2["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]); else return _0x38c1b7["fullscreenEnabled"]() ? -3 : -1;
    }
    return _0x25adbd = _0x2d3eda, _0x2d3eda["canvasResizedCallback"] && function (_0x58f331, _0x45d540, _0x57ee43) {
      return _0x493590["apply"](null, [_0x2d3eda["canvasResizedCallback"], _0x58f331, _0x45d540, _0x57ee43]);
    }(37, 0, _0x2d3eda["canvasResizedCallbackUserData"]), 0;
  }
  function _0x5b8bd8() {
    if (!_0x38c1b7["fullscreenEnabled"]()) return -1;
    _0x38c1b7["removeDeferredCalls"](_0xb4213c);
    var _0x176167 = _0x55517e[1];
    if (_0x176167["exitFullscreen"]) _0x176167["fullscreenElement"] && _0x176167["exitFullscreen"](); else {
      if (_0x176167["webkitExitFullscreen"]) _0x176167["webkitFullscreenElement"] && _0x176167["webkitExitFullscreen"](); else return -1;
    }
    return 0;
  }
  function _0x52489d(_0x45072c) {
    if (_0x45072c["requestPointerLock"]) _0x45072c["requestPointerLock"](); else {
      if (_0x45072c["msRequestPointerLock"]) _0x45072c["msRequestPointerLock"](); else return document["body"]["requestPointerLock"] || document["body"]["msRequestPointerLock"] ? -3 : -1;
    }
    return 0;
  }
  function _0xb8403b() {
    _0x38c1b7["removeDeferredCalls"](_0x52489d);
    if (document["exitPointerLock"]) document["exitPointerLock"](); else {
      if (document["msExitPointerLock"]) document["msExitPointerLock"](); else return -1;
    }
    return 0;
  }
  function _0x28757c(_0x54d834) {
    var _0x367ce7 = document["fullscreenElement"] || document["mozFullScreenElement"] || document["webkitFullscreenElement"] || document["msFullscreenElement"], _0x4dfdbc = !!_0x367ce7;
    _0x5f4233[_0x54d834 >> 2] = _0x4dfdbc, _0x5f4233[_0x54d834 + 4 >> 2] = _0x38c1b7["fullscreenEnabled"]();
    var _0x3766d5 = _0x4dfdbc ? _0x367ce7 : _0x38c1b7["previousFullscreenElement"], _0x39832d = _0x38c1b7["getNodeNameForTarget"](_0x3766d5), _0x2140a8 = _0x3766d5 && _0x3766d5["id"] ? _0x3766d5["id"] : "";
    _0xf36afc(_0x39832d, _0x54d834 + 8, 128), _0xf36afc(_0x2140a8, _0x54d834 + 136, 128), _0x5f4233[_0x54d834 + 264 >> 2] = _0x3766d5 ? _0x3766d5["clientWidth"] : 0, _0x5f4233[_0x54d834 + 268 >> 2] = _0x3766d5 ? _0x3766d5["clientHeight"] : 0, _0x5f4233[_0x54d834 + 272 >> 2] = screen["width"], _0x5f4233[_0x54d834 + 276 >> 2] = screen["height"], _0x4dfdbc && (_0x38c1b7["previousFullscreenElement"] = _0x367ce7);
  }
  function _0x29dfbf(_0x45ac30) {
    if (!_0x38c1b7["fullscreenEnabled"]()) return -1;
    return _0x28757c(_0x45ac30), 0;
  }
  function _0x2618fb(_0xa9c02c, _0x1fab4f) {
    _0x14c82b[_0xa9c02c >> 3] = _0x1fab4f["timestamp"];
    for (var _0x10e04f = 0; _0x10e04f < _0x1fab4f["axes"]["length"]; ++_0x10e04f) {
      _0x14c82b[_0xa9c02c + _0x10e04f * 8 + 16 >> 3] = _0x1fab4f["axes"][_0x10e04f];
    }
    for (var _0x10e04f = 0; _0x10e04f < _0x1fab4f["buttons"]["length"]; ++_0x10e04f) {
      typeof _0x1fab4f["buttons"][_0x10e04f] === "object" ? _0x14c82b[_0xa9c02c + _0x10e04f * 8 + 528 >> 3] = _0x1fab4f["buttons"][_0x10e04f]["value"] : _0x14c82b[_0xa9c02c + _0x10e04f * 8 + 528 >> 3] = _0x1fab4f["buttons"][_0x10e04f];
    }
    for (var _0x10e04f = 0; _0x10e04f < _0x1fab4f["buttons"]["length"]; ++_0x10e04f) {
      typeof _0x1fab4f["buttons"][_0x10e04f] === "object" ? _0x5f4233[_0xa9c02c + _0x10e04f * 4 + 1040 >> 2] = _0x1fab4f["buttons"][_0x10e04f]["pressed"] : _0x5f4233[_0xa9c02c + _0x10e04f * 4 + 1040 >> 2] = _0x1fab4f["buttons"][_0x10e04f] == 1;
    }
    _0x5f4233[_0xa9c02c + 1296 >> 2] = _0x1fab4f["connected"], _0x5f4233[_0xa9c02c + 1300 >> 2] = _0x1fab4f["index"], _0x5f4233[_0xa9c02c + 8 >> 2] = _0x1fab4f["axes"]["length"], _0x5f4233[_0xa9c02c + 12 >> 2] = _0x1fab4f["buttons"]["length"], _0xf36afc(_0x1fab4f["id"], _0xa9c02c + 1304, 64), _0xf36afc(_0x1fab4f["mapping"], _0xa9c02c + 1368, 64);
  }
  function _0x5e5c51(_0x4d1db7, _0x71294a) {
    if (_0x4d1db7 < 0 || _0x4d1db7 >= _0x38c1b7["lastGamepadState"]["length"]) return -5;
    if (!_0x38c1b7["lastGamepadState"][_0x4d1db7]) return -7;
    return _0x2618fb(_0x71294a, _0x38c1b7["lastGamepadState"][_0x4d1db7]), 0;
  }
  function _0x4161ca() {
    return 2147483648;
  }
  function _0x21b5ed() {
    return _0x38c1b7["lastGamepadState"]["length"];
  }
  function _0x47805c() {
    _0x38c1b7["removeAllEventListeners"]();
  }
  function _0x2c35bc(_0x25cc22) {
    return !_0x4a7ef5["contexts"][_0x25cc22] || _0x4a7ef5["contexts"][_0x25cc22]["GLctx"]["isContextLost"]();
  }
  function _0x4d5e01(_0xa397b1) {
    return _0xa397b1 < 0 || _0xa397b1 === 0 && 1 / _0xa397b1 === -Infinity;
  }
  function _0x1f97b0(_0x3f03a6, _0x44922b) {
    return (_0x3f03a6 >>> 0) + _0x44922b * 4294967296;
  }
  function _0x11e222(_0x3e5fd6, _0x552072) {
    return (_0x3e5fd6 >>> 0) + (_0x552072 >>> 0) * 4294967296;
  }
  function _0x460c15(_0x387286, _0x29630c) {
    if (_0x387286 <= 0) return _0x387286;
    var _0x3a3de2 = _0x29630c <= 32 ? Math["abs"](1 << _0x29630c - 1) : Math["pow"](2, _0x29630c - 1);
    return _0x387286 >= _0x3a3de2 && (_0x29630c <= 32 || _0x387286 > _0x3a3de2) && (_0x387286 = -2 * _0x3a3de2 + _0x387286), _0x387286;
  }
  function _0x508f76(_0x286010, _0x3e467a) {
    if (_0x286010 >= 0) return _0x286010;
    return _0x3e467a <= 32 ? 2 * Math["abs"](1 << _0x3e467a - 1) + _0x286010 : Math["pow"](2, _0x3e467a) + _0x286010;
  }
  function _0x21715f(_0x39db36, _0x2f8dc3) {
    var _0x59298b = _0x39db36, _0xcc9714 = _0x2f8dc3;
    function _0x500bc6(_0x130f5f, _0x3bc674) {
      if (_0x3bc674 === "double" || _0x3bc674 === "i64") _0x130f5f & 7 && (_0x130f5f += 4); else {}
      return _0x130f5f;
    }
    function _0x11c1af(_0x16524f) {
      var _0x1aa4b0;
      _0xcc9714 = _0x500bc6(_0xcc9714, _0x16524f);
      if (_0x16524f === "double") _0x1aa4b0 = _0x14c82b[_0xcc9714 >> 3], _0xcc9714 += 8; else _0x16524f == "i64" ? (_0x1aa4b0 = [_0x5f4233[_0xcc9714 >> 2], _0x5f4233[_0xcc9714 + 4 >> 2]], _0xcc9714 += 8) : (_0x16524f = "i32", _0x1aa4b0 = _0x5f4233[_0xcc9714 >> 2], _0xcc9714 += 4);
      return _0x1aa4b0;
    }
    var _0x3f0ff2 = [], _0x345bc2, _0x2a3424, _0x22b7f8;
    while (1) {
      var _0x606305 = _0x59298b;
      _0x345bc2 = _0x2c8e41[_0x59298b >> 0];
      if (_0x345bc2 === 0) break;
      _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0];
      if (_0x345bc2 == 37) {
        var _0x377894 = ![], _0x510100 = ![], _0x12647f = ![], _0x48ab93 = ![], _0x1b06aa = ![];
        _0x19ff44: while (1) {
          switch (_0x2a3424) {
            case 43:
              _0x377894 = !![];
              break;
            case 45:
              _0x510100 = !![];
              break;
            case 35:
              _0x12647f = !![];
              break;
            case 48:
              if (_0x48ab93) break _0x19ff44; else {
                _0x48ab93 = !![];
                break;
              }
            case 32:
              _0x1b06aa = !![];
              break;
            default:
              break _0x19ff44;
          }
          _0x59298b++, _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0];
        }
        var _0x196480 = 0;
        if (_0x2a3424 == 42) _0x196480 = _0x11c1af("i32"), _0x59298b++, _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0]; else while (_0x2a3424 >= 48 && _0x2a3424 <= 57) {
          _0x196480 = _0x196480 * 10 + (_0x2a3424 - 48), _0x59298b++, _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0];
        }
        var _0x249f8f = ![], _0x407655 = -1;
        if (_0x2a3424 == 46) {
          _0x407655 = 0, _0x249f8f = !![], _0x59298b++, _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0];
          if (_0x2a3424 == 42) _0x407655 = _0x11c1af("i32"), _0x59298b++; else while (1) {
            var _0x52045c = _0x2c8e41[_0x59298b + 1 >> 0];
            if (_0x52045c < 48 || _0x52045c > 57) break;
            _0x407655 = _0x407655 * 10 + (_0x52045c - 48), _0x59298b++;
          }
          _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0];
        }
        _0x407655 < 0 && (_0x407655 = 6, _0x249f8f = ![]);
        var _0x24a5f0;
        switch (String["fromCharCode"](_0x2a3424)) {
          case "h":
            var _0x25a1bf = _0x2c8e41[_0x59298b + 2 >> 0];
            _0x25a1bf == 104 ? (_0x59298b++, _0x24a5f0 = 1) : _0x24a5f0 = 2;
            break;
          case "l":
            var _0x25a1bf = _0x2c8e41[_0x59298b + 2 >> 0];
            _0x25a1bf == 108 ? (_0x59298b++, _0x24a5f0 = 8) : _0x24a5f0 = 4;
            break;
          case "L":
          case "q":
          case "j":
            _0x24a5f0 = 8;
            break;
          case "z":
          case "t":
          case "I":
            _0x24a5f0 = 4;
            break;
          default:
            _0x24a5f0 = null;
        }
        if (_0x24a5f0) _0x59298b++;
        _0x2a3424 = _0x2c8e41[_0x59298b + 1 >> 0];
        switch (String["fromCharCode"](_0x2a3424)) {
          case "d":
          case "i":
          case "u":
          case "o":
          case "x":
          case "X":
          case "p":
            {
              var _0x482906 = _0x2a3424 == 100 || _0x2a3424 == 105;
              _0x24a5f0 = _0x24a5f0 || 4, _0x22b7f8 = _0x11c1af("i" + _0x24a5f0 * 8);
              var _0x303eed;
              _0x24a5f0 == 8 && (_0x22b7f8 = _0x2a3424 == 117 ? _0x11e222(_0x22b7f8[0], _0x22b7f8[1]) : _0x1f97b0(_0x22b7f8[0], _0x22b7f8[1]));
              if (_0x24a5f0 <= 4) {
                var _0x33e805 = Math["pow"](256, _0x24a5f0) - 1;
                _0x22b7f8 = (_0x482906 ? _0x460c15 : _0x508f76)(_0x22b7f8 & _0x33e805, _0x24a5f0 * 8);
              }
              var _0x5ca2a7 = Math["abs"](_0x22b7f8), _0x46ecd5 = "";
              if (_0x2a3424 == 100 || _0x2a3424 == 105) _0x303eed = _0x460c15(_0x22b7f8, 8 * _0x24a5f0, 1)["toString"](10); else {
                if (_0x2a3424 == 117) _0x303eed = _0x508f76(_0x22b7f8, 8 * _0x24a5f0, 1)["toString"](10), _0x22b7f8 = Math["abs"](_0x22b7f8); else {
                  if (_0x2a3424 == 111) _0x303eed = (_0x12647f ? "0" : "") + _0x5ca2a7["toString"](8); else {
                    if (_0x2a3424 == 120 || _0x2a3424 == 88) {
                      _0x46ecd5 = _0x12647f && _0x22b7f8 != 0 ? "0x" : "";
                      if (_0x22b7f8 < 0) {
                        _0x22b7f8 = -_0x22b7f8, _0x303eed = (_0x5ca2a7 - 1)["toString"](16);
                        var _0x18454b = [];
                        for (var _0x304151 = 0; _0x304151 < _0x303eed["length"]; _0x304151++) {
                          _0x18454b["push"]((15 - parseInt(_0x303eed[_0x304151], 16))["toString"](16));
                        }
                        _0x303eed = _0x18454b["join"]("");
                        while (_0x303eed["length"] < _0x24a5f0 * 2) _0x303eed = "f" + _0x303eed;
                      } else _0x303eed = _0x5ca2a7["toString"](16);
                      _0x2a3424 == 88 && (_0x46ecd5 = _0x46ecd5["toUpperCase"](), _0x303eed = _0x303eed["toUpperCase"]());
                    } else _0x2a3424 == 112 && (_0x5ca2a7 === 0 ? _0x303eed = "(nil)" : (_0x46ecd5 = "0x", _0x303eed = _0x5ca2a7["toString"](16)));
                  }
                }
              }
              if (_0x249f8f) while (_0x303eed["length"] < _0x407655) {
                _0x303eed = "0" + _0x303eed;
              }
              if (_0x22b7f8 >= 0) {
                if (_0x377894) _0x46ecd5 = "+" + _0x46ecd5; else _0x1b06aa && (_0x46ecd5 = " " + _0x46ecd5);
              }
              _0x303eed["charAt"](0) == "-" && (_0x46ecd5 = "-" + _0x46ecd5, _0x303eed = _0x303eed["substr"](1));
              while (_0x46ecd5["length"] + _0x303eed["length"] < _0x196480) {
                _0x510100 ? _0x303eed += " " : _0x48ab93 ? _0x303eed = "0" + _0x303eed : _0x46ecd5 = " " + _0x46ecd5;
              }
              _0x303eed = _0x46ecd5 + _0x303eed, _0x303eed["split"]("")["forEach"](function (_0x1dacc1) {
                _0x3f0ff2["push"](_0x1dacc1["charCodeAt"](0));
              });
              break;
            }
          case "f":
          case "F":
          case "e":
          case "E":
          case "g":
          case "G":
            {
              _0x22b7f8 = _0x11c1af("double");
              var _0x303eed;
              if (isNaN(_0x22b7f8)) _0x303eed = "nan", _0x48ab93 = ![]; else {
                if (!isFinite(_0x22b7f8)) _0x303eed = (_0x22b7f8 < 0 ? "-" : "") + "inf", _0x48ab93 = ![]; else {
                  var _0x761f67 = ![], _0x5a242c = Math["min"](_0x407655, 20);
                  if (_0x2a3424 == 103 || _0x2a3424 == 71) {
                    _0x761f67 = !![], _0x407655 = _0x407655 || 1;
                    var _0x3bc113 = parseInt(_0x22b7f8["toExponential"](_0x5a242c)["split"]("e")[1], 10);
                    _0x407655 > _0x3bc113 && _0x3bc113 >= -4 ? (_0x2a3424 = (_0x2a3424 == 103 ? "f" : "F")["charCodeAt"](0), _0x407655 -= _0x3bc113 + 1) : (_0x2a3424 = (_0x2a3424 == 103 ? "e" : "E")["charCodeAt"](0), _0x407655--), _0x5a242c = Math["min"](_0x407655, 20);
                  }
                  if (_0x2a3424 == 101 || _0x2a3424 == 69) _0x303eed = _0x22b7f8["toExponential"](_0x5a242c), /[eE][-+]\d$/["test"](_0x303eed) && (_0x303eed = _0x303eed["slice"](0, -1) + "0" + _0x303eed["slice"](-1)); else (_0x2a3424 == 102 || _0x2a3424 == 70) && (_0x303eed = _0x22b7f8["toFixed"](_0x5a242c), _0x22b7f8 === 0 && _0x4d5e01(_0x22b7f8) && (_0x303eed = "-" + _0x303eed));
                  var _0x21d4f6 = _0x303eed["split"]("e");
                  if (_0x761f67 && !_0x12647f) while (_0x21d4f6[0]["length"] > 1 && _0x21d4f6[0]["includes"](".") && (_0x21d4f6[0]["slice"](-1) == "0" || _0x21d4f6[0]["slice"](-1) == ".")) {
                    _0x21d4f6[0] = _0x21d4f6[0]["slice"](0, -1);
                  } else {
                    if (_0x12647f && _0x303eed["indexOf"](".") == -1) _0x21d4f6[0] += ".";
                    while (_0x407655 > _0x5a242c++) _0x21d4f6[0] += "0";
                  }
                  _0x303eed = _0x21d4f6[0] + (_0x21d4f6["length"] > 1 ? "e" + _0x21d4f6[1] : "");
                  if (_0x2a3424 == 69) _0x303eed = _0x303eed["toUpperCase"]();
                  if (_0x22b7f8 >= 0) {
                    if (_0x377894) _0x303eed = "+" + _0x303eed; else _0x1b06aa && (_0x303eed = " " + _0x303eed);
                  }
                }
              }
              while (_0x303eed["length"] < _0x196480) {
                _0x510100 ? _0x303eed += " " : _0x48ab93 && (_0x303eed[0] == "-" || _0x303eed[0] == "+") ? _0x303eed = _0x303eed[0] + "0" + _0x303eed["slice"](1) : _0x303eed = (_0x48ab93 ? "0" : " ") + _0x303eed;
              }
              if (_0x2a3424 < 97) _0x303eed = _0x303eed["toUpperCase"]();
              _0x303eed["split"]("")["forEach"](function (_0x2aa146) {
                _0x3f0ff2["push"](_0x2aa146["charCodeAt"](0));
              });
              break;
            }
          case "s":
            {
              var _0x1c7d28 = _0x11c1af("i8*"), _0x3bce86 = _0x1c7d28 ? _0x484faa(_0x1c7d28) : "(null)"["length"];
              if (_0x249f8f) _0x3bce86 = Math["min"](_0x3bce86, _0x407655);
              if (!_0x510100) while (_0x3bce86 < _0x196480--) {
                _0x3f0ff2["push"](32);
              }
              if (_0x1c7d28) for (var _0x304151 = 0; _0x304151 < _0x3bce86; _0x304151++) {
                _0x3f0ff2["push"](_0x1c2f04[_0x1c7d28++ >> 0]);
              } else _0x3f0ff2 = _0x3f0ff2["concat"](_0x4c56db("(null)"["substr"](0, _0x3bce86), !![]));
              if (_0x510100) while (_0x3bce86 < _0x196480--) {
                _0x3f0ff2["push"](32);
              }
              break;
            }
          case "c":
            {
              if (_0x510100) _0x3f0ff2["push"](_0x11c1af("i8"));
              while (--_0x196480 > 0) {
                _0x3f0ff2["push"](32);
              }
              if (!_0x510100) _0x3f0ff2["push"](_0x11c1af("i8"));
              break;
            }
          case "n":
            {
              var _0x4b1a50 = _0x11c1af("i32*");
              _0x5f4233[_0x4b1a50 >> 2] = _0x3f0ff2["length"];
              break;
            }
          case "%":
            {
              _0x3f0ff2["push"](_0x345bc2);
              break;
            }
          default:
            {
              for (var _0x304151 = _0x606305; _0x304151 < _0x59298b + 2; _0x304151++) {
                _0x3f0ff2["push"](_0x2c8e41[_0x304151 >> 0]);
              }
            }
        }
        _0x59298b += 2;
      } else _0x3f0ff2["push"](_0x345bc2), _0x59298b += 1;
    }
    return _0x3f0ff2;
  }
  function _0x3f7c2b(_0x407133) {
    if (!_0x407133 || !_0x407133["callee"] || !_0x407133["callee"]["name"]) return [null, "", ""];
    var _0x2027b7 = _0x407133["callee"]["toString"](), _0x4e7b8b = _0x407133["callee"]["name"], _0x28670f = "(", _0x4d2690 = !![];
    for (var _0x2329e6 in _0x407133) {
      var _0x687566 = _0x407133[_0x2329e6];
      !_0x4d2690 && (_0x28670f += ", "), _0x4d2690 = ![], typeof _0x687566 === "number" || typeof _0x687566 === "string" ? _0x28670f += _0x687566 : _0x28670f += "(" + typeof _0x687566 + ")";
    }
    _0x28670f += ")";
    var _0x185f60 = _0x407133["callee"]["caller"];
    _0x407133 = _0x185f60 ? _0x185f60["arguments"] : [];
    if (_0x4d2690) _0x28670f = "";
    return [_0x407133, _0x4e7b8b, _0x28670f];
  }
  function _0x588539(_0x451da5) {
    var _0x597981 = _0x5b7e0a(), _0x3a13b8 = _0x597981["lastIndexOf"]("_emscripten_log"), _0x4295ac = _0x597981["lastIndexOf"]("_emscripten_get_callstack"), _0x484593 = _0x597981["indexOf"]("\n", Math["max"](_0x3a13b8, _0x4295ac)) + 1;
    _0x597981 = _0x597981["slice"](_0x484593);
    _0x451da5 & 32 && _0x2b847b("EM_LOG_DEMANGLE is deprecated; ignoring");
    _0x451da5 & 8 && typeof emscripten_source_map === "undefined" && (_0x2b847b('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), _0x451da5 ^= 8, _0x451da5 |= 16);
    var _0x960ebe = null;
    if (_0x451da5 & 128) {
      _0x960ebe = _0x3f7c2b(arguments);
      while (_0x960ebe[1]["includes"]("_emscripten_")) _0x960ebe = _0x3f7c2b(_0x960ebe[0]);
    }
    var _0x4ab56f = _0x597981["split"]("\n");
    _0x597981 = "";
    var _0x5e5e61 = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"), _0xb9dbf9 = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"), _0xd4e084 = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var _0x28a481 in _0x4ab56f) {
      var _0x217428 = _0x4ab56f[_0x28a481], _0x326ad0 = "", _0x5c0239 = "", _0x1ace1e = 0, _0x4de864 = 0, _0x61c11a = _0xd4e084["exec"](_0x217428);
      if (_0x61c11a && _0x61c11a["length"] == 5) _0x326ad0 = _0x61c11a[1], _0x5c0239 = _0x61c11a[2], _0x1ace1e = _0x61c11a[3], _0x4de864 = _0x61c11a[4]; else {
        _0x61c11a = _0x5e5e61["exec"](_0x217428);
        if (!_0x61c11a) _0x61c11a = _0xb9dbf9["exec"](_0x217428);
        if (_0x61c11a && _0x61c11a["length"] >= 4) _0x326ad0 = _0x61c11a[1], _0x5c0239 = _0x61c11a[2], _0x1ace1e = _0x61c11a[3], _0x4de864 = _0x61c11a[4] | 0; else {
          _0x597981 += _0x217428 + "\n";
          continue;
        }
      }
      var _0x11d9dd = ![];
      if (_0x451da5 & 8) {
        var _0x106acf = emscripten_source_map["originalPositionFor"]({line: _0x1ace1e, column: _0x4de864});
        _0x11d9dd = _0x106acf && _0x106acf["source"], _0x11d9dd && (_0x451da5 & 64 && (_0x106acf["source"] = _0x106acf["source"]["substring"](_0x106acf["source"]["replace"](/\\/g, "/")["lastIndexOf"]("/") + 1)), _0x597981 += "    at " + _0x326ad0 + " (" + _0x106acf["source"] + ":" + _0x106acf["line"] + ":" + _0x106acf["column"] + ")\n");
      }
      (_0x451da5 & 16 || !_0x11d9dd) && (_0x451da5 & 64 && (_0x5c0239 = _0x5c0239["substring"](_0x5c0239["replace"](/\\/g, "/")["lastIndexOf"]("/") + 1)), _0x597981 += (_0x11d9dd ? "     = " + _0x326ad0 : "    at " + _0x326ad0) + " (" + _0x5c0239 + ":" + _0x1ace1e + ":" + _0x4de864 + ")\n"), _0x451da5 & 128 && _0x960ebe[0] && (_0x960ebe[1] == _0x326ad0 && _0x960ebe[2]["length"] > 0 && (_0x597981 = _0x597981["replace"](/\s+$/, ""), _0x597981 += " with values: " + _0x960ebe[1] + _0x960ebe[2] + "\n"), _0x960ebe = _0x3f7c2b(_0x960ebe[0]));
    }
    return _0x597981 = _0x597981["replace"](/\s+$/, ""), _0x597981;
  }
  function _0x23b859(_0x163b09, _0x44c8ad) {
    _0x163b09 & 24 && (_0x44c8ad = _0x44c8ad["replace"](/\s+$/, ""), _0x44c8ad += (_0x44c8ad["length"] > 0 ? "\n" : "") + _0x588539(_0x163b09));
    if (_0x163b09 & 1) {
      if (_0x163b09 & 4) console["error"](_0x44c8ad); else {
        if (_0x163b09 & 2) console["warn"](_0x44c8ad); else {
          if (_0x163b09 & 512) console["info"](_0x44c8ad); else _0x163b09 & 256 ? console["debug"](_0x44c8ad) : console["log"](_0x44c8ad);
        }
      }
    } else _0x163b09 & 6 ? _0x366b43(_0x44c8ad) : _0x507ddf(_0x44c8ad);
  }
  function _0x12981c(_0x4a3229, _0x549f96, _0x1c8bf5) {
    var _0x46f092 = _0x21715f(_0x549f96, _0x1c8bf5), _0x410d50 = _0x2c9ef7(_0x46f092, 0);
    _0x23b859(_0x4a3229, _0x410d50);
  }
  function _0x566a2c(_0x5ad967, _0x39c6f4) {
    _0x2ed5d3(_0x5ad967, _0x39c6f4 || 1);
    throw "longjmp";
  }
  function _0x5d9161(_0x4b4377, _0x3613e4) {
    return _0x566a2c(_0x4b4377, _0x3613e4);
  }
  function _0x505673(_0x381011, _0x118d05, _0x4a7d57) {
    _0x1c2f04["copyWithin"](_0x381011, _0x118d05, _0x118d05 + _0x4a7d57);
  }
  function _0x4da89d(_0x516bad, _0x162c6c) {
    if (!_0x38c1b7["fullscreenEnabled"]()) return -1;
    _0x516bad = _0x9e5645(_0x516bad);
    if (!_0x516bad) return -4;
    if (!_0x516bad["requestFullscreen"] && !_0x516bad["webkitRequestFullscreen"]) return -3;
    var _0xcab0ff = _0x38c1b7["canPerformEventHandlerRequests"]();
    if (!_0xcab0ff) return _0x162c6c["deferUntilInEventHandler"] ? (_0x38c1b7["deferCall"](_0xb4213c, 1, [_0x516bad, _0x162c6c]), 1) : -2;
    return _0xb4213c(_0x516bad, _0x162c6c);
  }
  function _0x4f32da(_0x495b28, _0x4d6414) {
    var _0x233dec = {scaleMode: 0, canvasResolutionScaleMode: 0, filteringMode: 0, deferUntilInEventHandler: _0x4d6414, canvasResizedCallbackTargetThread: 2};
    return _0x4da89d(_0x495b28, _0x233dec);
  }
  function _0x1bdf48(_0x516724, _0x2220dc) {
    _0x516724 = _0x9e5645(_0x516724);
    if (!_0x516724) return -4;
    if (!_0x516724["requestPointerLock"] && !_0x516724["msRequestPointerLock"]) return -1;
    var _0x395dcf = _0x38c1b7["canPerformEventHandlerRequests"]();
    if (!_0x395dcf) return _0x2220dc ? (_0x38c1b7["deferCall"](_0x52489d, 2, [_0x516724]), 1) : -2;
    return _0x52489d(_0x516724);
  }
  function _0x37ddd0(_0x28a19c) {
    try {
      return _0x2f0d89["grow"](_0x28a19c - _0x5ab467["byteLength"] + 65535 >>> 16), _0x32e1e2(_0x2f0d89["buffer"]), 1;
    } catch (_0x278eea) {}
  }
  function _0x201a1d(_0x5ef222) {
    var _0x244429 = _0x1c2f04["length"];
    _0x5ef222 = _0x5ef222 >>> 0;
    var _0x34a63a = 2147483648;
    if (_0x5ef222 > _0x34a63a) return ![];
    for (var _0x4d52f6 = 1; _0x4d52f6 <= 4; _0x4d52f6 *= 2) {
      var _0x5f3e4e = _0x244429 * (1 + 0.2 / _0x4d52f6);
      _0x5f3e4e = Math["min"](_0x5f3e4e, _0x5ef222 + 100663296);
      var _0x59f965 = Math["min"](_0x34a63a, _0x1002ef(Math["max"](_0x5ef222, _0x5f3e4e), 65536)), _0x56e54e = _0x37ddd0(_0x59f965);
      if (_0x56e54e) return !![];
    }
    return ![];
  }
  function _0x4b78b8() {
    try {
      if (navigator["getGamepads"]) return (_0x38c1b7["lastGamepadState"] = navigator["getGamepads"]()) ? 0 : -1;
    } catch (_0x37e1c1) {
      navigator["getGamepads"] = null;
    }
    return -1;
  }
  function _0x58ebd9(_0x599099, _0x4a76f4, _0x284470, _0x53eaf5, _0x3c5165, _0x34b110, _0x566905) {
    if (!_0x38c1b7["focusEvent"]) _0x38c1b7["focusEvent"] = _0x499029(256);
    var _0x2ce1b8 = function (_0x634717) {
      var _0x2b1ad1 = _0x634717 || event, _0xd140c7 = _0x38c1b7["getNodeNameForTarget"](_0x2b1ad1["target"]), _0x4657de = _0x2b1ad1["target"]["id"] ? _0x2b1ad1["target"]["id"] : "", _0x5c545c = _0x38c1b7["focusEvent"];
      _0xf36afc(_0xd140c7, _0x5c545c + 0, 128), _0xf36afc(_0x4657de, _0x5c545c + 128, 128);
      if (function (_0x1c8899, _0x513177, _0x3b3f92) {
        return _0x493590["apply"](null, [_0x53eaf5, _0x1c8899, _0x513177, _0x3b3f92]);
      }(_0x3c5165, _0x5c545c, _0x4a76f4)) _0x2b1ad1["preventDefault"]();
    }, _0x4357bb = {target: _0x9e5645(_0x599099), eventTypeString: _0x34b110, callbackfunc: _0x53eaf5, handlerFunc: _0x2ce1b8, useCapture: _0x284470};
    _0x38c1b7["registerOrRemoveHandler"](_0x4357bb);
  }
  function _0x379348(_0x357f75, _0x5de02b, _0x437145, _0x2db84f, _0x20384e) {
    return _0x58ebd9(_0x357f75, _0x5de02b, _0x437145, _0x2db84f, 12, "blur", _0x20384e), 0;
  }
  function _0x2dffb4(_0x5e2896, _0x27d145, _0x45c57b, _0xa301f0, _0x14916c) {
    return _0x58ebd9(_0x5e2896, _0x27d145, _0x45c57b, _0xa301f0, 13, "focus", _0x14916c), 0;
  }
  function _0x5ad3de(_0x29055b, _0x438425, _0x5825b9, _0x424b31, _0x26b050, _0x4c6c49, _0x66c5e2) {
    if (!_0x38c1b7["fullscreenChangeEvent"]) _0x38c1b7["fullscreenChangeEvent"] = _0x499029(280);
    var _0x388804 = function (_0xbe3c4f) {
      var _0x5056a7 = _0xbe3c4f || event, _0x47f280 = _0x38c1b7["fullscreenChangeEvent"];
      _0x28757c(_0x47f280);
      if (function (_0xac4fce, _0x4f06f8, _0x1c719b) {
        return _0x493590["apply"](null, [_0x424b31, _0xac4fce, _0x4f06f8, _0x1c719b]);
      }(_0x26b050, _0x47f280, _0x438425)) _0x5056a7["preventDefault"]();
    }, _0x2a2080 = {target: _0x29055b, eventTypeString: _0x4c6c49, callbackfunc: _0x424b31, handlerFunc: _0x388804, useCapture: _0x5825b9};
    _0x38c1b7["registerOrRemoveHandler"](_0x2a2080);
  }
  function _0x57dd19(_0x5f1829, _0x470854, _0x2de358, _0x1e9798, _0x50b1ed) {
    if (!_0x38c1b7["fullscreenEnabled"]()) return -1;
    _0x5f1829 = _0x9e5645(_0x5f1829);
    if (!_0x5f1829) return -4;
    return _0x5ad3de(_0x5f1829, _0x470854, _0x2de358, _0x1e9798, 19, "fullscreenchange", _0x50b1ed), _0x5ad3de(_0x5f1829, _0x470854, _0x2de358, _0x1e9798, 19, "webkitfullscreenchange", _0x50b1ed), 0;
  }
  function _0x51786d(_0x481b39, _0x42daf4, _0x5ebeeb, _0x576f5a, _0x53035f, _0x5919d8, _0x5e718f) {
    if (!_0x38c1b7["gamepadEvent"]) _0x38c1b7["gamepadEvent"] = _0x499029(1432);
    var _0x456190 = function (_0x5a0cf7) {
      var _0x244a7e = _0x5a0cf7 || event, _0xfac0e5 = _0x38c1b7["gamepadEvent"];
      _0x2618fb(_0xfac0e5, _0x244a7e["gamepad"]);
      if (function (_0x28b2d3, _0x467107, _0xcab59b) {
        return _0x493590["apply"](null, [_0x576f5a, _0x28b2d3, _0x467107, _0xcab59b]);
      }(_0x53035f, _0xfac0e5, _0x42daf4)) _0x244a7e["preventDefault"]();
    }, _0x1a123d = {target: _0x9e5645(_0x481b39), allowsDeferredCalls: !![], eventTypeString: _0x5919d8, callbackfunc: _0x576f5a, handlerFunc: _0x456190, useCapture: _0x5ebeeb};
    _0x38c1b7["registerOrRemoveHandler"](_0x1a123d);
  }
  function _0x2b3d11(_0x3eef08, _0x3276f7, _0x4dbe4e, _0x39ea19) {
    if (_0x4b78b8()) return -1;
    return _0x51786d(2, _0x3eef08, _0x3276f7, _0x4dbe4e, 26, "gamepadconnected", _0x39ea19);
  }
  function _0x4d5a89(_0x1d3b38, _0x27009f, _0x5cda8a, _0x1a4044) {
    if (_0x4b78b8()) return -1;
    return _0x51786d(2, _0x1d3b38, _0x27009f, _0x5cda8a, 27, "gamepaddisconnected", _0x1a4044);
  }
  function _0x55de78(_0x32e236, _0x5abfc0, _0x528d2a) {
    return setInterval(function () {
      (function (_0x438221) {
        _0x29b024["apply"](null, [_0x32e236, _0x438221]);
      }(_0x528d2a));
    }, _0x5abfc0);
  }
  function _0x1f19d3(_0x39bf0c, _0x50ee06, _0x5a6a3f, _0x4641f5, _0x335457, _0x4aebb7, _0x5c265b) {
    if (!_0x38c1b7["keyEvent"]) _0x38c1b7["keyEvent"] = _0x499029(164);
    var _0x1a55c5 = function (_0x36336b) {
      var _0x3b9465 = _0x38c1b7["keyEvent"], _0x4091cd = _0x3b9465 >> 2;
      _0x5f4233[_0x4091cd + 0] = _0x36336b["location"], _0x5f4233[_0x4091cd + 1] = _0x36336b["ctrlKey"], _0x5f4233[_0x4091cd + 2] = _0x36336b["shiftKey"], _0x5f4233[_0x4091cd + 3] = _0x36336b["altKey"], _0x5f4233[_0x4091cd + 4] = _0x36336b["metaKey"], _0x5f4233[_0x4091cd + 5] = _0x36336b["repeat"], _0x5f4233[_0x4091cd + 6] = _0x36336b["charCode"], _0x5f4233[_0x4091cd + 7] = _0x36336b["keyCode"], _0x5f4233[_0x4091cd + 8] = _0x36336b["which"], _0xf36afc(_0x36336b["key"] || "", _0x3b9465 + 36, 32), _0xf36afc(_0x36336b["code"] || "", _0x3b9465 + 68, 32), _0xf36afc(_0x36336b["char"] || "", _0x3b9465 + 100, 32), _0xf36afc(_0x36336b["locale"] || "", _0x3b9465 + 132, 32);
      if (function (_0x2305e8, _0x56aeb2, _0x1b1db8) {
        return _0x493590["apply"](null, [_0x4641f5, _0x2305e8, _0x56aeb2, _0x1b1db8]);
      }(_0x335457, _0x3b9465, _0x50ee06)) _0x36336b["preventDefault"]();
    }, _0x4cbe7b = {target: _0x9e5645(_0x39bf0c), allowsDeferredCalls: !![], eventTypeString: _0x4aebb7, callbackfunc: _0x4641f5, handlerFunc: _0x1a55c5, useCapture: _0x5a6a3f};
    _0x38c1b7["registerOrRemoveHandler"](_0x4cbe7b);
  }
  function _0x5cf36d(_0x167e64, _0x25ef30, _0x2ed922, _0x50983b, _0x4b9b28) {
    return _0x1f19d3(_0x167e64, _0x25ef30, _0x2ed922, _0x50983b, 2, "keydown", _0x4b9b28), 0;
  }
  function _0x39c91e(_0x54fe5a, _0x3c25ab, _0x542c71, _0x30f921, _0x20790b) {
    return _0x1f19d3(_0x54fe5a, _0x3c25ab, _0x542c71, _0x30f921, 1, "keypress", _0x20790b), 0;
  }
  function _0x1da95d(_0xce15df, _0x12c99e, _0xd0831a, _0x1f3b3e, _0x56fea7) {
    return _0x1f19d3(_0xce15df, _0x12c99e, _0xd0831a, _0x1f3b3e, 3, "keyup", _0x56fea7), 0;
  }
  function _0x4a696d(_0xe813c9, _0x3adca0, _0x426aca) {
    var _0x1414b5 = function () {
      _0x418e27["call"](null, _0xe813c9);
    };
    _0x192ec5(_0x1414b5, _0x3adca0, _0x426aca);
  }
  function _0x95c049(_0x4f60cb, _0x350c0a, _0x225c7e) {
    var _0x582ba6 = _0x4f60cb >> 2;
    _0x5f4233[_0x582ba6 + 0] = _0x350c0a["screenX"], _0x5f4233[_0x582ba6 + 1] = _0x350c0a["screenY"], _0x5f4233[_0x582ba6 + 2] = _0x350c0a["clientX"], _0x5f4233[_0x582ba6 + 3] = _0x350c0a["clientY"], _0x5f4233[_0x582ba6 + 4] = _0x350c0a["ctrlKey"], _0x5f4233[_0x582ba6 + 5] = _0x350c0a["shiftKey"], _0x5f4233[_0x582ba6 + 6] = _0x350c0a["altKey"], _0x5f4233[_0x582ba6 + 7] = _0x350c0a["metaKey"], _0x17c3b3[_0x582ba6 * 2 + 16] = _0x350c0a["button"], _0x17c3b3[_0x582ba6 * 2 + 17] = _0x350c0a["buttons"], _0x5f4233[_0x582ba6 + 9] = _0x350c0a["movementX"], _0x5f4233[_0x582ba6 + 10] = _0x350c0a["movementY"];
    var _0x1cdab4 = _0x7aa55b(_0x225c7e);
    _0x5f4233[_0x582ba6 + 11] = _0x350c0a["clientX"] - _0x1cdab4["left"], _0x5f4233[_0x582ba6 + 12] = _0x350c0a["clientY"] - _0x1cdab4["top"];
  }
  function _0x32ad36(_0x39b6b9, _0x4cda81, _0x36ed56, _0x440a56, _0x296c68, _0x1d9f02, _0x19d734) {
    if (!_0x38c1b7["mouseEvent"]) _0x38c1b7["mouseEvent"] = _0x499029(64);
    _0x39b6b9 = _0x9e5645(_0x39b6b9);
    var _0x1d4579 = function (_0x23d30c) {
      var _0x24802d = _0x23d30c || event;
      _0x95c049(_0x38c1b7["mouseEvent"], _0x24802d, _0x39b6b9);
      if (function (_0x6268ab, _0x420af5, _0x49f5da) {
        return _0x493590["apply"](null, [_0x440a56, _0x6268ab, _0x420af5, _0x49f5da]);
      }(_0x296c68, _0x38c1b7["mouseEvent"], _0x4cda81)) _0x24802d["preventDefault"]();
    }, _0x37eb44 = {target: _0x39b6b9, allowsDeferredCalls: _0x1d9f02 != "mousemove" && _0x1d9f02 != "mouseenter" && _0x1d9f02 != "mouseleave", eventTypeString: _0x1d9f02, callbackfunc: _0x440a56, handlerFunc: _0x1d4579, useCapture: _0x36ed56};
    _0x38c1b7["registerOrRemoveHandler"](_0x37eb44);
  }
  function _0x48b536(_0x3e3502, _0x1179db, _0x28e0dd, _0x51efe8, _0x2d1b3a) {
    return _0x32ad36(_0x3e3502, _0x1179db, _0x28e0dd, _0x51efe8, 5, "mousedown", _0x2d1b3a), 0;
  }
  function _0x1aee0b(_0x57918a, _0x598cad, _0xc5f9f7, _0x2f3563, _0xa05af5) {
    return _0x32ad36(_0x57918a, _0x598cad, _0xc5f9f7, _0x2f3563, 8, "mousemove", _0xa05af5), 0;
  }
  function _0x3a7ec4(_0x31cd40, _0x23e7cb, _0x58b300, _0x40fc4a, _0x3a4a9c) {
    return _0x32ad36(_0x31cd40, _0x23e7cb, _0x58b300, _0x40fc4a, 6, "mouseup", _0x3a4a9c), 0;
  }
  function _0x120431(_0xc2f9a5) {
    var _0x35cc6a = document["pointerLockElement"] || document["mozPointerLockElement"] || document["webkitPointerLockElement"] || document["msPointerLockElement"], _0x13f72c = !!_0x35cc6a;
    _0x5f4233[_0xc2f9a5 >> 2] = _0x13f72c;
    var _0x604b04 = _0x38c1b7["getNodeNameForTarget"](_0x35cc6a), _0x4aff93 = _0x35cc6a && _0x35cc6a["id"] ? _0x35cc6a["id"] : "";
    _0xf36afc(_0x604b04, _0xc2f9a5 + 4, 128), _0xf36afc(_0x4aff93, _0xc2f9a5 + 132, 128);
  }
  function _0x4e34e2(_0x34090f, _0x5e840b, _0xbd0fae, _0x2ff4f0, _0x3a2ced, _0x3e181f, _0x58b0cd) {
    if (!_0x38c1b7["pointerlockChangeEvent"]) _0x38c1b7["pointerlockChangeEvent"] = _0x499029(260);
    var _0x4a7f90 = function (_0xd59792) {
      var _0xc9bc64 = _0xd59792 || event, _0x21ca81 = _0x38c1b7["pointerlockChangeEvent"];
      _0x120431(_0x21ca81);
      if (function (_0x8ab6a6, _0x301965, _0x5921d1) {
        return _0x493590["apply"](null, [_0x2ff4f0, _0x8ab6a6, _0x301965, _0x5921d1]);
      }(_0x3a2ced, _0x21ca81, _0x5e840b)) _0xc9bc64["preventDefault"]();
    }, _0x542176 = {target: _0x34090f, eventTypeString: _0x3e181f, callbackfunc: _0x2ff4f0, handlerFunc: _0x4a7f90, useCapture: _0xbd0fae};
    _0x38c1b7["registerOrRemoveHandler"](_0x542176);
  }
  function _0x272e54(_0x3ce073, _0x184117, _0x416915, _0x59007d, _0x84fec0) {
    if (!document || !document["body"] || !document["body"]["requestPointerLock"] && !document["body"]["mozRequestPointerLock"] && !document["body"]["webkitRequestPointerLock"] && !document["body"]["msRequestPointerLock"]) return -1;
    _0x3ce073 = _0x9e5645(_0x3ce073);
    if (!_0x3ce073) return -4;
    return _0x4e34e2(_0x3ce073, _0x184117, _0x416915, _0x59007d, 20, "pointerlockchange", _0x84fec0), _0x4e34e2(_0x3ce073, _0x184117, _0x416915, _0x59007d, 20, "mozpointerlockchange", _0x84fec0), _0x4e34e2(_0x3ce073, _0x184117, _0x416915, _0x59007d, 20, "webkitpointerlockchange", _0x84fec0), _0x4e34e2(_0x3ce073, _0x184117, _0x416915, _0x59007d, 20, "mspointerlockchange", _0x84fec0), 0;
  }
  function _0x3fac96(_0xa40bce, _0x477c0f, _0x40422a, _0x4fdb94, _0x2a55fc, _0x4a4404, _0x10706e) {
    if (!_0x38c1b7["touchEvent"]) _0x38c1b7["touchEvent"] = _0x499029(1684);
    _0xa40bce = _0x9e5645(_0xa40bce);
    var _0x5f10dd = function (_0x15b782) {
      var _0x8b7ce, _0x4dc5c0 = {}, _0x102254 = _0x15b782["touches"];
      for (var _0x348a44 = 0; _0x348a44 < _0x102254["length"]; ++_0x348a44) {
        _0x8b7ce = _0x102254[_0x348a44], _0x8b7ce["isChanged"] = _0x8b7ce["onTarget"] = 0, _0x4dc5c0[_0x8b7ce["identifier"]] = _0x8b7ce;
      }
      for (var _0x348a44 = 0; _0x348a44 < _0x15b782["changedTouches"]["length"]; ++_0x348a44) {
        _0x8b7ce = _0x15b782["changedTouches"][_0x348a44], _0x8b7ce["isChanged"] = 1, _0x4dc5c0[_0x8b7ce["identifier"]] = _0x8b7ce;
      }
      for (var _0x348a44 = 0; _0x348a44 < _0x15b782["targetTouches"]["length"]; ++_0x348a44) {
        _0x4dc5c0[_0x15b782["targetTouches"][_0x348a44]["identifier"]]["onTarget"] = 1;
      }
      var _0x31bfe4 = _0x38c1b7["touchEvent"], _0x2ede05 = _0x31bfe4 >> 2;
      _0x5f4233[_0x2ede05 + 1] = _0x15b782["ctrlKey"], _0x5f4233[_0x2ede05 + 2] = _0x15b782["shiftKey"], _0x5f4233[_0x2ede05 + 3] = _0x15b782["altKey"], _0x5f4233[_0x2ede05 + 4] = _0x15b782["metaKey"], _0x2ede05 += 5;
      var _0x502be3 = _0x7aa55b(_0xa40bce), _0x2185db = 0;
      for (var _0x348a44 in _0x4dc5c0) {
        var _0x8b7ce = _0x4dc5c0[_0x348a44];
        _0x5f4233[_0x2ede05 + 0] = _0x8b7ce["identifier"], _0x5f4233[_0x2ede05 + 1] = _0x8b7ce["screenX"], _0x5f4233[_0x2ede05 + 2] = _0x8b7ce["screenY"], _0x5f4233[_0x2ede05 + 3] = _0x8b7ce["clientX"], _0x5f4233[_0x2ede05 + 4] = _0x8b7ce["clientY"], _0x5f4233[_0x2ede05 + 5] = _0x8b7ce["pageX"], _0x5f4233[_0x2ede05 + 6] = _0x8b7ce["pageY"], _0x5f4233[_0x2ede05 + 7] = _0x8b7ce["isChanged"], _0x5f4233[_0x2ede05 + 8] = _0x8b7ce["onTarget"], _0x5f4233[_0x2ede05 + 9] = _0x8b7ce["clientX"] - _0x502be3["left"], _0x5f4233[_0x2ede05 + 10] = _0x8b7ce["clientY"] - _0x502be3["top"], _0x2ede05 += 13;
        if (++_0x2185db > 31) break;
      }
      _0x5f4233[_0x31bfe4 >> 2] = _0x2185db;
      if (function (_0x5ae625, _0x23ccbe, _0x5ce4c5) {
        return _0x493590["apply"](null, [_0x4fdb94, _0x5ae625, _0x23ccbe, _0x5ce4c5]);
      }(_0x2a55fc, _0x31bfe4, _0x477c0f)) _0x15b782["preventDefault"]();
    }, _0x139194 = {target: _0xa40bce, allowsDeferredCalls: _0x4a4404 == "touchstart" || _0x4a4404 == "touchend", eventTypeString: _0x4a4404, callbackfunc: _0x4fdb94, handlerFunc: _0x5f10dd, useCapture: _0x40422a};
    _0x38c1b7["registerOrRemoveHandler"](_0x139194);
  }
  function _0x2a2834(_0x116c38, _0x2052fb, _0x1dd00b, _0x37af29, _0x22ac42) {
    return _0x3fac96(_0x116c38, _0x2052fb, _0x1dd00b, _0x37af29, 25, "touchcancel", _0x22ac42), 0;
  }
  function _0x25c8c6(_0x37c9d3, _0x36b258, _0x369279, _0x156fa5, _0x5717d9) {
    return _0x3fac96(_0x37c9d3, _0x36b258, _0x369279, _0x156fa5, 23, "touchend", _0x5717d9), 0;
  }
  function _0xa94f2f(_0x929697, _0x1f99fd, _0x348eef, _0x5cf734, _0x1ce671) {
    return _0x3fac96(_0x929697, _0x1f99fd, _0x348eef, _0x5cf734, 24, "touchmove", _0x1ce671), 0;
  }
  function _0x48aa7a(_0x10d368, _0x9f0d8b, _0x19f221, _0x50f3d1, _0x17ecd6) {
    return _0x3fac96(_0x10d368, _0x9f0d8b, _0x19f221, _0x50f3d1, 22, "touchstart", _0x17ecd6), 0;
  }
  function _0x388015(_0x5e7b40, _0x42b42c, _0x236047, _0x570b9b, _0x1732d5, _0x593991, _0x4cca8a) {
    if (!_0x38c1b7["wheelEvent"]) _0x38c1b7["wheelEvent"] = _0x499029(96);
    var _0xf602fe = function (_0x16763b) {
      var _0x42a64d = _0x16763b || event, _0x560b5a = _0x38c1b7["wheelEvent"];
      _0x95c049(_0x560b5a, _0x42a64d, _0x5e7b40), _0x14c82b[_0x560b5a + 64 >> 3] = _0x42a64d["deltaX"], _0x14c82b[_0x560b5a + 72 >> 3] = _0x42a64d["deltaY"], _0x14c82b[_0x560b5a + 80 >> 3] = _0x42a64d["deltaZ"], _0x5f4233[_0x560b5a + 88 >> 2] = _0x42a64d["deltaMode"];
      if (function (_0x4b87c6, _0x25ace9, _0x17d2f0) {
        return _0x493590["apply"](null, [_0x570b9b, _0x4b87c6, _0x25ace9, _0x17d2f0]);
      }(_0x1732d5, _0x560b5a, _0x42b42c)) _0x42a64d["preventDefault"]();
    }, _0x5d8eb2 = {target: _0x5e7b40, allowsDeferredCalls: !![], eventTypeString: _0x593991, callbackfunc: _0x570b9b, handlerFunc: _0xf602fe, useCapture: _0x236047};
    _0x38c1b7["registerOrRemoveHandler"](_0x5d8eb2);
  }
  function _0x5ed2b3(_0x556bdb, _0x3d80ca, _0x2276bc, _0x3dad4d, _0x245c72) {
    return _0x556bdb = _0x9e5645(_0x556bdb), typeof _0x556bdb["onwheel"] !== "undefined" ? (_0x388015(_0x556bdb, _0x3d80ca, _0x2276bc, _0x3dad4d, 9, "wheel", _0x245c72), 0) : -1;
  }
  function _0x38fa5b(_0x9f5d6a) {
    var _0x22048b = _0x1c532e();
    while (_0x1c532e() - _0x22048b < _0x9f5d6a) {}
  }
  function _0x24375b(_0x263bf2) {
    var _0x3518a1 = _0x263bf2["getExtension"]("ANGLE_instanced_arrays");
    if (_0x3518a1) return _0x263bf2["vertexAttribDivisor"] = function (_0x104493, _0x5860ee) {
      _0x3518a1["vertexAttribDivisorANGLE"](_0x104493, _0x5860ee);
    }, _0x263bf2["drawArraysInstanced"] = function (_0x44a215, _0x2d313b, _0x483f3d, _0x5c13bc) {
      _0x3518a1["drawArraysInstancedANGLE"](_0x44a215, _0x2d313b, _0x483f3d, _0x5c13bc);
    }, _0x263bf2["drawElementsInstanced"] = function (_0x43961e, _0x311168, _0x4a1462, _0xbd1568, _0x5ce286) {
      _0x3518a1["drawElementsInstancedANGLE"](_0x43961e, _0x311168, _0x4a1462, _0xbd1568, _0x5ce286);
    }, 1;
  }
  function _0x5c4718(_0x1c2654) {
    var _0x26c4e4 = _0x1c2654["getExtension"]("OES_vertex_array_object");
    if (_0x26c4e4) return _0x1c2654["createVertexArray"] = function () {
      return _0x26c4e4["createVertexArrayOES"]();
    }, _0x1c2654["deleteVertexArray"] = function (_0x59f7a8) {
      _0x26c4e4["deleteVertexArrayOES"](_0x59f7a8);
    }, _0x1c2654["bindVertexArray"] = function (_0x86ae3a) {
      _0x26c4e4["bindVertexArrayOES"](_0x86ae3a);
    }, _0x1c2654["isVertexArray"] = function (_0x5f21ca) {
      return _0x26c4e4["isVertexArrayOES"](_0x5f21ca);
    }, 1;
  }
  function _0x9b5fbc(_0x28d6a3) {
    var _0xdde6e3 = _0x28d6a3["getExtension"]("WEBGL_draw_buffers");
    if (_0xdde6e3) return _0x28d6a3["drawBuffers"] = function (_0x4f9e23, _0x105ac0) {
      _0xdde6e3["drawBuffersWEBGL"](_0x4f9e23, _0x105ac0);
    }, 1;
  }
  function _0x43830f(_0x21ba28) {
    return !!(_0x21ba28["dibvbi"] = _0x21ba28["getExtension"]("WEBGL_draw_instanced_base_vertex_base_instance"));
  }
  function _0xffa0b0(_0x33f865) {
    return !!(_0x33f865["mdibvbi"] = _0x33f865["getExtension"]("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
  }
  function _0x1d2201(_0x10abf6) {
    return !!(_0x10abf6["multiDrawWebgl"] = _0x10abf6["getExtension"]("WEBGL_multi_draw"));
  }
  var _0x4a7ef5 = {counter: 1, buffers: [], mappedBuffers: {}, programs: [], framebuffers: [], renderbuffers: [], textures: [], shaders: [], vaos: [], contexts: [], offscreenCanvases: {}, queries: [], samplers: [], transformFeedbacks: [], syncs: [], byteSizeByTypeRoot: 5120, byteSizeByType: [1, 1, 2, 2, 4, 4, 4, 2, 3, 4, 8], stringCache: {}, stringiCache: {}, unpackAlignment: 4, recordError: function _0x7156e6(_0x2ced9b) {
    !_0x4a7ef5["lastError"] && (_0x4a7ef5["lastError"] = _0x2ced9b);
  }, getNewId: function (_0x2ab159) {
    var _0x406fbf = _0x4a7ef5["counter"]++;
    for (var _0x22d0a4 = _0x2ab159["length"]; _0x22d0a4 < _0x406fbf; _0x22d0a4++) {
      _0x2ab159[_0x22d0a4] = null;
    }
    return _0x406fbf;
  }, MAX_TEMP_BUFFER_SIZE: 2097152, numTempVertexBuffersPerSize: 64, log2ceilLookup: function (_0x20a40a) {
    return 32 - Math["clz32"](_0x20a40a === 0 ? 0 : _0x20a40a - 1);
  }, generateTempBuffers: function (_0x2bf3fa, _0x523fb4) {
    var _0x4fee36 = _0x4a7ef5["log2ceilLookup"](_0x4a7ef5["MAX_TEMP_BUFFER_SIZE"]);
    _0x523fb4["tempVertexBufferCounters1"] = [], _0x523fb4["tempVertexBufferCounters2"] = [], _0x523fb4["tempVertexBufferCounters1"]["length"] = _0x523fb4["tempVertexBufferCounters2"]["length"] = _0x4fee36 + 1, _0x523fb4["tempVertexBuffers1"] = [], _0x523fb4["tempVertexBuffers2"] = [], _0x523fb4["tempVertexBuffers1"]["length"] = _0x523fb4["tempVertexBuffers2"]["length"] = _0x4fee36 + 1, _0x523fb4["tempIndexBuffers"] = [], _0x523fb4["tempIndexBuffers"]["length"] = _0x4fee36 + 1;
    for (var _0x2fc296 = 0; _0x2fc296 <= _0x4fee36; ++_0x2fc296) {
      _0x523fb4["tempIndexBuffers"][_0x2fc296] = null, _0x523fb4["tempVertexBufferCounters1"][_0x2fc296] = _0x523fb4["tempVertexBufferCounters2"][_0x2fc296] = 0;
      var _0xf887cf = _0x4a7ef5["numTempVertexBuffersPerSize"];
      _0x523fb4["tempVertexBuffers1"][_0x2fc296] = [], _0x523fb4["tempVertexBuffers2"][_0x2fc296] = [];
      var _0x1ca42e = _0x523fb4["tempVertexBuffers1"][_0x2fc296], _0x4a1964 = _0x523fb4["tempVertexBuffers2"][_0x2fc296];
      _0x1ca42e["length"] = _0x4a1964["length"] = _0xf887cf;
      for (var _0x5cff00 = 0; _0x5cff00 < _0xf887cf; ++_0x5cff00) {
        _0x1ca42e[_0x5cff00] = _0x4a1964[_0x5cff00] = null;
      }
    }
    if (_0x2bf3fa) {
      _0x523fb4["tempQuadIndexBuffer"] = _0x499cc5["createBuffer"](), _0x523fb4["GLctx"]["bindBuffer"](34963, _0x523fb4["tempQuadIndexBuffer"]);
      var _0x1edd29 = _0x4a7ef5["MAX_TEMP_BUFFER_SIZE"] >> 1, _0x59fda4 = new Uint16Array(_0x1edd29), _0x2fc296 = 0, _0x2cfbc6 = 0;
      while (1) {
        _0x59fda4[_0x2fc296++] = _0x2cfbc6;
        if (_0x2fc296 >= _0x1edd29) break;
        _0x59fda4[_0x2fc296++] = _0x2cfbc6 + 1;
        if (_0x2fc296 >= _0x1edd29) break;
        _0x59fda4[_0x2fc296++] = _0x2cfbc6 + 2;
        if (_0x2fc296 >= _0x1edd29) break;
        _0x59fda4[_0x2fc296++] = _0x2cfbc6;
        if (_0x2fc296 >= _0x1edd29) break;
        _0x59fda4[_0x2fc296++] = _0x2cfbc6 + 2;
        if (_0x2fc296 >= _0x1edd29) break;
        _0x59fda4[_0x2fc296++] = _0x2cfbc6 + 3;
        if (_0x2fc296 >= _0x1edd29) break;
        _0x2cfbc6 += 4;
      }
      _0x523fb4["GLctx"]["bufferData"](34963, _0x59fda4, 35044), _0x523fb4["GLctx"]["bindBuffer"](34963, null);
    }
  }, getTempVertexBuffer: function _0x278e05(_0x1fb5c2) {
    var _0x3d65e2 = _0x4a7ef5["log2ceilLookup"](_0x1fb5c2), _0x1dd512 = _0x4a7ef5["currentContext"]["tempVertexBuffers1"][_0x3d65e2], _0x4e9ece = _0x4a7ef5["currentContext"]["tempVertexBufferCounters1"][_0x3d65e2];
    _0x4a7ef5["currentContext"]["tempVertexBufferCounters1"][_0x3d65e2] = _0x4a7ef5["currentContext"]["tempVertexBufferCounters1"][_0x3d65e2] + 1 & _0x4a7ef5["numTempVertexBuffersPerSize"] - 1;
    var _0xfd4c20 = _0x1dd512[_0x4e9ece];
    if (_0xfd4c20) return _0xfd4c20;
    var _0x50f813 = _0x499cc5["getParameter"](34964);
    return _0x1dd512[_0x4e9ece] = _0x499cc5["createBuffer"](), _0x499cc5["bindBuffer"](34962, _0x1dd512[_0x4e9ece]), _0x499cc5["bufferData"](34962, 1 << _0x3d65e2, 35048), _0x499cc5["bindBuffer"](34962, _0x50f813), _0x1dd512[_0x4e9ece];
  }, getTempIndexBuffer: function _0x1efdab(_0x328d83) {
    var _0x307c35 = _0x4a7ef5["log2ceilLookup"](_0x328d83), _0x451375 = _0x4a7ef5["currentContext"]["tempIndexBuffers"][_0x307c35];
    if (_0x451375) return _0x451375;
    var _0x240d81 = _0x499cc5["getParameter"](34965);
    return _0x4a7ef5["currentContext"]["tempIndexBuffers"][_0x307c35] = _0x499cc5["createBuffer"](), _0x499cc5["bindBuffer"](34963, _0x4a7ef5["currentContext"]["tempIndexBuffers"][_0x307c35]), _0x499cc5["bufferData"](34963, 1 << _0x307c35, 35048), _0x499cc5["bindBuffer"](34963, _0x240d81), _0x4a7ef5["currentContext"]["tempIndexBuffers"][_0x307c35];
  }, newRenderingFrameStarted: function _0x1ff6a4() {
    if (!_0x4a7ef5["currentContext"]) return;
    var _0x41bcd2 = _0x4a7ef5["currentContext"]["tempVertexBuffers1"];
    _0x4a7ef5["currentContext"]["tempVertexBuffers1"] = _0x4a7ef5["currentContext"]["tempVertexBuffers2"], _0x4a7ef5["currentContext"]["tempVertexBuffers2"] = _0x41bcd2, _0x41bcd2 = _0x4a7ef5["currentContext"]["tempVertexBufferCounters1"], _0x4a7ef5["currentContext"]["tempVertexBufferCounters1"] = _0x4a7ef5["currentContext"]["tempVertexBufferCounters2"], _0x4a7ef5["currentContext"]["tempVertexBufferCounters2"] = _0x41bcd2;
    var _0xcd9e71 = _0x4a7ef5["log2ceilLookup"](_0x4a7ef5["MAX_TEMP_BUFFER_SIZE"]);
    for (var _0x560553 = 0; _0x560553 <= _0xcd9e71; ++_0x560553) {
      _0x4a7ef5["currentContext"]["tempVertexBufferCounters1"][_0x560553] = 0;
    }
  }, getSource: function (_0x4c16ca, _0x5afa47, _0x1e7f68, _0x553f17) {
    var _0x2372e3 = "";
    for (var _0x2cc1e9 = 0; _0x2cc1e9 < _0x5afa47; ++_0x2cc1e9) {
      var _0x23cfec = _0x553f17 ? _0x5f4233[_0x553f17 + _0x2cc1e9 * 4 >> 2] : -1;
      _0x2372e3 += _0x5a9382(_0x5f4233[_0x1e7f68 + _0x2cc1e9 * 4 >> 2], _0x23cfec < 0 ? undefined : _0x23cfec);
    }
    return _0x2372e3;
  }, calcBufLength: function _0x4a058f(_0x364dad, _0x20a727, _0x11071a, _0x5459c1) {
    if (_0x11071a > 0) return _0x5459c1 * _0x11071a;
    var _0x5053d5 = _0x4a7ef5["byteSizeByType"][_0x20a727 - _0x4a7ef5["byteSizeByTypeRoot"]];
    return _0x364dad * _0x5053d5 * _0x5459c1;
  }, usedTempBuffers: [], preDrawHandleClientVertexAttribBindings: function _0x269d3e(_0x4f9055) {
    _0x4a7ef5["resetBufferBinding"] = ![];
    for (var _0x50afec = 0; _0x50afec < _0x4a7ef5["currentContext"]["maxVertexAttribs"]; ++_0x50afec) {
      var _0x396e1e = _0x4a7ef5["currentContext"]["clientBuffers"][_0x50afec];
      if (!_0x396e1e["clientside"] || !_0x396e1e["enabled"]) continue;
      _0x4a7ef5["resetBufferBinding"] = !![];
      var _0x1b92a7 = _0x4a7ef5["calcBufLength"](_0x396e1e["size"], _0x396e1e["type"], _0x396e1e["stride"], _0x4f9055), _0x9583a0 = _0x4a7ef5["getTempVertexBuffer"](_0x1b92a7);
      _0x499cc5["bindBuffer"](34962, _0x9583a0), _0x499cc5["bufferSubData"](34962, 0, _0x1c2f04["subarray"](_0x396e1e["ptr"], _0x396e1e["ptr"] + _0x1b92a7)), _0x396e1e["vertexAttribPointerAdaptor"]["call"](_0x499cc5, _0x50afec, _0x396e1e["size"], _0x396e1e["type"], _0x396e1e["normalized"], _0x396e1e["stride"], 0);
    }
  }, postDrawHandleClientVertexAttribBindings: function _0x19d030() {
    _0x4a7ef5["resetBufferBinding"] && _0x499cc5["bindBuffer"](34962, _0x4a7ef5["buffers"][_0x499cc5["currentArrayBufferBinding"]]);
  }, createContext: function (_0x1b1213, _0x25426d) {
    !_0x1b1213["getContextSafariWebGL2Fixed"] && (_0x1b1213["getContextSafariWebGL2Fixed"] = _0x1b1213["getContext"], _0x1b1213["getContext"] = function (_0x28adcd, _0x54fd13) {
      var _0x1f9a8b = _0x1b1213["getContextSafariWebGL2Fixed"](_0x28adcd, _0x54fd13);
      return _0x28adcd == "webgl" == _0x1f9a8b instanceof WebGLRenderingContext ? _0x1f9a8b : null;
    });
    var _0x28fc46 = _0x25426d["majorVersion"] > 1 ? _0x1b1213["getContext"]("webgl2", _0x25426d) : _0x1b1213["getContext"]("webgl", _0x25426d);
    if (!_0x28fc46) return 0;
    var _0x38b3b1 = _0x4a7ef5["registerContext"](_0x28fc46, _0x25426d);
    return _0x38b3b1;
  }, registerContext: function (_0x476682, _0x3b5b26) {
    var _0x454e83 = _0x4a7ef5["getNewId"](_0x4a7ef5["contexts"]), _0x434967 = {handle: _0x454e83, attributes: _0x3b5b26, version: _0x3b5b26["majorVersion"], GLctx: _0x476682};
    if (_0x476682["canvas"]) _0x476682["canvas"]["GLctxObject"] = _0x434967;
    _0x4a7ef5["contexts"][_0x454e83] = _0x434967;
    (typeof _0x3b5b26["enableExtensionsByDefault"] === "undefined" || _0x3b5b26["enableExtensionsByDefault"]) && _0x4a7ef5["initExtensions"](_0x434967);
    _0x434967["maxVertexAttribs"] = _0x434967["GLctx"]["getParameter"](34921), _0x434967["clientBuffers"] = [];
    for (var _0x12747f = 0; _0x12747f < _0x434967["maxVertexAttribs"]; _0x12747f++) {
      _0x434967["clientBuffers"][_0x12747f] = {enabled: ![], clientside: ![], size: 0, type: 0, normalized: 0, stride: 0, ptr: 0, vertexAttribPointerAdaptor: null};
    }
    return _0x4a7ef5["generateTempBuffers"](![], _0x434967), _0x454e83;
  }, makeContextCurrent: function (_0x5dbe6f) {
    return _0x4a7ef5["currentContext"] = _0x4a7ef5["contexts"][_0x5dbe6f], _0x3d01d3["ctx"] = _0x499cc5 = _0x4a7ef5["currentContext"] && _0x4a7ef5["currentContext"]["GLctx"], !(_0x5dbe6f && !_0x499cc5);
  }, getContext: function (_0xa17eef) {
    return _0x4a7ef5["contexts"][_0xa17eef];
  }, deleteContext: function (_0x4a7ee2) {
    if (_0x4a7ef5["currentContext"] === _0x4a7ef5["contexts"][_0x4a7ee2]) _0x4a7ef5["currentContext"] = null;
    if (typeof _0x38c1b7 === "object") _0x38c1b7["removeAllHandlersOnTarget"](_0x4a7ef5["contexts"][_0x4a7ee2]["GLctx"]["canvas"]);
    if (_0x4a7ef5["contexts"][_0x4a7ee2] && _0x4a7ef5["contexts"][_0x4a7ee2]["GLctx"]["canvas"]) _0x4a7ef5["contexts"][_0x4a7ee2]["GLctx"]["canvas"]["GLctxObject"] = undefined;
    _0x4a7ef5["contexts"][_0x4a7ee2] = null;
  }, initExtensions: function (_0x2436c3) {
    if (!_0x2436c3) _0x2436c3 = _0x4a7ef5["currentContext"];
    if (_0x2436c3["initExtensionsDone"]) return;
    _0x2436c3["initExtensionsDone"] = !![];
    var _0x3a0cef = _0x2436c3["GLctx"];
    _0x24375b(_0x3a0cef), _0x5c4718(_0x3a0cef), _0x9b5fbc(_0x3a0cef), _0x43830f(_0x3a0cef), _0xffa0b0(_0x3a0cef);
    _0x2436c3["version"] >= 2 && (_0x3a0cef["disjointTimerQueryExt"] = _0x3a0cef["getExtension"]("EXT_disjoint_timer_query_webgl2"));
    (_0x2436c3["version"] < 2 || !_0x3a0cef["disjointTimerQueryExt"]) && (_0x3a0cef["disjointTimerQueryExt"] = _0x3a0cef["getExtension"]("EXT_disjoint_timer_query"));
    _0x1d2201(_0x3a0cef);
    var _0xa3599b = _0x3a0cef["getSupportedExtensions"]() || [];
    _0xa3599b["forEach"](function (_0x4b3646) {
      !_0x4b3646["includes"]("lose_context") && !_0x4b3646["includes"]("debug") && _0x3a0cef["getExtension"](_0x4b3646);
    });
  }}, _0x26e188 = ["default", "low-power", "high-performance"];
  function _0x53678f(_0x330723, _0x3ee836) {
    var _0x2b55f8 = _0x3ee836 >> 2, _0x59e9ce = _0x5f4233[_0x2b55f8 + (24 >> 2)], _0x327b69 = {alpha: !!_0x5f4233[_0x2b55f8 + (0 >> 2)], depth: !!_0x5f4233[_0x2b55f8 + (4 >> 2)], stencil: !!_0x5f4233[_0x2b55f8 + (8 >> 2)], antialias: !!_0x5f4233[_0x2b55f8 + (12 >> 2)], premultipliedAlpha: !!_0x5f4233[_0x2b55f8 + (16 >> 2)], preserveDrawingBuffer: !!_0x5f4233[_0x2b55f8 + (20 >> 2)], powerPreference: _0x26e188[_0x59e9ce], failIfMajorPerformanceCaveat: !!_0x5f4233[_0x2b55f8 + (28 >> 2)], majorVersion: _0x5f4233[_0x2b55f8 + (32 >> 2)], minorVersion: _0x5f4233[_0x2b55f8 + (36 >> 2)], enableExtensionsByDefault: _0x5f4233[_0x2b55f8 + (40 >> 2)], explicitSwapControl: _0x5f4233[_0x2b55f8 + (44 >> 2)], proxyContextToMainThread: _0x5f4233[_0x2b55f8 + (48 >> 2)], renderViaOffscreenBackBuffer: _0x5f4233[_0x2b55f8 + (52 >> 2)]}, _0x5c879b = _0x257686(_0x330723);
    if (!_0x5c879b) return 0;
    if (_0x327b69["explicitSwapControl"]) return 0;
    var _0x1e860b = _0x4a7ef5["createContext"](_0x5c879b, _0x327b69);
    return _0x1e860b;
  }
  function _0x5378e1(_0x450550, _0x3f4ade) {
    return _0x53678f(_0x450550, _0x3f4ade);
  }
  function _0x147051() {
    return _0x4a7ef5["currentContext"] ? _0x4a7ef5["currentContext"]["handle"] : 0;
  }
  function _0x128b7e() {
    return _0x147051();
  }
  _0x3d01d3["_emscripten_webgl_get_current_context"] = _0x128b7e;
  function _0x1da67b(_0x4ba189) {
    var _0x22ad03 = _0x4a7ef5["makeContextCurrent"](_0x4ba189);
    return _0x22ad03 ? 0 : -5;
  }
  _0x3d01d3["_emscripten_webgl_make_context_current"] = _0x1da67b;
  function _0x5efd18(_0x177dfd) {
    if (_0x4a7ef5["currentContext"] == _0x177dfd) _0x4a7ef5["currentContext"] = 0;
    _0x4a7ef5["deleteContext"](_0x177dfd);
  }
  function _0x641d76(_0x357a8f, _0x581c4f) {
    var _0x482951 = _0x4a7ef5["getContext"](_0x357a8f), _0x102840 = _0x5a9382(_0x581c4f);
    if (_0x102840["startsWith"]("GL_")) _0x102840 = _0x102840["substr"](3);
    if (_0x102840 == "ANGLE_instanced_arrays") _0x24375b(_0x499cc5);
    if (_0x102840 == "OES_vertex_array_object") _0x5c4718(_0x499cc5);
    if (_0x102840 == "WEBGL_draw_buffers") _0x9b5fbc(_0x499cc5);
    if (_0x102840 == "WEBGL_draw_instanced_base_vertex_base_instance") _0x43830f(_0x499cc5);
    if (_0x102840 == "WEBGL_multi_draw_instanced_base_vertex_base_instance") _0xffa0b0(_0x499cc5);
    if (_0x102840 == "WEBGL_multi_draw") _0x1d2201(_0x499cc5);
    var _0x3706c3 = _0x482951["GLctx"]["getExtension"](_0x102840);
    return !!_0x3706c3;
  }
  function _0x407270(_0x42e499) {
    var _0x5d7c3b = _0x42e499 >> 2;
    for (var _0xfd2818 = 0; _0xfd2818 < 56 >> 2; ++_0xfd2818) {
      _0x5f4233[_0x5d7c3b + _0xfd2818] = 0;
    }
    _0x5f4233[_0x5d7c3b + (0 >> 2)] = _0x5f4233[_0x5d7c3b + (4 >> 2)] = _0x5f4233[_0x5d7c3b + (12 >> 2)] = _0x5f4233[_0x5d7c3b + (16 >> 2)] = _0x5f4233[_0x5d7c3b + (32 >> 2)] = _0x5f4233[_0x5d7c3b + (40 >> 2)] = 1;
  }
  var _0x227b3d = {};
  function _0x2fc97b() {
    return _0x49477b || "./this.program";
  }
  function _0x4c0b85() {
    if (!_0x4c0b85["strings"]) {
      var _0x28c840 = (typeof navigator === "object" && navigator["languages"] && navigator["languages"][0] || "C")["replace"]("-", "_") + ".UTF-8", _0x41034e = {USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: _0x28c840, _: _0x2fc97b()};
      for (var _0x114bc0 in _0x227b3d) {
        _0x41034e[_0x114bc0] = _0x227b3d[_0x114bc0];
      }
      var _0x493d68 = [];
      for (var _0x114bc0 in _0x41034e) {
        _0x493d68["push"](_0x114bc0 + "=" + _0x41034e[_0x114bc0]);
      }
      _0x4c0b85["strings"] = _0x493d68;
    }
    return _0x4c0b85["strings"];
  }
  function _0x24a800(_0x43d3a8, _0x34f716) {
    try {
      var _0x295b76 = 0;
      return _0x4c0b85()["forEach"](function (_0x1f7533, _0x37e909) {
        var _0x244d48 = _0x34f716 + _0x295b76;
        _0x5f4233[_0x43d3a8 + _0x37e909 * 4 >> 2] = _0x244d48, _0x2a9374(_0x1f7533, _0x244d48), _0x295b76 += _0x1f7533["length"] + 1;
      }), 0;
    } catch (_0x7bc845) {
      if (typeof _0x37953b === "undefined" || !(_0x7bc845 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x7bc845);
      return _0x7bc845["errno"];
    }
  }
  function _0xdb9f8a(_0x3330d2, _0x4519bb) {
    try {
      var _0xba2232 = _0x4c0b85();
      _0x5f4233[_0x3330d2 >> 2] = _0xba2232["length"];
      var _0x4220ad = 0;
      return _0xba2232["forEach"](function (_0x163a61) {
        _0x4220ad += _0x163a61["length"] + 1;
      }), _0x5f4233[_0x4519bb >> 2] = _0x4220ad, 0;
    } catch (_0x39cf85) {
      if (typeof _0x37953b === "undefined" || !(_0x39cf85 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x39cf85);
      return _0x39cf85["errno"];
    }
  }
  function _0x5eb503(_0x6d8119) {
    try {
      var _0x9b025c = _0x315b4e["getStreamFromFD"](_0x6d8119);
      return _0x37953b["close"](_0x9b025c), 0;
    } catch (_0x22d57e) {
      if (typeof _0x37953b === "undefined" || !(_0x22d57e instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x22d57e);
      return _0x22d57e["errno"];
    }
  }
  function _0x417cdf(_0x32a5a0, _0x11da79) {
    try {
      var _0x2d961c = _0x315b4e["getStreamFromFD"](_0x32a5a0), _0x7a7ee6 = _0x2d961c["tty"] ? 2 : _0x37953b["isDir"](_0x2d961c["mode"]) ? 3 : _0x37953b["isLink"](_0x2d961c["mode"]) ? 7 : 4;
      return _0x2c8e41[_0x11da79 >> 0] = _0x7a7ee6, 0;
    } catch (_0x107b88) {
      if (typeof _0x37953b === "undefined" || !(_0x107b88 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x107b88);
      return _0x107b88["errno"];
    }
  }
  function _0x3a4345(_0x18971d, _0x55b6c1, _0x32ad58, _0x379581) {
    try {
      var _0x46a3dd = _0x315b4e["getStreamFromFD"](_0x18971d), _0x639ac9 = _0x315b4e["doReadv"](_0x46a3dd, _0x55b6c1, _0x32ad58);
      return _0x5f4233[_0x379581 >> 2] = _0x639ac9, 0;
    } catch (_0xcb79de) {
      if (typeof _0x37953b === "undefined" || !(_0xcb79de instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0xcb79de);
      return _0xcb79de["errno"];
    }
  }
  function _0x2dfba0(_0x30f138, _0x193c57, _0x551f9a, _0x4ae723, _0x16c637) {
    try {
      var _0x531615 = _0x315b4e["getStreamFromFD"](_0x30f138), _0xea78f0 = 4294967296, _0x3d6976 = _0x551f9a * _0xea78f0 + (_0x193c57 >>> 0), _0x15924c = 0x20000000000000;
      if (_0x3d6976 <= -_0x15924c || _0x3d6976 >= _0x15924c) return -61;
      _0x37953b["llseek"](_0x531615, _0x3d6976, _0x4ae723), (_0x437765 = [_0x531615["position"] >>> 0, (_0x2eda49 = _0x531615["position"], +Math["abs"](_0x2eda49) >= 1 ? _0x2eda49 > 0 ? (Math["min"](+Math["floor"](_0x2eda49 / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math["ceil"]((_0x2eda49 - +(~~_0x2eda49 >>> 0)) / 4294967296) >>> 0 : 0)], _0x5f4233[_0x16c637 >> 2] = _0x437765[0], _0x5f4233[_0x16c637 + 4 >> 2] = _0x437765[1]);
      if (_0x531615["getdents"] && _0x3d6976 === 0 && _0x4ae723 === 0) _0x531615["getdents"] = null;
      return 0;
    } catch (_0x56b2c0) {
      if (typeof _0x37953b === "undefined" || !(_0x56b2c0 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x56b2c0);
      return _0x56b2c0["errno"];
    }
  }
  function _0x447c5a(_0xea5d4e, _0x4870cd, _0x1075fb, _0x3ed876) {
    try {
      var _0x1a2b84 = _0x315b4e["getStreamFromFD"](_0xea5d4e), _0x44e1bf = _0x315b4e["doWritev"](_0x1a2b84, _0x4870cd, _0x1075fb);
      return _0x5f4233[_0x3ed876 >> 2] = _0x44e1bf, 0;
    } catch (_0x39dd20) {
      if (typeof _0x37953b === "undefined" || !(_0x39dd20 instanceof _0x37953b["ErrnoError"])) _0x4c406f(_0x39dd20);
      return _0x39dd20["errno"];
    }
  }
  function _0xd140b7(_0x4cda55, _0x27cf3d) {
    return 0;
  }
  function _0x159e60() {
    return _0x6762fc();
  }
  function _0x4f8f4a(_0x15e01e, _0x44607c, _0x211671, _0x5127b3) {
    var _0x569814 = 0, _0x370f4e = 0, _0x321c76 = 0, _0x65c485 = 0, _0x452081 = 0, _0x1483db = 0, _0x5acd37;
    function _0x447ea2(_0x2bf6d7, _0x2a665a, _0x4c1786, _0x22e7d9, _0x1ae936, _0x377013) {
      var _0x356be2, _0x2823b6, _0x1a88ef, _0x490a02;
      return _0x2823b6 = _0x2bf6d7 === 10 ? 28 : 16, _0x1ae936 = _0x2bf6d7 === 10 ? _0x39b5e8(_0x1ae936) : _0x237540(_0x1ae936), _0x356be2 = _0x499029(_0x2823b6), _0x490a02 = _0x5b019b(_0x356be2, _0x2bf6d7, _0x1ae936, _0x377013), _0x1e763e(!_0x490a02), _0x1a88ef = _0x499029(32), _0x5f4233[_0x1a88ef + 4 >> 2] = _0x2bf6d7, _0x5f4233[_0x1a88ef + 8 >> 2] = _0x2a665a, _0x5f4233[_0x1a88ef + 12 >> 2] = _0x4c1786, _0x5f4233[_0x1a88ef + 24 >> 2] = _0x22e7d9, _0x5f4233[_0x1a88ef + 20 >> 2] = _0x356be2, _0x2bf6d7 === 10 ? _0x5f4233[_0x1a88ef + 16 >> 2] = 28 : _0x5f4233[_0x1a88ef + 16 >> 2] = 16, _0x5f4233[_0x1a88ef + 28 >> 2] = 0, _0x1a88ef;
    }
    _0x211671 && (_0x321c76 = _0x5f4233[_0x211671 >> 2], _0x65c485 = _0x5f4233[_0x211671 + 4 >> 2], _0x452081 = _0x5f4233[_0x211671 + 8 >> 2], _0x1483db = _0x5f4233[_0x211671 + 12 >> 2]);
    _0x452081 && !_0x1483db && (_0x1483db = _0x452081 === 2 ? 17 : 6);
    !_0x452081 && _0x1483db && (_0x452081 = _0x1483db === 17 ? 2 : 1);
    _0x1483db === 0 && (_0x1483db = 6);
    _0x452081 === 0 && (_0x452081 = 1);
    if (!_0x15e01e && !_0x44607c) return -2;
    if (_0x321c76 & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) return -1;
    if (_0x211671 !== 0 && _0x5f4233[_0x211671 >> 2] & 2 && !_0x15e01e) return -1;
    if (_0x321c76 & 32) return -2;
    if (_0x452081 !== 0 && _0x452081 !== 1 && _0x452081 !== 2) return -7;
    if (_0x65c485 !== 0 && _0x65c485 !== 2 && _0x65c485 !== 10) return -6;
    if (_0x44607c) {
      _0x44607c = _0x5a9382(_0x44607c), _0x370f4e = parseInt(_0x44607c, 10);
      if (isNaN(_0x370f4e)) {
        if (_0x321c76 & 1024) return -2;
        return -8;
      }
    }
    if (!_0x15e01e) return _0x65c485 === 0 && (_0x65c485 = 2), (_0x321c76 & 1) === 0 && (_0x65c485 === 2 ? _0x569814 = _0x46c7bd(2130706433) : _0x569814 = [0, 0, 0, 1]), _0x5acd37 = _0x447ea2(_0x65c485, _0x452081, _0x1483db, null, _0x569814, _0x370f4e), _0x5f4233[_0x5127b3 >> 2] = _0x5acd37, 0;
    _0x15e01e = _0x5a9382(_0x15e01e), _0x569814 = _0x1c2716(_0x15e01e);
    if (_0x569814 !== null) {
      if (_0x65c485 === 0 || _0x65c485 === 2) _0x65c485 = 2; else {
        if (_0x65c485 === 10 && _0x321c76 & 8) _0x569814 = [0, 0, _0x46c7bd(65535), _0x569814], _0x65c485 = 10; else return -2;
      }
    } else {
      _0x569814 = _0x18956b(_0x15e01e);
      if (_0x569814 !== null) {
        if (_0x65c485 === 0 || _0x65c485 === 10) _0x65c485 = 10; else return -2;
      }
    }
    if (_0x569814 != null) return _0x5acd37 = _0x447ea2(_0x65c485, _0x452081, _0x1483db, _0x15e01e, _0x569814, _0x370f4e), _0x5f4233[_0x5127b3 >> 2] = _0x5acd37, 0;
    if (_0x321c76 & 4) return -2;
    _0x15e01e = _0x5a8f52["lookup_name"](_0x15e01e), _0x569814 = _0x1c2716(_0x15e01e);
    if (_0x65c485 === 0) _0x65c485 = 2; else _0x65c485 === 10 && (_0x569814 = [0, 0, _0x46c7bd(65535), _0x569814]);
    return _0x5acd37 = _0x447ea2(_0x65c485, _0x452081, _0x1483db, null, _0x569814, _0x370f4e), _0x5f4233[_0x5127b3 >> 2] = _0x5acd37, 0;
  }
  function _0x4de693(_0x22223f) {
    var _0x1fadef = _0x499029(20), _0x8ff3c1 = _0x499029(_0x22223f["length"] + 1);
    _0xf36afc(_0x22223f, _0x8ff3c1, _0x22223f["length"] + 1), _0x5f4233[_0x1fadef >> 2] = _0x8ff3c1;
    var _0x44b337 = _0x499029(4);
    _0x5f4233[_0x44b337 >> 2] = 0, _0x5f4233[_0x1fadef + 4 >> 2] = _0x44b337;
    var _0x247a31 = 2;
    _0x5f4233[_0x1fadef + 8 >> 2] = _0x247a31, _0x5f4233[_0x1fadef + 12 >> 2] = 4;
    var _0x5a0946 = _0x499029(12);
    return _0x5f4233[_0x5a0946 >> 2] = _0x5a0946 + 8, _0x5f4233[_0x5a0946 + 4 >> 2] = 0, _0x5f4233[_0x5a0946 + 8 >> 2] = _0x1c2716(_0x5a8f52["lookup_name"](_0x22223f)), _0x5f4233[_0x1fadef + 16 >> 2] = _0x5a0946, _0x1fadef;
  }
  function _0x190c30(_0x2f0a83, _0x2c0329, _0x324086) {
    if (_0x324086 !== 2) return _0xca8898(5), null;
    _0x2f0a83 = _0x5f4233[_0x2f0a83 >> 2];
    var _0x44d30f = _0x237540(_0x2f0a83), _0x1a6e6e = _0x5a8f52["lookup_addr"](_0x44d30f);
    return _0x1a6e6e && (_0x44d30f = _0x1a6e6e), _0x4de693(_0x44d30f);
  }
  function _0x5d5079(_0x3b7be9) {
    return _0x4de693(_0x5a9382(_0x3b7be9));
  }
  function _0x54a2dd(_0xd41c86, _0x117533, _0x1b8bb5, _0x536678, _0x2ede8b, _0x3c6018, _0x4c6dd9) {
    var _0x852286 = _0x46ca37(_0xd41c86, _0x117533);
    if (_0x852286["errno"]) return -6;
    var _0x5a0ce8 = _0x852286["port"], _0x4e37f4 = _0x852286["addr"], _0x4ab514 = ![];
    if (_0x1b8bb5 && _0x536678) {
      var _0x25aebe;
      if (_0x4c6dd9 & 1 || !(_0x25aebe = _0x5a8f52["lookup_addr"](_0x4e37f4))) {
        if (_0x4c6dd9 & 8) return -2;
      } else _0x4e37f4 = _0x25aebe;
      var _0x109557 = _0xf36afc(_0x4e37f4, _0x1b8bb5, _0x536678);
      _0x109557 + 1 >= _0x536678 && (_0x4ab514 = !![]);
    }
    if (_0x2ede8b && _0x3c6018) {
      _0x5a0ce8 = "" + _0x5a0ce8;
      var _0x109557 = _0xf36afc(_0x5a0ce8, _0x2ede8b, _0x3c6018);
      _0x109557 + 1 >= _0x3c6018 && (_0x4ab514 = !![]);
    }
    if (_0x4ab514) return -12;
    return 0;
  }
  function _0x2092ca() {
    throw "getpwuid: TODO";
  }
  function _0x32342a(_0x5c14c7) {
    var _0x1925c0 = Date["now"]();
    return _0x5f4233[_0x5c14c7 >> 2] = _0x1925c0 / 1e3 | 0, _0x5f4233[_0x5c14c7 + 4 >> 2] = _0x1925c0 % 1e3 * 1e3 | 0, 0;
  }
  function _0x50384c(_0x5d3df6) {
    _0x499cc5["activeTexture"](_0x5d3df6);
  }
  function _0x27956b(_0x50b639, _0x26b448) {
    _0x50b639 = _0x4a7ef5["programs"][_0x50b639], _0x26b448 = _0x4a7ef5["shaders"][_0x26b448], _0x50b639[_0x26b448["shaderType"]] = _0x26b448, _0x499cc5["attachShader"](_0x50b639, _0x26b448);
  }
  function _0x5c84d5(_0x2ee393, _0x127732) {
    _0x499cc5["beginQuery"](_0x2ee393, _0x4a7ef5["queries"][_0x127732]);
  }
  function _0x53f0d0(_0x3a6a3a) {
    _0x499cc5["beginTransformFeedback"](_0x3a6a3a);
  }
  function _0xfde35(_0x5b8af7, _0x647b2d, _0x509ebb) {
    _0x499cc5["bindAttribLocation"](_0x4a7ef5["programs"][_0x5b8af7], _0x647b2d, _0x5a9382(_0x509ebb));
  }
  function _0x1e0ed8(_0x47149a, _0x59c39f) {
    if (_0x47149a == 34962) _0x499cc5["currentArrayBufferBinding"] = _0x59c39f; else _0x47149a == 34963 && (_0x499cc5["currentElementArrayBufferBinding"] = _0x59c39f);
    if (_0x47149a == 35051) _0x499cc5["currentPixelPackBufferBinding"] = _0x59c39f; else _0x47149a == 35052 && (_0x499cc5["currentPixelUnpackBufferBinding"] = _0x59c39f);
    _0x499cc5["bindBuffer"](_0x47149a, _0x4a7ef5["buffers"][_0x59c39f]);
  }
  function _0x29d07f(_0x32607a, _0x47fc36, _0x5cfdaf) {
    _0x499cc5["bindBufferBase"](_0x32607a, _0x47fc36, _0x4a7ef5["buffers"][_0x5cfdaf]);
  }
  function _0xbbdfb3(_0x1f22ac, _0x40c2f2, _0x1ff9c6, _0x458e16, _0x5da7fd) {
    _0x499cc5["bindBufferRange"](_0x1f22ac, _0x40c2f2, _0x4a7ef5["buffers"][_0x1ff9c6], _0x458e16, _0x5da7fd);
  }
  function _0x5297a9(_0x2d110, _0xb43d26) {
    _0x499cc5["bindFramebuffer"](_0x2d110, _0x4a7ef5["framebuffers"][_0xb43d26]);
  }
  function _0x311db8(_0x2f52b8, _0x108484) {
    _0x499cc5["bindRenderbuffer"](_0x2f52b8, _0x4a7ef5["renderbuffers"][_0x108484]);
  }
  function _0x244cba(_0xf272c9, _0x4ba79b) {
    _0x499cc5["bindSampler"](_0xf272c9, _0x4a7ef5["samplers"][_0x4ba79b]);
  }
  function _0x313ed7(_0x1ae264, _0x107d3c) {
    _0x499cc5["bindTexture"](_0x1ae264, _0x4a7ef5["textures"][_0x107d3c]);
  }
  function _0x3f61c6(_0x47a4ca, _0x117b64) {
    _0x499cc5["bindTransformFeedback"](_0x47a4ca, _0x4a7ef5["transformFeedbacks"][_0x117b64]);
  }
  function _0x528024(_0x3acc0e) {
    _0x499cc5["bindVertexArray"](_0x4a7ef5["vaos"][_0x3acc0e]);
    var _0x2a8839 = _0x499cc5["getParameter"](34965);
    _0x499cc5["currentElementArrayBufferBinding"] = _0x2a8839 ? _0x2a8839["name"] | 0 : 0;
  }
  function _0x567d40(_0x1566c5) {
    _0x499cc5["blendEquation"](_0x1566c5);
  }
  function _0x422f22(_0x5cc02a, _0xfbd7f7) {
    _0x499cc5["blendEquationSeparate"](_0x5cc02a, _0xfbd7f7);
  }
  function _0x4acc87(_0x4f9cb6, _0x5e5333, _0xdf4e7b, _0x20387a) {
    _0x499cc5["blendFuncSeparate"](_0x4f9cb6, _0x5e5333, _0xdf4e7b, _0x20387a);
  }
  function _0x45afc2(_0x5f22c1, _0x252f0b, _0x59e91a, _0x3da847, _0x44a225, _0xc0fbad, _0x610e43, _0x375729, _0x59c4dc, _0x448a01) {
    _0x499cc5["blitFramebuffer"](_0x5f22c1, _0x252f0b, _0x59e91a, _0x3da847, _0x44a225, _0xc0fbad, _0x610e43, _0x375729, _0x59c4dc, _0x448a01);
  }
  function _0x534f9e(_0x3be258, _0x45aa2f, _0x3123f0, _0x1aadf3) {
    _0x4a7ef5["currentContext"]["version"] >= 2 ? _0x3123f0 ? _0x499cc5["bufferData"](_0x3be258, _0x1c2f04, _0x1aadf3, _0x3123f0, _0x45aa2f) : _0x499cc5["bufferData"](_0x3be258, _0x45aa2f, _0x1aadf3) : _0x499cc5["bufferData"](_0x3be258, _0x3123f0 ? _0x1c2f04["subarray"](_0x3123f0, _0x3123f0 + _0x45aa2f) : _0x45aa2f, _0x1aadf3);
  }
  function _0x3bf32e(_0x43524b, _0x4f8c56, _0x172451, _0x92963) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["bufferSubData"](_0x43524b, _0x4f8c56, _0x1c2f04, _0x92963, _0x172451);
      return;
    }
    _0x499cc5["bufferSubData"](_0x43524b, _0x4f8c56, _0x1c2f04["subarray"](_0x92963, _0x92963 + _0x172451));
  }
  function _0xa3b158(_0x118680) {
    return _0x499cc5["checkFramebufferStatus"](_0x118680);
  }
  function _0x30e79f(_0x16ba12) {
    _0x499cc5["clear"](_0x16ba12);
  }
  function _0x3366a5(_0x1dd6cf, _0x243dad, _0x4d9f85, _0x128300) {
    _0x499cc5["clearBufferfi"](_0x1dd6cf, _0x243dad, _0x4d9f85, _0x128300);
  }
  function _0x4bf27d(_0x458df7, _0x5e4dae, _0x1fe685) {
    _0x499cc5["clearBufferfv"](_0x458df7, _0x5e4dae, _0x55bdf6, _0x1fe685 >> 2);
  }
  function _0x224c58(_0x471e45, _0x1ff0d0, _0x1c5acf) {
    _0x499cc5["clearBufferuiv"](_0x471e45, _0x1ff0d0, _0x9bfde5, _0x1c5acf >> 2);
  }
  function _0x2657cd(_0x5dc6a0, _0xb30dff, _0x1ed679, _0x395525) {
    _0x499cc5["clearColor"](_0x5dc6a0, _0xb30dff, _0x1ed679, _0x395525);
  }
  function _0x55c042(_0x400361) {
    _0x499cc5["clearDepth"](_0x400361);
  }
  function _0x2a26de(_0x4a2672) {
    _0x499cc5["clearStencil"](_0x4a2672);
  }
  function _0x5838ee(_0x36d7f9, _0x5d5b02, _0x685692, _0x3623bc) {
    return _0x499cc5["clientWaitSync"](_0x4a7ef5["syncs"][_0x36d7f9], _0x5d5b02, _0x1f97b0(_0x685692, _0x3623bc));
  }
  function _0x55759f(_0x4b7740, _0x3bc7d8, _0x7fed1c, _0x32446b) {
    _0x499cc5["colorMask"](!!_0x4b7740, !!_0x3bc7d8, !!_0x7fed1c, !!_0x32446b);
  }
  function _0x345ead(_0x5ef0bd) {
    _0x499cc5["compileShader"](_0x4a7ef5["shaders"][_0x5ef0bd]);
  }
  function _0x26b924(_0x20ac06, _0x24bce2, _0x57a180, _0x1c9af3, _0x4dc5e5, _0x1a3ec4, _0x2a30e8, _0x17c63a) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["currentPixelUnpackBufferBinding"] ? _0x499cc5["compressedTexImage2D"](_0x20ac06, _0x24bce2, _0x57a180, _0x1c9af3, _0x4dc5e5, _0x1a3ec4, _0x2a30e8, _0x17c63a) : _0x499cc5["compressedTexImage2D"](_0x20ac06, _0x24bce2, _0x57a180, _0x1c9af3, _0x4dc5e5, _0x1a3ec4, _0x1c2f04, _0x17c63a, _0x2a30e8);
      return;
    }
    _0x499cc5["compressedTexImage2D"](_0x20ac06, _0x24bce2, _0x57a180, _0x1c9af3, _0x4dc5e5, _0x1a3ec4, _0x17c63a ? _0x1c2f04["subarray"](_0x17c63a, _0x17c63a + _0x2a30e8) : null);
  }
  function _0x1e7a17(_0x232119, _0x25e908, _0x4d441e, _0x3bf8aa, _0xb45a67, _0x22bd4f, _0x22ab1a, _0x5d39a9, _0x1a5e50) {
    _0x499cc5["currentPixelUnpackBufferBinding"] ? _0x499cc5["compressedTexImage3D"](_0x232119, _0x25e908, _0x4d441e, _0x3bf8aa, _0xb45a67, _0x22bd4f, _0x22ab1a, _0x5d39a9, _0x1a5e50) : _0x499cc5["compressedTexImage3D"](_0x232119, _0x25e908, _0x4d441e, _0x3bf8aa, _0xb45a67, _0x22bd4f, _0x22ab1a, _0x1c2f04, _0x1a5e50, _0x5d39a9);
  }
  function _0x512ce6(_0x1945df, _0x3992f0, _0x45d02a, _0xe8aa55, _0x42b830, _0x33248b, _0x3dd755, _0x42e2ac, _0x3fa4b3) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["currentPixelUnpackBufferBinding"] ? _0x499cc5["compressedTexSubImage2D"](_0x1945df, _0x3992f0, _0x45d02a, _0xe8aa55, _0x42b830, _0x33248b, _0x3dd755, _0x42e2ac, _0x3fa4b3) : _0x499cc5["compressedTexSubImage2D"](_0x1945df, _0x3992f0, _0x45d02a, _0xe8aa55, _0x42b830, _0x33248b, _0x3dd755, _0x1c2f04, _0x3fa4b3, _0x42e2ac);
      return;
    }
    _0x499cc5["compressedTexSubImage2D"](_0x1945df, _0x3992f0, _0x45d02a, _0xe8aa55, _0x42b830, _0x33248b, _0x3dd755, _0x3fa4b3 ? _0x1c2f04["subarray"](_0x3fa4b3, _0x3fa4b3 + _0x42e2ac) : null);
  }
  function _0x2bb57a(_0x10aa34, _0x23c5a4, _0x3514c3, _0x3682d5, _0x1e53d1, _0x12a98c, _0x2c4379, _0x3aa9bb, _0x142fa4, _0x11d277, _0x403cdd) {
    _0x499cc5["currentPixelUnpackBufferBinding"] ? _0x499cc5["compressedTexSubImage3D"](_0x10aa34, _0x23c5a4, _0x3514c3, _0x3682d5, _0x1e53d1, _0x12a98c, _0x2c4379, _0x3aa9bb, _0x142fa4, _0x11d277, _0x403cdd) : _0x499cc5["compressedTexSubImage3D"](_0x10aa34, _0x23c5a4, _0x3514c3, _0x3682d5, _0x1e53d1, _0x12a98c, _0x2c4379, _0x3aa9bb, _0x142fa4, _0x1c2f04, _0x403cdd, _0x11d277);
  }
  function _0x5ca455(_0x27ce2f, _0x47de98, _0xf06902, _0x171b7c, _0x3b229c) {
    _0x499cc5["copyBufferSubData"](_0x27ce2f, _0x47de98, _0xf06902, _0x171b7c, _0x3b229c);
  }
  function _0x30fc00(_0x25af0a, _0x55ecea, _0xe0b679, _0x54416b, _0x73854a, _0x1c3167, _0x18f457, _0x1d8abe) {
    _0x499cc5["copyTexImage2D"](_0x25af0a, _0x55ecea, _0xe0b679, _0x54416b, _0x73854a, _0x1c3167, _0x18f457, _0x1d8abe);
  }
  function _0x31da64(_0x5b4ab4, _0x13b871, _0x5a9dd0, _0x48ec62, _0x4598dd, _0x2e587f, _0x2e6bb2, _0x4e1a15) {
    _0x499cc5["copyTexSubImage2D"](_0x5b4ab4, _0x13b871, _0x5a9dd0, _0x48ec62, _0x4598dd, _0x2e587f, _0x2e6bb2, _0x4e1a15);
  }
  function _0x3b3018() {
    var _0x36f181 = _0x4a7ef5["getNewId"](_0x4a7ef5["programs"]), _0x49ed0e = _0x499cc5["createProgram"]();
    return _0x49ed0e["name"] = _0x36f181, _0x49ed0e["maxUniformLength"] = _0x49ed0e["maxAttributeLength"] = _0x49ed0e["maxUniformBlockNameLength"] = 0, _0x49ed0e["uniformIdCounter"] = 1, _0x4a7ef5["programs"][_0x36f181] = _0x49ed0e, _0x36f181;
  }
  function _0x3e3757(_0x514c07) {
    var _0x1b5cc9 = _0x4a7ef5["getNewId"](_0x4a7ef5["shaders"]);
    return _0x4a7ef5["shaders"][_0x1b5cc9] = _0x499cc5["createShader"](_0x514c07), _0x4a7ef5["shaders"][_0x1b5cc9]["shaderType"] = _0x514c07 & 1 ? "vs" : "fs", _0x1b5cc9;
  }
  function _0x5a25fe(_0x2fdd02) {
    _0x499cc5["cullFace"](_0x2fdd02);
  }
  function _0x4d974a(_0x3f142f, _0x86399e) {
    for (var _0x2d0a63 = 0; _0x2d0a63 < _0x3f142f; _0x2d0a63++) {
      var _0xf2308e = _0x5f4233[_0x86399e + _0x2d0a63 * 4 >> 2], _0x320182 = _0x4a7ef5["buffers"][_0xf2308e];
      if (!_0x320182) continue;
      _0x499cc5["deleteBuffer"](_0x320182), _0x320182["name"] = 0, _0x4a7ef5["buffers"][_0xf2308e] = null;
      if (_0xf2308e == _0x499cc5["currentArrayBufferBinding"]) _0x499cc5["currentArrayBufferBinding"] = 0;
      if (_0xf2308e == _0x499cc5["currentElementArrayBufferBinding"]) _0x499cc5["currentElementArrayBufferBinding"] = 0;
      if (_0xf2308e == _0x499cc5["currentPixelPackBufferBinding"]) _0x499cc5["currentPixelPackBufferBinding"] = 0;
      if (_0xf2308e == _0x499cc5["currentPixelUnpackBufferBinding"]) _0x499cc5["currentPixelUnpackBufferBinding"] = 0;
    }
  }
  function _0x3311b5(_0x2b7d77, _0x1842be) {
    for (var _0xdc24cd = 0; _0xdc24cd < _0x2b7d77; ++_0xdc24cd) {
      var _0x1a3939 = _0x5f4233[_0x1842be + _0xdc24cd * 4 >> 2], _0x5ec42e = _0x4a7ef5["framebuffers"][_0x1a3939];
      if (!_0x5ec42e) continue;
      _0x499cc5["deleteFramebuffer"](_0x5ec42e), _0x5ec42e["name"] = 0, _0x4a7ef5["framebuffers"][_0x1a3939] = null;
    }
  }
  function _0xcd3bbd(_0x6f307b) {
    if (!_0x6f307b) return;
    var _0x4221f7 = _0x4a7ef5["programs"][_0x6f307b];
    if (!_0x4221f7) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x499cc5["deleteProgram"](_0x4221f7), _0x4221f7["name"] = 0, _0x4a7ef5["programs"][_0x6f307b] = null;
  }
  function _0x41bc0e(_0xb90680, _0x1bbb43) {
    for (var _0x20e9e7 = 0; _0x20e9e7 < _0xb90680; _0x20e9e7++) {
      var _0x9ee7ba = _0x5f4233[_0x1bbb43 + _0x20e9e7 * 4 >> 2], _0x2ce520 = _0x4a7ef5["queries"][_0x9ee7ba];
      if (!_0x2ce520) continue;
      _0x499cc5["deleteQuery"](_0x2ce520), _0x4a7ef5["queries"][_0x9ee7ba] = null;
    }
  }
  function _0x5822dc(_0x3c07a8, _0x1f2f4b) {
    for (var _0x198fa9 = 0; _0x198fa9 < _0x3c07a8; _0x198fa9++) {
      var _0x55bb17 = _0x5f4233[_0x1f2f4b + _0x198fa9 * 4 >> 2], _0x4b5489 = _0x4a7ef5["renderbuffers"][_0x55bb17];
      if (!_0x4b5489) continue;
      _0x499cc5["deleteRenderbuffer"](_0x4b5489), _0x4b5489["name"] = 0, _0x4a7ef5["renderbuffers"][_0x55bb17] = null;
    }
  }
  function _0x172337(_0x19fe89, _0x1f1e23) {
    for (var _0x15a389 = 0; _0x15a389 < _0x19fe89; _0x15a389++) {
      var _0x23b09e = _0x5f4233[_0x1f1e23 + _0x15a389 * 4 >> 2], _0x3303a6 = _0x4a7ef5["samplers"][_0x23b09e];
      if (!_0x3303a6) continue;
      _0x499cc5["deleteSampler"](_0x3303a6), _0x3303a6["name"] = 0, _0x4a7ef5["samplers"][_0x23b09e] = null;
    }
  }
  function _0x1b0d45(_0x1f97b5) {
    if (!_0x1f97b5) return;
    var _0x396f70 = _0x4a7ef5["shaders"][_0x1f97b5];
    if (!_0x396f70) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x499cc5["deleteShader"](_0x396f70), _0x4a7ef5["shaders"][_0x1f97b5] = null;
  }
  function _0x25e2d7(_0x5818b5) {
    if (!_0x5818b5) return;
    var _0x48f36d = _0x4a7ef5["syncs"][_0x5818b5];
    if (!_0x48f36d) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x499cc5["deleteSync"](_0x48f36d), _0x48f36d["name"] = 0, _0x4a7ef5["syncs"][_0x5818b5] = null;
  }
  function _0x56f2fd(_0x428709, _0x34a68c) {
    for (var _0x122a51 = 0; _0x122a51 < _0x428709; _0x122a51++) {
      var _0x20a95e = _0x5f4233[_0x34a68c + _0x122a51 * 4 >> 2], _0x402ba8 = _0x4a7ef5["textures"][_0x20a95e];
      if (!_0x402ba8) continue;
      _0x499cc5["deleteTexture"](_0x402ba8), _0x402ba8["name"] = 0, _0x4a7ef5["textures"][_0x20a95e] = null;
    }
  }
  function _0x119b49(_0x4b7856, _0x5f2adf) {
    for (var _0x927a6b = 0; _0x927a6b < _0x4b7856; _0x927a6b++) {
      var _0x3f7d9b = _0x5f4233[_0x5f2adf + _0x927a6b * 4 >> 2], _0x6cce00 = _0x4a7ef5["transformFeedbacks"][_0x3f7d9b];
      if (!_0x6cce00) continue;
      _0x499cc5["deleteTransformFeedback"](_0x6cce00), _0x6cce00["name"] = 0, _0x4a7ef5["transformFeedbacks"][_0x3f7d9b] = null;
    }
  }
  function _0x977eef(_0x45bec4, _0xc8a18) {
    for (var _0x156260 = 0; _0x156260 < _0x45bec4; _0x156260++) {
      var _0x2f10f9 = _0x5f4233[_0xc8a18 + _0x156260 * 4 >> 2];
      _0x499cc5["deleteVertexArray"](_0x4a7ef5["vaos"][_0x2f10f9]), _0x4a7ef5["vaos"][_0x2f10f9] = null;
    }
  }
  function _0x37ba50(_0x36bc9e) {
    _0x499cc5["depthFunc"](_0x36bc9e);
  }
  function _0x1c8241(_0x234992) {
    _0x499cc5["depthMask"](!!_0x234992);
  }
  function _0x1cd350(_0x34bc71, _0x22bd34) {
    _0x499cc5["detachShader"](_0x4a7ef5["programs"][_0x34bc71], _0x4a7ef5["shaders"][_0x22bd34]);
  }
  function _0x5d990a(_0x8a9f2b) {
    _0x499cc5["disable"](_0x8a9f2b);
  }
  function _0x1b0695(_0x35b08e) {
    var _0x4c6157 = _0x4a7ef5["currentContext"]["clientBuffers"][_0x35b08e];
    _0x4c6157["enabled"] = ![], _0x499cc5["disableVertexAttribArray"](_0x35b08e);
  }
  function _0x477874(_0x58a334, _0x51556a, _0x1b2e9a) {
    _0x4a7ef5["preDrawHandleClientVertexAttribBindings"](_0x51556a + _0x1b2e9a), _0x499cc5["drawArrays"](_0x58a334, _0x51556a, _0x1b2e9a), _0x4a7ef5["postDrawHandleClientVertexAttribBindings"]();
  }
  function _0x25bb8d(_0x1f59eb, _0x844ffa, _0x140cd5, _0x4bd141) {
    _0x499cc5["drawArraysInstanced"](_0x1f59eb, _0x844ffa, _0x140cd5, _0x4bd141);
  }
  var _0x25a825 = [];
  function _0x192f2c(_0xa34a9, _0x54bc08) {
    var _0x512f22 = _0x25a825[_0xa34a9];
    for (var _0x69453d = 0; _0x69453d < _0xa34a9; _0x69453d++) {
      _0x512f22[_0x69453d] = _0x5f4233[_0x54bc08 + _0x69453d * 4 >> 2];
    }
    _0x499cc5["drawBuffers"](_0x512f22);
  }
  function _0x17485a(_0xc27562, _0x5a54f3, _0x5c4081, _0x296073) {
    var _0x2830fc;
    if (!_0x499cc5["currentElementArrayBufferBinding"]) {
      var _0xd788c9 = _0x4a7ef5["calcBufLength"](1, _0x5c4081, 0, _0x5a54f3);
      _0x2830fc = _0x4a7ef5["getTempIndexBuffer"](_0xd788c9), _0x499cc5["bindBuffer"](34963, _0x2830fc), _0x499cc5["bufferSubData"](34963, 0, _0x1c2f04["subarray"](_0x296073, _0x296073 + _0xd788c9)), _0x296073 = 0;
    }
    _0x4a7ef5["preDrawHandleClientVertexAttribBindings"](_0x5a54f3), _0x499cc5["drawElements"](_0xc27562, _0x5a54f3, _0x5c4081, _0x296073), _0x4a7ef5["postDrawHandleClientVertexAttribBindings"](_0x5a54f3), !_0x499cc5["currentElementArrayBufferBinding"] && _0x499cc5["bindBuffer"](34963, null);
  }
  function _0x5dbe06(_0x21490c, _0x19d416, _0x248269, _0x4eed4c, _0x248cdd) {
    _0x499cc5["drawElementsInstanced"](_0x21490c, _0x19d416, _0x248269, _0x4eed4c, _0x248cdd);
  }
  function _0x33516e(_0xe7d083) {
    _0x499cc5["enable"](_0xe7d083);
  }
  function _0x5df90b(_0x2e7475) {
    var _0x1ae0c9 = _0x4a7ef5["currentContext"]["clientBuffers"][_0x2e7475];
    _0x1ae0c9["enabled"] = !![], _0x499cc5["enableVertexAttribArray"](_0x2e7475);
  }
  function _0xa5a5a8(_0x47ba17) {
    _0x499cc5["endQuery"](_0x47ba17);
  }
  function _0x3175d0() {
    _0x499cc5["endTransformFeedback"]();
  }
  function _0x3de83c(_0x2ceaf7, _0x214a27) {
    var _0x177fd1 = _0x499cc5["fenceSync"](_0x2ceaf7, _0x214a27);
    if (_0x177fd1) {
      var _0x3cb3d7 = _0x4a7ef5["getNewId"](_0x4a7ef5["syncs"]);
      return _0x177fd1["name"] = _0x3cb3d7, _0x4a7ef5["syncs"][_0x3cb3d7] = _0x177fd1, _0x3cb3d7;
    } else return 0;
  }
  function _0x38b766() {
    _0x499cc5["finish"]();
  }
  function _0x4388d0() {
    _0x499cc5["flush"]();
  }
  function _0x195a17(_0xf69a45) {
    switch (_0xf69a45) {
      case 34962:
        _0xf69a45 = 34964;
        break;
      case 34963:
        _0xf69a45 = 34965;
        break;
      case 35051:
        _0xf69a45 = 35053;
        break;
      case 35052:
        _0xf69a45 = 35055;
        break;
      case 35982:
        _0xf69a45 = 35983;
        break;
      case 36662:
        _0xf69a45 = 36662;
        break;
      case 36663:
        _0xf69a45 = 36663;
        break;
      case 35345:
        _0xf69a45 = 35368;
        break;
    }
    var _0x490274 = _0x499cc5["getParameter"](_0xf69a45);
    if (_0x490274) return _0x490274["name"] | 0; else return 0;
  }
  function _0x5c0bd3(_0x740556) {
    switch (_0x740556) {
      case 34962:
      case 34963:
      case 36662:
      case 36663:
      case 35051:
      case 35052:
      case 35882:
      case 35982:
      case 35345:
        return !![];
      default:
        return ![];
    }
  }
  function _0x3469c4(_0x103d8e, _0x4abdf4, _0x1eb705) {
    if (!_0x5c0bd3(_0x103d8e)) {
      _0x4a7ef5["recordError"](1280), _0x366b43("GL_INVALID_ENUM in glFlushMappedBufferRange");
      return;
    }
    var _0x1c5208 = _0x4a7ef5["mappedBuffers"][_0x195a17(_0x103d8e)];
    if (!_0x1c5208) {
      _0x4a7ef5["recordError"](1282), _0x366b43("buffer was never mapped in glFlushMappedBufferRange");
      return;
    }
    if (!(_0x1c5208["access"] & 16)) {
      _0x4a7ef5["recordError"](1282), _0x366b43("buffer was not mapped with GL_MAP_FLUSH_EXPLICIT_BIT in glFlushMappedBufferRange");
      return;
    }
    if (_0x4abdf4 < 0 || _0x1eb705 < 0 || _0x4abdf4 + _0x1eb705 > _0x1c5208["length"]) {
      _0x4a7ef5["recordError"](1281), _0x366b43("invalid range in glFlushMappedBufferRange");
      return;
    }
    _0x499cc5["bufferSubData"](_0x103d8e, _0x1c5208["offset"], _0x1c2f04["subarray"](_0x1c5208["mem"] + _0x4abdf4, _0x1c5208["mem"] + _0x4abdf4 + _0x1eb705));
  }
  function _0x1f6ef8(_0x22f1ed, _0x3e44f9, _0x5ae953, _0x4a1442) {
    _0x499cc5["framebufferRenderbuffer"](_0x22f1ed, _0x3e44f9, _0x5ae953, _0x4a7ef5["renderbuffers"][_0x4a1442]);
  }
  function _0x15a0b4(_0x39e549, _0x582951, _0x1c4ff4, _0x285f22, _0x322088) {
    _0x499cc5["framebufferTexture2D"](_0x39e549, _0x582951, _0x1c4ff4, _0x4a7ef5["textures"][_0x285f22], _0x322088);
  }
  function _0x480d41(_0x32516f, _0x3fa5b7, _0x5f3977, _0x1ebe84, _0x1e5a2c) {
    _0x499cc5["framebufferTextureLayer"](_0x32516f, _0x3fa5b7, _0x4a7ef5["textures"][_0x5f3977], _0x1ebe84, _0x1e5a2c);
  }
  function _0x366c4d(_0x27a35e) {
    _0x499cc5["frontFace"](_0x27a35e);
  }
  function _0x1faa8f(_0x14ef0f, _0x550f1b, _0x25cc73, _0x1b23de) {
    for (var _0x5e80fd = 0; _0x5e80fd < _0x14ef0f; _0x5e80fd++) {
      var _0x4ac743 = _0x499cc5[_0x25cc73](), _0x834e50 = _0x4ac743 && _0x4a7ef5["getNewId"](_0x1b23de);
      _0x4ac743 ? (_0x4ac743["name"] = _0x834e50, _0x1b23de[_0x834e50] = _0x4ac743) : _0x4a7ef5["recordError"](1282), _0x5f4233[_0x550f1b + _0x5e80fd * 4 >> 2] = _0x834e50;
    }
  }
  function _0x31be3b(_0xd23800, _0x45dc0f) {
    _0x1faa8f(_0xd23800, _0x45dc0f, "createBuffer", _0x4a7ef5["buffers"]);
  }
  function _0x36eb69(_0x57cc74, _0x3ecac1) {
    _0x1faa8f(_0x57cc74, _0x3ecac1, "createFramebuffer", _0x4a7ef5["framebuffers"]);
  }
  function _0x492a8d(_0x24188f, _0x3e8a7a) {
    _0x1faa8f(_0x24188f, _0x3e8a7a, "createQuery", _0x4a7ef5["queries"]);
  }
  function _0x592302(_0x480ed9, _0x9f33a4) {
    _0x1faa8f(_0x480ed9, _0x9f33a4, "createRenderbuffer", _0x4a7ef5["renderbuffers"]);
  }
  function _0x31c232(_0x506a6e, _0x46dca2) {
    _0x1faa8f(_0x506a6e, _0x46dca2, "createSampler", _0x4a7ef5["samplers"]);
  }
  function _0x5b453c(_0x241262, _0x2963f7) {
    _0x1faa8f(_0x241262, _0x2963f7, "createTexture", _0x4a7ef5["textures"]);
  }
  function _0x68fb4(_0x5e286d, _0x583d10) {
    _0x1faa8f(_0x5e286d, _0x583d10, "createTransformFeedback", _0x4a7ef5["transformFeedbacks"]);
  }
  function _0x1470fb(_0x5c05b6, _0x57b020) {
    _0x1faa8f(_0x5c05b6, _0x57b020, "createVertexArray", _0x4a7ef5["vaos"]);
  }
  function _0x4846b1(_0x2db979) {
    _0x499cc5["generateMipmap"](_0x2db979);
  }
  function _0x166658(_0x35127e, _0x3749a6, _0x4436e5, _0x340173, _0x1f9317, _0x28ae93, _0x235720, _0x5e2657) {
    _0x3749a6 = _0x4a7ef5["programs"][_0x3749a6];
    var _0x594bf2 = _0x499cc5[_0x35127e](_0x3749a6, _0x4436e5);
    if (_0x594bf2) {
      var _0x8a199d = _0x5e2657 && _0xf36afc(_0x594bf2["name"], _0x5e2657, _0x340173);
      if (_0x1f9317) _0x5f4233[_0x1f9317 >> 2] = _0x8a199d;
      if (_0x28ae93) _0x5f4233[_0x28ae93 >> 2] = _0x594bf2["size"];
      if (_0x235720) _0x5f4233[_0x235720 >> 2] = _0x594bf2["type"];
    }
  }
  function _0x453eb3(_0x3bb25f, _0x251516, _0x5ec0bf, _0x55b052, _0x208c55, _0x561ea6, _0x7c6360) {
    _0x166658("getActiveAttrib", _0x3bb25f, _0x251516, _0x5ec0bf, _0x55b052, _0x208c55, _0x561ea6, _0x7c6360);
  }
  function _0x2bfd62(_0x44f849, _0x3936b5, _0xb39eb8, _0x492590, _0x1278e1, _0xab71d8, _0x292862) {
    _0x166658("getActiveUniform", _0x44f849, _0x3936b5, _0xb39eb8, _0x492590, _0x1278e1, _0xab71d8, _0x292862);
  }
  function _0x302146(_0xf8dfae, _0x37b4ce, _0x3bc4c9, _0x37b502, _0xd2ad9f) {
    _0xf8dfae = _0x4a7ef5["programs"][_0xf8dfae];
    var _0x55375b = _0x499cc5["getActiveUniformBlockName"](_0xf8dfae, _0x37b4ce);
    if (!_0x55375b) return;
    if (_0xd2ad9f && _0x3bc4c9 > 0) {
      var _0x1fd03c = _0xf36afc(_0x55375b, _0xd2ad9f, _0x3bc4c9);
      if (_0x37b502) _0x5f4233[_0x37b502 >> 2] = _0x1fd03c;
    } else {
      if (_0x37b502) _0x5f4233[_0x37b502 >> 2] = 0;
    }
  }
  function _0x31f402(_0x3f1bfa, _0x98d22b, _0x482070, _0x3ff980) {
    if (!_0x3ff980) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x3f1bfa = _0x4a7ef5["programs"][_0x3f1bfa];
    if (_0x482070 == 35393) {
      var _0x168f77 = _0x499cc5["getActiveUniformBlockName"](_0x3f1bfa, _0x98d22b);
      _0x5f4233[_0x3ff980 >> 2] = _0x168f77["length"] + 1;
      return;
    }
    var _0x4fa828 = _0x499cc5["getActiveUniformBlockParameter"](_0x3f1bfa, _0x98d22b, _0x482070);
    if (_0x4fa828 === null) return;
    if (_0x482070 == 35395) for (var _0x31d75b = 0; _0x31d75b < _0x4fa828["length"]; _0x31d75b++) {
      _0x5f4233[_0x3ff980 + _0x31d75b * 4 >> 2] = _0x4fa828[_0x31d75b];
    } else _0x5f4233[_0x3ff980 >> 2] = _0x4fa828;
  }
  function _0x4c1ca6(_0x174c29, _0xb0d097, _0x23846f, _0x9c4112, _0x395c9) {
    if (!_0x395c9) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    if (_0xb0d097 > 0 && _0x23846f == 0) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x174c29 = _0x4a7ef5["programs"][_0x174c29];
    var _0x2c731e = [];
    for (var _0x3e6862 = 0; _0x3e6862 < _0xb0d097; _0x3e6862++) {
      _0x2c731e["push"](_0x5f4233[_0x23846f + _0x3e6862 * 4 >> 2]);
    }
    var _0x202d93 = _0x499cc5["getActiveUniforms"](_0x174c29, _0x2c731e, _0x9c4112);
    if (!_0x202d93) return;
    var _0x8873ff = _0x202d93["length"];
    for (var _0x3e6862 = 0; _0x3e6862 < _0x8873ff; _0x3e6862++) {
      _0x5f4233[_0x395c9 + _0x3e6862 * 4 >> 2] = _0x202d93[_0x3e6862];
    }
  }
  function _0xb8a6dc(_0x333bb9, _0x40e465) {
    return _0x499cc5["getAttribLocation"](_0x4a7ef5["programs"][_0x333bb9], _0x5a9382(_0x40e465));
  }
  function _0x2de96d(_0x4b0b02, _0x3d2af9, _0x45a660, _0x1a3228) {
    if (!_0x1a3228) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x499cc5["getBufferSubData"](_0x4b0b02, _0x3d2af9, _0x1c2f04, _0x1a3228, _0x45a660);
  }
  function _0x369214() {
    var _0x3a0355 = _0x499cc5["getError"]() || _0x4a7ef5["lastError"];
    return _0x4a7ef5["lastError"] = 0, _0x3a0355;
  }
  function _0x221591(_0x520710, _0x3e87bf, _0x18f754, _0x29b94c) {
    var _0x33be61 = _0x499cc5["getFramebufferAttachmentParameter"](_0x520710, _0x3e87bf, _0x18f754);
    (_0x33be61 instanceof WebGLRenderbuffer || _0x33be61 instanceof WebGLTexture) && (_0x33be61 = _0x33be61["name"] | 0), _0x5f4233[_0x29b94c >> 2] = _0x33be61;
  }
  function _0x379367(_0x41996e, _0x4d03d5) {
    _0x9bfde5[_0x41996e >> 2] = _0x4d03d5, _0x9bfde5[_0x41996e + 4 >> 2] = (_0x4d03d5 - _0x9bfde5[_0x41996e >> 2]) / 4294967296;
  }
  function _0x1bb511(_0x55943b, _0xb90884, _0x380e79, _0x5a1a12) {
    if (!_0x380e79) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    var _0x8608e8 = _0x499cc5["getIndexedParameter"](_0x55943b, _0xb90884), _0x2c7e91;
    switch (typeof _0x8608e8) {
      case "boolean":
        _0x2c7e91 = _0x8608e8 ? 1 : 0;
        break;
      case "number":
        _0x2c7e91 = _0x8608e8;
        break;
      case "object":
        if (_0x8608e8 === null) switch (_0x55943b) {
          case 35983:
          case 35368:
            _0x2c7e91 = 0;
            break;
          default:
            {
              _0x4a7ef5["recordError"](1280);
              return;
            }
        } else {
          if (_0x8608e8 instanceof WebGLBuffer) _0x2c7e91 = _0x8608e8["name"] | 0; else {
            _0x4a7ef5["recordError"](1280);
            return;
          }
        }
        break;
      default:
        _0x4a7ef5["recordError"](1280);
        return;
    }
    switch (_0x5a1a12) {
      case 1:
        _0x379367(_0x380e79, _0x2c7e91);
        break;
      case 0:
        _0x5f4233[_0x380e79 >> 2] = _0x2c7e91;
        break;
      case 2:
        _0x55bdf6[_0x380e79 >> 2] = _0x2c7e91;
        break;
      case 4:
        _0x2c8e41[_0x380e79 >> 0] = _0x2c7e91 ? 1 : 0;
        break;
      default:
        throw "internal emscriptenWebGLGetIndexed() error, bad type: " + _0x5a1a12;
    }
  }
  function _0x52bf5f(_0xc64fa, _0x1cd434, _0xfa1533) {
    _0x1bb511(_0xc64fa, _0x1cd434, _0xfa1533, 0);
  }
  function _0x3e1ec7(_0x3b20e8, _0x551d8e, _0x43d073) {
    if (!_0x551d8e) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    var _0x5e6da5 = undefined;
    switch (_0x3b20e8) {
      case 36346:
        _0x5e6da5 = 1;
        break;
      case 36344:
        _0x43d073 != 0 && _0x43d073 != 1 && _0x4a7ef5["recordError"](1280);
        return;
      case 34814:
      case 36345:
        _0x5e6da5 = 0;
        break;
      case 34466:
        var _0x142ec3 = _0x499cc5["getParameter"](34467);
        _0x5e6da5 = _0x142ec3 ? _0x142ec3["length"] : 0;
        break;
      case 33390:
        _0x5e6da5 = 1048576;
        break;
      case 33309:
        if (_0x4a7ef5["currentContext"]["version"] < 2) {
          _0x4a7ef5["recordError"](1282);
          return;
        }
        var _0x131b29 = _0x499cc5["getSupportedExtensions"]() || [];
        _0x5e6da5 = 2 * _0x131b29["length"];
        break;
      case 33307:
      case 33308:
        if (_0x4a7ef5["currentContext"]["version"] < 2) {
          _0x4a7ef5["recordError"](1280);
          return;
        }
        _0x5e6da5 = _0x3b20e8 == 33307 ? 3 : 0;
        break;
    }
    if (_0x5e6da5 === undefined) {
      var _0x558a0b = _0x499cc5["getParameter"](_0x3b20e8);
      switch (typeof _0x558a0b) {
        case "number":
          _0x5e6da5 = _0x558a0b;
          break;
        case "boolean":
          _0x5e6da5 = _0x558a0b ? 1 : 0;
          break;
        case "string":
          _0x4a7ef5["recordError"](1280);
          return;
        case "object":
          if (_0x558a0b === null) switch (_0x3b20e8) {
            case 34964:
            case 35725:
            case 34965:
            case 36006:
            case 36007:
            case 32873:
            case 34229:
            case 36662:
            case 36663:
            case 35053:
            case 35055:
            case 36010:
            case 35097:
            case 35869:
            case 32874:
            case 36389:
            case 35983:
            case 35368:
            case 34068:
              {
                _0x5e6da5 = 0;
                break;
              }
            default:
              {
                _0x4a7ef5["recordError"](1280);
                return;
              }
          } else {
            if (_0x558a0b instanceof Float32Array || _0x558a0b instanceof Uint32Array || _0x558a0b instanceof Int32Array || _0x558a0b instanceof Array) {
              for (var _0x53cfc2 = 0; _0x53cfc2 < _0x558a0b["length"]; ++_0x53cfc2) {
                switch (_0x43d073) {
                  case 0:
                    _0x5f4233[_0x551d8e + _0x53cfc2 * 4 >> 2] = _0x558a0b[_0x53cfc2];
                    break;
                  case 2:
                    _0x55bdf6[_0x551d8e + _0x53cfc2 * 4 >> 2] = _0x558a0b[_0x53cfc2];
                    break;
                  case 4:
                    _0x2c8e41[_0x551d8e + _0x53cfc2 >> 0] = _0x558a0b[_0x53cfc2] ? 1 : 0;
                    break;
                }
              }
              return;
            } else try {
              _0x5e6da5 = _0x558a0b["name"] | 0;
            } catch (_0x2e1e16) {
              _0x4a7ef5["recordError"](1280), _0x366b43("GL_INVALID_ENUM in glGet" + _0x43d073 + "v: Unknown object returned from WebGL getParameter(" + _0x3b20e8 + ")! (error: " + _0x2e1e16 + ")");
              return;
            }
          }
          break;
        default:
          _0x4a7ef5["recordError"](1280), _0x366b43("GL_INVALID_ENUM in glGet" + _0x43d073 + "v: Native code calling glGet" + _0x43d073 + "v(" + _0x3b20e8 + ") and it returns " + _0x558a0b + " of type " + typeof _0x558a0b + "!");
          return;
      }
    }
    switch (_0x43d073) {
      case 1:
        _0x379367(_0x551d8e, _0x5e6da5);
        break;
      case 0:
        _0x5f4233[_0x551d8e >> 2] = _0x5e6da5;
        break;
      case 2:
        _0x55bdf6[_0x551d8e >> 2] = _0x5e6da5;
        break;
      case 4:
        _0x2c8e41[_0x551d8e >> 0] = _0x5e6da5 ? 1 : 0;
        break;
    }
  }
  function _0x96cbb2(_0x31e2e0, _0x1b8a9e) {
    _0x3e1ec7(_0x31e2e0, _0x1b8a9e, 0);
  }
  function _0x1f0544(_0x5218a1, _0x13ee84, _0x73bf07, _0x489d19, _0x22a0e) {
    if (_0x489d19 < 0) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    if (!_0x22a0e) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    var _0x163a41 = _0x499cc5["getInternalformatParameter"](_0x5218a1, _0x13ee84, _0x73bf07);
    if (_0x163a41 === null) return;
    for (var _0x47cc1c = 0; _0x47cc1c < _0x163a41["length"] && _0x47cc1c < _0x489d19; ++_0x47cc1c) {
      _0x5f4233[_0x22a0e + _0x47cc1c * 4 >> 2] = _0x163a41[_0x47cc1c];
    }
  }
  function _0x2b8f46(_0x14706f, _0x25b3f9, _0x21213a, _0x4414f0, _0x23ca9d) {
    _0x4a7ef5["recordError"](1282);
  }
  function _0x583a39(_0x383df2, _0x580b6f, _0x32e585, _0x565f55) {
    var _0x1f9fe7 = _0x499cc5["getProgramInfoLog"](_0x4a7ef5["programs"][_0x383df2]);
    if (_0x1f9fe7 === null) _0x1f9fe7 = "(unknown error)";
    var _0x18f8a3 = _0x580b6f > 0 && _0x565f55 ? _0xf36afc(_0x1f9fe7, _0x565f55, _0x580b6f) : 0;
    if (_0x32e585) _0x5f4233[_0x32e585 >> 2] = _0x18f8a3;
  }
  function _0x22739b(_0x2af0ed, _0x3269f2, _0x41fb22) {
    if (!_0x41fb22) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    if (_0x2af0ed >= _0x4a7ef5["counter"]) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x2af0ed = _0x4a7ef5["programs"][_0x2af0ed];
    if (_0x3269f2 == 35716) {
      var _0x5bc21f = _0x499cc5["getProgramInfoLog"](_0x2af0ed);
      if (_0x5bc21f === null) _0x5bc21f = "(unknown error)";
      _0x5f4233[_0x41fb22 >> 2] = _0x5bc21f["length"] + 1;
    } else {
      if (_0x3269f2 == 35719) {
        if (!_0x2af0ed["maxUniformLength"]) for (var _0x24ed2b = 0; _0x24ed2b < _0x499cc5["getProgramParameter"](_0x2af0ed, 35718); ++_0x24ed2b) {
          _0x2af0ed["maxUniformLength"] = Math["max"](_0x2af0ed["maxUniformLength"], _0x499cc5["getActiveUniform"](_0x2af0ed, _0x24ed2b)["name"]["length"] + 1);
        }
        _0x5f4233[_0x41fb22 >> 2] = _0x2af0ed["maxUniformLength"];
      } else {
        if (_0x3269f2 == 35722) {
          if (!_0x2af0ed["maxAttributeLength"]) for (var _0x24ed2b = 0; _0x24ed2b < _0x499cc5["getProgramParameter"](_0x2af0ed, 35721); ++_0x24ed2b) {
            _0x2af0ed["maxAttributeLength"] = Math["max"](_0x2af0ed["maxAttributeLength"], _0x499cc5["getActiveAttrib"](_0x2af0ed, _0x24ed2b)["name"]["length"] + 1);
          }
          _0x5f4233[_0x41fb22 >> 2] = _0x2af0ed["maxAttributeLength"];
        } else {
          if (_0x3269f2 == 35381) {
            if (!_0x2af0ed["maxUniformBlockNameLength"]) for (var _0x24ed2b = 0; _0x24ed2b < _0x499cc5["getProgramParameter"](_0x2af0ed, 35382); ++_0x24ed2b) {
              _0x2af0ed["maxUniformBlockNameLength"] = Math["max"](_0x2af0ed["maxUniformBlockNameLength"], _0x499cc5["getActiveUniformBlockName"](_0x2af0ed, _0x24ed2b)["length"] + 1);
            }
            _0x5f4233[_0x41fb22 >> 2] = _0x2af0ed["maxUniformBlockNameLength"];
          } else _0x5f4233[_0x41fb22 >> 2] = _0x499cc5["getProgramParameter"](_0x2af0ed, _0x3269f2);
        }
      }
    }
  }
  function _0x47e084(_0x358f64, _0x29b3fa, _0xd9e47d) {
    if (!_0xd9e47d) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    var _0x16b868 = _0x4a7ef5["queries"][_0x358f64], _0x129cd6 = _0x499cc5["getQueryParameter"](_0x16b868, _0x29b3fa), _0x4eccec;
    typeof _0x129cd6 == "boolean" ? _0x4eccec = _0x129cd6 ? 1 : 0 : _0x4eccec = _0x129cd6, _0x5f4233[_0xd9e47d >> 2] = _0x4eccec;
  }
  function _0x400b68(_0x27514d, _0x1c0ad6, _0x4ba82a) {
    if (!_0x4ba82a) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x5f4233[_0x4ba82a >> 2] = _0x499cc5["getQuery"](_0x27514d, _0x1c0ad6);
  }
  function _0x3aa0b0(_0x126fb6, _0x1f73fc, _0x1a56c5) {
    if (!_0x1a56c5) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x5f4233[_0x1a56c5 >> 2] = _0x499cc5["getRenderbufferParameter"](_0x126fb6, _0x1f73fc);
  }
  function _0x195cc2(_0x1b0794, _0x556c4f, _0x3da688, _0x1a52a3) {
    var _0x5c37f4 = _0x499cc5["getShaderInfoLog"](_0x4a7ef5["shaders"][_0x1b0794]);
    if (_0x5c37f4 === null) _0x5c37f4 = "(unknown error)";
    var _0x27f09a = _0x556c4f > 0 && _0x1a52a3 ? _0xf36afc(_0x5c37f4, _0x1a52a3, _0x556c4f) : 0;
    if (_0x3da688) _0x5f4233[_0x3da688 >> 2] = _0x27f09a;
  }
  function _0x811687(_0x342ec3, _0x583b50, _0x2bf937, _0x166580) {
    var _0x203e36 = _0x499cc5["getShaderPrecisionFormat"](_0x342ec3, _0x583b50);
    _0x5f4233[_0x2bf937 >> 2] = _0x203e36["rangeMin"], _0x5f4233[_0x2bf937 + 4 >> 2] = _0x203e36["rangeMax"], _0x5f4233[_0x166580 >> 2] = _0x203e36["precision"];
  }
  function _0x5db7a7(_0x53c2c5, _0x4e238c, _0x40b903, _0x536705) {
    var _0x1867df = _0x499cc5["getShaderSource"](_0x4a7ef5["shaders"][_0x53c2c5]);
    if (!_0x1867df) return;
    var _0x3cfc75 = _0x4e238c > 0 && _0x536705 ? _0xf36afc(_0x1867df, _0x536705, _0x4e238c) : 0;
    if (_0x40b903) _0x5f4233[_0x40b903 >> 2] = _0x3cfc75;
  }
  function _0x577599(_0x20a569, _0x22c3a2, _0x5ee2f5) {
    if (!_0x5ee2f5) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    if (_0x22c3a2 == 35716) {
      var _0x46c678 = _0x499cc5["getShaderInfoLog"](_0x4a7ef5["shaders"][_0x20a569]);
      if (_0x46c678 === null) _0x46c678 = "(unknown error)";
      var _0x23e96b = _0x46c678 ? _0x46c678["length"] + 1 : 0;
      _0x5f4233[_0x5ee2f5 >> 2] = _0x23e96b;
    } else {
      if (_0x22c3a2 == 35720) {
        var _0x520df1 = _0x499cc5["getShaderSource"](_0x4a7ef5["shaders"][_0x20a569]), _0x373384 = _0x520df1 ? _0x520df1["length"] + 1 : 0;
        _0x5f4233[_0x5ee2f5 >> 2] = _0x373384;
      } else _0x5f4233[_0x5ee2f5 >> 2] = _0x499cc5["getShaderParameter"](_0x4a7ef5["shaders"][_0x20a569], _0x22c3a2);
    }
  }
  function _0x294185(_0x2929ba) {
    var _0x5094a7 = _0x4a7ef5["stringCache"][_0x2929ba];
    if (!_0x5094a7) {
      switch (_0x2929ba) {
        case 7939:
          var _0x1c25d6 = _0x499cc5["getSupportedExtensions"]() || [];
          _0x1c25d6 = _0x1c25d6["concat"](_0x1c25d6["map"](function (_0x43c941) {
            return "GL_" + _0x43c941;
          })), _0x5094a7 = _0x335fc3(_0x1c25d6["join"](" "));
          break;
        case 7936:
        case 7937:
        case 37445:
        case 37446:
          var _0x4aa194 = _0x499cc5["getParameter"](_0x2929ba);
          !_0x4aa194 && _0x4a7ef5["recordError"](1280);
          _0x5094a7 = _0x4aa194 && _0x335fc3(_0x4aa194);
          break;
        case 7938:
          var _0x59eaae = _0x499cc5["getParameter"](7938);
          if (_0x4a7ef5["currentContext"]["version"] >= 2) _0x59eaae = "OpenGL ES 3.0 (" + _0x59eaae + ")"; else _0x59eaae = "OpenGL ES 2.0 (" + _0x59eaae + ")";
          _0x5094a7 = _0x335fc3(_0x59eaae);
          break;
        case 35724:
          var _0x577c9f = _0x499cc5["getParameter"](35724), _0x1a3ba1 = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/, _0x56caa9 = _0x577c9f["match"](_0x1a3ba1);
          if (_0x56caa9 !== null) {
            if (_0x56caa9[1]["length"] == 3) _0x56caa9[1] = _0x56caa9[1] + "0";
            _0x577c9f = "OpenGL ES GLSL ES " + _0x56caa9[1] + " (" + _0x577c9f + ")";
          }
          _0x5094a7 = _0x335fc3(_0x577c9f);
          break;
        default:
          _0x4a7ef5["recordError"](1280);
      }
      _0x4a7ef5["stringCache"][_0x2929ba] = _0x5094a7;
    }
    return _0x5094a7;
  }
  function _0x4160aa(_0x58a7b5, _0x4522c4) {
    if (_0x4a7ef5["currentContext"]["version"] < 2) return _0x4a7ef5["recordError"](1282), 0;
    var _0x116b47 = _0x4a7ef5["stringiCache"][_0x58a7b5];
    if (_0x116b47) {
      if (_0x4522c4 < 0 || _0x4522c4 >= _0x116b47["length"]) return _0x4a7ef5["recordError"](1281), 0;
      return _0x116b47[_0x4522c4];
    }
    switch (_0x58a7b5) {
      case 7939:
        var _0x596b42 = _0x499cc5["getSupportedExtensions"]() || [];
        _0x596b42 = _0x596b42["concat"](_0x596b42["map"](function (_0xa67bc9) {
          return "GL_" + _0xa67bc9;
        })), _0x596b42 = _0x596b42["map"](function (_0x5912c5) {
          return _0x335fc3(_0x5912c5);
        }), _0x116b47 = _0x4a7ef5["stringiCache"][_0x58a7b5] = _0x596b42;
        if (_0x4522c4 < 0 || _0x4522c4 >= _0x116b47["length"]) return _0x4a7ef5["recordError"](1281), 0;
        return _0x116b47[_0x4522c4];
      default:
        _0x4a7ef5["recordError"](1280);
        return 0;
    }
  }
  function _0x2cc61b(_0x495633, _0xb6ade4, _0x4aad0d) {
    if (!_0x4aad0d) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x5f4233[_0x4aad0d >> 2] = _0x499cc5["getTexParameter"](_0x495633, _0xb6ade4);
  }
  function _0x240a71(_0x3b2e5b, _0x5e6652) {
    return _0x499cc5["getUniformBlockIndex"](_0x4a7ef5["programs"][_0x3b2e5b], _0x5a9382(_0x5e6652));
  }
  function _0x14fe77(_0x1be953, _0x462577, _0x3ac953, _0xbeb94) {
    if (!_0xbeb94) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    if (_0x462577 > 0 && (_0x3ac953 == 0 || _0xbeb94 == 0)) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x1be953 = _0x4a7ef5["programs"][_0x1be953];
    var _0x430c30 = [];
    for (var _0x617736 = 0; _0x617736 < _0x462577; _0x617736++) _0x430c30["push"](_0x5a9382(_0x5f4233[_0x3ac953 + _0x617736 * 4 >> 2]));
    var _0x3945da = _0x499cc5["getUniformIndices"](_0x1be953, _0x430c30);
    if (!_0x3945da) return;
    var _0x359815 = _0x3945da["length"];
    for (var _0x617736 = 0; _0x617736 < _0x359815; _0x617736++) {
      _0x5f4233[_0xbeb94 + _0x617736 * 4 >> 2] = _0x3945da[_0x617736];
    }
  }
  function _0x33fb02(_0x4240af, _0x52d165) {
    function _0x449cff(_0x2484c5) {
      return _0x2484c5["slice"](-1) == "]" && _0x2484c5["lastIndexOf"]("[");
    }
    _0x52d165 = _0x5a9382(_0x52d165);
    if (_0x4240af = _0x4a7ef5["programs"][_0x4240af]) {
      var _0x431f45 = _0x4240af["uniformLocsById"], _0x25e3e0 = _0x4240af["uniformSizeAndIdsByName"], _0x1876be, _0x904748, _0x4e618f = 0, _0x29ad9a = _0x52d165, _0x58a8b2 = _0x449cff(_0x52d165);
      if (!_0x431f45) {
        _0x4240af["uniformLocsById"] = _0x431f45 = {}, _0x4240af["uniformArrayNamesById"] = {};
        for (_0x1876be = 0; _0x1876be < _0x499cc5["getProgramParameter"](_0x4240af, 35718); ++_0x1876be) {
          var _0x3b0564 = _0x499cc5["getActiveUniform"](_0x4240af, _0x1876be), _0x2fff1f = _0x3b0564["name"], _0x54e694 = _0x3b0564["size"], _0x3ed4f5 = _0x449cff(_0x2fff1f), _0x368db3 = _0x3ed4f5 > 0 ? _0x2fff1f["slice"](0, _0x3ed4f5) : _0x2fff1f, _0x4008e3 = _0x25e3e0[_0x368db3] ? _0x25e3e0[_0x368db3][1] : _0x4240af["uniformIdCounter"];
          _0x4240af["uniformIdCounter"] = Math["max"](_0x4008e3 + _0x54e694, _0x4240af["uniformIdCounter"]), _0x25e3e0[_0x368db3] = [_0x54e694, _0x4008e3];
          for (_0x904748 = 0; _0x904748 < _0x54e694; ++_0x904748) {
            _0x431f45[_0x4008e3] = _0x904748, _0x4240af["uniformArrayNamesById"][_0x4008e3++] = _0x368db3;
          }
        }
      }
      _0x58a8b2 > 0 && (_0x4e618f = _0x25f676(_0x52d165["slice"](_0x58a8b2 + 1)) >>> 0, _0x29ad9a = _0x52d165["slice"](0, _0x58a8b2));
      var _0x640c4d = _0x25e3e0[_0x29ad9a];
      if (_0x640c4d && _0x4e618f < _0x640c4d[0]) {
        _0x4e618f += _0x640c4d[1];
        if (_0x431f45[_0x4e618f] = _0x431f45[_0x4e618f] || _0x499cc5["getUniformLocation"](_0x4240af, _0x52d165)) return _0x4e618f;
      }
    } else _0x4a7ef5["recordError"](1281);
    return -1;
  }
  function _0x5b3232(_0x186cbb) {
    var _0x56d6b0 = _0x499cc5["currentProgram"];
    if (_0x56d6b0) {
      var _0x350c57 = _0x56d6b0["uniformLocsById"][_0x186cbb];
      return typeof _0x350c57 === "number" && (_0x56d6b0["uniformLocsById"][_0x186cbb] = _0x350c57 = _0x499cc5["getUniformLocation"](_0x56d6b0, _0x56d6b0["uniformArrayNamesById"][_0x186cbb] + (_0x350c57 > 0 ? "[" + _0x350c57 + "]" : ""))), _0x350c57;
    } else _0x4a7ef5["recordError"](1282);
  }
  function _0x44e4a3(_0x4b8b6b, _0x57b03b, _0x2b57e7, _0x3c3dd6) {
    if (!_0x2b57e7) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x4b8b6b = _0x4a7ef5["programs"][_0x4b8b6b];
    var _0x36e770 = _0x499cc5["getUniform"](_0x4b8b6b, _0x5b3232(_0x57b03b));
    if (typeof _0x36e770 == "number" || typeof _0x36e770 == "boolean") switch (_0x3c3dd6) {
      case 0:
        _0x5f4233[_0x2b57e7 >> 2] = _0x36e770;
        break;
      case 2:
        _0x55bdf6[_0x2b57e7 >> 2] = _0x36e770;
        break;
    } else for (var _0x3826db = 0; _0x3826db < _0x36e770["length"]; _0x3826db++) {
      switch (_0x3c3dd6) {
        case 0:
          _0x5f4233[_0x2b57e7 + _0x3826db * 4 >> 2] = _0x36e770[_0x3826db];
          break;
        case 2:
          _0x55bdf6[_0x2b57e7 + _0x3826db * 4 >> 2] = _0x36e770[_0x3826db];
          break;
      }
    }
  }
  function _0x240ef8(_0xd277df, _0x380fed, _0x5b4ff3) {
    _0x44e4a3(_0xd277df, _0x380fed, _0x5b4ff3, 0);
  }
  function _0x42b7e0(_0x59ded8, _0x206b57, _0x3a819e, _0x5b94a7) {
    if (!_0x3a819e) {
      _0x4a7ef5["recordError"](1281);
      return;
    }
    _0x4a7ef5["currentContext"]["clientBuffers"][_0x59ded8]["enabled"] && _0x366b43("glGetVertexAttrib*v on client-side array: not supported, bad data returned");
    var _0x275d07 = _0x499cc5["getVertexAttrib"](_0x59ded8, _0x206b57);
    if (_0x206b57 == 34975) _0x5f4233[_0x3a819e >> 2] = _0x275d07 && _0x275d07["name"]; else {
      if (typeof _0x275d07 == "number" || typeof _0x275d07 == "boolean") switch (_0x5b94a7) {
        case 0:
          _0x5f4233[_0x3a819e >> 2] = _0x275d07;
          break;
        case 2:
          _0x55bdf6[_0x3a819e >> 2] = _0x275d07;
          break;
        case 5:
          _0x5f4233[_0x3a819e >> 2] = Math["fround"](_0x275d07);
          break;
      } else for (var _0x5cd77e = 0; _0x5cd77e < _0x275d07["length"]; _0x5cd77e++) {
        switch (_0x5b94a7) {
          case 0:
            _0x5f4233[_0x3a819e + _0x5cd77e * 4 >> 2] = _0x275d07[_0x5cd77e];
            break;
          case 2:
            _0x55bdf6[_0x3a819e + _0x5cd77e * 4 >> 2] = _0x275d07[_0x5cd77e];
            break;
          case 5:
            _0x5f4233[_0x3a819e + _0x5cd77e * 4 >> 2] = Math["fround"](_0x275d07[_0x5cd77e]);
            break;
        }
      }
    }
  }
  function _0x1e44db(_0x308940, _0x1d73be, _0x1ca9e3) {
    _0x42b7e0(_0x308940, _0x1d73be, _0x1ca9e3, 5);
  }
  function _0x4723ba(_0x399717, _0x56aab3, _0x48fc77) {
    var _0x226c10 = _0x25a825[_0x56aab3];
    for (var _0x1f3eca = 0; _0x1f3eca < _0x56aab3; _0x1f3eca++) {
      _0x226c10[_0x1f3eca] = _0x5f4233[_0x48fc77 + _0x1f3eca * 4 >> 2];
    }
    _0x499cc5["invalidateFramebuffer"](_0x399717, _0x226c10);
  }
  function _0x293456(_0x157ad4) {
    return _0x499cc5["isEnabled"](_0x157ad4);
  }
  function _0x164c85(_0x523102) {
    var _0x3398de = _0x4a7ef5["vaos"][_0x523102];
    if (!_0x3398de) return 0;
    return _0x499cc5["isVertexArray"](_0x3398de);
  }
  function _0x15c370(_0x1284f6) {
    _0x1284f6 = _0x4a7ef5["programs"][_0x1284f6], _0x499cc5["linkProgram"](_0x1284f6), _0x1284f6["uniformLocsById"] = 0, _0x1284f6["uniformSizeAndIdsByName"] = {}, [_0x1284f6["vs"], _0x1284f6["fs"]]["forEach"](function (_0x39f1c0) {
      Object["keys"](_0x39f1c0["explicitUniformLocations"])["forEach"](function (_0x3f1db7) {
        var _0x1ab26d = _0x39f1c0["explicitUniformLocations"][_0x3f1db7];
        _0x1284f6["uniformSizeAndIdsByName"][_0x3f1db7] = [1, _0x1ab26d], _0x1284f6["uniformIdCounter"] = Math["max"](_0x1284f6["uniformIdCounter"], _0x1ab26d + 1);
      });
    });
    function _0x48459e(_0x594ba0, _0x576f32) {
      Object["keys"](_0x576f32)["forEach"](function (_0x3efab2) {
        _0x594ba0[_0x3efab2] = _0x576f32[_0x3efab2];
      });
    }
    _0x1284f6["explicitUniformBindings"] = {}, _0x1284f6["explicitSamplerBindings"] = {}, [_0x1284f6["vs"], _0x1284f6["fs"]]["forEach"](function (_0x142f75) {
      _0x48459e(_0x1284f6["explicitUniformBindings"], _0x142f75["explicitUniformBindings"]), _0x48459e(_0x1284f6["explicitSamplerBindings"], _0x142f75["explicitSamplerBindings"]);
    }), _0x1284f6["explicitProgramBindingsApplied"] = 0;
  }
  function _0x3388ba(_0xb78567, _0x236327, _0x3f0a43, _0xdd5902) {
    if (_0xdd5902 != 26 && _0xdd5902 != 10) return _0x366b43("glMapBufferRange is only supported when access is MAP_WRITE|INVALIDATE_BUFFER"), 0;
    if (!_0x5c0bd3(_0xb78567)) return _0x4a7ef5["recordError"](1280), _0x366b43("GL_INVALID_ENUM in glMapBufferRange"), 0;
    var _0x47eb05 = _0x499029(_0x3f0a43);
    if (!_0x47eb05) return 0;
    return _0x4a7ef5["mappedBuffers"][_0x195a17(_0xb78567)] = {offset: _0x236327, length: _0x3f0a43, mem: _0x47eb05, access: _0xdd5902}, _0x47eb05;
  }
  function _0x2c1ac0(_0x412756, _0x1f6f04) {
    _0x412756 == 3317 && (_0x4a7ef5["unpackAlignment"] = _0x1f6f04), _0x499cc5["pixelStorei"](_0x412756, _0x1f6f04);
  }
  function _0x25a67f(_0x39deeb, _0x37a1d0) {
    _0x499cc5["polygonOffset"](_0x39deeb, _0x37a1d0);
  }
  function _0xde7eb1(_0x40b31d, _0x53ac88, _0x3752e6, _0x363b0d) {
    _0x4a7ef5["recordError"](1280);
  }
  function _0x3a8c3b(_0x31b6a5, _0x2f9119, _0x5e0539) {
    _0x4a7ef5["recordError"](1280);
  }
  function _0x1fd7c4(_0x5ce857) {
    _0x499cc5["readBuffer"](_0x5ce857);
  }
  function _0x3aee73(_0x12ea86, _0x552806, _0x41d351, _0x577cac) {
    function _0xe239a1(_0x16006f, _0x48fe82) {
      return _0x16006f + _0x48fe82 - 1 & -_0x48fe82;
    }
    var _0x560131 = _0x12ea86 * _0x41d351, _0x1591ec = _0xe239a1(_0x560131, _0x577cac);
    return _0x552806 * _0x1591ec;
  }
  function _0x50a055(_0x25858e) {
    var _0x45db6b = {5: 3, 6: 4, 8: 2, 29502: 3, 29504: 4, 26917: 2, 26918: 2, 29846: 3, 29847: 4};
    return _0x45db6b[_0x25858e - 6402] || 1;
  }
  function _0xa9f3c3(_0x3820b2) {
    _0x3820b2 -= 5120;
    if (_0x3820b2 == 0) return _0x2c8e41;
    if (_0x3820b2 == 1) return _0x1c2f04;
    if (_0x3820b2 == 2) return _0x17c3b3;
    if (_0x3820b2 == 4) return _0x5f4233;
    if (_0x3820b2 == 6) return _0x55bdf6;
    if (_0x3820b2 == 5 || _0x3820b2 == 28922 || _0x3820b2 == 28520 || _0x3820b2 == 30779 || _0x3820b2 == 30782) return _0x9bfde5;
    return _0x2609db;
  }
  function _0x159c05(_0x25c75b) {
    return 31 - Math["clz32"](_0x25c75b["BYTES_PER_ELEMENT"]);
  }
  function _0x249462(_0x10e868, _0x5e8a12, _0x65d470, _0x272687, _0x2a39a7, _0x2c444c) {
    var _0x569687 = _0xa9f3c3(_0x10e868), _0x3e1738 = _0x159c05(_0x569687), _0x54062a = 1 << _0x3e1738, _0x5d073c = _0x50a055(_0x5e8a12) * _0x54062a, _0x10721e = _0x3aee73(_0x65d470, _0x272687, _0x5d073c, _0x4a7ef5["unpackAlignment"]);
    return _0x569687["subarray"](_0x2a39a7 >> _0x3e1738, _0x2a39a7 + _0x10721e >> _0x3e1738);
  }
  function _0x5893ea(_0x43fb35, _0x372bf4, _0x3e5601, _0x5abadc, _0x3d672a, _0x313c23, _0x49dbb6) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      if (_0x499cc5["currentPixelPackBufferBinding"]) _0x499cc5["readPixels"](_0x43fb35, _0x372bf4, _0x3e5601, _0x5abadc, _0x3d672a, _0x313c23, _0x49dbb6); else {
        var _0x40153a = _0xa9f3c3(_0x313c23);
        _0x499cc5["readPixels"](_0x43fb35, _0x372bf4, _0x3e5601, _0x5abadc, _0x3d672a, _0x313c23, _0x40153a, _0x49dbb6 >> _0x159c05(_0x40153a));
      }
      return;
    }
    var _0x1aba88 = _0x249462(_0x313c23, _0x3d672a, _0x3e5601, _0x5abadc, _0x49dbb6, _0x3d672a);
    if (!_0x1aba88) {
      _0x4a7ef5["recordError"](1280);
      return;
    }
    _0x499cc5["readPixels"](_0x43fb35, _0x372bf4, _0x3e5601, _0x5abadc, _0x3d672a, _0x313c23, _0x1aba88);
  }
  function _0x35aad0(_0x5f3c8a, _0x511c8a, _0x563fa2, _0x43a51a) {
    _0x499cc5["renderbufferStorage"](_0x5f3c8a, _0x511c8a, _0x563fa2, _0x43a51a);
  }
  function _0x2958ab(_0x177122, _0xddf1bd, _0x474b5f, _0x231aab, _0x239169) {
    _0x499cc5["renderbufferStorageMultisample"](_0x177122, _0xddf1bd, _0x474b5f, _0x231aab, _0x239169);
  }
  function _0x50e820(_0x3bb278, _0x2a5833, _0x501b27) {
    _0x499cc5["samplerParameteri"](_0x4a7ef5["samplers"][_0x3bb278], _0x2a5833, _0x501b27);
  }
  function _0x1f9820(_0x1765fe, _0x3e14c2, _0x276c73, _0x5cc728) {
    _0x499cc5["scissor"](_0x1765fe, _0x3e14c2, _0x276c73, _0x5cc728);
  }
  function _0x2e6a19(_0x1bcc01, _0x545855, _0x287ce8 = "(", _0xf98812 = ")") {
    for (var _0x18600e = 0; _0x545855 < _0x1bcc01["length"]; ++_0x545855) {
      if (_0x1bcc01[_0x545855] == _0x287ce8) ++_0x18600e;
      if (_0x1bcc01[_0x545855] == _0xf98812 && --_0x18600e == 0) return _0x545855;
    }
  }
  function _0x26d4a0(_0x27de41) {
    var _0x518487 = 0, _0x3b6836 = _0x27de41["length"], _0x16c3e9 = "", _0x344546 = [1], _0x298f1a = {defined: function (_0x3a5a9c) {
      return _0x298f1a[_0x3a5a9c[0]] ? 1 : 0;
    }, GL_FRAGMENT_PRECISION_HIGH: function () {
      return 1;
    }};
    function _0x336119(_0x36d534, _0x556639) {
      return !(_0x36d534["charCodeAt"](_0x556639) > 32);
    }
    function _0x4e0c0b(_0x4f5489, _0xcc03c3) {
      while (!_0x336119(_0x4f5489, _0xcc03c3)) ++_0xcc03c3;
      return _0xcc03c3;
    }
    function _0x5035ea(_0x21b26b, _0x22be4a) {
      var _0x3551de = _0x21b26b["charCodeAt"](_0x22be4a);
      if (_0x3551de > 32) {
        if (_0x3551de < 48) return 1;
        if (_0x3551de < 58) return 2;
        if (_0x3551de < 65) return 1;
        if (_0x3551de < 91 || _0x3551de == 95) return 3;
        if (_0x3551de < 97) return 1;
        if (_0x3551de < 123) return 3;
        return 1;
      }
      return _0x3551de < 33 ? 0 : 4;
    }
    function _0x2c78cc(_0x269eef, _0x2a569e) {
      var _0x156226 = [], _0x399801 = _0x269eef["length"];
      for (var _0x2d86cd = 0; _0x2d86cd <= _0x399801; ++_0x2d86cd) {
        var _0x5a69b9 = _0x5035ea(_0x269eef, _0x2d86cd);
        if (_0x5a69b9 == 2 || _0x5a69b9 == 3) for (var _0x52e175 = _0x2d86cd + 1; _0x52e175 <= _0x399801; ++_0x52e175) {
          var _0x5b1984 = _0x5035ea(_0x269eef, _0x52e175);
          if (_0x5b1984 != _0x5a69b9 && (_0x5b1984 != 2 || _0x5a69b9 != 3)) {
            _0x156226["push"](_0x269eef["substring"](_0x2d86cd, _0x52e175)), _0x2d86cd = _0x52e175 - 1;
            break;
          }
        } else {
          if (_0x5a69b9 == 1) {
            var _0x152fc8 = _0x269eef["substr"](_0x2d86cd, 2);
            ["<=", ">=", "==", "!=", "&&", "||"]["includes"](_0x152fc8) ? (_0x156226["push"](_0x152fc8), ++_0x2d86cd) : _0x156226["push"](_0x269eef[_0x2d86cd]);
          }
        }
      }
      return _0x156226;
    }
    function _0xb22364(_0x11c5bf, _0x340c0a, _0x131381) {
      if (_0x131381 === undefined) _0x131381 = _0x11c5bf["length"];
      var _0x150f6b = _0x11c5bf["length"], _0xde98d9 = "";
      for (var _0x162dbf = _0x340c0a; _0x162dbf < _0x131381; ++_0x162dbf) {
        var _0x35cc3c = _0x5035ea(_0x11c5bf, _0x162dbf);
        if (_0x35cc3c == 3) for (var _0x2368df = _0x162dbf + 1; _0x2368df <= _0x131381; ++_0x2368df) {
          var _0x38aea8 = _0x5035ea(_0x11c5bf, _0x2368df);
          if (_0x38aea8 != 2 && _0x38aea8 != 3) {
            var _0x4416ca = _0x11c5bf["substring"](_0x162dbf, _0x2368df), _0xec4d8a = _0x298f1a[_0x4416ca];
            if (_0xec4d8a) {
              var _0x11ac91 = _0x11c5bf["substring"](_0x340c0a, _0x162dbf);
              if (_0xec4d8a["length"] && _0x11c5bf[_0x2368df] == "(") {
                var _0x2e709c = _0x2e6a19(_0x11c5bf, _0x2368df);
                _0x11ac91 += _0xec4d8a(_0x11c5bf["substring"](_0x2368df + 1, _0x2e709c)["split"](",")) + _0x11c5bf["substring"](_0x2e709c + 1, _0x131381);
              } else _0x11ac91 += _0xec4d8a() + _0x11c5bf["substring"](_0x2368df, _0x131381);
              return _0xb22364(_0x11ac91, 0);
            } else {
              _0xde98d9 += _0x4416ca, _0x162dbf = _0x2368df - 1;
              break;
            }
          }
        } else _0xde98d9 += _0x11c5bf[_0x162dbf];
      }
      return _0xde98d9;
    }
    function _0x570ef4(_0x50bdea) {
      while (_0x50bdea["length"] > 1 || typeof _0x50bdea[0] != "function") {
        _0x50bdea = function (_0x327941) {
          var _0x4be041, _0x39b919, _0x31ab2e, _0x423db4 = -2;
          for (_0x39b919 = 0; _0x39b919 < _0x327941["length"]; ++_0x39b919) {
            (_0x31ab2e = ["*", "/", "+", "-", "!", "<", "<=", ">", ">=", "==", "!=", "&&", "||", "("]["indexOf"](_0x327941[_0x39b919])) > _0x423db4 && (_0x4be041 = _0x39b919, _0x423db4 = _0x31ab2e);
          }
          if (_0x423db4 == 13) {
            var _0x39b919 = _0x2e6a19(_0x327941, _0x4be041);
            if (_0x39b919) return _0x327941["splice"](_0x4be041, _0x39b919 + 1 - _0x4be041, _0x570ef4(_0x327941["slice"](_0x4be041 + 1, _0x39b919))), _0x327941;
          }
          if (_0x423db4 == 4) {
            _0x4be041 = _0x327941["lastIndexOf"]("!");
            var _0x562387 = _0x570ef4(_0x327941["slice"](_0x4be041 + 1, _0x4be041 + 2));
            return _0x327941["splice"](_0x4be041, 2, function () {
              return !_0x562387();
            }), _0x327941;
          }
          if (_0x423db4 >= 0) {
            var _0x3e2145 = _0x570ef4(_0x327941["slice"](0, _0x4be041)), _0x1fc25c = _0x570ef4(_0x327941["slice"](_0x4be041 + 1));
            switch (_0x327941[_0x4be041]) {
              case "&&":
                return [function () {
                  return _0x3e2145() && _0x1fc25c();
                }];
              case "||":
                return [function () {
                  return _0x3e2145() || _0x1fc25c();
                }];
              case "==":
                return [function () {
                  return _0x3e2145() == _0x1fc25c();
                }];
              case "!=":
                return [function () {
                  return _0x3e2145() != _0x1fc25c();
                }];
              case "<":
                return [function () {
                  return _0x3e2145() < _0x1fc25c();
                }];
              case "<=":
                return [function () {
                  return _0x3e2145() <= _0x1fc25c();
                }];
              case ">":
                return [function () {
                  return _0x3e2145() > _0x1fc25c();
                }];
              case ">=":
                return [function () {
                  return _0x3e2145() >= _0x1fc25c();
                }];
              case "+":
                return [function () {
                  return _0x3e2145() + _0x1fc25c();
                }];
              case "-":
                return [function () {
                  return _0x3e2145() - _0x1fc25c();
                }];
              case "*":
                return [function () {
                  return _0x3e2145() * _0x1fc25c();
                }];
              case "/":
                return [function () {
                  return Math["floor"](_0x3e2145() / _0x1fc25c());
                }];
            }
          }
          var _0x199d53 = _0x25f676(_0x327941[_0x4be041]);
          return [function () {
            return _0x199d53;
          }];
        }(_0x50bdea);
      }
      return _0x50bdea[0];
    }
    for (; _0x518487 < _0x3b6836; ++_0x518487) {
      var _0x43d606 = _0x518487;
      _0x518487 = _0x27de41["indexOf"]("\n", _0x518487);
      if (_0x518487 < 0) _0x518487 = _0x3b6836;
      for (var _0x21f2fb = _0x43d606; _0x21f2fb < _0x518487 && _0x336119(_0x27de41, _0x21f2fb); ++_0x21f2fb) ;
      var _0x486ba5 = _0x344546[_0x344546["length"] - 1];
      if (_0x27de41[_0x21f2fb] != "#") {
        _0x486ba5 && (_0x16c3e9 += _0xb22364(_0x27de41, _0x43d606, _0x518487) + "\n");
        continue;
      }
      var _0x325ca9 = _0x4e0c0b(_0x27de41, _0x21f2fb), _0xef1748 = _0x27de41["substring"](_0x21f2fb + 1, _0x325ca9), _0x240c3e = _0x27de41["substring"](_0x325ca9, _0x518487)["trim"]();
      switch (_0xef1748) {
        case "if":
          var _0x35d647 = _0x2c78cc(_0xb22364(_0x240c3e, 0)), _0x3cfc51 = _0x570ef4(_0x35d647), _0x3aaad8 = _0x3cfc51();
          _0x344546["push"](!!_0x3aaad8 * _0x344546[_0x344546["length"] - 1]);
          break;
        case "ifdef":
          _0x344546["push"](!!_0x298f1a[_0x240c3e] * _0x344546[_0x344546["length"] - 1]);
          break;
        case "ifndef":
          _0x344546["push"](!_0x298f1a[_0x240c3e] * _0x344546[_0x344546["length"] - 1]);
          break;
        case "else":
          _0x344546[_0x344546["length"] - 1] = 1 - _0x344546[_0x344546["length"] - 1];
          break;
        case "endif":
          _0x344546["pop"]();
          break;
        case "define":
          if (_0x486ba5) {
            var _0xae6b8a = _0x240c3e["indexOf"]("("), _0x21a621 = _0x4e0c0b(_0x240c3e, 0);
            if (_0x21a621 < _0xae6b8a) _0xae6b8a = 0;
            if (_0xae6b8a > 0) {
              var _0x3a4f98 = _0x240c3e["indexOf"](")", _0xae6b8a);
              let _0x57d432 = _0x240c3e["substring"](_0xae6b8a + 1, _0x3a4f98)["split"](",")["map"](_0x195a75 => _0x195a75["trim"]()), _0x2a95c7 = _0x2c78cc(_0x240c3e["substring"](_0x3a4f98 + 1)["trim"]());
              _0x298f1a[_0x240c3e["substring"](0, _0xae6b8a)] = function (_0x1b6d4a) {
                var _0x534c09 = "";
                return _0x2a95c7["forEach"](_0x222272 => {
                  var _0x2cfeb0 = _0x57d432["indexOf"](_0x222272);
                  _0x534c09 += _0x2cfeb0 >= 0 ? _0x1b6d4a[_0x2cfeb0] : _0x222272;
                }), _0x534c09;
              };
            } else {
              let _0x3399c6 = _0xb22364(_0x240c3e["substring"](_0x21a621 + 1)["trim"](), 0);
              _0x298f1a[_0x240c3e["substring"](0, _0x21a621)] = function () {
                return _0x3399c6;
              };
            }
          }
          break;
        case "undef":
          if (_0x486ba5) delete _0x298f1a[_0x240c3e];
          break;
        default:
          if (_0xef1748 != "version" && _0xef1748 != "pragma" && _0xef1748 != "extension") {}
          _0x16c3e9 += _0xb22364(_0x27de41, _0x43d606, _0x518487) + "\n";
      }
    }
    return _0x16c3e9;
  }
  function _0x686602(_0x40d9b3) {
    var _0x2e4b37 = 0, _0xb36365 = "", _0x5c7ac6, _0x27a9b8, _0x233d80 = _0x40d9b3["length"];
    for (; _0x2e4b37 < _0x233d80; ++_0x2e4b37) {
      _0x5c7ac6 = _0x40d9b3[_0x2e4b37];
      if (_0x5c7ac6 == "/") {
        _0x27a9b8 = _0x40d9b3[_0x2e4b37 + 1];
        if (_0x27a9b8 == "/") {
          while (_0x2e4b37 < _0x233d80 && _0x40d9b3[_0x2e4b37 + 1] != "\n") ++_0x2e4b37;
        } else {
          if (_0x27a9b8 == "*") {
            while (_0x2e4b37 < _0x233d80 && (_0x40d9b3[_0x2e4b37 - 1] != "*" || _0x40d9b3[_0x2e4b37] != "/")) ++_0x2e4b37;
          } else _0xb36365 += _0x5c7ac6;
        }
      } else _0xb36365 += _0x5c7ac6;
    }
    return _0xb36365;
  }
  function _0x386ef7(_0x457504, _0x3e4346, _0x1c1e8b, _0x431ef8) {
    var _0x90d900 = _0x4a7ef5["getSource"](_0x457504, _0x3e4346, _0x1c1e8b, _0x431ef8);
    _0x90d900 = _0x26d4a0(_0x686602(_0x90d900));
    var _0x2d7422 = /layout\s*\(\s*location\s*=\s*(-?\d+)\s*\)\s*(uniform\s+((lowp|mediump|highp)\s+)?\w+\s+(\w+))/g, _0x55717e = {}, _0x4c0cfa;
    while (_0x4c0cfa = _0x2d7422["exec"](_0x90d900)) {
      _0x55717e[_0x4c0cfa[5]] = _0x25f676(_0x4c0cfa[1]);
      if (!(_0x55717e[_0x4c0cfa[5]] >= 0 && _0x55717e[_0x4c0cfa[5]] < 1048576)) {
        console["error"]('Specified an out of range layout(location=x) directive "' + _0x55717e[_0x4c0cfa[5]] + '"! (' + _0x4c0cfa[0] + ")"), _0x4a7ef5["recordError"](1281);
        return;
      }
    }
    _0x90d900 = _0x90d900["replace"](_0x2d7422, "$2"), _0x4a7ef5["shaders"][_0x457504]["explicitUniformLocations"] = _0x55717e;
    var _0x1253ba = /layout\s*\(.*?binding\s*=\s*(-?\d+).*?\)\s*uniform\s+(\w+)\s+(\w+)?/g, _0x299214 = {}, _0x27a89a = {}, _0x1f8f6f;
    while (_0x1f8f6f = _0x1253ba["exec"](_0x90d900)) {
      var _0x4bae93 = 1;
      for (var _0xe3a3a7 = _0x1f8f6f["index"]; _0xe3a3a7 < _0x90d900["length"] && _0x90d900[_0xe3a3a7] != ";"; ++_0xe3a3a7) {
        if (_0x90d900[_0xe3a3a7] == "[") {
          _0x4bae93 = _0x25f676(_0x90d900["slice"](_0xe3a3a7 + 1));
          break;
        }
        if (_0x90d900[_0xe3a3a7] == "{") _0xe3a3a7 = _0x2e6a19(_0x90d900, _0xe3a3a7, "{", "}") - 1;
      }
      var _0x123474 = _0x25f676(_0x1f8f6f[1]), _0x185203 = 34930;
      _0x1f8f6f[3] && _0x1f8f6f[2]["indexOf"]("sampler") != -1 ? _0x299214[_0x1f8f6f[3]] = [_0x123474, _0x4bae93] : (_0x185203 = 35374, _0x27a89a[_0x1f8f6f[2]] = [_0x123474, _0x4bae93]);
      var _0xaa829 = _0x499cc5["getParameter"](_0x185203);
      if (!(_0x123474 >= 0 && _0x123474 + _0x4bae93 <= _0xaa829)) {
        console["error"]('Specified an out of range layout(binding=x) directive "' + _0x123474 + '"! (' + _0x1f8f6f[0] + "). Valid range is [0, " + _0xaa829 + "-1]"), _0x4a7ef5["recordError"](1281);
        return;
      }
    }
    _0x90d900 = _0x90d900["replace"](/layout\s*\(.*?binding\s*=\s*([-\d]+).*?\)/g, ""), _0x90d900 = _0x90d900["replace"](/(layout\s*\((.*?)),\s*binding\s*=\s*([-\d]+)\)/g, "$1)"), _0x90d900 = _0x90d900["replace"](/layout\s*\(\s*binding\s*=\s*([-\d]+)\s*,(.*?)\)/g, "layout($2)"), _0x4a7ef5["shaders"][_0x457504]["explicitSamplerBindings"] = _0x299214, _0x4a7ef5["shaders"][_0x457504]["explicitUniformBindings"] = _0x27a89a, _0x499cc5["shaderSource"](_0x4a7ef5["shaders"][_0x457504], _0x90d900);
  }
  function _0x55ba34(_0x43d0a5, _0x390f00, _0x182111, _0x1260bb) {
    _0x499cc5["stencilFuncSeparate"](_0x43d0a5, _0x390f00, _0x182111, _0x1260bb);
  }
  function _0xdc8ad2(_0xa5a364) {
    _0x499cc5["stencilMask"](_0xa5a364);
  }
  function _0x263f52(_0x48af45, _0x2cbe62, _0x5977af, _0x57b632) {
    _0x499cc5["stencilOpSeparate"](_0x48af45, _0x2cbe62, _0x5977af, _0x57b632);
  }
  function _0x4138e5(_0x4613b2, _0x8b7edd, _0x4d1123, _0x4c864d, _0x24b558, _0x3053fa, _0x5d15d0, _0x26ca18, _0x554cab) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      if (_0x499cc5["currentPixelUnpackBufferBinding"]) _0x499cc5["texImage2D"](_0x4613b2, _0x8b7edd, _0x4d1123, _0x4c864d, _0x24b558, _0x3053fa, _0x5d15d0, _0x26ca18, _0x554cab); else {
        if (_0x554cab) {
          var _0x2a6f2e = _0xa9f3c3(_0x26ca18);
          _0x499cc5["texImage2D"](_0x4613b2, _0x8b7edd, _0x4d1123, _0x4c864d, _0x24b558, _0x3053fa, _0x5d15d0, _0x26ca18, _0x2a6f2e, _0x554cab >> _0x159c05(_0x2a6f2e));
        } else _0x499cc5["texImage2D"](_0x4613b2, _0x8b7edd, _0x4d1123, _0x4c864d, _0x24b558, _0x3053fa, _0x5d15d0, _0x26ca18, null);
      }
      return;
    }
    _0x499cc5["texImage2D"](_0x4613b2, _0x8b7edd, _0x4d1123, _0x4c864d, _0x24b558, _0x3053fa, _0x5d15d0, _0x26ca18, _0x554cab ? _0x249462(_0x26ca18, _0x5d15d0, _0x4c864d, _0x24b558, _0x554cab, _0x4d1123) : null);
  }
  function _0x55ff27(_0x407bb8, _0x50b6be, _0x2d419d, _0xb68902, _0x197e6f, _0x59ed9b, _0x2ffb4c, _0x36f17a, _0x2dbfec, _0x4cb7fa) {
    if (_0x499cc5["currentPixelUnpackBufferBinding"]) _0x499cc5["texImage3D"](_0x407bb8, _0x50b6be, _0x2d419d, _0xb68902, _0x197e6f, _0x59ed9b, _0x2ffb4c, _0x36f17a, _0x2dbfec, _0x4cb7fa); else {
      if (_0x4cb7fa) {
        var _0x27a495 = _0xa9f3c3(_0x2dbfec);
        _0x499cc5["texImage3D"](_0x407bb8, _0x50b6be, _0x2d419d, _0xb68902, _0x197e6f, _0x59ed9b, _0x2ffb4c, _0x36f17a, _0x2dbfec, _0x27a495, _0x4cb7fa >> _0x159c05(_0x27a495));
      } else _0x499cc5["texImage3D"](_0x407bb8, _0x50b6be, _0x2d419d, _0xb68902, _0x197e6f, _0x59ed9b, _0x2ffb4c, _0x36f17a, _0x2dbfec, null);
    }
  }
  function _0x55e5db(_0x330f30, _0x56a164, _0x195a7f) {
    _0x499cc5["texParameterf"](_0x330f30, _0x56a164, _0x195a7f);
  }
  function _0x2adfea(_0x497df4, _0x5d6c4a, _0x336bac) {
    _0x499cc5["texParameteri"](_0x497df4, _0x5d6c4a, _0x336bac);
  }
  function _0x4df7e3(_0x3e40f6, _0x448396, _0xcdcafc) {
    var _0x3569ad = _0x5f4233[_0xcdcafc >> 2];
    _0x499cc5["texParameteri"](_0x3e40f6, _0x448396, _0x3569ad);
  }
  function _0x10b704(_0x12a22c, _0x37ff3f, _0x421081, _0x98c95d, _0x3fdd3c) {
    _0x499cc5["texStorage2D"](_0x12a22c, _0x37ff3f, _0x421081, _0x98c95d, _0x3fdd3c);
  }
  function _0x283f12(_0x4abc35, _0x25e4b4, _0x5dda95, _0x1f7851, _0x1a95d2, _0x6e96f1) {
    _0x499cc5["texStorage3D"](_0x4abc35, _0x25e4b4, _0x5dda95, _0x1f7851, _0x1a95d2, _0x6e96f1);
  }
  function _0x1b7278(_0x2eabd5, _0x3e9bdb, _0x209398, _0x18bc1a, _0x1dd74a, _0x389da0, _0x15cd97, _0x11d8ab, _0x84eff2) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      if (_0x499cc5["currentPixelUnpackBufferBinding"]) _0x499cc5["texSubImage2D"](_0x2eabd5, _0x3e9bdb, _0x209398, _0x18bc1a, _0x1dd74a, _0x389da0, _0x15cd97, _0x11d8ab, _0x84eff2); else {
        if (_0x84eff2) {
          var _0x1bb1b1 = _0xa9f3c3(_0x11d8ab);
          _0x499cc5["texSubImage2D"](_0x2eabd5, _0x3e9bdb, _0x209398, _0x18bc1a, _0x1dd74a, _0x389da0, _0x15cd97, _0x11d8ab, _0x1bb1b1, _0x84eff2 >> _0x159c05(_0x1bb1b1));
        } else _0x499cc5["texSubImage2D"](_0x2eabd5, _0x3e9bdb, _0x209398, _0x18bc1a, _0x1dd74a, _0x389da0, _0x15cd97, _0x11d8ab, null);
      }
      return;
    }
    var _0x388fa5 = null;
    if (_0x84eff2) _0x388fa5 = _0x249462(_0x11d8ab, _0x15cd97, _0x1dd74a, _0x389da0, _0x84eff2, 0);
    _0x499cc5["texSubImage2D"](_0x2eabd5, _0x3e9bdb, _0x209398, _0x18bc1a, _0x1dd74a, _0x389da0, _0x15cd97, _0x11d8ab, _0x388fa5);
  }
  function _0x55dd0d(_0x30a456, _0x5986e3, _0x442ed3, _0x7a5a05, _0x148674, _0x36d7d4, _0x117ddc, _0x2aeff9, _0x3cf35d, _0x21c76b, _0x3e3b1a) {
    if (_0x499cc5["currentPixelUnpackBufferBinding"]) _0x499cc5["texSubImage3D"](_0x30a456, _0x5986e3, _0x442ed3, _0x7a5a05, _0x148674, _0x36d7d4, _0x117ddc, _0x2aeff9, _0x3cf35d, _0x21c76b, _0x3e3b1a); else {
      if (_0x3e3b1a) {
        var _0xd40f8e = _0xa9f3c3(_0x21c76b);
        _0x499cc5["texSubImage3D"](_0x30a456, _0x5986e3, _0x442ed3, _0x7a5a05, _0x148674, _0x36d7d4, _0x117ddc, _0x2aeff9, _0x3cf35d, _0x21c76b, _0xd40f8e, _0x3e3b1a >> _0x159c05(_0xd40f8e));
      } else _0x499cc5["texSubImage3D"](_0x30a456, _0x5986e3, _0x442ed3, _0x7a5a05, _0x148674, _0x36d7d4, _0x117ddc, _0x2aeff9, _0x3cf35d, _0x21c76b, null);
    }
  }
  function _0xe770ee(_0x3ecc6d, _0x4a1f64, _0x3afb5f, _0x46a2a2) {
    _0x3ecc6d = _0x4a7ef5["programs"][_0x3ecc6d];
    var _0x1c112d = [];
    for (var _0x23361d = 0; _0x23361d < _0x4a1f64; _0x23361d++) _0x1c112d["push"](_0x5a9382(_0x5f4233[_0x3afb5f + _0x23361d * 4 >> 2]));
    _0x499cc5["transformFeedbackVaryings"](_0x3ecc6d, _0x1c112d, _0x46a2a2);
  }
  var _0x5e2638 = [];
  function _0x1aa5d3(_0x397a47, _0x126ccc, _0x349ae3) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform1fv"](_0x5b3232(_0x397a47), _0x55bdf6, _0x349ae3 >> 2, _0x126ccc);
      return;
    }
    if (_0x126ccc <= 288) {
      var _0x5e899e = _0x5e2638[_0x126ccc - 1];
      for (var _0x581606 = 0; _0x581606 < _0x126ccc; ++_0x581606) {
        _0x5e899e[_0x581606] = _0x55bdf6[_0x349ae3 + 4 * _0x581606 >> 2];
      }
    } else var _0x5e899e = _0x55bdf6["subarray"](_0x349ae3 >> 2, _0x349ae3 + _0x126ccc * 4 >> 2);
    _0x499cc5["uniform1fv"](_0x5b3232(_0x397a47), _0x5e899e);
  }
  function _0x1de749(_0x1d4488, _0x3c06af) {
    _0x499cc5["uniform1i"](_0x5b3232(_0x1d4488), _0x3c06af);
  }
  var _0x2b2e27 = [];
  function _0x23aef1(_0x5dd3e0, _0x1cc7e9, _0x55dec8) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform1iv"](_0x5b3232(_0x5dd3e0), _0x5f4233, _0x55dec8 >> 2, _0x1cc7e9);
      return;
    }
    if (_0x1cc7e9 <= 288) {
      var _0x1eacb9 = _0x2b2e27[_0x1cc7e9 - 1];
      for (var _0x42fc0f = 0; _0x42fc0f < _0x1cc7e9; ++_0x42fc0f) {
        _0x1eacb9[_0x42fc0f] = _0x5f4233[_0x55dec8 + 4 * _0x42fc0f >> 2];
      }
    } else var _0x1eacb9 = _0x5f4233["subarray"](_0x55dec8 >> 2, _0x55dec8 + _0x1cc7e9 * 4 >> 2);
    _0x499cc5["uniform1iv"](_0x5b3232(_0x5dd3e0), _0x1eacb9);
  }
  function _0x327171(_0x1c878e, _0x23c702, _0x1ebb58) {
    _0x499cc5["uniform1uiv"](_0x5b3232(_0x1c878e), _0x9bfde5, _0x1ebb58 >> 2, _0x23c702);
  }
  function _0x11bd40(_0x4ce308, _0x3685e7, _0x32572d) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform2fv"](_0x5b3232(_0x4ce308), _0x55bdf6, _0x32572d >> 2, _0x3685e7 * 2);
      return;
    }
    if (_0x3685e7 <= 144) {
      var _0x51cbfd = _0x5e2638[2 * _0x3685e7 - 1];
      for (var _0x4cb011 = 0; _0x4cb011 < 2 * _0x3685e7; _0x4cb011 += 2) {
        _0x51cbfd[_0x4cb011] = _0x55bdf6[_0x32572d + 4 * _0x4cb011 >> 2], _0x51cbfd[_0x4cb011 + 1] = _0x55bdf6[_0x32572d + (4 * _0x4cb011 + 4) >> 2];
      }
    } else var _0x51cbfd = _0x55bdf6["subarray"](_0x32572d >> 2, _0x32572d + _0x3685e7 * 8 >> 2);
    _0x499cc5["uniform2fv"](_0x5b3232(_0x4ce308), _0x51cbfd);
  }
  function _0x3b21f5(_0x337ea0, _0x573a19, _0x3311b2) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform2iv"](_0x5b3232(_0x337ea0), _0x5f4233, _0x3311b2 >> 2, _0x573a19 * 2);
      return;
    }
    if (_0x573a19 <= 144) {
      var _0x15eb9f = _0x2b2e27[2 * _0x573a19 - 1];
      for (var _0x267a38 = 0; _0x267a38 < 2 * _0x573a19; _0x267a38 += 2) {
        _0x15eb9f[_0x267a38] = _0x5f4233[_0x3311b2 + 4 * _0x267a38 >> 2], _0x15eb9f[_0x267a38 + 1] = _0x5f4233[_0x3311b2 + (4 * _0x267a38 + 4) >> 2];
      }
    } else var _0x15eb9f = _0x5f4233["subarray"](_0x3311b2 >> 2, _0x3311b2 + _0x573a19 * 8 >> 2);
    _0x499cc5["uniform2iv"](_0x5b3232(_0x337ea0), _0x15eb9f);
  }
  function _0x440180(_0x242246, _0x584fe9, _0x420419) {
    _0x499cc5["uniform2uiv"](_0x5b3232(_0x242246), _0x9bfde5, _0x420419 >> 2, _0x584fe9 * 2);
  }
  function _0x56b970(_0x3503c5, _0x43e75b, _0x338ec5) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform3fv"](_0x5b3232(_0x3503c5), _0x55bdf6, _0x338ec5 >> 2, _0x43e75b * 3);
      return;
    }
    if (_0x43e75b <= 96) {
      var _0x212fd2 = _0x5e2638[3 * _0x43e75b - 1];
      for (var _0x5715b6 = 0; _0x5715b6 < 3 * _0x43e75b; _0x5715b6 += 3) {
        _0x212fd2[_0x5715b6] = _0x55bdf6[_0x338ec5 + 4 * _0x5715b6 >> 2], _0x212fd2[_0x5715b6 + 1] = _0x55bdf6[_0x338ec5 + (4 * _0x5715b6 + 4) >> 2], _0x212fd2[_0x5715b6 + 2] = _0x55bdf6[_0x338ec5 + (4 * _0x5715b6 + 8) >> 2];
      }
    } else var _0x212fd2 = _0x55bdf6["subarray"](_0x338ec5 >> 2, _0x338ec5 + _0x43e75b * 12 >> 2);
    _0x499cc5["uniform3fv"](_0x5b3232(_0x3503c5), _0x212fd2);
  }
  function _0x2fecf7(_0x18598f, _0x4842be, _0x29415c) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform3iv"](_0x5b3232(_0x18598f), _0x5f4233, _0x29415c >> 2, _0x4842be * 3);
      return;
    }
    if (_0x4842be <= 96) {
      var _0x319c5e = _0x2b2e27[3 * _0x4842be - 1];
      for (var _0xee7b4f = 0; _0xee7b4f < 3 * _0x4842be; _0xee7b4f += 3) {
        _0x319c5e[_0xee7b4f] = _0x5f4233[_0x29415c + 4 * _0xee7b4f >> 2], _0x319c5e[_0xee7b4f + 1] = _0x5f4233[_0x29415c + (4 * _0xee7b4f + 4) >> 2], _0x319c5e[_0xee7b4f + 2] = _0x5f4233[_0x29415c + (4 * _0xee7b4f + 8) >> 2];
      }
    } else var _0x319c5e = _0x5f4233["subarray"](_0x29415c >> 2, _0x29415c + _0x4842be * 12 >> 2);
    _0x499cc5["uniform3iv"](_0x5b3232(_0x18598f), _0x319c5e);
  }
  function _0x40e57a(_0x5aca31, _0x5e6e89, _0x32915f) {
    _0x499cc5["uniform3uiv"](_0x5b3232(_0x5aca31), _0x9bfde5, _0x32915f >> 2, _0x5e6e89 * 3);
  }
  function _0xfdde5f(_0x328d19, _0x5d1b88, _0x59b8e6) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform4fv"](_0x5b3232(_0x328d19), _0x55bdf6, _0x59b8e6 >> 2, _0x5d1b88 * 4);
      return;
    }
    if (_0x5d1b88 <= 72) {
      var _0x3c4504 = _0x5e2638[4 * _0x5d1b88 - 1], _0x5544c2 = _0x55bdf6;
      _0x59b8e6 >>= 2;
      for (var _0x5eb3e4 = 0; _0x5eb3e4 < 4 * _0x5d1b88; _0x5eb3e4 += 4) {
        var _0xcafdbc = _0x59b8e6 + _0x5eb3e4;
        _0x3c4504[_0x5eb3e4] = _0x5544c2[_0xcafdbc], _0x3c4504[_0x5eb3e4 + 1] = _0x5544c2[_0xcafdbc + 1], _0x3c4504[_0x5eb3e4 + 2] = _0x5544c2[_0xcafdbc + 2], _0x3c4504[_0x5eb3e4 + 3] = _0x5544c2[_0xcafdbc + 3];
      }
    } else var _0x3c4504 = _0x55bdf6["subarray"](_0x59b8e6 >> 2, _0x59b8e6 + _0x5d1b88 * 16 >> 2);
    _0x499cc5["uniform4fv"](_0x5b3232(_0x328d19), _0x3c4504);
  }
  function _0x32e07b(_0x2a9da4, _0x184cd6, _0x47aa3a) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniform4iv"](_0x5b3232(_0x2a9da4), _0x5f4233, _0x47aa3a >> 2, _0x184cd6 * 4);
      return;
    }
    if (_0x184cd6 <= 72) {
      var _0x104489 = _0x2b2e27[4 * _0x184cd6 - 1];
      for (var _0x293b43 = 0; _0x293b43 < 4 * _0x184cd6; _0x293b43 += 4) {
        _0x104489[_0x293b43] = _0x5f4233[_0x47aa3a + 4 * _0x293b43 >> 2], _0x104489[_0x293b43 + 1] = _0x5f4233[_0x47aa3a + (4 * _0x293b43 + 4) >> 2], _0x104489[_0x293b43 + 2] = _0x5f4233[_0x47aa3a + (4 * _0x293b43 + 8) >> 2], _0x104489[_0x293b43 + 3] = _0x5f4233[_0x47aa3a + (4 * _0x293b43 + 12) >> 2];
      }
    } else var _0x104489 = _0x5f4233["subarray"](_0x47aa3a >> 2, _0x47aa3a + _0x184cd6 * 16 >> 2);
    _0x499cc5["uniform4iv"](_0x5b3232(_0x2a9da4), _0x104489);
  }
  function _0x304589(_0x13adcd, _0x3f5fb8, _0x312f68) {
    _0x499cc5["uniform4uiv"](_0x5b3232(_0x13adcd), _0x9bfde5, _0x312f68 >> 2, _0x3f5fb8 * 4);
  }
  function _0x53b775(_0x2eb5ad, _0x290093, _0x1358e1) {
    _0x2eb5ad = _0x4a7ef5["programs"][_0x2eb5ad], _0x499cc5["uniformBlockBinding"](_0x2eb5ad, _0x290093, _0x1358e1);
  }
  function _0x158ed6(_0x492280, _0x5765c6, _0x249fba, _0x41b6ac) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniformMatrix3fv"](_0x5b3232(_0x492280), !!_0x249fba, _0x55bdf6, _0x41b6ac >> 2, _0x5765c6 * 9);
      return;
    }
    if (_0x5765c6 <= 32) {
      var _0x1d93d3 = _0x5e2638[9 * _0x5765c6 - 1];
      for (var _0x18fdef = 0; _0x18fdef < 9 * _0x5765c6; _0x18fdef += 9) {
        _0x1d93d3[_0x18fdef] = _0x55bdf6[_0x41b6ac + 4 * _0x18fdef >> 2], _0x1d93d3[_0x18fdef + 1] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 4) >> 2], _0x1d93d3[_0x18fdef + 2] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 8) >> 2], _0x1d93d3[_0x18fdef + 3] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 12) >> 2], _0x1d93d3[_0x18fdef + 4] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 16) >> 2], _0x1d93d3[_0x18fdef + 5] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 20) >> 2], _0x1d93d3[_0x18fdef + 6] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 24) >> 2], _0x1d93d3[_0x18fdef + 7] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 28) >> 2], _0x1d93d3[_0x18fdef + 8] = _0x55bdf6[_0x41b6ac + (4 * _0x18fdef + 32) >> 2];
      }
    } else var _0x1d93d3 = _0x55bdf6["subarray"](_0x41b6ac >> 2, _0x41b6ac + _0x5765c6 * 36 >> 2);
    _0x499cc5["uniformMatrix3fv"](_0x5b3232(_0x492280), !!_0x249fba, _0x1d93d3);
  }
  function _0xc8c8aa(_0x45e46d, _0x23239d, _0x40f81c, _0x38c523) {
    if (_0x4a7ef5["currentContext"]["version"] >= 2) {
      _0x499cc5["uniformMatrix4fv"](_0x5b3232(_0x45e46d), !!_0x40f81c, _0x55bdf6, _0x38c523 >> 2, _0x23239d * 16);
      return;
    }
    if (_0x23239d <= 18) {
      var _0x59ff8a = _0x5e2638[16 * _0x23239d - 1], _0x292350 = _0x55bdf6;
      _0x38c523 >>= 2;
      for (var _0x211f98 = 0; _0x211f98 < 16 * _0x23239d; _0x211f98 += 16) {
        var _0x306375 = _0x38c523 + _0x211f98;
        _0x59ff8a[_0x211f98] = _0x292350[_0x306375], _0x59ff8a[_0x211f98 + 1] = _0x292350[_0x306375 + 1], _0x59ff8a[_0x211f98 + 2] = _0x292350[_0x306375 + 2], _0x59ff8a[_0x211f98 + 3] = _0x292350[_0x306375 + 3], _0x59ff8a[_0x211f98 + 4] = _0x292350[_0x306375 + 4], _0x59ff8a[_0x211f98 + 5] = _0x292350[_0x306375 + 5], _0x59ff8a[_0x211f98 + 6] = _0x292350[_0x306375 + 6], _0x59ff8a[_0x211f98 + 7] = _0x292350[_0x306375 + 7], _0x59ff8a[_0x211f98 + 8] = _0x292350[_0x306375 + 8], _0x59ff8a[_0x211f98 + 9] = _0x292350[_0x306375 + 9], _0x59ff8a[_0x211f98 + 10] = _0x292350[_0x306375 + 10], _0x59ff8a[_0x211f98 + 11] = _0x292350[_0x306375 + 11], _0x59ff8a[_0x211f98 + 12] = _0x292350[_0x306375 + 12], _0x59ff8a[_0x211f98 + 13] = _0x292350[_0x306375 + 13], _0x59ff8a[_0x211f98 + 14] = _0x292350[_0x306375 + 14], _0x59ff8a[_0x211f98 + 15] = _0x292350[_0x306375 + 15];
      }
    } else var _0x59ff8a = _0x55bdf6["subarray"](_0x38c523 >> 2, _0x38c523 + _0x23239d * 64 >> 2);
    _0x499cc5["uniformMatrix4fv"](_0x5b3232(_0x45e46d), !!_0x40f81c, _0x59ff8a);
  }
  function _0x3ea63b(_0x529a60) {
    if (!_0x5c0bd3(_0x529a60)) return _0x4a7ef5["recordError"](1280), _0x366b43("GL_INVALID_ENUM in glUnmapBuffer"), 0;
    var _0x2873eb = _0x195a17(_0x529a60), _0x37db04 = _0x4a7ef5["mappedBuffers"][_0x2873eb];
    if (!_0x37db04) return _0x4a7ef5["recordError"](1282), _0x366b43("buffer was never mapped in glUnmapBuffer"), 0;
    _0x4a7ef5["mappedBuffers"][_0x2873eb] = null;
    if (!(_0x37db04["access"] & 16)) _0x4a7ef5["currentContext"]["version"] >= 2 ? _0x499cc5["bufferSubData"](_0x529a60, _0x37db04["offset"], _0x1c2f04, _0x37db04["mem"], _0x37db04["length"]) : _0x499cc5["bufferSubData"](_0x529a60, _0x37db04["offset"], _0x1c2f04["subarray"](_0x37db04["mem"], _0x37db04["mem"] + _0x37db04["length"]));
    return _0x3426bf(_0x37db04["mem"]), 1;
  }
  function _0x2c383c() {
    var _0x2b1787 = _0x499cc5["currentProgram"];
    !_0x2b1787["explicitProgramBindingsApplied"] && (_0x4a7ef5["currentContext"]["version"] >= 2 && Object["keys"](_0x2b1787["explicitUniformBindings"])["forEach"](function (_0x20cf10) {
      var _0x14f7ef = _0x2b1787["explicitUniformBindings"][_0x20cf10];
      for (var _0x4d423e = 0; _0x4d423e < _0x14f7ef[1]; ++_0x4d423e) {
        var _0x11ef9f = _0x499cc5["getUniformBlockIndex"](_0x2b1787, _0x20cf10 + (_0x14f7ef[1] > 1 ? "[" + _0x4d423e + "]" : ""));
        _0x499cc5["uniformBlockBinding"](_0x2b1787, _0x11ef9f, _0x14f7ef[0] + _0x4d423e);
      }
    }), Object["keys"](_0x2b1787["explicitSamplerBindings"])["forEach"](function (_0x4f3f14) {
      var _0x265fbd = _0x2b1787["explicitSamplerBindings"][_0x4f3f14];
      for (var _0x5bd59d = 0; _0x5bd59d < _0x265fbd[1]; ++_0x5bd59d) {
        _0x499cc5["uniform1i"](_0x499cc5["getUniformLocation"](_0x2b1787, _0x4f3f14 + (_0x5bd59d ? "[" + _0x5bd59d + "]" : "")), _0x265fbd[0] + _0x5bd59d);
      }
    }), _0x2b1787["explicitProgramBindingsApplied"] = 1);
  }
  function _0x320305(_0x2fedfb) {
    _0x2fedfb = _0x4a7ef5["programs"][_0x2fedfb], _0x499cc5["useProgram"](_0x2fedfb), (_0x499cc5["currentProgram"] = _0x2fedfb) && _0x2c383c();
  }
  function _0x383e26(_0x13be49) {
    _0x499cc5["validateProgram"](_0x4a7ef5["programs"][_0x13be49]);
  }
  function _0x15169a(_0x1390b4, _0x246c18, _0x4e5bbf, _0x713f93, _0x2bfad5) {
    _0x499cc5["vertexAttrib4f"](_0x1390b4, _0x246c18, _0x4e5bbf, _0x713f93, _0x2bfad5);
  }
  function _0x35ccf0(_0x3d24ba, _0xce09d9) {
    _0x499cc5["vertexAttrib4f"](_0x3d24ba, _0x55bdf6[_0xce09d9 >> 2], _0x55bdf6[_0xce09d9 + 4 >> 2], _0x55bdf6[_0xce09d9 + 8 >> 2], _0x55bdf6[_0xce09d9 + 12 >> 2]);
  }
  function _0x25343a(_0x18addf, _0x3858bf, _0x275d3a, _0x571b1e, _0x569f00) {
    var _0x2ce8a6 = _0x4a7ef5["currentContext"]["clientBuffers"][_0x18addf];
    if (!_0x499cc5["currentArrayBufferBinding"]) {
      _0x2ce8a6["size"] = _0x3858bf, _0x2ce8a6["type"] = _0x275d3a, _0x2ce8a6["normalized"] = ![], _0x2ce8a6["stride"] = _0x571b1e, _0x2ce8a6["ptr"] = _0x569f00, _0x2ce8a6["clientside"] = !![], _0x2ce8a6["vertexAttribPointerAdaptor"] = function (_0x208260, _0x2ac38a, _0xa32115, _0x49d913, _0x3b8797, _0x2d95e8) {
        this["vertexAttribIPointer"](_0x208260, _0x2ac38a, _0xa32115, _0x3b8797, _0x2d95e8);
      };
      return;
    }
    _0x2ce8a6["clientside"] = ![], _0x499cc5["vertexAttribIPointer"](_0x18addf, _0x3858bf, _0x275d3a, _0x571b1e, _0x569f00);
  }
  function _0xfa81a8(_0x1a0a74, _0x3069f6, _0x4ea1f0, _0x40b5bd, _0x197c4b, _0x47558b) {
    var _0xb76051 = _0x4a7ef5["currentContext"]["clientBuffers"][_0x1a0a74];
    if (!_0x499cc5["currentArrayBufferBinding"]) {
      _0xb76051["size"] = _0x3069f6, _0xb76051["type"] = _0x4ea1f0, _0xb76051["normalized"] = _0x40b5bd, _0xb76051["stride"] = _0x197c4b, _0xb76051["ptr"] = _0x47558b, _0xb76051["clientside"] = !![], _0xb76051["vertexAttribPointerAdaptor"] = function (_0x5aca87, _0x220883, _0xe20a9d, _0x3bc2e7, _0x1276b8, _0x17e2c3) {
        this["vertexAttribPointer"](_0x5aca87, _0x220883, _0xe20a9d, _0x3bc2e7, _0x1276b8, _0x17e2c3);
      };
      return;
    }
    _0xb76051["clientside"] = ![], _0x499cc5["vertexAttribPointer"](_0x1a0a74, _0x3069f6, _0x4ea1f0, !!_0x40b5bd, _0x197c4b, _0x47558b);
  }
  function _0x59d9f6(_0x5b909e, _0x5824f4, _0x4477c5, _0x4b3050) {
    _0x499cc5["viewport"](_0x5b909e, _0x5824f4, _0x4477c5, _0x4b3050);
  }
  function _0x2a7a8c(_0x3deacf) {
    return _0x3deacf;
  }
  function _0x269570(_0x2ee197) {
    _0x179f30();
    var _0x331a33 = new Date(_0x5f4233[_0x2ee197 + 20 >> 2] + 1900, _0x5f4233[_0x2ee197 + 16 >> 2], _0x5f4233[_0x2ee197 + 12 >> 2], _0x5f4233[_0x2ee197 + 8 >> 2], _0x5f4233[_0x2ee197 + 4 >> 2], _0x5f4233[_0x2ee197 >> 2], 0), _0x3db86e = _0x5f4233[_0x2ee197 + 32 >> 2], _0x2957a7 = _0x331a33["getTimezoneOffset"](), _0x1000f5 = new Date(_0x331a33["getFullYear"](), 0, 1), _0x580e15 = new Date(_0x331a33["getFullYear"](), 6, 1)["getTimezoneOffset"](), _0x53bfc6 = _0x1000f5["getTimezoneOffset"](), _0x549aa2 = Math["min"](_0x53bfc6, _0x580e15);
    if (_0x3db86e < 0) _0x5f4233[_0x2ee197 + 32 >> 2] = Number(_0x580e15 != _0x53bfc6 && _0x549aa2 == _0x2957a7); else {
      if (_0x3db86e > 0 != (_0x549aa2 == _0x2957a7)) {
        var _0x270a62 = Math["max"](_0x53bfc6, _0x580e15), _0x7e5221 = _0x3db86e > 0 ? _0x549aa2 : _0x270a62;
        _0x331a33["setTime"](_0x331a33["getTime"]() + (_0x7e5221 - _0x2957a7) * 6e4);
      }
    }
    _0x5f4233[_0x2ee197 + 24 >> 2] = _0x331a33["getDay"]();
    var _0x4f3650 = (_0x331a33["getTime"]() - _0x1000f5["getTime"]()) / (1e3 * 60 * 60 * 24) | 0;
    return _0x5f4233[_0x2ee197 + 28 >> 2] = _0x4f3650, _0x5f4233[_0x2ee197 >> 2] = _0x331a33["getSeconds"](), _0x5f4233[_0x2ee197 + 4 >> 2] = _0x331a33["getMinutes"](), _0x5f4233[_0x2ee197 + 8 >> 2] = _0x331a33["getHours"](), _0x5f4233[_0x2ee197 + 12 >> 2] = _0x331a33["getDate"](), _0x5f4233[_0x2ee197 + 16 >> 2] = _0x331a33["getMonth"](), _0x331a33["getTime"]() / 1e3 | 0;
  }
  function _0x2e7fb6(_0x2b85ed) {
    _0x172fe6(_0x2b85ed);
  }
  function _0x277ce9(_0x1ac060, _0x16a82c, _0x340e9d) {
    return 0;
  }
  function _0x2f0c42(_0x25fb87) {
    return _0x5f4233[_0x25fb87 >> 2] = 0, 0;
  }
  function _0x5330ab(_0x361332) {
    return _0x361332 % 4 === 0 && (_0x361332 % 100 !== 0 || _0x361332 % 400 === 0);
  }
  function _0x3a71e0(_0x26905d, _0x5d268b) {
    var _0x492709 = 0;
    for (var _0x28bff7 = 0; _0x28bff7 <= _0x5d268b; _0x492709 += _0x26905d[_0x28bff7++]) {}
    return _0x492709;
  }
  var _0xa50a45 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], _0x5ad5cd = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function _0x1cf732(_0x13f28d, _0x2bafbb) {
    var _0x52f11b = new Date(_0x13f28d["getTime"]());
    while (_0x2bafbb > 0) {
      var _0x45e717 = _0x5330ab(_0x52f11b["getFullYear"]()), _0x262893 = _0x52f11b["getMonth"](), _0x1ed4ac = (_0x45e717 ? _0xa50a45 : _0x5ad5cd)[_0x262893];
      if (_0x2bafbb > _0x1ed4ac - _0x52f11b["getDate"]()) _0x2bafbb -= _0x1ed4ac - _0x52f11b["getDate"]() + 1, _0x52f11b["setDate"](1), _0x262893 < 11 ? _0x52f11b["setMonth"](_0x262893 + 1) : (_0x52f11b["setMonth"](0), _0x52f11b["setFullYear"](_0x52f11b["getFullYear"]() + 1)); else return _0x52f11b["setDate"](_0x52f11b["getDate"]() + _0x2bafbb), _0x52f11b;
    }
    return _0x52f11b;
  }
  function _0x5c726f(_0x3d8c2d, _0x295bb7, _0x3ca815, _0x453948) {
    var _0x17018f = _0x5f4233[_0x453948 + 40 >> 2], _0x1eaadd = {tm_sec: _0x5f4233[_0x453948 >> 2], tm_min: _0x5f4233[_0x453948 + 4 >> 2], tm_hour: _0x5f4233[_0x453948 + 8 >> 2], tm_mday: _0x5f4233[_0x453948 + 12 >> 2], tm_mon: _0x5f4233[_0x453948 + 16 >> 2], tm_year: _0x5f4233[_0x453948 + 20 >> 2], tm_wday: _0x5f4233[_0x453948 + 24 >> 2], tm_yday: _0x5f4233[_0x453948 + 28 >> 2], tm_isdst: _0x5f4233[_0x453948 + 32 >> 2], tm_gmtoff: _0x5f4233[_0x453948 + 36 >> 2], tm_zone: _0x17018f ? _0x5a9382(_0x17018f) : ""}, _0x34784e = _0x5a9382(_0x3ca815), _0x45e2a3 = {"%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y"};
    for (var _0x196284 in _0x45e2a3) {
      _0x34784e = _0x34784e["replace"](new RegExp(_0x196284, "g"), _0x45e2a3[_0x196284]);
    }
    var _0x48f194 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], _0x1e7125 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function _0xbed72e(_0x13031c, _0x1419be, _0x4e46ab) {
      var _0xbacef2 = typeof _0x13031c === "number" ? _0x13031c["toString"]() : _0x13031c || "";
      while (_0xbacef2["length"] < _0x1419be) {
        _0xbacef2 = _0x4e46ab[0] + _0xbacef2;
      }
      return _0xbacef2;
    }
    function _0x6fa1ec(_0x57fa07, _0x4434b0) {
      return _0xbed72e(_0x57fa07, _0x4434b0, "0");
    }
    function _0x1ea798(_0x345e03, _0x57ed65) {
      function _0xb68e36(_0x5e9ece) {
        return _0x5e9ece < 0 ? -1 : _0x5e9ece > 0 ? 1 : 0;
      }
      var _0x201be2;
      return (_0x201be2 = _0xb68e36(_0x345e03["getFullYear"]() - _0x57ed65["getFullYear"]())) === 0 && ((_0x201be2 = _0xb68e36(_0x345e03["getMonth"]() - _0x57ed65["getMonth"]())) === 0 && (_0x201be2 = _0xb68e36(_0x345e03["getDate"]() - _0x57ed65["getDate"]()))), _0x201be2;
    }
    function _0x4dff74(_0x44ba14) {
      switch (_0x44ba14["getDay"]()) {
        case 0:
          return new Date(_0x44ba14["getFullYear"]() - 1, 11, 29);
        case 1:
          return _0x44ba14;
        case 2:
          return new Date(_0x44ba14["getFullYear"](), 0, 3);
        case 3:
          return new Date(_0x44ba14["getFullYear"](), 0, 2);
        case 4:
          return new Date(_0x44ba14["getFullYear"](), 0, 1);
        case 5:
          return new Date(_0x44ba14["getFullYear"]() - 1, 11, 31);
        case 6:
          return new Date(_0x44ba14["getFullYear"]() - 1, 11, 30);
      }
    }
    function _0x518c1a(_0x523342) {
      var _0x5ee10e = _0x1cf732(new Date(_0x523342["tm_year"] + 1900, 0, 1), _0x523342["tm_yday"]), _0x458c10 = new Date(_0x5ee10e["getFullYear"](), 0, 4), _0x364de1 = new Date(_0x5ee10e["getFullYear"]() + 1, 0, 4), _0x47423e = _0x4dff74(_0x458c10), _0x3f0a5b = _0x4dff74(_0x364de1);
      return _0x1ea798(_0x47423e, _0x5ee10e) <= 0 ? _0x1ea798(_0x3f0a5b, _0x5ee10e) <= 0 ? _0x5ee10e["getFullYear"]() + 1 : _0x5ee10e["getFullYear"]() : _0x5ee10e["getFullYear"]() - 1;
    }
    var _0xc4b52 = {"%a": function (_0x2b964c) {
      return _0x48f194[_0x2b964c["tm_wday"]]["substring"](0, 3);
    }, "%A": function (_0x4b9ad6) {
      return _0x48f194[_0x4b9ad6["tm_wday"]];
    }, "%b": function (_0x322d94) {
      return _0x1e7125[_0x322d94["tm_mon"]]["substring"](0, 3);
    }, "%B": function (_0x4d805e) {
      return _0x1e7125[_0x4d805e["tm_mon"]];
    }, "%C": function (_0x5a1b78) {
      var _0x48705f = _0x5a1b78["tm_year"] + 1900;
      return _0x6fa1ec(_0x48705f / 100 | 0, 2);
    }, "%d": function (_0x1788b1) {
      return _0x6fa1ec(_0x1788b1["tm_mday"], 2);
    }, "%e": function (_0x2a5a6f) {
      return _0xbed72e(_0x2a5a6f["tm_mday"], 2, " ");
    }, "%g": function (_0x3c74d6) {
      return _0x518c1a(_0x3c74d6)["toString"]()["substring"](2);
    }, "%G": function (_0x49fccc) {
      return _0x518c1a(_0x49fccc);
    }, "%H": function (_0x4c130a) {
      return _0x6fa1ec(_0x4c130a["tm_hour"], 2);
    }, "%I": function (_0x3f7e14) {
      var _0x340690 = _0x3f7e14["tm_hour"];
      if (_0x340690 == 0) _0x340690 = 12; else {
        if (_0x340690 > 12) _0x340690 -= 12;
      }
      return _0x6fa1ec(_0x340690, 2);
    }, "%j": function (_0x243bf2) {
      return _0x6fa1ec(_0x243bf2["tm_mday"] + _0x3a71e0(_0x5330ab(_0x243bf2["tm_year"] + 1900) ? _0xa50a45 : _0x5ad5cd, _0x243bf2["tm_mon"] - 1), 3);
    }, "%m": function (_0x237507) {
      return _0x6fa1ec(_0x237507["tm_mon"] + 1, 2);
    }, "%M": function (_0x2dd720) {
      return _0x6fa1ec(_0x2dd720["tm_min"], 2);
    }, "%n": function () {
      return "\n";
    }, "%p": function (_0x51b2e3) {
      return _0x51b2e3["tm_hour"] >= 0 && _0x51b2e3["tm_hour"] < 12 ? "AM" : "PM";
    }, "%S": function (_0x4cdf2f) {
      return _0x6fa1ec(_0x4cdf2f["tm_sec"], 2);
    }, "%t": function () {
      return "	";
    }, "%u": function (_0x4299c8) {
      return _0x4299c8["tm_wday"] || 7;
    }, "%U": function (_0x277730) {
      var _0x556d39 = new Date(_0x277730["tm_year"] + 1900, 0, 1), _0xf75162 = _0x556d39["getDay"]() === 0 ? _0x556d39 : _0x1cf732(_0x556d39, 7 - _0x556d39["getDay"]()), _0x594f15 = new Date(_0x277730["tm_year"] + 1900, _0x277730["tm_mon"], _0x277730["tm_mday"]);
      if (_0x1ea798(_0xf75162, _0x594f15) < 0) {
        var _0x5db33a = _0x3a71e0(_0x5330ab(_0x594f15["getFullYear"]()) ? _0xa50a45 : _0x5ad5cd, _0x594f15["getMonth"]() - 1) - 31, _0x5bb4b1 = 31 - _0xf75162["getDate"](), _0x25e8c1 = _0x5bb4b1 + _0x5db33a + _0x594f15["getDate"]();
        return _0x6fa1ec(Math["ceil"](_0x25e8c1 / 7), 2);
      }
      return _0x1ea798(_0xf75162, _0x556d39) === 0 ? "01" : "00";
    }, "%V": function (_0x235043) {
      var _0xee2ec2 = new Date(_0x235043["tm_year"] + 1900, 0, 4), _0x5b0acf = new Date(_0x235043["tm_year"] + 1901, 0, 4), _0x161e64 = _0x4dff74(_0xee2ec2), _0x54c85a = _0x4dff74(_0x5b0acf), _0x8bed42 = _0x1cf732(new Date(_0x235043["tm_year"] + 1900, 0, 1), _0x235043["tm_yday"]);
      if (_0x1ea798(_0x8bed42, _0x161e64) < 0) return "53";
      if (_0x1ea798(_0x54c85a, _0x8bed42) <= 0) return "01";
      var _0x4a000c;
      return _0x161e64["getFullYear"]() < _0x235043["tm_year"] + 1900 ? _0x4a000c = _0x235043["tm_yday"] + 32 - _0x161e64["getDate"]() : _0x4a000c = _0x235043["tm_yday"] + 1 - _0x161e64["getDate"](), _0x6fa1ec(Math["ceil"](_0x4a000c / 7), 2);
    }, "%w": function (_0x396b46) {
      return _0x396b46["tm_wday"];
    }, "%W": function (_0x3b76bb) {
      var _0x166d99 = new Date(_0x3b76bb["tm_year"], 0, 1), _0x210e55 = _0x166d99["getDay"]() === 1 ? _0x166d99 : _0x1cf732(_0x166d99, _0x166d99["getDay"]() === 0 ? 1 : 7 - _0x166d99["getDay"]() + 1), _0x55512c = new Date(_0x3b76bb["tm_year"] + 1900, _0x3b76bb["tm_mon"], _0x3b76bb["tm_mday"]);
      if (_0x1ea798(_0x210e55, _0x55512c) < 0) {
        var _0x3bbfc4 = _0x3a71e0(_0x5330ab(_0x55512c["getFullYear"]()) ? _0xa50a45 : _0x5ad5cd, _0x55512c["getMonth"]() - 1) - 31, _0x35a589 = 31 - _0x210e55["getDate"](), _0x1827a0 = _0x35a589 + _0x3bbfc4 + _0x55512c["getDate"]();
        return _0x6fa1ec(Math["ceil"](_0x1827a0 / 7), 2);
      }
      return _0x1ea798(_0x210e55, _0x166d99) === 0 ? "01" : "00";
    }, "%y": function (_0x832bc2) {
      return (_0x832bc2["tm_year"] + 1900)["toString"]()["substring"](2);
    }, "%Y": function (_0x365698) {
      return _0x365698["tm_year"] + 1900;
    }, "%z": function (_0x223a05) {
      var _0x44b96c = _0x223a05["tm_gmtoff"], _0x568668 = _0x44b96c >= 0;
      return _0x44b96c = Math["abs"](_0x44b96c) / 60, _0x44b96c = _0x44b96c / 60 * 100 + _0x44b96c % 60, (_0x568668 ? "+" : "-") + String("0000" + _0x44b96c)["slice"](-4);
    }, "%Z": function (_0x27dbc4) {
      return _0x27dbc4["tm_zone"];
    }, "%%": function () {
      return "%";
    }};
    for (var _0x196284 in _0xc4b52) {
      _0x34784e["includes"](_0x196284) && (_0x34784e = _0x34784e["replace"](new RegExp(_0x196284, "g"), _0xc4b52[_0x196284](_0x1eaadd)));
    }
    var _0x1c9fd9 = _0x4c56db(_0x34784e, ![]);
    if (_0x1c9fd9["length"] > _0x295bb7) return 0;
    return _0x9c939b(_0x1c9fd9, _0x3d8c2d), _0x1c9fd9["length"] - 1;
  }
  function _0x14678d(_0xa0f2b0) {
    var _0xb56076 = Date["now"]() / 1e3 | 0;
    return _0xa0f2b0 && (_0x5f4233[_0xa0f2b0 >> 2] = _0xb56076), _0xb56076;
  }
  function _0x2dac2d(_0x25bbd7, _0x5e29b8) {
    _0x25bbd7 = _0x5a9382(_0x25bbd7);
    try {
      return _0x37953b["utime"](_0x25bbd7, _0x5e29b8, _0x5e29b8), 0;
    } catch (_0xba2393) {
      if (!(_0xba2393 instanceof _0x37953b["ErrnoError"])) throw _0xba2393 + " : " + _0x39ad7b();
      return _0xca8898(_0xba2393["errno"]), -1;
    }
  }
  function _0x3fbda2(_0x23e421, _0x4ada97) {
    var _0x3d51ab;
    return _0x4ada97 ? _0x3d51ab = _0x5f4233[_0x4ada97 + 4 >> 2] * 1e3 : _0x3d51ab = Date["now"](), _0x2dac2d(_0x23e421, _0x3d51ab);
  }
  var _0x42a463 = function (_0xe0a316, _0x9375af, _0x141c1e, _0x3b5cbb) {
    !_0xe0a316 && (_0xe0a316 = this), this["parent"] = _0xe0a316, this["mount"] = _0xe0a316["mount"], this["mounted"] = null, this["id"] = _0x37953b["nextInode"]++, this["name"] = _0x9375af, this["mode"] = _0x141c1e, this["node_ops"] = {}, this["stream_ops"] = {}, this["rdev"] = _0x3b5cbb;
  }, _0x8b8f13 = 292 | 73, _0x48f47f = 146;
  Object["defineProperties"](_0x42a463["prototype"], {read: {get: function () {
    return (this["mode"] & _0x8b8f13) === _0x8b8f13;
  }, set: function (_0x38fb52) {
    _0x38fb52 ? this["mode"] |= _0x8b8f13 : this["mode"] &= ~_0x8b8f13;
  }}, write: {get: function () {
    return (this["mode"] & _0x48f47f) === _0x48f47f;
  }, set: function (_0x8651d3) {
    _0x8651d3 ? this["mode"] |= _0x48f47f : this["mode"] &= ~_0x48f47f;
  }}, isFolder: {get: function () {
    return _0x37953b["isDir"](this["mode"]);
  }}, isDevice: {get: function () {
    return _0x37953b["isChrdev"](this["mode"]);
  }}}), _0x37953b["FSNode"] = _0x42a463, _0x37953b["staticInit"](), _0x3d01d3["FS_createPath"] = _0x37953b["createPath"], _0x3d01d3["FS_createDataFile"] = _0x37953b["createDataFile"], _0x3d01d3["requestFullscreen"] = function _0x17953b(_0x1074df, _0x45a8b8) {
    _0xee22e2["requestFullscreen"](_0x1074df, _0x45a8b8);
  }, _0x3d01d3["requestAnimationFrame"] = function _0x5273d6(_0x465ffa) {
    _0xee22e2["requestAnimationFrame"](_0x465ffa);
  }, _0x3d01d3["setCanvasSize"] = function _0x5f02ce(_0x1bbe47, _0x13de1f, _0x39c941) {
    _0xee22e2["setCanvasSize"](_0x1bbe47, _0x13de1f, _0x39c941);
  }, _0x3d01d3["pauseMainLoop"] = function _0x2d98e9() {
    _0xee22e2["mainLoop"]["pause"]();
  }, _0x3d01d3["resumeMainLoop"] = function _0x20a952() {
    _0xee22e2["mainLoop"]["resume"]();
  }, _0x3d01d3["getUserMedia"] = function _0x227296() {
    _0xee22e2["getUserMedia"]();
  }, _0x3d01d3["createContext"] = function _0x59fbcd(_0x204296, _0x1fe39f, _0x3acb5e, _0x3b40ce) {
    return _0xee22e2["createContext"](_0x204296, _0x1fe39f, _0x3acb5e, _0x3b40ce);
  };
  var _0x499cc5;
  for (var _0x397785 = 0; _0x397785 < 32; ++_0x397785) _0x25a825["push"](new Array(_0x397785));
  var _0x46abc8 = new Float32Array(288);
  for (var _0x397785 = 0; _0x397785 < 288; ++_0x397785) {
    _0x5e2638[_0x397785] = _0x46abc8["subarray"](0, _0x397785 + 1);
  }
  var _0x283cf1 = new Int32Array(288);
  for (var _0x397785 = 0; _0x397785 < 288; ++_0x397785) {
    _0x2b2e27[_0x397785] = _0x283cf1["subarray"](0, _0x397785 + 1);
  }
  function _0x4c56db(_0x209d24, _0x2977fe, _0x391327) {
    var _0x333d95 = _0x391327 > 0 ? _0x391327 : _0x2c1249(_0x209d24) + 1, _0xcbcf34 = new Array(_0x333d95), _0x2a55a1 = _0x222a25(_0x209d24, _0xcbcf34, 0, _0xcbcf34["length"]);
    if (_0x2977fe) _0xcbcf34["length"] = _0x2a55a1;
    return _0xcbcf34;
  }
  var _0x5b4b5a = {Li: _0xdab72f, Hi: _0x33c2da, Gc: _0x53c5df, pi: _0x17861e, ai: _0x27d527, gj: _0x49fb4e, ni: _0xe11fc1, mi: _0x2949c8, ji: _0x28e610, li: _0x1aad12, ki: _0x5f4472, Ji: _0x1ca42f, Ii: _0x159292, Zi: _0x1e03f9, yi: _0x1f67c1, Ic: _0x4dc999, ui: _0x19fa2f, tj: _0x47e4e0, Jc: _0x5a8e77, Lc: _0xc79b24, Kc: _0x5f437d, mj: _0x40b192, fi: _0x1c382d, ei: _0x4f9c5f, Ai: _0x1c214f, Oi: _0x4ffea8, Ni: _0x470f1a, ri: _0x47992c, ii: _0x54f1ac, hi: _0x36145b, si: _0x36cda0, bj: _0x1d180c, Uh: _0x5c6cde, Zh: _0x222982, Yh: _0x4fd017, Xh: _0x56edeb, lj: _0x25619c, kj: _0x4504f0, jj: _0x28b6a3, ij: _0x4e680c, gi: _0x1625e9, bi: _0x4eecce, Fi: _0x4528c1, ti: _0x1f9a9a, Vh: _0x2c4a55, Se: _0x2f51db, Jb: _0x179e06, Ib: _0x4253f1, Xe: _0x2a8a53, Ta: _0x5e99c3, Sa: _0x3843d6, te: _0x579876, Ze: _0x16bbd1, we: _0x3d255e, me: _0x1af8aa, ka: _0x375996, Qe: _0x3e770d, Fb: _0x2bce7a, Eb: _0x238314, Ne: _0x167c11, Oe: _0x24de15, Db: _0x20cb75, Cb: _0x3def22, Qc: _0x20a3b3, Re: _0x119ba9, Hb: _0xd38cfe, Gb: _0x30a1a, ve: _0x203e46, xe: _0x5cb4dd, Ue: _0x120d30, Lb: _0x548be6, Kb: _0x1960f4, Mb: _0x3dec98, pe: _0x2ea5cb, Me: _0x4f8b6, Ve: _0x33fab0, ga: _0x153c6d, Cf: _0x11331a, ia: _0x324fbb, xf: _0x554eef, vf: _0x5ecaf6, Yb: _0x13ecc7, wf: _0x1e2286, Wa: _0x6cb212, Xa: _0xb1d441, Nb: _0x500a2d, zf: _0x3a3068, tf: _0x2b3572, uf: _0x87cbde, _b: _0x6fd6fe, Zb: _0x9b966d, ta: _0x344cba, ha: _0x4c72e7, Bf: _0x1db958, Af: _0x5de3b8, ua: _0x4e207f, wb: _0x59a0b9, vb: _0x5008c8, ma: _0x6cacba, sa: _0x1960d0, tb: _0x2b77e9, ub: _0x50705e, Bb: _0x1c7223, la: _0x145af0, xb: _0x2b53e0, zb: _0x439667, Be: _0x24745b, _e: _0x14893e, yb: _0x3bce65, Le: _0x4de6e0, wa: _0x408697, Ye: _0x35f4a6, se: _0x31eb4b, pf: _0x3d3983, mf: _0x580c1d, nf: _0x2f5c7c, of: _0x354d03, Va: _0xea3396, gf: _0x535ac8, kf: _0x52a0a9, jf: _0x26fb0d, lf: _0x12a816, Wi: _0x37b947, Ui: _0x5153dd, Si: _0x3bd3df, Ci: _0x31dea1, Ei: _0x2226ea, Yi: _0x1441fe, wi: _0x131552, vi: _0xa7a2da, Qi: _0x233056, cj: _0x200c7b, pj: _0x1f050f, aj: _0x504b3b, $i: _0x3a5000, kb: _0x32850b, oj: _0x75c409, nj: _0x4119b6, Gi: _0x27c74a, qi: _0x55a4e8, oi: _0x435cd4, di: _0x589939, Aj: _0x19114d, zj: _0x2fd30b, xj: _0x5f098f, yj: _0x3c0199, Mi: _0x1a855c, xi: _0x3ef9e1, _h: _0x279b1f, $h: _0x59f731, ci: _0x6299b5, Hc: _0x4c08a6, hj: _0x1d670a, fj: _0x530ccc, dj: _0x55fa98, ej: _0x3836e7, Vi: _0x2a63e7, Ti: _0x52f5dc, Ri: _0x57dd13, Bi: _0xc9f302, Di: _0x232a68, Xi: _0x47f394, Wh: _0x69279c, Pi: _0x54cf93, Ki: _0x19db96, _i: _0x11e283, zi: _0x124852, p: _0x396412, i: _0x249b5c, o: _0x4e6023, e: _0x8f69b7, a: _0x7736ca, Cj: _0x43b61c, jb: _0x35576e, ed: _0x5bc510, ea: _0x574477, Sc: _0x1469b1, Tc: _0x2a00a2, k: _0xa59ef0, ue: _0x18c714, We: _0x563941, ze: _0x419696, Lf: _0x23e5cc, bd: _0x4da0d5, yf: _0x18c485, hd: _0x2e0fb7, T: _0x35c432, Ag: _0x430570, _c: _0x4ac111, Xc: _0x5aa57d, Oc: _0x44f96c, Pc: _0x596709, jd: _0x4f5c0b, La: _0x3b6ad3, Wc: _0x2c24c9, hf: _0x56f7ea, Ef: _0x258084, Hf: _0x48281e, sb: _0x13534b, bf: _0x148462, cd: _0x4c6a99, Zc: _0x53aecf, Ae: _0x473a92, ld: _0x3783ad, db: _0x21650d, dd: _0x346063, sf: _0x5cdd87, Bj: _0x52dfa9, Pe: _0x5eaef1, fd: _0x5a41e7, $c: _0x5b3668, Yc: _0xd24d09, gd: _0x73f34f, Te: _0x1369e0, He: _0x3853af, id: _0x2be38f, qb: _0x505793, hc: _0x509c46, Df: _0x977bdf, Ff: _0xe05d60, kd: _0x592799, ad: _0x1a0056, x: _0x52939f, O: _0x54b595, Vc: _0x1697b6, nb: _0x32b83c, Ja: _0x4171ec, Tf: _0x368f8e, ya: _0x4e01d9, ec: _0x23f64f, Zf: _0x5b0260, Ua: _0x4bbdbd, qe: _0x30077e, oe: _0x77fdc9, Je: _0x5b8bd8, Ce: _0xb8403b, ye: _0x2e0541, Ie: _0x29dfbf, Pa: _0x5e5c51, Uc: _0x4161ca, J: _0x1c532e, Qa: _0x21b5ed, re: _0x47805c, cf: _0x2c35bc, B: _0x12981c, D: _0x5d9161, Dj: _0x505673, Ke: _0x4f32da, De: _0x1bdf48, Ej: _0x201a1d, Ra: _0x4b78b8, Ab: _0x379348, Oa: _0x2b9fbc, Fe: _0x2dffb4, Ge: _0x57dd19, Pb: _0x2b3d11, Ob: _0x4d5a89, le: _0x55de78, pa: _0x5cf36d, na: _0x39c91e, oa: _0x1da95d, ke: _0x4a696d, ne: _0x723e13, Wb: _0x48b536, Vb: _0x1aee0b, Xb: _0x3a7ec4, Ee: _0x272e54, Qb: _0x2a2834, Sb: _0x25c8c6, Rb: _0xa94f2f, Tb: _0x48aa7a, Ub: _0x5ed2b3, Rc: _0x38fa5b, ef: _0x5378e1, df: _0x5efd18, qa: _0x641d76, af: _0x128b7e, If: _0x407270, ra: _0x1da67b, Rd: _0x24a800, ae: _0xdb9f8a, z: _0x6c3950, Z: _0x5eb503, $b: _0x417cdf, pb: _0x3a4345, je: _0x2dfba0, gb: _0x447c5a, va: _0xd140b7, b: _0x159e60, md: _0x4f8f4a, qf: _0x190c30, rf: _0x5d5079, rb: _0x54a2dd, Gf: _0x2092ca, Ga: _0x32342a, Kh: _0x50384c, Hh: _0x27956b, gc: _0x5c84d5, wg: _0x53f0d0, Ea: _0xfde35, Gh: _0x1e0ed8, Xf: _0x29d07f, Wf: _0xbbdfb3, Dh: _0x5297a9, Eh: _0x311db8, Qf: _0x244cba, Fh: _0x313ed7, pg: _0x3f61c6, sg: _0x528024, zc: _0x567d40, Ac: _0x422f22, Bc: _0x4acc87, hg: _0x45afc2, Bh: _0x534f9e, Ch: _0x3bf32e, Ah: _0xa3b158, wh: _0x30e79f, Mf: _0x3366a5, Kf: _0x4bf27d, Jf: _0x224c58, xh: _0x2657cd, yh: _0x55c042, zh: _0x2a26de, nd: _0x5838ee, ib: _0x55759f, vh: _0x345ead, th: _0x26b924, jg: _0x1e7a17, uh: _0x512ce6, ng: _0x2bb57a, $f: _0x5ca455, sh: _0x30fc00, yc: _0x31da64, rh: _0x3b3018, qh: _0x3e3757, ph: _0x5a25fe, oh: _0x4d974a, nh: _0x3311b5, mh: _0xcd3bbd, ab: _0x41bc0e, lh: _0x5822dc, Pf: _0x172337, kh: _0x1b0d45, bc: _0x25e2d7, jh: _0x56f2fd, qg: _0x119b49, ug: _0x977eef, Da: _0x37ba50, Ca: _0x1c8241, ih: _0x1cd350, hh: _0x5d990a, gh: _0x1b0695, dh: _0x477874, bg: _0x25bb8d, _f: _0x192f2c, eh: _0x17485a, ag: _0x5dbe06, fh: _0x33516e, ch: _0x5df90b, ic: _0xa5a5a8, xg: _0x3175d0, ac: _0x3de83c, $g: _0x38b766, ah: _0x4388d0, eg: _0x3469c4, U: _0x1f6ef8, R: _0x15a0b4, xa: _0x480d41, Ba: _0x366c4d, _g: _0x31be3b, Wg: _0x36eb69, fc: _0x492a8d, Xg: _0x592302, Of: _0x31c232, Zg: _0x5b453c, rg: _0x68fb4, vg: _0x1470fb, Yg: _0x4846b1, Qh: _0x453eb3, hb: _0x2bfd62, Za: _0x302146, ba: _0x31f402, aa: _0x4c1ca6, Ph: _0xb8a6dc, $e: _0x2de96d, Vg: _0x369214, Ug: _0x221591, Jh: _0x52bf5f, Fa: _0x96cbb2, Sf: _0x1f0544, cc: _0x2b8f46, Mh: _0x583a39, X: _0x22739b, zg: _0x47e084, yg: _0x400b68, bh: _0x3aa0b0, Sg: _0x195cc2, wc: _0x811687, Tg: _0x5db7a7, Lh: _0x577599, Rg: _0x294185, fg: _0x4160aa, Qg: _0x2cc61b, Uf: _0x240a71, Ya: _0x14fe77, ja: _0x33fb02, vc: _0x240ef8, Oh: _0x1e44db, $a: _0x4723ba, Ih: _0x293456, tg: _0x164c85, Og: _0x15c370, cg: _0x3388ba, Pg: _0x2c1ac0, uc: _0x25a67f, dc: _0xde7eb1, Nf: _0x3a8c3b, Yf: _0x1fd7c4, da: _0x5893ea, Ng: _0x35aad0, gg: _0x2958ab, Rf: _0x50e820, fb: _0x1f9820, Lg: _0x386ef7, Mg: _0x55ba34, Jg: _0xdc8ad2, Kg: _0x263f52, Hg: _0x4138e5, lg: _0x55ff27, Ig: _0x55e5db, eb: _0x2adfea, Gg: _0x4df7e3, ig: _0x10b704, kg: _0x283f12, Fg: _0x1b7278, mg: _0x55dd0d, og: _0xe770ee, jc: _0x1aa5d3, za: _0x1de749, kc: _0x23aef1, lc: _0x327171, mc: _0x11bd40, nc: _0x3b21f5, oc: _0x440180, cb: _0x56b970, pc: _0x2fecf7, qc: _0x40e57a, ca: _0xfdde5f, rc: _0x32e07b, sc: _0x304589, _a: _0x53b775, tc: _0x158ed6, Aa: _0xc8c8aa, dg: _0x3ea63b, Bg: _0x320305, Nh: _0x383e26, Cg: _0x15169a, Dg: _0x35ccf0, Vf: _0x25343a, Eg: _0xfa81a8, bb: _0x59d9f6, Mc: _0x2dea07, H: _0x2fd4ef, L: _0x48ce6b, K: _0x48decc, Fd: _0x26f5fa, fa: _0x4fb276, Ec: _0x527a19, Y: _0x11877e, C: _0x50af63, N: _0x40ca88, w: _0x2587e1, lb: _0x480054, P: _0x433cce, d: _0x31cdf5, vj: _0x15fb17, uj: _0x1c7c78, c: _0x29d3dd, Dc: _0x5d1373, f: _0xd6dc0a, Sh: _0x219fa2, rj: _0x5b4145, Rh: _0x21b346, q: _0x4a1272, s: _0x123d3f, u: _0x2d0b74, A: _0x4af2a6, G: _0xb77ebd, S: _0x4f79bb, Cc: _0x55b062, Th: _0x14e6f3, Ad: _0x3a2979, Cd: _0x252480, od: _0x5dbc8c, Zd: _0x2dc949, he: _0x19655d, wd: _0x4860d4, ee: _0xa5de73, fe: _0x13253c, Od: _0x2d28a9, _d: _0x54ce2d, Xd: _0x5ad9f9, Vd: _0x29464f, xd: _0x223249, Wd: _0xafbb3b, $d: _0xa834fb, Hd: _0x2cde7e, ge: _0x54fbd6, Ed: _0x9f5ece, de: _0x1cb31d, ce: _0x3a1d7e, Pd: _0x2e07a8, ie: _0x2bcbb9, pd: _0x4dfdd0, Ud: _0x2a3db0, Td: _0x311650, yd: _0x46e6be, qd: _0x5332af, Bd: _0x567354, Gd: _0x49da22, Md: _0x4de6c9, Sd: _0x37fc57, g: _0x3d5d79, M: _0x371612, l: _0x48daa4, ff: _0x87f028, y: _0x13bd16, F: _0x1d0975, mb: _0x429043, m: _0x4cffef, Ha: _0x25d3e6, xc: _0xc4a50b, V: _0x18b783, sj: _0x30e6fb, Q: _0x428afa, qj: _0x245357, h: _0x5e64e9, n: _0x1a83ad, wj: _0x40d134, r: _0x12befe, t: _0x37f08d, E: _0x36ebc2, I: _0x38cf27, W: _0x31419b, Fc: _0x533925, Ia: _0x142fbb, Nc: _0x49a8e9, Id: _0x58483d, Jd: _0x586d5e, vd: _0x2e654d, Ld: _0x25311f, Yd: _0x292602, rd: _0x5d2761, Qd: _0x13bb36, Kd: _0x4a304e, be: _0xae1246, ud: _0x9a8702, Nd: _0x4ffd1c, Dd: _0x40c6e4, zd: _0x6027cd, sd: _0x3cb734, td: _0x5ba024, j: _0x2a7a8c, _: _0x269570, v: _0x2e7fb6, Ma: _0x277ce9, Na: _0x2f0c42, Ka: _0x5c726f, $: _0x14678d, ob: _0x3fbda2}, _0x2aaef7 = _0x5941b4(), _0x5af763 = _0x3d01d3["___wasm_call_ctors"] = function () {
    return (_0x5af763 = _0x3d01d3["___wasm_call_ctors"] = _0x3d01d3["asm"]["Gj"])["apply"](null, arguments);
  }, _0x413084 = _0x3d01d3["_ReleaseKeys"] = function () {
    return (_0x413084 = _0x3d01d3["_ReleaseKeys"] = _0x3d01d3["asm"]["Hj"])["apply"](null, arguments);
  }, _0x58d593 = _0x3d01d3["_SendMessageFloat"] = function () {
    return (_0x58d593 = _0x3d01d3["_SendMessageFloat"] = _0x3d01d3["asm"]["Ij"])["apply"](null, arguments);
  }, _0x1664b7 = _0x3d01d3["_SendMessageString"] = function () {
    return (_0x1664b7 = _0x3d01d3["_SendMessageString"] = _0x3d01d3["asm"]["Jj"])["apply"](null, arguments);
  }, _0x33a4c3 = _0x3d01d3["_SendMessage"] = function () {
    return (_0x33a4c3 = _0x3d01d3["_SendMessage"] = _0x3d01d3["asm"]["Kj"])["apply"](null, arguments);
  }, _0x232c90 = _0x3d01d3["_SetFullscreen"] = function () {
    return (_0x232c90 = _0x3d01d3["_SetFullscreen"] = _0x3d01d3["asm"]["Lj"])["apply"](null, arguments);
  }, _0x1b4660 = _0x3d01d3["_main"] = function () {
    return (_0x1b4660 = _0x3d01d3["_main"] = _0x3d01d3["asm"]["Mj"])["apply"](null, arguments);
  }, _0x2132dd = _0x3d01d3["___errno_location"] = function () {
    return (_0x2132dd = _0x3d01d3["___errno_location"] = _0x3d01d3["asm"]["Nj"])["apply"](null, arguments);
  }, _0x46c7bd = _0x3d01d3["_htonl"] = function () {
    return (_0x46c7bd = _0x3d01d3["_htonl"] = _0x3d01d3["asm"]["Oj"])["apply"](null, arguments);
  }, _0x10f692 = _0x3d01d3["_htons"] = function () {
    return (_0x10f692 = _0x3d01d3["_htons"] = _0x3d01d3["asm"]["Pj"])["apply"](null, arguments);
  }, _0x3377ef = _0x3d01d3["_ntohs"] = function () {
    return (_0x3377ef = _0x3d01d3["_ntohs"] = _0x3d01d3["asm"]["Qj"])["apply"](null, arguments);
  }, _0x5ac09d = _0x3d01d3["__get_tzname"] = function () {
    return (_0x5ac09d = _0x3d01d3["__get_tzname"] = _0x3d01d3["asm"]["Rj"])["apply"](null, arguments);
  }, _0x4452b8 = _0x3d01d3["__get_daylight"] = function () {
    return (_0x4452b8 = _0x3d01d3["__get_daylight"] = _0x3d01d3["asm"]["Sj"])["apply"](null, arguments);
  }, _0x4aeb19 = _0x3d01d3["__get_timezone"] = function () {
    return (_0x4aeb19 = _0x3d01d3["__get_timezone"] = _0x3d01d3["asm"]["Tj"])["apply"](null, arguments);
  }, _0x217682 = _0x3d01d3["stackSave"] = function () {
    return (_0x217682 = _0x3d01d3["stackSave"] = _0x3d01d3["asm"]["Uj"])["apply"](null, arguments);
  }, _0x994ba8 = _0x3d01d3["stackRestore"] = function () {
    return (_0x994ba8 = _0x3d01d3["stackRestore"] = _0x3d01d3["asm"]["Vj"])["apply"](null, arguments);
  }, _0x2c26ef = _0x3d01d3["stackAlloc"] = function () {
    return (_0x2c26ef = _0x3d01d3["stackAlloc"] = _0x3d01d3["asm"]["Wj"])["apply"](null, arguments);
  }, _0x2ed5d3 = _0x3d01d3["_setThrew"] = function () {
    return (_0x2ed5d3 = _0x3d01d3["_setThrew"] = _0x3d01d3["asm"]["Xj"])["apply"](null, arguments);
  }, _0x17e576 = _0x3d01d3["___cxa_can_catch"] = function () {
    return (_0x17e576 = _0x3d01d3["___cxa_can_catch"] = _0x3d01d3["asm"]["Yj"])["apply"](null, arguments);
  }, _0x5017af = _0x3d01d3["___cxa_is_pointer_type"] = function () {
    return (_0x5017af = _0x3d01d3["___cxa_is_pointer_type"] = _0x3d01d3["asm"]["Zj"])["apply"](null, arguments);
  }, _0x499029 = _0x3d01d3["_malloc"] = function () {
    return (_0x499029 = _0x3d01d3["_malloc"] = _0x3d01d3["asm"]["_j"])["apply"](null, arguments);
  }, _0x3426bf = _0x3d01d3["_free"] = function () {
    return (_0x3426bf = _0x3d01d3["_free"] = _0x3d01d3["asm"]["$j"])["apply"](null, arguments);
  }, _0x36f9f1 = _0x3d01d3["_memalign"] = function () {
    return (_0x36f9f1 = _0x3d01d3["_memalign"] = _0x3d01d3["asm"]["ak"])["apply"](null, arguments);
  }, _0x14a396 = _0x3d01d3["_memset"] = function () {
    return (_0x14a396 = _0x3d01d3["_memset"] = _0x3d01d3["asm"]["bk"])["apply"](null, arguments);
  }, _0x484faa = _0x3d01d3["_strlen"] = function () {
    return (_0x484faa = _0x3d01d3["_strlen"] = _0x3d01d3["asm"]["ck"])["apply"](null, arguments);
  }, _0x1a301c = _0x3d01d3["dynCall_iidiiii"] = function () {
    return (_0x1a301c = _0x3d01d3["dynCall_iidiiii"] = _0x3d01d3["asm"]["ek"])["apply"](null, arguments);
  }, _0x1996ad = _0x3d01d3["dynCall_vii"] = function () {
    return (_0x1996ad = _0x3d01d3["dynCall_vii"] = _0x3d01d3["asm"]["fk"])["apply"](null, arguments);
  }, _0x5f1e5d = _0x3d01d3["dynCall_iii"] = function () {
    return (_0x5f1e5d = _0x3d01d3["dynCall_iii"] = _0x3d01d3["asm"]["gk"])["apply"](null, arguments);
  }, _0x35b840 = _0x3d01d3["dynCall_ii"] = function () {
    return (_0x35b840 = _0x3d01d3["dynCall_ii"] = _0x3d01d3["asm"]["hk"])["apply"](null, arguments);
  }, _0x493590 = _0x3d01d3["dynCall_iiii"] = function () {
    return (_0x493590 = _0x3d01d3["dynCall_iiii"] = _0x3d01d3["asm"]["ik"])["apply"](null, arguments);
  }, _0x4a60a0 = _0x3d01d3["dynCall_jiji"] = function () {
    return (_0x4a60a0 = _0x3d01d3["dynCall_jiji"] = _0x3d01d3["asm"]["jk"])["apply"](null, arguments);
  }, _0x29b024 = _0x3d01d3["dynCall_vi"] = function () {
    return (_0x29b024 = _0x3d01d3["dynCall_vi"] = _0x3d01d3["asm"]["kk"])["apply"](null, arguments);
  }, _0x4c7f9f = _0x3d01d3["dynCall_iiiii"] = function () {
    return (_0x4c7f9f = _0x3d01d3["dynCall_iiiii"] = _0x3d01d3["asm"]["lk"])["apply"](null, arguments);
  }, _0x11063c = _0x3d01d3["dynCall_viii"] = function () {
    return (_0x11063c = _0x3d01d3["dynCall_viii"] = _0x3d01d3["asm"]["mk"])["apply"](null, arguments);
  }, _0x1d5647 = _0x3d01d3["dynCall_viiiiii"] = function () {
    return (_0x1d5647 = _0x3d01d3["dynCall_viiiiii"] = _0x3d01d3["asm"]["nk"])["apply"](null, arguments);
  }, _0x63c0b4 = _0x3d01d3["dynCall_viiiii"] = function () {
    return (_0x63c0b4 = _0x3d01d3["dynCall_viiiii"] = _0x3d01d3["asm"]["ok"])["apply"](null, arguments);
  }, _0x3d8c33 = _0x3d01d3["dynCall_viiii"] = function () {
    return (_0x3d8c33 = _0x3d01d3["dynCall_viiii"] = _0x3d01d3["asm"]["pk"])["apply"](null, arguments);
  }, _0x2ba3c4 = _0x3d01d3["dynCall_iiiiii"] = function () {
    return (_0x2ba3c4 = _0x3d01d3["dynCall_iiiiii"] = _0x3d01d3["asm"]["qk"])["apply"](null, arguments);
  }, _0x2cfce2 = _0x3d01d3["dynCall_iiij"] = function () {
    return (_0x2cfce2 = _0x3d01d3["dynCall_iiij"] = _0x3d01d3["asm"]["rk"])["apply"](null, arguments);
  }, _0x418e27 = _0x3d01d3["dynCall_v"] = function () {
    return (_0x418e27 = _0x3d01d3["dynCall_v"] = _0x3d01d3["asm"]["sk"])["apply"](null, arguments);
  }, _0x29e319 = _0x3d01d3["dynCall_i"] = function () {
    return (_0x29e319 = _0x3d01d3["dynCall_i"] = _0x3d01d3["asm"]["tk"])["apply"](null, arguments);
  }, _0x258401 = _0x3d01d3["dynCall_iiiiiiii"] = function () {
    return (_0x258401 = _0x3d01d3["dynCall_iiiiiiii"] = _0x3d01d3["asm"]["uk"])["apply"](null, arguments);
  }, _0x40d1f6 = _0x3d01d3["dynCall_iiijiii"] = function () {
    return (_0x40d1f6 = _0x3d01d3["dynCall_iiijiii"] = _0x3d01d3["asm"]["vk"])["apply"](null, arguments);
  }, _0x2a91f7 = _0x3d01d3["dynCall_iij"] = function () {
    return (_0x2a91f7 = _0x3d01d3["dynCall_iij"] = _0x3d01d3["asm"]["wk"])["apply"](null, arguments);
  }, _0xb4344f = _0x3d01d3["dynCall_iiiiiii"] = function () {
    return (_0xb4344f = _0x3d01d3["dynCall_iiiiiii"] = _0x3d01d3["asm"]["xk"])["apply"](null, arguments);
  }, _0x4ddcab = _0x3d01d3["dynCall_jii"] = function () {
    return (_0x4ddcab = _0x3d01d3["dynCall_jii"] = _0x3d01d3["asm"]["yk"])["apply"](null, arguments);
  }, _0x344bf2 = _0x3d01d3["dynCall_viiiiiii"] = function () {
    return (_0x344bf2 = _0x3d01d3["dynCall_viiiiiii"] = _0x3d01d3["asm"]["zk"])["apply"](null, arguments);
  }, _0x34cb63 = _0x3d01d3["dynCall_iji"] = function () {
    return (_0x34cb63 = _0x3d01d3["dynCall_iji"] = _0x3d01d3["asm"]["Ak"])["apply"](null, arguments);
  }, _0x99f73a = _0x3d01d3["dynCall_fiiffi"] = function () {
    return (_0x99f73a = _0x3d01d3["dynCall_fiiffi"] = _0x3d01d3["asm"]["Bk"])["apply"](null, arguments);
  }, _0x1d21ad = _0x3d01d3["dynCall_viiififii"] = function () {
    return (_0x1d21ad = _0x3d01d3["dynCall_viiififii"] = _0x3d01d3["asm"]["Ck"])["apply"](null, arguments);
  }, _0x45eac5 = _0x3d01d3["dynCall_fii"] = function () {
    return (_0x45eac5 = _0x3d01d3["dynCall_fii"] = _0x3d01d3["asm"]["Dk"])["apply"](null, arguments);
  }, _0x19112c = _0x3d01d3["dynCall_viifi"] = function () {
    return (_0x19112c = _0x3d01d3["dynCall_viifi"] = _0x3d01d3["asm"]["Ek"])["apply"](null, arguments);
  }, _0x17e228 = _0x3d01d3["dynCall_vijii"] = function () {
    return (_0x17e228 = _0x3d01d3["dynCall_vijii"] = _0x3d01d3["asm"]["Fk"])["apply"](null, arguments);
  }, _0x4f0c58 = _0x3d01d3["dynCall_jiiiiiiiiii"] = function () {
    return (_0x4f0c58 = _0x3d01d3["dynCall_jiiiiiiiiii"] = _0x3d01d3["asm"]["Gk"])["apply"](null, arguments);
  }, _0x20f3c9 = _0x3d01d3["dynCall_jiii"] = function () {
    return (_0x20f3c9 = _0x3d01d3["dynCall_jiii"] = _0x3d01d3["asm"]["Hk"])["apply"](null, arguments);
  }, _0x198d83 = _0x3d01d3["dynCall_iiji"] = function () {
    return (_0x198d83 = _0x3d01d3["dynCall_iiji"] = _0x3d01d3["asm"]["Ik"])["apply"](null, arguments);
  }, _0x1860a5 = _0x3d01d3["dynCall_viiiiiiiii"] = function () {
    return (_0x1860a5 = _0x3d01d3["dynCall_viiiiiiiii"] = _0x3d01d3["asm"]["Jk"])["apply"](null, arguments);
  }, _0x2f879d = _0x3d01d3["dynCall_vifii"] = function () {
    return (_0x2f879d = _0x3d01d3["dynCall_vifii"] = _0x3d01d3["asm"]["Kk"])["apply"](null, arguments);
  }, _0x1bb84f = _0x3d01d3["dynCall_viiff"] = function () {
    return (_0x1bb84f = _0x3d01d3["dynCall_viiff"] = _0x3d01d3["asm"]["Lk"])["apply"](null, arguments);
  }, _0x585570 = _0x3d01d3["dynCall_jiiii"] = function () {
    return (_0x585570 = _0x3d01d3["dynCall_jiiii"] = _0x3d01d3["asm"]["Mk"])["apply"](null, arguments);
  }, _0x2ae4dd = _0x3d01d3["dynCall_fiiii"] = function () {
    return (_0x2ae4dd = _0x3d01d3["dynCall_fiiii"] = _0x3d01d3["asm"]["Nk"])["apply"](null, arguments);
  }, _0x165683 = _0x3d01d3["dynCall_diiii"] = function () {
    return (_0x165683 = _0x3d01d3["dynCall_diiii"] = _0x3d01d3["asm"]["Ok"])["apply"](null, arguments);
  }, _0x2a56af = _0x3d01d3["dynCall_diii"] = function () {
    return (_0x2a56af = _0x3d01d3["dynCall_diii"] = _0x3d01d3["asm"]["Pk"])["apply"](null, arguments);
  }, _0x35fe74 = _0x3d01d3["dynCall_fiii"] = function () {
    return (_0x35fe74 = _0x3d01d3["dynCall_fiii"] = _0x3d01d3["asm"]["Qk"])["apply"](null, arguments);
  }, _0x464c62 = _0x3d01d3["dynCall_viidi"] = function () {
    return (_0x464c62 = _0x3d01d3["dynCall_viidi"] = _0x3d01d3["asm"]["Rk"])["apply"](null, arguments);
  }, _0x267df8 = _0x3d01d3["dynCall_viiji"] = function () {
    return (_0x267df8 = _0x3d01d3["dynCall_viiji"] = _0x3d01d3["asm"]["Sk"])["apply"](null, arguments);
  }, _0x5575b6 = _0x3d01d3["dynCall_viiij"] = function () {
    return (_0x5575b6 = _0x3d01d3["dynCall_viiij"] = _0x3d01d3["asm"]["Tk"])["apply"](null, arguments);
  }, _0x5ad833 = _0x3d01d3["dynCall_viiiifi"] = function () {
    return (_0x5ad833 = _0x3d01d3["dynCall_viiiifi"] = _0x3d01d3["asm"]["Uk"])["apply"](null, arguments);
  }, _0x59d085 = _0x3d01d3["dynCall_ji"] = function () {
    return (_0x59d085 = _0x3d01d3["dynCall_ji"] = _0x3d01d3["asm"]["Vk"])["apply"](null, arguments);
  }, _0x20dd0f = _0x3d01d3["dynCall_dii"] = function () {
    return (_0x20dd0f = _0x3d01d3["dynCall_dii"] = _0x3d01d3["asm"]["Wk"])["apply"](null, arguments);
  }, _0x51690d = _0x3d01d3["dynCall_ifi"] = function () {
    return (_0x51690d = _0x3d01d3["dynCall_ifi"] = _0x3d01d3["asm"]["Xk"])["apply"](null, arguments);
  }, _0x2462ca = _0x3d01d3["dynCall_idi"] = function () {
    return (_0x2462ca = _0x3d01d3["dynCall_idi"] = _0x3d01d3["asm"]["Yk"])["apply"](null, arguments);
  }, _0x5b9d7d = _0x3d01d3["dynCall_viiiiiiii"] = function () {
    return (_0x5b9d7d = _0x3d01d3["dynCall_viiiiiiii"] = _0x3d01d3["asm"]["Zk"])["apply"](null, arguments);
  }, _0x1461cd = _0x3d01d3["dynCall_viiiiiiiiiiii"] = function () {
    return (_0x1461cd = _0x3d01d3["dynCall_viiiiiiiiiiii"] = _0x3d01d3["asm"]["_k"])["apply"](null, arguments);
  }, _0x46af2a = _0x3d01d3["dynCall_iiiiji"] = function () {
    return (_0x46af2a = _0x3d01d3["dynCall_iiiiji"] = _0x3d01d3["asm"]["$k"])["apply"](null, arguments);
  }, _0x1bf592 = _0x3d01d3["dynCall_viiiiiiiiiiiii"] = function () {
    return (_0x1bf592 = _0x3d01d3["dynCall_viiiiiiiiiiiii"] = _0x3d01d3["asm"]["al"])["apply"](null, arguments);
  }, _0x2b9ce9 = _0x3d01d3["dynCall_viji"] = function () {
    return (_0x2b9ce9 = _0x3d01d3["dynCall_viji"] = _0x3d01d3["asm"]["bl"])["apply"](null, arguments);
  }, _0x55e47b = _0x3d01d3["dynCall_viiiiiiiiii"] = function () {
    return (_0x55e47b = _0x3d01d3["dynCall_viiiiiiiiii"] = _0x3d01d3["asm"]["cl"])["apply"](null, arguments);
  }, _0x17eab4 = _0x3d01d3["dynCall_vidi"] = function () {
    return (_0x17eab4 = _0x3d01d3["dynCall_vidi"] = _0x3d01d3["asm"]["dl"])["apply"](null, arguments);
  }, _0x90a0b7 = _0x3d01d3["dynCall_vifi"] = function () {
    return (_0x90a0b7 = _0x3d01d3["dynCall_vifi"] = _0x3d01d3["asm"]["el"])["apply"](null, arguments);
  }, _0x1547a7 = _0x3d01d3["dynCall_fffi"] = function () {
    return (_0x1547a7 = _0x3d01d3["dynCall_fffi"] = _0x3d01d3["asm"]["fl"])["apply"](null, arguments);
  }, _0x19cc9a = _0x3d01d3["dynCall_ijji"] = function () {
    return (_0x19cc9a = _0x3d01d3["dynCall_ijji"] = _0x3d01d3["asm"]["gl"])["apply"](null, arguments);
  }, _0x3936c9 = _0x3d01d3["dynCall_jji"] = function () {
    return (_0x3936c9 = _0x3d01d3["dynCall_jji"] = _0x3d01d3["asm"]["hl"])["apply"](null, arguments);
  }, _0x2aa8b9 = _0x3d01d3["dynCall_jjji"] = function () {
    return (_0x2aa8b9 = _0x3d01d3["dynCall_jjji"] = _0x3d01d3["asm"]["il"])["apply"](null, arguments);
  }, _0x525459 = _0x3d01d3["dynCall_dddi"] = function () {
    return (_0x525459 = _0x3d01d3["dynCall_dddi"] = _0x3d01d3["asm"]["jl"])["apply"](null, arguments);
  }, _0x4113f5 = _0x3d01d3["dynCall_iidi"] = function () {
    return (_0x4113f5 = _0x3d01d3["dynCall_iidi"] = _0x3d01d3["asm"]["kl"])["apply"](null, arguments);
  }, _0x4eb7f5 = _0x3d01d3["dynCall_iifi"] = function () {
    return (_0x4eb7f5 = _0x3d01d3["dynCall_iifi"] = _0x3d01d3["asm"]["ll"])["apply"](null, arguments);
  }, _0x542a91 = _0x3d01d3["dynCall_vijiiii"] = function () {
    return (_0x542a91 = _0x3d01d3["dynCall_vijiiii"] = _0x3d01d3["asm"]["ml"])["apply"](null, arguments);
  }, _0x15f778 = _0x3d01d3["dynCall_jjii"] = function () {
    return (_0x15f778 = _0x3d01d3["dynCall_jjii"] = _0x3d01d3["asm"]["nl"])["apply"](null, arguments);
  }, _0x16a5de = _0x3d01d3["dynCall_iijiii"] = function () {
    return (_0x16a5de = _0x3d01d3["dynCall_iijiii"] = _0x3d01d3["asm"]["ol"])["apply"](null, arguments);
  }, _0xef1f6d = _0x3d01d3["dynCall_iiiiiiiii"] = function () {
    return (_0xef1f6d = _0x3d01d3["dynCall_iiiiiiiii"] = _0x3d01d3["asm"]["pl"])["apply"](null, arguments);
  }, _0x13d688 = _0x3d01d3["dynCall_iiiiiiiiii"] = function () {
    return (_0x13d688 = _0x3d01d3["dynCall_iiiiiiiiii"] = _0x3d01d3["asm"]["ql"])["apply"](null, arguments);
  }, _0x1abf58 = _0x3d01d3["dynCall_dji"] = function () {
    return (_0x1abf58 = _0x3d01d3["dynCall_dji"] = _0x3d01d3["asm"]["rl"])["apply"](null, arguments);
  }, _0x2b7ebb = _0x3d01d3["dynCall_viiffi"] = function () {
    return (_0x2b7ebb = _0x3d01d3["dynCall_viiffi"] = _0x3d01d3["asm"]["sl"])["apply"](null, arguments);
  }, _0x41098a = _0x3d01d3["dynCall_iiiifii"] = function () {
    return (_0x41098a = _0x3d01d3["dynCall_iiiifii"] = _0x3d01d3["asm"]["tl"])["apply"](null, arguments);
  }, _0x5de8b6 = _0x3d01d3["dynCall_iiifii"] = function () {
    return (_0x5de8b6 = _0x3d01d3["dynCall_iiifii"] = _0x3d01d3["asm"]["ul"])["apply"](null, arguments);
  }, _0x5e4f0a = _0x3d01d3["dynCall_viiiifii"] = function () {
    return (_0x5e4f0a = _0x3d01d3["dynCall_viiiifii"] = _0x3d01d3["asm"]["vl"])["apply"](null, arguments);
  }, _0x65fdca = _0x3d01d3["dynCall_vfi"] = function () {
    return (_0x65fdca = _0x3d01d3["dynCall_vfi"] = _0x3d01d3["asm"]["wl"])["apply"](null, arguments);
  }, _0x337fb6 = _0x3d01d3["dynCall_viffffi"] = function () {
    return (_0x337fb6 = _0x3d01d3["dynCall_viffffi"] = _0x3d01d3["asm"]["xl"])["apply"](null, arguments);
  }, _0x197416 = _0x3d01d3["dynCall_iiiifi"] = function () {
    return (_0x197416 = _0x3d01d3["dynCall_iiiifi"] = _0x3d01d3["asm"]["yl"])["apply"](null, arguments);
  }, _0x51ce0f = _0x3d01d3["dynCall_viifii"] = function () {
    return (_0x51ce0f = _0x3d01d3["dynCall_viifii"] = _0x3d01d3["asm"]["zl"])["apply"](null, arguments);
  }, _0x2d6c81 = _0x3d01d3["dynCall_viiiiiiiiifi"] = function () {
    return (_0x2d6c81 = _0x3d01d3["dynCall_viiiiiiiiifi"] = _0x3d01d3["asm"]["Al"])["apply"](null, arguments);
  }, _0x47a566 = _0x3d01d3["dynCall_iiiiiiiiiiiii"] = function () {
    return (_0x47a566 = _0x3d01d3["dynCall_iiiiiiiiiiiii"] = _0x3d01d3["asm"]["Bl"])["apply"](null, arguments);
  }, _0x19d541 = _0x3d01d3["dynCall_viif"] = function () {
    return (_0x19d541 = _0x3d01d3["dynCall_viif"] = _0x3d01d3["asm"]["Cl"])["apply"](null, arguments);
  }, _0x56ea7f = _0x3d01d3["dynCall_jiiji"] = function () {
    return (_0x56ea7f = _0x3d01d3["dynCall_jiiji"] = _0x3d01d3["asm"]["Dl"])["apply"](null, arguments);
  }, _0x473a86 = _0x3d01d3["dynCall_viijiiijiiii"] = function () {
    return (_0x473a86 = _0x3d01d3["dynCall_viijiiijiiii"] = _0x3d01d3["asm"]["El"])["apply"](null, arguments);
  }, _0x3f9aa3 = _0x3d01d3["dynCall_jdi"] = function () {
    return (_0x3f9aa3 = _0x3d01d3["dynCall_jdi"] = _0x3d01d3["asm"]["Fl"])["apply"](null, arguments);
  }, _0x2a0e9b = _0x3d01d3["dynCall_vijjji"] = function () {
    return (_0x2a0e9b = _0x3d01d3["dynCall_vijjji"] = _0x3d01d3["asm"]["Gl"])["apply"](null, arguments);
  }, _0x6d9acd = _0x3d01d3["dynCall_iiiiij"] = function () {
    return (_0x6d9acd = _0x3d01d3["dynCall_iiiiij"] = _0x3d01d3["asm"]["Hl"])["apply"](null, arguments);
  }, _0x160f30 = _0x3d01d3["dynCall_viiiiiiiiiii"] = function () {
    return (_0x160f30 = _0x3d01d3["dynCall_viiiiiiiiiii"] = _0x3d01d3["asm"]["Il"])["apply"](null, arguments);
  }, _0x1e698d = _0x3d01d3["dynCall_iiijii"] = function () {
    return (_0x1e698d = _0x3d01d3["dynCall_iiijii"] = _0x3d01d3["asm"]["Jl"])["apply"](null, arguments);
  }, _0x383c89 = _0x3d01d3["dynCall_iijiiii"] = function () {
    return (_0x383c89 = _0x3d01d3["dynCall_iijiiii"] = _0x3d01d3["asm"]["Kl"])["apply"](null, arguments);
  }, _0x1e8f0c = _0x3d01d3["dynCall_jijiii"] = function () {
    return (_0x1e8f0c = _0x3d01d3["dynCall_jijiii"] = _0x3d01d3["asm"]["Ll"])["apply"](null, arguments);
  }, _0x4ebda6 = _0x3d01d3["dynCall_viijii"] = function () {
    return (_0x4ebda6 = _0x3d01d3["dynCall_viijii"] = _0x3d01d3["asm"]["Ml"])["apply"](null, arguments);
  }, _0x207703 = _0x3d01d3["dynCall_iijiiiiii"] = function () {
    return (_0x207703 = _0x3d01d3["dynCall_iijiiiiii"] = _0x3d01d3["asm"]["Nl"])["apply"](null, arguments);
  }, _0x2989b4 = _0x3d01d3["dynCall_iijjiiiiii"] = function () {
    return (_0x2989b4 = _0x3d01d3["dynCall_iijjiiiiii"] = _0x3d01d3["asm"]["Ol"])["apply"](null, arguments);
  }, _0x194e1f = _0x3d01d3["dynCall_iiiijjii"] = function () {
    return (_0x194e1f = _0x3d01d3["dynCall_iiiijjii"] = _0x3d01d3["asm"]["Pl"])["apply"](null, arguments);
  }, _0x7c2000 = _0x3d01d3["dynCall_iijii"] = function () {
    return (_0x7c2000 = _0x3d01d3["dynCall_iijii"] = _0x3d01d3["asm"]["Ql"])["apply"](null, arguments);
  }, _0x54e0fd = _0x3d01d3["dynCall_j"] = function () {
    return (_0x54e0fd = _0x3d01d3["dynCall_j"] = _0x3d01d3["asm"]["Rl"])["apply"](null, arguments);
  }, _0x42c9de = _0x3d01d3["dynCall_jijj"] = function () {
    return (_0x42c9de = _0x3d01d3["dynCall_jijj"] = _0x3d01d3["asm"]["Sl"])["apply"](null, arguments);
  }, _0x5bc485 = _0x3d01d3["dynCall_iiiiiiiiiji"] = function () {
    return (_0x5bc485 = _0x3d01d3["dynCall_iiiiiiiiiji"] = _0x3d01d3["asm"]["Tl"])["apply"](null, arguments);
  }, _0x2ae5fb = _0x3d01d3["dynCall_vji"] = function () {
    return (_0x2ae5fb = _0x3d01d3["dynCall_vji"] = _0x3d01d3["asm"]["Ul"])["apply"](null, arguments);
  }, _0x29454d = _0x3d01d3["dynCall_viiiiiiiiiiiiii"] = function () {
    return (_0x29454d = _0x3d01d3["dynCall_viiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Vl"])["apply"](null, arguments);
  }, _0x749e40 = _0x3d01d3["dynCall_viiiiiiiiiiiiiii"] = function () {
    return (_0x749e40 = _0x3d01d3["dynCall_viiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Wl"])["apply"](null, arguments);
  }, _0x468e4f = _0x3d01d3["dynCall_viiiiiiiiiiiiiiii"] = function () {
    return (_0x468e4f = _0x3d01d3["dynCall_viiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Xl"])["apply"](null, arguments);
  }, _0x1fe938 = _0x3d01d3["dynCall_viiiiiiiiiiiiiiiii"] = function () {
    return (_0x1fe938 = _0x3d01d3["dynCall_viiiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Yl"])["apply"](null, arguments);
  }, _0x1907e6 = _0x3d01d3["dynCall_viiiiiiiiiiiiiiiiii"] = function () {
    return (_0x1907e6 = _0x3d01d3["dynCall_viiiiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Zl"])["apply"](null, arguments);
  }, _0x1b3cdc = _0x3d01d3["dynCall_fifi"] = function () {
    return (_0x1b3cdc = _0x3d01d3["dynCall_fifi"] = _0x3d01d3["asm"]["_l"])["apply"](null, arguments);
  }, _0x41486c = _0x3d01d3["dynCall_fiifi"] = function () {
    return (_0x41486c = _0x3d01d3["dynCall_fiifi"] = _0x3d01d3["asm"]["$l"])["apply"](null, arguments);
  }, _0x2532c4 = _0x3d01d3["dynCall_iiffi"] = function () {
    return (_0x2532c4 = _0x3d01d3["dynCall_iiffi"] = _0x3d01d3["asm"]["am"])["apply"](null, arguments);
  }, _0x1cbfad = _0x3d01d3["dynCall_iiiiiiiiiii"] = function () {
    return (_0x1cbfad = _0x3d01d3["dynCall_iiiiiiiiiii"] = _0x3d01d3["asm"]["bm"])["apply"](null, arguments);
  }, _0x51344c = _0x3d01d3["dynCall_iiiiiiiiiiii"] = function () {
    return (_0x51344c = _0x3d01d3["dynCall_iiiiiiiiiiii"] = _0x3d01d3["asm"]["cm"])["apply"](null, arguments);
  }, _0x3d21c8 = _0x3d01d3["dynCall_iiiiiiiiiiiiii"] = function () {
    return (_0x3d21c8 = _0x3d01d3["dynCall_iiiiiiiiiiiiii"] = _0x3d01d3["asm"]["dm"])["apply"](null, arguments);
  }, _0x5b14d3 = _0x3d01d3["dynCall_iiiiiiiiiiiiiii"] = function () {
    return (_0x5b14d3 = _0x3d01d3["dynCall_iiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["em"])["apply"](null, arguments);
  }, _0x388386 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiii"] = function () {
    return (_0x388386 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["fm"])["apply"](null, arguments);
  }, _0x41c4c1 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiiii"] = function () {
    return (_0x41c4c1 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["gm"])["apply"](null, arguments);
  }, _0x587656 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiiiii"] = function () {
    return (_0x587656 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["hm"])["apply"](null, arguments);
  }, _0x14c6e6 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiiiiii"] = function () {
    return (_0x14c6e6 = _0x3d01d3["dynCall_iiiiiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["im"])["apply"](null, arguments);
  }, _0x9bfa94 = _0x3d01d3["dynCall_iijji"] = function () {
    return (_0x9bfa94 = _0x3d01d3["dynCall_iijji"] = _0x3d01d3["asm"]["jm"])["apply"](null, arguments);
  }, _0x1e7907 = _0x3d01d3["dynCall_iiiji"] = function () {
    return (_0x1e7907 = _0x3d01d3["dynCall_iiiji"] = _0x3d01d3["asm"]["km"])["apply"](null, arguments);
  }, _0x11e1ea = _0x3d01d3["dynCall_viiiji"] = function () {
    return (_0x11e1ea = _0x3d01d3["dynCall_viiiji"] = _0x3d01d3["asm"]["lm"])["apply"](null, arguments);
  }, _0x220f30 = _0x3d01d3["dynCall_fi"] = function () {
    return (_0x220f30 = _0x3d01d3["dynCall_fi"] = _0x3d01d3["asm"]["mm"])["apply"](null, arguments);
  }, _0x170539 = _0x3d01d3["dynCall_iiifi"] = function () {
    return (_0x170539 = _0x3d01d3["dynCall_iiifi"] = _0x3d01d3["asm"]["nm"])["apply"](null, arguments);
  }, _0x4184f4 = _0x3d01d3["dynCall_iiddi"] = function () {
    return (_0x4184f4 = _0x3d01d3["dynCall_iiddi"] = _0x3d01d3["asm"]["om"])["apply"](null, arguments);
  }, _0x58feb9 = _0x3d01d3["dynCall_viij"] = function () {
    return (_0x58feb9 = _0x3d01d3["dynCall_viij"] = _0x3d01d3["asm"]["pm"])["apply"](null, arguments);
  }, _0x9f0b9d = _0x3d01d3["dynCall_viijiiiiii"] = function () {
    return (_0x9f0b9d = _0x3d01d3["dynCall_viijiiiiii"] = _0x3d01d3["asm"]["qm"])["apply"](null, arguments);
  }, _0x2572d6 = _0x3d01d3["dynCall_vijiii"] = function () {
    return (_0x2572d6 = _0x3d01d3["dynCall_vijiii"] = _0x3d01d3["asm"]["rm"])["apply"](null, arguments);
  }, _0x2817ee = _0x3d01d3["dynCall_vjjjiiii"] = function () {
    return (_0x2817ee = _0x3d01d3["dynCall_vjjjiiii"] = _0x3d01d3["asm"]["sm"])["apply"](null, arguments);
  }, _0x1588da = _0x3d01d3["dynCall_vjiiiii"] = function () {
    return (_0x1588da = _0x3d01d3["dynCall_vjiiiii"] = _0x3d01d3["asm"]["tm"])["apply"](null, arguments);
  }, _0x31bfe5 = _0x3d01d3["dynCall_jiiiii"] = function () {
    return (_0x31bfe5 = _0x3d01d3["dynCall_jiiiii"] = _0x3d01d3["asm"]["um"])["apply"](null, arguments);
  }, _0x5620eb = _0x3d01d3["dynCall_fifffi"] = function () {
    return (_0x5620eb = _0x3d01d3["dynCall_fifffi"] = _0x3d01d3["asm"]["vm"])["apply"](null, arguments);
  }, _0x34ef2f = _0x3d01d3["dynCall_viifiii"] = function () {
    return (_0x34ef2f = _0x3d01d3["dynCall_viifiii"] = _0x3d01d3["asm"]["wm"])["apply"](null, arguments);
  }, _0x34481d = _0x3d01d3["dynCall_vfiii"] = function () {
    return (_0x34481d = _0x3d01d3["dynCall_vfiii"] = _0x3d01d3["asm"]["xm"])["apply"](null, arguments);
  }, _0x9e4552 = _0x3d01d3["dynCall_ffffi"] = function () {
    return (_0x9e4552 = _0x3d01d3["dynCall_ffffi"] = _0x3d01d3["asm"]["ym"])["apply"](null, arguments);
  }, _0x26ab5a = _0x3d01d3["dynCall_vffi"] = function () {
    return (_0x26ab5a = _0x3d01d3["dynCall_vffi"] = _0x3d01d3["asm"]["zm"])["apply"](null, arguments);
  }, _0x28680b = _0x3d01d3["dynCall_viffi"] = function () {
    return (_0x28680b = _0x3d01d3["dynCall_viffi"] = _0x3d01d3["asm"]["Am"])["apply"](null, arguments);
  }, _0x372d7d = _0x3d01d3["dynCall_vifffi"] = function () {
    return (_0x372d7d = _0x3d01d3["dynCall_vifffi"] = _0x3d01d3["asm"]["Bm"])["apply"](null, arguments);
  }, _0x5f1f77 = _0x3d01d3["dynCall_viiifi"] = function () {
    return (_0x5f1f77 = _0x3d01d3["dynCall_viiifi"] = _0x3d01d3["asm"]["Cm"])["apply"](null, arguments);
  }, _0x24dbfa = _0x3d01d3["dynCall_fiffi"] = function () {
    return (_0x24dbfa = _0x3d01d3["dynCall_fiffi"] = _0x3d01d3["asm"]["Dm"])["apply"](null, arguments);
  }, _0x3cb9e9 = _0x3d01d3["dynCall_iifffiii"] = function () {
    return (_0x3cb9e9 = _0x3d01d3["dynCall_iifffiii"] = _0x3d01d3["asm"]["Em"])["apply"](null, arguments);
  }, _0x70a028 = _0x3d01d3["dynCall_vifffii"] = function () {
    return (_0x70a028 = _0x3d01d3["dynCall_vifffii"] = _0x3d01d3["asm"]["Fm"])["apply"](null, arguments);
  }, _0x5abaad = _0x3d01d3["dynCall_viiifii"] = function () {
    return (_0x5abaad = _0x3d01d3["dynCall_viiifii"] = _0x3d01d3["asm"]["Gm"])["apply"](null, arguments);
  }, _0x1a4edf = _0x3d01d3["dynCall_ififfi"] = function () {
    return (_0x1a4edf = _0x3d01d3["dynCall_ififfi"] = _0x3d01d3["asm"]["Hm"])["apply"](null, arguments);
  }, _0x3f7dae = _0x3d01d3["dynCall_ffffffi"] = function () {
    return (_0x3f7dae = _0x3d01d3["dynCall_ffffffi"] = _0x3d01d3["asm"]["Im"])["apply"](null, arguments);
  }, _0x136b3d = _0x3d01d3["dynCall_fffffffi"] = function () {
    return (_0x136b3d = _0x3d01d3["dynCall_fffffffi"] = _0x3d01d3["asm"]["Jm"])["apply"](null, arguments);
  }, _0x4b215c = _0x3d01d3["dynCall_viiiffffi"] = function () {
    return (_0x4b215c = _0x3d01d3["dynCall_viiiffffi"] = _0x3d01d3["asm"]["Km"])["apply"](null, arguments);
  }, _0x51e6fd = _0x3d01d3["dynCall_viiifffi"] = function () {
    return (_0x51e6fd = _0x3d01d3["dynCall_viiifffi"] = _0x3d01d3["asm"]["Lm"])["apply"](null, arguments);
  }, _0x55b194 = _0x3d01d3["dynCall_fffifffi"] = function () {
    return (_0x55b194 = _0x3d01d3["dynCall_fffifffi"] = _0x3d01d3["asm"]["Mm"])["apply"](null, arguments);
  }, _0x55f8ad = _0x3d01d3["dynCall_ifii"] = function () {
    return (_0x55f8ad = _0x3d01d3["dynCall_ifii"] = _0x3d01d3["asm"]["Nm"])["apply"](null, arguments);
  }, _0x324e9a = _0x3d01d3["dynCall_ifiifi"] = function () {
    return (_0x324e9a = _0x3d01d3["dynCall_ifiifi"] = _0x3d01d3["asm"]["Om"])["apply"](null, arguments);
  }, _0x4787f9 = _0x3d01d3["dynCall_ffi"] = function () {
    return (_0x4787f9 = _0x3d01d3["dynCall_ffi"] = _0x3d01d3["asm"]["Pm"])["apply"](null, arguments);
  }, _0x363d13 = _0x3d01d3["dynCall_fiiiiii"] = function () {
    return (_0x363d13 = _0x3d01d3["dynCall_fiiiiii"] = _0x3d01d3["asm"]["Qm"])["apply"](null, arguments);
  }, _0x2763a8 = _0x3d01d3["dynCall_viiiiiiiiiiiiiiiiiiiiii"] = function () {
    return (_0x2763a8 = _0x3d01d3["dynCall_viiiiiiiiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Rm"])["apply"](null, arguments);
  }, _0x15a961 = _0x3d01d3["dynCall_fifii"] = function () {
    return (_0x15a961 = _0x3d01d3["dynCall_fifii"] = _0x3d01d3["asm"]["Sm"])["apply"](null, arguments);
  }, _0x440b9a = _0x3d01d3["dynCall_viiiiifi"] = function () {
    return (_0x440b9a = _0x3d01d3["dynCall_viiiiifi"] = _0x3d01d3["asm"]["Tm"])["apply"](null, arguments);
  }, _0x29c62f = _0x3d01d3["dynCall_iiiiifii"] = function () {
    return (_0x29c62f = _0x3d01d3["dynCall_iiiiifii"] = _0x3d01d3["asm"]["Um"])["apply"](null, arguments);
  }, _0x103c7f = _0x3d01d3["dynCall_iiiiiifii"] = function () {
    return (_0x103c7f = _0x3d01d3["dynCall_iiiiiifii"] = _0x3d01d3["asm"]["Vm"])["apply"](null, arguments);
  }, _0x2c1b03 = _0x3d01d3["dynCall_viiiiiifi"] = function () {
    return (_0x2c1b03 = _0x3d01d3["dynCall_viiiiiifi"] = _0x3d01d3["asm"]["Wm"])["apply"](null, arguments);
  }, _0x2bc67d = _0x3d01d3["dynCall_iifii"] = function () {
    return (_0x2bc67d = _0x3d01d3["dynCall_iifii"] = _0x3d01d3["asm"]["Xm"])["apply"](null, arguments);
  }, _0x4736ac = _0x3d01d3["dynCall_fiffii"] = function () {
    return (_0x4736ac = _0x3d01d3["dynCall_fiffii"] = _0x3d01d3["asm"]["Ym"])["apply"](null, arguments);
  }, _0x6bedc = _0x3d01d3["dynCall_vifiii"] = function () {
    return (_0x6bedc = _0x3d01d3["dynCall_vifiii"] = _0x3d01d3["asm"]["Zm"])["apply"](null, arguments);
  }, _0x502f7e = _0x3d01d3["dynCall_viiifiifi"] = function () {
    return (_0x502f7e = _0x3d01d3["dynCall_viiifiifi"] = _0x3d01d3["asm"]["_m"])["apply"](null, arguments);
  }, _0x467673 = _0x3d01d3["dynCall_viiffffi"] = function () {
    return (_0x467673 = _0x3d01d3["dynCall_viiffffi"] = _0x3d01d3["asm"]["$m"])["apply"](null, arguments);
  }, _0xdd6b8f = _0x3d01d3["dynCall_viiffii"] = function () {
    return (_0xdd6b8f = _0x3d01d3["dynCall_viiffii"] = _0x3d01d3["asm"]["an"])["apply"](null, arguments);
  }, _0x2161fa = _0x3d01d3["dynCall_fiffiii"] = function () {
    return (_0x2161fa = _0x3d01d3["dynCall_fiffiii"] = _0x3d01d3["asm"]["bn"])["apply"](null, arguments);
  }, _0x443547 = _0x3d01d3["dynCall_jdji"] = function () {
    return (_0x443547 = _0x3d01d3["dynCall_jdji"] = _0x3d01d3["asm"]["cn"])["apply"](null, arguments);
  }, _0x4f0860 = _0x3d01d3["dynCall_vidji"] = function () {
    return (_0x4f0860 = _0x3d01d3["dynCall_vidji"] = _0x3d01d3["asm"]["dn"])["apply"](null, arguments);
  }, _0x1d761e = _0x3d01d3["dynCall_djji"] = function () {
    return (_0x1d761e = _0x3d01d3["dynCall_djji"] = _0x3d01d3["asm"]["en"])["apply"](null, arguments);
  }, _0x2a2752 = _0x3d01d3["dynCall_didi"] = function () {
    return (_0x2a2752 = _0x3d01d3["dynCall_didi"] = _0x3d01d3["asm"]["fn"])["apply"](null, arguments);
  }, _0x175b10 = _0x3d01d3["dynCall_diidi"] = function () {
    return (_0x175b10 = _0x3d01d3["dynCall_diidi"] = _0x3d01d3["asm"]["gn"])["apply"](null, arguments);
  }, _0x56d2e7 = _0x3d01d3["dynCall_viffffii"] = function () {
    return (_0x56d2e7 = _0x3d01d3["dynCall_viffffii"] = _0x3d01d3["asm"]["hn"])["apply"](null, arguments);
  }, _0x37d039 = _0x3d01d3["dynCall_viffii"] = function () {
    return (_0x37d039 = _0x3d01d3["dynCall_viffii"] = _0x3d01d3["asm"]["jn"])["apply"](null, arguments);
  }, _0x4a8b32 = _0x3d01d3["dynCall_viiidiii"] = function () {
    return (_0x4a8b32 = _0x3d01d3["dynCall_viiidiii"] = _0x3d01d3["asm"]["kn"])["apply"](null, arguments);
  }, _0x5701e9 = _0x3d01d3["dynCall_viiiidi"] = function () {
    return (_0x5701e9 = _0x3d01d3["dynCall_viiiidi"] = _0x3d01d3["asm"]["ln"])["apply"](null, arguments);
  }, _0x2cc8d3 = _0x3d01d3["dynCall_viifiiii"] = function () {
    return (_0x2cc8d3 = _0x3d01d3["dynCall_viifiiii"] = _0x3d01d3["asm"]["mn"])["apply"](null, arguments);
  }, _0x4d8e59 = _0x3d01d3["dynCall_iifffi"] = function () {
    return (_0x4d8e59 = _0x3d01d3["dynCall_iifffi"] = _0x3d01d3["asm"]["nn"])["apply"](null, arguments);
  }, _0x5983ea = _0x3d01d3["dynCall_viiiidiiii"] = function () {
    return (_0x5983ea = _0x3d01d3["dynCall_viiiidiiii"] = _0x3d01d3["asm"]["on"])["apply"](null, arguments);
  }, _0x2fa07f = _0x3d01d3["dynCall_vifiiiii"] = function () {
    return (_0x2fa07f = _0x3d01d3["dynCall_vifiiiii"] = _0x3d01d3["asm"]["pn"])["apply"](null, arguments);
  }, _0x5152f8 = _0x3d01d3["dynCall_viffiii"] = function () {
    return (_0x5152f8 = _0x3d01d3["dynCall_viffiii"] = _0x3d01d3["asm"]["qn"])["apply"](null, arguments);
  }, _0x2439cb = _0x3d01d3["dynCall_iiffffii"] = function () {
    return (_0x2439cb = _0x3d01d3["dynCall_iiffffii"] = _0x3d01d3["asm"]["rn"])["apply"](null, arguments);
  }, _0x4a6f11 = _0x3d01d3["dynCall_viiiijii"] = function () {
    return (_0x4a6f11 = _0x3d01d3["dynCall_viiiijii"] = _0x3d01d3["asm"]["sn"])["apply"](null, arguments);
  }, _0x1fe0e7 = _0x3d01d3["dynCall_vifiiii"] = function () {
    return (_0x1fe0e7 = _0x3d01d3["dynCall_vifiiii"] = _0x3d01d3["asm"]["tn"])["apply"](null, arguments);
  }, _0xa7add4 = _0x3d01d3["dynCall_ijiii"] = function () {
    return (_0xa7add4 = _0x3d01d3["dynCall_ijiii"] = _0x3d01d3["asm"]["un"])["apply"](null, arguments);
  }, _0xe3445a = _0x3d01d3["dynCall_ifiiii"] = function () {
    return (_0xe3445a = _0x3d01d3["dynCall_ifiiii"] = _0x3d01d3["asm"]["vn"])["apply"](null, arguments);
  }, _0x3a9158 = _0x3d01d3["dynCall_idiiiii"] = function () {
    return (_0x3a9158 = _0x3d01d3["dynCall_idiiiii"] = _0x3d01d3["asm"]["wn"])["apply"](null, arguments);
  }, _0x12c45b = _0x3d01d3["dynCall_idiiii"] = function () {
    return (_0x12c45b = _0x3d01d3["dynCall_idiiii"] = _0x3d01d3["asm"]["xn"])["apply"](null, arguments);
  }, _0x22aae7 = _0x3d01d3["dynCall_idii"] = function () {
    return (_0x22aae7 = _0x3d01d3["dynCall_idii"] = _0x3d01d3["asm"]["yn"])["apply"](null, arguments);
  }, _0x57402b = _0x3d01d3["dynCall_ijii"] = function () {
    return (_0x57402b = _0x3d01d3["dynCall_ijii"] = _0x3d01d3["asm"]["zn"])["apply"](null, arguments);
  }, _0x1682a5 = _0x3d01d3["dynCall_iidii"] = function () {
    return (_0x1682a5 = _0x3d01d3["dynCall_iidii"] = _0x3d01d3["asm"]["An"])["apply"](null, arguments);
  }, _0x287e8a = _0x3d01d3["dynCall_iidiii"] = function () {
    return (_0x287e8a = _0x3d01d3["dynCall_iidiii"] = _0x3d01d3["asm"]["Bn"])["apply"](null, arguments);
  }, _0x4aa5df = _0x3d01d3["dynCall_iifiii"] = function () {
    return (_0x4aa5df = _0x3d01d3["dynCall_iifiii"] = _0x3d01d3["asm"]["Cn"])["apply"](null, arguments);
  }, _0x39626e = _0x3d01d3["dynCall_iiijiiii"] = function () {
    return (_0x39626e = _0x3d01d3["dynCall_iiijiiii"] = _0x3d01d3["asm"]["Dn"])["apply"](null, arguments);
  }, _0x93ed8b = _0x3d01d3["dynCall_vjiiii"] = function () {
    return (_0x93ed8b = _0x3d01d3["dynCall_vjiiii"] = _0x3d01d3["asm"]["En"])["apply"](null, arguments);
  }, _0x336391 = _0x3d01d3["dynCall_iddi"] = function () {
    return (_0x336391 = _0x3d01d3["dynCall_iddi"] = _0x3d01d3["asm"]["Fn"])["apply"](null, arguments);
  }, _0x1b0b8f = _0x3d01d3["dynCall_jijii"] = function () {
    return (_0x1b0b8f = _0x3d01d3["dynCall_jijii"] = _0x3d01d3["asm"]["Gn"])["apply"](null, arguments);
  }, _0x48fd67 = _0x3d01d3["dynCall_viiijii"] = function () {
    return (_0x48fd67 = _0x3d01d3["dynCall_viiijii"] = _0x3d01d3["asm"]["Hn"])["apply"](null, arguments);
  }, _0x30cf74 = _0x3d01d3["dynCall_viijiii"] = function () {
    return (_0x30cf74 = _0x3d01d3["dynCall_viijiii"] = _0x3d01d3["asm"]["In"])["apply"](null, arguments);
  }, _0x4929f6 = _0x3d01d3["dynCall_iiiiiji"] = function () {
    return (_0x4929f6 = _0x3d01d3["dynCall_iiiiiji"] = _0x3d01d3["asm"]["Jn"])["apply"](null, arguments);
  }, _0x416946 = _0x3d01d3["dynCall_ijjiiii"] = function () {
    return (_0x416946 = _0x3d01d3["dynCall_ijjiiii"] = _0x3d01d3["asm"]["Kn"])["apply"](null, arguments);
  }, _0x28c5a0 = _0x3d01d3["dynCall_vdiiiii"] = function () {
    return (_0x28c5a0 = _0x3d01d3["dynCall_vdiiiii"] = _0x3d01d3["asm"]["Ln"])["apply"](null, arguments);
  }, _0x50271b = _0x3d01d3["dynCall_diiji"] = function () {
    return (_0x50271b = _0x3d01d3["dynCall_diiji"] = _0x3d01d3["asm"]["Mn"])["apply"](null, arguments);
  }, _0x2b2e0f = _0x3d01d3["dynCall_vjiiiiiiii"] = function () {
    return (_0x2b2e0f = _0x3d01d3["dynCall_vjiiiiiiii"] = _0x3d01d3["asm"]["Nn"])["apply"](null, arguments);
  }, _0x27eaa5 = _0x3d01d3["dynCall_vjiiiiiii"] = function () {
    return (_0x27eaa5 = _0x3d01d3["dynCall_vjiiiiiii"] = _0x3d01d3["asm"]["On"])["apply"](null, arguments);
  }, _0x211601 = _0x3d01d3["dynCall_ijiiii"] = function () {
    return (_0x211601 = _0x3d01d3["dynCall_ijiiii"] = _0x3d01d3["asm"]["Pn"])["apply"](null, arguments);
  }, _0x46117f = _0x3d01d3["dynCall_jidi"] = function () {
    return (_0x46117f = _0x3d01d3["dynCall_jidi"] = _0x3d01d3["asm"]["Qn"])["apply"](null, arguments);
  }, _0x356613 = _0x3d01d3["dynCall_diji"] = function () {
    return (_0x356613 = _0x3d01d3["dynCall_diji"] = _0x3d01d3["asm"]["Rn"])["apply"](null, arguments);
  }, _0x5d2558 = _0x3d01d3["dynCall_fidi"] = function () {
    return (_0x5d2558 = _0x3d01d3["dynCall_fidi"] = _0x3d01d3["asm"]["Sn"])["apply"](null, arguments);
  }, _0x446f58 = _0x3d01d3["dynCall_viifffi"] = function () {
    return (_0x446f58 = _0x3d01d3["dynCall_viifffi"] = _0x3d01d3["asm"]["Tn"])["apply"](null, arguments);
  }, _0x10b725 = _0x3d01d3["dynCall_vfffi"] = function () {
    return (_0x10b725 = _0x3d01d3["dynCall_vfffi"] = _0x3d01d3["asm"]["Un"])["apply"](null, arguments);
  }, _0x110a8f = _0x3d01d3["dynCall_vffffi"] = function () {
    return (_0x110a8f = _0x3d01d3["dynCall_vffffi"] = _0x3d01d3["asm"]["Vn"])["apply"](null, arguments);
  }, _0x4e0875 = _0x3d01d3["dynCall_viiiiffi"] = function () {
    return (_0x4e0875 = _0x3d01d3["dynCall_viiiiffi"] = _0x3d01d3["asm"]["Wn"])["apply"](null, arguments);
  }, _0x57763e = _0x3d01d3["dynCall_viiiffii"] = function () {
    return (_0x57763e = _0x3d01d3["dynCall_viiiffii"] = _0x3d01d3["asm"]["Xn"])["apply"](null, arguments);
  }, _0x137d1f = _0x3d01d3["dynCall_viffffffi"] = function () {
    return (_0x137d1f = _0x3d01d3["dynCall_viffffffi"] = _0x3d01d3["asm"]["Yn"])["apply"](null, arguments);
  }, _0x40efd6 = _0x3d01d3["dynCall_vffffffii"] = function () {
    return (_0x40efd6 = _0x3d01d3["dynCall_vffffffii"] = _0x3d01d3["asm"]["Zn"])["apply"](null, arguments);
  }, _0x3f0230 = _0x3d01d3["dynCall_vffffii"] = function () {
    return (_0x3f0230 = _0x3d01d3["dynCall_vffffii"] = _0x3d01d3["asm"]["_n"])["apply"](null, arguments);
  }, _0x5abd3a = _0x3d01d3["dynCall_viiiifffi"] = function () {
    return (_0x5abd3a = _0x3d01d3["dynCall_viiiifffi"] = _0x3d01d3["asm"]["$n"])["apply"](null, arguments);
  }, _0x23f646 = _0x3d01d3["dynCall_iffi"] = function () {
    return (_0x23f646 = _0x3d01d3["dynCall_iffi"] = _0x3d01d3["asm"]["ao"])["apply"](null, arguments);
  }, _0x582330 = _0x3d01d3["dynCall_fffifi"] = function () {
    return (_0x582330 = _0x3d01d3["dynCall_fffifi"] = _0x3d01d3["asm"]["bo"])["apply"](null, arguments);
  }, _0x5082b7 = _0x3d01d3["dynCall_vfii"] = function () {
    return (_0x5082b7 = _0x3d01d3["dynCall_vfii"] = _0x3d01d3["asm"]["co"])["apply"](null, arguments);
  }, _0x4dcce7 = _0x3d01d3["dynCall_iiiifiiiii"] = function () {
    return (_0x4dcce7 = _0x3d01d3["dynCall_iiiifiiiii"] = _0x3d01d3["asm"]["eo"])["apply"](null, arguments);
  }, _0x391f15 = _0x3d01d3["dynCall_iiiifiiii"] = function () {
    return (_0x391f15 = _0x3d01d3["dynCall_iiiifiiii"] = _0x3d01d3["asm"]["fo"])["apply"](null, arguments);
  }, _0xb80436 = _0x3d01d3["dynCall_iiiifiii"] = function () {
    return (_0xb80436 = _0x3d01d3["dynCall_iiiifiii"] = _0x3d01d3["asm"]["go"])["apply"](null, arguments);
  }, _0x1522db = _0x3d01d3["dynCall_vijjii"] = function () {
    return (_0x1522db = _0x3d01d3["dynCall_vijjii"] = _0x3d01d3["asm"]["ho"])["apply"](null, arguments);
  }, _0x3eac10 = _0x3d01d3["dynCall_viiiiiiifi"] = function () {
    return (_0x3eac10 = _0x3d01d3["dynCall_viiiiiiifi"] = _0x3d01d3["asm"]["io"])["apply"](null, arguments);
  }, _0x522c90 = _0x3d01d3["dynCall_viiiififfi"] = function () {
    return (_0x522c90 = _0x3d01d3["dynCall_viiiififfi"] = _0x3d01d3["asm"]["jo"])["apply"](null, arguments);
  }, _0x1fda97 = _0x3d01d3["dynCall_viiiifiifi"] = function () {
    return (_0x1fda97 = _0x3d01d3["dynCall_viiiifiifi"] = _0x3d01d3["asm"]["ko"])["apply"](null, arguments);
  }, _0x54dbb2 = _0x3d01d3["dynCall_viiiifiiii"] = function () {
    return (_0x54dbb2 = _0x3d01d3["dynCall_viiiifiiii"] = _0x3d01d3["asm"]["lo"])["apply"](null, arguments);
  }, _0x208b11 = _0x3d01d3["dynCall_viiiifiiiii"] = function () {
    return (_0x208b11 = _0x3d01d3["dynCall_viiiifiiiii"] = _0x3d01d3["asm"]["mo"])["apply"](null, arguments);
  }, _0x46b69b = _0x3d01d3["dynCall_viiiifiiiiiiii"] = function () {
    return (_0x46b69b = _0x3d01d3["dynCall_viiiifiiiiiiii"] = _0x3d01d3["asm"]["no"])["apply"](null, arguments);
  }, _0x566084 = _0x3d01d3["dynCall_iiifiii"] = function () {
    return (_0x566084 = _0x3d01d3["dynCall_iiifiii"] = _0x3d01d3["asm"]["oo"])["apply"](null, arguments);
  }, _0x4445a3 = _0x3d01d3["dynCall_iiiiffiiiiii"] = function () {
    return (_0x4445a3 = _0x3d01d3["dynCall_iiiiffiiiiii"] = _0x3d01d3["asm"]["po"])["apply"](null, arguments);
  }, _0x1656eb = _0x3d01d3["dynCall_viiiiiffii"] = function () {
    return (_0x1656eb = _0x3d01d3["dynCall_viiiiiffii"] = _0x3d01d3["asm"]["qo"])["apply"](null, arguments);
  }, _0x10b04f = _0x3d01d3["dynCall_viffffiii"] = function () {
    return (_0x10b04f = _0x3d01d3["dynCall_viffffiii"] = _0x3d01d3["asm"]["ro"])["apply"](null, arguments);
  }, _0x352e3c = _0x3d01d3["dynCall_iiiiifiii"] = function () {
    return (_0x352e3c = _0x3d01d3["dynCall_iiiiifiii"] = _0x3d01d3["asm"]["so"])["apply"](null, arguments);
  }, _0x19803b = _0x3d01d3["dynCall_iiifiiii"] = function () {
    return (_0x19803b = _0x3d01d3["dynCall_iiifiiii"] = _0x3d01d3["asm"]["to"])["apply"](null, arguments);
  }, _0x2ce5c1 = _0x3d01d3["dynCall_vifffffi"] = function () {
    return (_0x2ce5c1 = _0x3d01d3["dynCall_vifffffi"] = _0x3d01d3["asm"]["uo"])["apply"](null, arguments);
  }, _0x54a645 = _0x3d01d3["dynCall_viffiiii"] = function () {
    return (_0x54a645 = _0x3d01d3["dynCall_viffiiii"] = _0x3d01d3["asm"]["vo"])["apply"](null, arguments);
  }, _0x1a4403 = _0x3d01d3["dynCall_viiiiffffiiii"] = function () {
    return (_0x1a4403 = _0x3d01d3["dynCall_viiiiffffiiii"] = _0x3d01d3["asm"]["wo"])["apply"](null, arguments);
  }, _0xc92194 = _0x3d01d3["dynCall_viifiiiii"] = function () {
    return (_0xc92194 = _0x3d01d3["dynCall_viifiiiii"] = _0x3d01d3["asm"]["xo"])["apply"](null, arguments);
  }, _0x59fd5b = _0x3d01d3["dynCall_fiiiii"] = function () {
    return (_0x59fd5b = _0x3d01d3["dynCall_fiiiii"] = _0x3d01d3["asm"]["yo"])["apply"](null, arguments);
  }, _0x5d4b41 = _0x3d01d3["dynCall_iiiiiiffiiiiiiiiiffffiiii"] = function () {
    return (_0x5d4b41 = _0x3d01d3["dynCall_iiiiiiffiiiiiiiiiffffiiii"] = _0x3d01d3["asm"]["zo"])["apply"](null, arguments);
  }, _0x2d975a = _0x3d01d3["dynCall_iiiiiiffiiiiiiiiiiiiiii"] = function () {
    return (_0x2d975a = _0x3d01d3["dynCall_iiiiiiffiiiiiiiiiiiiiii"] = _0x3d01d3["asm"]["Ao"])["apply"](null, arguments);
  }, _0x1ffc41 = _0x3d01d3["dynCall_viijji"] = function () {
    return (_0x1ffc41 = _0x3d01d3["dynCall_viijji"] = _0x3d01d3["asm"]["Bo"])["apply"](null, arguments);
  }, _0x379986 = _0x3d01d3["dynCall_viififii"] = function () {
    return (_0x379986 = _0x3d01d3["dynCall_viififii"] = _0x3d01d3["asm"]["Co"])["apply"](null, arguments);
  }, _0xe5314f = _0x3d01d3["dynCall_iiiffiiii"] = function () {
    return (_0xe5314f = _0x3d01d3["dynCall_iiiffiiii"] = _0x3d01d3["asm"]["Do"])["apply"](null, arguments);
  }, _0xa6d1bc = _0x3d01d3["dynCall_fffffi"] = function () {
    return (_0xa6d1bc = _0x3d01d3["dynCall_fffffi"] = _0x3d01d3["asm"]["Eo"])["apply"](null, arguments);
  }, _0x58a8a9 = _0x3d01d3["dynCall_iiiiffiiii"] = function () {
    return (_0x58a8a9 = _0x3d01d3["dynCall_iiiiffiiii"] = _0x3d01d3["asm"]["Fo"])["apply"](null, arguments);
  }, _0x897b96 = _0x3d01d3["dynCall_vjii"] = function () {
    return (_0x897b96 = _0x3d01d3["dynCall_vjii"] = _0x3d01d3["asm"]["Go"])["apply"](null, arguments);
  }, _0x52531f = _0x3d01d3["dynCall_fiffffi"] = function () {
    return (_0x52531f = _0x3d01d3["dynCall_fiffffi"] = _0x3d01d3["asm"]["Ho"])["apply"](null, arguments);
  }, _0x5c2537 = _0x3d01d3["dynCall_viffifi"] = function () {
    return (_0x5c2537 = _0x3d01d3["dynCall_viffifi"] = _0x3d01d3["asm"]["Io"])["apply"](null, arguments);
  }, _0xef13b5 = _0x3d01d3["dynCall_viiffifi"] = function () {
    return (_0xef13b5 = _0x3d01d3["dynCall_viiffifi"] = _0x3d01d3["asm"]["Jo"])["apply"](null, arguments);
  }, _0x762bf1 = _0x3d01d3["dynCall_ifffi"] = function () {
    return (_0x762bf1 = _0x3d01d3["dynCall_ifffi"] = _0x3d01d3["asm"]["Ko"])["apply"](null, arguments);
  }, _0x52a345 = _0x3d01d3["dynCall_fiiiffi"] = function () {
    return (_0x52a345 = _0x3d01d3["dynCall_fiiiffi"] = _0x3d01d3["asm"]["Lo"])["apply"](null, arguments);
  }, _0x5e2b9c = _0x3d01d3["dynCall_viiififiii"] = function () {
    return (_0x5e2b9c = _0x3d01d3["dynCall_viiififiii"] = _0x3d01d3["asm"]["Mo"])["apply"](null, arguments);
  }, _0x12bac7 = _0x3d01d3["dynCall_viiifiii"] = function () {
    return (_0x12bac7 = _0x3d01d3["dynCall_viiifiii"] = _0x3d01d3["asm"]["No"])["apply"](null, arguments);
  }, _0x2e7370 = _0x3d01d3["dynCall_viiffiiiiiiiii"] = function () {
    return (_0x2e7370 = _0x3d01d3["dynCall_viiffiiiiiiiii"] = _0x3d01d3["asm"]["Oo"])["apply"](null, arguments);
  }, _0x2db695 = _0x3d01d3["dynCall_viiiiiffiii"] = function () {
    return (_0x2db695 = _0x3d01d3["dynCall_viiiiiffiii"] = _0x3d01d3["asm"]["Po"])["apply"](null, arguments);
  }, _0x17bdb0 = _0x3d01d3["dynCall_viiffiii"] = function () {
    return (_0x17bdb0 = _0x3d01d3["dynCall_viiffiii"] = _0x3d01d3["asm"]["Qo"])["apply"](null, arguments);
  }, _0x43162b = _0x3d01d3["dynCall_viiffiiiiiii"] = function () {
    return (_0x43162b = _0x3d01d3["dynCall_viiffiiiiiii"] = _0x3d01d3["asm"]["Ro"])["apply"](null, arguments);
  }, _0x578b90 = _0x3d01d3["dynCall_fffffffffi"] = function () {
    return (_0x578b90 = _0x3d01d3["dynCall_fffffffffi"] = _0x3d01d3["asm"]["So"])["apply"](null, arguments);
  }, _0x220676 = _0x3d01d3["dynCall_vifiiiiii"] = function () {
    return (_0x220676 = _0x3d01d3["dynCall_vifiiiiii"] = _0x3d01d3["asm"]["To"])["apply"](null, arguments);
  }, _0x4a02db = _0x3d01d3["dynCall_viifiiiiiii"] = function () {
    return (_0x4a02db = _0x3d01d3["dynCall_viifiiiiiii"] = _0x3d01d3["asm"]["Uo"])["apply"](null, arguments);
  }, _0x852dde = _0x3d01d3["dynCall_viiififfiiiiiii"] = function () {
    return (_0x852dde = _0x3d01d3["dynCall_viiififfiiiiiii"] = _0x3d01d3["asm"]["Vo"])["apply"](null, arguments);
  }, _0x4d5c58 = _0x3d01d3["dynCall_viiffiifiiiiiii"] = function () {
    return (_0x4d5c58 = _0x3d01d3["dynCall_viiffiifiiiiiii"] = _0x3d01d3["asm"]["Wo"])["apply"](null, arguments);
  }, _0x5abe76 = _0x3d01d3["dynCall_viifiiiiii"] = function () {
    return (_0x5abe76 = _0x3d01d3["dynCall_viifiiiiii"] = _0x3d01d3["asm"]["Xo"])["apply"](null, arguments);
  }, _0x180b53 = _0x3d01d3["dynCall_viiifiiiiii"] = function () {
    return (_0x180b53 = _0x3d01d3["dynCall_viiifiiiiii"] = _0x3d01d3["asm"]["Yo"])["apply"](null, arguments);
  }, _0x2c5bd3 = _0x3d01d3["dynCall_viiiifiiiiii"] = function () {
    return (_0x2c5bd3 = _0x3d01d3["dynCall_viiiifiiiiii"] = _0x3d01d3["asm"]["Zo"])["apply"](null, arguments);
  }, _0x3a84f6 = _0x3d01d3["dynCall_viififiiiiii"] = function () {
    return (_0x3a84f6 = _0x3d01d3["dynCall_viififiiiiii"] = _0x3d01d3["asm"]["_o"])["apply"](null, arguments);
  }, _0x170d01 = _0x3d01d3["dynCall_viiiffiifiiiiiii"] = function () {
    return (_0x170d01 = _0x3d01d3["dynCall_viiiffiifiiiiiii"] = _0x3d01d3["asm"]["$o"])["apply"](null, arguments);
  }, _0x4054c5 = _0x3d01d3["dynCall_viiiiiifiiiiii"] = function () {
    return (_0x4054c5 = _0x3d01d3["dynCall_viiiiiifiiiiii"] = _0x3d01d3["asm"]["ap"])["apply"](null, arguments);
  }, _0x1e8f40 = _0x3d01d3["dynCall_ffii"] = function () {
    return (_0x1e8f40 = _0x3d01d3["dynCall_ffii"] = _0x3d01d3["asm"]["bp"])["apply"](null, arguments);
  }, _0x5c8417 = _0x3d01d3["dynCall_vififiii"] = function () {
    return (_0x5c8417 = _0x3d01d3["dynCall_vififiii"] = _0x3d01d3["asm"]["cp"])["apply"](null, arguments);
  }, _0x3a25dd = _0x3d01d3["dynCall_viiiiiiiijiiii"] = function () {
    return (_0x3a25dd = _0x3d01d3["dynCall_viiiiiiiijiiii"] = _0x3d01d3["asm"]["dp"])["apply"](null, arguments);
  }, _0x1e6e0d = _0x3d01d3["dynCall_viiiffi"] = function () {
    return (_0x1e6e0d = _0x3d01d3["dynCall_viiiffi"] = _0x3d01d3["asm"]["ep"])["apply"](null, arguments);
  }, _0x30f327 = _0x3d01d3["dynCall_fiifii"] = function () {
    return (_0x30f327 = _0x3d01d3["dynCall_fiifii"] = _0x3d01d3["asm"]["fp"])["apply"](null, arguments);
  }, _0x28b35d = _0x3d01d3["dynCall_viiiiiffi"] = function () {
    return (_0x28b35d = _0x3d01d3["dynCall_viiiiiffi"] = _0x3d01d3["asm"]["gp"])["apply"](null, arguments);
  }, _0xb79152 = _0x3d01d3["dynCall_viijjii"] = function () {
    return (_0xb79152 = _0x3d01d3["dynCall_viijjii"] = _0x3d01d3["asm"]["hp"])["apply"](null, arguments);
  }, _0x6de26d = _0x3d01d3["dynCall_vijiiiiiii"] = function () {
    return (_0x6de26d = _0x3d01d3["dynCall_vijiiiiiii"] = _0x3d01d3["asm"]["ip"])["apply"](null, arguments);
  }, _0x4b5b7d = _0x3d01d3["dynCall_vijiiiiiiii"] = function () {
    return (_0x4b5b7d = _0x3d01d3["dynCall_vijiiiiiiii"] = _0x3d01d3["asm"]["jp"])["apply"](null, arguments);
  }, _0x2d2593 = _0x3d01d3["dynCall_jjiiii"] = function () {
    return (_0x2d2593 = _0x3d01d3["dynCall_jjiiii"] = _0x3d01d3["asm"]["kp"])["apply"](null, arguments);
  }, _0x2dee2f = _0x3d01d3["dynCall_jjiiiii"] = function () {
    return (_0x2dee2f = _0x3d01d3["dynCall_jjiiiii"] = _0x3d01d3["asm"]["lp"])["apply"](null, arguments);
  }, _0x2ecad1 = _0x3d01d3["dynCall_jijjji"] = function () {
    return (_0x2ecad1 = _0x3d01d3["dynCall_jijjji"] = _0x3d01d3["asm"]["mp"])["apply"](null, arguments);
  }, _0x2568fc = _0x3d01d3["dynCall_jijjjii"] = function () {
    return (_0x2568fc = _0x3d01d3["dynCall_jijjjii"] = _0x3d01d3["asm"]["np"])["apply"](null, arguments);
  }, _0x3a8318 = _0x3d01d3["dynCall_jjiii"] = function () {
    return (_0x3a8318 = _0x3d01d3["dynCall_jjiii"] = _0x3d01d3["asm"]["op"])["apply"](null, arguments);
  }, _0x2d886b = _0x3d01d3["dynCall_ijijiiiii"] = function () {
    return (_0x2d886b = _0x3d01d3["dynCall_ijijiiiii"] = _0x3d01d3["asm"]["pp"])["apply"](null, arguments);
  }, _0x27c8bb = _0x3d01d3["dynCall_ijjjiii"] = function () {
    return (_0x27c8bb = _0x3d01d3["dynCall_ijjjiii"] = _0x3d01d3["asm"]["qp"])["apply"](null, arguments);
  }, _0x59bb23 = _0x3d01d3["dynCall_vijjjiijii"] = function () {
    return (_0x59bb23 = _0x3d01d3["dynCall_vijjjiijii"] = _0x3d01d3["asm"]["rp"])["apply"](null, arguments);
  }, _0x62e649 = _0x3d01d3["dynCall_ijjjiijii"] = function () {
    return (_0x62e649 = _0x3d01d3["dynCall_ijjjiijii"] = _0x3d01d3["asm"]["sp"])["apply"](null, arguments);
  }, _0x4941ed = _0x3d01d3["dynCall_vijiiiiii"] = function () {
    return (_0x4941ed = _0x3d01d3["dynCall_vijiiiiii"] = _0x3d01d3["asm"]["tp"])["apply"](null, arguments);
  }, _0x4f7139 = _0x3d01d3["dynCall_jfi"] = function () {
    return (_0x4f7139 = _0x3d01d3["dynCall_jfi"] = _0x3d01d3["asm"]["up"])["apply"](null, arguments);
  }, _0x48b7e4 = _0x3d01d3["dynCall_fji"] = function () {
    return (_0x48b7e4 = _0x3d01d3["dynCall_fji"] = _0x3d01d3["asm"]["vp"])["apply"](null, arguments);
  }, _0xa49ad3 = _0x3d01d3["dynCall_fdi"] = function () {
    return (_0xa49ad3 = _0x3d01d3["dynCall_fdi"] = _0x3d01d3["asm"]["wp"])["apply"](null, arguments);
  }, _0x5b0dda = _0x3d01d3["dynCall_dfi"] = function () {
    return (_0x5b0dda = _0x3d01d3["dynCall_dfi"] = _0x3d01d3["asm"]["xp"])["apply"](null, arguments);
  }, _0xeca29d = _0x3d01d3["dynCall_jidii"] = function () {
    return (_0xeca29d = _0x3d01d3["dynCall_jidii"] = _0x3d01d3["asm"]["yp"])["apply"](null, arguments);
  }, _0x36f875 = _0x3d01d3["dynCall_vijji"] = function () {
    return (_0x36f875 = _0x3d01d3["dynCall_vijji"] = _0x3d01d3["asm"]["zp"])["apply"](null, arguments);
  }, _0x3a86ae = _0x3d01d3["dynCall_viiiiiiiji"] = function () {
    return (_0x3a86ae = _0x3d01d3["dynCall_viiiiiiiji"] = _0x3d01d3["asm"]["Ap"])["apply"](null, arguments);
  }, _0x4ad689 = _0x3d01d3["dynCall_viiiiiiiiji"] = function () {
    return (_0x4ad689 = _0x3d01d3["dynCall_viiiiiiiiji"] = _0x3d01d3["asm"]["Bp"])["apply"](null, arguments);
  }, _0x8fefbc = _0x3d01d3["dynCall_viiiiiiiiiji"] = function () {
    return (_0x8fefbc = _0x3d01d3["dynCall_viiiiiiiiiji"] = _0x3d01d3["asm"]["Cp"])["apply"](null, arguments);
  }, _0x409ba2 = _0x3d01d3["dynCall_ijiijii"] = function () {
    return (_0x409ba2 = _0x3d01d3["dynCall_ijiijii"] = _0x3d01d3["asm"]["Dp"])["apply"](null, arguments);
  }, _0x5a5bf1 = _0x3d01d3["dynCall_vjjiiiii"] = function () {
    return (_0x5a5bf1 = _0x3d01d3["dynCall_vjjiiiii"] = _0x3d01d3["asm"]["Ep"])["apply"](null, arguments);
  }, _0x4ad692 = _0x3d01d3["dynCall_vjjii"] = function () {
    return (_0x4ad692 = _0x3d01d3["dynCall_vjjii"] = _0x3d01d3["asm"]["Fp"])["apply"](null, arguments);
  }, _0x50dff5 = _0x3d01d3["dynCall_ijiiji"] = function () {
    return (_0x50dff5 = _0x3d01d3["dynCall_ijiiji"] = _0x3d01d3["asm"]["Gp"])["apply"](null, arguments);
  }, _0x3903a3 = _0x3d01d3["dynCall_ijiiiii"] = function () {
    return (_0x3903a3 = _0x3d01d3["dynCall_ijiiiii"] = _0x3d01d3["asm"]["Hp"])["apply"](null, arguments);
  }, _0x5b18f7 = _0x3d01d3["dynCall_ijiiiiji"] = function () {
    return (_0x5b18f7 = _0x3d01d3["dynCall_ijiiiiji"] = _0x3d01d3["asm"]["Ip"])["apply"](null, arguments);
  }, _0x3322f9 = _0x3d01d3["dynCall_ijjiii"] = function () {
    return (_0x3322f9 = _0x3d01d3["dynCall_ijjiii"] = _0x3d01d3["asm"]["Jp"])["apply"](null, arguments);
  }, _0x2770ad = _0x3d01d3["dynCall_jiiiiii"] = function () {
    return (_0x2770ad = _0x3d01d3["dynCall_jiiiiii"] = _0x3d01d3["asm"]["Kp"])["apply"](null, arguments);
  }, _0x2662f0 = _0x3d01d3["dynCall_ddi"] = function () {
    return (_0x2662f0 = _0x3d01d3["dynCall_ddi"] = _0x3d01d3["asm"]["Lp"])["apply"](null, arguments);
  }, _0x5c5d90 = _0x3d01d3["dynCall_ddiii"] = function () {
    return (_0x5c5d90 = _0x3d01d3["dynCall_ddiii"] = _0x3d01d3["asm"]["Mp"])["apply"](null, arguments);
  }, _0x5582e0 = _0x3d01d3["dynCall_ddii"] = function () {
    return (_0x5582e0 = _0x3d01d3["dynCall_ddii"] = _0x3d01d3["asm"]["Np"])["apply"](null, arguments);
  }, _0x4651c9 = _0x3d01d3["dynCall_idiii"] = function () {
    return (_0x4651c9 = _0x3d01d3["dynCall_idiii"] = _0x3d01d3["asm"]["Op"])["apply"](null, arguments);
  }, _0x4e7e2c = _0x3d01d3["dynCall_ifiii"] = function () {
    return (_0x4e7e2c = _0x3d01d3["dynCall_ifiii"] = _0x3d01d3["asm"]["Pp"])["apply"](null, arguments);
  }, _0x46d914 = _0x3d01d3["dynCall_ifiiiii"] = function () {
    return (_0x46d914 = _0x3d01d3["dynCall_ifiiiii"] = _0x3d01d3["asm"]["Qp"])["apply"](null, arguments);
  }, _0x5db3e7 = _0x3d01d3["dynCall_jjjii"] = function () {
    return (_0x5db3e7 = _0x3d01d3["dynCall_jjjii"] = _0x3d01d3["asm"]["Rp"])["apply"](null, arguments);
  }, _0x47a60e = _0x3d01d3["dynCall_vdiii"] = function () {
    return (_0x47a60e = _0x3d01d3["dynCall_vdiii"] = _0x3d01d3["asm"]["Sp"])["apply"](null, arguments);
  }, _0x1bb4b9 = _0x3d01d3["dynCall_jdii"] = function () {
    return (_0x1bb4b9 = _0x3d01d3["dynCall_jdii"] = _0x3d01d3["asm"]["Tp"])["apply"](null, arguments);
  }, _0x5e155f = _0x3d01d3["dynCall_vijijji"] = function () {
    return (_0x5e155f = _0x3d01d3["dynCall_vijijji"] = _0x3d01d3["asm"]["Up"])["apply"](null, arguments);
  }, _0xc1d1cf = _0x3d01d3["dynCall_iijjji"] = function () {
    return (_0xc1d1cf = _0x3d01d3["dynCall_iijjji"] = _0x3d01d3["asm"]["Vp"])["apply"](null, arguments);
  }, _0x408ee3 = _0x3d01d3["dynCall_viijjji"] = function () {
    return (_0x408ee3 = _0x3d01d3["dynCall_viijjji"] = _0x3d01d3["asm"]["Wp"])["apply"](null, arguments);
  }, _0x394425 = _0x3d01d3["dynCall_vdii"] = function () {
    return (_0x394425 = _0x3d01d3["dynCall_vdii"] = _0x3d01d3["asm"]["Xp"])["apply"](null, arguments);
  }, _0x2fcadb = _0x3d01d3["dynCall_iiiijii"] = function () {
    return (_0x2fcadb = _0x3d01d3["dynCall_iiiijii"] = _0x3d01d3["asm"]["Yp"])["apply"](null, arguments);
  }, _0x17885d = _0x3d01d3["dynCall_jijji"] = function () {
    return (_0x17885d = _0x3d01d3["dynCall_jijji"] = _0x3d01d3["asm"]["Zp"])["apply"](null, arguments);
  }, _0x5bc07f = _0x3d01d3["dynCall_diddi"] = function () {
    return (_0x5bc07f = _0x3d01d3["dynCall_diddi"] = _0x3d01d3["asm"]["_p"])["apply"](null, arguments);
  }, _0x1b7ee7 = _0x3d01d3["dynCall_viiijji"] = function () {
    return (_0x1b7ee7 = _0x3d01d3["dynCall_viiijji"] = _0x3d01d3["asm"]["$p"])["apply"](null, arguments);
  }, _0x48a8e6 = _0x3d01d3["dynCall_iijjii"] = function () {
    return (_0x48a8e6 = _0x3d01d3["dynCall_iijjii"] = _0x3d01d3["asm"]["aq"])["apply"](null, arguments);
  }, _0x45b0b1 = _0x3d01d3["dynCall_jjjji"] = function () {
    return (_0x45b0b1 = _0x3d01d3["dynCall_jjjji"] = _0x3d01d3["asm"]["bq"])["apply"](null, arguments);
  }, _0x3f6b36 = _0x3d01d3["dynCall_viijijii"] = function () {
    return (_0x3f6b36 = _0x3d01d3["dynCall_viijijii"] = _0x3d01d3["asm"]["cq"])["apply"](null, arguments);
  }, _0x123050 = _0x3d01d3["dynCall_viijijiii"] = function () {
    return (_0x123050 = _0x3d01d3["dynCall_viijijiii"] = _0x3d01d3["asm"]["dq"])["apply"](null, arguments);
  }, _0x29b690 = _0x3d01d3["dynCall_vijiji"] = function () {
    return (_0x29b690 = _0x3d01d3["dynCall_vijiji"] = _0x3d01d3["asm"]["eq"])["apply"](null, arguments);
  }, _0x3438d7 = _0x3d01d3["dynCall_viijiijiii"] = function () {
    return (_0x3438d7 = _0x3d01d3["dynCall_viijiijiii"] = _0x3d01d3["asm"]["fq"])["apply"](null, arguments);
  }, _0x1f27dc = _0x3d01d3["dynCall_viiiijiiii"] = function () {
    return (_0x1f27dc = _0x3d01d3["dynCall_viiiijiiii"] = _0x3d01d3["asm"]["gq"])["apply"](null, arguments);
  }, _0x31da5b = _0x3d01d3["dynCall_di"] = function () {
    return (_0x31da5b = _0x3d01d3["dynCall_di"] = _0x3d01d3["asm"]["hq"])["apply"](null, arguments);
  }, _0x27d86c = _0x3d01d3["dynCall_jiiiiiiiii"] = function () {
    return (_0x27d86c = _0x3d01d3["dynCall_jiiiiiiiii"] = _0x3d01d3["asm"]["iq"])["apply"](null, arguments);
  }, _0x31993d = _0x3d01d3["dynCall_iiiiijii"] = function () {
    return (_0x31993d = _0x3d01d3["dynCall_iiiiijii"] = _0x3d01d3["asm"]["jq"])["apply"](null, arguments);
  }, _0x30e5fa = _0x3d01d3["dynCall_iiiiidii"] = function () {
    return (_0x30e5fa = _0x3d01d3["dynCall_iiiiidii"] = _0x3d01d3["asm"]["kq"])["apply"](null, arguments);
  }, _0xf580c4 = _0x3d01d3["dynCall_iiiidii"] = function () {
    return (_0xf580c4 = _0x3d01d3["dynCall_iiiidii"] = _0x3d01d3["asm"]["lq"])["apply"](null, arguments);
  }, _0x244aff = _0x3d01d3["dynCall_iiidiii"] = function () {
    return (_0x244aff = _0x3d01d3["dynCall_iiidiii"] = _0x3d01d3["asm"]["mq"])["apply"](null, arguments);
  }, _0x3f9599 = _0x3d01d3["dynCall_iiiiffiiiji"] = function () {
    return (_0x3f9599 = _0x3d01d3["dynCall_iiiiffiiiji"] = _0x3d01d3["asm"]["nq"])["apply"](null, arguments);
  }, _0x51aaad = _0x3d01d3["dynCall_jiiiiiii"] = function () {
    return (_0x51aaad = _0x3d01d3["dynCall_jiiiiiii"] = _0x3d01d3["asm"]["oq"])["apply"](null, arguments);
  }, _0x595336 = _0x3d01d3["dynCall_iiiiffiiiii"] = function () {
    return (_0x595336 = _0x3d01d3["dynCall_iiiiffiiiii"] = _0x3d01d3["asm"]["pq"])["apply"](null, arguments);
  }, _0x1f2ba5 = _0x3d01d3["dynCall_jiiiiji"] = function () {
    return (_0x1f2ba5 = _0x3d01d3["dynCall_jiiiiji"] = _0x3d01d3["asm"]["qq"])["apply"](null, arguments);
  }, _0x3f802c = _0x3d01d3["dynCall_fiiiifi"] = function () {
    return (_0x3f802c = _0x3d01d3["dynCall_fiiiifi"] = _0x3d01d3["asm"]["rq"])["apply"](null, arguments);
  }, _0x41c0da = _0x3d01d3["dynCall_iiijjii"] = function () {
    return (_0x41c0da = _0x3d01d3["dynCall_iiijjii"] = _0x3d01d3["asm"]["sq"])["apply"](null, arguments);
  }, _0x30c482 = _0x3d01d3["dynCall_vij"] = function () {
    return (_0x30c482 = _0x3d01d3["dynCall_vij"] = _0x3d01d3["asm"]["tq"])["apply"](null, arguments);
  }, _0xd49838 = _0x3d01d3["dynCall_iiiijiii"] = function () {
    return (_0xd49838 = _0x3d01d3["dynCall_iiiijiii"] = _0x3d01d3["asm"]["uq"])["apply"](null, arguments);
  }, _0xc9110c = _0x3d01d3["dynCall_iiiij"] = function () {
    return (_0xc9110c = _0x3d01d3["dynCall_iiiij"] = _0x3d01d3["asm"]["vq"])["apply"](null, arguments);
  }, _0x11378c = _0x3d01d3["dynCall_ijj"] = function () {
    return (_0x11378c = _0x3d01d3["dynCall_ijj"] = _0x3d01d3["asm"]["wq"])["apply"](null, arguments);
  }, _0x5011d9 = _0x3d01d3["dynCall_vjji"] = function () {
    return (_0x5011d9 = _0x3d01d3["dynCall_vjji"] = _0x3d01d3["asm"]["xq"])["apply"](null, arguments);
  }, _0x1bf6bd = _0x3d01d3["dynCall_ij"] = function () {
    return (_0x1bf6bd = _0x3d01d3["dynCall_ij"] = _0x3d01d3["asm"]["yq"])["apply"](null, arguments);
  }, _0x251369 = _0x3d01d3["dynCall_vif"] = function () {
    return (_0x251369 = _0x3d01d3["dynCall_vif"] = _0x3d01d3["asm"]["zq"])["apply"](null, arguments);
  }, _0x3ed8ef = _0x3d01d3["dynCall_vid"] = function () {
    return (_0x3ed8ef = _0x3d01d3["dynCall_vid"] = _0x3d01d3["asm"]["Aq"])["apply"](null, arguments);
  }, _0x38552c = _0x3d01d3["dynCall_viiiiif"] = function () {
    return (_0x38552c = _0x3d01d3["dynCall_viiiiif"] = _0x3d01d3["asm"]["Bq"])["apply"](null, arguments);
  }, _0x42a2b5 = _0x3d01d3["dynCall_viiiif"] = function () {
    return (_0x42a2b5 = _0x3d01d3["dynCall_viiiif"] = _0x3d01d3["asm"]["Cq"])["apply"](null, arguments);
  }, _0x549e50 = _0x3d01d3["dynCall_viiiiiif"] = function () {
    return (_0x549e50 = _0x3d01d3["dynCall_viiiiiif"] = _0x3d01d3["asm"]["Dq"])["apply"](null, arguments);
  }, _0x56e656 = _0x3d01d3["dynCall_iiif"] = function () {
    return (_0x56e656 = _0x3d01d3["dynCall_iiif"] = _0x3d01d3["asm"]["Eq"])["apply"](null, arguments);
  }, _0x1f7fdb = _0x3d01d3["dynCall_fif"] = function () {
    return (_0x1f7fdb = _0x3d01d3["dynCall_fif"] = _0x3d01d3["asm"]["Fq"])["apply"](null, arguments);
  }, _0x3284c1 = _0x3d01d3["dynCall_iiiiiifff"] = function () {
    return (_0x3284c1 = _0x3d01d3["dynCall_iiiiiifff"] = _0x3d01d3["asm"]["Gq"])["apply"](null, arguments);
  }, _0x8560a0 = _0x3d01d3["dynCall_iiiiiifiif"] = function () {
    return (_0x8560a0 = _0x3d01d3["dynCall_iiiiiifiif"] = _0x3d01d3["asm"]["Hq"])["apply"](null, arguments);
  }, _0x1e3e4f = _0x3d01d3["dynCall_iiiiiifiii"] = function () {
    return (_0x1e3e4f = _0x3d01d3["dynCall_iiiiiifiii"] = _0x3d01d3["asm"]["Iq"])["apply"](null, arguments);
  }, _0x31f6fa = _0x3d01d3["dynCall_iiiiiiifiif"] = function () {
    return (_0x31f6fa = _0x3d01d3["dynCall_iiiiiiifiif"] = _0x3d01d3["asm"]["Jq"])["apply"](null, arguments);
  }, _0x575ed2 = _0x3d01d3["dynCall_fiff"] = function () {
    return (_0x575ed2 = _0x3d01d3["dynCall_fiff"] = _0x3d01d3["asm"]["Kq"])["apply"](null, arguments);
  }, _0x5711dc = _0x3d01d3["dynCall_fiiiiiifiifif"] = function () {
    return (_0x5711dc = _0x3d01d3["dynCall_fiiiiiifiifif"] = _0x3d01d3["asm"]["Lq"])["apply"](null, arguments);
  }, _0xe02f07 = _0x3d01d3["dynCall_fiiiiiifiiiif"] = function () {
    return (_0xe02f07 = _0x3d01d3["dynCall_fiiiiiifiiiif"] = _0x3d01d3["asm"]["Mq"])["apply"](null, arguments);
  }, _0x386393 = _0x3d01d3["dynCall_iifiiiijii"] = function () {
    return (_0x386393 = _0x3d01d3["dynCall_iifiiiijii"] = _0x3d01d3["asm"]["Nq"])["apply"](null, arguments);
  }, _0x50728e = _0x3d01d3["dynCall_vifijii"] = function () {
    return (_0x50728e = _0x3d01d3["dynCall_vifijii"] = _0x3d01d3["asm"]["Oq"])["apply"](null, arguments);
  }, _0x3e2ccc = _0x3d01d3["dynCall_iiiifffiii"] = function () {
    return (_0x3e2ccc = _0x3d01d3["dynCall_iiiifffiii"] = _0x3d01d3["asm"]["Pq"])["apply"](null, arguments);
  }, _0x57a474 = _0x3d01d3["dynCall_iiiifffffi"] = function () {
    return (_0x57a474 = _0x3d01d3["dynCall_iiiifffffi"] = _0x3d01d3["asm"]["Qq"])["apply"](null, arguments);
  }, _0x2b11f2 = _0x3d01d3["dynCall_viffiiiif"] = function () {
    return (_0x2b11f2 = _0x3d01d3["dynCall_viffiiiif"] = _0x3d01d3["asm"]["Rq"])["apply"](null, arguments);
  }, _0x4069bd = _0x3d01d3["dynCall_viffiifffffiii"] = function () {
    return (_0x4069bd = _0x3d01d3["dynCall_viffiifffffiii"] = _0x3d01d3["asm"]["Sq"])["apply"](null, arguments);
  }, _0x2ae72a = _0x3d01d3["dynCall_viffffiifffiiiiif"] = function () {
    return (_0x2ae72a = _0x3d01d3["dynCall_viffffiifffiiiiif"] = _0x3d01d3["asm"]["Tq"])["apply"](null, arguments);
  }, _0x45d525 = _0x3d01d3["dynCall_iiiifffffii"] = function () {
    return (_0x45d525 = _0x3d01d3["dynCall_iiiifffffii"] = _0x3d01d3["asm"]["Uq"])["apply"](null, arguments);
  }, _0x1ba52a = _0x3d01d3["dynCall_viiiiiiiiiiifii"] = function () {
    return (_0x1ba52a = _0x3d01d3["dynCall_viiiiiiiiiiifii"] = _0x3d01d3["asm"]["Vq"])["apply"](null, arguments);
  }, _0x1725aa = _0x3d01d3["dynCall_viff"] = function () {
    return (_0x1725aa = _0x3d01d3["dynCall_viff"] = _0x3d01d3["asm"]["Wq"])["apply"](null, arguments);
  }, _0x23945b = _0x3d01d3["dynCall_iiiiifiiiiif"] = function () {
    return (_0x23945b = _0x3d01d3["dynCall_iiiiifiiiiif"] = _0x3d01d3["asm"]["Xq"])["apply"](null, arguments);
  }, _0x6259f2 = _0x3d01d3["dynCall_viiifiiiii"] = function () {
    return (_0x6259f2 = _0x3d01d3["dynCall_viiifiiiii"] = _0x3d01d3["asm"]["Yq"])["apply"](null, arguments);
  }, _0x2cf890 = _0x3d01d3["dynCall_viiiifiiiiif"] = function () {
    return (_0x2cf890 = _0x3d01d3["dynCall_viiiifiiiiif"] = _0x3d01d3["asm"]["Zq"])["apply"](null, arguments);
  }, _0x34dd0d = _0x3d01d3["dynCall_iifff"] = function () {
    return (_0x34dd0d = _0x3d01d3["dynCall_iifff"] = _0x3d01d3["asm"]["_q"])["apply"](null, arguments);
  }, _0xd49291 = _0x3d01d3["dynCall_iif"] = function () {
    return (_0xd49291 = _0x3d01d3["dynCall_iif"] = _0x3d01d3["asm"]["$q"])["apply"](null, arguments);
  }, _0x2a8fd5 = _0x3d01d3["dynCall_viijijj"] = function () {
    return (_0x2a8fd5 = _0x3d01d3["dynCall_viijijj"] = _0x3d01d3["asm"]["ar"])["apply"](null, arguments);
  }, _0x13af55 = _0x3d01d3["dynCall_viijj"] = function () {
    return (_0x13af55 = _0x3d01d3["dynCall_viijj"] = _0x3d01d3["asm"]["br"])["apply"](null, arguments);
  }, _0x53cbbb = _0x3d01d3["dynCall_viiiij"] = function () {
    return (_0x53cbbb = _0x3d01d3["dynCall_viiiij"] = _0x3d01d3["asm"]["cr"])["apply"](null, arguments);
  }, _0x3f3f8c = _0x3d01d3["dynCall_iiijji"] = function () {
    return (_0x3f3f8c = _0x3d01d3["dynCall_iiijji"] = _0x3d01d3["asm"]["dr"])["apply"](null, arguments);
  }, _0x529558 = _0x3d01d3["dynCall_ijjiiiii"] = function () {
    return (_0x529558 = _0x3d01d3["dynCall_ijjiiiii"] = _0x3d01d3["asm"]["er"])["apply"](null, arguments);
  }, _0x3ea042 = _0x3d01d3["dynCall_vidd"] = function () {
    return (_0x3ea042 = _0x3d01d3["dynCall_vidd"] = _0x3d01d3["asm"]["fr"])["apply"](null, arguments);
  }, _0x589a60 = _0x3d01d3["dynCall_iiiiiifffiiifiii"] = function () {
    return (_0x589a60 = _0x3d01d3["dynCall_iiiiiifffiiifiii"] = _0x3d01d3["asm"]["gr"])["apply"](null, arguments);
  }, _0x3a4dac = _0x3d01d3["dynCall_viiif"] = function () {
    return (_0x3a4dac = _0x3d01d3["dynCall_viiif"] = _0x3d01d3["asm"]["hr"])["apply"](null, arguments);
  }, _0x1a3dd7 = _0x3d01d3["dynCall_viffff"] = function () {
    return (_0x1a3dd7 = _0x3d01d3["dynCall_viffff"] = _0x3d01d3["asm"]["ir"])["apply"](null, arguments);
  }, _0x534577 = _0x3d01d3["dynCall_vifff"] = function () {
    return (_0x534577 = _0x3d01d3["dynCall_vifff"] = _0x3d01d3["asm"]["jr"])["apply"](null, arguments);
  }, _0x56bae8 = _0x3d01d3["dynCall_viifff"] = function () {
    return (_0x56bae8 = _0x3d01d3["dynCall_viifff"] = _0x3d01d3["asm"]["kr"])["apply"](null, arguments);
  }, _0x5279af = _0x3d01d3["dynCall_vf"] = function () {
    return (_0x5279af = _0x3d01d3["dynCall_vf"] = _0x3d01d3["asm"]["lr"])["apply"](null, arguments);
  }, _0x65e4ee = _0x3d01d3["dynCall_vffff"] = function () {
    return (_0x65e4ee = _0x3d01d3["dynCall_vffff"] = _0x3d01d3["asm"]["mr"])["apply"](null, arguments);
  }, _0x148c30 = _0x3d01d3["dynCall_vff"] = function () {
    return (_0x148c30 = _0x3d01d3["dynCall_vff"] = _0x3d01d3["asm"]["nr"])["apply"](null, arguments);
  }, _0x560aea = _0x3d01d3["dynCall_fff"] = function () {
    return (_0x560aea = _0x3d01d3["dynCall_fff"] = _0x3d01d3["asm"]["or"])["apply"](null, arguments);
  }, _0xe27e6e = _0x3d01d3["dynCall_f"] = function () {
    return (_0xe27e6e = _0x3d01d3["dynCall_f"] = _0x3d01d3["asm"]["pr"])["apply"](null, arguments);
  }, _0x30f76c = _0x3d01d3["dynCall_vfff"] = function () {
    return (_0x30f76c = _0x3d01d3["dynCall_vfff"] = _0x3d01d3["asm"]["qr"])["apply"](null, arguments);
  }, _0xdf1cda = _0x3d01d3["dynCall_vffffffi"] = function () {
    return (_0xdf1cda = _0x3d01d3["dynCall_vffffffi"] = _0x3d01d3["asm"]["rr"])["apply"](null, arguments);
  }, _0x246e8b = _0x3d01d3["dynCall_ff"] = function () {
    return (_0x246e8b = _0x3d01d3["dynCall_ff"] = _0x3d01d3["asm"]["sr"])["apply"](null, arguments);
  }, _0x36dae5 = _0x3d01d3["dynCall_viid"] = function () {
    return (_0x36dae5 = _0x3d01d3["dynCall_viid"] = _0x3d01d3["asm"]["tr"])["apply"](null, arguments);
  }, _0x3c7dc2 = _0x3d01d3["dynCall_fiif"] = function () {
    return (_0x3c7dc2 = _0x3d01d3["dynCall_fiif"] = _0x3d01d3["asm"]["ur"])["apply"](null, arguments);
  }, _0x59cc6a = _0x3d01d3["dynCall_iiiiiiffiiiiiiiiiffffiii"] = function () {
    return (_0x59cc6a = _0x3d01d3["dynCall_iiiiiiffiiiiiiiiiffffiii"] = _0x3d01d3["asm"]["vr"])["apply"](null, arguments);
  }, _0x2b2ed5 = _0x3d01d3["dynCall_viififi"] = function () {
    return (_0x2b2ed5 = _0x3d01d3["dynCall_viififi"] = _0x3d01d3["asm"]["wr"])["apply"](null, arguments);
  }, _0x1bd8ed = _0x3d01d3["dynCall_viiiiiiiijiii"] = function () {
    return (_0x1bd8ed = _0x3d01d3["dynCall_viiiiiiiijiii"] = _0x3d01d3["asm"]["xr"])["apply"](null, arguments);
  };
  function _0x31cdf5(_0x3c717d, _0x45760c) {
    var _0x2cc8ce = _0x217682();
    try {
      return _0x35b840(_0x3c717d, _0x45760c);
    } catch (_0x9c0337) {
      _0x994ba8(_0x2cc8ce);
      if (_0x9c0337 !== _0x9c0337 + 0 && _0x9c0337 !== "longjmp") throw _0x9c0337;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x29d3dd(_0xd38394, _0x52c9bc, _0x54992b) {
    var _0x27ba22 = _0x217682();
    try {
      return _0x5f1e5d(_0xd38394, _0x52c9bc, _0x54992b);
    } catch (_0x5d59e6) {
      _0x994ba8(_0x27ba22);
      if (_0x5d59e6 !== _0x5d59e6 + 0 && _0x5d59e6 !== "longjmp") throw _0x5d59e6;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5e64e9(_0x310ec9, _0x577616, _0x20e21c, _0x342d38) {
    var _0x494743 = _0x217682();
    try {
      _0x11063c(_0x310ec9, _0x577616, _0x20e21c, _0x342d38);
    } catch (_0x18edba) {
      _0x994ba8(_0x494743);
      if (_0x18edba !== _0x18edba + 0 && _0x18edba !== "longjmp") throw _0x18edba;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x123d3f(_0x1f4501, _0x5e4e4a, _0x4e110d, _0x4facdd, _0x39cb35, _0x177159) {
    var _0x6b3d77 = _0x217682();
    try {
      return _0x2ba3c4(_0x1f4501, _0x5e4e4a, _0x4e110d, _0x4facdd, _0x39cb35, _0x177159);
    } catch (_0x4f7afe) {
      _0x994ba8(_0x6b3d77);
      if (_0x4f7afe !== _0x4f7afe + 0 && _0x4f7afe !== "longjmp") throw _0x4f7afe;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xd6dc0a(_0x24257a, _0x12168b, _0x5f1b73, _0x3e1a13) {
    var _0x575115 = _0x217682();
    try {
      return _0x493590(_0x24257a, _0x12168b, _0x5f1b73, _0x3e1a13);
    } catch (_0x3bd4e0) {
      _0x994ba8(_0x575115);
      if (_0x3bd4e0 !== _0x3bd4e0 + 0 && _0x3bd4e0 !== "longjmp") throw _0x3bd4e0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x1a83ad(_0x40305f, _0x1d07ed, _0xd26fd4, _0x13f451, _0x282288) {
    var _0x597363 = _0x217682();
    try {
      _0x3d8c33(_0x40305f, _0x1d07ed, _0xd26fd4, _0x13f451, _0x282288);
    } catch (_0xbff3e9) {
      _0x994ba8(_0x597363);
      if (_0xbff3e9 !== _0xbff3e9 + 0 && _0xbff3e9 !== "longjmp") throw _0xbff3e9;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4a1272(_0x2ba2ae, _0x55174c, _0x5bebf8, _0x151626, _0x21aeda) {
    var _0x2b33c4 = _0x217682();
    try {
      return _0x4c7f9f(_0x2ba2ae, _0x55174c, _0x5bebf8, _0x151626, _0x21aeda);
    } catch (_0x1000af) {
      _0x994ba8(_0x2b33c4);
      if (_0x1000af !== _0x1000af + 0 && _0x1000af !== "longjmp") throw _0x1000af;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x50af63(_0x16029f, _0x53e915, _0x553d5a, _0x1e932c) {
    var _0x5ceefe = _0x217682();
    try {
      return _0x35fe74(_0x16029f, _0x53e915, _0x553d5a, _0x1e932c);
    } catch (_0x41dd66) {
      _0x994ba8(_0x5ceefe);
      if (_0x41dd66 !== _0x41dd66 + 0 && _0x41dd66 !== "longjmp") throw _0x41dd66;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x48ce6b(_0x33ae31, _0x3ad82c, _0x131ed7, _0x43d08c) {
    var _0xbc329e = _0x217682();
    try {
      return _0x2a56af(_0x33ae31, _0x3ad82c, _0x131ed7, _0x43d08c);
    } catch (_0x3a64f6) {
      _0x994ba8(_0xbc329e);
      if (_0x3a64f6 !== _0x3a64f6 + 0 && _0x3a64f6 !== "longjmp") throw _0x3a64f6;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xc4a50b(_0x5893da, _0x115cba, _0x3aca9a, _0x43a6c4) {
    var _0x1cef22 = _0x217682();
    try {
      _0x19d541(_0x5893da, _0x115cba, _0x3aca9a, _0x43a6c4);
    } catch (_0x212ce2) {
      _0x994ba8(_0x1cef22);
      if (_0x212ce2 !== _0x212ce2 + 0 && _0x212ce2 !== "longjmp") throw _0x212ce2;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4cffef(_0x58025c, _0x376c85, _0x59ea84) {
    var _0x19d62f = _0x217682();
    try {
      _0x1996ad(_0x58025c, _0x376c85, _0x59ea84);
    } catch (_0x3e834c) {
      _0x994ba8(_0x19d62f);
      if (_0x3e834c !== _0x3e834c + 0 && _0x3e834c !== "longjmp") throw _0x3e834c;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x48daa4(_0x5c7998, _0x450c1f) {
    var _0x2e4482 = _0x217682();
    try {
      _0x29b024(_0x5c7998, _0x450c1f);
    } catch (_0x3deddd) {
      _0x994ba8(_0x2e4482);
      if (_0x3deddd !== _0x3deddd + 0 && _0x3deddd !== "longjmp") throw _0x3deddd;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x3d5d79(_0x353696) {
    var _0x3fead9 = _0x217682();
    try {
      _0x418e27(_0x353696);
    } catch (_0x360bbd) {
      _0x994ba8(_0x3fead9);
      if (_0x360bbd !== _0x360bbd + 0 && _0x360bbd !== "longjmp") throw _0x360bbd;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2587e1(_0x147a66) {
    var _0x14b35b = _0x217682();
    try {
      return _0x29e319(_0x147a66);
    } catch (_0x181b73) {
      _0x994ba8(_0x14b35b);
      if (_0x181b73 !== _0x181b73 + 0 && _0x181b73 !== "longjmp") throw _0x181b73;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4af2a6(_0x6c5e59, _0x2ff523, _0x209f27, _0x49490f, _0x2db7a2, _0x436ca1, _0x1c9a1d, _0xc633ec) {
    var _0x3fd7c5 = _0x217682();
    try {
      return _0x258401(_0x6c5e59, _0x2ff523, _0x209f27, _0x49490f, _0x2db7a2, _0x436ca1, _0x1c9a1d, _0xc633ec);
    } catch (_0x259c17) {
      _0x994ba8(_0x3fd7c5);
      if (_0x259c17 !== _0x259c17 + 0 && _0x259c17 !== "longjmp") throw _0x259c17;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x12befe(_0x4b6bfb, _0x4a3bf0, _0x1fae31, _0x4a6280, _0x1bb740, _0x2a5119) {
    var _0x1ae134 = _0x217682();
    try {
      _0x63c0b4(_0x4b6bfb, _0x4a3bf0, _0x1fae31, _0x4a6280, _0x1bb740, _0x2a5119);
    } catch (_0x201ab0) {
      _0x994ba8(_0x1ae134);
      if (_0x201ab0 !== _0x201ab0 + 0 && _0x201ab0 !== "longjmp") throw _0x201ab0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2d0b74(_0x5f2766, _0x52fabd, _0x2863bc, _0xf5c77, _0x2a0ceb, _0x301a5a, _0x23d71c) {
    var _0x375e1d = _0x217682();
    try {
      return _0xb4344f(_0x5f2766, _0x52fabd, _0x2863bc, _0xf5c77, _0x2a0ceb, _0x301a5a, _0x23d71c);
    } catch (_0x10e27b) {
      _0x994ba8(_0x375e1d);
      if (_0x10e27b !== _0x10e27b + 0 && _0x10e27b !== "longjmp") throw _0x10e27b;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x36ebc2(_0x4815c0, _0x20f6c4, _0x30fe6e, _0x39b031, _0x9ac6fa, _0x5009d2, _0x2b37fd, _0x43e86c) {
    var _0x2733e1 = _0x217682();
    try {
      _0x344bf2(_0x4815c0, _0x20f6c4, _0x30fe6e, _0x39b031, _0x9ac6fa, _0x5009d2, _0x2b37fd, _0x43e86c);
    } catch (_0x55722a) {
      _0x994ba8(_0x2733e1);
      if (_0x55722a !== _0x55722a + 0 && _0x55722a !== "longjmp") throw _0x55722a;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xb77ebd(_0x93c921, _0xbe2a34, _0x4d2bc0, _0x3c641b, _0x141379, _0x4db481, _0x37dc47, _0x10a5ac, _0x4d0cb8) {
    var _0x28a178 = _0x217682();
    try {
      return _0xef1f6d(_0x93c921, _0xbe2a34, _0x4d2bc0, _0x3c641b, _0x141379, _0x4db481, _0x37dc47, _0x10a5ac, _0x4d0cb8);
    } catch (_0x339f02) {
      _0x994ba8(_0x28a178);
      if (_0x339f02 !== _0x339f02 + 0 && _0x339f02 !== "longjmp") throw _0x339f02;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x37f08d(_0x1aee7f, _0x3f76b0, _0x99ead4, _0x1b54d0, _0x1889e6, _0x36f89f, _0x13b742) {
    var _0x4c43a8 = _0x217682();
    try {
      _0x1d5647(_0x1aee7f, _0x3f76b0, _0x99ead4, _0x1b54d0, _0x1889e6, _0x36f89f, _0x13b742);
    } catch (_0x4261a3) {
      _0x994ba8(_0x4c43a8);
      if (_0x4261a3 !== _0x4261a3 + 0 && _0x4261a3 !== "longjmp") throw _0x4261a3;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x142fbb(_0x100d78, _0x247627, _0x140e3b, _0x4af867, _0x1b1842, _0x5c72a5, _0xa7108a, _0x56b975, _0x5eb9e2, _0x49ea96, _0x53a64b) {
    var _0x4f0851 = _0x217682();
    try {
      _0x55e47b(_0x100d78, _0x247627, _0x140e3b, _0x4af867, _0x1b1842, _0x5c72a5, _0xa7108a, _0x56b975, _0x5eb9e2, _0x49ea96, _0x53a64b);
    } catch (_0x5d4f02) {
      _0x994ba8(_0x4f0851);
      if (_0x5d4f02 !== _0x5d4f02 + 0 && _0x5d4f02 !== "longjmp") throw _0x5d4f02;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x38cf27(_0x2cc56d, _0x34b94c, _0x241df2, _0x247454, _0x3af668, _0x2175e4, _0x18152d, _0x1d36cd, _0x502cc9) {
    var _0x5aadf0 = _0x217682();
    try {
      _0x5b9d7d(_0x2cc56d, _0x34b94c, _0x241df2, _0x247454, _0x3af668, _0x2175e4, _0x18152d, _0x1d36cd, _0x502cc9);
    } catch (_0x570ff3) {
      _0x994ba8(_0x5aadf0);
      if (_0x570ff3 !== _0x570ff3 + 0 && _0x570ff3 !== "longjmp") throw _0x570ff3;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x11877e(_0x12ac4c, _0x14fbb3, _0x20abc6) {
    var _0x358187 = _0x217682();
    try {
      return _0x45eac5(_0x12ac4c, _0x14fbb3, _0x20abc6);
    } catch (_0x617262) {
      _0x994ba8(_0x358187);
      if (_0x617262 !== _0x617262 + 0 && _0x617262 !== "longjmp") throw _0x617262;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x428afa(_0x4afd91, _0x2598cd, _0x29d433, _0x35a67b, _0x1ccb83) {
    var _0x374078 = _0x217682();
    try {
      _0x19112c(_0x4afd91, _0x2598cd, _0x29d433, _0x35a67b, _0x1ccb83);
    } catch (_0x35079) {
      _0x994ba8(_0x374078);
      if (_0x35079 !== _0x35079 + 0 && _0x35079 !== "longjmp") throw _0x35079;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x31419b(_0x5518ec, _0x22b1a6, _0x44e8ae, _0x13c079, _0x1b1660, _0x1f0ca2, _0x1888ba, _0x1f8f2a, _0x3a03c4, _0x474b83) {
    var _0x3bf015 = _0x217682();
    try {
      _0x1860a5(_0x5518ec, _0x22b1a6, _0x44e8ae, _0x13c079, _0x1b1660, _0x1f0ca2, _0x1888ba, _0x1f8f2a, _0x3a03c4, _0x474b83);
    } catch (_0x5d44b3) {
      _0x994ba8(_0x3bf015);
      if (_0x5d44b3 !== _0x5d44b3 + 0 && _0x5d44b3 !== "longjmp") throw _0x5d44b3;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2fd4ef(_0x28fb21, _0x146cf7, _0x3e0a08) {
    var _0x33fbe9 = _0x217682();
    try {
      return _0x20dd0f(_0x28fb21, _0x146cf7, _0x3e0a08);
    } catch (_0x1b2675) {
      _0x994ba8(_0x33fbe9);
      if (_0x1b2675 !== _0x1b2675 + 0 && _0x1b2675 !== "longjmp") throw _0x1b2675;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x429043(_0x24947b, _0x1ee431, _0x33936d, _0x556491, _0x28712b) {
    var _0x44a46d = _0x217682();
    try {
      _0x2f879d(_0x24947b, _0x1ee431, _0x33936d, _0x556491, _0x28712b);
    } catch (_0x158787) {
      _0x994ba8(_0x44a46d);
      if (_0x158787 !== _0x158787 + 0 && _0x158787 !== "longjmp") throw _0x158787;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x18b783(_0x5f582d, _0x145811, _0x462713, _0xe80639, _0x192aa5) {
    var _0x183328 = _0x217682();
    try {
      _0x1bb84f(_0x5f582d, _0x145811, _0x462713, _0xe80639, _0x192aa5);
    } catch (_0x16f0b4) {
      _0x994ba8(_0x183328);
      if (_0x16f0b4 !== _0x16f0b4 + 0 && _0x16f0b4 !== "longjmp") throw _0x16f0b4;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x40ca88(_0x2a902d, _0x276923, _0x56a767, _0x38204b, _0x5e0866) {
    var _0x50f97f = _0x217682();
    try {
      return _0x2ae4dd(_0x2a902d, _0x276923, _0x56a767, _0x38204b, _0x5e0866);
    } catch (_0x525f60) {
      _0x994ba8(_0x50f97f);
      if (_0x525f60 !== _0x525f60 + 0 && _0x525f60 !== "longjmp") throw _0x525f60;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x48decc(_0x3d992a, _0x4386e5, _0x2a559b, _0x142d8b, _0x3a1b46) {
    var _0x3bc01d = _0x217682();
    try {
      return _0x165683(_0x3d992a, _0x4386e5, _0x2a559b, _0x142d8b, _0x3a1b46);
    } catch (_0x25082b) {
      _0x994ba8(_0x3bc01d);
      if (_0x25082b !== _0x25082b + 0 && _0x25082b !== "longjmp") throw _0x25082b;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x25d3e6(_0x47badc, _0x33ca99, _0x5267b9, _0xd2daf, _0x1cead7) {
    var _0x5a656f = _0x217682();
    try {
      _0x464c62(_0x47badc, _0x33ca99, _0x5267b9, _0xd2daf, _0x1cead7);
    } catch (_0x4d034f) {
      _0x994ba8(_0x5a656f);
      if (_0x4d034f !== _0x4d034f + 0 && _0x4d034f !== "longjmp") throw _0x4d034f;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x13bd16(_0x56833f, _0x310271, _0x2b264a, _0x230b78) {
    var _0x2f5d0d = _0x217682();
    try {
      _0x17eab4(_0x56833f, _0x310271, _0x2b264a, _0x230b78);
    } catch (_0x25f02a) {
      _0x994ba8(_0x2f5d0d);
      if (_0x25f02a !== _0x25f02a + 0 && _0x25f02a !== "longjmp") throw _0x25f02a;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x1d0975(_0x27775f, _0x50a983, _0x3504af, _0x15df65) {
    var _0x5993bc = _0x217682();
    try {
      _0x90a0b7(_0x27775f, _0x50a983, _0x3504af, _0x15df65);
    } catch (_0x147cde) {
      _0x994ba8(_0x5993bc);
      if (_0x147cde !== _0x147cde + 0 && _0x147cde !== "longjmp") throw _0x147cde;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x40d134(_0x1de1d8, _0x390787, _0x7300d4, _0x4342c1, _0x5b636e, _0x5d14b5, _0x5aabaf) {
    var _0x10d9f9 = _0x217682();
    try {
      _0x5ad833(_0x1de1d8, _0x390787, _0x7300d4, _0x4342c1, _0x5b636e, _0x5d14b5, _0x5aabaf);
    } catch (_0x275641) {
      _0x994ba8(_0x10d9f9);
      if (_0x275641 !== _0x275641 + 0 && _0x275641 !== "longjmp") throw _0x275641;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x433cce(_0x192ee0, _0x7063db, _0xb5780e) {
    var _0x9f299 = _0x217682();
    try {
      return _0x51690d(_0x192ee0, _0x7063db, _0xb5780e);
    } catch (_0xf80205) {
      _0x994ba8(_0x9f299);
      if (_0xf80205 !== _0xf80205 + 0 && _0xf80205 !== "longjmp") throw _0xf80205;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x480054(_0x496e17, _0x5e6cce, _0x3c3611) {
    var _0x50fd27 = _0x217682();
    try {
      return _0x2462ca(_0x496e17, _0x5e6cce, _0x3c3611);
    } catch (_0x37a12d) {
      _0x994ba8(_0x50fd27);
      if (_0x37a12d !== _0x37a12d + 0 && _0x37a12d !== "longjmp") throw _0x37a12d;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x49a8e9(_0x253942, _0x4da3cd, _0x4b3522, _0x48eaa4, _0x155dbc, _0x314c2d, _0x57d088, _0x58d1ce, _0x50552b, _0x5741df, _0x2b48af, _0x975d01, _0x48bbdc) {
    var _0x53549b = _0x217682();
    try {
      _0x1461cd(_0x253942, _0x4da3cd, _0x4b3522, _0x48eaa4, _0x155dbc, _0x314c2d, _0x57d088, _0x58d1ce, _0x50552b, _0x5741df, _0x2b48af, _0x975d01, _0x48bbdc);
    } catch (_0x5e5773) {
      _0x994ba8(_0x53549b);
      if (_0x5e5773 !== _0x5e5773 + 0 && _0x5e5773 !== "longjmp") throw _0x5e5773;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4fb276(_0x2951f3, _0x3c53ff, _0x4db90d, _0x5285e5) {
    var _0x224bbf = _0x217682();
    try {
      return _0x1547a7(_0x2951f3, _0x3c53ff, _0x4db90d, _0x5285e5);
    } catch (_0x5ad3bf) {
      _0x994ba8(_0x224bbf);
      if (_0x5ad3bf !== _0x5ad3bf + 0 && _0x5ad3bf !== "longjmp") throw _0x5ad3bf;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2dea07(_0x85a855, _0x247490, _0x122ad5, _0x3b5170) {
    var _0x1a4a6b = _0x217682();
    try {
      return _0x525459(_0x85a855, _0x247490, _0x122ad5, _0x3b5170);
    } catch (_0x58b2f8) {
      _0x994ba8(_0x1a4a6b);
      if (_0x58b2f8 !== _0x58b2f8 + 0 && _0x58b2f8 !== "longjmp") throw _0x58b2f8;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x15fb17(_0x67cedf, _0x3e590c, _0xc79887, _0x69bfb7) {
    var _0x33abcb = _0x217682();
    try {
      return _0x4113f5(_0x67cedf, _0x3e590c, _0xc79887, _0x69bfb7);
    } catch (_0x5c4fa5) {
      _0x994ba8(_0x33abcb);
      if (_0x5c4fa5 !== _0x5c4fa5 + 0 && _0x5c4fa5 !== "longjmp") throw _0x5c4fa5;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x1c7c78(_0x54df68, _0xb83724, _0x583bee, _0x2e0803) {
    var _0x23e21d = _0x217682();
    try {
      return _0x4eb7f5(_0x54df68, _0xb83724, _0x583bee, _0x2e0803);
    } catch (_0x246e04) {
      _0x994ba8(_0x23e21d);
      if (_0x246e04 !== _0x246e04 + 0 && _0x246e04 !== "longjmp") throw _0x246e04;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4f79bb(_0x41cabb, _0x409b9b, _0x1143cb, _0x30c9d3, _0x9ecbe7, _0x44f0f3, _0x59ed33, _0x64d46, _0x5f26b6, _0x18d450) {
    var _0x20082a = _0x217682();
    try {
      return _0x13d688(_0x41cabb, _0x409b9b, _0x1143cb, _0x30c9d3, _0x9ecbe7, _0x44f0f3, _0x59ed33, _0x64d46, _0x5f26b6, _0x18d450);
    } catch (_0x8b94e3) {
      _0x994ba8(_0x20082a);
      if (_0x8b94e3 !== _0x8b94e3 + 0 && _0x8b94e3 !== "longjmp") throw _0x8b94e3;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x30e6fb(_0x26cd38, _0x2d4e7f, _0x38389e, _0x18ee85, _0xf3382, _0x378db4) {
    var _0x28a41c = _0x217682();
    try {
      _0x2b7ebb(_0x26cd38, _0x2d4e7f, _0x38389e, _0x18ee85, _0xf3382, _0x378db4);
    } catch (_0x400dc0) {
      _0x994ba8(_0x28a41c);
      if (_0x400dc0 !== _0x400dc0 + 0 && _0x400dc0 !== "longjmp") throw _0x400dc0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5b4145(_0x52a6bd, _0x50257c, _0x377143, _0x5ed328, _0x57ae6e, _0x202074) {
    var _0x19c794 = _0x217682();
    try {
      return _0x197416(_0x52a6bd, _0x50257c, _0x377143, _0x5ed328, _0x57ae6e, _0x202074);
    } catch (_0x4009f0) {
      _0x994ba8(_0x19c794);
      if (_0x4009f0 !== _0x4009f0 + 0 && _0x4009f0 !== "longjmp") throw _0x4009f0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x371612(_0x599898, _0x5de6be, _0x2a31b5) {
    var _0x19a52a = _0x217682();
    try {
      _0x65fdca(_0x599898, _0x5de6be, _0x2a31b5);
    } catch (_0x1965fd) {
      _0x994ba8(_0x19a52a);
      if (_0x1965fd !== _0x1965fd + 0 && _0x1965fd !== "longjmp") throw _0x1965fd;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x245357(_0x1602f8, _0x14c9ce, _0x3a6a08, _0x49c742, _0x19ac5b, _0x275950) {
    var _0xc9f625 = _0x217682();
    try {
      _0x51ce0f(_0x1602f8, _0x14c9ce, _0x3a6a08, _0x49c742, _0x19ac5b, _0x275950);
    } catch (_0x80a1b0) {
      _0x994ba8(_0xc9f625);
      if (_0x80a1b0 !== _0x80a1b0 + 0 && _0x80a1b0 !== "longjmp") throw _0x80a1b0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x533925(_0x2a35f2, _0xfc6b29, _0x3c5bbf, _0x35a24b, _0x59e82f, _0x5738f5, _0x147bf4, _0xce5898, _0x2bd097, _0x19ef00, _0x5c80b3, _0x1845e3) {
    var _0x3797f4 = _0x217682();
    try {
      _0x2d6c81(_0x2a35f2, _0xfc6b29, _0x3c5bbf, _0x35a24b, _0x59e82f, _0x5738f5, _0x147bf4, _0xce5898, _0x2bd097, _0x19ef00, _0x5c80b3, _0x1845e3);
    } catch (_0x33be8d) {
      _0x994ba8(_0x3797f4);
      if (_0x33be8d !== _0x33be8d + 0 && _0x33be8d !== "longjmp") throw _0x33be8d;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x14e6f3(_0x4b02c8, _0x218623, _0x1efb1e, _0x4070fa, _0x29d980, _0x3634d9, _0x51033f, _0x46855d, _0x32be04, _0x178c76, _0x7f75c, _0x131f07, _0x13b768) {
    var _0x24feab = _0x217682();
    try {
      return _0x47a566(_0x4b02c8, _0x218623, _0x1efb1e, _0x4070fa, _0x29d980, _0x3634d9, _0x51033f, _0x46855d, _0x32be04, _0x178c76, _0x7f75c, _0x131f07, _0x13b768);
    } catch (_0x12eb14) {
      _0x994ba8(_0x24feab);
      if (_0x12eb14 !== _0x12eb14 + 0 && _0x12eb14 !== "longjmp") throw _0x12eb14;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x527a19(_0x4261df, _0x3b3b90) {
    var _0x44c38e = _0x217682();
    try {
      return _0x220f30(_0x4261df, _0x3b3b90);
    } catch (_0x32704c) {
      _0x994ba8(_0x44c38e);
      if (_0x32704c !== _0x32704c + 0 && _0x32704c !== "longjmp") throw _0x32704c;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5d1373(_0x2db517, _0x279519, _0x2fa303, _0x3943f8, _0x3ba33f) {
    var _0x2a7cae = _0x217682();
    try {
      return _0x170539(_0x2db517, _0x279519, _0x2fa303, _0x3943f8, _0x3ba33f);
    } catch (_0x1bfbe4) {
      _0x994ba8(_0x2a7cae);
      if (_0x1bfbe4 !== _0x1bfbe4 + 0 && _0x1bfbe4 !== "longjmp") throw _0x1bfbe4;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x55b062(_0x46c56d, _0x2aa1d5, _0x27db3b, _0x37e100, _0x1aa03a, _0x46e51b, _0x1694eb, _0x4eee7d, _0x556aaa, _0x129c91, _0x4dc1c1) {
    var _0x6015f = _0x217682();
    try {
      return _0x1cbfad(_0x46c56d, _0x2aa1d5, _0x27db3b, _0x37e100, _0x1aa03a, _0x46e51b, _0x1694eb, _0x4eee7d, _0x556aaa, _0x129c91, _0x4dc1c1);
    } catch (_0x25e96d) {
      _0x994ba8(_0x6015f);
      if (_0x25e96d !== _0x25e96d + 0 && _0x25e96d !== "longjmp") throw _0x25e96d;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x219fa2(_0x5afc51, _0x164cef, _0x19725c, _0x27f72c, _0x2e6422, _0x34a11e, _0xbae3a0) {
    var _0x5bbcd7 = _0x217682();
    try {
      return _0xf580c4(_0x5afc51, _0x164cef, _0x19725c, _0x27f72c, _0x2e6422, _0x34a11e, _0xbae3a0);
    } catch (_0x355b56) {
      _0x994ba8(_0x5bbcd7);
      if (_0x355b56 !== _0x355b56 + 0 && _0x355b56 !== "longjmp") throw _0x355b56;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x21b346(_0x49489f, _0x5d999b, _0x3cf469, _0x5abb45, _0x1364a3, _0x4dd152, _0x2704b4) {
    var _0x5178ee = _0x217682();
    try {
      return _0x41098a(_0x49489f, _0x5d999b, _0x3cf469, _0x5abb45, _0x1364a3, _0x4dd152, _0x2704b4);
    } catch (_0x1f12aa) {
      _0x994ba8(_0x5178ee);
      if (_0x1f12aa !== _0x1f12aa + 0 && _0x1f12aa !== "longjmp") throw _0x1f12aa;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x87f028(_0x35b367, _0x4759cc, _0x2cd28b, _0x198285) {
    var _0x22736e = _0x217682();
    try {
      _0x3ea042(_0x35b367, _0x4759cc, _0x2cd28b, _0x198285);
    } catch (_0x30018f) {
      _0x994ba8(_0x22736e);
      if (_0x30018f !== _0x30018f + 0 && _0x30018f !== "longjmp") throw _0x30018f;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2bcbb9(_0x17d510, _0x1326f4, _0x1ab74b, _0x1ee237, _0x590786) {
    var _0xc022c2 = _0x217682();
    try {
      return _0x585570(_0x17d510, _0x1326f4, _0x1ab74b, _0x1ee237, _0x590786);
    } catch (_0x31d296) {
      _0x994ba8(_0xc022c2);
      if (_0x31d296 !== _0x31d296 + 0 && _0x31d296 !== "longjmp") throw _0x31d296;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x19655d(_0x11936b, _0x851176, _0x16f662, _0x5b91b2, _0x456e41) {
    var _0x4aedda = _0x217682();
    try {
      return _0x2cfce2(_0x11936b, _0x851176, _0x16f662, _0x5b91b2, _0x456e41);
    } catch (_0x3d66c3) {
      _0x994ba8(_0x4aedda);
      if (_0x3d66c3 !== _0x3d66c3 + 0 && _0x3d66c3 !== "longjmp") throw _0x3d66c3;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x54fbd6(_0x5e4e5a) {
    var _0x42cd98 = _0x217682();
    try {
      return _0x54e0fd(_0x5e4e5a);
    } catch (_0x2ff944) {
      _0x994ba8(_0x42cd98);
      if (_0x2ff944 !== _0x2ff944 + 0 && _0x2ff944 !== "longjmp") throw _0x2ff944;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x13253c(_0x474964, _0xe93691, _0x247988, _0x3b417d) {
    var _0x4613a9 = _0x217682();
    try {
      return _0x2a91f7(_0x474964, _0xe93691, _0x247988, _0x3b417d);
    } catch (_0x41c0ba) {
      _0x994ba8(_0x4613a9);
      if (_0x41c0ba !== _0x41c0ba + 0 && _0x41c0ba !== "longjmp") throw _0x41c0ba;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xa5de73(_0x4a0abb, _0x44162d, _0x583aaf, _0xdb05d2, _0x513a75, _0xbce351, _0x2bbefc, _0x454929) {
    var _0x538205 = _0x217682();
    try {
      return _0x40d1f6(_0x4a0abb, _0x44162d, _0x583aaf, _0xdb05d2, _0x513a75, _0xbce351, _0x2bbefc, _0x454929);
    } catch (_0x3db316) {
      _0x994ba8(_0x538205);
      if (_0x3db316 !== _0x3db316 + 0 && _0x3db316 !== "longjmp") throw _0x3db316;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x1cb31d(_0x53184c, _0x13d282) {
    var _0x3bad82 = _0x217682();
    try {
      return _0x59d085(_0x53184c, _0x13d282);
    } catch (_0x1552a2) {
      _0x994ba8(_0x3bad82);
      if (_0x1552a2 !== _0x1552a2 + 0 && _0x1552a2 !== "longjmp") throw _0x1552a2;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x3a1d7e(_0x26abda, _0x27a04d, _0x684348) {
    var _0x1a59ed = _0x217682();
    try {
      return _0x4ddcab(_0x26abda, _0x27a04d, _0x684348);
    } catch (_0x429371) {
      _0x994ba8(_0x1a59ed);
      if (_0x429371 !== _0x429371 + 0 && _0x429371 !== "longjmp") throw _0x429371;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xae1246(_0x2a9690, _0x7039d2, _0xe8a901, _0x14f125, _0x2f0109, _0x174736) {
    var _0x1e6080 = _0x217682();
    try {
      _0x17e228(_0x2a9690, _0x7039d2, _0xe8a901, _0x14f125, _0x2f0109, _0x174736);
    } catch (_0x2cd43d) {
      _0x994ba8(_0x1e6080);
      if (_0x2cd43d !== _0x2cd43d + 0 && _0x2cd43d !== "longjmp") throw _0x2cd43d;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xa834fb(_0x572f9c, _0x3f3e6b, _0x4fe2f2, _0x4cb76f) {
    var _0x1d2463 = _0x217682();
    try {
      return _0x34cb63(_0x572f9c, _0x3f3e6b, _0x4fe2f2, _0x4cb76f);
    } catch (_0x8f50a8) {
      _0x994ba8(_0x1d2463);
      if (_0x8f50a8 !== _0x8f50a8 + 0 && _0x8f50a8 !== "longjmp") throw _0x8f50a8;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x54ce2d(_0x587ba7, _0x2f3218, _0x59fe00, _0x4daa6a, _0x4cdc68, _0x450630) {
    var _0x12dd62 = _0x217682();
    try {
      return _0x7c2000(_0x587ba7, _0x2f3218, _0x59fe00, _0x4daa6a, _0x4cdc68, _0x450630);
    } catch (_0x3f7270) {
      _0x994ba8(_0x12dd62);
      if (_0x3f7270 !== _0x3f7270 + 0 && _0x3f7270 !== "longjmp") throw _0x3f7270;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2dc949(_0x35b1b5, _0x1cb13f, _0x2ea327, _0x570ba2, _0x330bfd, _0x2361a2, _0x194669, _0x46a381, _0xd29b3f, _0xe4408f) {
    var _0x11bc26 = _0x217682();
    try {
      return _0x194e1f(_0x35b1b5, _0x1cb13f, _0x2ea327, _0x570ba2, _0x330bfd, _0x2361a2, _0x194669, _0x46a381, _0xd29b3f, _0xe4408f);
    } catch (_0x4c589a) {
      _0x994ba8(_0x11bc26);
      if (_0x4c589a !== _0x4c589a + 0 && _0x4c589a !== "longjmp") throw _0x4c589a;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x292602(_0x42bf19, _0x222bcb, _0x59e94b, _0x5d8b6b, _0x18b74d, _0x28376b, _0x447bb7) {
    var _0x393714 = _0x217682();
    try {
      _0x4ebda6(_0x42bf19, _0x222bcb, _0x59e94b, _0x5d8b6b, _0x18b74d, _0x28376b, _0x447bb7);
    } catch (_0x5c87fb) {
      _0x994ba8(_0x393714);
      if (_0x5c87fb !== _0x5c87fb + 0 && _0x5c87fb !== "longjmp") throw _0x5c87fb;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5ad9f9(_0x2081f8, _0xe1c740, _0x30e2c2, _0x4a5256, _0x2221e9, _0x151abb, _0x3b543f) {
    var _0x42420d = _0x217682();
    try {
      return _0x16a5de(_0x2081f8, _0xe1c740, _0x30e2c2, _0x4a5256, _0x2221e9, _0x151abb, _0x3b543f);
    } catch (_0x2e2738) {
      _0x994ba8(_0x42420d);
      if (_0x2e2738 !== _0x2e2738 + 0 && _0x2e2738 !== "longjmp") throw _0x2e2738;
      _0x2ed5d3(1, 0);
    }
  }
  function _0xafbb3b(_0x3eed93, _0xb574, _0xac17eb, _0x3294e3, _0x44ad7c, _0x5e8feb, _0x3e1cc3, _0x472907, _0x461726, _0x56ee15, _0x4eb521, _0xc0112f) {
    var _0x1488c6 = _0x217682();
    try {
      return _0x2989b4(_0x3eed93, _0xb574, _0xac17eb, _0x3294e3, _0x44ad7c, _0x5e8feb, _0x3e1cc3, _0x472907, _0x461726, _0x56ee15, _0x4eb521, _0xc0112f);
    } catch (_0x4544a2) {
      _0x994ba8(_0x1488c6);
      if (_0x4544a2 !== _0x4544a2 + 0 && _0x4544a2 !== "longjmp") throw _0x4544a2;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x29464f(_0x5c2967, _0xb67d25, _0x45bdb6, _0x577f97, _0x16d541, _0x2f967a, _0x1dfd3c, _0xdb216, _0x5f509e, _0x1e9b8b) {
    var _0x43fbe5 = _0x217682();
    try {
      return _0x207703(_0x5c2967, _0xb67d25, _0x45bdb6, _0x577f97, _0x16d541, _0x2f967a, _0x1dfd3c, _0xdb216, _0x5f509e, _0x1e9b8b);
    } catch (_0x398f63) {
      _0x994ba8(_0x43fbe5);
      if (_0x398f63 !== _0x398f63 + 0 && _0x398f63 !== "longjmp") throw _0x398f63;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2a3db0(_0x43637d, _0x183a34, _0x4ce00b, _0x5e4ada, _0x2b3ac7, _0x51185c, _0x308db7, _0x52c904, _0x4af140, _0x4612b7, _0x2a4e13) {
    var _0x302b9a = _0x217682();
    try {
      return _0x4f0c58(_0x43637d, _0x183a34, _0x4ce00b, _0x5e4ada, _0x2b3ac7, _0x51185c, _0x308db7, _0x52c904, _0x4af140, _0x4612b7, _0x2a4e13);
    } catch (_0x39bc2d) {
      _0x994ba8(_0x302b9a);
      if (_0x39bc2d !== _0x39bc2d + 0 && _0x39bc2d !== "longjmp") throw _0x39bc2d;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x311650(_0x4c9922, _0x3e3264, _0x1f8733, _0x2336f5, _0x345a4f, _0xf3a00a) {
    var _0x510ee4 = _0x217682();
    try {
      return _0x56ea7f(_0x4c9922, _0x3e3264, _0x1f8733, _0x2336f5, _0x345a4f, _0xf3a00a);
    } catch (_0x3b5518) {
      _0x994ba8(_0x510ee4);
      if (_0x3b5518 !== _0x3b5518 + 0 && _0x3b5518 !== "longjmp") throw _0x3b5518;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x37fc57(_0x1660bd, _0x5fd89f, _0x230982, _0x478554, _0x1b93e6, _0x3d1011) {
    var _0x125267 = _0x217682();
    try {
      return _0x2aa8b9(_0x1660bd, _0x5fd89f, _0x230982, _0x478554, _0x1b93e6, _0x3d1011);
    } catch (_0x56a8da) {
      _0x994ba8(_0x125267);
      if (_0x56a8da !== _0x56a8da + 0 && _0x56a8da !== "longjmp") throw _0x56a8da;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x13bb36(_0x4628f5, _0x44ff48, _0x45c9bf, _0x566306, _0x51102b, _0x176d33, _0x319527, _0x367152, _0x1cac8f, _0x3bc808, _0x2dee67, _0x1c9919, _0x526ca0, _0x420ca3) {
    var _0x2ca620 = _0x217682();
    try {
      _0x473a86(_0x4628f5, _0x44ff48, _0x45c9bf, _0x566306, _0x51102b, _0x176d33, _0x319527, _0x367152, _0x1cac8f, _0x3bc808, _0x2dee67, _0x1c9919, _0x526ca0, _0x420ca3);
    } catch (_0x495850) {
      _0x994ba8(_0x2ca620);
      if (_0x495850 !== _0x495850 + 0 && _0x495850 !== "longjmp") throw _0x495850;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2e07a8(_0x37e872, _0x6dbf69, _0x906c14, _0x56d76f) {
    var _0x7e1988 = _0x217682();
    try {
      return _0x20f3c9(_0x37e872, _0x6dbf69, _0x906c14, _0x56d76f);
    } catch (_0x38d672) {
      _0x994ba8(_0x7e1988);
      if (_0x38d672 !== _0x38d672 + 0 && _0x38d672 !== "longjmp") throw _0x38d672;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2d28a9(_0x9716ff, _0x569542, _0x47952b, _0x3e27ea, _0x3b1f3b) {
    var _0x4cc5e0 = _0x217682();
    try {
      return _0x198d83(_0x9716ff, _0x569542, _0x47952b, _0x3e27ea, _0x3b1f3b);
    } catch (_0x55d666) {
      _0x994ba8(_0x4cc5e0);
      if (_0x55d666 !== _0x55d666 + 0 && _0x55d666 !== "longjmp") throw _0x55d666;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4ffd1c(_0x930303, _0x3aeaf7, _0x5b5cb9, _0x8af0c3, _0xdecfc3, _0x393d29, _0x39748d, _0x27640f) {
    var _0x66f7fa = _0x217682();
    try {
      _0x542a91(_0x930303, _0x3aeaf7, _0x5b5cb9, _0x8af0c3, _0xdecfc3, _0x393d29, _0x39748d, _0x27640f);
    } catch (_0x5df898) {
      _0x994ba8(_0x66f7fa);
      if (_0x5df898 !== _0x5df898 + 0 && _0x5df898 !== "longjmp") throw _0x5df898;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4de6c9(_0x2946fe, _0x39098f, _0x19b1ed, _0x2e6664, _0x3f8012) {
    var _0x12d554 = _0x217682();
    try {
      return _0x15f778(_0x2946fe, _0x39098f, _0x19b1ed, _0x2e6664, _0x3f8012);
    } catch (_0x582ac5) {
      _0x994ba8(_0x12d554);
      if (_0x582ac5 !== _0x582ac5 + 0 && _0x582ac5 !== "longjmp") throw _0x582ac5;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x25311f(_0x48bee4, _0x2bab95, _0x55f486, _0x172324, _0x13dc48, _0x52963d) {
    var _0x7e7fef = _0x217682();
    try {
      _0x267df8(_0x48bee4, _0x2bab95, _0x55f486, _0x172324, _0x13dc48, _0x52963d);
    } catch (_0x4830eb) {
      _0x994ba8(_0x7e7fef);
      if (_0x4830eb !== _0x4830eb + 0 && _0x4830eb !== "longjmp") throw _0x4830eb;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4a304e(_0x5eaa86, _0x5a0e75, _0x3229b9, _0x4cde91, _0x3f8b13) {
    var _0x2d9332 = _0x217682();
    try {
      _0x2b9ce9(_0x5eaa86, _0x5a0e75, _0x3229b9, _0x4cde91, _0x3f8b13);
    } catch (_0x3ac578) {
      _0x994ba8(_0x2d9332);
      if (_0x3ac578 !== _0x3ac578 + 0 && _0x3ac578 !== "longjmp") throw _0x3ac578;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x586d5e(_0xcdd98a, _0x1da74b, _0x411486, _0x147106, _0x27c65f, _0x18cd44, _0x1d6608) {
    var _0xccb5d2 = _0x217682();
    try {
      _0x11e1ea(_0xcdd98a, _0x1da74b, _0x411486, _0x147106, _0x27c65f, _0x18cd44, _0x1d6608);
    } catch (_0x35fa55) {
      _0x994ba8(_0xccb5d2);
      if (_0x35fa55 !== _0x35fa55 + 0 && _0x35fa55 !== "longjmp") throw _0x35fa55;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x58483d(_0x4793a3, _0x4b2509, _0x31a6e7, _0x55007a, _0x4c6238, _0x18f8cc) {
    var _0x187f14 = _0x217682();
    try {
      _0x5575b6(_0x4793a3, _0x4b2509, _0x31a6e7, _0x55007a, _0x4c6238, _0x18f8cc);
    } catch (_0x4b359c) {
      _0x994ba8(_0x187f14);
      if (_0x4b359c !== _0x4b359c + 0 && _0x4b359c !== "longjmp") throw _0x4b359c;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2cde7e(_0x538cd2, _0x40b144, _0x14952a, _0x21883c, _0x18abc8, _0x19f891) {
    var _0x43d2f4 = _0x217682();
    try {
      return _0x19cc9a(_0x538cd2, _0x40b144, _0x14952a, _0x21883c, _0x18abc8, _0x19f891);
    } catch (_0x81b7c) {
      _0x994ba8(_0x43d2f4);
      if (_0x81b7c !== _0x81b7c + 0 && _0x81b7c !== "longjmp") throw _0x81b7c;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x49da22(_0xde0fa3, _0x233399, _0x28f1d6, _0x5a0436) {
    var _0x1ef621 = _0x217682();
    try {
      return _0x3936c9(_0xde0fa3, _0x233399, _0x28f1d6, _0x5a0436);
    } catch (_0x57f680) {
      _0x994ba8(_0x1ef621);
      if (_0x57f680 !== _0x57f680 + 0 && _0x57f680 !== "longjmp") throw _0x57f680;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x26f5fa(_0x4c02a3, _0x1fb05b, _0x15d413, _0x2c5363) {
    var _0x2492dd = _0x217682();
    try {
      return _0x1abf58(_0x4c02a3, _0x1fb05b, _0x15d413, _0x2c5363);
    } catch (_0x354457) {
      _0x994ba8(_0x2492dd);
      if (_0x354457 !== _0x354457 + 0 && _0x354457 !== "longjmp") throw _0x354457;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x9f5ece(_0x43932e, _0xe62892, _0x4de730) {
    var _0x32ab9f = _0x217682();
    try {
      return _0x3f9aa3(_0x43932e, _0xe62892, _0x4de730);
    } catch (_0x49badd) {
      _0x994ba8(_0x32ab9f);
      if (_0x49badd !== _0x49badd + 0 && _0x49badd !== "longjmp") throw _0x49badd;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x40c6e4(_0x31065d, _0x118e20, _0x50d6fa, _0x12344a, _0x2ef884, _0x72d1ab, _0x85b399, _0x48e553, _0x5654e6) {
    var _0x3b9e19 = _0x217682();
    try {
      _0x2a0e9b(_0x31065d, _0x118e20, _0x50d6fa, _0x12344a, _0x2ef884, _0x72d1ab, _0x85b399, _0x48e553, _0x5654e6);
    } catch (_0x1d9ae6) {
      _0x994ba8(_0x3b9e19);
      if (_0x1d9ae6 !== _0x1d9ae6 + 0 && _0x1d9ae6 !== "longjmp") throw _0x1d9ae6;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x252480(_0xdeea8, _0xa710a0, _0x1b26d2, _0x213b0c, _0x47e544, _0x7b9d8c, _0x3764c4) {
    var _0x3225d9 = _0x217682();
    try {
      return _0x6d9acd(_0xdeea8, _0xa710a0, _0x1b26d2, _0x213b0c, _0x47e544, _0x7b9d8c, _0x3764c4);
    } catch (_0x505e51) {
      _0x994ba8(_0x3225d9);
      if (_0x505e51 !== _0x505e51 + 0 && _0x505e51 !== "longjmp") throw _0x505e51;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x567354(_0x2974b, _0x2ebf1a, _0x31f48f, _0x42bedd, _0x15500b, _0x4f5b94) {
    var _0xb6f240 = _0x217682();
    try {
      return _0x42c9de(_0x2974b, _0x2ebf1a, _0x31f48f, _0x42bedd, _0x15500b, _0x4f5b94);
    } catch (_0x43cff0) {
      _0x994ba8(_0xb6f240);
      if (_0x43cff0 !== _0x43cff0 + 0 && _0x43cff0 !== "longjmp") throw _0x43cff0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x3a2979(_0x2f71d7, _0x306b8b, _0x3a69c7, _0x19e181, _0x5b4555, _0x371c65, _0x31e05f, _0x3a3dfb, _0x76ccc6, _0x303995, _0x3adb66, _0x35342f) {
    var _0x56edc9 = _0x217682();
    try {
      return _0x5bc485(_0x2f71d7, _0x306b8b, _0x3a69c7, _0x19e181, _0x5b4555, _0x371c65, _0x31e05f, _0x3a3dfb, _0x76ccc6, _0x303995, _0x3adb66, _0x35342f);
    } catch (_0x49e8e6) {
      _0x994ba8(_0x56edc9);
      if (_0x49e8e6 !== _0x49e8e6 + 0 && _0x49e8e6 !== "longjmp") throw _0x49e8e6;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x6027cd(_0xacdcde, _0x3a73e9, _0x274661, _0x5f4871) {
    var _0x5615bb = _0x217682();
    try {
      _0x2ae5fb(_0xacdcde, _0x3a73e9, _0x274661, _0x5f4871);
    } catch (_0x34372f) {
      _0x994ba8(_0x5615bb);
      if (_0x34372f !== _0x34372f + 0 && _0x34372f !== "longjmp") throw _0x34372f;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x46e6be(_0x326ebb, _0x1f0753, _0x5ba329, _0x59d575, _0x5ad56d) {
    var _0xb1165a = _0x217682();
    try {
      return _0x4a60a0(_0x326ebb, _0x1f0753, _0x5ba329, _0x59d575, _0x5ad56d);
    } catch (_0x5e76c6) {
      _0x994ba8(_0xb1165a);
      if (_0x5e76c6 !== _0x5e76c6 + 0 && _0x5e76c6 !== "longjmp") throw _0x5e76c6;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x223249(_0x4dbd9b, _0x47b457, _0x5e5cba, _0x540861, _0x55feb8, _0x132231, _0x3a556f) {
    var _0x3faa8c = _0x217682();
    try {
      return _0x9bfa94(_0x4dbd9b, _0x47b457, _0x5e5cba, _0x540861, _0x55feb8, _0x132231, _0x3a556f);
    } catch (_0x3c761a) {
      _0x994ba8(_0x3faa8c);
      if (_0x3c761a !== _0x3c761a + 0 && _0x3c761a !== "longjmp") throw _0x3c761a;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4860d4(_0x4a106b, _0x500177, _0x2efe3f, _0x591ed2, _0x5b1fcf, _0x34840c) {
    var _0x2022a6 = _0x217682();
    try {
      return _0x1e7907(_0x4a106b, _0x500177, _0x2efe3f, _0x591ed2, _0x5b1fcf, _0x34840c);
    } catch (_0x5d764b) {
      _0x994ba8(_0x2022a6);
      if (_0x5d764b !== _0x5d764b + 0 && _0x5d764b !== "longjmp") throw _0x5d764b;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x2e654d(_0x7a8076, _0x468793, _0x5798c3, _0x5e42a1, _0x5b0f25) {
    var _0xdeae39 = _0x217682();
    try {
      _0x58feb9(_0x7a8076, _0x468793, _0x5798c3, _0x5e42a1, _0x5b0f25);
    } catch (_0x5b8d8e) {
      _0x994ba8(_0xdeae39);
      if (_0x5b8d8e !== _0x5b8d8e + 0 && _0x5b8d8e !== "longjmp") throw _0x5b8d8e;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x9a8702(_0x4ea248, _0xd05b1f, _0x46ef96, _0x254201, _0x4d46eb, _0x2636fa, _0x31fe15) {
    var _0x2632fe = _0x217682();
    try {
      _0x2572d6(_0x4ea248, _0xd05b1f, _0x46ef96, _0x254201, _0x4d46eb, _0x2636fa, _0x31fe15);
    } catch (_0x21a9fb) {
      _0x994ba8(_0x2632fe);
      if (_0x21a9fb !== _0x21a9fb + 0 && _0x21a9fb !== "longjmp") throw _0x21a9fb;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5ba024(_0x5f2844, _0x34e284, _0x1a07bb, _0x23d9c1, _0x4a93db, _0x2d353e, _0x24cf19, _0x11ce88, _0x156d87, _0x135213, _0x17c7d0) {
    var _0x56389b = _0x217682();
    try {
      _0x2817ee(_0x5f2844, _0x34e284, _0x1a07bb, _0x23d9c1, _0x4a93db, _0x2d353e, _0x24cf19, _0x11ce88, _0x156d87, _0x135213, _0x17c7d0);
    } catch (_0x10d9c0) {
      _0x994ba8(_0x56389b);
      if (_0x10d9c0 !== _0x10d9c0 + 0 && _0x10d9c0 !== "longjmp") throw _0x10d9c0;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x3cb734(_0x316048, _0x16399b, _0x3f75a8, _0x4df23a, _0x31606b, _0x4abd45, _0x396ec4, _0x2d0a21) {
    var _0x1d395b = _0x217682();
    try {
      _0x1588da(_0x316048, _0x16399b, _0x3f75a8, _0x4df23a, _0x31606b, _0x4abd45, _0x396ec4, _0x2d0a21);
    } catch (_0x2e1773) {
      _0x994ba8(_0x1d395b);
      if (_0x2e1773 !== _0x2e1773 + 0 && _0x2e1773 !== "longjmp") throw _0x2e1773;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5d2761(_0x54f410, _0xf553f1, _0x5d18ac, _0x41d6f4, _0x408f1b, _0x5a1b99, _0x285b12, _0x38be2e, _0x833c95, _0x26f29d, _0xd2b3ed) {
    var _0x8a0c41 = _0x217682();
    try {
      _0x9f0b9d(_0x54f410, _0xf553f1, _0x5d18ac, _0x41d6f4, _0x408f1b, _0x5a1b99, _0x285b12, _0x38be2e, _0x833c95, _0x26f29d, _0xd2b3ed);
    } catch (_0x207b74) {
      _0x994ba8(_0x8a0c41);
      if (_0x207b74 !== _0x207b74 + 0 && _0x207b74 !== "longjmp") throw _0x207b74;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5332af(_0x204233, _0x209368, _0x508f06, _0x397ccc, _0x6558ea, _0x4b0aae, _0x2e7661) {
    var _0x6a134a = _0x217682();
    try {
      return _0x1e8f0c(_0x204233, _0x209368, _0x508f06, _0x397ccc, _0x6558ea, _0x4b0aae, _0x2e7661);
    } catch (_0x40ee7f) {
      _0x994ba8(_0x6a134a);
      if (_0x40ee7f !== _0x40ee7f + 0 && _0x40ee7f !== "longjmp") throw _0x40ee7f;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x4dfdd0(_0x1818f5, _0x4d4418, _0x1db9fa, _0x90c0c9, _0x1a21ad, _0x2fdf4b) {
    var _0x52b780 = _0x217682();
    try {
      return _0x31bfe5(_0x1818f5, _0x4d4418, _0x1db9fa, _0x90c0c9, _0x1a21ad, _0x2fdf4b);
    } catch (_0x193f35) {
      _0x994ba8(_0x52b780);
      if (_0x193f35 !== _0x193f35 + 0 && _0x193f35 !== "longjmp") throw _0x193f35;
      _0x2ed5d3(1, 0);
    }
  }
  function _0x5dbc8c(_0x33e0c8, _0x5f4922, _0x198cf2, _0x4c8994, _0x2c671c, _0x297454, _0x13595c, _0x1fcd75) {
    var _0x2ff026 = _0x217682();
    try {
      return _0x2fcadb(_0x33e0c8, _0x5f4922, _0x198cf2, _0x4c8994, _0x2c671c, _0x297454, _0x13595c, _0x1fcd75);
    } catch (_0x2909be) {
      _0x994ba8(_0x2ff026);
      if (_0x2909be !== _0x2909be + 0 && _0x2909be !== "longjmp") throw _0x2909be;
      _0x2ed5d3(1, 0);
    }
  }
  _0x3d01d3["ccall"] = _0x430a53, _0x3d01d3["cwrap"] = _0x253049, _0x3d01d3["stackTrace"] = _0x39ad7b, _0x3d01d3["addRunDependency"] = _0x3e50c2, _0x3d01d3["removeRunDependency"] = _0x47f78c, _0x3d01d3["FS_createPath"] = _0x37953b["createPath"], _0x3d01d3["FS_createDataFile"] = _0x37953b["createDataFile"], _0x3d01d3["stackTrace"] = _0x39ad7b;
  var _0x5a7f5a;
  function _0x561aff(_0x1564b9) {
    this["name"] = "ExitStatus", this["message"] = "Program terminated with exit(" + _0x1564b9 + ")", this["status"] = _0x1564b9;
  }
  var _0x4214a4 = ![];
  _0x53c8b4 = function _0x3ea386() {
    if (!_0x5a7f5a) _0x107c98();
    if (!_0x5a7f5a) _0x53c8b4 = _0x3ea386;
  };
  function _0x54d361(_0x61d542) {
    var _0x483aca = _0x3d01d3["_main"];
    _0x61d542 = _0x61d542 || [];
    var _0x3562e7 = _0x61d542["length"] + 1, _0x3e8550 = _0x2c26ef((_0x3562e7 + 1) * 4);
    _0x5f4233[_0x3e8550 >> 2] = _0x158d23(_0x49477b);
    for (var _0x4770c3 = 1; _0x4770c3 < _0x3562e7; _0x4770c3++) {
      _0x5f4233[(_0x3e8550 >> 2) + _0x4770c3] = _0x158d23(_0x61d542[_0x4770c3 - 1]);
    }
    _0x5f4233[(_0x3e8550 >> 2) + _0x3562e7] = 0;
    try {
      var _0x4aadc7 = _0x483aca(_0x3562e7, _0x3e8550);
      _0x3a3d54(_0x4aadc7, !![]);
    } catch (_0x31a9da) {
      if (_0x31a9da instanceof _0x561aff) return; else {
        if (_0x31a9da == "unwind") return; else {
          var _0x593467 = _0x31a9da;
          _0x31a9da && typeof _0x31a9da === "object" && _0x31a9da["stack"] && (_0x593467 = [_0x31a9da, _0x31a9da["stack"]]), _0x366b43("exception thrown: " + _0x593467), _0x259311(1, _0x31a9da);
        }
      }
    } finally {
      _0x4214a4 = !![];
    }
  }
  function _0x107c98(_0x5ba93a) {
    _0x5ba93a = _0x5ba93a || _0xa0e817;
    if (_0x3bea71 > 0) return;
    _0xf9ddb2();
    if (_0x3bea71 > 0) return;
    function _0x22ffcc() {
      if (_0x5a7f5a) return;
      _0x5a7f5a = !![], _0x3d01d3["calledRun"] = !![];
      if (_0x259747) return;
      _0x2872b7(), _0x4b0fb7();
      if (_0x3d01d3["onRuntimeInitialized"]) _0x3d01d3["onRuntimeInitialized"]();
      if (_0x654059) _0x54d361(_0x5ba93a);
      _0x31dd56();
    }
    _0x3d01d3["setStatus"] ? (_0x3d01d3["setStatus"]("Running..."), setTimeout(function () {
      setTimeout(function () {
        _0x3d01d3["setStatus"]("");
      }, 1), _0x22ffcc();
    }, 1)) : _0x22ffcc();
  }
  _0x3d01d3["run"] = _0x107c98;
  function _0x3a3d54(_0x26a049, _0x5bb508) {
    _0x474a84 = _0x26a049;
    if (_0x5bb508 && _0x41f9cc() && _0x26a049 === 0) return;
    if (_0x41f9cc()) {} else {
      _0x228af5();
      if (_0x3d01d3["onExit"]) _0x3d01d3["onExit"](_0x26a049);
      _0x259747 = !![];
    }
    _0x259311(_0x26a049, new _0x561aff(_0x26a049));
  }
  if (_0x3d01d3["preInit"]) {
    if (typeof _0x3d01d3["preInit"] == "function") _0x3d01d3["preInit"] = [_0x3d01d3["preInit"]];
    while (_0x3d01d3["preInit"]["length"] > 0) {
      _0x3d01d3["preInit"]["pop"]()();
    }
  }
  var _0x654059 = !![];
  if (_0x3d01d3["noInitialRun"]) _0x654059 = ![];
  _0x107c98();
}
config["sourceHtml"] = "REJVQUVUTWNid3hGTUVwd0p6d0FCUXNDRDFnS1hBY2REQlVkQmtzR0dSSWtUVFlTQ2lwUQ==", window["GMPERFORM"] = {}, window["GMPERFORM"]["LOAD"] = Date["now"]();
!window["GMSOFT_OPTIONS"] && (window["GMSOFT_OPTIONS"] = config, window["GMSOFT_OPTIONS"]["domainHost"] = window["location"]["hostname"]);
config["referrer"] = document["referrer"];
function gmdebugtime(_0x4b77fb) {
  console["log"]("_TIME_" + _0x4b77fb + ":" + (Date["now"]() - window["GMPERFORM"]["LOAD"]));
}
function gmdebug(_0x251ff0) {
  console["log"](_0x251ff0);
}
function gmEvent(_0x181428, _0x545c96) {
  loadGMData(_0x181428, _0x545c96);
}
function gmStartGame(_0x37504b) {
  _0x37504b();
}
function gmStartAds(_0x26b1ec) {
  _0x26b1ec();
}
let fireFPS = 0;
async function loadGMData(_0x4ca848, _0xc637b0) {
  try {
    if (!config["eventAPI"]) return;
    if (!config["eventLog"] && _0x4ca848 != "document-ready" && _0x4ca848 != "ban-game" && _0x4ca848 != "start-game" && _0x4ca848 != "unload-game") return;
    if (_0x4ca848 == "fps") try {
      let _0x31f951 = _0xc637b0["split"]("|");
      _0x31f951["length"] >= 2 && (firebaseLogEventParameter("timecounter", _0x31f951[0]), fireFPS < 2 && (fireFPS++, firebaseLogEventParameter("fps", _0x31f951[1])));
    } catch (_0x5a58a7) {
      console["log"]("Error extracting time from abc:", _0x5a58a7["message"]);
    }
    let _0x42a626 = "";
    _0xc637b0 && (_0x42a626 = "&msg=" + encodeURIComponent(xorEncryptMsg(_0xc637b0)));
    _0x42a626 += "&time=" + encodeURIComponent(Date["now"]() - window["GMPERFORM"]["LOAD"]), _0x42a626 += "&gid=" + config["gameId"];
    (_0x4ca848 == "ban-game" || _0x4ca848 == "document-ready" || _0x4ca848 == "start-game") && (_0x42a626 += "&wtop=" + window["top"]["location"]["hostname"], _0x42a626 += "&hn=" + window["location"]["hostname"], _0x42a626 += "&referrer=" + config["referrer"]);
    let _0x102330 = "&data=" + btoa(_0x42a626), _0x3fff17 = config["eventAPI"] + "?event=" + _0x4ca848 + _0x102330, _0x2dd216 = new XMLHttpRequest;
    _0x2dd216["open"]("GET", _0x3fff17), _0x2dd216["onreadystatechange"] = function () {
      if (_0x2dd216["readyState"] !== 4) return;
      _0x2dd216["status"] === 200 ? console["log"](_0x2dd216["responseText"]) : console["log"]("HTTP error", _0x2dd216["status"], _0x2dd216["statusText"]);
    }, _0x2dd216["send"]();
  } catch (_0x1d1d7e) {}
}
function xorEncryptMsg(_0x5645a5) {
  let _0x3c8835 = "gmdata@&!message@!3!@", _0x5a1e8c = "";
  for (let _0x597a18 = 0; _0x597a18 < _0x5645a5["length"]; _0x597a18++) {
    const _0x11020d = _0x5645a5["charCodeAt"](_0x597a18) ^ _0x3c8835["charCodeAt"](_0x597a18 % _0x3c8835["length"]);
    _0x5a1e8c += String["fromCharCode"](_0x11020d);
  }
  return btoa(_0x5a1e8c);
}
function check_event_log() {
  const _0x2781f3 = window["location"]["search"], _0x1eb4a4 = new URLSearchParams(_0x2781f3);
  _0x1eb4a4["has"]("e") && (config["eventLog"] = !![]);
}
check_event_log();
function executeCode(_0x44110f) {
  try {
    const _0x1c171f = eval(_0x44110f);
    return gmdebug("Result:", _0x1c171f), _0x1c171f;
  } catch (_0x3f5fd6) {
    gmdebug("Error executing code:", _0x3f5fd6);
  }
}
function bangame(_0x24ddb6, _0x501622, _0x2c0a98, _0x453104) {
  return;
}
document["addEventListener"]("DOMContentLoaded", function () {
  gmEvent("document-ready");
}), window["addEventListener"]("beforeunload", function (_0x1855e2) {
  gmEvent("unload-game");
}), append_function();
function append_function() {
  setTimeout(function () {
    try {
      let _0x28d672 = "data@&@#$@#^FFgdfg" + "!1est" + "imate", _0x32d624 = "data@&&%^*((*^&^&766))" + "nNhZmRzZGY=", _0x515825 = executeCode('atob(atob("' + window["GMSOFT_OPTIONS"]["sourceHtml"] + '"))'), _0x3c8faa = _0x32d624, _0xbf120e = "";
      for (let _0x121e5e = 0; _0x121e5e < _0x515825["length"]; _0x121e5e++) {
        const _0x2867a0 = _0x515825["charCodeAt"](_0x121e5e) ^ _0x28d672["charCodeAt"](_0x121e5e % _0x28d672["length"]);
        _0xbf120e += String["fromCharCode"](_0x2867a0);
      }
      sourceHtml = _0xbf120e;
      let _0x3af5ef = document["getElementById"]("gmsoft-jssdk");
      (!_0x3af5ef || _0x3af5ef["src"] != sourceHtml) && bangame("d", "s", "id", "code 1");
    } catch (_0x424fbc) {
      bangame("d", "s", "id", "JS code 2:" + _0x424fbc["message"]);
    }
  }, 3e3);
}
