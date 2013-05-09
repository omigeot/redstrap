<?php

function redstrap_init(&$a) {
	if($a->config['system']['theme_engine'])
		$a->set_template_engine($a->config['system']['theme_engine']);
	else
		$a->set_template_engine('smarty3');
        head_add_js('jquery.min.js');
	head_add_js('jquery-migrate-1.1.1.js');

//	head_add_js('jquery.ba-postmessage.min.js');
        head_add_js('bootstrap.js');
        head_add_js('bootstrap-datetimepicker.min.js');
        head_add_js('bootstrapSwitch.js');
	head_add_js('redstrap.js');
	head_add_js('bootstrap-markdown.js');
        head_add_css('bootstrap.css');
        head_add_css('bootstrap-responsive.css');
	head_add_css('font-awesome.min.css');
	head_add_css('font-awesome-ie7.min.css');
        head_add_css('bootstrapSwitch.css');
        head_add_css('bootstrap-datetimepicker.min.css');
}
