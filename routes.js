/* // *genric*
var districts = require('./models/districts');
var listings = require('./models/listings');
var forms = require('./models/forms');
var psus = require('./models/psus'); */

// PSSP
var pssp_districts = require('./models/pssp/districts');
var pssp_listings = require('./models/pssp/listings');
var pssp_forms = require('./models/pssp/forms');
var pssp_psus = require('./models/pssp/psus');
var pssp_users = require('./models/pssp/users');

// ENRICH
var enrich_districts = require('./models/enrich/districts');
var enrich_listings = require('./models/enrich/listings');
var enrich_forms = require('./models/enrich/forms');
var enrich_psus = require('./models/enrich/psus');
var enrich_users = require('./models/enrich/users');

// MNCH-SRC
var src_districts = require('./models/src/districts');
var src_listings = require('./models/src/listings');
var src_mwras = require('./models/src/mwras');
var src_forms = require('./models/src/forms');
var src_psus = require('./models/src/psus');
var src_users = require('./models/src/users');

// MCCP
var mccp_districts = require('./models/mccp/districts');
var mccp_listings = require('./models/mccp/listings');
var mccp_forms = require('./models/mccp/forms');
var mccp_psus = require('./models/mccp/psus');
var mccp_users = require('./models/mccp/users');

// CBT
var cbt_tehsils = require('./models/cbt/tehsils');
var cbt_ucs = require('./models/cbt/ucs');
var cbt_villages = require('./models/cbt/villages');
var cbt_hfacilities = require('./models/cbt/hfacilities');
var cbt_lhws = require('./models/cbt/lhws');
var cbt_listings = require('./models/cbt/listings');
var cbt_children = require('./models/cbt/children');
var cbt_clusterinfo = require('./models/cbt/clusterinfo');
var cbt_pws = require('./models/cbt/pws');
var cbt_users = require('./models/cbt/users');



