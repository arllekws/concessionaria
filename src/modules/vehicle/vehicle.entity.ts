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
import { User } from '../user/user.entity';
import { CarModel } from '../car-model/car-model.entity';

@Table({
  tableName: 'vehicle',
  timestamps: true,
})
export class Vehicle extends Model<Vehicle> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public vehicle_id: string;

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
  license_plate: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  manufacture_year: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  mileage: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  user_id: string
  
  @BelongsTo(() => User)
  user: User

  @ForeignKey(() => CarModel)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  car_model_id: string
  
  @BelongsTo(() => CarModel)
  car_model: CarModel
}
