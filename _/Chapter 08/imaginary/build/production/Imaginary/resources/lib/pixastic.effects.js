function _29b175d8c93cadc5707bc4d10917ebef2da02eec(){};Pixastic.Effects=(function(){function a(h,m){var l={};for(var k in m){if(typeof h[k]=="undefined"){l[k]=m[k]}else{l[k]=h[k]}}return l}function f(l,k,h){return Math.min(h,Math.max(k,l))}function c(Z,L,h,k,H,E,Y,v,S){var ab,R,aa,ac,ad,C,t,u,T,J,K,N,M,B,I=0,V=h*k*4,A=H[0][0],z=H[0][1],w=H[0][2],o=H[1][0],m=H[1][1],l=H[1][2],Q=H[2][0],P=H[2][1],O=H[2][2],X,W,U,G,F,D,s,q,p;for(M=0;M<k;++M){C=M*h*4;t=C-h*4;u=C+h*4;if(M<1){t=C}if(M>=h-1){u=C}for(N=0;N<h;++N){ab=(M*h+N)*4;T=N*4;J=T-4;K=T+4;if(N<1){J=T}if(N>=h-1){K=T}X=t+J;W=t+T;U=t+K;G=C+J;F=C+T;D=C+K;s=u+J;q=u+T;p=u+K;R=Z[X]*A+Z[W]*z+Z[U]*w+Z[G]*o+Z[F]*m+Z[D]*l+Z[s]*Q+Z[q]*P+Z[p]*O;aa=Z[X+1]*A+Z[W+1]*z+Z[U+1]*w+Z[G+1]*o+Z[F+1]*m+Z[D+1]*l+Z[s+1]*Q+Z[q+1]*P+Z[p+1]*O;ac=Z[X+2]*A+Z[W+2]*z+Z[U+2]*w+Z[G+2]*o+Z[F+2]*m+Z[D+2]*l+Z[s+2]*Q+Z[q+2]*P+Z[p+2]*O;if(Y){ad=Z[X+3]*A+Z[W+3]*z+Z[U+3]*w+Z[G+3]*o+Z[F+3]*m+Z[D+3]*l+Z[s+3]*Q+Z[q+3]*P+Z[p+3]*O}else{ad=Z[ab+3]}if(S){R=aa=ac=(R+aa+ac)/3}if(v){R=255-R;aa=255-aa;ac=255-ac}L[ab]=R;L[ab+1]=aa;L[ab+2]=ac;L[ab+3]=ad;if(E){B=(ab/V*100>>0)/100;if(B>I){I=E(B)}}}}}function d(h,aO,aB,z,A,R,ar,ah,aF){var aC,T,ai,aj,al,N,E,J,P,at,ak,W,ac,S,au,Q,O,aA,q=0,Y=aB*z*4,aq=A[0][0],ap=A[0][1],ao=A[0][2],an=A[0][3],am=A[0][4],af=A[1][0],ad=A[1][1],aa=A[1][2],X=A[1][3],U=A[1][4],K=A[2][0],H=A[2][1],F=A[2][2],C=A[2][3],B=A[2][4],u=A[3][0],s=A[3][1],o=A[3][2],l=A[3][3],k=A[3][4],aM=A[4][0],aK=A[4][1],aI=A[4][2],aG=A[4][3],aD=A[4][4],ag,ae,ab,Z,V,M,L,I,G,D,w,v,t,p,m,aN,aL,aJ,aH,aE,az,ay,ax,aw,av;for(O=0;O<z;++O){N=O*aB*4;E=N-aB*4;P=N-aB*4*2;J=N+aB*4;at=N+aB*4*2;if(O<1){E=N}if(O>=aB-1){J=N}if(O<2){P=E}if(O>=aB-2){at=J}for(Q=0;Q<aB;++Q){aC=(O*aB+Q)*4;ak=Q*4;W=ak-4;ac=ak+4;S=ak-8;au=ak+8;if(Q<1){W=ak}if(Q>=aB-1){ac=ak}if(Q<2){S=W}if(Q>=aB-2){au=ac}ag=P+S;ae=P+W;ab=P+ak;Z=P+ac;V=P+au;M=E+S;L=E+W;I=E+ak;G=E+ac;D=E+au;w=N+S;v=N+W;t=N+ak;p=N+ac;m=N+au;aN=J+S;aL=J+W;aJ=J+ak;aH=J+ac;aE=J+au;az=at+S;ay=at+W;ax=at+ak;aw=at+ac;av=at+au;T=h[ag]*aq+h[ae]*ap+h[ab]*ao+h[Z]*am+h[ab]*am+h[M]*af+h[L]*ad+h[I]*aa+h[G]*U+h[I]*U+h[w]*K+h[v]*H+h[t]*F+h[p]*B+h[t]*B+h[aN]*u+h[aL]*s+h[aJ]*o+h[aH]*k+h[aJ]*k+h[az]*aM+h[ay]*aK+h[ax]*aI+h[aw]*aD+h[ax]*aD;ai=h[ag+1]*aq+h[ae+1]*ap+h[ab+1]*ao+h[Z+1]*am+h[ab+1]*am+h[M+1]*af+h[L+1]*ad+h[I+1]*aa+h[G+1]*U+h[I+1]*U+h[w+1]*K+h[v+1]*H+h[t+1]*F+h[p+1]*B+h[t+1]*B+h[aN+1]*u+h[aL+1]*s+h[aJ+1]*o+h[aH+1]*k+h[aJ+1]*k+h[az+1]*aM+h[ay+1]*aK+h[ax+1]*aI+h[aw+1]*aD+h[ax+1]*aD;aj=h[ag+2]*aq+h[ae+2]*ap+h[ab+2]*ao+h[Z+2]*am+h[ab+2]*am+h[M+2]*af+h[L+2]*ad+h[I+2]*aa+h[G+2]*U+h[I+2]*U+h[w+2]*K+h[v+2]*H+h[t+2]*F+h[p+2]*B+h[t+2]*B+h[aN+2]*u+h[aL+2]*s+h[aJ+2]*o+h[aH+2]*k+h[aJ+2]*k+h[az+2]*aM+h[ay+2]*aK+h[ax+2]*aI+h[aw+2]*aD+h[ax+2]*aD;if(ar){al=h[ag+3]*aq+h[ae+3]*ap+h[ab+3]*ao+h[Z+3]*am+h[ab+3]*am+h[M+3]*af+h[L+3]*ad+h[I+3]*aa+h[G+3]*U+h[I+3]*U+h[w+3]*K+h[v+3]*H+h[t+3]*F+h[p+3]*B+h[t+3]*B+h[aN+3]*u+h[aL+3]*s+h[aJ+3]*o+h[aH+3]*k+h[aJ+3]*k+h[az+3]*aM+h[ay+3]*aK+h[ax+3]*aI+h[aw+3]*aD+h[ax+3]*aD}else{al=h[aC+3]}if(aF){T=ai=aj=(T+ai+aj)/3}if(ah){T=255-T;ai=255-ai;aj=255-aj}aO[aC]=T;aO[aC+1]=ai;aO[aC+2]=aj;aO[aC+3]=al;if(R){aA=(aC/Y*100>>0)/100;if(aA>q){q=R(aA)}}}}}function e(K,N,C,A,O,k){var z,F,H,J,v,B=C*A*4,t,s,E,D,M,L,u,h=[],p=13,O=f(O,3,p),q=-O/2+(O%2?0.5:0),o=O+q,G,m=[[1]],l,I=0;for(E=1;E<p;++E){m[0][E]=0}for(E=1;E<p;++E){m[E]=[1];for(D=1;D<p;++D){m[E][D]=m[E-1][D]+m[E-1][D-1]}}G=m[O-1];for(E=0,u=0;E<O;++E){u+=G[E]}for(E=0;E<O;++E){G[E]/=u}for(s=0;s<A;++s){for(t=0;t<C;++t){z=F=H=J=0;for(E=q;E<o;++E){M=t+E;L=s;u=G[E-q];if(M<0){M=0}if(M>=C){M=C-1}v=(L*C+M)*4;z+=K[v]*u;F+=K[v+1]*u;H+=K[v+2]*u;J+=K[v+3]*u}v=(s*C+t)*4;h[v]=z;h[v+1]=F;h[v+2]=H;h[v+3]=J;if(k){l=(v/B*50>>0)/100;if(l>I){I=k(l)}}}}I=0;for(s=0;s<A;++s){for(t=0;t<C;++t){z=F=H=J=0;for(E=q;E<o;++E){M=t;L=s+E;u=G[E-q];if(L<0){L=0}if(L>=A){L=A-1}v=(L*C+M)*4;z+=h[v]*u;F+=h[v+1]*u;H+=h[v+2]*u;J+=h[v+3]*u}v=(s*C+t)*4;N[v]=z;N[v+1]=F;N[v+2]=H;N[v+3]=J;if(k){l=0.5+(v/B*50>>0)/100;if(l>I){I=k(l)}}}}}return{invert:function(o,q,k,s,t,h){var l=k*s*4,p,m=0;for(i=0;i<l;i+=4){q[i]=255-o[i];q[i+1]=255-o[i+1];q[i+2]=255-o[i+2];q[i+3]=o[i+3];if(h){p=(i/l*100>>0)/100;if(p>m){m=h(p)}}}},sepia:function(q,v,l,w,x,k){var m=l*w*4,s,o=0,h,t,u;for(var p=0;p<m;p+=4){h=q[p];t=q[p+1];u=q[p+2];v[p]=(h*0.393+t*0.769+u*0.189);v[p+1]=(h*0.349+t*0.686+u*0.168);v[p+2]=(h*0.272+t*0.534+u*0.131);v[p+3]=q[p+3];if(k){s=(p/m*100>>0)/100;if(s>o){o=k(s)}}}},solarize:function(p,u,l,v,w,k){var m=l*v*4,q,o=0,h,s,t;for(i=0;i<m;i+=4){h=p[i];s=p[i+1];t=p[i+2];u[i]=h>127?255-h:h;u[i+1]=s>127?255-s:s;u[i+2]=t>127?255-t:t;u[i+3]=p[i+3];if(k){q=(i/m*100>>0)/100;if(q>o){o=k(q)}}}},brightness:function(u,z,m,A,B,k){B=a(B,{brightness:0,contrast:0});var q=f(B.contrast,-1,1)/2,y=1+f(B.brightness,-1,1),v,p=0,h,w,x,o=m*A*4;var t=y<0?-y:y;var l=y<0?0:y;q=0.5*Math.tan((q+1)*Math.PI/4);contrastAdd=-(q-0.5)*255;for(var s=0;s<o;s+=4){h=u[s];w=u[s+1];x=u[s+2];h=(h+h*t+l)*q+contrastAdd;w=(w+w*t+l)*q+contrastAdd;x=(x+x*t+l)*q+contrastAdd;z[s]=h;z[s+1]=w;z[s+2]=x;z[s+3]=u[s+3];if(k){v=(s/o*100>>0)/100;if(v>p){p=k(v)}}}},desaturate:function(q,t,l,u,v,h){var m=l*u*4,s,o=0,k;for(var p=0;p<m;p+=4){k=q[p]*0.3+q[p+1]*0.59+q[p+2]*0.11;t[p]=k;t[p+1]=k;t[p+2]=k;t[p+3]=q[p+3];if(h){s=(p/m*100>>0)/100;if(s>o){o=h(s)}}}},lighten:function(q,t,k,u,v,h){var l=k*u*4,s,o=0,m=1+f(v.amount,0,1);for(var p=0;p<l;p+=4){t[p]=q[p]*m;t[p+1]=q[p+1]*m;t[p+2]=q[p+2]*m;t[p+3]=q[p+3];if(h){s=(p/l*100>>0)/100;if(s>o){o=h(s)}}}},noise:function(A,C,u,s,k,l){var t=u*s*4,o,B=0,m=f(k.amount,0,1),z=f(k.strength,0,1),v=!!k.mono,h=Math.random,p,q,x,y;for(var w=0;w<t;w+=4){q=A[w];x=A[w+1];y=A[w+2];p=h();if(p<m){if(v){p=z*((p/m)*2-1)*255;q+=p;x+=p;y+=p}else{q+=z*h()*255;x+=z*h()*255;y+=z*h()*255}}C[w]=q;C[w+1]=x;C[w+2]=y;C[w+3]=A[w+3];if(l){o=(w/t*100>>0)/100;if(o>B){B=l(o)}}}},flipv:function(p,u,k,w,z,h){var v,m,l=k*w*4,q,o=0,t,s;for(s=0;s<w;++s){for(t=0;t<k;++t){v=(s*k+t)*4;m=(s*k+(k-t-1))*4;u[m]=p[v];u[m+1]=p[v+1];u[m+2]=p[v+2];u[m+3]=p[v+3];if(h){q=(v/l*100>>0)/100;if(q>o){o=h(q)}}}}},fliph:function(p,u,k,w,z,h){var v,m,l=k*w*4,q,o=0,t,s;for(s=0;s<w;++s){for(t=0;t<k;++t){v=(s*k+t)*4;m=((w-s-1)*k+t)*4;u[m]=p[v];u[m+1]=p[v+1];u[m+2]=p[v+2];u[m+3]=p[v+3];if(h){q=(v/l*100>>0)/100;if(q>o){o=h(q)}}}}},blur:function(k,o,n,h,m,l){e(k,o,n,h,m.kernelSize,l)},glow:function(s,y,l,z,A,k){var m=l*z*4,q,h,v,x,u=A.amount,p=[],w,t,o=0;if(k){w=function(n){k(n*0.8);return n}}e(s,p,l,z,A.kernelSize,w);for(q=0;q<m;q+=4){h=s[q]+p[q]*u;v=s[q+1]+p[q+1]*u;x=s[q+2]+p[q+2]*u;if(h>255){h=255}if(v>255){v=255}if(x>255){x=255}y[q]=h;y[q+1]=v;y[q+2]=x;y[q+3]=s[q+3];if(k){t=0.8+(q/m*100>>0)/100*0.2;if(t>o){o=k(t)}}}},convolve3x3:function(k,o,n,h,m,l){c(k,o,n,h,m.kernel,l)},convolve5x5:function(k,o,n,h,m,l){d(k,o,n,h,m.kernel,l)},sharpen3x3:function(k,p,o,h,n,m){var l=-f(n.strength,0,1);c(k,p,o,h,[[l,l,l],[l,1-l*8,l],[l,l,l]],m)},sharpen5x5:function(k,p,o,h,n,m){var l=-f(n.strength,0,1);d(k,p,o,h,[[l,l,l,l,l],[l,l,l,l,l],[l,l,1-l*24,l,l],[l,l,l,l,l],[l,l,l,l,l]],m)},soften3x3:function(k,o,n,h,m,l){var p=1/9;c(k,o,n,h,[[p,p,p],[p,p,p],[p,p,p]],l)},soften5x5:function(k,o,n,h,m,l){var p=1/25;d(k,o,n,h,[[p,p,p,p,p],[p,p,p,p,p],[p,p,p,p,p],[p,p,p,p,p],[p,p,p,p,p]],l)},crossedges:function(k,p,o,h,n,m){var l=f(n.strength,0,1)*5;c(k,p,o,h,[[0,-l,0],[-l,0,l],[0,l,0]],m,false,true)},emboss:function(G,K,C,v,k,m){var p=k.amount,E=k.angle,u=Math.cos(-E)*p,t=Math.sin(-E)*p,B=C*v*4,J=-u-t,o=-u,A=t-u,I=-t,z=t,H=-t+u,l=u,w=t+u,h=[],q,F=0,s;if(m){s=function(n){m(n*0.5);return n}}c(G,h,C,v,[[J,I,H],[o,0,l],[A,z,w]]);for(var D=0;D<B;D+=4){K[D]=128+h[D];K[D+1]=128+h[D+1];K[D+2]=128+h[D+2];K[D+3]=G[D+3];if(m){q=0.5+(D/B*100>>0)/100*0.5;if(q>F){F=m(q)}}}},findedges:function(A,D,u,s,h,p){var t=u*s*4,x,m=[],k=[],w,v,E,C,o,l,q,z=0,B,y;if(p){B=function(n){p(n*0.4);return n};y=function(n){p(0.4+n*0.4);return n}}c(A,m,u,s,[[-1,0,1],[-2,0,2],[-1,0,1]]);c(A,k,u,s,[[-1,-2,-1],[0,0,0],[1,2,1]]);for(x=0;x<t;x+=4){w=m[x];v=k[x];E=m[x+1];C=k[x+1];o=m[x+2];l=k[x+2];if(w<0){w=-w}if(v<0){v=-v}if(E<0){E=-E}if(C<0){C=-C}if(o<0){o=-o}if(l<0){l=-l}D[x]=255-(w+v)*0.8;D[x+1]=255-(E+C)*0.8;D[x+2]=255-(o+l)*0.8;D[x+3]=A[x+3];if(p){q=0.8+(x/t*100>>0)/100*0.2;if(q>z){z=p(q)}}}},edgeenhance3x3:function(k,o,n,h,m,l){c(k,o,n,h,[[-1/9,-1/9,-1/9],[-1/9,17/9,-1/9],[-1/9,-1/9,-1/9]],l)},edgeenhance5x5:function(k,o,n,h,m,l){d(k,o,n,h,[[-1/25,-1/25,-1/25,-1/25,-1/25],[-1/25,-1/25,-1/25,-1/25,-1/25],[-1/25,-1/25,49/25,-1/25,-1/25],[-1/25,-1/25,-1/25,-1/25,-1/25],[-1/25,-1/25,-1/25,-1/25,-1/25]],l)},laplace3x3:function(k,o,n,h,m,l){c(k,o,n,h,[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]],l,false,true,true)},laplace5x5:function(k,o,n,h,m,l){d(k,o,n,h,[[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,24,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1]],l,false,true,true)},coloradjust:function(s,x,l,y,A,k){var m=l*y*4,h,u,v,t,p=0,o=f(A.r,-1,1)*255,w=f(A.g,-1,1)*255,z=f(A.b,-1,1)*255;for(var q=0;q<m;q+=4){h=s[q]+o;u=s[q+1]+w;v=s[q+2]+z;if(h<0){h=0}if(u<0){u=0}if(v<0){v=0}if(h>255){h=255}if(u>255){u=255}if(v>255){v=255}x[q]=h;x[q+1]=u;x[q+2]=v;x[q+3]=s[q+3];if(k){t=(q/m*100>>0)/100;if(t>p){p=k(t)}}}},colorfilter:function(K,M,x,v,k,p){var w=x*v*4,D,t,F,I,o=!!k.luminosity,q,L=0,B,C,E,A,s,z,H,y,u=f(k.r,0,1),G=f(k.g,0,1),J=f(k.b,0,1);for(D=0;D<w;D+=4){t=K[D]/255;F=K[D+1]/255;I=K[D+2]/255;A=t*0.3+F*0.59+I*0.11;t=(t+t*u)/2;F=(F+F*G)/2;I=(I+I*J)/2;if(o){B=C=t;if(F>C){C=F}if(I>C){C=I}if(F<B){B=F}if(I<B){B=I}z=(C-B);if(t==C){E=((F-I)/z)%6}else{if(F==C){E=((I-t)/z)+2}else{E=((t-F)/z)+4}}s=E>>0;H=z*(E-s);t=F=I=A-(t*0.3+F*0.59+I*0.11);if(s==0){t+=z;F+=H}else{if(s==1){t+=z-H;F+=z}else{if(s==2){F+=z;I+=H}else{if(s==3){F+=z-H;I+=z}else{if(s==4){t+=H;I+=z}else{if(s==5){t+=z;I+=z-H}}}}}}}M[D]=t*255;M[D+1]=F*255;M[D+2]=I*255;M[D+3]=K[D+3];if(p){q=(D/w*100>>0)/100;if(q>L){L=p(q)}}}},hsl:function(N,P,D,B,o,t){var C=D*B*4,p=f(o.hue,-1,1),q=f(o.saturation,-1,1),O=f(o.lightness,-1,1),w=1+q*(q<0?1:2),K=O<0?1+O:1-O,A=O<0?0:O*255,H,E,L,J,z,G,y,F,k,x,u,M=0;p=(p*6)%6;for(var I=0;I<C;I+=4){r=N[I];g=N[I+1];b=N[I+2];if(p!=0||q!=0){H=r;if(g>H){H=g}if(b>H){H=b}E=r;if(g<E){E=g}if(b<E){E=b}L=(H-E);G=(E+H)/510;if(G>0&&L>0){if(G<=0.5){z=L/(H+E)*w;if(z>1){z=1}y=(G*(1+z))}else{z=L/(510-H-E)*w;if(z>1){z=1}y=(G+z-G*z)}if(r==H){if(g==E){J=5+((H-b)/L)+p}else{J=1-((H-g)/L)+p}}else{if(g==H){if(b==E){J=1+((H-r)/L)+p}else{J=3-((H-b)/L)+p}}else{if(r==E){J=3+((H-g)/L)+p}else{J=5-((H-r)/L)+p}}}if(J<0){J+=6}if(J>=6){J-=6}F=(G+G-y);x=J>>0;k=(y-F)*(J-x);if(x==0){r=y;g=F+k;b=F}else{if(x==1){r=y-k;g=y;b=F}else{if(x==2){r=F;g=y;b=F+k}else{if(x==3){r=F;g=y-k;b=y}else{if(x==4){r=F+k;g=F;b=y}else{if(x==5){r=y;g=F;b=y-k}}}}}}r*=255;g*=255;b*=255}}r=r*K+A;g=g*K+A;b=b*K+A;if(r<0){r=0}if(g<0){g=0}if(b<0){b=0}if(r>255){r=255}if(g>255){g=255}if(b>255){b=255}P[I]=r;P[I+1]=g;P[I+2]=b;P[I+3]=N[I+3];if(t){u=(I/C*100>>0)/100;if(u>M){M=t(u)}}}},posterize:function(q,w,m,y,z,k){var x=f(z.levels,2,256),l=256/x,v=256/(x-1),h,t,u,o=m*y*4,s,p=0;for(i=0;i<o;i+=4){w[i]=v*((q[i]/l)>>0);w[i+1]=v*((q[i+1]/l)>>0);w[i+2]=v*((q[i+2]/l)>>0);w[i+3]=q[i+3];if(k){s=(i/o*100>>0)/100;if(s>p){p=k(s)}}}},removenoise:function(M,O,E,C,l,p){var B,H,K,J,v,w,A,k,G,I,F,u,z,h,o,t,N,m,s,D,q,L=0;D=E*C*4;for(v=0;v<C;++v){k=v*E*4;G=k-E*4;I=k+E*4;if(v<1){G=k}if(v>=E-1){I=k}for(w=0;w<E;++w){A=(v*E+w)*4;F=w*4;u=F-4;z=F+4;if(w<1){u=F}if(w>=E-1){z=F}h=N=M[k+u];J=M[k+z];if(J<h){h=J}if(J>N){N=J}J=M[G+F];if(J<h){h=J}if(J>N){N=J}J=M[I+F];if(J<h){h=J}if(J>N){N=J}o=M[k+u+1];J=M[k+z+1];if(J<o){o=J}J=M[G+F+1];if(J<o){o=J}J=M[I+F+1];if(J<o){o=J}t=M[k+u+2];J=M[k+z+2];if(J<t){t=J}J=M[G+F+2];if(J<t){t=J}J=M[I+F+2];if(J<t){t=J}B=M[A];H=M[A+1];K=M[A+2];if(B<h){B=h}if(B>N){B=N}if(H<o){H=o}if(H>m){H=m}if(K<t){K=t}if(K>s){K=s}O[A]=B;O[A+1]=H;O[A+2]=K;O[A+3]=M[A+3];if(p){q=(A/D*100>>0)/100;if(q>L){L=p(q)}}}}},mosaic:function(E,F,y,w,l,o){var p=f(l.blockSize,1,Math.max(y,w)),s=Math.ceil(w/p),v=Math.ceil(y/p),k,h,B,A,u,m,x=s*v,q,D=0;for(i=0,k=0,bidx=0;i<s;i++){h=f(k+p,0,w);for(j=0,B=0;j<v;j++,bidx++){A=f(B+p,0,y);u=(k*y+B)<<2;var t=E[u],z=E[u+1],C=E[u+2];for(bi=k;bi<h;bi++){for(bj=B;bj<A;bj++){m=(bi*y+bj)<<2;F[m]=t,F[m+1]=z,F[m+2]=C;F[m+3]=E[m+3]}}B=A;if(o){q=(bidx/x*100>>0)/100;if(q>D){D=o(q)}}}k=h}},equalize:function(v,y,o,z,B,h){var q=o*z,m,u,k,x,w,t;var A=Math.round;var l=new Array(256);for(u=0;u<256;u++){l[u]=0}for(u=0;u<q;u++){m=u*4;k=f(A(v[m]*0.3+v[m+1]*0.59+v[m+2]*0.11),0,255);y[m+3]=k;l[k]++}var s=new Array(256);s[0]=l[0];for(u=1;u<256;u++){s[u]=s[u-1]+l[u]}for(u=0;u<256;u++){s[u]=s[u]/q*255}for(u=0;u<q;u++){m=u*4;k=y[m+3];x=s[k]/(k||1);y[m]=f(A(v[m]*x),0,255);y[m+1]=f(A(v[m+1]*x),0,255);y[m+2]=f(A(v[m+2]*x),0,255);y[m+3]=v[m+3];if(h){w=(u/q*100>>0)/100;if(w>t){t=h(w)}}}}}})();