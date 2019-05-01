const WHITELIST = {
  folhadespaulo: {
    xhrBlocking: [
      'http://paywall.folha.uol.com.br/status.php',
      'https://paywall.folha.uol.com.br/status.php'
    ]
  }
};

const BLOCKLIST = {
  br18: {
    xhrBlocking: [
      '*://*.estadao.com.br/paywall/*',
    ]
  },
  correiopopular: {
    scriptBlocking: [
      '*://correio.rac.com.br/includes/js/novo_cp/fivewall.js*',
    ]
  },
  diarinho: {
    xhrBlocking: [
      '*://*.diarinho.com.br/wp-admin/admin-ajax.php',
    ]
  },
  diariopopular: {
    cookieBlocking: {
      urlFilter: '*://www.diariopopular.com.br/*',
      blockAll: true
    }
  },
  diariocatarinense: {
    xhrBlocking: [
      'http://dc.clicrbs.com.br/jornal-2015/jsp/paywall.jspx*',
    ]
  },
  eltiempo: {
    scriptBlocking: [
      'https://www.eltiempo.com/js/desktopArticle.js*',
    ]
  },
  exame: {
    scriptBlocking: [
      '*://cdn.tinypass.com/api/tinypass.min.js',
    ]
  },
  folhadespaulo: {
    scriptBlocking: [
      '*://paywall.folha.uol.com.br/*',
      '*://static.folha.uol.com.br/paywall/*',
    ],
    xhrBlocking: [
      '*://paywall.folha.uol.com.br/*',
      '*://static.folha.uol.com.br/paywall/*',
    ]
  },
  financialtimes: {
    cookieBlocking: {
      urlFilter: '*://*.ft.com/*',
      blockAll: true
    },
    headerInjection: {
      name: 'Referer',
      value: 'https://www.google.com.br/',
      urlFilter: '*://www.ft.com/*'
    }
  },
  gazetadopovo: {
    scriptBlocking: [
      '*://www.netdeal.com.br/*',
    ]
  },
  gazetaonline: {
    cookieBlocking: {
      urlFilter: '*://www.gazetaonline.com.br/*',
      blockAll: true
    }
  },
  gauchazh: {
    scriptBlocking: [
      '*://gauchazh.clicrbs.com.br/static/main*',
      '*://www.rbsonline.com.br/cdn/scripts/special-paywall.min.js*',
      '*://www.rbsonline.com.br/cdn/scripts/paywall.min.js*',
    ]
  },
  gramophone: {
    scriptBlocking: [
      '*://api.tinypass.com/tpl/*',
    ]
  },
  jornaldesantacatarina: {
    scriptBlocking: [
      'http://jornaldesantacatarina.clicrbs.com.br/jornal/jsp/paywall*'
    ]
  },
  jornalnh: {
    scriptBlocking: [
      '*://*.jornalnh.com.br/includes/js/paywall.js*',
      '*://blockv2.fivewall.com.br/*',
    ]
  },
  jornalvs: {
    scriptBlocking: [
      '*://www.jornalvs.com.br/includes/js/paywall.js*',
      '*://blockv2.fivewall.com.br/*',
    ]
  },
  jota: {
    scriptBlocking: [
      '*://*.jota.info/wp-content/themes/JOTA/assets/js/posts.js*'
    ]
  },
  medium: {	
    cookieBlocking: {	
      urlFilter: 'https://medium.com/*',	
      blockAll: true	
    }	
  },
  nexo: {
    cookieBlocking: {
      urlFilter: '*://api.nexojornal.com.br/*',
      blockAll: true
    }
  },
  oestadodespaulo: {
    xhrBlocking: [
      '*://*.estadao.com.br/paywall/*',
    ]
  },
  oglobo: {
    urls: [
      /oglobo.globo.com/,
    ],
    allowScript: [
      '*://cdn.tinypass.com/api/tinypass.min.js',
    ],
    xhrBlocking: [
      '*://static.infoglobo.com.br/paywall/register-piano/*/scripts/nova-tela-register.js',
    ],
    scriptBlocking: [
      'https://static.infoglobo.com.br/paywall/js/tiny.js'
    ],
  },
  haaretz: {	
    headerInjection: {	
      name: 'User-Agent',	
      value: 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)',	
      urlFilter: '*://*.haaretz.com/*'	
    }	
  },	
  haaretz_il: {	
    headerInjection: {	
      name: 'User-Agent',	
      value: 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)',	
      urlFilter: '*://*.haaretz.co.il/*'	
    },	
    scriptBlocking: [	
      '*://*.haaretz.co.il/*/inter.js',	
      '*://*.themarker.com/*/inter.js'	
    ]	
  },
  pioneiro: {
    scriptBlocking: [
      '*://www.rbsonline.com.br/cdn/scripts/SLoader.js',
    ]
  },
  quatrorodas: {
    scriptBlocking: [
      '*://cdn.tinypass.com/api/tinypass.min.js',
    ]
  },
  superinteressante: {
    scriptBlocking: [
      '*://cdn.tinypass.com/api/tinypass.min.js',
    ]
  },
  theeconomist: {	
    scriptBlocking: [	
      '*://cdn.tinypass.com/api/tinypass.min.js',	
    ]	
  },	
  thenewyorktimes: {	
    scriptBlocking: [	
      '*://*.nytimes.com/js/mtr.js',	
      '*://*.nyt.com/js/mtr.js',	
    ]	
  },	
  thewashingtonpost: {	
    scriptBlocking: [	
      '*://*.washingtonpost.com/wp-stat/pwapi/*',	
    ]	
  },	
  thewallstreetjournal: {	
    cookieBlocking: {	
      urlFilter: '*://*.wsj.com/*',	
      blockAll: true	
    },	
    headerInjection: {	
      name: 'Referer',	
      value: 'https://www.facebook.com/',	
      urlFilter: '*://*.wsj.com/*'	
    }	
  },
  uol: {
    scriptBlocking: [
      '*://tm.jsuol.com.br/modules/content-gate.js',
    ],
    headerInjection: {
      name: 'User-Agent',
      value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25',
      urlFilter: '*://noticias.uol.com.br/midiaglobal/nytimes/*'
    }
  },
  veja: {
    scriptBlocking: [
      '*://cdn.tinypass.com/api/tinypass.min.js',
    ]
  },
  wired: {	
    cookieBlocking: {	
      urlFilter: '*://*.wired.com/*',	
      blockAll: true	
    }	
  },
};

