(function() {
	bbox = {
		ini: { 
			incre: 1000
		},
		alert: function(data) {
			var elemDiv = document.createElement('div');
			elemDiv.style.cssText = "position: fixed; bottom: 10px; right: 10px; width: 330px; background-color: #D43F3A; color: #fff; border-radius: 10px; z-index: 2000;";
			elemDiv.className = "bbox";
			var elemDiv2 = document.createElement('div');
			elemDiv2.style.cssText = "font-size: 22px; padding: 15px 20px; border-bottom: solid 1px #EBA5A3";
			elemDiv2.appendChild(this.closeImg());
			elemDiv2.appendChild(this.bell());
			var thistxt = document.createTextNode(' ERROR ');
			elemDiv2.appendChild(thistxt);
			elemDiv.appendChild(elemDiv2);
			var elemDiv3 = document.createElement('div');
			elemDiv3.style.cssText = "font-size: 16px; padding: 10px 20px; height: 95px;";
			elemDiv3.innerHTML = data.replace(/(<([^>]+)>)/ig,"");
			elemDiv.appendChild(elemDiv3);
			document.body.appendChild(elemDiv);
			this.ini.incre++;
		},
		confirm: function(data, callback) {
			var elemDiv = document.createElement('div');
			elemDiv.style.cssText = "position: fixed; bottom: 10px; right: 10px; width: 330px; background-color: #EEA236; color: #fff; border-radius: 10px; z-index: 2000;";
			elemDiv.className = "bbox";
			var elemDiv2 = document.createElement('div');
			elemDiv2.style.cssText = "font-size: 22px; padding: 15px 20px; border-bottom: solid 1px #F6CE97";
			elemDiv2.appendChild(this.closeImg());
			elemDiv2.appendChild(this.bell());
			var thistxt = document.createTextNode(' COMFIRM ');
			elemDiv2.appendChild(thistxt);
			elemDiv.appendChild(elemDiv2);
			var elemDiv3 = document.createElement('div');
			elemDiv3.style.cssText = "font-size: 16px; padding: 10px 20px; height: 95px;";
			elemDiv3.innerHTML = data.replace(/(<([^>]+)>)/ig,"");
			elemDiv.appendChild(elemDiv3);
			
			var elemDiv4 = document.createElement('div');
			elemDiv4.style.cssText = "padding: 10px 20px; border-top: solid 1px #F6CE97; text-align: right;";
				var elemDiv4Span1 = document.createElement('span');
				elemDiv4Span1.style.cssText = "cursor: pointer; font-weight: bolder; padding: 0 10px;";
				elemDiv4Span1.innerHTML = 'YES';
				elemDiv4.appendChild(elemDiv4Span1);
				elemDiv4Span1.addEventListener("click", function() { callback(true); bbox.close(); });
				var elemDiv4Span2 = document.createElement('span');
				elemDiv4Span2.style.cssText = "cursor: pointer; font-weight: bolder; padding: 0 10px;";
				elemDiv4Span2.innerHTML = 'NO';
				elemDiv4Span2.addEventListener("click", function() { callback(false); bbox.close(); });
				elemDiv4.appendChild(elemDiv4Span2);
			elemDiv.appendChild(elemDiv4);
			
			document.body.appendChild(elemDiv);
			this.ini.incre++;
		},
		close: function() {
			var el = document.querySelectorAll('body .bbox'); 
			Array.prototype.map.call(el, function(obj) { document.body.removeChild(obj);  });
		},
		closeImg: function() {
			var elemSpanClose = document.createElement('span');
			elemSpanClose.style.cssText = "cursor:pointer; float: right; display: inline-block;";
			var elemSpanCloseImg = document.createElement('img');
			elemSpanCloseImg.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAASCAYAAACAa1QyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOS8xNC8xNsk/iCAAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAArElEQVQokZ1SURGFMAzrPQWTgIRJQAISJuVJQMKTgAQkTAIScBA+XseVEihH73KwbtnSXAT/KgDkAQr0Z1XkgJDbWQHQ62s1IFU917fGVxvjBWG0++ymwREGr8Rudma+pL1keh0j2VtnXc/MXab/Z+RA1xKRkiFUI3XHR3gl9z3Wjbw2zxTJK86IKTIisjwz0h4T9/opZjQmBKcYvQrsAheTC7SZF2Hu3KAAwAaza9axPblAWQAAAABJRU5ErkJggg==");
			elemSpanCloseImg.setAttribute("alt", "Embedded Image");
			elemSpanClose.appendChild(elemSpanCloseImg);
			elemSpanClose.addEventListener("click", function() { bbox.close(); });
			return elemSpanClose;
		},
		bell: function() {
			if (this.ini.incre == 1000) { this.shakeBell(); }
			var elemSpanBellImg = document.createElement('img');
			elemSpanBellImg.style.cssText = "width: 21px; margin-bottom: -4px; margin-right: 5px;transform-origin: 0 0; animation: vibrate 0.2s linear 0s 5 both;";
			elemSpanBellImg.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOS8xNC8xNsk/iCAAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAABz0lEQVRIibWX4XGjQAyFP5j8Dx0cqSB0cO4gdBBfBecSXIJLoAQ6OLuC4yo40oFTwcuP1WbwBmFwzJvRMLC7etKupBVIYkSOCugklc6cmySTRIIS+J9+NLwBPdCa9M48HyNW7DUf+6Uefocs4iipuIWwuYEsollKuPsGWcRuDmEmqQQ64HFxAFzinRBw56lJObC7Axmm43BtUiapB37cgTDiiYl0ye9MBle8zKSvmX8HuF7mK5AB7L2BtTwEx8u1PATnLHPgtBLhC9AARUrYr0QI8Gr6D5E4J1SZNfEI/DbiKpNUAX9XJo04xQv4zG3l7R04mnT2HKIEakKaBP26bCnm4KxwHdVzbodUf0yL1LIx/AN+mdWNWT4HNfDzU4dZsJnwqDdvCklbe4+45lllOxJRx4Ha2bqdEe2ThdGQJWSNBjd+2l50tmCTeDTE1BluE7LODAeFvjMlKyQdHCKZwjGiQlLr6PvsaYaKexssbWFq5UF+Yzy27a2Sji5NCc9yT7zzjef/Zc1DEsL9jDAvgY2F+8vI+AnYeroeCBUi5skfQr71XNbYAqhMvIp0IhTpdtJc25YllSZFqxDNs45h+DNTm1TAs2Nf/Jk5DmQRPgBG2jgWc/X6MwAAAABJRU5ErkJggg==");
			elemSpanBellImg.setAttribute("alt", "Embedded Image");
			return elemSpanBellImg;
		},
		shakeBell: function() {
			var createdStyleTag = document.createElement("style");
			createdStyleTag.textContent = "@keyframes vibrate{ 0% {transform: rotate(10deg)} 25% {transform: rotate(-10deg)} 50% {transform: rotate(0)} 75% {transform: rotate(10deg)} 100% {transform: rotate(0)}}";
			document.head.appendChild(createdStyleTag);
		}
	}
})();
