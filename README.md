

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/039-1024x576.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3344"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>In our earliest work, we published an article on the topic&nbsp;<a href="https://cryptodeeptech.ru/lattice-attack" target="_blank" rel="noreferrer noopener"><strong>“LATTICE ATTACK”</strong></a>&nbsp;as a complete solution&nbsp;<strong><a href="https://cryptodeep.ru//doc/Hidden-Number-Problems.pdf" target="_blank" rel="noreferrer noopener">to the HNP [Hidden Number Problem]</a></strong>&nbsp;, but with the recent emergence of a new attack&nbsp;<a href="https://cryptodeeptech.ru/polynonce-attack" target="_blank" rel="noreferrer noopener"><strong>“POLYNONCE ATTACK”</strong></a>&nbsp;, we decided to supplement the article using&nbsp;<code>79 signatures ECDSA</code>.</p>



<p>Based on the previous article, where we took the polynomial&nbsp;<code>128 bits</code>and with the actual increase in the number of signatures, we will bring the value of the polynomial to&nbsp;<code>249 bits</code>.</p>



<blockquote class="wp-block-quote">
<p>All we need is to solve the problem of hidden numbers.</p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-285.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3357" style="width:839px;height:878px" width="839" height="878"></figure></div>


<blockquote class="wp-block-quote">
<hr class="wp-block-separator has-alpha-channel-opacity">



<p>In this article, we will analyze five independent examples of cryptanalysis of the Bitcoin blockchain.&nbsp;All examples will be uploaded to the&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/21LatticeAttack" target="_blank" rel="noreferrer noopener">GitHub</a></strong>&nbsp;repository .</p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">For a theoretical basis, we will take materials:</h2>



<h2 class="wp-block-heading has-text-align-center"><a href="https://attacksafe.ru/lattice-attack-on-bitcoin/" target="_blank" rel="noreferrer noopener">“Lattice Attack on Bitcoin”</a></h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-284.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3352" style="width:841px;height:1016px" width="841" height="1016"><figcaption class="wp-element-caption"><code><a href="https://attacksafe.ru/lattice-attack-on-bitcoin" target="_blank" rel="noreferrer noopener">https://attacksafe.ru/lattice-attack-on-bitcoin</a></code></figcaption></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider an example with a Bitcoin Address:</p>
</blockquote>



<p><a href="https://btc1.trezor.io/address/19mJofzRwwwx4VmXuAXgX6pgM3qzJqi25z" target="_blank" rel="noreferrer noopener"><strong>19mJofzRwwwx4VmXuAXgX6pgM3qzJqi25z</strong></a></p>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-160.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3074"></figure>



<p><a href="https://btc1.trezor.io/tx/6a941396b28a72ac834d922165995e6685a760f884dbb9e8b6dea95b01f0aae8" target="_blank" rel="noreferrer noopener"><strong>6a941396b28a72ac834d922165995e6685a760f884dbb9e8b6dea95b01f0aae8</strong></a></p>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-165-1024x638.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3079"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-166-1024x371.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3080"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>"hex": 010000000afa0765dc83c2e04b53a03ad9f5e7603f974c5a70e7a486bc957e72809facab7b2d0000006a4730440220746bd0443317a77c069bddae306dc658ec740bb1a6312bdcb4ce666bae42e988022066c34dd48f0e34ae4aefd28564f46fb7473d0b49d55adb716b9f04e663d0a9890121033ee89b98b1d6e71285314e1d1c753003a7a80c17f46146a91077006c76e25e7affffffff................................</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s go to the official website:&nbsp;&nbsp;<strong><a href="https://colab.research.google.com/" target="_blank" rel="noreferrer noopener">https://colab.research.google.com</a></strong></p>



<blockquote class="wp-block-quote">
<blockquote class="wp-block-quote">
<p><em>Select the option&nbsp;&nbsp;</em><strong>“Upload notebook”</strong></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-50.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2709" style="width:832px;height:1428px" width="832" height="1428"></figure></div></blockquote>



<blockquote class="wp-block-quote">
<blockquote class="wp-block-quote">
<p></p>
</blockquote>



<p class="has-text-align-center">Download the file:&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/LATTICE_ATTACK_249bits.ipynb" target="_blank" rel="noreferrer noopener"><strong>LATTICE_ATTACK_249bits.ipynb</strong></a></p>
</blockquote>



<blockquote class="wp-block-quote">
<hr class="wp-block-separator has-alpha-channel-opacity">
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-52.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2711"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Download&nbsp;<code>HEX</code>the data through the utility&nbsp;<code>wget</code>&nbsp;and save it to a file:&nbsp;<strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/21LatticeAttack/example1/HEX.txt</code></pre>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-167-1024x279.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3081"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s run the code and get the bits we need<code><strong>RawTX</strong></code></p>
</blockquote>



