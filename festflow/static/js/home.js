if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;
var camera, scene, renderer, light;
var controls, water, sphere;
var animation;
var object;
var shipObject;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();
var loader = new THREE.AssimpLoader();
var floader = new THREE.FontLoader();
var ambient;

init();
animate();

function init() {

	container = document.getElementById( 'container' );

	// Renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	// Scene
	scene = new THREE.Scene();

	// Camera
	camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 20000 );
	camera.position.set( 28, 11, 102 );

	// Light
	// light = new THREE.DirectionalLight( 0xffffff, 0.8 );
	// scene.add( light );

	//Water Light
	var light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 0, 4, 4 ).normalize();
	scene.add( light );

	// Water
	var waterGeometry = new THREE.PlaneBufferGeometry( 10000, 10000 );
	water = new THREE.Water(
		waterGeometry,
		{
			textureWidth: 512,
			textureHeight: 512,
			waterNormals: new THREE.TextureLoader().load( '../static/assets/textures/waternormals.jpg', function ( texture ) {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			}),
			alpha: 1.0,
			sunDirection: light.position.clone().normalize(),
			sunColor: 0xffffff,
			waterColor: 0x001e0f,
			distortionScale:  3.7,
			fog: scene.fog !== undefined
		}
	);
	water.rotation.x = - Math.PI / 2;
	scene.add( water );

	// Skybox + Change according to time
	var d = new Date();
	var n = d.getHours();
	var imagePrefix, imageSuffix, directions;
	if(n>=18 || n<=4) {
		imagePrefix = "../static/assets/textures/skybox-night/";
		directions  = ["right", "left", "top", "bottom", "front", "back"];
		imageSuffix = ".png";
	}
	else {
		ambient = new THREE.HemisphereLight( 0xDCDCDC, 0xDCDCDC, 0.5 );
		ambient.position.set( 0, 1, 0 );
		scene.add( ambient );
		imagePrefix = "../static/assets/textures/skybox-day/";
		directions  = ["right", "left", "top", "bottom", "front", "back"];
		imageSuffix = ".jpg";
	}
	var skyGeometry = new THREE.CubeGeometry( 5000, 5000, 5000 );

	var materialArray = [];
	for (var i = 0; i < 6; i++)
		materialArray.push( new THREE.MeshBasicMaterial({
			map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
			side: THREE.BackSide
	}));
	var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
	var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
	scene.add( skyBox );

	// Character
	loader.load( '../static/assets/models/assimp/octaminator/Octaminator.assimp', function ( result ) {

		object = result.object;
		object.scale.x = object.scale.y = object.scale.z = 0.1;
		object.position.y = 10;
		object.position.z = -5;
		object.rotation.x = object.rotation.z = 0;
		object.rotation.y = Math.PI;
		scene.add( object );

		animation = result.animation;

	} );

	// Ship Model
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setTexturePath('../static/assets/models/Ship');
	mtlLoader.setPath('../static/assets/models/Ship/');
	mtlLoader.load('Cruiser_2012.mtl', function (materials) {

		materials.preload();

		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.setPath('../static/assets/models/Ship/');
		objLoader.load('Cruiser 2012.obj', function (object) {
			shipObject = object;
			shipObject.scale.x = shipObject.scale.y = shipObject.scale.z =1;
			shipObject.position.y = -5;
			shipObject.position.z = -1300;
			shipObject.rotation.y = 0.785;
			scene.add(shipObject);
		});

	});

	// Ship Movement

	//
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.maxPolarAngle = Math.PI * 0.495;
	controls.target.set( 0, 10, 0 );
	controls.minDistance = 40.0;
	controls.maxDistance = 200.0;
	camera.lookAt( controls.target );

	// FPS Stats
	// stats = new Stats();
	// container.appendChild( stats.dom );

	window.addEventListener( 'resize', onWindowResize, false );

}

// Character Movement
// the following code is from
// http://catchvar.com/threejs-animating-blender-models
var animOffset       = 0,   // starting frame of animation
	walking         = false,
	duration        = 1000, // milliseconds to complete animation
	keyframes       = 20,   // total number of animation frames
	interpolation   = duration / keyframes, // milliseconds per frame
	lastKeyframe    = 0,    // previous keyframe
	currentKeyframe = 0;

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {

	requestAnimationFrame( animate );
	render();
	update();
	//stats.update();
	try {
		shipObject.rotation.y += 0.001;
	}
	catch(err) {
		//console.log("Error: " + err);
	}
	if ( animation ) animation.setTime( performance.now() / 1000 );
	// console.log(camera.position.x);
	// console.log(camera.position.y);
	// console.log(camera.position.z);
}

function update()
{
	// delta = change in time since last call (seconds)
	delta = clock.getDelta();
	var moveDistance = 30 * delta;
	walking = false;
	// move forwards / backwards
	if ( keyboard.pressed("w") )
		object.translateZ( -moveDistance );
	if ( keyboard.pressed("s") )
		object.translateZ(  moveDistance );
	// rotate left/right
	if ( keyboard.pressed("a") )
		object.rotation.y += delta;
	if ( keyboard.pressed("d") )
		object.rotation.y -= delta;


	var walkingKeys = ["w", "s", "a", "d"];
	for (var i = 0; i < walkingKeys.length; i++)
	{
		if ( keyboard.pressed(walkingKeys[i]) )
			walking = true;
	}
}

function render() {

	var time = performance.now() * 0.001;
	water.material.uniforms.time.value += 1.0 / 60.0;
	renderer.render( scene, camera );
}
