import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  quantC: number;
  quantT: number;
  verbalC: number;
  verbalT: number;

  constructor(public alertController: AlertController) {}

  someFunction() {

    // total score bar quantitative bar verbal bar

    const elem = document.getElementById('myBar');
    const elem2 = document.getElementById('myBar2');
    const elem3 = document.getElementById('myBar3');
    const elem4 = document.getElementById('myBar4');
    const elem5 = document.getElementById('myBar5');
    const elem7 = document.getElementById('myBar7');

    const elemq = document.getElementById('myBarq');
    const elemq2 = document.getElementById('myBarq2');
    const elemq3 = document.getElementById('myBarq3');
    const elemq4 = document.getElementById('myBarq4');
    const elemq5 = document.getElementById('myBarq5');
    const elemq7 = document.getElementById('myBarq7');

    const elemv = document.getElementById('myBarv');
    const elemv2 = document.getElementById('myBarv2');
    const elemv3 = document.getElementById('myBarv3');
    const elemv4 = document.getElementById('myBarv4');
    const elemv5 = document.getElementById('myBarv5');
    const elemv7 = document.getElementById('myBarv7');

    // evaulation output containers

    const estimated = document.getElementById('estimated');
    const equant = document.getElementById('equant');
    const everbal = document.getElementById('everbal');

    // total score fill bar quantitative fill bar verbal fill bar

    const myProgress = document.getElementById('myProgress');
    const myProgress2 = document.getElementById('myProgress2');
    const myProgress3 = document.getElementById('myProgress3');
    const myProgress4 = document.getElementById('myProgress4');
    const myProgress5 = document.getElementById('myProgress5');
    const myProgress6 = document.getElementById('myProgress6');
    const myProgress7 = document.getElementById('myProgress7');

    const myProgressq = document.getElementById('myProgressq');
    const myProgressq2 = document.getElementById('myProgressq2');
    const myProgressq3 = document.getElementById('myProgressq3');
    const myProgressq4 = document.getElementById('myProgressq4');
    const myProgressq5 = document.getElementById('myProgressq5');
    const myProgressq6 = document.getElementById('myProgressq6');
    const myProgressq7 = document.getElementById('myProgressq7');

    const myProgressv = document.getElementById('myProgressv');
    const myProgressv2 = document.getElementById('myProgressv2');
    const myProgressv3 = document.getElementById('myProgressv3');
    const myProgressv4 = document.getElementById('myProgressv4');
    const myProgressv5 = document.getElementById('myProgressv5');
    const myProgressv6 = document.getElementById('myProgressv6');
    const myProgressv7 = document.getElementById('myProgressv7');

    // initializing bar width for various timestamps

    const progresswidth = 100;
    const widthnew = 0;

    elem.style.width = widthnew + '%';
    elem2.style.width = widthnew + '%';
    elem3.style.width = widthnew + '%';
    elem4.style.width = widthnew + '%';
    elem5.style.width = widthnew + '%';
    elem7.style.width = widthnew + '%';

    elemq.style.width = widthnew + '%';
    elemq2.style.width = widthnew + '%';
    elemq3.style.width = widthnew + '%';
    elemq4.style.width = widthnew + '%';
    elemq5.style.width = widthnew + '%';
    elemq7.style.width = widthnew + '%';

    elemv.style.width = widthnew + '%';
    elemv2.style.width = widthnew + '%';
    elemv3.style.width = widthnew + '%';
    elemv4.style.width = widthnew + '%';
    elemv5.style.width = widthnew + '%';
    elemv7.style.width = widthnew + '%';

    // emptying previously loaded values

    elem.textContent = '';
    elem2.textContent = '';
    elem3.textContent = '';
    elem4.textContent = '';
    elem5.textContent = '';
    elem7.textContent = '';

    elemq.textContent = '';
    elemq2.textContent = '';
    elemq3.textContent = '';
    elemq4.textContent = '';
    elemq5.textContent = '';
    elemq7.textContent = '';

    elemv.textContent = '';
    elemv2.textContent = '';
    elemv3.textContent = '';
    elemv4.textContent = '';
    elemv5.textContent = '';
    elemv7.textContent = '';

    // header definition

    const quantheader = document.getElementById('quantheader');
    const verbalheader = document.getElementById('verbalheader');

    // verification of input

    if (this.quantC === null || this.quantT === null || this.verbalC === null || this.verbalT === null) {
      this.alertController.create({
        header: 'Invalid Input', message: 'Please enter all 4 Fields',
        buttons: ['Okay']
      }).then(alertEl => alertEl.present());
    } else if (this.quantC === undefined || this.quantT === undefined || this.verbalC === undefined || this.verbalT === undefined) {
      this.alertController.create({
        header: 'Invalid Input', message: 'Please enter all 4 Fields',
        buttons: ['Okay']
      }).then(alertEl => alertEl.present());
    } else {
      if (this.quantC < 0 || this.quantT < 0 || this.verbalC < 0 || this.verbalT < 0 ) {
        this.alertController.create({
          header: 'Invalid Input', message: 'Please enter valid marks',
          buttons: ['Okay']
        }).then(alertEl => alertEl.present());
      } else {
        if (this.quantC > 60 || this.quantT > 60 || this.verbalC > 60 || this.verbalT > 60){
          this.alertController.create({
            header: 'Invalid Input', message: 'Please enter valid marks',
            buttons: ['Okay']
          }).then(alertEl => alertEl.present());
        } else {

          // progress bars

          const totalMarks = 200 + (this.quantC +  this.verbalC) * 5;
          const totalExpectation = 200 + (this.quantT + this.verbalT) * 5;
          const qc = 0 + (this.quantC) * 1;
          const qt = 0 + (this.quantT) * 1;
          const vc = 0 + (this.verbalC) * 1;
          const vt = 0 + (this.verbalT) * 1;

          document.getElementById('total-marks').innerHTML = '<p>Total Score<p>' + totalMarks.toString(10);

          myProgress.style.width = progresswidth + '%';
          myProgress2.style.width = progresswidth + '%';
          myProgress3.style.width = progresswidth + '%';
          myProgress4.style.width = progresswidth + '%';
          myProgress5.style.width = progresswidth + '%';
          myProgress6.style.width = progresswidth + '%';
          myProgress7.style.width = progresswidth + '%';

          myProgressq.style.width = progresswidth + '%';
          myProgressq2.style.width = progresswidth + '%';
          myProgressq3.style.width = progresswidth + '%';
          myProgressq4.style.width = progresswidth + '%';
          myProgressq5.style.width = progresswidth + '%';
          myProgressq6.style.width = progresswidth + '%';
          myProgressq7.style.width = progresswidth + '%';

          myProgressv.style.width = progresswidth + '%';
          myProgressv2.style.width = progresswidth + '%';
          myProgressv3.style.width = progresswidth + '%';
          myProgressv4.style.width = progresswidth + '%';
          myProgressv5.style.width = progresswidth + '%';
          myProgressv6.style.width = progresswidth + '%';
          myProgressv7.style.width = progresswidth + '%';

          let width1 = 10;
          let width2 = 10;
          let width3 = 10;
          let width4 = 10;
          let width5 = 10;
          let width6 = 10;
          let width7 = 10;
          let width8 = 10;
          let width9 = 10;

          if (totalMarks + 40 <  totalExpectation) {
            const id3 = setInterval(frame3, 10);
            elem7.style.backgroundColor = '#ffe28a';
            function frame3() {
            if (width3 >= (((((totalExpectation - totalMarks) / 2) + totalMarks) / 800) * 100) + 1) {
              clearInterval(id3);
            } else {
              width3++;
              elem7.style.width = width3 + '%';
              elem7.textContent = ' + ' + (totalExpectation - totalMarks).toString(10);
            }
          }
          } else if (totalExpectation > totalMarks) {
            const id3 = setInterval(frame3, 10);
            elem5.style.backgroundColor = '#f5f5f5';
            function frame3() {
            if (width3 >= (( totalExpectation / 800) * 100) + 3) {
              clearInterval(id3);
            } else {
              width3++;
              elem5.style.width = width3 + '%';
              elem5.innerHTML = ' +' + (totalExpectation - totalMarks).toString(10);
            }
          }
          }
          const id = setInterval(frame, 10);
          function frame() {
          if (width1 >= (totalExpectation / 800) * 100) {
            clearInterval(id);
          } else {
            width1++;
            elem.style.width = width1 + '%';
            elem4.style.width = width1 + '%';
            // elem.textContent = totalExpectation.toString(10);
            elem4.innerHTML = '<p style = "color: #ffe28a"> &#9650</p>' + totalExpectation.toString(10);

          }
          const id2 = setInterval(frame2, 10);
          function frame2() {
          if (width2 >= (totalMarks / 800) * 100) {
            clearInterval(id2);
          } else {
            width2++;
            elem2.style.width = width2 + '%';
            elem3.style.width = width2 + '%';
            // elem2.textContent = totalMarks.toString(10);
            elem3.innerHTML = totalMarks.toString(10) + '<p style = "color: #0fa2eb"> &#9660</p>';
          }
        }
        }



          if (qc + 3 <  qt) {
            const id4 = setInterval(frame4, 10);
            elemq7.style.backgroundColor = '#ffe28a';
            function frame4() {
            if (width4 >= (((((qt - qc) / 2) + qc) / 60) * 100) + 1) {
              clearInterval(id4);
            } else {
              width4++;
              elemq7.style.width = width4 + '%';
              elemq7.textContent = ' +' + (qt - qc).toString(10);
            }
          }
          } else if (qt > qc) {
            const id4 = setInterval(frame4, 10);
            elemq5.style.backgroundColor = '#f5f5f5';
            function frame4() {
            if (width4 >= (( qt / 60) * 100) + 5) {
              clearInterval(id4);
            } else {
              width4++;
              elemq5.style.width = width4 + '%';
              elemq5.innerHTML = ' + ' + (qt - qc).toString(10);
            }
          }
          }
          const id5 = setInterval(frame5, 10);
          function frame5() {
          if (width5 >= (qt / 60) * 100) {
            clearInterval(id5);
          } else {
            width5++;
            elemq.style.width = width5 + '%';
            elemq4.style.width = width5 + '%';
            elemq4.innerHTML = '<p style = "color: #ffe28a"> &#9650</p>' + 'Q' + qt.toString(10);

          }
          const id6 = setInterval(frame6, 1);
          function frame6() {
          if (width6 >= (qc / 60) * 100) {
            clearInterval(id6);
          } else {
            width6++;
            elemq2.style.width = width6 + '%';
            elemq3.style.width = width6 + '%';
            elemq3.innerHTML = 'Q' + qc.toString(10) + '<p style = "color: #0fa2eb"> &#9660</p>';
          }
        }
        }



          if (vc + 3 <  vt) {
            const id7 = setInterval(frame7, 10);
            elemv7.style.backgroundColor = '#ffe28a';
            function frame7() {
            if (width7 >= (((((vt - vc) / 2) + vc) / 60) * 100) + 1) {
              clearInterval(id7);
            } else {
              width7++;
              elemv7.style.width = width7 + '%';
              elemv7.textContent = ' +' + (vt - vc).toString(10);
            }
          }
          } else if (vt > vc) {
            const id7 = setInterval(frame7, 10);
            elemv5.style.backgroundColor = '#f5f5f5';
            function frame7() {
            if (width7 >= (( vt / 60) * 100) + 5) {
              clearInterval(id7);
            } else {
              width7++;
              elemv5.style.width = width7 + '%';
              elemv5.innerHTML = ' + ' + (vt - vc).toString(10);
            }
          }
          }
          const id8 = setInterval(frame8, 10);
          function frame8() {
          if (width8 >= (vt / 60) * 100) {
            clearInterval(id8);
          } else {
            width8++;
            elemv.style.width = width8 + '%';
            elemv4.style.width = width8 + '%';
            elemv4.innerHTML = '<p style = "color: #ffe28a"> &#9650</p>' + 'V' + vt.toString(10);

          }
          const id9 = setInterval(frame9, 1);
          function frame9() {
          if (width9 >= (vc / 60) * 100) {
            clearInterval(id9);
          } else {
            width9++;
            elemv2.style.width = width9 + '%';
            elemv3.style.width = width9 + '%';
            elemv3.innerHTML = 'V' + qc.toString(10) + '<p style = "color: #0fa2eb"> &#9660</p>';
          }
        }
        }


        // text content

          let quantcolumn = '';
          let verbalcolumn = '';
          const quantheaderstring = '<h3>Q' + this.quantC + '</h3>';
          quantheader.innerHTML = '<h5>Quant Score</h5>' + quantheaderstring;
          const verbalheaderstring = '<h3>V' + this.verbalC + '</h3>';
          verbalheader.innerHTML = '<h5>Verbal Score</h5>' + verbalheaderstring;



          if (totalExpectation > totalMarks) {
              const evaluation = 'Your estimated GMAT score per your performance in this mock test is ' +
              totalMarks.toString(10) + ' which is ' + (totalExpectation - totalMarks).toString(10).bold()
              + ' points lower than your target GMAT score of ' + totalExpectation.toString(10) + '.';
              estimated.innerHTML = evaluation;
          } else if (totalExpectation === totalMarks) {
            const evaluation = 'Your estimated GMAT score per your performance in this mock test is ' +
            totalMarks.toString(10) + ' which is equal to your target score.';
            estimated.innerHTML = evaluation;
          } else {
            const evaluation = 'Your estimated GMAT score per your performance in this mock test is ' +
            totalMarks.toString(10) + ' which is ' + (totalMarks - totalExpectation).toString(10).bold()
            + ' points higher than your target GMAT score of ' + totalExpectation.toString(10) + '.';
            estimated.innerHTML = evaluation;
          }

          if (this.quantC > this.quantT) {
            quantcolumn = 'Your estimated quantitative score per your performance in this mock test is Q' +
            this.quantC + ' which is ' + (this.quantC - this.quantT).toString(10).bold()
            + ' points higher than your target quantitative score of Q' + this.quantT.toString(10) + '.';
            equant.innerHTML = quantcolumn;
          } else if (this.quantC === this.quantT) {
            quantcolumn = 'Your estimated quantitative score per your performance in this mock test is Q' +
            this.quantC.toString(10) + ' which is equal to your target score.';
            equant.innerHTML = quantcolumn;
          } else {
            quantcolumn = 'Your estimated quantitative score per your performance in this mock test is Q' +
            this.quantC + ' which is ' + (this.quantT - this.quantC).toString(10).bold()
            + ' points lower than your target quantitative score of Q' + this.quantT.toString(10) + '.';
            equant.innerHTML = quantcolumn;
          }

          if (this.verbalC > this.verbalT) {
            verbalcolumn = 'Your estimated verbal score per your performance in this mock test is V' +
            this.verbalC + ' which is ' + (this.verbalC - this.verbalT).toString(10).bold()
            + ' points higher than your target verbal score of V' + this.verbalT.toString(10) + '.';
            everbal.innerHTML = verbalcolumn;
          } else if (this.verbalC === this.verbalT) {
            verbalcolumn = 'Your estimated verbal score per your performance in this mock test is V' +
            this.verbalC.toString(10) + ' which is equal to your target score.';
            everbal.innerHTML = verbalcolumn;
          } else {
            verbalcolumn = 'Your estimated verbal score per your performance in this mock test is V' +
            this.verbalC + ' which is ' + (this.verbalT - this.verbalC).toString(10).bold()
            + ' points lower than your target verbal score of V' + this.verbalT.toString(10) + '.';
            everbal.innerHTML = verbalcolumn;
          }

      }
    }


}
}
}
