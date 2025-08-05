import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Brand } from '../brand/brand.entity';

@Table({
  tableName: 'car_model',
  timestamps: true,
})
export class CarModel extends Model<CarModel> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public car_model_id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
  })
  number: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  describe: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  active: boolean;

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  brand_id: string;

  @BelongsTo(() => Brand)
  brand: Brand;
}
