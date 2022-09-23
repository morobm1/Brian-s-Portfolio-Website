<?php
    require_once('fileA.php');

    Class instagram_basic_display_api {
        private $_appId = INSTAGRAM_APP_ID;
        private $_appSecret = INSTAGRAM_APP_SECRET;
        private $_redirectUrl = INSTRAGRAM_APP_REDIRECT_URI;
    
        function __contruction( $params) {

            //save instram code
            $this->getCode = $param['get_code'];

            //get access token

            //get auth. url

            $this->_setAuthorizationUrl(); 
        }
        
        private function _setAuthorizationUrl() {
            $getVars = array(
                'app_id' => $this->_appId,
                'redirect_uri' => $this->_redirectUrl,
                'scope' => 'user_profile,user_media',
                'respon_type' => 'code'
            );
            
            //create URL
            $this->_setAuthorizationUrl = $this->_apiBaseUrl . oauth/authorize? . http_build_query($getVars);
      
        }

    
    }