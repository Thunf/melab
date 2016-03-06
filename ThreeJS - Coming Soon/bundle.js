!function(){"use strict";THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null},THREE.Projector=function(){function e(){if(l===R){var e=new THREE.RenderableObject;return x.push(e),R++,l++,e}return x[l++]}function t(){if(p===T){var e=new THREE.RenderableVertex;return y.push(e),T++,p++,e}return y[p++]}function i(){if(h===H){var e=new THREE.RenderableFace;return w.push(e),H++,h++,e}return w[h++]}function n(){if(f===S){var e=new THREE.RenderableLine;return g.push(e),S++,f++,e}return g[f++]}function o(){if(m===b){var e=new THREE.RenderableSprite;return M.push(e),b++,m++,e}return M[m++]}function r(e,t){return e.z!==t.z?t.z-e.z:e.id!==t.id?e.id-t.id:0}function a(e,t){var i=0,n=1,o=e.z+e.w,r=t.z+t.w,a=-e.z+e.w,s=-t.z+t.w;return o>=0&&r>=0&&a>=0&&s>=0||!(o<0&&r<0||a<0&&s<0)&&(o<0?i=Math.max(i,o/(o-r)):r<0&&(n=Math.min(n,o/(o-r))),a<0?i=Math.max(i,a/(a-s)):s<0&&(n=Math.min(n,a/(a-s))),!(n<i)&&(e.lerp(t,i),t.lerp(e,1-n),!0))}var s,l,c,p,E,h,d,f,u,m,v,x=[],R=0,y=[],T=0,w=[],H=0,g=[],S=0,M=[],b=0,C={objects:[],lights:[],elements:[]},z=new THREE.Vector3,V=new THREE.Vector3,j=new THREE.Vector3,L=new THREE.Vector3,B=new THREE.Vector4,P=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),W=new THREE.Box3,k=new Array(3),N=(new Array(4),new THREE.Matrix4),F=new THREE.Matrix4,D=new THREE.Matrix4,I=new THREE.Matrix3,O=new THREE.Frustum,A=new THREE.Vector4,G=new THREE.Vector4;this.projectVector=function(e,t){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(t)},this.unprojectVector=function(e,t){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(t)},this.pickingRay=function(e,t){console.error("THREE.Projector: .pickingRay() has been removed.")};var U=new function(){var e=[],o=[],r=null,a=null,s=new THREE.Matrix3,l=function(e){var t=e.position,i=e.positionWorld,n=e.positionScreen;i.copy(t).applyMatrix4(v),n.copy(i).applyMatrix4(F);var o=1/n.w;n.x*=o,n.y*=o,n.z*=o,e.visible=n.x>=-1&&n.x<=1&&n.y>=-1&&n.y<=1&&n.z>=-1&&n.z<=1},p=function(e,t,i){return!0===e.visible||!0===t.visible||!0===i.visible||(k[0]=e.positionScreen,k[1]=t.positionScreen,k[2]=i.positionScreen,P.isIntersectionBox(W.setFromPoints(k)))},h=function(e,t,i){return(i.positionScreen.x-e.positionScreen.x)*(t.positionScreen.y-e.positionScreen.y)-(i.positionScreen.y-e.positionScreen.y)*(t.positionScreen.x-e.positionScreen.x)<0};return{setObject:function(t){a=(r=t).material,s.getNormalMatrix(r.matrixWorld),e.length=0,o.length=0},projectVertex:l,checkTriangleVisibility:p,checkBackfaceCulling:h,pushVertex:function(e,i,n){(c=t()).position.set(e,i,n),l(c)},pushNormal:function(t,i,n){e.push(t,i,n)},pushUv:function(e,t){o.push(e,t)},pushLine:function(e,t){var i=y[e],o=y[t];(d=n()).id=r.id,d.v1.copy(i),d.v2.copy(o),d.z=(i.positionScreen.z+o.positionScreen.z)/2,d.material=r.material,C.elements.push(d)},pushTriangle:function(t,n,l){var c=y[t],d=y[n],f=y[l];if(!1!==p(c,d,f)&&(a.side===THREE.DoubleSide||!0===h(c,d,f))){(E=i()).id=r.id,E.v1.copy(c),E.v2.copy(d),E.v3.copy(f),E.z=(c.positionScreen.z+d.positionScreen.z+f.positionScreen.z)/3;for(var u=0;u<3;u++){var m=3*arguments[u],v=E.vertexNormalsModel[u];v.set(e[m],e[m+1],e[m+2]),v.applyMatrix3(s).normalize();var x=2*arguments[u];E.uvs[u].set(o[x],o[x+1])}E.vertexNormalsLength=3,E.material=r.material,C.elements.push(E)}}}};this.projectScene=function(c,x,R,T){h=0,f=0,m=0,C.elements.length=0,!0===c.autoUpdate&&c.updateMatrixWorld(),void 0===x.parent&&x.updateMatrixWorld(),N.copy(x.matrixWorldInverse.getInverse(x.matrixWorld)),F.multiplyMatrices(x.projectionMatrix,N),O.setFromMatrix(F),l=0,C.objects.length=0,C.lights.length=0,c.traverseVisible(function(t){if(t instanceof THREE.Light)C.lights.push(t);else if(t instanceof THREE.Mesh||t instanceof THREE.Line||t instanceof THREE.Sprite){if(!1===t.material.visible)return;!1!==t.frustumCulled&&!0!==O.intersectsObject(t)||((s=e()).id=t.id,s.object=t,null!==t.renderDepth?s.z=t.renderDepth:(L.setFromMatrixPosition(t.matrixWorld),L.applyProjection(F),s.z=L.z),C.objects.push(s))}}),!0===R&&C.objects.sort(r);for(var w=0,H=C.objects.length;w<H;w++){var g=C.objects[w].object,S=g.geometry;if(U.setObject(g),v=g.matrixWorld,p=0,g instanceof THREE.Mesh){if(S instanceof THREE.BufferGeometry){var M=S.attributes,b=S.offsets;if(void 0===M.position)continue;for(var P=0,W=(be=M.position.array).length;P<W;P+=3)U.pushVertex(be[P],be[P+1],be[P+2]);if(void 0!==M.normal)for(var k=M.normal.array,P=0,W=k.length;P<W;P+=3)U.pushNormal(k[P],k[P+1],k[P+2]);if(void 0!==M.uv)for(var q=M.uv.array,P=0,W=q.length;P<W;P+=2)U.pushUv(q[P],q[P+1]);if(void 0!==M.index){var X=M.index.array;if(b.length>0)for(w=0;w<b.length;w++)for(var Y=b[w],J=Y.index,P=Y.start,W=Y.start+Y.count;P<W;P+=3)U.pushTriangle(X[P]+J,X[P+1]+J,X[P+2]+J);else for(var P=0,W=X.length;P<W;P+=3)U.pushTriangle(X[P],X[P+1],X[P+2])}else for(var P=0,W=be.length/3;P<W;P+=3)U.pushTriangle(P,P+1,P+2)}else if(S instanceof THREE.Geometry){var K=S.vertices,Q=S.faces,Z=S.faceVertexUvs[0];I.getNormalMatrix(v);for(var $=g.material instanceof THREE.MeshFaceMaterial,_=!0===$?g.material:null,ee=0,te=K.length;ee<te;ee++){var ie=K[ee];U.pushVertex(ie.x,ie.y,ie.z)}for(var ne=0,oe=Q.length;ne<oe;ne++){var re=Q[ne],ae=!0===$?_.materials[re.materialIndex]:g.material;if(void 0!==ae){var se=ae.side,le=y[re.a],ce=y[re.b],pe=y[re.c];if(!0===ae.morphTargets){var Ee=S.morphTargets,he=g.morphTargetInfluences,de=le.position,fe=ce.position,ue=pe.position;z.set(0,0,0),V.set(0,0,0),j.set(0,0,0);for(var me=0,ve=Ee.length;me<ve;me++){var xe=he[me];if(0!==xe){var Re=Ee[me].vertices;z.x+=(Re[re.a].x-de.x)*xe,z.y+=(Re[re.a].y-de.y)*xe,z.z+=(Re[re.a].z-de.z)*xe,V.x+=(Re[re.b].x-fe.x)*xe,V.y+=(Re[re.b].y-fe.y)*xe,V.z+=(Re[re.b].z-fe.z)*xe,j.x+=(Re[re.c].x-ue.x)*xe,j.y+=(Re[re.c].y-ue.y)*xe,j.z+=(Re[re.c].z-ue.z)*xe}}le.position.add(z),ce.position.add(V),pe.position.add(j),U.projectVertex(le),U.projectVertex(ce),U.projectVertex(pe)}if(!1!==U.checkTriangleVisibility(le,ce,pe)){var ye=U.checkBackfaceCulling(le,ce,pe);if(se!==THREE.DoubleSide){if(se===THREE.FrontSide&&!1===ye)continue;if(se===THREE.BackSide&&!0===ye)continue}(E=i()).id=g.id,E.v1.copy(le),E.v2.copy(ce),E.v3.copy(pe),E.normalModel.copy(re.normal),!1!==ye||se!==THREE.BackSide&&se!==THREE.DoubleSide||E.normalModel.negate(),E.normalModel.applyMatrix3(I).normalize();for(var Te=re.vertexNormals,we=0,He=Math.min(Te.length,3);we<He;we++){var ge=E.vertexNormalsModel[we];ge.copy(Te[we]),!1!==ye||se!==THREE.BackSide&&se!==THREE.DoubleSide||ge.negate(),ge.applyMatrix3(I).normalize()}E.vertexNormalsLength=Te.length;var Se=Z[ne];if(void 0!==Se)for(var Me=0;Me<3;Me++)E.uvs[Me].copy(Se[Me]);E.color=re.color,E.material=ae,E.z=(le.positionScreen.z+ce.positionScreen.z+pe.positionScreen.z)/3,C.elements.push(E)}}}}}else if(g instanceof THREE.Line){if(S instanceof THREE.BufferGeometry){if(void 0!==(M=S.attributes).position){for(var be=M.position.array,P=0,W=be.length;P<W;P+=3)U.pushVertex(be[P],be[P+1],be[P+2]);if(void 0!==M.index)for(var P=0,W=(X=M.index.array).length;P<W;P+=2)U.pushLine(X[P],X[P+1]);else for(var Ce=g.mode===THREE.LinePieces?2:1,P=0,W=be.length/3-1;P<W;P+=Ce)U.pushLine(P,P+1)}}else if(S instanceof THREE.Geometry){if(D.multiplyMatrices(F,v),0===(K=g.geometry.vertices).length)continue;(le=t()).positionScreen.copy(K[0]).applyMatrix4(D);for(var Ce=g.mode===THREE.LinePieces?2:1,ee=1,te=K.length;ee<te;ee++)(le=t()).positionScreen.copy(K[ee]).applyMatrix4(D),(ee+1)%Ce>0||(ce=y[p-2],A.copy(le.positionScreen),G.copy(ce.positionScreen),!0===a(A,G)&&(A.multiplyScalar(1/A.w),G.multiplyScalar(1/G.w),(d=n()).id=g.id,d.v1.positionScreen.copy(A),d.v2.positionScreen.copy(G),d.z=Math.max(A.z,G.z),d.material=g.material,g.material.vertexColors===THREE.VertexColors&&(d.vertexColors[0].copy(g.geometry.colors[ee]),d.vertexColors[1].copy(g.geometry.colors[ee-1])),C.elements.push(d)))}}else if(g instanceof THREE.Sprite){B.set(v.elements[12],v.elements[13],v.elements[14],1),B.applyMatrix4(F);var ze=1/B.w;B.z*=ze,B.z>=-1&&B.z<=1&&((u=o()).id=g.id,u.x=B.x*ze,u.y=B.y*ze,u.z=B.z,u.object=g,u.rotation=g.rotation,u.scale.x=g.scale.x*Math.abs(u.x-(B.x+x.projectionMatrix.elements[0])/(B.w+x.projectionMatrix.elements[12])),u.scale.y=g.scale.y*Math.abs(u.y-(B.y+x.projectionMatrix.elements[5])/(B.w+x.projectionMatrix.elements[13])),u.material=g.material,C.elements.push(u))}}return!0===T&&C.elements.sort(r),C}},THREE.SpriteCanvasMaterial=function(e){THREE.Material.call(this),this.type="SpriteCanvasMaterial",this.color=new THREE.Color(16777215),this.program=function(e,t){},this.setValues(e)},THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype),THREE.SpriteCanvasMaterial.prototype.constructor=THREE.SpriteCanvasMaterial,THREE.SpriteCanvasMaterial.prototype.clone=function(){var e=new THREE.SpriteCanvasMaterial;return THREE.Material.prototype.clone.call(this,e),e.color.copy(this.color),e.program=this.program,e},THREE.CanvasRenderer=function(e){function t(){Re.setRGB(0,0,0),ye.setRGB(0,0,0),Te.setRGB(0,0,0);for(var e=0,t=g.length;e<t;e++){var i=g[e],n=i.color;i instanceof THREE.AmbientLight?Re.add(n):i instanceof THREE.DirectionalLight?ye.add(n):i instanceof THREE.PointLight&&Te.add(n)}}function i(e,t,i){for(var n=0,o=g.length;n<o;n++){var r=g[n];if(fe.copy(r.color),r instanceof THREE.DirectionalLight){a=we.setFromMatrixPosition(r.matrixWorld).normalize();if((s=t.dot(a))<=0)continue;s*=r.intensity,i.add(fe.multiplyScalar(s))}else if(r instanceof THREE.PointLight){var a=we.setFromMatrixPosition(r.matrixWorld),s=t.dot(we.subVectors(a,e).normalize());if(s<=0)continue;if(0==(s*=0==r.distance?1:1-Math.min(e.distanceTo(a)/r.distance,1)))continue;s*=r.intensity,i.add(fe.multiplyScalar(s))}}}function n(e,t,i){d(i.opacity),f(i.blending);var n=t.scale.x*Y,o=t.scale.y*J,r=.5*Math.sqrt(n*n+o*o);if(xe.min.set(e.x-r,e.y-r),xe.max.set(e.x+r,e.y+r),i instanceof THREE.SpriteMaterial){var a=i.map;if(null!==a&&void 0!==a.image){!1===a.hasEventListener("update",c)&&(a.image.width>0&&p(a),a.addEventListener("update",c));var s=ue[a.id];R(void 0!==s?s:"rgba( 0, 0, 0, 1 )");var l=a.image,E=l.width*a.offset.x,h=l.height*a.offset.y,u=l.width*a.repeat.x,m=l.height*a.repeat.y,v=n/u,y=o/m;ee.save(),ee.translate(e.x,e.y),0!==i.rotation&&ee.rotate(i.rotation),ee.translate(-n/2,-o/2),ee.scale(v,y),ee.translate(-E,-h),ee.fillRect(E,h,u,m),ee.restore()}else R(i.color.getStyle()),ee.save(),ee.translate(e.x,e.y),0!==i.rotation&&ee.rotate(i.rotation),ee.scale(n,-o),ee.fillRect(-.5,-.5,1,1),ee.restore()}else i instanceof THREE.SpriteCanvasMaterial&&(x(i.color.getStyle()),R(i.color.getStyle()),ee.save(),ee.translate(e.x,e.y),0!==i.rotation&&ee.rotate(i.rotation),ee.scale(n,o),i.program(ee),ee.restore())}function o(e,t,i,n){if(d(n.opacity),f(n.blending),ee.beginPath(),ee.moveTo(e.positionScreen.x,e.positionScreen.y),ee.lineTo(t.positionScreen.x,t.positionScreen.y),n instanceof THREE.LineBasicMaterial){if(u(n.linewidth),m(n.linecap),v(n.linejoin),n.vertexColors!==THREE.VertexColors)x(n.color.getStyle());else{var o=i.vertexColors[0].getStyle(),r=i.vertexColors[1].getStyle();if(o===r)x(o);else{try{var a=ee.createLinearGradient(e.positionScreen.x,e.positionScreen.y,t.positionScreen.x,t.positionScreen.y);a.addColorStop(0,o),a.addColorStop(1,r)}catch(e){a=o}x(a)}}ee.stroke(),xe.expandByScalar(2*n.linewidth)}else n instanceof THREE.LineDashedMaterial&&(u(n.linewidth),m(n.linecap),v(n.linejoin),x(n.color.getStyle()),y([n.dashSize,n.gapSize]),ee.stroke(),xe.expandByScalar(2*n.linewidth),y([]))}function r(e,t,n,o,r,c,p,h){A.info.render.vertices+=3,A.info.render.faces++,d(h.opacity),f(h.blending),z=e.positionScreen.x,V=e.positionScreen.y,j=t.positionScreen.x,L=t.positionScreen.y,B=n.positionScreen.x,P=n.positionScreen.y,a(z,V,j,L,B,P),(h instanceof THREE.MeshLambertMaterial||h instanceof THREE.MeshPhongMaterial)&&null===h.map?(he.copy(h.color),de.copy(h.emissive),h.vertexColors===THREE.FaceColors&&he.multiply(p.color),Ee.copy(Re),He.copy(e.positionWorld).add(t.positionWorld).add(n.positionWorld).divideScalar(3),i(He,p.normalModel,Ee),Ee.multiply(he).add(de),!0===h.wireframe?s(Ee,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(Ee)):h instanceof THREE.MeshBasicMaterial||h instanceof THREE.MeshLambertMaterial||h instanceof THREE.MeshPhongMaterial?null!==h.map?h.map.mapping===THREE.UVMapping&&(W=p.uvs,E(z,V,j,L,B,P,W[o].x,W[o].y,W[r].x,W[r].y,W[c].x,W[c].y,h.map)):null!==h.envMap?h.envMap.mapping===THREE.SphericalReflectionMapping&&(ge.copy(p.vertexNormalsModel[o]).applyMatrix3(Se),k=.5*ge.x+.5,N=.5*ge.y+.5,ge.copy(p.vertexNormalsModel[r]).applyMatrix3(Se),F=.5*ge.x+.5,D=.5*ge.y+.5,ge.copy(p.vertexNormalsModel[c]).applyMatrix3(Se),I=.5*ge.x+.5,O=.5*ge.y+.5,E(z,V,j,L,B,P,k,N,F,D,I,O,h.envMap)):(Ee.copy(h.color),h.vertexColors===THREE.FaceColors&&Ee.multiply(p.color),!0===h.wireframe?s(Ee,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(Ee)):h instanceof THREE.MeshDepthMaterial?(Ee.r=Ee.g=Ee.b=1-T(e.positionScreen.z*e.positionScreen.w,S.near,S.far),!0===h.wireframe?s(Ee,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(Ee)):h instanceof THREE.MeshNormalMaterial?(ge.copy(p.normalModel).applyMatrix3(Se),Ee.setRGB(ge.x,ge.y,ge.z).multiplyScalar(.5).addScalar(.5),!0===h.wireframe?s(Ee,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(Ee)):(Ee.setRGB(1,1,1),!0===h.wireframe?s(Ee,h.wireframeLinewidth,h.wireframeLinecap,h.wireframeLinejoin):l(Ee))}function a(e,t,i,n,o,r){ee.beginPath(),ee.moveTo(e,t),ee.lineTo(i,n),ee.lineTo(o,r),ee.closePath()}function s(e,t,i,n){u(t),m(i),v(n),x(e.getStyle()),ee.stroke(),xe.expandByScalar(2*t)}function l(e){R(e.getStyle()),ee.fill()}function c(e){p(e.target)}function p(e){if(!(e instanceof THREE.CompressedTexture)){var t=e.wrapS===THREE.RepeatWrapping,i=e.wrapT===THREE.RepeatWrapping,n=e.image,o=document.createElement("canvas");o.width=n.width,o.height=n.height;var r=o.getContext("2d");r.setTransform(1,0,0,-1,0,n.height),r.drawImage(n,0,0),ue[e.id]=ee.createPattern(o,!0===t&&!0===i?"repeat":!0===t&&!1===i?"repeat-x":!1===t&&!0===i?"repeat-y":"no-repeat")}}function E(e,t,i,n,o,r,a,s,l,E,h,d,f){if(!(f instanceof THREE.DataTexture)){!1===f.hasEventListener("update",c)&&(void 0!==f.image&&f.image.width>0&&p(f),f.addEventListener("update",c));var u=ue[f.id];if(void 0===u)return R("rgba(0,0,0,1)"),void ee.fill();R(u);var m,v,x,y,T,w,H,g,S=f.offset.x/f.repeat.x,M=f.offset.y/f.repeat.y,b=f.image.width*f.repeat.x,C=f.image.height*f.repeat.y;l=(l+S)*b,E=(E+M)*C,h=(h+S)*b,d=(d+M)*C,i-=e,n-=t,o-=e,r-=t,0!==(H=(l-=a=(a+S)*b)*(d-=s=(s+M)*C)-(h-=a)*(E-=s))&&(T=e-(m=(d*i-E*o)*(g=1/H))*a-(x=(l*o-h*i)*g)*s,w=t-(v=(d*n-E*r)*g)*a-(y=(l*r-h*n)*g)*s,ee.save(),ee.transform(m,v,x,y,T,w),ee.fill(),ee.restore())}}function h(e,t,i){var n,o=t.x-e.x,r=t.y-e.y,a=o*o+r*r;0!==a&&(o*=n=i/Math.sqrt(a),r*=n,t.x+=o,t.y+=r,e.x-=o,e.y-=r)}function d(e){ne!==e&&(ee.globalAlpha=e,ne=e)}function f(e){oe!==e&&(e===THREE.NormalBlending?ee.globalCompositeOperation="source-over":e===THREE.AdditiveBlending?ee.globalCompositeOperation="lighter":e===THREE.SubtractiveBlending&&(ee.globalCompositeOperation="darker"),oe=e)}function u(e){se!==e&&(ee.lineWidth=e,se=e)}function m(e){le!==e&&(ee.lineCap=e,le=e)}function v(e){ce!==e&&(ee.lineJoin=e,ce=e)}function x(e){re!==e&&(ee.strokeStyle=e,re=e)}function R(e){ae!==e&&(ee.fillStyle=e,ae=e)}function y(e){pe.length!==e.length&&(ee.setLineDash(e),pe=e)}console.log("THREE.CanvasRenderer",THREE.REVISION);var T=THREE.Math.smoothstep;e=e||{};var w,H,g,S,M,b,C,z,V,j,L,B,P,W,k,N,F,D,I,O,A=this,G=new THREE.Projector,U=void 0!==e.canvas?e.canvas:document.createElement("canvas"),q=U.width,X=U.height,Y=Math.floor(q/2),J=Math.floor(X/2),K=0,Q=0,Z=q,$=X,_=1,ee=U.getContext("2d",{alpha:!0===e.alpha}),te=new THREE.Color(0),ie=!0===e.alpha?0:1,ne=1,oe=0,re=null,ae=null,se=null,le=null,ce=null,pe=[],Ee=(new THREE.RenderableVertex,new THREE.RenderableVertex,new THREE.Color),he=(new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color,new THREE.Color),de=new THREE.Color,fe=new THREE.Color,ue={},me=new THREE.Box2,ve=new THREE.Box2,xe=new THREE.Box2,Re=new THREE.Color,ye=new THREE.Color,Te=new THREE.Color,we=new THREE.Vector3,He=new THREE.Vector3,ge=new THREE.Vector3,Se=new THREE.Matrix3;void 0===ee.setLineDash&&(ee.setLineDash=function(){}),this.domElement=U,this.autoClear=!0,this.sortObjects=!0,this.sortElements=!0,this.info={render:{vertices:0,faces:0}},this.supportsVertexTextures=function(){},this.setFaceCulling=function(){},this.getPixelRatio=function(){return _},this.setPixelRatio=function(e){_=e},this.setSize=function(e,t,i){q=e*_,X=t*_,U.width=q,U.height=X,Y=Math.floor(q/2),J=Math.floor(X/2),!1!==i&&(U.style.width=e+"px",U.style.height=t+"px"),me.min.set(-Y,-J),me.max.set(Y,J),ve.min.set(-Y,-J),ve.max.set(Y,J),ne=1,oe=0,re=null,ae=null,se=null,le=null,ce=null,this.setViewport(0,0,e,t)},this.setViewport=function(e,t,i,n){K=e*_,Q=t*_,Z=i*_,$=n*_},this.setScissor=function(){},this.enableScissorTest=function(){},this.setClearColor=function(e,t){te.set(e),ie=void 0!==t?t:1,ve.min.set(-Y,-J),ve.max.set(Y,J)},this.setClearColorHex=function(e,t){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),this.setClearColor(e,t)},this.getClearColor=function(){return te},this.getClearAlpha=function(){return ie},this.getMaxAnisotropy=function(){return 0},this.clear=function(){!1===ve.empty()&&(ve.intersect(me),ve.expandByScalar(2),ve.min.x=ve.min.x+Y,ve.min.y=-ve.min.y+J,ve.max.x=ve.max.x+Y,ve.max.y=-ve.max.y+J,ie<1&&ee.clearRect(0|ve.min.x,0|ve.max.y,ve.max.x-ve.min.x|0,ve.min.y-ve.max.y|0),ie>0&&(f(THREE.NormalBlending),d(1),R("rgba("+Math.floor(255*te.r)+","+Math.floor(255*te.g)+","+Math.floor(255*te.b)+","+ie+")"),ee.fillRect(0|ve.min.x,0|ve.max.y,ve.max.x-ve.min.x|0,ve.min.y-ve.max.y|0)),ve.makeEmpty())},this.clearColor=function(){},this.clearDepth=function(){},this.clearStencil=function(){},this.render=function(e,i){if(i instanceof THREE.Camera!=!1){!0===this.autoClear&&this.clear(),A.info.render.vertices=0,A.info.render.faces=0,ee.setTransform(Z/q,0,0,-$/X,K,X-Q),ee.translate(Y,J),w=G.projectScene(e,i,this.sortObjects,this.sortElements),H=w.elements,g=w.lights,S=i,Se.getNormalMatrix(i.matrixWorldInverse),t();for(var a=0,s=H.length;a<s;a++){var l=H[a],c=l.material;if(void 0!==c&&0!==c.opacity){if(xe.makeEmpty(),l instanceof THREE.RenderableSprite)(M=l).x*=Y,M.y*=J,n(M,l,c);else if(l instanceof THREE.RenderableLine)M=l.v1,b=l.v2,M.positionScreen.x*=Y,M.positionScreen.y*=J,b.positionScreen.x*=Y,b.positionScreen.y*=J,xe.setFromPoints([M.positionScreen,b.positionScreen]),!0===me.isIntersectionBox(xe)&&o(M,b,l,c);else if(l instanceof THREE.RenderableFace){if(M=l.v1,b=l.v2,C=l.v3,M.positionScreen.z<-1||M.positionScreen.z>1)continue;if(b.positionScreen.z<-1||b.positionScreen.z>1)continue;if(C.positionScreen.z<-1||C.positionScreen.z>1)continue;M.positionScreen.x*=Y,M.positionScreen.y*=J,b.positionScreen.x*=Y,b.positionScreen.y*=J,C.positionScreen.x*=Y,C.positionScreen.y*=J,c.overdraw>0&&(h(M.positionScreen,b.positionScreen,c.overdraw),h(b.positionScreen,C.positionScreen,c.overdraw),h(C.positionScreen,M.positionScreen,c.overdraw)),xe.setFromPoints([M.positionScreen,b.positionScreen,C.positionScreen]),!0===me.isIntersectionBox(xe)&&r(M,b,C,0,1,2,l,c)}ve.union(xe)}}ee.setTransform(1,0,0,1,0,0)}else console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.")}};new function(){function e(){x=window.innerWidth/2,R=window.innerHeight/2,s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}function t(e){m=e.clientX-x,v=e.clientY-R}function i(e){1===e.touches.length&&(e.preventDefault(),m=e.touches[0].pageX-x,v=e.touches[0].pageY-R)}function n(){requestAnimationFrame(n),o()}function o(){s.position.x+=.05*(m-s.position.x),s.position.y+=.05*(-v-s.position.y),s.lookAt(l.position);for(var e=0,t=0;t<d;t++)for(var i=0;i<f;i++)(E=p[e++]).position.y=50*Math.sin(.3*(t+u))+50*Math.sin(.5*(i+u)),E.scale.x=E.scale.y=4*(Math.sin(.3*(t+u))+1)+4*(Math.sin(.5*(i+u))+1);c.render(l,s),u+=.1}var r,a,s,l,c,p,E,h=100,d=50,f=50,u=0,m=-375,v=-470,x=window.innerWidth/2,R=window.innerHeight/2;!function(){(r=document.createElement("div")).id="canvas",(a=document.getElementById("wrap")).appendChild(r),(s=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4)).position.z=1e3,l=new THREE.Scene,p=new Array;for(var n=2*Math.PI,o=new THREE.SpriteCanvasMaterial({color:14343410,program:function(e){e.beginPath(),e.arc(0,0,.5,0,n,!0),e.fill()}}),u=0,m=0;m<d;m++)for(var v=0;v<f;v++)(E=p[u++]=new THREE.Sprite(o)).position.x=m*h-d*h/2,E.position.z=v*h-f*h/2,l.add(E);(c=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),r.appendChild(c.domElement),document.addEventListener("mousemove",t,!1),document.addEventListener("touchmove",i,!1),window.addEventListener("resize",e,!1)}(),n()}}();
