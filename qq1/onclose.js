﻿function kf_setCookie(name, value, exp, path, domain){	var nv = name + "=" + escape(value) + ";";	var d = null;	if(typeof(exp) == "object")	{		d = exp;	}	else if(typeof(exp) == "number")	{		d = new Date();		d = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + exp, d.getSeconds(), d.getMilliseconds());	}		if(d)	{		nv += "expires=" + d.toGMTString() + ";";	}		if(!path)	{		nv += "path=/;";	}	else if(typeof(path) == "string" && path != "")	{		nv += "path=" + path + ";";	}	if(!domain && typeof(VS_COOKIEDM) != "undefined")	{		domain = VS_COOKIEDM;	}		if(typeof(domain) == "string" && domain != "")	{		nv += "domain=" + domain + ";";	}	document.cookie = nv;}