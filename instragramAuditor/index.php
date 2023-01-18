
                <?php
                require_once('instagram_basic_display_api.php');

                $accessToken = 'IGQVJYLVgtRWlYdlRwNkYxNTgxMTduc1I3UnQ2OEpXUXk3aGxMUjlsaXMyaFEwS0F6eGVfdGIxOHRIdVdEcktyVFJOTXA3R0g5eUQwblA5VFdMRzZAydGJ0Q0Frc2g0bzBFR0pMMFdUVEU4QjM4a0tXcgZDZD';
                

                $params = array(
                        'get_code' => isset( $_GET['code']) ? $_GET['code'] : '',
                        'access_token' => $accessToken,
                        'user_id' => '5796408563812524',
                    );

                        $ig = new instagram_basic_display_api( $params );
                ?>
                <h1>Instragram Basic Display API</h1>
                    <hr />
                <?php if ($ig->hasUserAccessToken) : ?>
                    <h4>IG Info</h4>
                    <?php $user = $ig->getUser(); ?>
                    <pre>
                        <php ?print_r($user); ?>
                    </pre>
                        <h1>Username: <?php echo $user['username']; ?></h1>
                        <h1>IG ID: <?php echo $user['id']; ?></h1>
                        <h1>Media Count: <?php echo $user['media_count']; ?></h1>
                        <h1>Account Type: <?php echo $user['account_type']; ?></h1>
                        
                        <?php $usersMedia = $ig->getUsersMedia(); ?>
                        <h3>Users Media Page 1 (<?php echo count($usersMedia['data']); ?>)</h3>
                        <h4>Raw Data:</h4>
                        <textarea style="width:100%;height:400px;"><?php print_r($usersMedia['data']); ?></textarea>
                 <hr />

                        <h4>Posts</h4>
                            <ul style="list-style: none;margin:0px;padding:0px;">
                                <?php foreach ( $usersMedia['data'] as $post ) : ?>
                                    <li style="margin-bottom:20px;border:3px solid #333">
                                        <div>
                                            <?php if ('IMAGE' == $post['media_type'] || 'CAROUSEL_ALBUM' == $post['media_type']) :?>
                                                <img style="height:320px" src="<?php echo $post['media_url']; ?>" />
                                            <?php else :?>
                                                <video height="240" width="320" controls>
                                                    <source src="<?php echo $post['media_url']; ?>">
                                                </video>
                                            <?php endif; ?>
                                        </div>
                                        <div>
                                            <b>Caption: <?php echo $post['caption']; ?></b>
                                        </div>
                                        <div>
                                            Media URL: <?php echo $post['media_url']; ?>
                                        </div>
                                        <div>
                                            Timestamp: <?php echo $post['timestamp']; ?>
                                        </div>
                                    </li>
                                <?php endforeach; ?>
                            </ul>

                            <ul style="list-style: none;margin:0px;padding:0px;">

                    <h6>Access Token</h6>
                    <?php echo $ig->getUserAccessToken(); ?>
                    <h6>Expires in</h6>
                    <?php echo ceil($ig->getUserAccessTokenExpires() / 86400); ?> days
                    <?php else :?>
	                <a href="<?php echo $ig->authorizationUrl; ?>">
		            Authorize w/Instagram
	                </a>  
                <?php endif; ?> 
