<html>
	<head>
		<title></title>
		<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
		<script src="jQuery.text2Links.js"></script>
		<script>
		$(function() {
			$('#jsTest').text2Links();
		});
		</script>
	</head>
	<body>
		<div id="jsTest">
			jQuery.text2Links.js makes all link like:
			<ul>
				<li>http://www.google.co.in
				<li>https://www.google.co.in
				<li>ftp://www.google.co.in
				<li>www.google.co.in
				<li>google.co.in
				<li>eric@sapnagroup.com
				<li>http://crocodile/~eric/index.php
				<li>http://192.168.0.111/~eric/index.php
			</ul>
		</div>
		<hr />
<?php

$string = '<div id="phpTest">'."\n";
	$string .= 'PHP text2Links makes all link like:'."\n";
	$string .= '<ul>'."\n";
		$string .= '<li>http://www.google.co.in'."\n";
		$string .= '<li>https://www.google.co.in'."\n";
		$string .= '<li>ftp://www.google.co.in'."\n";
		$string .= '<li>www.google.co.in'."\n";
		$string .= '<li>google.co.in'."\n";
		$string .= '<li>eric@sapnagroup.com'."\n";
		$string .= '<li>http://crocodile/~eric/index.php'."\n";
		$string .= '<li>http://192.168.0.111/~eric/index.php'."\n";
	$string .= '</ul>'."\n";
$string .= '</div>'."\n";

echo text2Links($string);
	
function text2Links($string){
	$string = preg_replace('/(((f|ht){1}tps?:\/\/)[-a-zA-Z0-9@:;%_\+.~#?&\/\/=]+)/', '<a href="\\1" target="_blank">\\1</a>', $string);
	$string = preg_replace('/([[:space:]()[{}])(www.[-a-zA-Z0-9@:;%_\+.~#?&\/\/=]+)/', '\\1<a href="http://\\2" target="_blank">\\2</a>', $string);
	$string = preg_replace('/(([0-9a-zA-Z\.\-\_]+)@([0-9a-zA-Z\.\-\_]+)\.([0-9a-zA-Z\.\-\_]+))/', '<a href="mailto:$1">$1</a>', $string);
	
	return $string;
}
	
?>
	</body>
</html>