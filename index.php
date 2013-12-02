<?php require('header.php') ?>
<div class="HomeTitle">
	<div class="row">
		<div class="large-7 columns">
			<h1>Get paid for your<br> devices</h1>
			<h2>Simple. Fast. Green.</h2>
			<a class="button-pink" href="#">Sell Iphone</a>
			<a class="button-green" href="#">Sell Any Phone</a>
		</div>
		<div class="large-5 columns res-hide">
			<img src="img/iphone.png">
		</div>
	</div>
</div>

<div class="HomeColumns">
	<div class="row">
		<div class="large-4 columns">
			<h3>Fast Shipment</h3>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
			doloremque.quasi architecto beatae</p>
		</div>
		<div class="large-4 columns">
			<h3>Fusce aliquet odio</h3>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
			doloremque.quasi architecto beatae</p>
		</div>
		<div class="large-4 columns">
			<h3>Posuere nunc </h3>
			<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
			doloremque.quasi architecto beatae</p>
		</div>				
	</div>
</div>

<div class="PhoneSubmit" ng-controller="SubmitDevices">
	<h2>Submit your phone</h2>
	<p>d ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
		doloremque laudantium, totam rem aperiam.</p>
		<div id="device">
		test: {{selection}}
		</div>
		<form>
			<select ng-model="selection">
				<option ng-repeat="make in makes" value="{{make}}">{{make}}</option>
			</select>
			<div class="animate-switch-container" ng-switch on="selection">

			    <div ng-switch-when="Apple">
			    	<select ng-model="appledeviceoption">
			    		<option ng-repeat="device in appledevices" value="{{device}}">{{device}}</option>
			    	</select>
			    	<select>
			    		<option ng-repeat="size in appledevicessize" value="{{size}}">{{size}}</option>
			    	</select>
			    </div>


			    <div ng-switch-when="Samsung">
			      	<select>
			    		<option ng-repeat="device in samsungdevices" value="{{device}}">{{device}}</option>
			    	</select>
			    </div>

			    <div ng-switch-when="Nokia">
			      	<select>
			    		<option ng-repeat="device in nokiadevices" value="{{device}}">{{device}}</option>
			    	</select>
			    </div>

			    <div ng-switch-when="Blackberry">
			      	<select>
			    		<option ng-repeat="device in blackberrydevices" value="{{device}}">{{device}}</option>
			    	</select>
			    </div>			    

			    <div ng-switch-default>default</div>
			</div>


     		<label><input type="checkbox" class="checkbox"><span class="title">Not turning on?  <span><small>Totam rem aperiam, eaque ipsa quae</small></span></label>
     		<label><input type="checkbox" class="checkbox"><span class="title">Broken Screen?<span><small>Totam rem aperiam, eaque ipsa quae</small></span></label>
     		<label><input type="checkbox" class="checkbox"><span class="title">Home button broken? <span><small>Totam rem aperiam, eaque ipsa quae</small></span></label>
     		<label><input type="checkbox" class="checkbox"><span class="title">Ratione voluptatem?  <span><small>Totam rem aperiam, eaque ipsa quae</small></span></label>
     		<input type="submit" value="Submit" class="submit">
		</form>
</div>
<?php require('footer.php') ?>