<pre class="wp-block-code"><code>with open("HEX.txt") as myfile:

    listfile="\n".join(f'{line.rstrip()[:+298]}' for line in myfile)


f = open("RawTX.txt", 'w')
f.write("" + listfile + "" + "\n")
f.close()</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-169-1024x346.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3083"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center"><strong>To implement the attack, we will use the software</strong></p>



<p class="has-text-align-center">&nbsp;<strong><a href="https://attacksafe.ru/software/" target="_blank" rel="noreferrer noopener">“ATTACKSAFE SOFTWARE”</a></strong></p>


<div class="wp-block-image">
<figure class="aligncenter"><a href="https://attacksafe.ru/software/" target="_blank" rel="noreferrer noopener"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-14.png" alt="Implement Frey-Rück Attack to get the secret key &quot;K&quot; (NONCE)" class="wp-image-705"></a><figcaption class="wp-element-caption"><strong><code>www.attacksafe.ru/software</code></strong></figcaption></figure></div>


<h2 class="wp-block-heading">Access rights:</h2>



<pre class="wp-block-code"><code>!chmod +x attacksafe</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>ls</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-172.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3089"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Application:</h2>



<pre class="wp-block-code"><code>!./attacksafe -help</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-173.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3091"></figure></div>


<pre class="wp-block-code"><code>  -version:  software version 
  -list:     list of bitcoin attacks
  -tool:     indicate the attack
  -gpu:      enable gpu
  -time:     work timeout
  -server:   server mode
  -port:     server port
  -open:     open file
  -save:     save file
  -search:   vulnerability search
  -stop:     stop at mode
  -max:      maximum quantity in mode
  -min:      minimum quantity per mode
  -speed:    boost speed for mode
  -range:    specific range
  -crack:    crack mode
  -field:    starting field
  -point:    starting point
  -inject:   injection regimen
  -decode:   decoding mode</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -version</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-174.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3093"></figure></div>


<pre class="wp-block-code"><code>Version 5.3.4. [ATTACKSAFE SOFTWARE, © 2023]</code></pre>



<blockquote class="wp-block-quote">
<p><code>"ATTACKSAFE SOFTWARE"</code>&nbsp;includes all popular attacks on Bitcoin.</p>
</blockquote>



<h2 class="wp-block-heading">Let’s run a list of all attacks:</h2>



<pre class="wp-block-code"><code>!./attacksafe -list</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-175.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3097"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s choose<code>&nbsp;-tool: lattice_attack</code></p>



<blockquote class="wp-block-quote">
<p>To get a specific&nbsp;<code>HEX</code>value&nbsp;<code>R,S,Z</code>for the signature&nbsp;<code>ECDSA</code>, we previously added data&nbsp;&nbsp;<code>RawTX</code>&nbsp;through the utility&nbsp;<code>echo</code>to a text document and saved it as a file&nbsp;<code>RawTX.txt</code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-176-1024x140.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3101"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Launch&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool lattice_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-179-1024x462.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3104"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-181-1024x445.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3108"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>In order to calculate the private key to a Bitcoin Wallet from a file,&nbsp;&nbsp;<code>SignatureRSZ.csv</code>we will install&nbsp;<strong><a href="https://cryptodeeptech.ru/install-sagemath-in-google-colab/" target="_blank" rel="noreferrer noopener">SageMath</a></strong></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-27.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2188" style="width:835px;height:237px" width="835" height="237"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-28-1024x445.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2189"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Earlier we published&nbsp;<a href="https://cryptodeeptech.ru/install-sagemath-in-google-colab/" target="_blank" rel="noreferrer noopener">an article</a>&nbsp;, download&nbsp;&nbsp;<code>tar-file</code>:&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/sage-9.3-Ubuntu_20.04-x86_64.tar.bz2" target="_blank" rel="noreferrer noopener"><strong>sage-9.3-Ubuntu_20.04-x86_64.tar.bz2</strong></a></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!wget https://cryptodeeptech.ru/sage-9.3-Ubuntu_20.04-x86_64.tar.bz2
!tar -xf sage-9.3-Ubuntu_20.04-x86_64.tar.bz2</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-184-1024x330.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3114"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s go through the directory:</em></p>
</blockquote>



<pre class="wp-block-code"><code>cd SageMath/</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>ls</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-186-1024x594.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3118"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Run&nbsp;&nbsp;</em><strong>relocate-once.py&nbsp;</strong><em>&nbsp;with the command:</em><code>Python-script:</code><em>&nbsp;</em><strong></strong><em></em></p>
</blockquote>



<pre class="wp-block-code"><code>!python3 relocate-once.py</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-187-1024x461.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3119"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Move&nbsp;<code>"AttackSafe"</code>to&nbsp;<code>"SignatureRSZ.csv"</code>folder<code>"SageMath"</code></p>
</blockquote>



