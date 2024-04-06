function deml(matched) {
  domain_match = 0;
  referrer_match = 0;
  try {
    domain_match = window.location.host.includes(
      matched[0].toLowerCase().split('@')[1].split('.')[0]
    );
  } catch (e) {}
  try {
    referrer_match = localStorage
      .getItem('sjrn_referrer')
      .includes(matched[0].toLowerCase().split('@')[1].split('.')[0]);
  } catch (e) {}
  return (
    !matched[0]
      .toLowerCase()
      .match(
        'book.|hotel|test@gmail|booking@|info@|reception@|reserv|recepcion@|support@|@[0-9.]*$'
      ) &&
    !domain_match &&
    !referrer_match
  );
}

function sjrn_cipher(str) {
  try {
    return encodeURIComponent(btoa(str.toLowerCase().trim()));
  } catch (e) {
    return '';
  }
}

function sjrn_lfe(sjrn_elt) {
  for (let i of document.getElementsByTagName('input')) {
    if (i.outerHTML.match(/e[-]*mail/i) && !sjrn_elt.has(i)) {
      sjrn_elt.set(i, true);
      i.addEventListener('blur', function () {
        localStorage.setItem('sjrn_e_eml', sjrn_cipher(i.value));
      });
    }
  }
  return sjrn_elt;
}

function sjrn_wfe(sjrn_elt) {
  return new Promise((resolve) => {
    sjrn_elt = sjrn_lfe(sjrn_elt);

    const observer = new MutationObserver((mutations) => {
      sjrn_elt = sjrn_lfe(sjrn_elt);
    });

    function setObserver() {
      if (document.body) {
        sjrn_elt = sjrn_lfe(sjrn_elt);
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      } else {
        window.setTimeout(setObserver, 500);
        return;
      }
    }
    setObserver();
  });
}

function sjrn_e() {
  sjrn_elt = sjrn_lfe(sjrn_elt);
  sjrn_wfe(sjrn_elt);
}

if (typeof sjrn_elt === 'undefined') {
  sjrn_elt = new Map();
  sjrn_e();
}

