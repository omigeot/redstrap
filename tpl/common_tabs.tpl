{{*
 *	AUTOMATICALLY GENERATED TEMPLATE
 *	DO NOT EDIT THIS FILE, CHANGES WILL BE OVERWRITTEN
 *
 *}}
<ul class="nav nav-tabs">
        {{foreach $tabs as $tab}}
		<li><a href="{{$tab.url}}" data-toggle="tab">{{$tab.label}}</a></li>
        {{/foreach}}
</ul>

<div class="tabs-end"></div>