<pre class="wp-block-code"><code>!mv '/content/attacksafe' '/content/SageMath/attacksafe'
!mv '/content/SignatureRSZ.csv' '/content/SageMath/SignatureRSZ.csv'</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-190-1024x717.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3124"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>ls</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-191-1024x386.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3125"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Download the script&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;from Dario Clavijo through the utility&nbsp;<code>wget</code></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-193-1024x359.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3130"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Now let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-194-1024x389.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3132"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;specifying the parameters<strong><code>249 bits 79 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 249 79 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-195-1024x532.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3136"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;<code>HEX</code>the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-197.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3139" style="width:843px;height:934px" width="843" height="934"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0x9a52a4dbcc148f1480a6fb5311252524fc498eb508c7cb8f63bbee4b9af37941</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example1/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><strong>GITHUB</strong></a></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-200.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3142" style="width:838px;height:1148px" width="838" height="1148"><figcaption class="wp-element-caption"><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example1/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><code>https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example1/POLYNONCE.py</code></a></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-201.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3143" style="width:834px;height:1041px" width="834" height="1041"></figure></div>


<blockquote class="wp-block-quote">
<p>We got 79 identical original bits from<code>249</code></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney,&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed the same initial bits to us.&nbsp;The value&nbsp;<code>POLYNONCE</code>in the format&nbsp;<code>HEX</code>allows us to fully solve the problem of hidden numbers, get a private key and restore a Bitcoin Wallet.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p>Install the module<code>bitcoin</code></p>
</blockquote>



<pre class="wp-block-code"><code>!pip3 install bitcoin</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-86-1024x219.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2799"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-87.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2800"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:<code>PrivateKeyAddr.txt</code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-202-1024x651.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3144"><figcaption class="wp-element-caption"><code>9a52a4dbcc148f1480a6fb5311252524fc498eb508c7cb8f63bbee4b9af37941:19mJofzRwwwx4VmXuAXgX6pgM3qzJqi25z</code></figcaption></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 19mJofzRwwwx4VmXuAXgX6pgM3qzJqi25z
WIF:  L2PhDrYZw6fWqeLZMnMeAXvxZ47MEnepaQVLL2EazbRhqesytoQB
HEX:  9a52a4dbcc148f1480a6fb5311252524fc498eb508c7cb8f63bbee4b9af37941</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-bitaddress-4.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3147"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/19mJofzRwwwx4VmXuAXgX6pgM3qzJqi25z">https://www.blockchain.com/en/explorer/addresses/btc/19mJofzRwwwx4VmXuAXgX6pgM3qzJqi25z</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-205.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3153" style="width:830px;height:237px" width="830" height="237"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-206.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3154"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-207-1024x136.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3155"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 1015.58</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s look at other examples:</h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><code>№<strong>2</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider example #2 with a Bitcoin Address:</p>
</blockquote>



<p><strong><a href="https://btc1.trezor.io/address/1GPZVDUyPM6qxCsJQrpJeo14WDRVLvTZ2Z" target="_blank" rel="noreferrer noopener">1GPZVDUyPM6qxCsJQrpJeo14WDRVLvTZ2Z</a></strong></p>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-82.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2788"></figure>



<p><a href="https://btc1.trezor.io/tx/9130c5b8e92f37d3a58dcae16daa27625cc52b698a83af7c8b891f01bfa0b2af" target="_blank" rel="noreferrer noopener"><strong>9130c5b8e92f37d3a58dcae16daa27625cc52b698a83af7c8b891f01bfa0b2af</strong></a></p>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-208.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3159"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-209-1024x379.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3160"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>"hex": 0100000041e981df9d37a7af6f5ee77abade3ec58acbf864f942bdecb63ea2efa593e2c3391f0000006b4830450221009d8ceef05e2fa0a623811df57265a3678f902e81dc82c3862d12bbb07b90de18022036bbed961b4f8665eb3fb3047a1398a1aeae519a8e2a1a97de57863fc0cc4a380121029755a17bf76237cde9e05fc333a255b926d526a7763abe725a4f6253ebdae109ffffffff..............................
 </code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s remove the files from the first example:</p>
</blockquote>



<pre class="wp-block-code"><code>!rm HEX.txt
!rm RawTX.txt
!rm NoncesHEX.txt
!rm PrivateKey.txt
!rm SignatureRSZ.csv
!rm PrivateKeyAddr.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-210.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3162"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Download&nbsp;&nbsp;</em><code>HEX</code><em>the data through the utility&nbsp;&nbsp;</em><code>wget</code><em>&nbsp;and save it to a file:&nbsp;&nbsp;</em><strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/21LatticeAttack/example2/HEX.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-211.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3167"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run the code and get the bits we need&nbsp;</em><code><strong>RawTX</strong></code></p>
</blockquote>



