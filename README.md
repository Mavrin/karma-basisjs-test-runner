#TODO
* Забирать script.js через npm
* Улучшить сообщения об ошибках
* Правильно обрабатывать выполненые тесты сейчас ``` var tests =  new basis.data.dataset.Subset({
                                                                     ruleEvents: "stateChanged",
                                                                     rule: function(test) {
                                                                         return test.state == basis.data.STATE.READY;
                                                                     }
                                                                 });
                                                                 tests.setSource(runner.loadTests(rootTest.childNodes));
                                                                 tests.addHandler({
                                                                     itemsChanged: function (sender, changed) {
                                                                         var result = {
                                                                             id: '',
                                                                             description: changed.inserted[0].data.name,
                                                                             suite: [],
                                                                             success: true,
                                                                             skipped: false,
                                                                             time: 0,
                                                                             log: []
                                                                         };
                                                                         tc.result(result);
                                                                     }
                                                                 }); ```
* Избежать изменений в методах  script.js
    было `basis.path.resolve(basis.require("./j.js").baseURI || "", "res/2NM1dsdOx8Ioc7cT_94Adw.html");` стало `basis.path.resolve(basis.require("./j.js").baseURI || "", "2NM1dsdOx8Ioc7cT_94Adw.html");`
    Вопрос: Возможно frame указать при настройке karma?
* Добавить return при или сделать как-то по другому
  ```js function loadTests(data) {
        stop();
          testsToRun.set(extractTests(data));
        return testsToRun;
      }
  ```
* Разобраться со сборкой test-runner, сейчас падает с ошибкой.