function feml() {
  function textNodesUnder(node) {
    var all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
      if (node.nodeType == 3) all.push(node);
      else all = all.concat(textNodesUnder(node));
    }
    return all;
  }

  matched_set = new Set();
  first_matched = null;
  for (let node of document.getElementsByTagName('*')) {
    matched = node.innerHTML.match(
      /(?:[a-z0-9!#$%&*+/?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    );
    if (matched && node.tagName != 'A' && deml(matched)) {
      matched_set.add(matched[0].toLowerCase());
      if (!first_matched) {
        first_matched = matched[0].toLowerCase();
      }
    }
  }
  try {
    auto_eml_domain = first_matched.split('@')[1];
  } catch (e) {
    auto_eml_domain = 'Not an email';
  }
  return {
    auto_eml_domain: auto_eml_domain,
    auto_eml: first_matched,
    auto_eml_count: matched_set.size,
    auto_eml_list: matched_set,
  };
}

function sjrn_heml() {
  sjrn_eml = feml();
  if (sjrn_eml.auto_eml) {
    return {
      auto_eml: sjrn_cipher(sjrn_eml.auto_eml),
      auto_eml_count: sjrn_eml.auto_eml_count,
      auto_eml_domain: sjrn_cipher(sjrn_eml.auto_eml_domain),
      // auto_eml_list: sjrn_cipher([...sjrn_eml.auto_eml_list].join('|')),
    };
  } else {
    return {
      auto_eml: '',
      auto_eml_count: 0,
      auto_eml_domain: '',
      // auto_eml_list: '',
    };
  }
}

function sjrn_ccid() {
  try {
    function ranString() {
      return ((Math.random() + 1).toString(36) + '000000').slice(2, 7);
    }
    if (!localStorage.getItem('sjrn_ccid')) {
      localStorage.setItem(
        'sjrn_ccid',
        Array.apply(null, {
          length: 5,
        })
          .map(Function.call, ranString)
          .join('-')
      );
    }
    return localStorage.getItem('sjrn_ccid');
  } catch (e) {
    return '';
  }
}

function sjrn_ga() {
  value = '; ' + document.cookie;
  parts = value.split('; _ga=');
  ga_ids = [];
  if (parts.length >= 2) {
    for (i = 1; i < parts.length; i++) {
      ga_id = parts[i].split(';').shift();
      try {
        ga_id_split = ga_id.split('.');
        ga_ids.push(
          ga_id_split[ga_id_split.length - 2] +
            '.' +
            ga_id_split[ga_id_split.length - 1]
        );
      } catch (e) {}
    }
    return ga_ids.join('|');
  } else {
    return '';
  }
}

function sjrn_tz() {
  try {
    tz_date = new Date();
    return tz_date.getTimezoneOffset();
  } catch (e) {
    return '';
  }
}

function sjrn_dclid() {
  try {
    dclid = window.location.href.split(/[?|&]dclid=/)[1].split('&')[0];
  } catch (e) {
    dclid = '';
  }
  if (dclid) {
    localStorage.setItem('sjrn_dclid', dclid);
  }
  return localStorage.getItem('sjrn_dclid');
}

function sjrn_wh_token() {
  try {
    wh_token = window.location.href.split(/[?|&]wh_token=/)[1].split('&')[0];
  } catch (e) {
    wh_token = '';
  }
  if (wh_token) {
    localStorage.setItem('sjrn_wh_token', wh_token);
  }
  return localStorage.getItem('sjrn_wh_token');
}

function sjrn_ft() {
  function gf() {
    let values = [];
    try {
      values.push(navigator.connection.effectiveType);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.connection.downlink);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.connection.rtt);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.deviceMemory);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.hardwareConcurrency);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.language);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.languages);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.platform);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.userAgentData.mobile);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(navigator.userAgentData.platform);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.devicePixelRatio);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.pixelDepth);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.colorDepth);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.availWidth);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.screen.availHeight);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(window.performance.memory.jsHeapSizeLimit);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (e) {
      values.push(null);
    }
    try {
      values.push(
        window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    } catch (e) {
      values.push(null);
    }
    return values.join('|');
  }

  function eB(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }

  return eB(gf());
}

function sjrn_clid() {
  try {
    sjrnclid = window.location.href
      .split(/[?|&]sjrnclid=/)[1]
      .split('&')[0]
      .split('#')[0]
      .split('/')[0];
  } catch (e) {
    sjrnclid = '';
  }
  if (sjrnclid) {
    localStorage.setItem('sjrn_clid', sjrnclid);
  }
  return localStorage.getItem('sjrn_clid');
}

function sjrn_click_campaign_id() {
  try {
    sjrn_click_campaign_id = window.location.href
      .split(/[?|&]sjrncid=/)[1]
      .split('&')[0]
      .split('#')[0]
      .split('/')[0];
  } catch (e) {
    sjrn_click_campaign_id = '';
  }
  if (sjrn_click_campaign_id) {
    localStorage.setItem('sjrn_click_campaign_id', sjrn_click_campaign_id);
  }
  return localStorage.getItem('sjrn_click_campaign_id');
}

function sjrn_click_placement_id() {
  try {
    sjrn_click_placement_id = window.location.href
      .split(/[?|&]sjrnaid=/)[1]
      .split('&')[0]
      .split('#')[0]
      .split('/')[0];
  } catch (e) {
    sjrn_click_placement_id = '';
  }
  if (sjrn_click_placement_id) {
    localStorage.setItem('sjrn_click_placement_id', sjrn_click_placement_id);
  }
  return localStorage.getItem('sjrn_click_placement_id');
}

