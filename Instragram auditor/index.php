<?php
    require_once('audit.php');

    $params = array(
        'get_code' => isset( $_GET['code']) ? $_GET['code'] : '');

        $ig = new instagram_basic_display_api( $params);
?>
<h1>Instragram Basic Display API</h1>
<a href="<?php $ig->authorizationUrl; ?>">
        Authoriz w/ Instragram
</a>    