module.exports = {
	configure: function(app){
		/* 
		// Listings
		app.get('/listings/', function(req, res){
			listings.get(res);
		});
		
		app.get('/listings/:psu', function(req, res){
			listings.getbypsu(req.params.pid, res);
		});
		// DISTRICTS
		app.get('/districts/', function(req, res){
			districts.get(res);
		});
		
		app.get('/districts/:id', function(req, res){
			districts.getbyid(req.params.id, res);
		});
		
		app.post('/districts/', function(req, res){
			//console.log("ROUTES: "+req.body);
			districts.create(req.body, res);
		});
		
		app.put('/districts', function(req, res){
			console.log("ROUTES: "+req.body);
			districts.update(req.body, res);
		});
		
		
		app.delete('/districts/:id', function(req, res){
			districts.delete(req.params.id, res);
		});
		
		// PSUs
		app.get('/psus/', function(req, res){
			psus.get(res);
		});
		
		app.get('/psus/:id', function(req, res){
			psus.getbyid(req.params.id, res);
		});
		
		app.post('/psus/', function(req, res){
			//console.log("ROUTES: "+req.body);
			psus.create(req.body, res);
		});
		
		app.put('/psus', function(req, res){
			console.log("ROUTES: "+req.body);
			psus.update(req.body, res);
		});
		
		
		app.delete('/psus/:id', function(req, res){
			psus.delete(req.params.id, res);
		});
		
		// FORMS
		app.get('/forms/', function(req, res){
			forms.get(res);
		});
		
		app.get('/forms/:formno', function(req, res){
			forms.getbyid(req.params.formno, res);
		});
		
		app.post('/forms/', function(req, res){
			console.log("ROUTES: "+req.body);
			forms.create(req.body, res);
		});
		
		app.put('/forms', function(req, res){
			console.log("ROUTES: "+req.body);
			forms.update(req.body, res);
		});
				
		app.delete('/forms/:formno', function(req, res){
			forms.delete(req.params.formno, res);
		});
		 */
		
		// PSSP - Listings
		app.get('/pssp/listings/', function(req, res){
			pssp_listings.get(res);
		});
	
		app.get('/pssp/listings/:psu', function(req, res){
			pssp_listings.getbypsu(req.params.pid, res);
		});
			
		// PSSP DISTRICTS
		app.get('/pssp/districts/', function(req, res){
			pssp_districts.get(res);
		});
		
		app.get('/pssp/districts/:id', function(req, res){
			pssp_districts.getbyid(req.params.id, res);
		});
		
		app.post('/pssp/districts/', function(req, res){
			//console.log("ROUTES: "+req.body);
			pssp_districts.create(req.body, res);
		});
		
		app.put('/pssp/districts', function(req, res){
			console.log("ROUTES: "+req.body);
			pssp_districts.update(req.body, res);
		});
		
		
		app.delete('/pssp/districts/:id', function(req, res){
			pssp_districts.delete(req.params.id, res);
		});
		
		// PSSP PSUs
		app.get('/pssp/psus/', function(req, res){
			pssp_psus.get(res);
		});
		
		app.get('/pssp/psus/:id', function(req, res){
			pssp_psus.getbyid(req.params.id, res);
		});
		
		app.post('/pssp/psus/', function(req, res){
			//console.log("ROUTES: "+req.body);
			pssp_psus.create(req.body, res);
		});
		
		app.put('/pssp/psus', function(req, res){
			console.log("ROUTES: "+req.body);
			pssp_psus.update(req.body, res);
		});
		
		
		app.delete('/pssp/psus/:id', function(req, res){
			pssp_psus.delete(req.params.id, res);
		});
		
		// PSSP FORMS
		app.get('/pssp/forms/', function(req, res){
			pssp_forms.get(res);
		});
		
		app.get('/pssp/forms/:formno', function(req, res){
			pssp_forms.getbyid(req.params.formno, res);
		});
		
		app.post('/pssp/forms/', function(req, res){
			console.log("ROUTES: "+req.body);
			pssp_forms.create(req.body, res);
		});
		
		app.put('/pssp/forms', function(req, res){
			console.log("ROUTES: "+req.body);
			pssp_forms.update(req.body, res);
		});
				
		app.delete('/pssp/forms/:formno', function(req, res){
			pssp_forms.delete(req.params.formno, res);
		});
		
		// PSSP users
		app.get('/pssp/users/', function(req, res){
			pssp_users.get(res);
		});
		
		app.get('/pssp/users/:formno', function(req, res){
			pssp_users.getbyid(req.params.formno, res);
		});
		
		app.post('/pssp/users/', function(req, res){
			console.log("ROUTES: "+req.body);
			pssp_users.create(req.body, res);
		});
		
		app.put('/pssp/users', function(req, res){
			console.log("ROUTES: "+req.body);
			pssp_users.update(req.body, res);
		});
				
		app.delete('/pssp/users/:formno', function(req, res){
			pssp_users.delete(req.params.formno, res);
		});
		
		
		/*---------------*/
		/*               */
		/* ENRICH MODELS */
		/*               */
		/*---------------*/		
		
		// enrich - Listings
		app.get('/enrich/listings/', function(req, res){
			enrich_listings.get(res);
		});
	
		app.get('/enrich/listings/:psu', function(req, res){
			enrich_listings.getbypsu(req.params.pid, res);
		});
			
		// enrich DISTRICTS
		app.get('/enrich/districts/', function(req, res){
			enrich_districts.get(res);
		});
		
		app.get('/enrich/districts/:id', function(req, res){
			enrich_districts.getbyid(req.params.id, res);
		});
		
		app.post('/enrich/districts/', function(req, res){
			//console.log("ROUTES: "+req.body);
			enrich_districts.create(req.body, res);
		});
		
		app.put('/enrich/districts', function(req, res){
			console.log("ROUTES: "+req.body);
			enrich_districts.update(req.body, res);
		});
		
		
		app.delete('/enrich/districts/:id', function(req, res){
			enrich_districts.delete(req.params.id, res);
		});
		
		// enrich PSUs
		app.get('/enrich/psus/', function(req, res){
			enrich_psus.get(res);
		});
		
		app.get('/enrich/psus/:id', function(req, res){
			enrich_psus.getbyid(req.params.id, res);
		});
		
		app.post('/enrich/psus/', function(req, res){
			//console.log("ROUTES: "+req.body);
			enrich_psus.create(req.body, res);
		});
		
		app.put('/enrich/psus', function(req, res){
			console.log("ROUTES: "+req.body);
			enrich_psus.update(req.body, res);
		});
		
		
		app.delete('/enrich/psus/:id', function(req, res){
			enrich_psus.delete(req.params.id, res);
		});
		
		// enrich FORMS
		app.get('/enrich/forms/', function(req, res){
			enrich_forms.get(res);
		});
		
		app.get('/enrich/forms/:formno', function(req, res){
			enrich_forms.getbyid(req.params.formno, res);
		});
		
		app.post('/enrich/forms/', function(req, res){
			console.log("ROUTES: "+req.body);
			enrich_forms.create(req.body, res);
		});
		
		app.put('/enrich/forms', function(req, res){
			console.log("ROUTES: "+req.body);
			enrich_forms.update(req.body, res);
		});
				
		app.delete('/enrich/forms/:formno', function(req, res){
			enrich_forms.delete(req.params.formno, res);
		});
		
		// enrich Users
		app.get('/enrich/users/', function(req, res){
			enrich_users.get(res);
		});
		
		app.get('/enrich/users/:id', function(req, res){
			enrich_users.getbyid(req.params.id, res);
		});
		
		app.post('/enrich/users/', function(req, res){
			//console.log("ROUTES: "+req.body);
			enrich_users.create(req.body, res);
		});
		
		app.put('/enrich/users', function(req, res){
			console.log("ROUTES: "+req.body);
			enrich_users.update(req.body, res);
		});
		
		app.delete('/enrich/users/:id', function(req, res){
			enrich_users.delete(req.params.id, res);
		});
		
		/*---------------*/
		/*               */
		/* MNCH-SRC MODELS */
		/*               */
		/*---------------*/		
		
		// src - Listings
		app.get('/src/listings/', function(req, res){
			src_listings.get(res);
		});
	
		app.get('/src/listings/:psu', function(req, res){
			src_listings.getbypsu(req.params.pid, res);
		});
			
		// src DISTRICTS
		app.get('/src/districts/', function(req, res){
			src_districts.get(res);
		});
		
		app.get('/src/districts/:id', function(req, res){
			src_districts.getbyid(req.params.id, res);
		});
		
		app.post('/src/districts/', function(req, res){
			//console.log("ROUTES: "+req.body);
			src_districts.create(req.body, res);
		});
		
		app.put('/src/districts', function(req, res){
			console.log("ROUTES: "+req.body);
			src_districts.update(req.body, res);
		});
		
		
		app.delete('/src/districts/:id', function(req, res){
			src_districts.delete(req.params.id, res);
		});
		
		// src PSUs
		app.get('/src/psus/', function(req, res){
			src_psus.get(res);
		});
		
		app.get('/src/psus/:id', function(req, res){
			src_psus.getbyid(req.params.id, res);
		});
		
		app.post('/src/psus/', function(req, res){
			//console.log("ROUTES: "+req.body);
			src_psus.create(req.body, res);
		});
		
		app.put('/src/psus', function(req, res){
			console.log("ROUTES: "+req.body);
			src_psus.update(req.body, res);
		});
		
		
		app.delete('/src/psus/:id', function(req, res){
			src_psus.delete(req.params.id, res);
		});
		
		// src FORMS
		app.get('/src/forms/', function(req, res){
			src_forms.get(res);
		});
		
		app.get('/src/forms/:formno', function(req, res){
			src_forms.getbyid(req.params.formno, res);
		});
		
		app.post('/src/forms/', function(req, res){
			console.log("ROUTES: "+req.body);
			src_forms.create(req.body, res);
		});
		
		app.put('/src/forms', function(req, res){
			console.log("ROUTES: "+req.body);
			src_forms.update(req.body, res);
		});
				
		app.delete('/src/forms/:formno', function(req, res){
			src_forms.delete(req.params.formno, res);
		});
		// src mwras
		app.get('/src/mwras/', function(req, res){
			src_mwras.get(res);
		});
		
		app.get('/src/mwras/:formno', function(req, res){
			src_mwras.getbyid(req.params.formno, res);
		});
		
		app.post('/src/mwras/', function(req, res){
			console.log("ROUTES: "+req.body);
			src_mwras.create(req.body, res);
		});
		
		app.put('/src/mwras', function(req, res){
			console.log("ROUTES: "+req.body);
			src_mwras.update(req.body, res);
		});
				
		app.delete('/src/mwras/:formno', function(req, res){
			src_mwras.delete(req.params.formno, res);
		});
		
		// src Users
		app.get('/src/users/', function(req, res){
			src_users.get(res);
		});
		
		app.get('/src/users/:id', function(req, res){
			src_users.getbyid(req.params.id, res);
		});
		
		app.post('/src/users/', function(req, res){
			//console.log("ROUTES: "+req.body);
			src_users.create(req.body, res);
		});
		
		app.put('/src/users', function(req, res){
			console.log("ROUTES: "+req.body);
			src_users.update(req.body, res);
		});
		
		app.delete('/src/users/:id', function(req, res){
			src_users.delete(req.params.id, res);
		});
		
		/*---------------*/
		/*               */
		/* mccp MODELS */
		/*               */
		/*---------------*/		
		
		// mccp - Listings
		app.get('/mccp/listings/', function(req, res){
			mccp_listings.get(res);
		});
	
		app.get('/mccp/listings/:psu', function(req, res){
			mccp_listings.getbypsu(req.params.pid, res);
		});
			
		// mccp DISTRICTS
		app.get('/mccp/districts/', function(req, res){
			mccp_districts.get(res);
		});
		
		app.get('/mccp/districts/:id', function(req, res){
			mccp_districts.getbyid(req.params.id, res);
		});
		
		app.post('/mccp/districts/', function(req, res){
			//console.log("ROUTES: "+req.body);
			mccp_districts.create(req.body, res);
		});
		
		app.put('/mccp/districts', function(req, res){
			console.log("ROUTES: "+req.body);
			mccp_districts.update(req.body, res);
		});
		
		
		app.delete('/mccp/districts/:id', function(req, res){
			mccp_districts.delete(req.params.id, res);
		});
		
		// mccp PSUs
		app.get('/mccp/psus/', function(req, res){
			mccp_psus.get(res);
		});
		
		app.get('/mccp/psus/:id', function(req, res){
			mccp_psus.getbyid(req.params.id, res);
		});
		
		app.post('/mccp/psus/', function(req, res){
			//console.log("ROUTES: "+req.body);
			mccp_psus.create(req.body, res);
		});
		
		app.put('/mccp/psus', function(req, res){
			console.log("ROUTES: "+req.body);
			mccp_psus.update(req.body, res);
		});
		
		
		app.delete('/mccp/psus/:id', function(req, res){
			mccp_psus.delete(req.params.id, res);
		});
		
		// mccp FORMS
		app.get('/mccp/forms/', function(req, res){
			mccp_forms.get(res);
		});
		
		app.get('/mccp/forms/:formno', function(req, res){
			mccp_forms.getbyid(req.params.formno, res);
		});
		
		app.post('/mccp/forms/', function(req, res){
			console.log("ROUTES: "+req.body);
			mccp_forms.create(req.body, res);
		});
		
		app.put('/mccp/forms', function(req, res){
			console.log("ROUTES: "+req.body);
			mccp_forms.update(req.body, res);
		});
				
		app.delete('/mccp/forms/:formno', function(req, res){
			mccp_forms.delete(req.params.formno, res);
		});
		
		// mccp Users
		app.get('/mccp/users/', function(req, res){
			mccp_users.get(res);
		});
		
		app.get('/mccp/users/:id', function(req, res){
			mccp_users.getbyid(req.params.id, res);
		});
		
		app.post('/mccp/users/', function(req, res){
			//console.log("ROUTES: "+req.body);
			mccp_users.create(req.body, res);
		});
		
		app.put('/mccp/users', function(req, res){
			console.log("ROUTES: "+req.body);
			mccp_users.update(req.body, res);
		});
		
		app.delete('/mccp/users/:id', function(req, res){
			mccp_users.delete(req.params.id, res);
		});
		
		/*---------------*/
		/*               */
		/* CBT MODELS */
		/*               */
		/*---------------*/		
			
		// CBT tehsils
		app.get('/cbt/tehsils/', function(req, res){
			cbt_tehsils.get(res);
		});
		
		app.get('/cbt/tehsils/:id', function(req, res){
			cbt_tehsils.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/tehsils/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_tehsils.create(req.body, res);
		});
		
		app.put('/cbt/tehsils', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_tehsils.update(req.body, res);
		});
		
		app.delete('/cbt/tehsils/:id', function(req, res){
			cbt_tehsils.delete(req.params.id, res);
		});
			
		// CBT ucs
		app.get('/cbt/ucs/', function(req, res){
			cbt_ucs.get(res);
		});
		
		app.get('/cbt/ucs/:id', function(req, res){
			cbt_ucs.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/ucs/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_ucs.create(req.body, res);
		});
		
		app.put('/cbt/ucs', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_ucs.update(req.body, res);
		});
		
		app.delete('/cbt/ucs/:id', function(req, res){
			cbt_ucs.delete(req.params.id, res);
		});
		
		// CBT villages
		app.get('/cbt/villages/', function(req, res){
			cbt_villages.get(res);
		});
		
		app.get('/cbt/villages/:id', function(req, res){
			cbt_villages.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/villages/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_villages.create(req.body, res);
		});
		
		app.put('/cbt/villages', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_villages.update(req.body, res);
		});
		
		app.delete('/cbt/villages/:id', function(req, res){
			cbt_villages.delete(req.params.id, res);
		});
			
		// CBT hfacilities
		app.get('/cbt/hfacilities/', function(req, res){
			cbt_hfacilities.get(res);
		});
		
		app.get('/cbt/hfacilities/:id', function(req, res){
			cbt_hfacilities.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/hfacilities/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_hfacilities.create(req.body, res);
		});
		
		app.put('/cbt/hfacilities', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_hfacilities.update(req.body, res);
		});
		
		app.delete('/cbt/hfacilities/:id', function(req, res){
			cbt_hfacilities.delete(req.params.id, res);
		});
			
		// CBT lhws
		app.get('/cbt/lhws/', function(req, res){
			cbt_lhws.get(res);
		});
		
		app.get('/cbt/lhws/:id', function(req, res){
			cbt_lhws.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/lhws/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_lhws.create(req.body, res);
		});
		
		app.put('/cbt/lhws', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_lhws.update(req.body, res);
		});
		
		app.delete('/cbt/lhws/:id', function(req, res){
			cbt_lhws.delete(req.params.id, res);
		});
		
		// CBT listings
		app.get('/cbt/listings/', function(req, res){
			cbt_listings.get(res);
		});
		
		app.get('/cbt/listings/:id', function(req, res){
			cbt_listings.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/listings/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_listings.create(req.body, res);
		});
		
		app.put('/cbt/listings', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_listings.update(req.body, res);
		});
		
		app.delete('/cbt/listings/:id', function(req, res){
			cbt_listings.delete(req.params.id, res);
		});
		
		// CBT children
		app.get('/cbt/children/', function(req, res){
			cbt_children.get(res);
		});
		
		app.get('/cbt/children/:id', function(req, res){
			cbt_children.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/children/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_children.create(req.body, res);
		});
		
		app.put('/cbt/children', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_children.update(req.body, res);
		});
		
		app.delete('/cbt/children/:id', function(req, res){
			cbt_children.delete(req.params.id, res);
		});
		
		// CBT clusterinfo
		app.get('/cbt/clusterinfo/', function(req, res){
			cbt_clusterinfo.get(res);
		});
		
		app.get('/cbt/clusterinfo/:id', function(req, res){
			cbt_clusterinfo.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/clusterinfo/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_clusterinfo.create(req.body, res);
		});
		
		app.put('/cbt/clusterinfo', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_clusterinfo.update(req.body, res);
		});
		
		app.delete('/cbt/clusterinfo/:id', function(req, res){
			cbt_clusterinfo.delete(req.params.id, res);
		});
		
		// CBT pws
		app.get('/cbt/pws/', function(req, res){
			cbt_pws.get(res);
		});
		
		app.get('/cbt/pws/:id', function(req, res){
			cbt_pws.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/pws/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_pws.create(req.body, res);
		});
		
		app.put('/cbt/pws', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_pws.update(req.body, res);
		});
		
		app.delete('/cbt/pws/:id', function(req, res){
			cbt_pws.delete(req.params.id, res);
		});
		
		// CBT users
		app.get('/cbt/users/', function(req, res){
			cbt_users.get(res);
		});
		
		app.get('/cbt/users/:id', function(req, res){
			cbt_users.getbyid(req.params.id, res);
		});
		
		app.post('/cbt/users/', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_users.create(req.body, res);
		});
		
		app.put('/cbt/users', function(req, res){
			//console.log("ROUTES: "+req.body);
			cbt_users.update(req.body, res);
		});
		
		app.delete('/cbt/users/:id', function(req, res){
			cbt_users.delete(req.params.id, res);
		});
		
	}
};