function sjrn_run() {
  try {
    var a = document.createElement('a');
    a.href = document.referrer;
    if (a.host != window.location.host) {
      localStorage.setItem('sjrn_referrer', a.host);
    }
  } catch (e) {}
  try {
    sjrn_e();
  } catch (e) {}
  try {
    sjrn_params = {
      version: '5',
      auto_url: window.location.href,
      auto_ccid: sjrn_ccid(),
      auto_ga: sjrn_ga(),
      e_eml: localStorage.getItem('sjrn_e_eml'),
      ...sjrn_heml(),
      ws: window.innerWidth + 'x' + window.innerHeight,
      tz: sjrn_tz(),
    };
    dclid = sjrn_dclid();
    if (dclid) {
      sjrn_params.dclid = dclid;
    }
    sj_wh_token = sjrn_wh_token();
    if (sj_wh_token) {
      sjrn_params.wh_token = sj_wh_token;
    }
    sjrnclid = sjrn_clid();
    if (sjrnclid) {
      sjrn_params.sjrnclid = sjrnclid;
    }
    sjrn_click_campaign_id = sjrn_click_campaign_id();
    if (sjrn_click_campaign_id) {
      sjrn_params.sjrn_click_campaign_id = sjrn_click_campaign_id;
    }
    sjrn_click_placement_id = sjrn_click_placement_id();
    if (sjrn_click_placement_id) {
      sjrn_params.sjrn_click_placement_id = sjrn_click_placement_id;
    }
  } catch (e) {
    sjrn_params = {};
  }
}
sjrn_run();
try {
  function sjrn_wfa(selector) {
    return new Promise((resolve, reject) => {
      const existingIframes = new Set(
        [...document.querySelectorAll(selector)].map((iframe) => iframe)
      );

      const observer = new MutationObserver((mutations, obs) => {
        const iframes = document.querySelectorAll(selector);
        for (iframe of iframes) {
          if (iframe && !existingIframes.has(iframe)) {
            obs.disconnect();
            resolve(iframe);
          }
        }
      });

      observer.observe(document, {
        childList: true,
        subtree: true,
      });
    });
  }

  async function sjrn_pi() {
    try {
      const iframe = await sjrn_wfa(
        'iframe[src*="https://static.sojern.com/cip"]'
      );
      const url = JSON.parse(JSON.stringify(iframe.src));
      const pixel_details = sjrn_su(url);

      var allow = true;
      for (link of document.getElementsByTagName('link')) {
        if (link.getAttribute('href').includes('.staah.')) {
          allow = false;
        }
      }
      if (window.location.href.includes('zoresairli')) {
        allow = false;
      }
      if (
        pixel_details.type == 'c' &&
        new Set(['138', '49']).has(pixel_details.pixel_id)
      ) {
        allow = false;
      }
      if ((pixel_details.type == 's' || pixel_details.type == 'c') && allow) {
        if (pixel_details.type) {
          firing_url = iframe.src;
          iframe.src = '';
          const all_params = url.split('?')[1].split('&');
          if (checkAndFireUrl(firing_url)) {
            if (pixel_details.type == 'c') {
              sjrn_fc_sdk(pixel_details.pixel_id, all_params);
            } else {
              const params = await sjrn_create_params(all_params);
              sjrn_fs(pixel_details.pixel_id, params);
            }
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  function sjrn_fs(pixel_id, params) {
    var cid = [];
    var paramsArr = [];
    var cidParams = [];
    var pl = document.createElement('script');
    var defaultParams = {};
    for (let key in defaultParams) {
      params[key] = defaultParams[key];
    }
    for (let key in cidParams) {
      cid.push(params[cidParams[key]]);
    }
    params.cid = cid.join('|');
    for (let key in params) {
      paramsArr.push(key + '=' + encodeURIComponent(params[key]));
    }
    pl.type = 'text/javascript';
    pl.async = true;
    pl.src =
      'https://beacon.sojern.com/pixel/p/' +
      pixel_id +
      '?f_v=v6_js&p_v=2&' +
      paramsArr.join('&');

    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(pl);
  }

  function sjrn_fc(pixel_id, params) {
    params.et =
      {
        HOME_PAGE: null,
        SEARCH: 'hs',
        PRODUCT: 'hpr',
        SHOPPING_CART: 'hcart',
        CONVERSION: 'hc',
        TRACKING: null,
      }[params.pt] || '';
    var paramsArr = [];
    for (let key in params) {
      paramsArr.push(key + '=' + encodeURIComponent(params[key]));
    }

    var pl = document.createElement('script');
    pl.type = 'text/javascript';
    pl.async = true;
    pl.src =
      'https://beacon.sojern.com/pixel/cp/' +
      pixel_id +
      '?f_v=cp_v3_js&p_v=4&' +
      paramsArr.join('&');

    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(pl);
  }

  function sjrn_fc_sdk(pixel_id, all_params) {
    var sdk_params = {};
    var drop_set = new Set([
      'f_v',
      'p_v',
      'version',
      'auto_url',
      'auto_ccid',
      'auto_ga',
      'e_eml',
      'auto_eml_count',
      'ws',
      'tz',
      'n',
    ]);
    for (param of all_params) {
      if (param.includes('=')) {
        split_param = param.split('=');
        if (split_param[1] != 'undefined' && split_param[1].length > 0) {
          if (split_param[0] in sjrn_variable_map()) {
            sdk_params[
              sjrn_variable_map()[split_param[0]]
            ] = decodeURIComponent(split_param[1]);
          } else if (!drop_set.has(split_param[0])) {
            sdk_params[split_param[0]] = decodeURIComponent(split_param[1]);
          }
        }
      }
    }

    window.sjn =
      window.sjn ||
      function () {
        (sjn.q = sjn.q || []).push(arguments);
      };

    var script = document.createElement('script');
    script.src = 'https://static.sojern.com/sdk/latest/sojern.min.js';
    script.async = true;
    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(script);

    let eventType = 'tracking';
    if (
      'eventType' in sdk_params &&
      sdk_params.eventType.toLowerCase() in sjrn_event_type_map()
    ) {
      eventType = sjrn_event_type_map()[sdk_params.eventType.toLowerCase()];
    }
    sjn('initAndFire', 'container', pixel_id, eventType, {
      context: {
        vertical: 'hotel',
      },
      params: sdk_params,
    });
  }

  function sjrn_su(url) {
    let pixel_id = '';
    let type = '';
    if (url.includes('static.sojern.com/cip/c/')) {
      pixel_id = url.split('static.sojern.com/cip/c/')[1].split('.')[0];
      type = 'c';
    } else if (url.includes('static.sojern.com/cip/w/s')) {
      pixel_id = (url.match(/[?&]id=([^&]*)/) || [])[1] || '';
      type = 's';
    } else if (url.includes('static.sojern.com/cip/a/49304.html')) {
      pixel_id = url.split('id=')[1].split('&')[0];
      if (
        pixel_id == '207646' &&
        url.split('vp=') &&
        url.split('vp=')[1].split('&')[0] == 'undefined'
      ) {
        pixel_id = '207645';
      }
      type = 's';
    }
    return { type: type, pixel_id: pixel_id };
  }

  function sjrn_lc(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = callback;

    (
      document.getElementsByTagName('head')[0] ||
      document.getElementsByTagName('body')[0]
    ).appendChild(script);
  }

  function sjrn_sue(url) {
    const expiryTime = Date.now() + 30000;
    const urlData = sjrn_gu();
    urlData[url] = expiryTime;
    localStorage.setItem('sjrn_url_data', JSON.stringify(urlData));
  }

  function sjrn_gu() {
    const data = localStorage.getItem('sjrn_url_data');
    return data ? JSON.parse(data) : {};
  }

  function checkAndFireUrl(url) {
    const urlData = sjrn_gu();
    sjrn_ceu();
    if (!urlData[url] || Date.now() > urlData[url]) {
      sjrn_sue(url);
      return true;
    } else {
      return false;
    }
  }

  function sjrn_ceu() {
    const urlData = sjrn_gu();
    const currentTime = Date.now();
    for (const url in urlData) {
      if (urlData[url] < currentTime) {
        delete urlData[url];
      }
    }
    localStorage.setItem('sjrn_url_data', JSON.stringify(urlData));
  }
  function sjrn_variable_map() {
    return {
      be: 'bookingEngineKey',
      pt: 'eventType',
      md5_eml: 'hashedEmailMD5',
      sha1_eml: 'hashedEmailSHA1',
      sha256_eml: 'hashedEmailSHA256',
      ccid: 'clientCookieId',
      ffl: 'loyaltyStatus',
      t: 'numberOfTravelers',
      tad: 'numberOfAdults',
      tch: 'numberOfChildren',
      pgid: 'pageID',
      pname: 'pageName',
      pc: 'pageCategory',
      ppot: 'purposeOfTravel',
      rpnow: 'payNowOrLater',
      pn: 'productName',
      fow: 'oneWay',
      fmc: 'multiCity',
      ptr: 'petsTraveling',
      pixelId: 'pixelID',
      domain: 'domain',
      s: 'techOpsDebug',
      rphn: 'rawPhone',
      md5_phn: 'hashedPhoneMD5',
      sha1_phn: 'hashedPhoneSHA1',
      sha256_phn: 'hashedPhoneSHA256',
      sjrn_click_campaign_id: 'clickCampaignId',
      sjrn_click_creative_id: 'clickCreativeId',
      sjrn_click_id: 'clickId',
      auto_out: 'autoCookielessOptOut',
      hd1: 'checkInDate',
      hd2: 'checkOutDate',
      hd: 'numberOfNights',
      hc1: 'city',
      hs1: 'state',
      hn1: 'country',
      ha1: 'nearestAirport',
      hr: 'numberOfRooms',
      hc: 'roomType',
      hb: 'brand',
      hrp: 'ratePlan',
      hpr: 'property',
      hsr: 'starRating',
      hoh: 'homeHotel',
      fd1: 'departureDate',
      fd2: 'returnDate',
      fd: 'numberOfNights',
      fc: 'serviceClass',
      ffc: 'fareCode',
      fc2: 'originCity',
      fs2: 'originState',
      fn2: 'originCountry',
      fa1: 'originAirport',
      fc1: 'destinationCity',
      fs1: 'destinationState',
      fn1: 'destinationCountry',
      fa2: 'destinationAirport',
      fan: 'flightCompanyName',
      lyvr: 'layoverAirport',
      lyvr2: 'layover2Airport',
      lyvr3: 'layover3Airport',
      cd1: 'departureDate',
      cd2: 'returnDate',
      ca1: 'nearestAirportToPortOfDestination',
      cf2: 'departureCity',
      cs2: 'departureState',
      cn2: 'departureCountry',
      ca2: 'nearestAirportToPortOfArrival',
      cf1: 'arrivalCity',
      cs1: 'arrivalState',
      cn1: 'arrivalCountry',
      cd: 'numberOfNights',
      crl: 'numberOfDays',
      creg: 'region',
      cco: 'cruiseLine',
      csh: 'cruiseShip',
      cm: 'cruiseMonth',
      cc: 'cruiseClass',
      cr: 'numberOfRooms',
      vt: 'attractionType',
      rd1: 'pickUpDate',
      rd2: 'dropOffDate',
      ra1: 'pickUpAirport',
      rc1: 'pickUpCity',
      rs2: 'pickUpState',
      rn1: 'pickUpCountry',
      ra2: 'dropOffAirport',
      rc2: 'dropOffCity',
      rs1: 'dropOffState',
      rn2: 'dropOffCountry',
      tid: 'trackingID',
      rd: 'numberOfNights',
      rb: 'companyName',
      rc: 'vehicleClass',
      tel: 'encryptedLoyaltyNumber',
      ed1: 'startDate',
      ed2: 'endDate',
      ec1: 'city',
      es1: 'state',
      en1: 'country',
      ea1: 'nearestAirport',
      ety: 'type',
      eb: 'name',
      ec: 'category',
      td1: 'departureDate',
      td2: 'returnDate',
      td: 'numberOfNights',
      toc: 'originCity',
      tos: 'originState',
      ton: 'originCountry',
      ta1: 'nearestAirportToOriginStation',
      ta2: 'nearestAirportToDestinationStation',
      tdc: 'discountCode',
      tds: 'destinationState',
      tdn: 'destinationCountry',
      tb: 'companyName',
      tc: 'serviceClass',
      vd1: 'departureDate',
      vd2: 'returnDate',
      vd: 'numberOfNights',
      vf2: 'originCity',
      vs2: 'originState',
      vn2: 'originCountry',
      va1: 'nearestAirportToOriginAttraction',
      va2: 'nearestAirportToDestinationAttraction',
      vf1: 'destinationCity',
      vs1: 'destinationState',
      vn1: 'destinationCountry',
      vb: 'attractionName',
      vc: 'serviceClass',
      hl: 'encryptedLoyaltyNumber',
      fl: 'encryptedLoyaltyNumber',
      rl: 'encryptedLoyaltyNumber',
      vl: 'encryptedLoyaltyNumber',
      tl: 'encryptedLoyaltyNumber',
      cl: 'encryptedLoyaltyNumber',
      el: 'encryptedLoyaltyNumber',
      hconfno: 'confirmationNumber',
      fconfno: 'confirmationNumber',
      rconfno: 'confirmationNumber',
      vconfno: 'confirmationNumber',
      tconfno: 'confirmationNumber',
      cconfno: 'confirmationNumber',
      econfno: 'confirmationNumber',
      hcu: 'currency',
      fcu: 'currency',
      rcu: 'currency',
      vcu: 'currency',
      tcu: 'currency',
      ccu: 'currency',
      ecu: 'currency',
      hp: 'price',
      fp: 'price',
      rp: 'price',
      vp: 'price',
      tp: 'price',
      cp: 'price',
      ep: 'price',
      hcr: 'sojernCredit',
      fcr: 'sojernCredit',
      rcr: 'sojernCredit',
      vcr: 'sojernCredit',
      tcr: 'sojernCredit',
      ccr: 'sojernCredit',
      ecr: 'sojernCredit',
      hdc: 'discountCode',
      fdc: 'discountCode',
      rdc: 'discountCode',
      vdc: 'discountCode',
      cdc: 'discountCode',
      edc: 'discountCode',
      hpid: 'propertyID',
      fpid: 'propertyID',
      rpid: 'propertyID',
      vpid: 'propertyID',
      tpid: 'propertyID',
      cpid: 'propertyID',
      epid: 'propertyID',
      eml: 'email',
    };
  }

  function sjrn_event_type_map() {
    return {
      home_page: 'homePage',
      tracking: 'tracking',
      cancellation: 'cancellation',
      conversion: 'conversion',
      search: 'search',
      product: 'product',
      shopping_cart: 'shoppingCart',
    };
  }
  function sjrn_decipher(str) {
    try {
      return atob(decodeURIComponent(str));
    } catch (e) {
      return '';
    }
  }

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

  async function sjrn_create_params(all_params) {
    var params = {};
    for (param of all_params) {
      if (param.includes('=')) {
        split_param = param.split('=');
        if (split_param[1] != 'undefined') {
          params[split_param[0]] = decodeURIComponent(split_param[1]);
          if (
            split_param[0] != 'eml' &&
            split_param[0] != 'auto_eml_domain' &&
            split_param[0] != 'auto_eml_list' &&
            split_param[0] != 'auto_eml' &&
            split_param[0] != 'e_eml'
          ) {
            if ('cid' in params) {
              params.cid = params.cid + '|' + param;
            } else {
              params.cid = param;
            }
          }
        }
      }
    }
    if (
      params.e_eml > '' &&
      params.e_eml != 'null' &&
      params.e_eml != 'undefined' &&
      params.auto_out != 'all' &&
      params.auto_out != 'email'
    ) {
      var e = sjrn_decipher(params.e_eml).toLowerCase();
      if (e.includes('@')) {
        params.sha256_eml = await sha256(e);
        params.s = 'email_input';
        try {
          params.s += ':' + e.split('@')[1];
        } catch (e) {}
      }
    } else if (
      params.eml > '' &&
      params.eml != 'null' &&
      params.eml != 'undefined' &&
      params.eml.includes('@')
    ) {
      var e = params['eml'].replace(/\s/g, '').toLowerCase();
      params.sha256_eml = await sha256(e);
      params.s = 'email_client';
    } else if (params.sha256_eml) {
      params.s = 'email_prehashed';
    } else if (
      params.auto_eml > '' &&
      (params.hconfno ||
        params.vconfno ||
        params.fconfno ||
        params.tconfno ||
        params.econfno ||
        params.cconfno ||
        params.rconfno) &&
      params.auto_out != 'all' &&
      params.auto_out != 'email'
    ) {
      var e = sjrn_decipher(params.auto_eml).toLowerCase();
      if (e.includes('@')) {
        params.sha256_eml = await sha256(e);
        params.s = 'email_conversion:' + params.auto_eml_count;
        if (params.auto_eml_domain) {
          params.s += ':' + sjrn_decipher(params.auto_eml_domain);
        }
      }
    }
    if (params.auto_url) {
      params.domain = params.auto_url;
    }
    if (params.ccid) {
      if ('s' in params) {
        params.s += '|ccid_client';
      } else {
        params.s = 'ccid_client';
      }
      try {
        referrer = document.referrer.split('://')[1] + ':';
      } catch (e) {
        referrer = '';
      }
      ccid_array = [];
      for (ccid of params.ccid.split('|')) {
        ccid_array.push(referrer + ccid);
      }
      params.ccid = ccid_array.join('|');
    }
    if (
      params.auto_ga &&
      params.auto_out != 'all' &&
      params.auto_out != 'ccid'
    ) {
      if ('s' in params) {
        params.s += '|ccid_ga';
      } else {
        params.s = 'ccid_ga';
      }
      if ('ccid' in params && params.ccid) {
        params.ccid += '|' + params.auto_ga;
      } else {
        params.ccid = params.auto_ga;
      }
    }
    if (
      params.auto_ccid &&
      params.auto_out != 'all' &&
      params.auto_out != 'ccid'
    ) {
      if ('s' in params) {
        params.s += '|ccid_auto';
      } else {
        params.s = 'ccid_auto';
      }
      if ('ccid' in params && params.ccid) {
        params.ccid += '|' + params.auto_ccid;
      } else {
        params.ccid = params.auto_ccid;
      }
    }
    if ('auto_out' in params) {
      if ('s' in params == false) {
        params.s = '';
      }
      if (params.auto_out == 'ccid') {
        params.s += '|auto_out_ccid';
      }
      if (params.auto_out == 'email') {
        params.s += '|auto_out_email';
      }
      if (params.auto_out == 'all') {
        params.s += '|auto_out_all';
      }
    }
    if ('s' in params == false) {
      params.s = 'deiced';
    } else {
      params.s += '|deiced';
    }
    params.cid = 's=' + params.s + '|' + params.cid;
    try {
      delete params.auto_url;
      delete params.auto_ccid;
      delete params.auto_ga;
      delete params.e_eml;
      delete params.auto_eml;
      delete params.auto_eml_count;
      delete params.auto_eml_domain;
      delete params.auto_eml_list;
      delete params.eml;
    } catch (e) {}
    return params;
  }

  sjrn_pi();
} catch (e) {}
