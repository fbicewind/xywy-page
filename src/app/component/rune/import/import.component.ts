import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { RuneService } from '../../../services/rune.service'

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  saveFlag = false;
  runePosition = [{ label: "1号位", value: 1 }, { label: "2号位", value: 2 }, { label: "3号位", value: 3 }, { label: "4号位", value: 4 }, { label: "5号位", value: 5 }, { label: "6号位", value: 6 }];
  runeTypes = [];
  runeProperties = [];

  info = {
    runeType: null,
    position: null,
    mainProperty: null,
    mainPropertyValue: null,
    subProperty: null,
    subPropertyValue: null,
    firstProperty: null,
    firstPropertyValue: null,
    secondProperty: null,
    secondPropertyValue: null,
    thirdProperty: null,
    thirdPropertyValue: null,
    fourthProperty: null,
    fourthPropertyValue: null
  }

  constructor(private runeService: RuneService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.runeService.getAllRuneType().subscribe(res => {
      console.log(res);
      this.runeTypes = res.data;
    });
    this.runeService.getAllRunPropertyType().subscribe(res => {
      console.log(res);
      this.runeProperties = res.data;
    });
  }

  submitForm(): void {
    this.saveFlag = true;
    if (!this.checkForm()) {
      this.saveFlag = false;
      return;
    }
    console.log(this.info);
    this.runeService.saveRune(this.info).subscribe(res => {
      console.log(res);
      this.clearForm();
      this.saveFlag = false;
      this.message.success('保存成功');
    });
  }

  checkForm(): boolean {
    let flag = false;
    if (this.info.runeType == null) {
      this.message.error('请选择符文类型!');
      return flag;
    }
    if (this.info.position == null) {
      this.message.error('请选择符文位置!');
      return flag;
    }
    if (this.info.mainProperty == null) {
      this.message.error('请选择符文主属性!');
      return flag;
    }
    if (this.info.mainPropertyValue == null) {
      this.message.error('请输入符文主属性数值!');
      return flag;
    }
    if (this.info.firstProperty == null) {
      this.message.error('请选择符文属性1!');
      return flag;
    }
    if (this.info.firstPropertyValue == null) {
      this.message.error('请输入符文属性1数值!');
      return flag;
    }
    if (this.info.secondProperty == null) {
      this.message.error('请选择符文属性2!');
      return flag;
    }
    if (this.info.secondPropertyValue == null) {
      this.message.error('请输入符文属性2数值!');
      return flag;
    }
    if (this.info.thirdProperty == null) {
      this.message.error('请选择符文属性3!');
      return flag;
    }
    if (this.info.thirdPropertyValue == null) {
      this.message.error('请输入符文属性3数值!');
      return flag;
    }
    if (this.info.fourthProperty == null) {
      this.message.error('请选择符文属性4!');
      return flag;
    }
    if (this.info.fourthPropertyValue == null) {
      this.message.error('请输入符文属性4数值!');
      return flag;
    }
    if (this.info.subProperty != null && this.info.subPropertyValue == null) {
      this.message.error('当前已选择符文前缀属性，请输入前缀属性数值!');
      return flag;
    }
    if (this.info.subProperty == null && this.info.subPropertyValue != null) {
      this.message.error('当前设置符文前缀属性值，请选择符文前缀属性!');
      return flag;
    }
    flag = true;
    return flag;
  }

  clearForm(): void {
    this.info = {
      runeType: null,
      position: null,
      mainProperty: null,
      mainPropertyValue: null,
      subProperty: null,
      subPropertyValue: null,
      firstProperty: null,
      firstPropertyValue: null,
      secondProperty: null,
      secondPropertyValue: null,
      thirdProperty: null,
      thirdPropertyValue: null,
      fourthProperty: null,
      fourthPropertyValue: null
    }
  }

  handleChange(info: { file: UploadFile, fileList }): void {
    if (info.file.status === 'uploading') {
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.file.response);
    }
  }
}