<pre class="wp-block-code"><code>with open("HEX.txt") as myfile:

    listfile="\n".join(f'{line.rstrip()[:+298]}' for line in myfile)


f = open("RawTX.txt", 'w')
f.write("" + listfile + "" + "\n")
f.close()</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-212-1024x376.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3175"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center">Launch&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool lattice_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-213-1024x458.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3178"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-214.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3180"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-215.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3182"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;&nbsp;specifying the parameters&nbsp;<strong><code>249 bits 79 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 249 79 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-216-1024x509.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3185"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;&nbsp;<code>HEX</code>&nbsp;the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-222.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3196" style="width:838px;height:853px" width="838" height="853"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0x00db251a1ab7cfa7679dfe61271d0af4bb9c68595178cf4c9237478eab2dba1d</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example2/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><strong>GITHUB</strong></a></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-218.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3190" style="width:842px;height:1155px" width="842" height="1155"><figcaption class="wp-element-caption"><code><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example2/POLYNONCE.py" target="_blank" rel="noreferrer noopener">https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example2/POLYNONCE.py</a></code></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-219.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3192" style="width:844px;height:1245px" width="844" height="1245"></figure></div>


<blockquote class="wp-block-quote">
<p><em>We got 79 identical original bits from</em><code>249</code></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney,&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed the same initial bits to us.&nbsp;The value&nbsp;<code>POLYNONCE</code>in the format&nbsp;<code>HEX</code>allows us to fully solve the problem of hidden numbers, get a private key and restore a Bitcoin Wallet.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-220-1024x533.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3193"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKeyAddr.txt</code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-221-1024x657.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3194"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 1GPZVDUyPM6qxCsJQrpJeo14WDRVLvTZ2Z
WIF:  KwFNhRPDpgD5X77T8x5oL628aHh9UtscwwrLjGBKE8NeLshYvAqC
HEX:  00db251a1ab7cfa7679dfe61271d0af4bb9c68595178cf4c9237478eab2dba1d</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-bitaddress-6.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3202"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/1GPZVDUyPM6qxCsJQrpJeo14WDRVLvTZ2Z">https://www.blockchain.com/en/explorer/addresses/btc/1GPZVDUyPM6qxCsJQrpJeo14WDRVLvTZ2Z</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-224.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3204" style="width:842px;height:271px" width="842" height="271"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-225.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3205"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-226-1024x149.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3206"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 999.10</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s look at other examples:</h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><code>№<strong>3</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider example #3 with a Bitcoin Address:</p>
</blockquote>



<p><strong><a href="https://btc1.trezor.io/address/18Y9nUpdtxAKTh6yaN299jfUxcpJ2ApHz" target="_blank" rel="noreferrer noopener">18Y9nUpdtxAKTh6yaN299jfUxcpJ2ApHz</a></strong></p>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-227.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3209"></figure>



<p><a href="https://btc1.trezor.io/tx/0b21368bb6e6658adf4079b5ca6e7286c6e13471acef879168e7c17809476c76" target="_blank" rel="noreferrer noopener"><strong>0b21368bb6e6658adf4079b5ca6e7286c6e13471acef879168e7c17809476c76</strong></a></p>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-228.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3210"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-229-1024x378.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3211"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>"hex": 0100000041c7a8d97168ee154550f5e43b9074e5f357a4dc6b2350c96f75e377df0a39b9fa210000006b48304502210097d6b896929d77634b8d9430bc2842209cad42bb236c408e18470b9fd86b3d6a0220684ac14228c4adaa9df819e7fc8e82cf3c4242b74e27f5dd190d63231e8a058a012102990a280aef14e545b9b076b6548a4e886476d967e447bb69efcf0b725efda04effffffff..............................</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s remove the files from the second example:</p>
</blockquote>



<pre class="wp-block-code"><code>!rm HEX.txt
!rm RawTX.txt
!rm NoncesHEX.txt
!rm PrivateKey.txt
!rm SignatureRSZ.csv
!rm PrivateKeyAddr.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-231.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3219"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Download&nbsp;&nbsp;</em><code>HEX</code><em> the data through the utility&nbsp;&nbsp;</em><code>wget</code><em>&nbsp;and save it to a file:&nbsp;&nbsp;</em><strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/21LatticeAttack/example3/HEX.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-232-1024x418.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3221"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run the code and get the bits we need&nbsp;</em><code><strong>RawTX</strong></code></p>
</blockquote>



<pre class="wp-block-code"><code>with open("HEX.txt") as myfile:

    listfile="\n".join(f'{line.rstrip()[:+298]}' for line in myfile)


