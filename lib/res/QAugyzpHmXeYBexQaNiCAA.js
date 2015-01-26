(function(root, factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define([ "exports" ], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    factory(root.esprima = {});
  }
})(this, function(exports) {
  "use strict";
  var Token, TokenName, FnExprTokens, Syntax, PropertyKind, Messages, Regex, SyntaxTreeDelegate, source, strict, index, lineNumber, lineStart, length, delegate, lookahead, state, extra;
  Token = {
    BooleanLiteral: 1,
    EOF: 2,
    Identifier: 3,
    Keyword: 4,
    NullLiteral: 5,
    NumericLiteral: 6,
    Punctuator: 7,
    StringLiteral: 8,
    RegularExpression: 9
  };
  TokenName = {};
  TokenName[Token.BooleanLiteral] = "Boolean";
  TokenName[Token.EOF] = "<end>";
  TokenName[Token.Identifier] = "Identifier";
  TokenName[Token.Keyword] = "Keyword";
  TokenName[Token.NullLiteral] = "Null";
  TokenName[Token.NumericLiteral] = "Numeric";
  TokenName[Token.Punctuator] = "Punctuator";
  TokenName[Token.StringLiteral] = "String";
  TokenName[Token.RegularExpression] = "RegularExpression";
  FnExprTokens = [ "(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!==" ];
  Syntax = {
    AssignmentExpression: "AssignmentExpression",
    ArrayExpression: "ArrayExpression",
    BlockStatement: "BlockStatement",
    BinaryExpression: "BinaryExpression",
    BreakStatement: "BreakStatement",
    CallExpression: "CallExpression",
    CatchClause: "CatchClause",
    ConditionalExpression: "ConditionalExpression",
    ContinueStatement: "ContinueStatement",
    DoWhileStatement: "DoWhileStatement",
    DebuggerStatement: "DebuggerStatement",
    EmptyStatement: "EmptyStatement",
    ExpressionStatement: "ExpressionStatement",
    ForStatement: "ForStatement",
    ForInStatement: "ForInStatement",
    FunctionDeclaration: "FunctionDeclaration",
    FunctionExpression: "FunctionExpression",
    Identifier: "Identifier",
    IfStatement: "IfStatement",
    Literal: "Literal",
    LabeledStatement: "LabeledStatement",
    LogicalExpression: "LogicalExpression",
    MemberExpression: "MemberExpression",
    NewExpression: "NewExpression",
    ObjectExpression: "ObjectExpression",
    Program: "Program",
    Property: "Property",
    ReturnStatement: "ReturnStatement",
    SequenceExpression: "SequenceExpression",
    SwitchStatement: "SwitchStatement",
    SwitchCase: "SwitchCase",
    ThisExpression: "ThisExpression",
    ThrowStatement: "ThrowStatement",
    TryStatement: "TryStatement",
    UnaryExpression: "UnaryExpression",
    UpdateExpression: "UpdateExpression",
    VariableDeclaration: "VariableDeclaration",
    VariableDeclarator: "VariableDeclarator",
    WhileStatement: "WhileStatement",
    WithStatement: "WithStatement"
  };
  PropertyKind = {
    Data: 1,
    Get: 2,
    Set: 4
  };
  Messages = {
    UnexpectedToken: "Unexpected token %0",
    UnexpectedNumber: "Unexpected number",
    UnexpectedString: "Unexpected string",
    UnexpectedIdentifier: "Unexpected identifier",
    UnexpectedReserved: "Unexpected reserved word",
    UnexpectedEOS: "Unexpected end of input",
    NewlineAfterThrow: "Illegal newline after throw",
    InvalidRegExp: "Invalid regular expression",
    UnterminatedRegExp: "Invalid regular expression: missing /",
    InvalidLHSInAssignment: "Invalid left-hand side in assignment",
    InvalidLHSInForIn: "Invalid left-hand side in for-in",
    MultipleDefaultsInSwitch: "More than one default clause in switch statement",
    NoCatchOrFinally: "Missing catch or finally after try",
    UnknownLabel: "Undefined label '%0'",
    Redeclaration: "%0 '%1' has already been declared",
    IllegalContinue: "Illegal continue statement",
    IllegalBreak: "Illegal break statement",
    IllegalReturn: "Illegal return statement",
    StrictModeWith: "Strict mode code may not include a with statement",
    StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
    StrictVarName: "Variable name may not be eval or arguments in strict mode",
    StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
    StrictParamDupe: "Strict mode function may not have duplicate parameter names",
    StrictFunctionName: "Function name may not be eval or arguments in strict mode",
    StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
    StrictDelete: "Delete of an unqualified identifier in strict mode.",
    StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
    AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
    AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
    StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
    StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
    StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
    StrictReservedWord: "Use of future reserved word in strict mode"
  };
  Regex = {
    NonAsciiIdentifierStart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),
    NonAsciiIdentifierPart: new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")
  };
  function assert(condition, message) {
    if (!condition) {
      throw new Error("ASSERT: " + message);
    }
  }
  function isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  function isHexDigit(ch) {
    return "0123456789abcdefABCDEF".indexOf(ch) >= 0;
  }
  function isOctalDigit(ch) {
    return "01234567".indexOf(ch) >= 0;
  }
  function isWhiteSpace(ch) {
    return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch >= 5760 && [ 5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279 ].indexOf(ch) >= 0;
  }
  function isLineTerminator(ch) {
    return ch === 10 || ch === 13 || ch === 8232 || ch === 8233;
  }
  function isIdentifierStart(ch) {
    return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierStart.test(String.fromCharCode(ch));
  }
  function isIdentifierPart(ch) {
    return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierPart.test(String.fromCharCode(ch));
  }
  function isFutureReservedWord(id) {
    switch (id) {
      case "class":
      case "enum":
      case "export":
      case "extends":
      case "import":
      case "super":
        return true;
      default:
        return false;
    }
  }
  function isStrictModeReservedWord(id) {
    switch (id) {
      case "implements":
      case "interface":
      case "package":
      case "private":
      case "protected":
      case "public":
      case "static":
      case "yield":
      case "let":
        return true;
      default:
        return false;
    }
  }
  function isRestrictedWord(id) {
    return id === "eval" || id === "arguments";
  }
  function isKeyword(id) {
    if (strict && isStrictModeReservedWord(id)) {
      return true;
    }
    switch (id.length) {
      case 2:
        return id === "if" || id === "in" || id === "do";
      case 3:
        return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
      case 4:
        return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
      case 5:
        return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
      case 6:
        return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
      case 7:
        return id === "default" || id === "finally" || id === "extends";
      case 8:
        return id === "function" || id === "continue" || id === "debugger";
      case 10:
        return id === "instanceof";
      default:
        return false;
    }
  }
  function addComment(type, value, start, end, loc) {
    var comment, attacher;
    assert(typeof start === "number", "Comment must have valid position");
    if (state.lastCommentStart >= start) {
      return;
    }
    state.lastCommentStart = start;
    comment = {
      type: type,
      value: value
    };
    if (extra.range) {
      comment.range = [ start, end ];
    }
    if (extra.loc) {
      comment.loc = loc;
    }
    extra.comments.push(comment);
    if (extra.attachComment) {
      extra.leadingComments.push(comment);
      extra.trailingComments.push(comment);
    }
  }
  function skipSingleLineComment(offset) {
    var start, loc, ch, comment;
    start = index - offset;
    loc = {
      start: {
        line: lineNumber,
        column: index - lineStart - offset
      }
    };
    while (index < length) {
      ch = source.charCodeAt(index);
      ++index;
      if (isLineTerminator(ch)) {
        if (extra.comments) {
          comment = source.slice(start + offset, index - 1);
          loc.end = {
            line: lineNumber,
            column: index - lineStart - 1
          };
          addComment("Line", comment, start, index - 1, loc);
        }
        if (ch === 13 && source.charCodeAt(index) === 10) {
          ++index;
        }
        ++lineNumber;
        lineStart = index;
        return;
      }
    }
    if (extra.comments) {
      comment = source.slice(start + offset, index);
      loc.end = {
        line: lineNumber,
        column: index - lineStart
      };
      addComment("Line", comment, start, index, loc);
    }
  }
  function skipMultiLineComment() {
    var start, loc, ch, comment;
    if (extra.comments) {
      start = index - 2;
      loc = {
        start: {
          line: lineNumber,
          column: index - lineStart - 2
        }
      };
    }
    while (index < length) {
      ch = source.charCodeAt(index);
      if (isLineTerminator(ch)) {
        if (ch === 13 && source.charCodeAt(index + 1) === 10) {
          ++index;
        }
        ++lineNumber;
        ++index;
        lineStart = index;
        if (index >= length) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
      } else if (ch === 42) {
        if (source.charCodeAt(index + 1) === 47) {
          ++index;
          ++index;
          if (extra.comments) {
            comment = source.slice(start + 2, index - 2);
            loc.end = {
              line: lineNumber,
              column: index - lineStart
            };
            addComment("Block", comment, start, index, loc);
          }
          return;
        }
        ++index;
      } else {
        ++index;
      }
    }
    throwError({}, Messages.UnexpectedToken, "ILLEGAL");
  }
  function skipComment() {
    var ch, start;
    start = index === 0;
    while (index < length) {
      ch = source.charCodeAt(index);
      if (isWhiteSpace(ch)) {
        ++index;
      } else if (isLineTerminator(ch)) {
        ++index;
        if (ch === 13 && source.charCodeAt(index) === 10) {
          ++index;
        }
        ++lineNumber;
        lineStart = index;
        start = true;
      } else if (ch === 47) {
        ch = source.charCodeAt(index + 1);
        if (ch === 47) {
          ++index;
          ++index;
          skipSingleLineComment(2);
          start = true;
        } else if (ch === 42) {
          ++index;
          ++index;
          skipMultiLineComment();
        } else {
          break;
        }
      } else if (start && ch === 45) {
        if (source.charCodeAt(index + 1) === 45 && source.charCodeAt(index + 2) === 62) {
          index += 3;
          skipSingleLineComment(3);
        } else {
          break;
        }
      } else if (ch === 60) {
        if (source.slice(index + 1, index + 4) === "!--") {
          ++index;
          ++index;
          ++index;
          ++index;
          skipSingleLineComment(4);
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }
  function scanHexEscape(prefix) {
    var i, len, ch, code = 0;
    len = prefix === "u" ? 4 : 2;
    for (i = 0; i < len; ++i) {
      if (index < length && isHexDigit(source[index])) {
        ch = source[index++];
        code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase());
      } else {
        return "";
      }
    }
    return String.fromCharCode(code);
  }
  function getEscapedIdentifier() {
    var ch, id;
    ch = source.charCodeAt(index++);
    id = String.fromCharCode(ch);
    if (ch === 92) {
      if (source.charCodeAt(index) !== 117) {
        throwError({}, Messages.UnexpectedToken, "ILLEGAL");
      }
      ++index;
      ch = scanHexEscape("u");
      if (!ch || ch === "\\" || !isIdentifierStart(ch.charCodeAt(0))) {
        throwError({}, Messages.UnexpectedToken, "ILLEGAL");
      }
      id = ch;
    }
    while (index < length) {
      ch = source.charCodeAt(index);
      if (!isIdentifierPart(ch)) {
        break;
      }
      ++index;
      id += String.fromCharCode(ch);
      if (ch === 92) {
        id = id.substr(0, id.length - 1);
        if (source.charCodeAt(index) !== 117) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        ++index;
        ch = scanHexEscape("u");
        if (!ch || ch === "\\" || !isIdentifierPart(ch.charCodeAt(0))) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
        id += ch;
      }
    }
    return id;
  }
  function getIdentifier() {
    var start, ch;
    start = index++;
    while (index < length) {
      ch = source.charCodeAt(index);
      if (ch === 92) {
        index = start;
        return getEscapedIdentifier();
      }
      if (isIdentifierPart(ch)) {
        ++index;
      } else {
        break;
      }
    }
    return source.slice(start, index);
  }
  function scanIdentifier() {
    var start, id, type;
    start = index;
    id = source.charCodeAt(index) === 92 ? getEscapedIdentifier() : getIdentifier();
    if (id.length === 1) {
      type = Token.Identifier;
    } else if (isKeyword(id)) {
      type = Token.Keyword;
    } else if (id === "null") {
      type = Token.NullLiteral;
    } else if (id === "true" || id === "false") {
      type = Token.BooleanLiteral;
    } else {
      type = Token.Identifier;
    }
    return {
      type: type,
      value: id,
      lineNumber: lineNumber,
      lineStart: lineStart,
      start: start,
      end: index
    };
  }
  function scanPunctuator() {
    var start = index, code = source.charCodeAt(index), code2, ch1 = source[index], ch2, ch3, ch4;
    switch (code) {
      case 46:
      case 40:
      case 41:
      case 59:
      case 44:
      case 123:
      case 125:
      case 91:
      case 93:
      case 58:
      case 63:
      case 126:
        ++index;
        if (extra.tokenize) {
          if (code === 40) {
            extra.openParenToken = extra.tokens.length;
          } else if (code === 123) {
            extra.openCurlyToken = extra.tokens.length;
          }
        }
        return {
          type: Token.Punctuator,
          value: String.fromCharCode(code),
          lineNumber: lineNumber,
          lineStart: lineStart,
          start: start,
          end: index
        };
      default:
        code2 = source.charCodeAt(index + 1);
        if (code2 === 61) {
          switch (code) {
            case 43:
            case 45:
            case 47:
            case 60:
            case 62:
            case 94:
            case 124:
            case 37:
            case 38:
            case 42:
              index += 2;
              return {
                type: Token.Punctuator,
                value: String.fromCharCode(code) + String.fromCharCode(code2),
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
              };
            case 33:
            case 61:
              index += 2;
              if (source.charCodeAt(index) === 61) {
                ++index;
              }
              return {
                type: Token.Punctuator,
                value: source.slice(start, index),
                lineNumber: lineNumber,
                lineStart: lineStart,
                start: start,
                end: index
              };
          }
        }
    }
    ch4 = source.substr(index, 4);
    if (ch4 === ">>>=") {
      index += 4;
      return {
        type: Token.Punctuator,
        value: ch4,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    ch3 = ch4.substr(0, 3);
    if (ch3 === ">>>" || ch3 === "<<=" || ch3 === ">>=") {
      index += 3;
      return {
        type: Token.Punctuator,
        value: ch3,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    ch2 = ch3.substr(0, 2);
    if (ch1 === ch2[1] && "+-<>&|".indexOf(ch1) >= 0 || ch2 === "=>") {
      index += 2;
      return {
        type: Token.Punctuator,
        value: ch2,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    if ("<>=!+-*%&|^/".indexOf(ch1) >= 0) {
      ++index;
      return {
        type: Token.Punctuator,
        value: ch1,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    throwError({}, Messages.UnexpectedToken, "ILLEGAL");
  }
  function scanHexLiteral(start) {
    var number = "";
    while (index < length) {
      if (!isHexDigit(source[index])) {
        break;
      }
      number += source[index++];
    }
    if (number.length === 0) {
      throwError({}, Messages.UnexpectedToken, "ILLEGAL");
    }
    if (isIdentifierStart(source.charCodeAt(index))) {
      throwError({}, Messages.UnexpectedToken, "ILLEGAL");
    }
    return {
      type: Token.NumericLiteral,
      value: parseInt("0x" + number, 16),
      lineNumber: lineNumber,
      lineStart: lineStart,
      start: start,
      end: index
    };
  }
  function scanOctalLiteral(start) {
    var number = "0" + source[index++];
    while (index < length) {
      if (!isOctalDigit(source[index])) {
        break;
      }
      number += source[index++];
    }
    if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
      throwError({}, Messages.UnexpectedToken, "ILLEGAL");
    }
    return {
      type: Token.NumericLiteral,
      value: parseInt(number, 8),
      octal: true,
      lineNumber: lineNumber,
      lineStart: lineStart,
      start: start,
      end: index
    };
  }
  function scanNumericLiteral() {
    var number, start, ch;
    ch = source[index];
    assert(isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
    start = index;
    number = "";
    if (ch !== ".") {
      number = source[index++];
      ch = source[index];
      if (number === "0") {
        if (ch === "x" || ch === "X") {
          ++index;
          return scanHexLiteral(start);
        }
        if (isOctalDigit(ch)) {
          return scanOctalLiteral(start);
        }
        if (ch && isDecimalDigit(ch.charCodeAt(0))) {
          throwError({}, Messages.UnexpectedToken, "ILLEGAL");
        }
      }
      while (isDecimalDigit(source.charCodeAt(index))) {
        number += source[index++];
      }
      ch = source[index];
    }
    if (ch === ".") {
      number += source[index++];
      while (isDecimalDigit(source.charCodeAt(index))) {
        number += source[index++];
      }
      ch = source[index];
    }
    if (ch === "e" || ch === "E") {
      number += source[index++];
      ch = source[index];
      if (ch === "+" || ch === "-") {
        number += source[index++];
      }
      if (isDecimalDigit(source.charCodeAt(index))) {
        while (isDecimalDigit(source.charCodeAt(index))) {
          number += source[index++];
        }
      } else {
        throwError({}, Messages.UnexpectedToken, "ILLEGAL");
      }
    }
    if (isIdentifierStart(source.charCodeAt(index))) {
      throwError({}, Messages.UnexpectedToken, "ILLEGAL");
    }
    return {
      type: Token.NumericLiteral,
      value: parseFloat(number),
      lineNumber: lineNumber,
      lineStart: lineStart,
      start: start,
      end: index
    };
  }
  function scanStringLiteral() {
    var str = "", quote, start, ch, code, unescaped, restore, octal = false, startLineNumber, startLineStart;
    startLineNumber = lineNumber;
    startLineStart = lineStart;
    quote = source[index];
    assert(quote === "'" || quote === '"', "String literal must starts with a quote");
    start = index;
    ++index;
    while (index < length) {
      ch = source[index++];
      if (ch === quote) {
        quote = "";
        break;
      } else if (ch === "\\") {
        ch = source[index++];
        if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
          switch (ch) {
            case "u":
            case "x":
              restore = index;
              unescaped = scanHexEscape(ch);
              if (unescaped) {
                str += unescaped;
              } else {
                index = restore;
                str += ch;
              }
              break;
            case "n":
              str += "\n";
              break;
            case "r":
              str += "\r";
              break;
            case "t":
              str += "	";
              break;
            case "b":
              str += "\b";
              break;
            case "f":
              str += "\f";
              break;
            case "v":
              str += "";
              break;
            default:
              if (isOctalDigit(ch)) {
                code = "01234567".indexOf(ch);
                if (code !== 0) {
                  octal = true;
                }
                if (index < length && isOctalDigit(source[index])) {
                  octal = true;
                  code = code * 8 + "01234567".indexOf(source[index++]);
                  if ("0123".indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) {
                    code = code * 8 + "01234567".indexOf(source[index++]);
                  }
                }
                str += String.fromCharCode(code);
              } else {
                str += ch;
              }
              break;
          }
        } else {
          ++lineNumber;
          if (ch === "\r" && source[index] === "\n") {
            ++index;
          }
          lineStart = index;
        }
      } else if (isLineTerminator(ch.charCodeAt(0))) {
        break;
      } else {
        str += ch;
      }
    }
    if (quote !== "") {
      throwError({}, Messages.UnexpectedToken, "ILLEGAL");
    }
    return {
      type: Token.StringLiteral,
      value: str,
      octal: octal,
      startLineNumber: startLineNumber,
      startLineStart: startLineStart,
      lineNumber: lineNumber,
      lineStart: lineStart,
      start: start,
      end: index
    };
  }
  function testRegExp(pattern, flags) {
    var value;
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
      throwError({}, Messages.InvalidRegExp);
    }
    return value;
  }
  function scanRegExpBody() {
    var ch, str, classMarker, terminated, body;
    ch = source[index];
    assert(ch === "/", "Regular expression literal must start with a slash");
    str = source[index++];
    classMarker = false;
    terminated = false;
    while (index < length) {
      ch = source[index++];
      str += ch;
      if (ch === "\\") {
        ch = source[index++];
        if (isLineTerminator(ch.charCodeAt(0))) {
          throwError({}, Messages.UnterminatedRegExp);
        }
        str += ch;
      } else if (isLineTerminator(ch.charCodeAt(0))) {
        throwError({}, Messages.UnterminatedRegExp);
      } else if (classMarker) {
        if (ch === "]") {
          classMarker = false;
        }
      } else {
        if (ch === "/") {
          terminated = true;
          break;
        } else if (ch === "[") {
          classMarker = true;
        }
      }
    }
    if (!terminated) {
      throwError({}, Messages.UnterminatedRegExp);
    }
    body = str.substr(1, str.length - 2);
    return {
      value: body,
      literal: str
    };
  }
  function scanRegExpFlags() {
    var ch, str, flags, restore;
    str = "";
    flags = "";
    while (index < length) {
      ch = source[index];
      if (!isIdentifierPart(ch.charCodeAt(0))) {
        break;
      }
      ++index;
      if (ch === "\\" && index < length) {
        ch = source[index];
        if (ch === "u") {
          ++index;
          restore = index;
          ch = scanHexEscape("u");
          if (ch) {
            flags += ch;
            for (str += "\\u"; restore < index; ++restore) {
              str += source[restore];
            }
          } else {
            index = restore;
            flags += "u";
            str += "\\u";
          }
          throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
        } else {
          str += "\\";
          throwErrorTolerant({}, Messages.UnexpectedToken, "ILLEGAL");
        }
      } else {
        flags += ch;
        str += ch;
      }
    }
    return {
      value: flags,
      literal: str
    };
  }
  function scanRegExp() {
    var start, body, flags, pattern, value;
    lookahead = null;
    skipComment();
    start = index;
    body = scanRegExpBody();
    flags = scanRegExpFlags();
    value = testRegExp(body.value, flags.value);
    if (extra.tokenize) {
      return {
        type: Token.RegularExpression,
        value: value,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: start,
        end: index
      };
    }
    return {
      literal: body.literal + flags.literal,
      value: value,
      start: start,
      end: index
    };
  }
  function collectRegex() {
    var pos, loc, regex, token;
    skipComment();
    pos = index;
    loc = {
      start: {
        line: lineNumber,
        column: index - lineStart
      }
    };
    regex = scanRegExp();
    loc.end = {
      line: lineNumber,
      column: index - lineStart
    };
    if (!extra.tokenize) {
      if (extra.tokens.length > 0) {
        token = extra.tokens[extra.tokens.length - 1];
        if (token.range[0] === pos && token.type === "Punctuator") {
          if (token.value === "/" || token.value === "/=") {
            extra.tokens.pop();
          }
        }
      }
      extra.tokens.push({
        type: "RegularExpression",
        value: regex.literal,
        range: [ pos, index ],
        loc: loc
      });
    }
    return regex;
  }
  function isIdentifierName(token) {
    return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral;
  }
  function advanceSlash() {
    var prevToken, checkToken;
    prevToken = extra.tokens[extra.tokens.length - 1];
    if (!prevToken) {
      return collectRegex();
    }
    if (prevToken.type === "Punctuator") {
      if (prevToken.value === "]") {
        return scanPunctuator();
      }
      if (prevToken.value === ")") {
        checkToken = extra.tokens[extra.openParenToken - 1];
        if (checkToken && checkToken.type === "Keyword" && (checkToken.value === "if" || checkToken.value === "while" || checkToken.value === "for" || checkToken.value === "with")) {
          return collectRegex();
        }
        return scanPunctuator();
      }
      if (prevToken.value === "}") {
        if (extra.tokens[extra.openCurlyToken - 3] && extra.tokens[extra.openCurlyToken - 3].type === "Keyword") {
          checkToken = extra.tokens[extra.openCurlyToken - 4];
          if (!checkToken) {
            return scanPunctuator();
          }
        } else if (extra.tokens[extra.openCurlyToken - 4] && extra.tokens[extra.openCurlyToken - 4].type === "Keyword") {
          checkToken = extra.tokens[extra.openCurlyToken - 5];
          if (!checkToken) {
            return collectRegex();
          }
        } else {
          return scanPunctuator();
        }
        if (FnExprTokens.indexOf(checkToken.value) >= 0) {
          return scanPunctuator();
        }
        return collectRegex();
      }
      return collectRegex();
    }
    if (prevToken.type === "Keyword") {
      return collectRegex();
    }
    return scanPunctuator();
  }
  function advance() {
    var ch;
    skipComment();
    if (index >= length) {
      return {
        type: Token.EOF,
        lineNumber: lineNumber,
        lineStart: lineStart,
        start: index,
        end: index
      };
    }
    ch = source.charCodeAt(index);
    if (isIdentifierStart(ch)) {
      return scanIdentifier();
    }
    if (ch === 40 || ch === 41 || ch === 59) {
      return scanPunctuator();
    }
    if (ch === 39 || ch === 34) {
      return scanStringLiteral();
    }
    if (ch === 46) {
      if (isDecimalDigit(source.charCodeAt(index + 1))) {
        return scanNumericLiteral();
      }
      return scanPunctuator();
    }
    if (isDecimalDigit(ch)) {
      return scanNumericLiteral();
    }
    if (extra.tokenize && ch === 47) {
      return advanceSlash();
    }
    return scanPunctuator();
  }
  function collectToken() {
    var loc, token, range, value;
    skipComment();
    loc = {
      start: {
        line: lineNumber,
        column: index - lineStart
      }
    };
    token = advance();
    loc.end = {
      line: lineNumber,
      column: index - lineStart
    };
    if (token.type !== Token.EOF) {
      value = source.slice(token.start, token.end);
      extra.tokens.push({
        type: TokenName[token.type],
        value: value,
        range: [ token.start, token.end ],
        loc: loc
      });
    }
    return token;
  }
  function lex() {
    var token;
    token = lookahead;
    index = token.end;
    lineNumber = token.lineNumber;
    lineStart = token.lineStart;
    lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
    index = token.end;
    lineNumber = token.lineNumber;
    lineStart = token.lineStart;
    return token;
  }
  function peek() {
    var pos, line, start;
    pos = index;
    line = lineNumber;
    start = lineStart;
    lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
    index = pos;
    lineNumber = line;
    lineStart = start;
  }
  function Position(line, column) {
    this.line = line;
    this.column = column;
  }
  function SourceLocation(startLine, startColumn, line, column) {
    this.start = new Position(startLine, startColumn);
    this.end = new Position(line, column);
  }
  SyntaxTreeDelegate = {
    name: "SyntaxTree",
    processComment: function(node) {
      var lastChild, trailingComments;
      if (node.type === Syntax.Program) {
        if (node.body.length > 0) {
          return;
        }
      }
      if (extra.trailingComments.length > 0) {
        if (extra.trailingComments[0].range[0] >= node.range[1]) {
          trailingComments = extra.trailingComments;
          extra.trailingComments = [];
        } else {
          extra.trailingComments.length = 0;
        }
      } else {
        if (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments && extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments[0].range[0] >= node.range[1]) {
          trailingComments = extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
          delete extra.bottomRightStack[extra.bottomRightStack.length - 1].trailingComments;
        }
      }
      while (extra.bottomRightStack.length > 0 && extra.bottomRightStack[extra.bottomRightStack.length - 1].range[0] >= node.range[0]) {
        lastChild = extra.bottomRightStack.pop();
      }
      if (lastChild) {
        if (lastChild.leadingComments && lastChild.leadingComments[lastChild.leadingComments.length - 1].range[1] <= node.range[0]) {
          node.leadingComments = lastChild.leadingComments;
          delete lastChild.leadingComments;
        }
      } else if (extra.leadingComments.length > 0 && extra.leadingComments[extra.leadingComments.length - 1].range[1] <= node.range[0]) {
        node.leadingComments = extra.leadingComments;
        extra.leadingComments = [];
      }
      if (trailingComments) {
        node.trailingComments = trailingComments;
      }
      extra.bottomRightStack.push(node);
    },
    markEnd: function(node, startToken) {
      if (extra.range) {
        node.range = [ startToken.start, index ];
      }
      if (extra.loc) {
        node.loc = new SourceLocation(startToken.startLineNumber === undefined ? startToken.lineNumber : startToken.startLineNumber, startToken.start - (startToken.startLineStart === undefined ? startToken.lineStart : startToken.startLineStart), lineNumber, index - lineStart);
        this.postProcess(node);
      }
      if (extra.attachComment) {
        this.processComment(node);
      }
      return node;
    },
    postProcess: function(node) {
      if (extra.source) {
        node.loc.source = extra.source;
      }
      return node;
    },
    createArrayExpression: function(elements) {
      return {
        type: Syntax.ArrayExpression,
        elements: elements
      };
    },
    createAssignmentExpression: function(operator, left, right) {
      return {
        type: Syntax.AssignmentExpression,
        operator: operator,
        left: left,
        right: right
      };
    },
    createBinaryExpression: function(operator, left, right) {
      var type = operator === "||" || operator === "&&" ? Syntax.LogicalExpression : Syntax.BinaryExpression;
      return {
        type: type,
        operator: operator,
        left: left,
        right: right
      };
    },
    createBlockStatement: function(body) {
      return {
        type: Syntax.BlockStatement,
        body: body
      };
    },
    createBreakStatement: function(label) {
      return {
        type: Syntax.BreakStatement,
        label: label
      };
    },
    createCallExpression: function(callee, args) {
      return {
        type: Syntax.CallExpression,
        callee: callee,
        arguments: args
      };
    },
    createCatchClause: function(param, body) {
      return {
        type: Syntax.CatchClause,
        param: param,
        body: body
      };
    },
    createConditionalExpression: function(test, consequent, alternate) {
      return {
        type: Syntax.ConditionalExpression,
        test: test,
        consequent: consequent,
        alternate: alternate
      };
    },
    createContinueStatement: function(label) {
      return {
        type: Syntax.ContinueStatement,
        label: label
      };
    },
    createDebuggerStatement: function() {
      return {
        type: Syntax.DebuggerStatement
      };
    },
    createDoWhileStatement: function(body, test) {
      return {
        type: Syntax.DoWhileStatement,
        body: body,
        test: test
      };
    },
    createEmptyStatement: function() {
      return {
        type: Syntax.EmptyStatement
      };
    },
    createExpressionStatement: function(expression) {
      return {
        type: Syntax.ExpressionStatement,
        expression: expression
      };
    },
    createForStatement: function(init, test, update, body) {
      return {
        type: Syntax.ForStatement,
        init: init,
        test: test,
        update: update,
        body: body
      };
    },
    createForInStatement: function(left, right, body) {
      return {
        type: Syntax.ForInStatement,
        left: left,
        right: right,
        body: body,
        each: false
      };
    },
    createFunctionDeclaration: function(id, params, defaults, body) {
      return {
        type: Syntax.FunctionDeclaration,
        id: id,
        params: params,
        defaults: defaults,
        body: body,
        rest: null,
        generator: false,
        expression: false
      };
    },
    createFunctionExpression: function(id, params, defaults, body) {
      return {
        type: Syntax.FunctionExpression,
        id: id,
        params: params,
        defaults: defaults,
        body: body,
        rest: null,
        generator: false,
        expression: false
      };
    },
    createIdentifier: function(name) {
      return {
        type: Syntax.Identifier,
        name: name
      };
    },
    createIfStatement: function(test, consequent, alternate) {
      return {
        type: Syntax.IfStatement,
        test: test,
        consequent: consequent,
        alternate: alternate
      };
    },
    createLabeledStatement: function(label, body) {
      return {
        type: Syntax.LabeledStatement,
        label: label,
        body: body
      };
    },
    createLiteral: function(token) {
      return {
        type: Syntax.Literal,
        value: token.value,
        raw: source.slice(token.start, token.end)
      };
    },
    createMemberExpression: function(accessor, object, property) {
      return {
        type: Syntax.MemberExpression,
        computed: accessor === "[",
        object: object,
        property: property
      };
    },
    createNewExpression: function(callee, args) {
      return {
        type: Syntax.NewExpression,
        callee: callee,
        arguments: args
      };
    },
    createObjectExpression: function(properties) {
      return {
        type: Syntax.ObjectExpression,
        properties: properties
      };
    },
    createPostfixExpression: function(operator, argument) {
      return {
        type: Syntax.UpdateExpression,
        operator: operator,
        argument: argument,
        prefix: false
      };
    },
    createProgram: function(body) {
      return {
        type: Syntax.Program,
        body: body
      };
    },
    createProperty: function(kind, key, value) {
      return {
        type: Syntax.Property,
        key: key,
        value: value,
        kind: kind
      };
    },
    createReturnStatement: function(argument) {
      return {
        type: Syntax.ReturnStatement,
        argument: argument
      };
    },
    createSequenceExpression: function(expressions) {
      return {
        type: Syntax.SequenceExpression,
        expressions: expressions
      };
    },
    createSwitchCase: function(test, consequent) {
      return {
        type: Syntax.SwitchCase,
        test: test,
        consequent: consequent
      };
    },
    createSwitchStatement: function(discriminant, cases) {
      return {
        type: Syntax.SwitchStatement,
        discriminant: discriminant,
        cases: cases
      };
    },
    createThisExpression: function() {
      return {
        type: Syntax.ThisExpression
      };
    },
    createThrowStatement: function(argument) {
      return {
        type: Syntax.ThrowStatement,
        argument: argument
      };
    },
    createTryStatement: function(block, guardedHandlers, handlers, finalizer) {
      return {
        type: Syntax.TryStatement,
        block: block,
        guardedHandlers: guardedHandlers,
        handlers: handlers,
        finalizer: finalizer
      };
    },
    createUnaryExpression: function(operator, argument) {
      if (operator === "++" || operator === "--") {
        return {
          type: Syntax.UpdateExpression,
          operator: operator,
          argument: argument,
          prefix: true
        };
      }
      return {
        type: Syntax.UnaryExpression,
        operator: operator,
        argument: argument,
        prefix: true
      };
    },
    createVariableDeclaration: function(declarations, kind) {
      return {
        type: Syntax.VariableDeclaration,
        declarations: declarations,
        kind: kind
      };
    },
    createVariableDeclarator: function(id, init) {
      return {
        type: Syntax.VariableDeclarator,
        id: id,
        init: init
      };
    },
    createWhileStatement: function(test, body) {
      return {
        type: Syntax.WhileStatement,
        test: test,
        body: body
      };
    },
    createWithStatement: function(object, body) {
      return {
        type: Syntax.WithStatement,
        object: object,
        body: body
      };
    }
  };
  function peekLineTerminator() {
    var pos, line, start, found;
    pos = index;
    line = lineNumber;
    start = lineStart;
    skipComment();
    found = lineNumber !== line;
    index = pos;
    lineNumber = line;
    lineStart = start;
    return found;
  }
  function throwError(token, messageFormat) {
    var error, args = Array.prototype.slice.call(arguments, 2), msg = messageFormat.replace(/%(\d)/g, function(whole, index) {
      assert(index < args.length, "Message reference must be in range");
      return args[index];
    });
    if (typeof token.lineNumber === "number") {
      error = new Error("Line " + token.lineNumber + ": " + msg);
      error.index = token.start;
      error.lineNumber = token.lineNumber;
      error.column = token.start - lineStart + 1;
    } else {
      error = new Error("Line " + lineNumber + ": " + msg);
      error.index = index;
      error.lineNumber = lineNumber;
      error.column = index - lineStart + 1;
    }
    error.description = msg;
    throw error;
  }
  function throwErrorTolerant() {
    try {
      throwError.apply(null, arguments);
    } catch (e) {
      if (extra.errors) {
        extra.errors.push(e);
      } else {
        throw e;
      }
    }
  }
  function throwUnexpected(token) {
    if (token.type === Token.EOF) {
      throwError(token, Messages.UnexpectedEOS);
    }
    if (token.type === Token.NumericLiteral) {
      throwError(token, Messages.UnexpectedNumber);
    }
    if (token.type === Token.StringLiteral) {
      throwError(token, Messages.UnexpectedString);
    }
    if (token.type === Token.Identifier) {
      throwError(token, Messages.UnexpectedIdentifier);
    }
    if (token.type === Token.Keyword) {
      if (isFutureReservedWord(token.value)) {
        throwError(token, Messages.UnexpectedReserved);
      } else if (strict && isStrictModeReservedWord(token.value)) {
        throwErrorTolerant(token, Messages.StrictReservedWord);
        return;
      }
      throwError(token, Messages.UnexpectedToken, token.value);
    }
    throwError(token, Messages.UnexpectedToken, token.value);
  }
  function expect(value) {
    var token = lex();
    if (token.type !== Token.Punctuator || token.value !== value) {
      throwUnexpected(token);
    }
  }
  function expectKeyword(keyword) {
    var token = lex();
    if (token.type !== Token.Keyword || token.value !== keyword) {
      throwUnexpected(token);
    }
  }
  function match(value) {
    return lookahead.type === Token.Punctuator && lookahead.value === value;
  }
  function matchKeyword(keyword) {
    return lookahead.type === Token.Keyword && lookahead.value === keyword;
  }
  function matchAssign() {
    var op;
    if (lookahead.type !== Token.Punctuator) {
      return false;
    }
    op = lookahead.value;
    return op === "=" || op === "*=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
  }
  function consumeSemicolon() {
    var line;
    if (source.charCodeAt(index) === 59 || match(";")) {
      lex();
      return;
    }
    line = lineNumber;
    skipComment();
    if (lineNumber !== line) {
      return;
    }
    if (lookahead.type !== Token.EOF && !match("}")) {
      throwUnexpected(lookahead);
    }
  }
  function isLeftHandSide(expr) {
    return expr.type === Syntax.Identifier || expr.type === Syntax.MemberExpression;
  }
  function parseArrayInitialiser() {
    var elements = [], startToken;
    startToken = lookahead;
    expect("[");
    while (!match("]")) {
      if (match(",")) {
        lex();
        elements.push(null);
      } else {
        elements.push(parseAssignmentExpression());
        if (!match("]")) {
          expect(",");
        }
      }
    }
    lex();
    return delegate.markEnd(delegate.createArrayExpression(elements), startToken);
  }
  function parsePropertyFunction(param, first) {
    var previousStrict, body, startToken;
    previousStrict = strict;
    startToken = lookahead;
    body = parseFunctionSourceElements();
    if (first && strict && isRestrictedWord(param[0].name)) {
      throwErrorTolerant(first, Messages.StrictParamName);
    }
    strict = previousStrict;
    return delegate.markEnd(delegate.createFunctionExpression(null, param, [], body), startToken);
  }
  function parseObjectPropertyKey() {
    var token, startToken;
    startToken = lookahead;
    token = lex();
    if (token.type === Token.StringLiteral || token.type === Token.NumericLiteral) {
      if (strict && token.octal) {
        throwErrorTolerant(token, Messages.StrictOctalLiteral);
      }
      return delegate.markEnd(delegate.createLiteral(token), startToken);
    }
    return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
  }
  function parseObjectProperty() {
    var token, key, id, value, param, startToken;
    token = lookahead;
    startToken = lookahead;
    if (token.type === Token.Identifier) {
      id = parseObjectPropertyKey();
      if (token.value === "get" && !match(":")) {
        key = parseObjectPropertyKey();
        expect("(");
        expect(")");
        value = parsePropertyFunction([]);
        return delegate.markEnd(delegate.createProperty("get", key, value), startToken);
      }
      if (token.value === "set" && !match(":")) {
        key = parseObjectPropertyKey();
        expect("(");
        token = lookahead;
        if (token.type !== Token.Identifier) {
          expect(")");
          throwErrorTolerant(token, Messages.UnexpectedToken, token.value);
          value = parsePropertyFunction([]);
        } else {
          param = [ parseVariableIdentifier() ];
          expect(")");
          value = parsePropertyFunction(param, token);
        }
        return delegate.markEnd(delegate.createProperty("set", key, value), startToken);
      }
      expect(":");
      value = parseAssignmentExpression();
      return delegate.markEnd(delegate.createProperty("init", id, value), startToken);
    }
    if (token.type === Token.EOF || token.type === Token.Punctuator) {
      throwUnexpected(token);
    } else {
      key = parseObjectPropertyKey();
      expect(":");
      value = parseAssignmentExpression();
      return delegate.markEnd(delegate.createProperty("init", key, value), startToken);
    }
  }
  function parseObjectInitialiser() {
    var properties = [], property, name, key, kind, map = {}, toString = String, startToken;
    startToken = lookahead;
    expect("{");
    while (!match("}")) {
      property = parseObjectProperty();
      if (property.key.type === Syntax.Identifier) {
        name = property.key.name;
      } else {
        name = toString(property.key.value);
      }
      kind = property.kind === "init" ? PropertyKind.Data : property.kind === "get" ? PropertyKind.Get : PropertyKind.Set;
      key = "$" + name;
      if (Object.prototype.hasOwnProperty.call(map, key)) {
        if (map[key] === PropertyKind.Data) {
          if (strict && kind === PropertyKind.Data) {
            throwErrorTolerant({}, Messages.StrictDuplicateProperty);
          } else if (kind !== PropertyKind.Data) {
            throwErrorTolerant({}, Messages.AccessorDataProperty);
          }
        } else {
          if (kind === PropertyKind.Data) {
            throwErrorTolerant({}, Messages.AccessorDataProperty);
          } else if (map[key] & kind) {
            throwErrorTolerant({}, Messages.AccessorGetSet);
          }
        }
        map[key] |= kind;
      } else {
        map[key] = kind;
      }
      properties.push(property);
      if (!match("}")) {
        expect(",");
      }
    }
    expect("}");
    return delegate.markEnd(delegate.createObjectExpression(properties), startToken);
  }
  function parseGroupExpression() {
    var expr;
    expect("(");
    expr = parseExpression();
    expect(")");
    return expr;
  }
  function parsePrimaryExpression() {
    var type, token, expr, startToken;
    if (match("(")) {
      return parseGroupExpression();
    }
    if (match("[")) {
      return parseArrayInitialiser();
    }
    if (match("{")) {
      return parseObjectInitialiser();
    }
    type = lookahead.type;
    startToken = lookahead;
    if (type === Token.Identifier) {
      expr = delegate.createIdentifier(lex().value);
    } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
      if (strict && lookahead.octal) {
        throwErrorTolerant(lookahead, Messages.StrictOctalLiteral);
      }
      expr = delegate.createLiteral(lex());
    } else if (type === Token.Keyword) {
      if (matchKeyword("function")) {
        return parseFunctionExpression();
      }
      if (matchKeyword("this")) {
        lex();
        expr = delegate.createThisExpression();
      } else {
        throwUnexpected(lex());
      }
    } else if (type === Token.BooleanLiteral) {
      token = lex();
      token.value = token.value === "true";
      expr = delegate.createLiteral(token);
    } else if (type === Token.NullLiteral) {
      token = lex();
      token.value = null;
      expr = delegate.createLiteral(token);
    } else if (match("/") || match("/=")) {
      if (typeof extra.tokens !== "undefined") {
        expr = delegate.createLiteral(collectRegex());
      } else {
        expr = delegate.createLiteral(scanRegExp());
      }
      peek();
    } else {
      throwUnexpected(lex());
    }
    return delegate.markEnd(expr, startToken);
  }
  function parseArguments() {
    var args = [];
    expect("(");
    if (!match(")")) {
      while (index < length) {
        args.push(parseAssignmentExpression());
        if (match(")")) {
          break;
        }
        expect(",");
      }
    }
    expect(")");
    return args;
  }
  function parseNonComputedProperty() {
    var token, startToken;
    startToken = lookahead;
    token = lex();
    if (!isIdentifierName(token)) {
      throwUnexpected(token);
    }
    return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
  }
  function parseNonComputedMember() {
    expect(".");
    return parseNonComputedProperty();
  }
  function parseComputedMember() {
    var expr;
    expect("[");
    expr = parseExpression();
    expect("]");
    return expr;
  }
  function parseNewExpression() {
    var callee, args, startToken;
    startToken = lookahead;
    expectKeyword("new");
    callee = parseLeftHandSideExpression();
    args = match("(") ? parseArguments() : [];
    return delegate.markEnd(delegate.createNewExpression(callee, args), startToken);
  }
  function parseLeftHandSideExpressionAllowCall() {
    var previousAllowIn, expr, args, property, startToken;
    startToken = lookahead;
    previousAllowIn = state.allowIn;
    state.allowIn = true;
    expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
    state.allowIn = previousAllowIn;
    for (;;) {
      if (match(".")) {
        property = parseNonComputedMember();
        expr = delegate.createMemberExpression(".", expr, property);
      } else if (match("(")) {
        args = parseArguments();
        expr = delegate.createCallExpression(expr, args);
      } else if (match("[")) {
        property = parseComputedMember();
        expr = delegate.createMemberExpression("[", expr, property);
      } else {
        break;
      }
      delegate.markEnd(expr, startToken);
    }
    return expr;
  }
  function parseLeftHandSideExpression() {
    var previousAllowIn, expr, property, startToken;
    startToken = lookahead;
    previousAllowIn = state.allowIn;
    expr = matchKeyword("new") ? parseNewExpression() : parsePrimaryExpression();
    state.allowIn = previousAllowIn;
    while (match(".") || match("[")) {
      if (match("[")) {
        property = parseComputedMember();
        expr = delegate.createMemberExpression("[", expr, property);
      } else {
        property = parseNonComputedMember();
        expr = delegate.createMemberExpression(".", expr, property);
      }
      delegate.markEnd(expr, startToken);
    }
    return expr;
  }
  function parsePostfixExpression() {
    var expr, token, startToken = lookahead;
    expr = parseLeftHandSideExpressionAllowCall();
    if (lookahead.type === Token.Punctuator) {
      if ((match("++") || match("--")) && !peekLineTerminator()) {
        if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
          throwErrorTolerant({}, Messages.StrictLHSPostfix);
        }
        if (!isLeftHandSide(expr)) {
          throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
        }
        token = lex();
        expr = delegate.markEnd(delegate.createPostfixExpression(token.value, expr), startToken);
      }
    }
    return expr;
  }
  function parseUnaryExpression() {
    var token, expr, startToken;
    if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
      expr = parsePostfixExpression();
    } else if (match("++") || match("--")) {
      startToken = lookahead;
      token = lex();
      expr = parseUnaryExpression();
      if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
        throwErrorTolerant({}, Messages.StrictLHSPrefix);
      }
      if (!isLeftHandSide(expr)) {
        throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
      }
      expr = delegate.createUnaryExpression(token.value, expr);
      expr = delegate.markEnd(expr, startToken);
    } else if (match("+") || match("-") || match("~") || match("!")) {
      startToken = lookahead;
      token = lex();
      expr = parseUnaryExpression();
      expr = delegate.createUnaryExpression(token.value, expr);
      expr = delegate.markEnd(expr, startToken);
    } else if (matchKeyword("delete") || matchKeyword("void") || matchKeyword("typeof")) {
      startToken = lookahead;
      token = lex();
      expr = parseUnaryExpression();
      expr = delegate.createUnaryExpression(token.value, expr);
      expr = delegate.markEnd(expr, startToken);
      if (strict && expr.operator === "delete" && expr.argument.type === Syntax.Identifier) {
        throwErrorTolerant({}, Messages.StrictDelete);
      }
    } else {
      expr = parsePostfixExpression();
    }
    return expr;
  }
  function binaryPrecedence(token, allowIn) {
    var prec = 0;
    if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
      return 0;
    }
    switch (token.value) {
      case "||":
        prec = 1;
        break;
      case "&&":
        prec = 2;
        break;
      case "|":
        prec = 3;
        break;
      case "^":
        prec = 4;
        break;
      case "&":
        prec = 5;
        break;
      case "==":
      case "!=":
      case "===":
      case "!==":
        prec = 6;
        break;
      case "<":
      case ">":
      case "<=":
      case ">=":
      case "instanceof":
        prec = 7;
        break;
      case "in":
        prec = allowIn ? 7 : 0;
        break;
      case "<<":
      case ">>":
      case ">>>":
        prec = 8;
        break;
      case "+":
      case "-":
        prec = 9;
        break;
      case "*":
      case "/":
      case "%":
        prec = 11;
        break;
      default:
        break;
    }
    return prec;
  }
  function parseBinaryExpression() {
    var marker, markers, expr, token, prec, stack, right, operator, left, i;
    marker = lookahead;
    left = parseUnaryExpression();
    token = lookahead;
    prec = binaryPrecedence(token, state.allowIn);
    if (prec === 0) {
      return left;
    }
    token.prec = prec;
    lex();
    markers = [ marker, lookahead ];
    right = parseUnaryExpression();
    stack = [ left, token, right ];
    while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
      while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
        right = stack.pop();
        operator = stack.pop().value;
        left = stack.pop();
        expr = delegate.createBinaryExpression(operator, left, right);
        markers.pop();
        marker = markers[markers.length - 1];
        delegate.markEnd(expr, marker);
        stack.push(expr);
      }
      token = lex();
      token.prec = prec;
      stack.push(token);
      markers.push(lookahead);
      expr = parseUnaryExpression();
      stack.push(expr);
    }
    i = stack.length - 1;
    expr = stack[i];
    markers.pop();
    while (i > 1) {
      expr = delegate.createBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
      i -= 2;
      marker = markers.pop();
      delegate.markEnd(expr, marker);
    }
    return expr;
  }
  function parseConditionalExpression() {
    var expr, previousAllowIn, consequent, alternate, startToken;
    startToken = lookahead;
    expr = parseBinaryExpression();
    if (match("?")) {
      lex();
      previousAllowIn = state.allowIn;
      state.allowIn = true;
      consequent = parseAssignmentExpression();
      state.allowIn = previousAllowIn;
      expect(":");
      alternate = parseAssignmentExpression();
      expr = delegate.createConditionalExpression(expr, consequent, alternate);
      delegate.markEnd(expr, startToken);
    }
    return expr;
  }
  function parseAssignmentExpression() {
    var token, left, right, node, startToken;
    token = lookahead;
    startToken = lookahead;
    node = left = parseConditionalExpression();
    if (matchAssign()) {
      if (!isLeftHandSide(left)) {
        throwErrorTolerant({}, Messages.InvalidLHSInAssignment);
      }
      if (strict && left.type === Syntax.Identifier && isRestrictedWord(left.name)) {
        throwErrorTolerant(token, Messages.StrictLHSAssignment);
      }
      token = lex();
      right = parseAssignmentExpression();
      node = delegate.markEnd(delegate.createAssignmentExpression(token.value, left, right), startToken);
    }
    return node;
  }
  function parseExpression() {
    var expr, startToken = lookahead;
    expr = parseAssignmentExpression();
    if (match(",")) {
      expr = delegate.createSequenceExpression([ expr ]);
      while (index < length) {
        if (!match(",")) {
          break;
        }
        lex();
        expr.expressions.push(parseAssignmentExpression());
      }
      delegate.markEnd(expr, startToken);
    }
    return expr;
  }
  function parseStatementList() {
    var list = [], statement;
    while (index < length) {
      if (match("}")) {
        break;
      }
      statement = parseSourceElement();
      if (typeof statement === "undefined") {
        break;
      }
      list.push(statement);
    }
    return list;
  }
  function parseBlock() {
    var block, startToken;
    startToken = lookahead;
    expect("{");
    block = parseStatementList();
    expect("}");
    return delegate.markEnd(delegate.createBlockStatement(block), startToken);
  }
  function parseVariableIdentifier() {
    var token, startToken;
    startToken = lookahead;
    token = lex();
    if (token.type !== Token.Identifier) {
      throwUnexpected(token);
    }
    return delegate.markEnd(delegate.createIdentifier(token.value), startToken);
  }
  function parseVariableDeclaration(kind) {
    var init = null, id, startToken;
    startToken = lookahead;
    id = parseVariableIdentifier();
    if (strict && isRestrictedWord(id.name)) {
      throwErrorTolerant({}, Messages.StrictVarName);
    }
    if (kind === "const") {
      expect("=");
      init = parseAssignmentExpression();
    } else if (match("=")) {
      lex();
      init = parseAssignmentExpression();
    }
    return delegate.markEnd(delegate.createVariableDeclarator(id, init), startToken);
  }
  function parseVariableDeclarationList(kind) {
    var list = [];
    do {
      list.push(parseVariableDeclaration(kind));
      if (!match(",")) {
        break;
      }
      lex();
    } while (index < length);
    return list;
  }
  function parseVariableStatement() {
    var declarations;
    expectKeyword("var");
    declarations = parseVariableDeclarationList();
    consumeSemicolon();
    return delegate.createVariableDeclaration(declarations, "var");
  }
  function parseConstLetDeclaration(kind) {
    var declarations, startToken;
    startToken = lookahead;
    expectKeyword(kind);
    declarations = parseVariableDeclarationList(kind);
    consumeSemicolon();
    return delegate.markEnd(delegate.createVariableDeclaration(declarations, kind), startToken);
  }
  function parseEmptyStatement() {
    expect(";");
    return delegate.createEmptyStatement();
  }
  function parseExpressionStatement() {
    var expr = parseExpression();
    consumeSemicolon();
    return delegate.createExpressionStatement(expr);
  }
  function parseIfStatement() {
    var test, consequent, alternate;
    expectKeyword("if");
    expect("(");
    test = parseExpression();
    expect(")");
    consequent = parseStatement();
    if (matchKeyword("else")) {
      lex();
      alternate = parseStatement();
    } else {
      alternate = null;
    }
    return delegate.createIfStatement(test, consequent, alternate);
  }
  function parseDoWhileStatement() {
    var body, test, oldInIteration;
    expectKeyword("do");
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    expectKeyword("while");
    expect("(");
    test = parseExpression();
    expect(")");
    if (match(";")) {
      lex();
    }
    return delegate.createDoWhileStatement(body, test);
  }
  function parseWhileStatement() {
    var test, body, oldInIteration;
    expectKeyword("while");
    expect("(");
    test = parseExpression();
    expect(")");
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    return delegate.createWhileStatement(test, body);
  }
  function parseForVariableDeclaration() {
    var token, declarations, startToken;
    startToken = lookahead;
    token = lex();
    declarations = parseVariableDeclarationList();
    return delegate.markEnd(delegate.createVariableDeclaration(declarations, token.value), startToken);
  }
  function parseForStatement() {
    var init, test, update, left, right, body, oldInIteration;
    init = test = update = null;
    expectKeyword("for");
    expect("(");
    if (match(";")) {
      lex();
    } else {
      if (matchKeyword("var") || matchKeyword("let")) {
        state.allowIn = false;
        init = parseForVariableDeclaration();
        state.allowIn = true;
        if (init.declarations.length === 1 && matchKeyword("in")) {
          lex();
          left = init;
          right = parseExpression();
          init = null;
        }
      } else {
        state.allowIn = false;
        init = parseExpression();
        state.allowIn = true;
        if (matchKeyword("in")) {
          if (!isLeftHandSide(init)) {
            throwErrorTolerant({}, Messages.InvalidLHSInForIn);
          }
          lex();
          left = init;
          right = parseExpression();
          init = null;
        }
      }
      if (typeof left === "undefined") {
        expect(";");
      }
    }
    if (typeof left === "undefined") {
      if (!match(";")) {
        test = parseExpression();
      }
      expect(";");
      if (!match(")")) {
        update = parseExpression();
      }
    }
    expect(")");
    oldInIteration = state.inIteration;
    state.inIteration = true;
    body = parseStatement();
    state.inIteration = oldInIteration;
    return typeof left === "undefined" ? delegate.createForStatement(init, test, update, body) : delegate.createForInStatement(left, right, body);
  }
  function parseContinueStatement() {
    var label = null, key;
    expectKeyword("continue");
    if (source.charCodeAt(index) === 59) {
      lex();
      if (!state.inIteration) {
        throwError({}, Messages.IllegalContinue);
      }
      return delegate.createContinueStatement(null);
    }
    if (peekLineTerminator()) {
      if (!state.inIteration) {
        throwError({}, Messages.IllegalContinue);
      }
      return delegate.createContinueStatement(null);
    }
    if (lookahead.type === Token.Identifier) {
      label = parseVariableIdentifier();
      key = "$" + label.name;
      if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
        throwError({}, Messages.UnknownLabel, label.name);
      }
    }
    consumeSemicolon();
    if (label === null && !state.inIteration) {
      throwError({}, Messages.IllegalContinue);
    }
    return delegate.createContinueStatement(label);
  }
  function parseBreakStatement() {
    var label = null, key;
    expectKeyword("break");
    if (source.charCodeAt(index) === 59) {
      lex();
      if (!(state.inIteration || state.inSwitch)) {
        throwError({}, Messages.IllegalBreak);
      }
      return delegate.createBreakStatement(null);
    }
    if (peekLineTerminator()) {
      if (!(state.inIteration || state.inSwitch)) {
        throwError({}, Messages.IllegalBreak);
      }
      return delegate.createBreakStatement(null);
    }
    if (lookahead.type === Token.Identifier) {
      label = parseVariableIdentifier();
      key = "$" + label.name;
      if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
        throwError({}, Messages.UnknownLabel, label.name);
      }
    }
    consumeSemicolon();
    if (label === null && !(state.inIteration || state.inSwitch)) {
      throwError({}, Messages.IllegalBreak);
    }
    return delegate.createBreakStatement(label);
  }
  function parseReturnStatement() {
    var argument = null;
    expectKeyword("return");
    if (!state.inFunctionBody) {
      throwErrorTolerant({}, Messages.IllegalReturn);
    }
    if (source.charCodeAt(index) === 32) {
      if (isIdentifierStart(source.charCodeAt(index + 1))) {
        argument = parseExpression();
        consumeSemicolon();
        return delegate.createReturnStatement(argument);
      }
    }
    if (peekLineTerminator()) {
      return delegate.createReturnStatement(null);
    }
    if (!match(";")) {
      if (!match("}") && lookahead.type !== Token.EOF) {
        argument = parseExpression();
      }
    }
    consumeSemicolon();
    return delegate.createReturnStatement(argument);
  }
  function parseWithStatement() {
    var object, body;
    if (strict) {
      skipComment();
      throwErrorTolerant({}, Messages.StrictModeWith);
    }
    expectKeyword("with");
    expect("(");
    object = parseExpression();
    expect(")");
    body = parseStatement();
    return delegate.createWithStatement(object, body);
  }
  function parseSwitchCase() {
    var test, consequent = [], statement, startToken;
    startToken = lookahead;
    if (matchKeyword("default")) {
      lex();
      test = null;
    } else {
      expectKeyword("case");
      test = parseExpression();
    }
    expect(":");
    while (index < length) {
      if (match("}") || matchKeyword("default") || matchKeyword("case")) {
        break;
      }
      statement = parseStatement();
      consequent.push(statement);
    }
    return delegate.markEnd(delegate.createSwitchCase(test, consequent), startToken);
  }
  function parseSwitchStatement() {
    var discriminant, cases, clause, oldInSwitch, defaultFound;
    expectKeyword("switch");
    expect("(");
    discriminant = parseExpression();
    expect(")");
    expect("{");
    cases = [];
    if (match("}")) {
      lex();
      return delegate.createSwitchStatement(discriminant, cases);
    }
    oldInSwitch = state.inSwitch;
    state.inSwitch = true;
    defaultFound = false;
    while (index < length) {
      if (match("}")) {
        break;
      }
      clause = parseSwitchCase();
      if (clause.test === null) {
        if (defaultFound) {
          throwError({}, Messages.MultipleDefaultsInSwitch);
        }
        defaultFound = true;
      }
      cases.push(clause);
    }
    state.inSwitch = oldInSwitch;
    expect("}");
    return delegate.createSwitchStatement(discriminant, cases);
  }
  function parseThrowStatement() {
    var argument;
    expectKeyword("throw");
    if (peekLineTerminator()) {
      throwError({}, Messages.NewlineAfterThrow);
    }
    argument = parseExpression();
    consumeSemicolon();
    return delegate.createThrowStatement(argument);
  }
  function parseCatchClause() {
    var param, body, startToken;
    startToken = lookahead;
    expectKeyword("catch");
    expect("(");
    if (match(")")) {
      throwUnexpected(lookahead);
    }
    param = parseVariableIdentifier();
    if (strict && isRestrictedWord(param.name)) {
      throwErrorTolerant({}, Messages.StrictCatchVariable);
    }
    expect(")");
    body = parseBlock();
    return delegate.markEnd(delegate.createCatchClause(param, body), startToken);
  }
  function parseTryStatement() {
    var block, handlers = [], finalizer = null;
    expectKeyword("try");
    block = parseBlock();
    if (matchKeyword("catch")) {
      handlers.push(parseCatchClause());
    }
    if (matchKeyword("finally")) {
      lex();
      finalizer = parseBlock();
    }
    if (handlers.length === 0 && !finalizer) {
      throwError({}, Messages.NoCatchOrFinally);
    }
    return delegate.createTryStatement(block, [], handlers, finalizer);
  }
  function parseDebuggerStatement() {
    expectKeyword("debugger");
    consumeSemicolon();
    return delegate.createDebuggerStatement();
  }
  function parseStatement() {
    var type = lookahead.type, expr, labeledBody, key, startToken;
    if (type === Token.EOF) {
      throwUnexpected(lookahead);
    }
    if (type === Token.Punctuator && lookahead.value === "{") {
      return parseBlock();
    }
    startToken = lookahead;
    if (type === Token.Punctuator) {
      switch (lookahead.value) {
        case ";":
          return delegate.markEnd(parseEmptyStatement(), startToken);
        case "(":
          return delegate.markEnd(parseExpressionStatement(), startToken);
        default:
          break;
      }
    }
    if (type === Token.Keyword) {
      switch (lookahead.value) {
        case "break":
          return delegate.markEnd(parseBreakStatement(), startToken);
        case "continue":
          return delegate.markEnd(parseContinueStatement(), startToken);
        case "debugger":
          return delegate.markEnd(parseDebuggerStatement(), startToken);
        case "do":
          return delegate.markEnd(parseDoWhileStatement(), startToken);
        case "for":
          return delegate.markEnd(parseForStatement(), startToken);
        case "function":
          return delegate.markEnd(parseFunctionDeclaration(), startToken);
        case "if":
          return delegate.markEnd(parseIfStatement(), startToken);
        case "return":
          return delegate.markEnd(parseReturnStatement(), startToken);
        case "switch":
          return delegate.markEnd(parseSwitchStatement(), startToken);
        case "throw":
          return delegate.markEnd(parseThrowStatement(), startToken);
        case "try":
          return delegate.markEnd(parseTryStatement(), startToken);
        case "var":
          return delegate.markEnd(parseVariableStatement(), startToken);
        case "while":
          return delegate.markEnd(parseWhileStatement(), startToken);
        case "with":
          return delegate.markEnd(parseWithStatement(), startToken);
        default:
          break;
      }
    }
    expr = parseExpression();
    if (expr.type === Syntax.Identifier && match(":")) {
      lex();
      key = "$" + expr.name;
      if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
        throwError({}, Messages.Redeclaration, "Label", expr.name);
      }
      state.labelSet[key] = true;
      labeledBody = parseStatement();
      delete state.labelSet[key];
      return delegate.markEnd(delegate.createLabeledStatement(expr, labeledBody), startToken);
    }
    consumeSemicolon();
    return delegate.markEnd(delegate.createExpressionStatement(expr), startToken);
  }
  function parseFunctionSourceElements() {
    var sourceElement, sourceElements = [], token, directive, firstRestricted, oldLabelSet, oldInIteration, oldInSwitch, oldInFunctionBody, startToken;
    startToken = lookahead;
    expect("{");
    while (index < length) {
      if (lookahead.type !== Token.StringLiteral) {
        break;
      }
      token = lookahead;
      sourceElement = parseSourceElement();
      sourceElements.push(sourceElement);
      if (sourceElement.expression.type !== Syntax.Literal) {
        break;
      }
      directive = source.slice(token.start + 1, token.end - 1);
      if (directive === "use strict") {
        strict = true;
        if (firstRestricted) {
          throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
        }
      } else {
        if (!firstRestricted && token.octal) {
          firstRestricted = token;
        }
      }
    }
    oldLabelSet = state.labelSet;
    oldInIteration = state.inIteration;
    oldInSwitch = state.inSwitch;
    oldInFunctionBody = state.inFunctionBody;
    state.labelSet = {};
    state.inIteration = false;
    state.inSwitch = false;
    state.inFunctionBody = true;
    while (index < length) {
      if (match("}")) {
        break;
      }
      sourceElement = parseSourceElement();
      if (typeof sourceElement === "undefined") {
        break;
      }
      sourceElements.push(sourceElement);
    }
    expect("}");
    state.labelSet = oldLabelSet;
    state.inIteration = oldInIteration;
    state.inSwitch = oldInSwitch;
    state.inFunctionBody = oldInFunctionBody;
    return delegate.markEnd(delegate.createBlockStatement(sourceElements), startToken);
  }
  function parseParams(firstRestricted) {
    var param, params = [], token, stricted, paramSet, key, message;
    expect("(");
    if (!match(")")) {
      paramSet = {};
      while (index < length) {
        token = lookahead;
        param = parseVariableIdentifier();
        key = "$" + token.value;
        if (strict) {
          if (isRestrictedWord(token.value)) {
            stricted = token;
            message = Messages.StrictParamName;
          }
          if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
            stricted = token;
            message = Messages.StrictParamDupe;
          }
        } else if (!firstRestricted) {
          if (isRestrictedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictParamName;
          } else if (isStrictModeReservedWord(token.value)) {
            firstRestricted = token;
            message = Messages.StrictReservedWord;
          } else if (Object.prototype.hasOwnProperty.call(paramSet, key)) {
            firstRestricted = token;
            message = Messages.StrictParamDupe;
          }
        }
        params.push(param);
        paramSet[key] = true;
        if (match(")")) {
          break;
        }
        expect(",");
      }
    }
    expect(")");
    return {
      params: params,
      stricted: stricted,
      firstRestricted: firstRestricted,
      message: message
    };
  }
  function parseFunctionDeclaration() {
    var id, params = [], body, token, stricted, tmp, firstRestricted, message, previousStrict, startToken;
    startToken = lookahead;
    expectKeyword("function");
    token = lookahead;
    id = parseVariableIdentifier();
    if (strict) {
      if (isRestrictedWord(token.value)) {
        throwErrorTolerant(token, Messages.StrictFunctionName);
      }
    } else {
      if (isRestrictedWord(token.value)) {
        firstRestricted = token;
        message = Messages.StrictFunctionName;
      } else if (isStrictModeReservedWord(token.value)) {
        firstRestricted = token;
        message = Messages.StrictReservedWord;
      }
    }
    tmp = parseParams(firstRestricted);
    params = tmp.params;
    stricted = tmp.stricted;
    firstRestricted = tmp.firstRestricted;
    if (tmp.message) {
      message = tmp.message;
    }
    previousStrict = strict;
    body = parseFunctionSourceElements();
    if (strict && firstRestricted) {
      throwError(firstRestricted, message);
    }
    if (strict && stricted) {
      throwErrorTolerant(stricted, message);
    }
    strict = previousStrict;
    return delegate.markEnd(delegate.createFunctionDeclaration(id, params, [], body), startToken);
  }
  function parseFunctionExpression() {
    var token, id = null, stricted, firstRestricted, message, tmp, params = [], body, previousStrict, startToken;
    startToken = lookahead;
    expectKeyword("function");
    if (!match("(")) {
      token = lookahead;
      id = parseVariableIdentifier();
      if (strict) {
        if (isRestrictedWord(token.value)) {
          throwErrorTolerant(token, Messages.StrictFunctionName);
        }
      } else {
        if (isRestrictedWord(token.value)) {
          firstRestricted = token;
          message = Messages.StrictFunctionName;
        } else if (isStrictModeReservedWord(token.value)) {
          firstRestricted = token;
          message = Messages.StrictReservedWord;
        }
      }
    }
    tmp = parseParams(firstRestricted);
    params = tmp.params;
    stricted = tmp.stricted;
    firstRestricted = tmp.firstRestricted;
    if (tmp.message) {
      message = tmp.message;
    }
    previousStrict = strict;
    body = parseFunctionSourceElements();
    if (strict && firstRestricted) {
      throwError(firstRestricted, message);
    }
    if (strict && stricted) {
      throwErrorTolerant(stricted, message);
    }
    strict = previousStrict;
    return delegate.markEnd(delegate.createFunctionExpression(id, params, [], body), startToken);
  }
  function parseSourceElement() {
    if (lookahead.type === Token.Keyword) {
      switch (lookahead.value) {
        case "const":
        case "let":
          return parseConstLetDeclaration(lookahead.value);
        case "function":
          return parseFunctionDeclaration();
        default:
          return parseStatement();
      }
    }
    if (lookahead.type !== Token.EOF) {
      return parseStatement();
    }
  }
  function parseSourceElements() {
    var sourceElement, sourceElements = [], token, directive, firstRestricted;
    while (index < length) {
      token = lookahead;
      if (token.type !== Token.StringLiteral) {
        break;
      }
      sourceElement = parseSourceElement();
      sourceElements.push(sourceElement);
      if (sourceElement.expression.type !== Syntax.Literal) {
        break;
      }
      directive = source.slice(token.start + 1, token.end - 1);
      if (directive === "use strict") {
        strict = true;
        if (firstRestricted) {
          throwErrorTolerant(firstRestricted, Messages.StrictOctalLiteral);
        }
      } else {
        if (!firstRestricted && token.octal) {
          firstRestricted = token;
        }
      }
    }
    while (index < length) {
      sourceElement = parseSourceElement();
      if (typeof sourceElement === "undefined") {
        break;
      }
      sourceElements.push(sourceElement);
    }
    return sourceElements;
  }
  function parseProgram() {
    var body, startToken;
    skipComment();
    peek();
    startToken = lookahead;
    strict = false;
    body = parseSourceElements();
    return delegate.markEnd(delegate.createProgram(body), startToken);
  }
  function filterTokenLocation() {
    var i, entry, token, tokens = [];
    for (i = 0; i < extra.tokens.length; ++i) {
      entry = extra.tokens[i];
      token = {
        type: entry.type,
        value: entry.value
      };
      if (extra.range) {
        token.range = entry.range;
      }
      if (extra.loc) {
        token.loc = entry.loc;
      }
      tokens.push(token);
    }
    extra.tokens = tokens;
  }
  function tokenize(code, options) {
    var toString, token, tokens;
    toString = String;
    if (typeof code !== "string" && !(code instanceof String)) {
      code = toString(code);
    }
    delegate = SyntaxTreeDelegate;
    source = code;
    index = 0;
    lineNumber = source.length > 0 ? 1 : 0;
    lineStart = 0;
    length = source.length;
    lookahead = null;
    state = {
      allowIn: true,
      labelSet: {},
      inFunctionBody: false,
      inIteration: false,
      inSwitch: false,
      lastCommentStart: -1
    };
    extra = {};
    options = options || {};
    options.tokens = true;
    extra.tokens = [];
    extra.tokenize = true;
    extra.openParenToken = -1;
    extra.openCurlyToken = -1;
    extra.range = typeof options.range === "boolean" && options.range;
    extra.loc = typeof options.loc === "boolean" && options.loc;
    if (typeof options.comment === "boolean" && options.comment) {
      extra.comments = [];
    }
    if (typeof options.tolerant === "boolean" && options.tolerant) {
      extra.errors = [];
    }
    try {
      peek();
      if (lookahead.type === Token.EOF) {
        return extra.tokens;
      }
      token = lex();
      while (lookahead.type !== Token.EOF) {
        try {
          token = lex();
        } catch (lexError) {
          token = lookahead;
          if (extra.errors) {
            extra.errors.push(lexError);
            break;
          } else {
            throw lexError;
          }
        }
      }
      filterTokenLocation();
      tokens = extra.tokens;
      if (typeof extra.comments !== "undefined") {
        tokens.comments = extra.comments;
      }
      if (typeof extra.errors !== "undefined") {
        tokens.errors = extra.errors;
      }
    } catch (e) {
      throw e;
    } finally {
      extra = {};
    }
    return tokens;
  }
  function parse(code, options) {
    var program, toString;
    toString = String;
    if (typeof code !== "string" && !(code instanceof String)) {
      code = toString(code);
    }
    delegate = SyntaxTreeDelegate;
    source = code;
    index = 0;
    lineNumber = source.length > 0 ? 1 : 0;
    lineStart = 0;
    length = source.length;
    lookahead = null;
    state = {
      allowIn: true,
      labelSet: {},
      inFunctionBody: false,
      inIteration: false,
      inSwitch: false,
      lastCommentStart: -1
    };
    extra = {};
    if (typeof options !== "undefined") {
      extra.range = typeof options.range === "boolean" && options.range;
      extra.loc = typeof options.loc === "boolean" && options.loc;
      extra.attachComment = typeof options.attachComment === "boolean" && options.attachComment;
      if (extra.loc && options.source !== null && options.source !== undefined) {
        extra.source = toString(options.source);
      }
      if (typeof options.tokens === "boolean" && options.tokens) {
        extra.tokens = [];
      }
      if (typeof options.comment === "boolean" && options.comment) {
        extra.comments = [];
      }
      if (typeof options.tolerant === "boolean" && options.tolerant) {
        extra.errors = [];
      }
      if (extra.attachComment) {
        extra.range = true;
        extra.comments = [];
        extra.bottomRightStack = [];
        extra.trailingComments = [];
        extra.leadingComments = [];
      }
    }
    try {
      program = parseProgram();
      if (typeof extra.comments !== "undefined") {
        program.comments = extra.comments;
      }
      if (typeof extra.tokens !== "undefined") {
        filterTokenLocation();
        program.tokens = extra.tokens;
      }
      if (typeof extra.errors !== "undefined") {
        program.errors = extra.errors;
      }
    } catch (e) {
      throw e;
    } finally {
      extra = {};
    }
    return program;
  }
  exports.version = "1.2.2";
  exports.tokenize = tokenize;
  exports.parse = parse;
  exports.Syntax = function() {
    var name, types = {};
    if (typeof Object.create === "function") {
      types = Object.create(null);
    }
    for (name in Syntax) {
      if (Syntax.hasOwnProperty(name)) {
        types[name] = Syntax[name];
      }
    }
    if (typeof Object.freeze === "function") {
      Object.freeze(types);
    }
    return types;
  }();
});