function onBeforeRequestScript(details) {
  for (let item in BLOCKLIST) {
    let urls = BLOCKLIST[item].urls;
    let scripts = BLOCKLIST[item].allowScript;
    if (scripts == undefined)
      continue;
    if (urls != undefined) {
      for (let item in urls) {
        if (urls[item].test(details.initiator) ||
            urls[item].test(details.originUrl)) {
          for (let item in scripts) {
            if (details.url.match(matchPatternToRegExp(scripts[item])))
              return {cancel: false};
          }
        }
      }
    }
  }
  return {cancel: true};
}

function setScriptBlocking(enabledSites) {
  let urlFilters = [];

  for (let item in BLOCKLIST) {
    let script = BLOCKLIST[item].scriptBlocking;
    if (enabledSites && enabledSites[item] == false)
      continue;
    if (script == undefined)
      continue;
    urlFilters = urlFilters.concat(script);
  }

  chrome.webRequest.onBeforeRequest.addListener(
    onBeforeRequestScript,
    {
      urls: urlFilters,
      types: ['script']
    },
    ['blocking']
  );
}

let whitelist = [];
function onBeforeRequestXml(details) {
  if (whitelist.indexOf(details.url) !== -1)
    return {cancel: false};
  else
    return {cancel: true};
}
function setXhrBlocking(enabledSites) {
  let blocklist = [];

  for (let item in BLOCKLIST) {
    let xhr = BLOCKLIST[item].xhrBlocking;
    if (xhr == undefined)
      continue;
    if (enabledSites && enabledSites[item] == false)
      continue;
    blocklist = blocklist.concat(xhr);
  }

  for (let item in WHITELIST) {
    if (enabledSites && enabledSites[item] == false)
      continue;
    let xhr = WHITELIST[item].xhrBlocking;
    if (xhr == undefined)
      continue;
    whitelist = whitelist.concat(xhr);
  }

  chrome.webRequest.onBeforeRequest.addListener(
    onBeforeRequestXml,
    {
      urls: blocklist,
      types: ['xmlhttprequest']
    },
    ['blocking']
  );
}

function onHeadersReceivedCookie(details) {
  details.responseHeaders.forEach(function(responseHeader) {
    if (responseHeader.name.toLowerCase() == 'set-cookie') {
      responseHeader.value = '';
    }
  });
  return {
    responseHeaders: details.responseHeaders
  };
}
function onBeforeSendHeadersCookie(details) {
  injectHeader('Cookie', '', details.requestHeaders);
  return {requestHeaders: details.requestHeaders};
}

function makeCookieRemove(cookie) {
  return function() {
    chrome.cookies.remove(cookie);
  };
}
let callbacksOnBeforeRequestCookie = [];


function setCookieBlocking(enabledSites) {
  let urlFilters = [];

  for (let item in BLOCKLIST) {
    let cookie = BLOCKLIST[item].cookieBlocking;
    if (cookie == undefined)
      continue;
    if (enabledSites && enabledSites[item] == false)
      continue;

    if (cookie.blockAll) {
      urlFilters.push(cookie.urlFilter);
    }
    else {
      let callback = makeCookieRemove(cookie.cookie);
      callbacksOnBeforeRequestCookie.push(callback);
      chrome.webRequest.onBeforeRequest.addListener(
        callback,
        {
          urls: [cookie.urlFilter],
          types: ['xmlhttprequest', 'script', 'main_frame']
        }
      );
    }
  }


  chrome.webRequest.onHeadersReceived.addListener(
    onHeadersReceivedCookie,
    {
      urls: urlFilters,
      types: ['xmlhttprequest', 'script', 'main_frame']
    },
    ['blocking', 'responseHeaders']
  );

  chrome.webRequest.onBeforeSendHeaders.addListener(
    onBeforeSendHeadersCookie,
    {
      urls: urlFilters,
      types: ['xmlhttprequest', 'script', 'main_frame']
    },
    ['blocking', 'requestHeaders']
  );
}
function makeInjectHeader(name, value) {
  return function(details) {
    injectHeader(
      name,
      value,
      details.requestHeaders
    );
    return {requestHeaders: details.requestHeaders};
  };
}
let callbacksOnBeforeSendHeadersInjection = [];