f = open("RawTX.txt", 'w')
f.write("" + listfile + "" + "\n")
f.close()</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-233.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3225"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Launch&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool lattice_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-234.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3226"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-235.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3227"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-236-1024x451.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3228"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;&nbsp;specifying the parameters&nbsp;<strong><code>249 bits 79 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 249 79 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-237.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3231"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;&nbsp;<code>HEX</code>&nbsp;the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-238.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3234" style="width:838px;height:961px" width="838" height="961"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0x80e3052532356bc701189818c095fb8a7f035fd7a5a96777df4162205e945aa5</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example3/POLYNONCE.py" target="_blank" rel="noreferrer noopener">GITHUB</a></strong></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-239.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3235" style="width:840px;height:1178px" width="840" height="1178"><figcaption class="wp-element-caption"><code><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example3/POLYNONCE.py" target="_blank" rel="noreferrer noopener">https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example3/POLYNONCE.py</a></code></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-240.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3236" style="width:840px;height:1376px" width="840" height="1376"></figure></div>


<blockquote class="wp-block-quote">
<p><em>We got 79 identical original bits from</em><code>249</code></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney,&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed the same initial bits to us.&nbsp;The value&nbsp;<code>POLYNONCE</code>in the format&nbsp;<code>HEX</code>allows us to fully solve the problem of hidden numbers, get a private key and restore a Bitcoin Wallet.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-103-1024x451.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-2848"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKeyAddr.txt</code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-241.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3237"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 18Y9nUpdtxAKTh6yaN299jfUxcpJ2ApHz
WIF:  L1YFTAP2X6jhi9W6ZVy2xX8H89TYwZcgSKcPLX7NmAx3n8PjqDkU
HEX:  80e3052532356bc701189818c095fb8a7f035fd7a5a96777df4162205e945aa5</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-bitaddress-7.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3242"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/18Y9nUpdtxAKTh6yaN299jfUxcpJ2ApHz">https://www.blockchain.com/en/explorer/addresses/btc/18Y9nUpdtxAKTh6yaN299jfUxcpJ2ApHz</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-243.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3246" style="width:840px;height:248px" width="840" height="248"></figure>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-244.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3247"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-245-1024x146.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3248"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 1023.25</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p class="has-text-align-center has-large-font-size"><strong><code>№4</code></strong></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider example #4 with a Bitcoin Address:</p>
</blockquote>



<p><strong><a href="https://btc1.trezor.io/address/12fqNTJc1wj2xfNscYHAzehD6f6sRjWBor" target="_blank" rel="noreferrer noopener">12fqNTJc1wj2xfNscYHAzehD6f6sRjWBor</a></strong></p>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-246.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3253"></figure>



<p><a href="https://btc1.trezor.io/tx/6e6d84bc92cd79fba2d1eee5fb47e393896d44f666a50d4948a022751e3f0989" target="_blank" rel="noreferrer noopener"><strong>6e6d84bc92cd79fba2d1eee5fb47e393896d44f666a50d4948a022751e3f0989</strong></a></p>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-247.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3254"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-248-1024x371.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3255"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>"hex": 01000000418ff67c7d3309211ab9d9629d97bbac7730d3cbb419df4ec43d2c5fc4f81bbefb1b0000006b4830450221008c223861acf1f265547eddb04a7cf98d206643a05824e56e97c70beddd18eaf20220139a34bf077a1fdb15e716d765955203e746616dfe8bf536b86d259b5c8a09b8012103c50b5619a40a23ff6a5510238405b8efd3f8f1bc442e1a415b25078b4cbd88e3ffffffff..............................</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s remove the files from the second example:</p>
</blockquote>



<pre class="wp-block-code"><code>!rm HEX.txt
!rm RawTX.txt
!rm NoncesHEX.txt
!rm PrivateKey.txt
!rm SignatureRSZ.csv
!rm PrivateKeyAddr.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-249.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3258"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Download&nbsp;&nbsp;</em><code>HEX</code><em>-data through the utility&nbsp;&nbsp;</em><code>echo</code><em>&nbsp;and save to file:&nbsp;&nbsp;</em><strong>RawTX.txt&nbsp;</strong><em>Download&nbsp;&nbsp;</em><code>HEX</code><em>-data through the utility&nbsp;&nbsp;</em><code>wget</code><em>&nbsp;and save to file:&nbsp;&nbsp;</em><strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/21LatticeAttack/example4/HEX.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-250.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3260"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run the code and get the bits we need&nbsp;</em><code><strong>RawTX</strong></code></p>
</blockquote>



<pre class="wp-block-code"><code>with open("HEX.txt") as myfile:

    listfile="\n".join(f'{line.rstrip()[:+298]}' for line in myfile)


