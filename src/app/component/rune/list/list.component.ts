import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { RuneService } from '../../../services/rune.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  isVisible = false;
  isLoading = false;
  monsters = [];
  runeTypes = [];
  runeProperties = [];
  selectedMonster = {};
  resultData = [];
  detailData = {
    hp: null,
    atk: null,
    def: null,
    spd: null,
    criRate: null,
    criDmg: null,
    resistance: null,
    spaccuracyd: null,
    monster: {
      name: null,
      hp: null,
      atk: null,
      def: null,
      spd: null,
      criRate: null,
      criDmg: null,
      resistance: null,
      spaccuracyd: null
    },
    rune1: {runeTypeCn: null, mainPropertyCn: null, subPropertyCn: null, firstPropertyCn: null, secondPropertyCn: null, thirdPropertyCn: null, fourthPropertyCn: null},
    rune2: {runeTypeCn: null, mainPropertyCn: null, subPropertyCn: null, firstPropertyCn: null, secondPropertyCn: null, thirdPropertyCn: null, fourthPropertyCn: null},
    rune3: {runeTypeCn: null, mainPropertyCn: null, subPropertyCn: null, firstPropertyCn: null, secondPropertyCn: null, thirdPropertyCn: null, fourthPropertyCn: null},
    rune4: {runeTypeCn: null, mainPropertyCn: null, subPropertyCn: null, firstPropertyCn: null, secondPropertyCn: null, thirdPropertyCn: null, fourthPropertyCn: null},
    rune5: {runeTypeCn: null, mainPropertyCn: null, subPropertyCn: null, firstPropertyCn: null, secondPropertyCn: null, thirdPropertyCn: null, fourthPropertyCn: null},
    rune6: {runeTypeCn: null, mainPropertyCn: null, subPropertyCn: null, firstPropertyCn: null, secondPropertyCn: null, thirdPropertyCn: null, fourthPropertyCn: null}
  };

  info = {
    selectedMonsterId: null,
    firstRuneType: null,
    secondRuneType: null,
    thirdRuneType: null,
    secondRuneProperties: null,
    fourthRuneProperties: null,
    sixthRuneProperties: null,
    focusProperties: null,
    hpMin: null,
    hpMax: null,
    atkMin: null,
    atkMax: null,
    defMin: null,
    defMax: null,
    spdMin: null,
    spdMax: null,
    criRateMin: null,
    criRateMax: null,
    criDmgMin: null,
    criDmgMax: null,
    resistanceMin: null,
    resistanceMax: null,
    accuracyMin: null,
    accuracyMax: null
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
    this.runeService.getAllMonster().subscribe(res => {
      this.monsters = res.data;
    });
  }

  selectMonster(id): void {
    console.log(id);
    this.monsters.forEach(monster => {
      if (id == monster.id) {
        this.selectedMonster = monster;
      }
    });
    console.log(this.selectedMonster);
  }

  doFilter(): void {
    this.isLoading = true;
    if (!this.checkSelected()) {
      this.isLoading = false;
      return;
    }
    console.log(this.info);
    this.runeService.filterRunes(this.info).subscribe(res => {
      this.isLoading = false;
      console.log(res);
      this.resultData = res.data;
      if (res.errCode == 400102)
        this.message.error(res.errMsg);
    });
  }

  checkSelected(): boolean {
    let flag = false;
    if (this.info.selectedMonsterId == null) {
      this.message.error('请先选择魔灵');
      return flag;
    }
    let isSet = false;
    for (let key in this.info) {
      if (key != 'selectedMonsterId' && this.info[key] != null) {
        isSet = true;
        break;
      }
    }
    if (!isSet) {
      this.message.error('请至少设置一个过滤条件');
      return flag;
    }
    flag = true;
    return flag;
  }

  suitRune(data): void {
    console.log(data);
  }

  viewDetail(data): void {
    console.log(data);
    this.detailData = data;
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    this.isVisible = false;
  }
}