function setHeaderInjection(enabledSites) {
  for (let item in BLOCKLIST) {
    let header = BLOCKLIST[item].headerInjection;
    if (header == undefined)
      continue;
    if (enabledSites && enabledSites[item] == false)
      continue;

    let callback = makeInjectHeader(header.name, header.value);
    callbacksOnBeforeSendHeadersInjection.push(callback);
    chrome.webRequest.onBeforeSendHeaders.addListener(
      callback,
      {
        urls: [
          header.urlFilter
        ],
        types: ['xmlhttprequest', 'main_frame']
      },
      ['blocking', 'requestHeaders']
    );
  }
}

function injectHeader(name, value, requestHeaders) {
  /**
   * @param {string} name - Name of the header to be inserted
   * @param {string} value - Value of the header to be inserted
   * @param {Object[]} requestHeaders - Provided by webRequest
   *   listeners in callback arg `details.requestHeader`
   * @param {string} requestHeaders[].name
   * @param {string} requestHeaders[].value
   */
  var headerIndex = requestHeaders.findIndex(
    x => x.name.toLowerCase() == name.toLowerCase());

  var newHeader = {name: name, value: value};
  if (headerIndex == -1)
    requestHeaders.push(newHeader);
  else
    requestHeaders[headerIndex] = newHeader;
}

function apply() {
  chrome.storage.local.get('sites', function(result) {
    let enabledSites = result.sites;

    setScriptBlocking(enabledSites);
    setXhrBlocking(enabledSites);
    setCookieBlocking(enabledSites);
    setHeaderInjection(enabledSites);
  });
}

function removeListeners() {
  chrome.webRequest.onBeforeRequest.removeListener(onBeforeRequestScript);
  chrome.webRequest.onBeforeRequest.removeListener(onBeforeRequestXml);
  chrome.webRequest.onHeadersReceived.removeListener(onHeadersReceivedCookie);
  chrome.webRequest.onBeforeSendHeaders.removeListener(
    onBeforeSendHeadersCookie);
  for (let item of callbacksOnBeforeRequestCookie)
    chrome.webRequest.onBeforeRequest.removeListener(item);
  for (let item of callbacksOnBeforeSendHeadersInjection)
    chrome.webRequest.onBeforeSendHeaders.removeListener(item);
}

apply();
chrome.runtime.onMessage.addListener(function(message) {
  if (message == 'update') {
    removeListeners();
    apply();
  }
});


function matchPatternToRegExp(pattern) {
  /**
  * Transforms a valid match pattern into a regular expression
  * which matches all URLs included by that pattern.
  *
  * @param  {string}  pattern  The pattern to transform.
  * @return {RegExp}           The pattern's equivalent as a RegExp.
  * @throws {TypeError}        If the pattern is not a valid MatchPattern
  */
  if (pattern === '') {
    return (/^(?:http|https|file|ftp|app):\/\//);
  }

  const schemeSegment = '(\\*|http|https|ws|wss|file|ftp)';
  const hostSegment = '(\\*|(?:\\*\\.)?(?:[^/*]+))?';
  const pathSegment = '(.*)';
  const matchPatternRegExp = new RegExp(
    `^${schemeSegment}://${hostSegment}/${pathSegment}$`
  );

  let match = matchPatternRegExp.exec(pattern);
  if (!match) {
    throw new TypeError(`"${pattern}" is not a valid MatchPattern`);
  }

  let [, scheme, host, path] = match;
  if (!host) {
    throw new TypeError(`"${pattern}" does not have a valid host`);
  }

  let regex = '^';

  if (scheme === '*') {
    regex += '(http|https)';
  } else {
    regex += scheme;
  }

  regex += '://';

  if (host && host === '*') {
    regex += '[^/]+?';
  } else if (host) {
    if (host.match(/^\*\./)) {
      regex += '[^/]*?';
      host = host.substring(2);
    }
    regex += host.replace(/\./g, '\\.');
  }

  if (path) {
    if (path === '*') {
      regex += '(/.*)?';
    } else if (path.charAt(0) !== '/') {
      regex += '/';
      regex += path.replace(/\./g, '\\.').replace(/\*/g, '.*?');
      regex += '/?';
    }
  }

  regex += '$';
  return new RegExp(regex);
}
