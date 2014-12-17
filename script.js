chrome.extension.onRequest.addListener(toggleSidebar);

var sidebarOpen = false;

function toggleSidebar() {

	if(sidebarOpen) {
		var el = document.getElementById('wndx-sidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}

	else {
		var sidebar = document.createElement('div');
		sidebar.id = "wndx-sidebar";
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '//wndx-test.herokuapp.com/', true);

		xhr.send();

		xhr.onreadystatechange = function() {
		    if (this.readyState !== 4) return;
		    if (this.status !== 200) return;
		    var wndxInfo = document.getElementById('wndx-sidebar');
		    wndxInfo.innerHTML = this.responseText.replace(/<head>/, '<head><base target="_blank" href="//wndx-test.herokuapp.com/"/>');
			// var head = document.getElementsByTagName('head').item(0);
		 //    var script = document.createElement('script');
		 //    script.setAttribute('type', 'text/javascript');
		 //    script.setAttribute('src', '//wndx-test.herokuapp.com/wndx.js');
		 //    head.appendChild(script);

			// var link = document.createElement('link');
			// link.rel = 'stylesheet';
		 //    link.href = '//fonts.googleapis.com/css?family=Open+Sans';
		 //    link.type = 'text/css';
		 //    head.appendChild(link);
			};
		

		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			right:0px;\
			width:30%;\
			height:110%;\
			background:white;\
			box-shadow:inset 0 0 1em black;\
			z-index:999999;\
			overflow:auto;\
		";

		document.body.appendChild(sidebar);
		$('#wndx-sidebar').hover(function(){
			$('#wndx-sidebar a').each(function () {
   			 	var $this = $(this),
        		href = $this.attr('href');
    			$this.click(function (e, href) {
            		e.preventDefault();
        			var xhr = new XMLHttpRequest();
        			xhr.open('GET', $this.attr('href'), true);

        			xhr.send();
        		xhr.onreadystatechange = function () {
            		if (this.readyState !== 4) return;
            		if (this.status !== 200) return;
    			var wndxInfo = document.getElementById('wndx-sidebar');
				wndxInfo.innerHTML = this.responseText.replace(/<head>/, '<head><base target="_blank" href="//wndx-test.herokuapp.com/"/>');
			    	   


			    	    };
			    	});
				}); 
		});

		
		
		sidebarOpen = true;
	}
	
}