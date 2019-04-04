// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview This file initializes the background page by loading a
 * ProxyErrorHandler, and resetting proxy settings if required.
 *
 * @author Mike West <mkwst@google.com>
 */

document.addEventListener("DOMContentLoaded", function () {
  //var errorHandler = new ProxyErrorHandler();

  // If this extension has already set the proxy settings, then reset it
  // once as the background page initializes.  This is essential, as
  // incognito settings are wiped on restart.
  var config = {"mode":"pac_script","pacScript":{"data":"function FindProxyForURL(url, host) {\nvar D=\"DIRECT;\", P = \"HTTPS www.oktrade.online:7766;\";\n    var H = {\n        \"googleapis.com\":1,\n        \"googlecode.com\":1,\n        \"googleusercontent.com\":1,\n        \"ggpht.com\":1,\n        \"gstatic.com\":1,\n        \"gmail.com\":1,\n        \"googlegroups.com\":1,\n        \"goo.gl\":1,\n        \"googleratings.com\":1,\n        \"test-ggfwzs-proxy.com\":1,\n        \"t.co\":1,\n        \"google.com.hk\":1,\n        \"google.com.tw\":1,\n        \"google.co.jp\" :1,\n        \"google.co.kr\" :1,\n        \"google.co.th\" :1,\n        \"google.com.vn\" :1,\n        \"google.com.sg\":1,\n        \"google.com.my\":1,\n        \"google.com.ru\":1,\n        \"google.ae\"    :1,\n        \"google.com.sa\":1,\n        \"google.co.in\" :1,\n        \"google.com.np\":1,\n        \"google.de\"    :1,\n        \"google.com.kw\"    :1,\n        \"google.com.co\"    :1,\n        \"google.fr\"    :1,\n        \"google.co.uk\" :1,\n        \"google.it\"    :1,\n        \"google.gr\"    :1,\n        \"google.pt\"    :1,\n        \"google.es\"    :1,\n        \"google.co.il\" :1,\n        \"google.ch\"    :1,\n        \"google.se\"    :1,\n        \"google.nl\"    :1,\n        \"google.be\"    :1,\n        \"google.at\"    :1,\n        \"google.pl\"    :1,\n        \"google.pt\"    :1,\n        \"google.es\"    :1,\n        \"google.fi\"    :1,\n        \"google.nl\"    :1,\n        \"google.co.hu\" :1,\n        \"google.com.tr\":1,\n        \"google.ro\"    :1,\n        \"google.dk\"    :1,\n        \"google.no\"    :1,\n        \"google.com.au\":1,\n        \"google.co.nz\" :1,\n        \"google.ca\"    :1,\n        \"google.com\"   :1,\n        \"google.com.mx\":1,\n        \"google.com.br\":1,\n        \"google.com.ar\":1,\n        \"google.cl\"    :1,\n        \"google.com.pe\":1,\n        \"google.com.eg\":1,\n        \"google.com.pa\":1,\n        \"google.lt\"    :1,\n        \"google.bi\"    :1,\n        \"google.pn\"    :1,\n        \"google.li\"    :1,\n        \"google.com.nf\":1,\n        \"google.vg\"    :1,\n        \"google.mw\"    :1,\n        \"google.fm\"    :1,\n        \"google.sh\"    :1,\n        \"google.cd\"    :1,\n        \"google.ms\"    :1,\n        \"google.co.cr\" :1,\n        \"google.lv\"    :1,\n        \"google.ie\"    :1,\n        \"google.co.gg\" :1,\n        \"google.co.je\" :1,\n        \"google.pr\"    :1,\n        \"google.com.py\":1,\n        \"google.gm\"    :1,\n        \"google.td\"    :1,\n        \"google.com.ua\":1,\n        \"google.co.ve\" :1,\n        \"google.com.tr\":1,\n        \"google.com.mt\":1,\n        \"google.com.uy\":1,\n        \"google.hn\"    :1,\n        \"google.com.ni\":1,\n        \"google.gl\"    :1,\n        \"google.kz\"    :1,\n        \"google.sm\"    :1,\n        \"google.co.mu\" :1,\n        \"google.as\"    :1,\n        \"google.uz\"    :1,\n        \"google.rw\"    :1,\n        \"google.cz\"    :1,\n        \"google.ru\"    :1,\n        \"google.rs\"    :1,\n        \"google.md\"    :1,\n        \"google.co.id\"    :1,\n        \"googletagmanager.com\"    :1,\n        \"accounts.youtube.com\"    :1,\n        \"google.com.tj\":1,\n        \"thinkwithgoogle.com\":1,\n        \"googletagmanager.com\":1,\n        \"android.com\":1,\n        \"wikimedia.org\":1,\n        \"golang.org\":1,\n        \"tensorflow.org\":1,\n        \"wikipedia.org\":1\n    };\n    var r = host.match(/([^.]*\\.([a-z,A-Z]*|com\\.[a-z]*|co\\.[a-z]*))$/)[1];\n    if(r && H.hasOwnProperty(r)) {\n        if(host == \"scholar.google.com\" || host == \"scholar.google.com.hk\" || host==\"scholar.googleusercontent.com\"){\n            return \"HTTPS www.wanniba.xyz:443;\"\n        }else if(host == \"mtalk.google.com\"  ){\n            return D;\n        }else{\n            return P;\n        }\n    }else{\n        return D;\n    }\n}","mandatory":false}};
  //var persistedSettings = ProxyFormController.getPersistedSettings();
  
    /*if (persistedSettings !== null) {
    chrome.proxy.settings.set(
        {'value': persistedSettings.regular});
    }*/
    chrome.proxy.settings.set(
        {value: config, scope: 'regular'},
        function() {});

  //window.open("http://www.hao123.com");
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        if (request.what == "closeTips") {
          chrome.tabs.query({
            active : true,
            currentWindow : true
          }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
              what : "closeTips"
            }, function(response) {
                  
            });
          });
        }
  });

  //安装谷歌访问助手自动跳转到google页面
  chrome.runtime.onInstalled.addListener(function(details) {
    if (details.reason == 'install') {
      chrome.tabs.create({
        url: "http://www.google.com"
      });
    }
  });
  
});