f = open("RawTX.txt", 'w')
f.write("" + listfile + "" + "\n")
f.close()</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-251.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3262"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Launch&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool lattice_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-252-1024x451.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3263"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-253-1024x444.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3265"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-254.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3267"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;&nbsp;specifying the parameters&nbsp;<strong><code>249 bits 79 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 249 79 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-255-1024x531.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3268"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;&nbsp;<code>HEX</code>&nbsp;the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-256.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3269" style="width:841px;height:979px" width="841" height="979"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0x9e636a4ef1a63c4bd385b8d26d29f6394a29963f12109dbf34fef74377866a32</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example4/POLYNONCE.py" target="_blank" rel="noreferrer noopener">GITHUB</a></strong></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-257.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3272" style="width:841px;height:1190px" width="841" height="1190"><figcaption class="wp-element-caption"><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example4/POLYNONCE.py" target="_blank" rel="noreferrer noopener"><code>https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example4/POLYNONCE.py</code></a></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-258.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3278" style="width:841px;height:1399px" width="841" height="1399"></figure></div>


<blockquote class="wp-block-quote">
<p><em>We got 79 identical original bits from</em><code>249</code></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney,&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed the same initial bits to us.&nbsp;The value&nbsp;<code>POLYNONCE</code>in the format&nbsp;<code>HEX</code>allows us to fully solve the problem of hidden numbers, get a private key and restore a Bitcoin Wallet.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-259-1024x385.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3281"></figure>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKeyAddr.txt</code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-260.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3283"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 12fqNTJc1wj2xfNscYHAzehD6f6sRjWBor
WIF:  L2Xbaxg8QFoLn5URp7GKMyLwEN9dV5TtgpdbXYo7WDJsHZLcT898
HEX:  9e636a4ef1a63c4bd385b8d26d29f6394a29963f12109dbf34fef74377866a32</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-bitaddress-8.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3286"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/12fqNTJc1wj2xfNscYHAzehD6f6sRjWBor">https://www.blockchain.com/en/explorer/addresses/btc/12fqNTJc1wj2xfNscYHAzehD6f6sRjWBor</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<figure class="wp-block-image is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-262.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3290" style="width:841px;height:253px" width="841" height="253"></figure>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-263.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3291"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-264-1024x141.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3292"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 406.03</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading has-text-align-center"><strong><code>№5</code></strong></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Consider example #5 with a Bitcoin Address:</p>
</blockquote>



<p><strong><a href="https://btc1.trezor.io/address/1L8v5aUZRzYbGKWcj9Yt6mGdd95Sy9bXjN" target="_blank" rel="noreferrer noopener">1L8v5aUZRzYbGKWcj9Yt6mGdd95Sy9bXjN</a></strong></p>



<figure class="wp-block-image"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-265.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3297"></figure>



<p><a href="https://btc1.trezor.io/tx/8a00ad0cc10d768d6d2b407f99879e556e5fc2917b619cb9a551675b7682a791" target="_blank" rel="noreferrer noopener"><strong>8a00ad0cc10d768d6d2b407f99879e556e5fc2917b619cb9a551675b7682a791</strong></a></p>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-266.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3298"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">RawTX</h2>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-267-1024x378.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3300"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>
"hex": "01000000fdf4014f7e4a72ecb9a3ed21a82a42b3127da87bdfee7c10779688dd8a38977cb80ece000000006a4730440220423f7cffadd494fb0148d509e67598b3c8d7f54695ee3830184adc2af234d5cf022005ebe83773bc81c7131fd0580350a998adde20fee6fd2d1da40a0191fea8242c0121027a2250a80a31965e928afff97d1c713e7ce70e6eb7c7491404a79991bfc6b5c1ffffffff...........................</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s remove the files from the second example:</p>
</blockquote>



<pre class="wp-block-code"><code>!rm HEX.txt
!rm RawTX.txt
!rm NoncesHEX.txt
!rm PrivateKey.txt
!rm SignatureRSZ.csv
!rm PrivateKeyAddr.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-268.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3302"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Download&nbsp;&nbsp;</em><code>HEX</code><em>the data through the utility&nbsp;&nbsp;</em><code>wget</code><em>&nbsp;and save it to a file:&nbsp;&nbsp;</em><strong>RawTX.txt</strong></p>
</blockquote>



<pre class="wp-block-code"><code>!wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/21LatticeAttack/example5/HEX.txt</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-269-1024x461.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3304"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run the code and get the bits we need&nbsp;</em><code><strong>RawTX</strong></code></p>
</blockquote>



<pre class="wp-block-code"><code>with open("HEX.txt") as myfile:

    listfile="\n".join(f'{line.rstrip()[:+298]}' for line in myfile)


f = open("RawTX.txt", 'w')
f.write("" + listfile + "" + "\n")
f.close()</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-270-1024x511.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3308"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Launch&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;using software&nbsp;<code>“ATTACKSAFE SOFTWARE”</code></h2>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./attacksafe -tool lattice_attack -open RawTX.txt -save SignatureRSZ.csv</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-271-1024x446.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3309"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>We launched this attack from&nbsp;&nbsp;<code>-tool lattice_attack</code>&nbsp;and the result was saved to a file&nbsp;<code>SignatureRSZ.csv</code></p>



<p>Now to see the successful result, open the file&nbsp;<code>SignatureRSZ.csv</code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-272.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3310"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p><em>Let’s run&nbsp;&nbsp;</em><code>SageMath</code><em>&nbsp;the command:</em></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>!./sage -sh</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-273-1024x495.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3311"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>To calculate the private key to the Bitcoin Wallet, run the script&nbsp;&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/crack_weak_ECDSA_nonces_with_LLL.py" target="_blank" rel="noreferrer noopener">crack_weak_ECDSA_nonces_with_LLL.py</a></strong>&nbsp;&nbsp;specifying the parameters&nbsp;<strong><code>249 bits 79 sign</code></strong></p>
</blockquote>



<pre class="wp-block-code"><code>python3 crack_weak_ECDSA_nonces_with_LLL.py SignatureRSZ.csv 249 79 &gt; PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<pre class="wp-block-code"><code>cat PrivateKey.txt</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-274.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3312"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKey.txt</code></p>
</blockquote>



<p><em>We received the private key to the Bitcoin Wallet in&nbsp;&nbsp;<code>HEX</code>&nbsp;the format</em></p>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-275.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3314" style="width:840px;height:982px" width="840" height="982"></figure></div>


<pre class="wp-block-code"><code><strong>PrivKey = 0xe2eadbde2e6a2adb6f81864cdf574dd44959717fe095486e2c0e55585594edf2</strong></code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Check POLYNONCE for each ECDSA signature</h2>



<blockquote class="wp-block-quote">
<p>To do this, use the code from&nbsp;<strong><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example5/POLYNONCE.py" target="_blank" rel="noreferrer noopener">GITHUB</a></strong></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-276.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3318" style="width:843px;height:1211px" width="843" height="1211"><figcaption class="wp-element-caption"><code><a href="https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example5/POLYNONCE.py" target="_blank" rel="noreferrer noopener">https://github.com/demining/CryptoDeepTools/blob/main/21LatticeAttack/example5/POLYNONCE.py</a></code></figcaption></figure></div>


<h2 class="wp-block-heading">Result:</h2>


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-277.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3319" style="width:838px;height:1336px" width="838" height="1336"></figure></div>


<blockquote class="wp-block-quote">
<p>We got 79 identical original bits from<code>249</code></p>
</blockquote>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Thanks to the value on the secp256k1 curve from&nbsp;&nbsp;<a href="https://en.wikipedia.org/wiki/Hal_Finney_(computer_scientist)" target="_blank" rel="noreferrer noopener">Hal Finney,&nbsp;</a>&nbsp;&nbsp;<a href="https://cryptodeeptech.ru/endomorphism/" target="_blank" rel="noreferrer noopener">LAMBDA and BETA</a>&nbsp;revealed the same initial bits to us.&nbsp;The value&nbsp;<code>POLYNONCE</code>in the format&nbsp;<code>HEX</code>allows us to fully solve the problem of hidden numbers, get a private key and restore a Bitcoin Wallet.</p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Let’s check the HEX of the private key:</h2>



<blockquote class="wp-block-quote">
<p><strong>Let’s run the code:</strong></p>
</blockquote>



<pre class="wp-block-code"><code>from bitcoin import *

with open("PrivateKey.txt","r") as f:
    content = f.readlines()

content = [x.strip() for x in content]
f.close()


outfile = open("PrivateKeyAddr.txt","w")
for x in content:
  outfile.write(x+":"+pubtoaddr(encode_pubkey(privtopub(x), "bin_compressed"))+"\n")
 
outfile.close()</code></pre>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-278.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3321"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<blockquote class="wp-block-quote">
<p>Let’s open the file:&nbsp;<code>PrivateKeyAddr.txt</code></p>
</blockquote>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-279-1024x700.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3323"><figcaption class="wp-element-caption"><code>e2eadbde2e6a2adb6f81864cdf574dd44959717fe095486e2c0e55585594edf2:1L8v5aUZRzYbGKWcj9Yt6mGdd95Sy9bXjN</code></figcaption></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p>Let’s open&nbsp;&nbsp;<strong><a href="https://cryptodeep.ru/bitaddress.html" target="_blank" rel="noreferrer noopener">bitaddress</a></strong>&nbsp;&nbsp;and check:</p>



<pre class="wp-block-code"><code>ADDR: 1L8v5aUZRzYbGKWcj9Yt6mGdd95Sy9bXjN
WIF:  L4porgUmuBkMbATA6Pp7r8uqShFt2zTPNEfuPNYi1BCym4hhV8gs
HEX:  e2eadbde2e6a2adb6f81864cdf574dd44959717fe095486e2c0e55585594edf2</code></pre>


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-bitaddress-9.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3332"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">



<p><a href="https://www.blockchain.com/en/explorer/addresses/btc/1L8v5aUZRzYbGKWcj9Yt6mGdd95Sy9bXjN">https://www.blockchain.com/en/explorer/addresses/btc/1L8v5aUZRzYbGKWcj9Yt6mGdd95Sy9bXjN</a></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter is-resized"><img decoding="async" loading="lazy" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-281.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3337" style="width:857px;height:246px" width="857" height="246"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-282.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3340"></figure></div>

<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/image-283.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3342"></figure></div>


<p class="has-large-font-size"><code><strong>BALANCE: $ 995.39</strong></code></p>



<hr class="wp-block-separator has-alpha-channel-opacity">



<h2 class="wp-block-heading">Literature:</h2>



<ul>
<li><em><a href="https://cryptodeep.ru/doc/Lattice-Attacks-against-Elliptic-Curve-Signatures-with-Blinded-Scalar-Multiplication.pdf" target="_blank" rel="noreferrer noopener">Lattice Attacks against Elliptic-Curve Signatures with Blinded Scalar Multiplication Dahmun Goudarzi , Matthieu Rivain , and Damien Vergnaud CryptoExperts, Paris, France</a></em></li>
</ul>



<ul>
<li><em><a href="https://cryptodeep.ru/doc/Biased-Nonce-Sense-Lattice-Attacks-against-Weak-ECDSA-Signatures-in-Cryptocurrencies.pdf" target="_blank" rel="noreferrer noopener">Biased Nonce Sense: Lattice Attacks against Weak ECDSA Signatures in Cryptocurrencies Joachim Breitner and Nadia Heninger DFINITY Foundation, Zug University of California, San Diego</a></em></li>



<li><em><a href="https://cryptodeep.ru/doc/Return-of-the-Hidden-Number-ProblemA-Widespread-and-Novel-Key-Extraction-Attack-on-ECDSA-and-DSA.pdf" target="_blank" rel="noreferrer noopener">Return of the Hidden Number Problem A Widespread and Novel Key Extraction Attack on ECDSA and DSA Keegan Ryan</a></em></li>



<li><em><a href="https://cryptodeep.ru/doc/The-curse-of-ECDSA-nonces-Systematic-analysis-of-lattice-attacks-on-noisy-leakage-of-bit-length-of-ECDSA-nonces.pdf" target="_blank" rel="noreferrer noopener">Minerva: The curse of ECDSA nonces Systematic analysis of lattice attacks on noisy leakage of bit-length of ECDSA nonces Ján Jančár , Vladimír Sedláček , Petr Švenda and Marek Sýs Masaryk University, Ca’ Foscari University of Venice</a></em></li>



<li><em><a href="https://cryptodeep.ru/doc/Estimating-the-Effectiveness-of-Lattice-Attacks.pdf" target="_blank" rel="noreferrer noopener">Estimating the Effectiveness of Lattice Attacks Kotaro Abe and Makoto Ikeda School of Engineering, The University of Tokyo, Tokyo, Japan</a></em></li>
</ul>



<hr class="wp-block-separator has-alpha-channel-opacity">



<p><strong><a href="https://github.com/demining/CryptoDeepTools/tree/main/21LatticeAttack" target="_blank" rel="noreferrer noopener">Source</a></strong></p>



<p><strong><a href="https://attacksafe.ru/software" target="_blank" rel="noreferrer noopener">ATTACKSAFE SOFTWARE</a></strong></p>



<p><strong><a href="https://t.me/cryptodeeptech" target="_blank" rel="noreferrer noopener">Telegram: https://t.me/cryptodeeptech</a></strong></p>



<p><strong><a href="https://youtu.be/CzaHitewN-4" target="_blank" rel="noreferrer noopener">Video: https://youtu.be/CzaHitewN-4</a></strong></p>



<p><strong><a href="https://cryptodeeptech.ru/lattice-attack-249bits" target="_blank" rel="noreferrer noopener">Source: https://cryptodeeptech.ru/lattice-attack-249bits</a></strong></p>



<hr class="wp-block-separator has-alpha-channel-opacity">


<div class="wp-block-image">
<figure class="aligncenter"><img decoding="async" src="./LATTICE ATTACK 249bits we solve the problem of hidden numbers using 79 signatures ECDSA - CRYPTO DEEP TECH_files/039-1024x576.png" alt="LATTICE ATTACK 249bits solve the hidden number problem using 79 signatures ECDSA" class="wp-image-3344"></figure></div>


<hr class="wp-block-separator has-alpha-channel-opacity">
	</div><!-- .entry-content -->

